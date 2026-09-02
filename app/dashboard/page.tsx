"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div
      className="page-shell"
      style={{
        justifyContent: "center",
        minHeight: "70vh",
      }}
    >
      <div className="stub-card">
        <div
          style={{
            width: "12px",
            height: "12px",
            background: "#a855f7",
            borderRadius: "50%",
            margin: "0 auto 20px auto",
            boxShadow: "0 0 12px #a855f7",
          }}
        />

        <h1 className="page-title" style={{ fontSize: "clamp(1.4rem, 5vw, 26px)" }}>
          ЛИЧНЫЙ КАБИНЕТ
        </h1>

        <div
          style={{
            color: "#a855f7",
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "0.18em",
            marginBottom: "25px",
            overflowWrap: "anywhere",
          }}
        >
          // CORE: ACCESS_DENIED // USER_AUTH_SYSTEM_OFFLINE
        </div>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            lineHeight: "1.7",
            margin: "0 0 35px 0",
            textAlign: "left",
            background: "rgba(168, 85, 247, 0.02)",
            borderLeft: "3px solid #a855f7",
            padding: "15px 20px",
            borderRadius: "0 8px 8px 0",
          }}
        >
          Протокол авторизации находится на стадии закрытого бета-тестирования.
          Инженерная группа ведет сборку серверной архитектуры, безопасных
          JWT-сессий и базы данных пользователей. В скором времени здесь будет
          доступно отслеживание стадий компонентного ремонта электроники,
          калибровки БПЛА и управление софтверными лицензиями.
        </p>

        <Link href="/" className="glass-btn-active">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
