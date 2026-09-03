"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerAction } from "@/lib/actions";

export function RegisterForm() {
  const [state, action, pending] = useActionState(registerAction, null);

  return (
    <form action={action} className="auth-form">
      <label className="auth-label">
        Имя
        <input className="auth-input" type="text" name="name" autoComplete="name" required minLength={2} />
      </label>
      <label className="auth-label">
        Почта
        <input className="auth-input" type="email" name="email" autoComplete="email" required />
      </label>
      <label className="auth-label">
        Телефон <span className="auth-optional">необязательно</span>
        <input className="auth-input" type="tel" name="phone" autoComplete="tel" placeholder="+7 …" />
      </label>
      <label className="auth-label">
        Пароль
        <input className="auth-input" type="password" name="password" autoComplete="new-password" required minLength={8} />
      </label>
      <label className="auth-label">
        Повторите пароль
        <input className="auth-input" type="password" name="confirm" autoComplete="new-password" required minLength={8} />
      </label>
      {state?.error ? <p className="auth-error">{state.error}</p> : null}
      <button type="submit" className="cyber-btn" disabled={pending} style={{ width: "100%" }}>
        {pending ? "Создаём…" : "Создать аккаунт"}
      </button>
      <p className="auth-switch">
        Уже есть аккаунт? <Link href="/login">Войти</Link>
      </p>
    </form>
  );
}
