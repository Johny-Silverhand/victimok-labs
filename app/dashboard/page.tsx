"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <main style={{ 
      backgroundColor: "#060608", 
      color: "#fff", 
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      
      {/* Стеклянная карточка-заглушка терминала ЛК */}
      <div style={{
        background: "rgba(10, 10, 15, 0.5)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(168, 85, 247, 0.25)", /* Сделали рамку в фиолетовом оттенке акцента */
        borderRadius: "16px",
        padding: "50px 40px",
        maxWidth: "550px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 20px 50px rgba(168, 85, 247, 0.05), 0 0 30px rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box"
      }}>
        
        {/* Индикатор защищенного соединения */}
        <div style={{
          width: "12px",
          height: "12px",
          background: "#a855f7",
          borderRadius: "50%",
          margin: "0 auto 20px auto",
          boxShadow: "0 0 12px #a855f7",
          animation: "pulse 2s infinite" /* Мигающий огонек */
        }}></div>

        {/* Заголовок статуса */}
        <h1 style={{ 
          fontSize: "26px", 
          fontWeight: 950, 
          letterSpacing: "0.15em", 
          textTransform: "uppercase", 
          margin: "0 0 10px 0",
          color: "#fff"
        }}>
          ЛИЧНЫЙ КАБИНЕТ
        </h1>
        
        <div style={{ 
          color: "#a855f7", 
          fontFamily: "monospace", 
          fontSize: "11px", 
          letterSpacing: "0.25em", 
          marginBottom: "25px" 
        }}>
          // CORE: ACCESS_DENIED // USER_AUTH_SYSTEM_OFFLINE
        </div>

        {/* Текстовое описание */}
        <p style={{ 
          color: "#9ca3af", 
          fontSize: "14px", 
          lineHeight: "1.7", 
          margin: "0 0 35px 0",
          textAlign: "left",
          background: "rgba(168, 85, 247, 0.02)",
          borderLeft: "3px solid #a855f7",
          padding: "15px 20px",
          borderRadius: "0 8px 8px 0"
        }}>
          Протокол авторизации находится на стадии закрытого бета-тестирования. Инженерная группа ведет сборку серверной архитектуры, безопасных JWT-сессий и базы данных пользователей. В скором времени здесь будет доступно отслеживание стадий компонентного ремонта электроники, калибровки БПЛА и управление софтверными лицензиями.
        </p>

        {/* Кнопка возврата на главную */}
        <Link 
          href="/" 
          style={{
            color: "#0a0a0a",
            background: "rgba(168, 85, 247, 0.85)",
            border: "1px solid #a855f7",
            boxShadow: "0 0 15px rgba(168, 85, 247, 0.25)",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 700,
            padding: "12px 28px",
            borderRadius: "8px", /* Фирменное закругление */
            textDecoration: "none",
            display: "inline-block",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 1)";
            e.currentTarget.style.boxShadow = "0 0 25px rgba(168, 85, 247, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(168, 85, 247, 0.85)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.25)";
          }}
        >
          Вернуться на главную
        </Link>

      </div>
    </main>
  );
}
