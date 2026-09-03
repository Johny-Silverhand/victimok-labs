"use client";

import { useActionState } from "react";
import { updateRequestStatusAction } from "@/lib/actions";
import { REQUEST_STATUSES } from "@/lib/roles";

type Item = {
  id: string;
  title: string;
  details: string;
  status: string;
  createdAt: string;
  client: { name: string; email: string; phone: string };
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

export function InboxClient({ requests }: { requests: Item[] }) {
  const [result, saveStatus, pending] = useActionState(updateRequestStatusAction, null);

  if (requests.length === 0) {
    return (
      <section className="cabinet-card cabinet-wide">
        <p className="cabinet-empty">Заявок пока нет.</p>
      </section>
    );
  }

  return (
    <section className="cabinet-card cabinet-wide">
      {result?.error ? <p className="auth-error">{result.error}</p> : null}
      {result?.ok ? <p className="auth-ok">Статус сохранили.</p> : null}
      <ul className="request-list">
        {requests.map((item) => (
          <li key={item.id} className="request-item">
            <div className="request-top">
              <strong>{item.title}</strong>
              <span className="request-status">{item.status}</span>
            </div>
            <p>{item.details}</p>
            <p className="request-client">
              {item.client.name} · {item.client.email}
              {item.client.phone ? ` · ${item.client.phone}` : ""}
            </p>
            <time>{formatDate(item.createdAt)}</time>
            <form action={saveStatus} className="staff-inline-form">
              <input type="hidden" name="id" value={item.id} />
              <label className="auth-label">
                Статус
                <select className="auth-input" name="status" defaultValue={item.status}>
                  {REQUEST_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="cyber-btn-secondary" disabled={pending}>
                {pending ? "Сохраняем…" : "Обновить"}
              </button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
}
