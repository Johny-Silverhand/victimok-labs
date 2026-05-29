"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactModal } from "@/app/ContactModal";

 // Импортируем отдельный файл окна

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "Магазин", href: "/shop" },
  { name: "Услуги", href: "/services" },
];

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Стили вынесены в константы внутри файла, чтобы не засорять JSX разметку
  const regularGlassStyle = {
    color: '#d1d5db',
    background: 'rgba(0, 242, 255, 0.03)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(0, 242, 255, 0.15)',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 6px rgba(0, 0, 0, 0.2)',
    textDecoration: 'none',
    fontSize: '13px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    fontWeight: 600,
    padding: '9px 18px',
    borderRadius: '8px',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-block',
    cursor: 'pointer'
  };

  const actionGlassStyle = {
    color: '#0a0a0a',
    background: 'rgba(0, 242, 255, 0.85)',
    backdropFilter: 'blur(8px)',
    border: '1px solid #00f2ff',
    boxShadow: '0 0 15px rgba(0, 242, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    textDecoration: 'none',
    fontSize: '13px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    fontWeight: 700,
    padding: '10px 22px',
    borderRadius: '8px',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-block'
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        borderBottom: '1px solid rgba(0, 242, 255, 0.2)',
        background: 'rgba(5, 5, 8, 0.75)',
        backdropFilter: 'blur(12px)',
        padding: '15px 40px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1300px',
          margin: '0 auto'
        }}>
          
          {/* Бренд */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              color: '#ffffff',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              fontSize: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              VICTIM<span style={{ color: '#00f2ff', filter: 'drop-shadow(0 0 8px rgba(0, 242, 255, 0.6))' }}>👁</span>K LABS
            </span>
          </Link>
          
          {/* Навигационные Стеклянные Кнопки */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Рендерим стандартные страницы */}
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} style={regularGlassStyle} className="glass-btn">
                {link.name}
              </Link>
            ))}

            {/* Отдельная кнопка-модификатор для вызова окна (Без тега Link) */}
            <button 
              onClick={() => setIsModalOpen(true)} 
              style={regularGlassStyle} 
              className="glass-btn"
            >
              Связаться с нами
            </button>

            {/* Акцентная кнопка ЛК */}
            <Link href="/dashboard" style={actionGlassStyle} className="glass-btn-active">
              Личный кабинет
            </Link>
          </div>

        </div>
      </nav>

      {/* Вызов изолированного окна связи */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
