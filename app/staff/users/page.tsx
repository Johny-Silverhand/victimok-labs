import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/roles";
import { PeopleClient } from "./PeopleClient";

export default async function StaffUsersPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const me = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!me || !isAdmin(me.role)) redirect("/dashboard");

  const people = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      createdAt: true,
    },
  });

  return (
    <div className="page-shell" style={{ alignItems: "stretch", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="page-header">
        <div className="home-node">// ЛЮДИ</div>
        <h1 className="page-title">Пользователи и роли</h1>
        <p style={{ color: "#9ca3af", maxWidth: "640px", margin: "0 auto", fontSize: "14px", lineHeight: 1.6 }}>
          Назначайте модераторов и администраторов. Последнего администратора снять нельзя.
        </p>
        <p className="staff-links">
          <Link href="/dashboard">Кабинет</Link>
          {" · "}
          <Link href="/staff/requests">Заявки</Link>
        </p>
      </div>
      <PeopleClient
        people={people.map((item) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          phone: item.phone ?? "",
          role: item.role,
          createdAt: item.createdAt.toISOString(),
        }))}
      />
    </div>
  );
}
