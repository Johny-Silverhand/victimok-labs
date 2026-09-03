"use client";

import { useActionState } from "react";
import { updateUserRoleAction } from "@/lib/actions";
import { ROLES, roleLabel } from "@/lib/roles";

type Person = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("ru-RU", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function PeopleClient({ people }: { people: Person[] }) {
  const [result, saveRole, pending] = useActionState(updateUserRoleAction, null);

  return (
    <section className="cabinet-card cabinet-wide">
      {result?.error ? <p className="auth-error">{result.error}</p> : null}
      {result?.ok ? <p className="auth-ok">Роль сохранили.</p> : null}
      <ul className="request-list">
        {people.map((person) => (
          <li key={person.id} className="request-item">
            <div className="request-top">
              <strong>{person.name}</strong>
              <span className="request-status">{roleLabel(person.role)}</span>
            </div>
            <p className="request-client">
              {person.email}
              {person.phone ? ` · ${person.phone}` : ""}
            </p>
            <time>{formatDate(person.createdAt)}</time>
            <form action={saveRole} className="staff-inline-form">
              <input type="hidden" name="id" value={person.id} />
              <label className="auth-label">
                Роль
                <select className="auth-input" name="role" defaultValue={person.role}>
                  {ROLES.map((role) => (
                    <option key={role} value={role}>
                      {roleLabel(role)}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="cyber-btn-secondary" disabled={pending}>
                {pending ? "Сохраняем…" : "Назначить"}
              </button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
}
