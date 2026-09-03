"use client";

import { logoutAction } from "@/lib/actions";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit" className="glass-btn">
        Выйти
      </button>
    </form>
  );
}
