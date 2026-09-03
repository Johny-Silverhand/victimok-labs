"use client";

import Link from "next/link";

export default function ServicesPage() {
  const deepServices = [
    {
      category: "💻 ДЕПАРТАМЕНТ ЦИФРОВЫХ АБСТРАКЦИЙ & SOFTWARE ARCHITECTURE",
      badge: "NODE: SOFTWARE_OVERLORD",
      color: "#00f2ff",
      description: "Проектирование и развертывание высоконагруженных систем. Мы принципиально исключили низкоуровневую гадость (Assembly/машинные коды) и оперируем масштабируемыми макро-абстракциями, гарантирующими реактивность и отказоустойчивость контуров.",
      groups: [
        {
          groupName: "Кроссплатформенная мобильная разработка (Flutter / Dart)",
          items: [
            { name: "Проектирование чистой архитектуры (Clean Architecture / BLoC / Riverpod)", price: "от 45 000 ₽" },
            { name: "Интеграция кастомных криптографических протоколов и сквозного шифрования (E2EE)", price: "от 60 000 ₽" },
            { name: "Оптимизация многопоточных вычислений через изолированные Isolate-контуры", price: "от 30 000 ₽" },
            { name: "Рефакторинг костылей, оптимизация Gradle-сборок и миграция зависимостей", price: "от 25 000 ₽" }
          ]
        },
        {
          groupName: "Тяжелые Enterprise-системы, CRM & Стриминг Данных",
          items: [
            { name: "Разработка архитектуры распределенных микросервисов (Go / Rust / Node.js)", price: "от 120 000 ₽" },
            { name: "Построение CRM/ERP комплексов под ключ с real-time синхронизацией нод", price: "от 180 000 ₽" },
            { name: "Интеграция брокеров сообщений (Kafka / RabbitMQ) для высоконагруженных очередей", price: "от 50 000 ₽" },
            { name: "Проектирование реляционных и NoSQL баз данных (PostgreSQL / Redis) с репликацией", price: "от 40 000 ₽" }
          ]
        }
      ]
    },
    {
      category: "🛠 ХИРУРГИЧЕСКИЙ МИКРОЭЛЕКТРОННЫЙ КОМПЛЕКС (HARDWARE LABS)",
      badge: "NODE: SILICON_SURGERY",
      color: "#a855f7",
      description: "Бескомпромиссная реанимация текстолита на молекулярном уровне. Работа ведется на топовых ИК-станциях и инженерных комплексах PC-3000. Никакого прогрева чипов — только тотальное технологическое восстановление.",
      groups: [
        {
          groupName: "Прецизионный BGA-монтаж & Реболлинг",
          items: [
            { name: "Демонтаж, подготовка посадочной площадки и реболлинг CPU/GPU (свинец/безсвинец)", price: "от 8 500 ₽" },
            { name: "Замена сокетов материнских плат (Intel/AMD) на автоматизированной ИК-станции", price: "от 7 000 ₽" },
            { name: "Апгрейд и перепайка банок видеопамяти (GDDR6/HBM) с подбором страпов", price: "от 9 000 ₽" },
            { name: "Замена мостов, хабов и контроллеров логики (PCH / Мультиконтроллеры EC)", price: "от 5 500 ₽" }
          ]
        },
        {
          groupName: "Диагностика VRM-зон и Систем Питания",
          items: [
            { name: "Поканальный анализ фаз питания, шин данных PCIe/RAM на цифровом осциллографе", price: "от 4 000 ₽" },
            { name: "Поиск утечек, КЗ тепловизором под нагрузкой и замена пробитых DrMOS / MOSFET", price: "от 3 500 ₽" },
            { name: "Восстановление межслойных обрывов дорожек многослойного текстолита под микроскопом", price: "от 6 000 ₽" },
            { name: "Ультразвуковая отмывка плат в специализированных растворах после залития химикатами", price: "от 2 500 ₽" }
          ]
        },
        {
          groupName: "Низкоуровневый Логический Ремонт & Прошивка",
          items: [
            { name: "Внутрисхемное чтение и прошивка SPI Flash / NAND / eMMC через программатор RT809H", price: "от 4 500 ₽" },
            { name: "Нарезка, чистка ME-регионов и сборка инженерных дампов BIOS / UEFI вручную", price: "от 3 500 ₽" },
            { name: "Обход аппаратных защит, восстановление Bootloader и разблокировка контроллеров", price: "от 5 000 ₽" }
          ]
        }
      ]
    },
    {
      category: "⚡ АЭРОКОСМИЧЕСКИЙ СЕКТОР & FPV АВИОНИКА",
      badge: "NODE: AIR_WARFARE",
      color: "#22c55e",
      description: "Проектирование и тонкая настройка беспилотных систем, устойчивых к средствам радиоэлектронной борьбы (РЭБ). Расчет резонансов, калибровка фильтров и сборка ультимативных полетных конфигураций.",
      groups: [
        {
          groupName: "Сборка, Кастомизация & Железо",
          items: [
            { name: "Сборка FPV-дрона на жестких карбоновых рамах (от 5 до 10+ дюймов) под ключ", price: "от 14 000 ₽" },
            { name: "Расчет синергии винтомоторных групп (KV моторов к шагу пропеллеров и весу нагрузки)", price: "от 4 000 ₽" },
            { name: "Монтаж полетных стеков, гидроизоляция плат компаундом / лаком в 3 слоя", price: "от 4 500 ₽" }
          ]
        },
        {
          groupName: "Программирование, Связь & РЭБ-Защита",
          items: [
            { name: "Прошивка ESC (DShot1200), калибровка гироскопов и ручная настройка фильтров PID/FFT", price: "от 6 000 ₽" },
            { name: "Расчет, намотка и пайка резонансных антенн связи (Клевер/Патч) на векторном анализаторе VNA", price: "от 5 500 ₽" },
            { name: "Конфигурирование ExpressLRS / Crossfire на нестандартных частотах с форсированием мощности до 2-5W", price: "от 7 500 ₽" },
            { name: "Интеграция одноплатников и модулей машинного зрения для наведения по оптическому контуру", price: "от 18 000 ₽" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="page-shell" style={{ alignItems: "stretch", maxWidth: "1300px", margin: "0 auto" }}>
      <div className="page-header">
        <div className="home-node">
          // CATALOG_NODE_v4.26 // ALL_SUB_SYSTEMS_PARSED
        </div>
        <h1 className="page-title">КАТАЛОГ УСЛУГ ЛАБОРАТОРИИ</h1>
        <p style={{ color: "#6b7280", maxWidth: "700px", margin: "0 auto", fontSize: "14px", lineHeight: "1.6" }}>
          Полная спецификация технологических процессов Victimok Labs. Каждая деталь, каждый логический гейт и миллиметр проводника подвергаются полному техническому контролю. Стоимость — стартовая, точный контур согласовывается через канал связи.
        </p>
      </div>

      <div style={{ width: "100%" }}>
        {deepServices.map((cat) => (
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
    </div>
  );
}
