"use client";

import { useState } from "react";
import Link from "next/link";
import { OrderModal, type CatalogItem } from "@/components/OrderModal";
import { servicesCatalog } from "@/lib/services-catalog";

export default function ServicesPage() {
  const [order, setOrder] = useState<CatalogItem | null>(null);

  return (
    <div className="page-shell" style={{ alignItems: "stretch", maxWidth: "1300px", margin: "0 auto" }}>
      <div className="page-header">
        <div className="home-node">
          // CATALOG_NODE_v5.0 // ALL_SUB_SYSTEMS_PARSED
        </div>
        <h1 className="page-title">КАТАЛОГ УСЛУГ ЛАБОРАТОРИИ</h1>
        <p style={{ color: "#6b7280", maxWidth: "700px", margin: "0 auto", fontSize: "14px", lineHeight: "1.6" }}>
          Полная спецификация технологических процессов Victimok Labs по темам: софт, кремниевая хирургия, FPV, смартфоны, ноутбуки и Mac, данные, сети и камеры. Стоимость — стартовая, точный контур согласовывается через канал связи.
        </p>
      </div>

      <nav className="theme-nav" aria-label="Темы услуг">
        {servicesCatalog.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="theme-chip">
            {section.nav}
          </a>
        ))}
      </nav>

      <div style={{ width: "100%" }}>
        {servicesCatalog.map((cat) => (
          <div
            key={cat.id}
            id={cat.id}
            className="catalog-card"
            style={{ borderLeft: `4px solid ${cat.color}` }}
          >
            <div className="catalog-head">
              <h2 style={{ color: "#fff", fontSize: "clamp(16px, 3.6vw, 22px)", fontWeight: 900, letterSpacing: "0.05em", margin: 0, overflowWrap: "anywhere" }}>
                {cat.category}
              </h2>
              <span style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: cat.color,
                border: `1px solid ${cat.color}40`,
                background: `${cat.color}05`,
                padding: "4px 10px",
                borderRadius: "6px",
                letterSpacing: "0.1em"
              }}>
                {cat.badge}
              </span>
            </div>

            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7", margin: "0 0 35px 0", maxWidth: "1100px" }}>
              {cat.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
              {cat.groups.map((group) => (
                <div key={group.groupName}>
                  <h3 style={{
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}>
                    <span style={{ width: "6px", height: "6px", background: cat.color, borderRadius: "50%", flexShrink: 0 }} />
                    {group.groupName}
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="price-row"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.01)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.04)";
                        }}
                      >
                        <span className="price-row-name">{item.name}</span>
                        <span
                          className="price-row-cost"
                          style={{
                            color: cat.color,
                            background: `${cat.color}08`,
                            border: `1px solid ${cat.color}15`
                          }}
                        >
                          {item.price}
                        </span>
                        <button
                          type="button"
                          className="order-btn"
                          onClick={() => setOrder({ name: item.name, price: item.price, source: "услуги" })}
                        >
                          Заявка
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="home-cta-row" style={{ marginTop: "12px" }}>
        <Link href="/shop">
          <button type="button" className="cyber-btn">Прайс-Лист Магазина</button>
        </Link>
        <Link href="/">
          <button type="button" className="cyber-btn-secondary">Вернуться в терминал</button>
        </Link>
      </div>
      <OrderModal item={order} onClose={() => setOrder(null)} />
    </div>
  );
}
