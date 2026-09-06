import Link from "next/link";

const shopThemes = [
  { href: "/shop#phones", label: "Смартфоны" },
  { href: "/shop#laptops", label: "Ноутбуки" },
  { href: "/shop#tablets", label: "Планшеты и аудио" },
  { href: "/shop#pc", label: "ПК и железо" },
  { href: "/shop#fpv", label: "FPV" },
  { href: "/shop#silicon", label: "Лаборатория" },
  { href: "/shop#software", label: "Софт" },
  { href: "/shop#peripherals", label: "Периферия" },
] as const;

export default function Home() {
  return (
    <div className="home-page">
      <div className="cyber-terminal home-terminal">
        <div style={{ position: "absolute", top: 0, left: 0, width: "50px", height: "50px", borderTop: "4px solid #00f2ff", borderLeft: "4px solid #00f2ff", borderTopLeftRadius: "16px" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "50px", height: "50px", borderTop: "4px solid #00f2ff", borderRight: "4px solid #00f2ff", borderTopRightRadius: "16px" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "50px", height: "50px", borderBottom: "4px solid #00f2ff", borderLeft: "4px solid #00f2ff", borderBottomLeftRadius: "16px" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "50px", height: "50px", borderBottom: "4px solid #00f2ff", borderRight: "4px solid #00f2ff", borderBottomRightRadius: "16px" }} />

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="home-node">
            // VICTIMOK LABS // МАГАЗИН + ЛАБОРАТОРИЯ ONLINE
          </div>
          <h1 className="home-title">
            VICTIM<span className="cyber-eye">👁</span>K LABS
          </h1>
          <p className="home-tagline">
            Магазин техники и FPV · разработка · ремонт · сборка дронов
          </p>
        </div>

        <div className="home-hero">
          <img
            src="/victimlabs.png"
            alt="Victimok Labs HQ Terminal"
          />
          <div style={{
            position: "absolute",
            bottom: "15px",
            right: "12px",
            backgroundColor: "rgba(0,0,0,0.75)",
            color: "#00f2ff",
            fontFamily: "monospace",
            fontSize: "11px",
            padding: "4px 10px",
            borderRadius: "4px",
            border: "1px solid rgba(0,242,255,0.3)",
            letterSpacing: "0.1em"
          }}>
            REALTIME_HQ_CAM_01
          </div>
        </div>

        <div className="home-cta-row" style={{ marginTop: "8px", marginBottom: "36px" }}>
          <Link href="/shop">
            <button type="button" className="cyber-btn">Открыть магазин</button>
          </Link>
          <Link href="/services">
            <button type="button" className="cyber-btn-secondary">Каталог услуг</button>
          </Link>
        </div>

        <div className="home-section">
          <h2 style={{ color: "#00f2ff", fontSize: "clamp(16px, 4vw, 22px)", margin: "0 0 25px 0", letterSpacing: "0.12em", textTransform: "uppercase", overflowWrap: "anywhere" }}>
            01 // КТО МЫ
          </h2>
          <p style={{ color: "#d1d5db", fontSize: "15px", lineHeight: "1.9", margin: "0 0 25px 0" }}>
            Victimok Labs — это и витрина, и лаборатория. В магазине — смартфоны, ноутбуки, ПК, FPV и то, что нужно под рукой инженеру. В мастерской — пишем программы, чиним технику на уровне деталей и собираем дроны под задачу, а не «как в коробке».
          </p>
          <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.8", margin: 0 }}>
            Цены в магазине — ориентир «от» по рынку. Услуги в каталоге стартовые: точную стоимость скажем после брифа или диагностики. Без «починим за пять минут» и без подмены блока блоком ради галочки.
          </p>
        </div>

        <div
          className="home-section"
          style={{
            marginBottom: "48px",
            padding: "28px 24px",
            borderRadius: "16px",
            border: "1px solid rgba(0,242,255,0.35)",
            background: "linear-gradient(135deg, rgba(0,242,255,0.08) 0%, rgba(0,0,0,0.35) 45%, rgba(34,197,94,0.06) 100%)",
            boxShadow: "0 0 40px rgba(0,242,255,0.08)",
          }}
        >
          <div style={{ color: "#00f2ff", fontFamily: "monospace", fontSize: "12px", marginBottom: "12px", letterSpacing: "0.12em", overflowWrap: "anywhere" }}>
            [ TRADE_GATEWAY // SHOP_ONLINE ]
          </div>
          <h2 style={{ color: "#fff", fontSize: "clamp(18px, 4.2vw, 26px)", margin: "0 0 16px 0", letterSpacing: "0.08em", textTransform: "uppercase", overflowWrap: "anywhere" }}>
            02 // МАГАЗИН VICTIMOK LABS
          </h2>
          <p style={{ color: "#d1d5db", fontSize: "15px", lineHeight: "1.85", margin: "0 0 18px 0" }}>
            Живой прайс: флаги смартфонов и ноутбуков, планшеты и аудио, железо для ПК, FPV-комплектующие и готовые комплексы, узлы лаборатории, софт и периферия. Заявка из карточки уходит в кабинет — не надо гадать, «продаёте ли вы вообще».
          </p>
          <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.75", margin: "0 0 22px 0" }}>
            FPV и лабораторные позиции — наши сборки и работы. Массовая техника — с рыночным ориентиром «от»; Apple и позиции вне DNS помечены отдельно на странице магазина.
          </p>
          <nav
            aria-label="Темы магазина"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "22px",
            }}
          >
            {shopThemes.map((theme) => (
              <Link
                key={theme.href}
                href={theme.href}
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "#00f2ff",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,242,255,0.35)",
                  background: "rgba(0,242,255,0.06)",
                  letterSpacing: "0.04em",
                }}
              >
                {theme.label}
              </Link>
            ))}
          </nav>
          <div className="home-cta-row" style={{ margin: 0, justifyContent: "flex-start" }}>
            <Link href="/shop">
              <button type="button" className="cyber-btn">Перейти в магазин</button>
            </Link>
          </div>
        </div>

        <h2 style={{ color: "#fff", fontSize: "clamp(16px, 4.2vw, 26px)", textAlign: "left", margin: "0 0 40px 0", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid rgba(0,242,255,0.15)", paddingBottom: "15px", overflowWrap: "anywhere" }}>
          03 // ТРИ НАПРАВЛЕНИЯ ЛАБОРАТОРИИ
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "50px", textAlign: "left", marginBottom: "60px" }}>
          <div className="home-dept">
            <div style={{ color: "#00f2ff", fontFamily: "monospace", fontSize: "12px", marginBottom: "15px", overflowWrap: "anywhere" }}>[ DEPARTMENT_ALPHA // SOFTWARE ]</div>
            <h3 style={{ color: "#fff", fontSize: "clamp(18px, 4vw, 24px)", margin: "0 0 20px 0", fontWeight: 800 }}>ПРОГРАММЫ И ПРИЛОЖЕНИЯ</h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7" }}>
              Пишем софт, которым можно пользоваться: сайты, мобильные приложения, личные кабинеты, CRM и сервисы под нагрузку. С нуля или доделываем то, что уже есть и плохо живёт — без переписи всего подряд.
              <br /><br />
              <span style={{ color: "#fff", fontWeight: "bold" }}>TypeScript, JavaScript, Python, Go, Rust, C++, C#, Java, Kotlin, Swift, Dart. Фреймворки — Flutter, React, Next.js. Большие данные и ИИ-модули тоже берём.</span>
              <br /><br />
              От утилит до облака, мобильных клиентов, CRM/ERP и очередей. Стек под задачу. По ходу объясняем, что на выходе и сколько займёт.
              <br /><br />
              <strong style={{ color: "#ef4444" }}>⚠️ Не делаем:</strong> ассемблер и ручной машинный код. Долго, дорого и почти никогда не нужно клиенту.
            </p>
          </div>

          <div className="home-dept">
            <div style={{ color: "#00f2ff", fontFamily: "monospace", fontSize: "12px", marginBottom: "15px", overflowWrap: "anywhere" }}>[ DEPARTMENT_BRAVO // HARDWARE ]</div>
            <h3 style={{ color: "#fff", fontSize: "clamp(18px, 4vw, 24px)", margin: "0 0 20px 0", fontWeight: 800 }}>РЕМОНТ ЭЛЕКТРОНИКИ</h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7" }}>
              Чиним на уровне деталей, а не «заменили весь модуль». Официальный сервис отказал — часто им просто дорого возиться. Снимаем и ставим чипы, восстанавливаем дорожки, ищем КЗ, оживляем то, что уже собирались выбросить.
              <br /><br />
              ● <strong style={{ color: "#00f2ff" }}>ИК-станции</strong> — процессоры, видеочипы, память без короба платы.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>Осциллографы и логика</strong> — питание и шины по факту, не по виду.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>RT809H и PC-3000</strong> — БИОС, NAND, eMMC; часто возвращаем загрузку без замены всей платы.
            </p>
          </div>

          <div className="home-dept">
            <div style={{ color: "#00f2ff", fontFamily: "monospace", fontSize: "12px", marginBottom: "15px", overflowWrap: "anywhere" }}>[ DEPARTMENT_GAMMA // FPV ]</div>
            <h3 style={{ color: "#fff", fontSize: "clamp(18px, 4vw, 24px)", margin: "0 0 20px 0", fontWeight: 800 }}>ДРОНЫ И FPV-СВЯЗЬ</h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7" }}>
              Собираем и настраиваем квады и крылья под задачу: полёт, камера, дальность, помехи. Не игрушка из магазина — рама, моторы, FC, видео и радио. Честно говорим, что улетит в ваших условиях.
              <br /><br />
              ● <strong style={{ color: "#00f2ff" }}>Рама и моторы</strong> — тяга под вес, карбон, крепёж.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>FC и ESC</strong> — прошивка, гиро, фильтры.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>Связь и видео</strong> — 433 / 868 / 915 МГц, 1.2 / 2.4 / 5.8 ГГц, ELRS / Crossfire, антенны.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>Камеры</strong> — тепловизор, ночь, onboard-компьютер по необходимости.
              <br /><br />
              Комплектующие и готовые комплексы — ещё и в{" "}
              <Link href="/shop#fpv" style={{ color: "#00f2ff" }}>магазине → FPV</Link>.
            </p>
          </div>
        </div>

        <div className="home-log">
          <div style={{ color: "#00f2ff", fontWeight: "bold", marginBottom: "15px", fontSize: "14px" }}>// TERMINAL_LOG_STREAM_v4.26.05 // MASTER_NODE_ONLINE</div>
          <div>&gt; SHOP_GATEWAY: INDEXED [PHONES / LAPTOPS / TABLETS / PC / FPV / LAB / SOFT / DOCK].</div>
          <div>&gt; INITIATING HIGH-LEVEL MULTI-LANGUAGE PARSING ENGINE... READY.</div>
          <div>&gt; LANGUAGES DETECTED: [TS, JS, PY, GO, RUST, CPP, CS, JAVA, KOTLIN, DART].</div>
          <div>&gt; CONNECTING RT809H PROGRAMMER... CHIP DATA STREAM: ACTIVE [100%].</div>
          <div>&gt; TUNING ELRS TRANSMITTER... FHSS ENABLED // POWER: 2000mW.</div>
          <div style={{ color: "#22c55e", marginTop: "15px", fontWeight: "bold" }}>&gt; ВЫВОД: магазин открыт. Лаборатория работает. Можно брать, писать, чинить и собирать.</div>
        </div>

        <div className="home-cta-row">
          <Link href="/shop">
            <button type="button" className="cyber-btn">Открыть магазин</button>
          </Link>
          <Link href="/services">
            <button type="button" className="cyber-btn-secondary">Каталог услуг</button>
          </Link>
        </div>

        <div className="home-sys-footer">
          <span>CORE_NODE: GALAXY_CLUSTER_MAIN</span>
          <span>ENCRYPTION_PROTOCOL: OMEGA_7_STRICT</span>
          <span style={{ color: "#22c55e", textShadow: "0 0 12px rgba(34,197,94,0.7)" }}>● LAUNCH_STATUS: SHOP_AND_LAB_ACTIVE</span>
        </div>
      </div>

      <div className="home-telemetry">
        <div>[SHOP] Trade gateway online. Themes: phones, laptops, tablets, PC, FPV, lab, software, peripherals.</div>
        <div>[TELEMETRY] ExpressLRS packet rate: 500Hz. Link Quality (LQ): 100%. RSSI: -45dBm. Stable.</div>
        <div>[HARDWARE] RT809H hardware buffer allocation successful. NAND flash geometry parsed correctly.</div>
        <div>[COMPILER] High-level build succeeded. Zero bytes of assembly code compiled. Clean execution.</div>
        <div>[SYSTEM] Victimok Labs node remains operational. Storefront + lab linked.</div>
      </div>
    </div>
  );
}
