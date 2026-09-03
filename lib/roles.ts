export const ROLES = ["user", "moderator", "admin"] as const;
export type Role = (typeof ROLES)[number];

export const REQUEST_STATUSES = [
  "новая",
  "в работе",
  "нужна информация",
  "выполнена",
  "отменена",
] as const;
export type RequestStatus = (typeof REQUEST_STATUSES)[number];

export function isRole(value: string): value is Role {
  return (ROLES as readonly string[]).includes(value);
}

export function isStaff(role?: string | null) {
  return role === "moderator" || role === "admin";
}

export function isAdmin(role?: string | null) {
  return role === "admin";
}

export function roleLabel(role?: string | null) {
  if (role === "admin") return "Администратор";
  if (role === "moderator") return "Модератор";
  return "Пользователь";
}

export function isBootstrapAdmin(email: string) {
  const wanted = (process.env.ADMIN_EMAIL ?? "")
    .split(",")
    .map((item) => item.toLowerCase().trim())
    .filter(Boolean);
  return wanted.includes(email.toLowerCase().trim());
}

export function isRequestStatus(value: string): value is RequestStatus {
  return (REQUEST_STATUSES as readonly string[]).includes(value);
}
