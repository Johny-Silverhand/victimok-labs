import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isAdmin, isStaff } from "@/lib/roles";
import { InboxClient } from "./InboxClient";

export default async function StaffRequestsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const me = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!me || !isStaff(me.role)) redirect("/dashboard");

  const requests = await prisma.request.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true, phone: true } },
    },
  });

  return (
    <div className="page-shell" style={{ alignItems: "stretch", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="page-header">
        <div className="home-node">// ЗАЯВКИ</div>
        <h1 className="page-title">Входящие заявки</h1>
        <p style={{ color: "#9ca3af", maxWidth: "640px", margin: "0 auto", fontSize: "14px", lineHeight: 1.6 }}>
          Все обращения клиентов. Меняйте статус, когда берёте работу или заканчиваете.
        </p>
        <p className="staff-links">
          <Link href="/dashboard">Кабинет</Link>
          {isAdmin(me.role) ? (
            <>
              {" · "}
              <Link href="/staff/users">Люди</Link>
            </>
          ) : null}
        </p>
      </div>
      <InboxClient
        requests={requests.map((item) => ({
          id: item.id,
          title: item.title,
          details: item.details,
          status: item.status,
          createdAt: item.createdAt.toISOString(),
          client: {
            name: item.user.name,
            email: item.user.email,
            phone: item.user.phone ?? "",
          },
        }))}
      />
    </div>
  );
}
