"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginAction } from "@/lib/actions";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, null);

  return (
    <form action={action} className="auth-form">
      <label className="auth-label">
        Почта
        <input className="auth-input" type="email" name="email" autoComplete="email" required />
      </label>
      <label className="auth-label">
        Пароль
        <input className="auth-input" type="password" name="password" autoComplete="current-password" required />
      </label>
      {state?.error ? <p className="auth-error">{state.error}</p> : null}
      <button type="submit" className="cyber-btn" disabled={pending} style={{ width: "100%" }}>
        {pending ? "Входим…" : "Войти"}
      </button>
      <p className="auth-switch">
        Нет аккаунта? <Link href="/register">Зарегистрироваться</Link>
      </p>
    </form>
  );
}
