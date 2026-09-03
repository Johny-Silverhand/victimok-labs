"use server";

import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { auth, signIn, signOut } from "@/lib/auth";
import { isAdmin, isBootstrapAdmin, isRequestStatus, isRole, isStaff } from "@/lib/roles";

function clean(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function registerAction(_prev: { error?: string } | null, formData: FormData) {
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email")).toLowerCase();
  const phone = clean(formData.get("phone"));
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (name.length < 2) return { error: "Укажите имя — хотя бы два символа." };
  if (!validEmail(email)) return { error: "Похоже, почта написана с ошибкой." };
  if (password.length < 8) return { error: "Пароль должен быть не короче 8 символов." };
  if (password !== confirm) return { error: "Пароли не совпадают." };

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return { error: "Такая почта уже зарегистрирована. Войдите." };

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: {
      name,
      email,
      phone: phone || null,
      passwordHash,
      role: isBootstrapAdmin(email) ? "admin" : "user",
    },
  });

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Аккаунт создан, но войти не вышло. Попробуйте страницу входа." };
    }
    throw error;
  }
  return { error: "" };
}

export async function loginAction(_prev: { error?: string } | null, formData: FormData) {
  const email = clean(formData.get("email")).toLowerCase();
  const password = String(formData.get("password") ?? "");
  if (!validEmail(email) || !password) {
    return { error: "Введите почту и пароль." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Неверная почта или пароль." };
    }
    throw error;
  }
  return { error: "" };
}

export async function logoutAction() {
  await signOut({ redirectTo: "/" });
}

async function requireUser() {
  const session = await auth();
  const id = session?.user?.id;
  if (!id) redirect("/login");
  return id;
}

async function requireStaffUser() {
  const id = await requireUser();
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user || !isStaff(user.role)) redirect("/dashboard");
  return user;
}

async function requireAdminUser() {
  const user = await requireStaffUser();
  if (!isAdmin(user.role)) redirect("/dashboard");
  return user;
}

export async function updateProfileAction(_prev: { error?: string; ok?: boolean } | null, formData: FormData) {
  const userId = await requireUser();
  const name = clean(formData.get("name"));
  const phone = clean(formData.get("phone"));
  if (name.length < 2) return { error: "Укажите имя — хотя бы два символа." };

  await prisma.user.update({
    where: { id: userId },
    data: { name, phone: phone || null },
  });
  return { ok: true, error: "" };
}

export async function changePasswordAction(_prev: { error?: string; ok?: boolean } | null, formData: FormData) {
  const userId = await requireUser();
  const current = String(formData.get("current") ?? "");
  const next = String(formData.get("next") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (next.length < 8) return { error: "Новый пароль должен быть не короче 8 символов." };
  if (next !== confirm) return { error: "Новые пароли не совпадают." };

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) redirect("/login");
  const ok = await bcrypt.compare(current, user.passwordHash);
  if (!ok) return { error: "Старый пароль не подходит." };

  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash: await bcrypt.hash(next, 12) },
  });
  return { ok: true, error: "" };
}

export async function createRequestAction(_prev: { error?: string; ok?: boolean } | null, formData: FormData) {
  const userId = await requireUser();
  const title = clean(formData.get("title"));
  const details = clean(formData.get("details"));
  if (title.length < 3) return { error: "Напишите коротко, что нужно — хотя бы несколько слов." };
  if (details.length < 10) return { error: "Добавьте пару предложений: что сломалось или какой софт нужен." };

  await prisma.request.create({
    data: { userId, title, details },
  });
  return { ok: true, error: "" };
}

export async function updateRequestStatusAction(
  _prev: { error?: string; ok?: boolean } | null,
  formData: FormData,
) {
  await requireStaffUser();
  const id = clean(formData.get("id"));
  const status = clean(formData.get("status"));
  if (!id) return { error: "Заявка не найдена." };
  if (!isRequestStatus(status)) return { error: "Такого статуса нет." };

  await prisma.request.update({ where: { id }, data: { status } });
  return { ok: true, error: "" };
}

export async function updateUserRoleAction(
  _prev: { error?: string; ok?: boolean } | null,
  formData: FormData,
) {
  const actor = await requireAdminUser();
  const id = clean(formData.get("id"));
  const role = clean(formData.get("role"));
  if (!id) return { error: "Человек не найден." };
  if (!isRole(role)) return { error: "Такой роли нет." };

  const target = await prisma.user.findUnique({ where: { id } });
  if (!target) return { error: "Человек не найден." };

  if (target.role === "admin" && role !== "admin") {
    const admins = await prisma.user.count({ where: { role: "admin" } });
    if (admins <= 1) {
      return { error: "Нельзя снять последнего администратора." };
    }
  }

  if (actor.id === target.id && role !== "admin") {
    const admins = await prisma.user.count({ where: { role: "admin" } });
    if (admins <= 1) {
      return { error: "Нельзя снять роль с самого себя, пока вы единственный администратор." };
    }
  }

  await prisma.user.update({ where: { id }, data: { role } });
  return { ok: true, error: "" };
}
