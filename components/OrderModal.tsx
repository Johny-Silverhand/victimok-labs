"use client";

import { useActionState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { createCatalogRequestAction } from "@/lib/actions";

export type CatalogItem = {
  name: string;
  price: string;
  source: "услуги" | "магазин";
};

type Props = {
  item: CatalogItem | null;
  onClose: () => void;
};

export function OrderModal({ item, onClose }: Props) {
  const { data: session } = useSession();
  const [result, submit, pending] = useActionState(createCatalogRequestAction, null);

  useEffect(() => {
    if (!item) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  if (!item) return null;

  const heading = item.source === "магазин" ? "Оформление заказа" : "Заявка на услугу";
  const user = session?.user;

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-card order-card" onClick={(event) => event.stopPropagation()}>
        <div className="home-node">// ORDER_PIPE</div>
        <h3 className="order-title">{heading}</h3>
        <p className="order-item">{item.name}</p>
        <p className="order-price">{item.price}</p>
        <p className="cabinet-note">
          Заявка уйдёт модератору и администратору. Мы свяжемся по телефону или почте.
        </p>

        {result?.ok ? (
          <div>
            <p className="auth-ok">Приняли. Смотрите статус в кабинете, если вы вошли — и ждите наш ответ.</p>
            <button type="button" className="cyber-btn" onClick={onClose} style={{ width: "100%", marginTop: 16 }}>
              Закрыть
            </button>
          </div>
        ) : (
          <form action={submit} className="auth-form">
            <input type="hidden" name="service" value={item.name} />
            <input type="hidden" name="price" value={item.price} />
            <input type="hidden" name="source" value={item.source} />
            <label className="auth-label">
              Имя
              <input
                className="auth-input"
                type="text"
                name="name"
                required
                minLength={2}
                defaultValue={user?.name ?? ""}
              />
            </label>
            <label className="auth-label">
              Почта
              <input
                className="auth-input"
                type="email"
                name="email"
                required
                defaultValue={user?.email ?? ""}
              />
            </label>
            <label className="auth-label">
              Телефон
              <input className="auth-input" type="tel" name="phone" required minLength={6} placeholder="+7 …" />
            </label>
            <label className="auth-label">
              Что нужно
              <textarea
                className="auth-input auth-textarea"
                name="details"
                rows={4}
                required
                minLength={10}
                placeholder="Сроки, модель, что уже пробовали."
              />
            </label>
            {result?.error ? <p className="auth-error">{result.error}</p> : null}
            <button type="submit" className="cyber-btn" disabled={pending}>
              {pending ? "Отправляем…" : "Отправить заявку"}
            </button>
          </form>
        )}

        {result?.ok ? null : (
          <button type="button" className="order-cancel" onClick={onClose}>
            [ отмена ]
          </button>
        )}
      </div>
    </div>
  );
}
