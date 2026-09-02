"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactModal } from "@/app/ContactModal";

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "Магазин", href: "/shop" },
  { name: "Услуги", href: "/services" },
];

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="cyber-navbar">
        <div className="navbar-container">
          <Link href="/" className="navbar-brand">
            VICTIM<span className="navbar-brand-eye">👁</span>K LABS
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="glass-btn">
                {link.name}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="glass-btn"
            >
              Связаться с нами
            </button>

            <Link href="/dashboard" className="glass-btn-active">
              Личный кабинет
            </Link>
          </div>
        </div>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
