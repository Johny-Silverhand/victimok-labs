"use client";

import { useActionState } from "react";
import {
  changePasswordAction,
  createRequestAction,
  updateProfileAction,
} from "@/lib/actions";

type RequestItem = {
  id: string;
  title: string;
  details: string;
  status: string;
  createdAt: string;
};

type Props = {
  user: { name: string; email: string; phone: string };
  requests: RequestItem[];
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("ru-RU", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function CabinetClient({ user, requests }: Props) {
  const [profile, saveProfile, profilePending] = useActionState(updateProfileAction, null);
  const [password, savePassword, passwordPending] = useActionState(changePasswordAction, null);
  const [request, saveRequest, requestPending] = useActionState(createRequestAction, null);

  return (
    <div className="cabinet-grid">
      <section className="cabinet-card">
        <h2>Профиль</h2>
        <p className="cabinet-note">Почта меняется только через поддержку — она ваш логин.</p>
        <form action={saveProfile} className="auth-form">
          <label className="auth-label">
            Имя
            <input className="auth-input" type="text" name="name" defaultValue={user.name} required minLength={2} />
          </label>
          <label className="auth-label">
            Почта
            <input className="auth-input" type="email" value={user.email} disabled readOnly />
          </label>
          <label className="auth-label">
            Телефон
            <input className="auth-input" type="tel" name="phone" defaultValue={user.phone} placeholder="+7 …" />
          </label>
          {profile?.error ? <p className="auth-error">{profile.error}</p> : null}
          {profile?.ok ? <p className="auth-ok">Сохранили.</p> : null}
          <button type="submit" className="cyber-btn" disabled={profilePending}>
            {profilePending ? "Сохраняем…" : "Сохранить профиль"}
          </button>
        </form>
      </section>

      <section className="cabinet-card">
        <h2>Пароль</h2>
        <form action={savePassword} className="auth-form">
          <label className="auth-label">
            Текущий пароль
            <input className="auth-input" type="password" name="current" autoComplete="current-password" required />
          </label>
          <label className="auth-label">
            Новый пароль
            <input className="auth-input" type="password" name="next" autoComplete="new-password" required minLength={8} />
          </label>
          <label className="auth-label">
            Повторите новый
            <input className="auth-input" type="password" name="confirm" autoComplete="new-password" required minLength={8} />
          </label>
          {password?.error ? <p className="auth-error">{password.error}</p> : null}
          {password?.ok ? <p className="auth-ok">Пароль обновлён.</p> : null}
          <button type="submit" className="cyber-btn-secondary" disabled={passwordPending} style={{ width: "100%" }}>
            {passwordPending ? "Меняем…" : "Сменить пароль"}
          </button>
        </form>
      </section>

      <section className="cabinet-card cabinet-wide">
        <h2>Новая заявка</h2>
        <p className="cabinet-note">Ремонт, сайт, приложение или дрон — напишите своими словами. Мы ответим и обновим статус здесь.</p>
        <form action={saveRequest} className="auth-form">
          <label className="auth-label">
            Тема
            <input className="auth-input" type="text" name="title" placeholder="Например: не включается ноутбук" required minLength={3} />
          </label>
          <label className="auth-label">
            Что случилось
            <textarea className="auth-input auth-textarea" name="details" rows={5} required minLength={10} placeholder="Модель, что пробовали, что нужно на выходе." />
          </label>
          {request?.error ? <p className="auth-error">{request.error}</p> : null}
          {request?.ok ? <p className="auth-ok">Заявку приняли. Она появилась в списке ниже.</p> : null}
          <button type="submit" className="cyber-btn" disabled={requestPending}>
            {requestPending ? "Отправляем…" : "Отправить заявку"}
          </button>
        </form>
      </section>

      <section className="cabinet-card cabinet-wide">
        <h2>Мои заявки</h2>
        {requests.length === 0 ? (
          <p className="cabinet-empty">Заявок пока нет. Оставьте первую формой выше — или напишите в Telegram.</p>
        ) : (
          <ul className="request-list">
            {requests.map((item) => (
              <li key={item.id} className="request-item">
                <div className="request-top">
                  <strong>{item.title}</strong>
                  <span className="request-status">{item.status}</span>
                </div>
                <p>{item.details}</p>
                <time>{formatDate(item.createdAt)}</time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
