"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ContactModal } from "@/app/ContactModal";
import { LogoutButton } from "@/components/LogoutButton";
import { isAdmin, isStaff } from "@/lib/roles";

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "Магазин", href: "/shop" },
  { name: "Услуги", href: "/services" },
];

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session, status } = useSession();
  const loggedIn = status === "authenticated" && Boolean(session?.user);
  const role = session?.user?.role;
  const staff = isStaff(role);
  const admin = isAdmin(role);

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

            {loggedIn ? (
              <>
                <Link href="/dashboard" className="glass-btn-active">
                  Кабинет
                </Link>
                {staff ? (
                  <Link href="/staff/requests" className="glass-btn">
                    Заявки
                  </Link>
                ) : null}
                {admin ? (
                  <Link href="/staff/users" className="glass-btn">
                    Люди
                  </Link>
                ) : null}
                <LogoutButton />
              </>
            ) : (
              <Link href="/login" className="glass-btn-active">
                Войти
              </Link>
            )}
          </div>
        </div>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
