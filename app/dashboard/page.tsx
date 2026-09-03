import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CabinetClient } from "./CabinetClient";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { requests: { orderBy: { createdAt: "desc" } } },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="page-shell" style={{ alignItems: "stretch", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="page-header">
        <div className="home-node">// ЛИЧНЫЙ КАБИНЕТ</div>
        <h1 className="page-title">Привет, {user.name}</h1>
        <p style={{ color: "#9ca3af", maxWidth: "640px", margin: "0 auto", fontSize: "14px", lineHeight: 1.6 }}>
          Здесь ваши данные и заявки. Статус обновляем мы, когда берём работу в работу или заканчиваем.
        </p>
      </div>
      <CabinetClient
        user={{ name: user.name, email: user.email, phone: user.phone ?? "" }}
        requests={user.requests.map((item) => ({
          id: item.id,
          title: item.title,
          details: item.details,
          status: item.status,
          createdAt: item.createdAt.toISOString(),
        }))}
      />
    </div>
  );
}
