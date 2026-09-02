"use client";

import Link from "next/link";

export default function ShopPage() {
  const catalog = [
    {
      category: "⚡ FPV-КОМПЛЕКТУЮЩИЕ И ГОТОВЫЕ КОМПЛЕКСЫ",
      badge: "NODE: AEROSPACE_STORE",
      color: "#22c55e",
      description: "Кастомные FPV-комплектующие аэрокосмического сектора Victimok Labs: карбоновые рамы, винтомоторные группы, ExpressLRS / Crossfire, резонансные антенны и модули машинного зрения. Позиции собраны из номенклатуры DEPARTMENT_GAMMA.",
      groups: [
        {
          groupName: "Рамы, тяга и полетные стеки",
          items: [
            { name: "Карбоновая рама повышенной жесткости 5 дюймов", price: "от 3 500 ₽" },
            { name: "Карбоновая рама 7 / 10 дюймов + титановый крепеж", price: "от 4 500 ₽" },
            { name: "Бесколлекторный двигатель под экстремальную нагрузку (шт.)", price: "от 1 800 ₽" },
            { name: "Полетный стек FC + ESC (DShot1200 / bidirectional DShot)", price: "от 8 500 ₽" },
            { name: "Готовый FPV-комплекс 7 дюймов под ключ (рама, тяга, стек, камера)", price: "от 35 000 ₽" }
          ]
        },
        {
          groupName: "Связь, антенны и видео",
          items: [
            { name: "Комплект ExpressLRS TX/RX (частотные сетки 868 / 915 / 2.4)", price: "от 4 200 ₽" },
            { name: "Модуль Crossfire / форсирование мощности до 2–5 Вт", price: "по запросу" },
            { name: "Антенна «клевер» 5.8 GHz (настройка на VNA)", price: "от 900 ₽" },
            { name: "Антенна «патч» / «хеликс» под канал видеопередачи", price: "от 1 500 ₽" },
            { name: "Камера ночного видения Starlight", price: "от 6 500 ₽" },
            { name: "Тепловизионный модуль + одноплатник для оптического контура", price: "от 28 000 ₽" }
          ]
        }
      ]
    },
    {
      category: "🛠 ДЕВАЙСЫ, ПАМЯТЬ И ВОССТАНОВЛЕННЫЕ УЗЛЫ",
      badge: "NODE: SILICON_STORE",
      color: "#a855f7",
      description: "Аппаратный контур DEPARTMENT_BRAVO: восстановленные полупроводниковые узлы, дампы и инженерный обвес лаборатории. Никакого блочного ширпотреба — только компонентный уровень, проверенный на ИК-станции, осциллографе и RT809H / PC-3000.",
      groups: [
        {
          groupName: "Память, логика и восстановленные платы",
          items: [
            { name: "Банка видеопамяти GDDR6 / HBM после лабораторного отбора", price: "по запросу" },
            { name: "Восстановленный мост / хаб / мультиконтроллер EC", price: "от 5 500 ₽" },
            { name: "Сокет Intel/AMD после ИК-монтажа (обменный фонд)", price: "от 7 000 ₽" },
            { name: "Инженерный дамп BIOS / UEFI (ME-регион очищен вручную)", price: "от 3 500 ₽" }
          ]
        },
        {
          groupName: "Лабораторный инструмент и прошивка",
          items: [
            { name: "Сессия программатора RT809H: SPI Flash / NAND / eMMC / UFS", price: "от 4 500 ₽" },
            { name: "Кастомная одноплатная обвязка под оптический контур", price: "по запросу" },
            { name: "Комплект гидроизоляции плат (компаунд / лак, 3 слоя)", price: "от 1 200 ₽" }
          ]
        }
      ]
    },
    {
      category: "💻 СОФТ, ЛИЦЕНЗИИ И ГОТОВЫЕ МОДУЛИ",
      badge: "NODE: SOFTWARE_STORE",
      color: "#00f2ff",
      description: "Программное крыло DEPARTMENT_ALPHA: готовые модули высокого уровня без ассемблера и машинных кодов. TypeScript, Python, Go, Rust, Flutter / Dart, React / Next.js — масштабируемые абстракции, которые можно развернуть как узел лаборатории.",
      groups: [
        {
          groupName: "Enterprise и потоковые данные",
          items: [
            { name: "Лицензия узла CRM / ERP (real-time синхронизация)", price: "от 180 000 ₽" },
            { name: "Микросервисный каркас Go / Rust / Node.js (стартовый контур)", price: "от 120 000 ₽" },
            { name: "Модуль очередей Kafka / RabbitMQ под ключ", price: "от 50 000 ₽" },
            { name: "Контур PostgreSQL / Redis с репликацией", price: "от 40 000 ₽" }
          ]
        },
        {
          groupName: "Мобильные клиенты и автоматизация",
          items: [
            { name: "Мобильный клиент Flutter / Dart (чистая архитектура)", price: "от 45 000 ₽" },
            { name: "Модуль сквозного шифрования E2EE", price: "от 60 000 ₽" },
            { name: "Пакет рефакторинга и миграции зависимостей", price: "от 25 000 ₽" },
            { name: "Скрипты автоматизации пайплайна (TS / Python / Go)", price: "от 30 000 ₽" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="page-shell" style={{ alignItems: "stretch", maxWidth: "1300px", margin: "0 auto" }}>
      <div className="page-header">
        <div className="home-node">
          // SHOP_PRICE_LIST_v1.0 // TRADE_GATEWAY_ONLINE
        </div>
        <h1 className="page-title">ПРАЙС-ЛИСТ МАГАЗИНА</h1>
        <p style={{ color: "#6b7280", maxWidth: "720px", margin: "0 auto", fontSize: "14px", lineHeight: "1.6" }}>
          Торговый шлюз Victimok Labs. Номенклатура — кастомные FPV-комплектующие, восстановленные девайсы и программные модули, описанные в терминале главной. Цена указана как нижняя граница контура; комплектация и сроки — через канал связи лаборатории.
        </p>
      </div>

      <div className="home-log" style={{ width: "100%", marginBottom: "40px" }}>
        <div style={{ color: "#00f2ff", fontWeight: "bold", marginBottom: "15px", fontSize: "14px" }}>
          // INVENTORY_STREAM // MASTER_NODE_ONLINE
        </div>
        <div>&gt; PARSING DEPARTMENT_ALPHA SOFTWARE MODULES... READY.</div>
        <div>&gt; SILICON_SURGERY EXCHANGE POOL: RT809H / PC-3000 / IR-STATION LINKED.</div>
        <div>&gt; FPV SKU MAP: FRAMES, ESC DSHOT1200, ELRS, VNA-TUNED ANTENNAS.</div>
        <div style={{ color: "#22c55e", marginTop: "15px", fontWeight: "bold" }}>
          &gt; SHOP GATEWAY: ACTIVE. STUB STATUS CLEARED.
        </div>
      </div>

      <div style={{ width: "100%" }}>
        {catalog.map((cat) => (
          <div
            key={cat.category}
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

            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7", margin: "0 0 35px 0" }}>
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
        <Link href="/services">
          <button type="button" className="cyber-btn">Каталог Услуг</button>
        </Link>
        <Link href="/">
          <button type="button" className="cyber-btn-secondary">Вернуться в терминал</button>
        </Link>
      </div>
    </div>
  );
}
