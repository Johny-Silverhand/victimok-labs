"use server";

import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { auth, signIn, signOut } from "@/lib/auth";

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
