"use client";

import Link from "next/link";

export default function ShopPage() {
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
      
      {/* Стеклянная карточка-заглушка */}
      <div style={{
        background: "rgba(10, 10, 15, 0.5)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(0, 242, 255, 0.2)",
        borderRadius: "16px",
        padding: "50px 40px",
        maxWidth: "550px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 20px 50px rgba(0, 242, 255, 0.05), 0 0 30px rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box"
      }}>
        
        {/* Анимированный лоадер/радар в стиле киберпанк */}
        <div style={{
          width: "60px",
          height: "60px",
          border: "2px style solid transparent",
          borderTop: "2px solid #00f2ff",
          borderBottom: "2px solid #00f2ff",
          borderRadius: "50%",
          margin: "0 auto 30px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 15px rgba(0, 242, 255, 0.2)"
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            border: "2px solid transparent",
            borderLeft: "2px solid #a855f7",
            borderRight: "2px solid #a855f7",
            borderRadius: "50%"
          }}></div>
        </div>

        {/* Заголовок статуса */}
        <h1 style={{ 
          fontSize: "26px", 
          fontWeight: 950, 
          letterSpacing: "0.15em", 
          textTransform: "uppercase", 
          margin: "0 0 10px 0",
          color: "#fff"
        }}>
          МОДУЛЬ МАГАЗИНА
        </h1>
        
        <div style={{ 
          color: "#00f2ff", 
          fontFamily: "monospace", 
          fontSize: "11px", 
          letterSpacing: "0.25em", 
          marginBottom: "25px" 
        }}>
          // STATUS: UNDER_DEVELOPMENT_v0.1
        </div>

        {/* Текстовое описание */}
        <p style={{ 
          color: "#9ca3af", 
          fontSize: "14px", 
          lineHeight: "1.7", 
          margin: "0 0 35px 0",
          textAlign: "left",
          background: "rgba(0, 242, 255, 0.01)",
          borderLeft: "3px solid #00f2ff",
          padding: "15px 20px",
          borderRadius: "0 8px 8px 0"
        }}>
          Доступ к торговому шлюзу временно ограничен. В данный момент инженерный сектор производит заливку баз данных, интеграцию платежных крипто-протоколов и каталогизацию кастомных FPV-комплектующих, софта и девайсов.
        </p>

        {/* Кнопка возврата на главную */}
        <Link 
  href="/" 
  style={{
    color: '#ffffff',
    background: 'rgba(20, 10, 40, 0.9)', /* Темно-фиолетовый фон */
    backdropFilter: 'blur(8px)',
    border: '1px solid #7c3aed', /* Фиолетовая рамка */
    boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)', /* Мягкое фиолетовое свечение */
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontWeight: 700,
    padding: '12px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = '#ffffff';
    e.currentTarget.style.background = '#6d28d9'; /* Насыщенный фиолетовый при наведении */
    e.currentTarget.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = '#ffffff';
    e.currentTarget.style.background = 'rgba(20, 10, 40, 0.9)';
    e.currentTarget.style.boxShadow = '0 0 15px rgba(124, 58, 237, 0.3)';
  }}
>
  Вернуться на главную
</Link>




      </div>
    </main>
  );
}
