import Link from "next/link";

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
            // VICTIMOK LABS // ПРИЁМ ЗАКАЗОВ ОТКРЫТ
          </div>
          <h1 className="home-title">
            VICTIM<span className="cyber-eye">👁</span>K LABS
          </h1>
          <p className="home-tagline">
            Пишем программы, чиним электронику и собираем FPV-дроны
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

        <div className="home-section">
          <h2 style={{ color: "#00f2ff", fontSize: "clamp(16px, 4vw, 22px)", margin: "0 0 25px 0", letterSpacing: "0.12em", textTransform: "uppercase", overflowWrap: "anywhere" }}>
            01 // КТО МЫ И ЧЕМ ПОМОГАЕМ
          </h2>
          <p style={{ color: "#d1d5db", fontSize: "15px", lineHeight: "1.9", margin: "0 0 25px 0" }}>
            Victimok Labs — это лаборатория, где делают три вещи: пишут программы, чинят сломанную технику и собирают FPV-дроны. Если сервис сказал, что ноутбук или плата «не ремонтируется», если нужен сайт, приложение или учёт для бизнеса, если нужен дрон под задачу, а не игрушка из коробки — этим мы и занимаемся.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.8", margin: 0 }}>
            Мы не кормим обещаниями «починим за пять минут». Сначала смотрим, что именно сломалось или какой софт нужен. Потом чиним деталь, пишем код или собираем дрон — и отдаём готовое, а не меняем блок на блок и отправляем дальше. Цены в каталоге стартовые: точную стоимость считаем после диагностики или брифа.
          </p>
        </div>

        <h2 style={{ color: "#fff", fontSize: "clamp(16px, 4.2vw, 26px)", textAlign: "left", margin: "0 0 40px 0", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid rgba(0,242,255,0.15)", paddingBottom: "15px", overflowWrap: "anywhere" }}>
          02 // ТРИ НАПРАВЛЕНИЯ РАБОТЫ
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "50px", textAlign: "left", marginBottom: "60px" }}>
          <div className="home-dept">
            <div style={{ color: "#00f2ff", fontFamily: "monospace", fontSize: "12px", marginBottom: "15px", overflowWrap: "anywhere" }}>[ DEPARTMENT_ALPHA // SOFTWARE ]</div>
            <h3 style={{ color: "#fff", fontSize: "clamp(18px, 4vw, 24px)", margin: "0 0 20px 0", fontWeight: 800 }}>ПРОГРАММЫ И ПРИЛОЖЕНИЯ</h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7" }}>
              Пишем софт, которым можно пользоваться: сайты, мобильные приложения, личные кабинеты, CRM и сервисы, которые держат нагрузку. Можем сделать с нуля или доделать то, что уже есть и плохо работает — без переписи всего подряд.
              <br /><br />
              <span style={{ color: "#fff", fontWeight: "bold" }}>TypeScript, JavaScript, Python, Go, Rust, C++, C#, Java, Kotlin, Swift, Dart. Из фреймворков — Flutter, React, Next.js. Если нужен большой объём данных или ИИ-модуль, тоже берём.</span>
              <br /><br />
              Делаем и небольшие утилиты, и крупные системы: облако, мобильные клиенты для iOS и Android, CRM/ERP, очереди сообщений, базы данных. Стек подбираем под задачу, а не наоборот. По ходу объясняем, что получается на выходе и сколько это займёт, без стены терминов.
              <br /><br />
              <strong style={{ color: "#ef4444" }}>⚠️ Чего мы не делаем:</strong> не пишем на ассемблере и не ковыряемся в машинном коде. Это долго, дорого и почти никогда не нужно клиенту. Современные языки и компиляторы справляются лучше, а время уходит на рабочий сайт или приложение, а не на ручную возню с регистрами процессора.
            </p>
          </div>

          <div className="home-dept">
            <div style={{ color: "#00f2ff", fontFamily: "monospace", fontSize: "12px", marginBottom: "15px", overflowWrap: "anywhere" }}>[ DEPARTMENT_BRAVO // HARDWARE ]</div>
            <h3 style={{ color: "#fff", fontSize: "clamp(18px, 4vw, 24px)", margin: "0 0 20px 0", fontWeight: 800 }}>РЕМОНТ ЭЛЕКТРОНИКИ</h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7" }}>
              Чиним технику на уровне деталей, а не «заменили весь модуль и готово». Если официальный сервис отказал — часто это просто дорого им возиться. Мы снимаем и ставим чипы, восстанавливаем дорожки на плате, ищем короткое замыкание и оживляем устройство, которое уже собирались выбросить.
              <br /><br />
              Работаем на лабораторном оборудовании, а не на паяльнике «для дома»:
              <br /><br />
              ● <strong style={{ color: "#00f2ff" }}>Инфракрасные паяльные станции</strong> — аккуратно снимаем и ставим большие чипы: процессоры, видеочипы, память. Плата не коробится от жара, контакты садятся ровно.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>Осциллографы и логические анализаторы</strong> — смотрим, что происходит с питанием и шинами данных. Не гадаем по внешнему виду, а меряем, где просада и короткое.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>Программаторы RT809H и PC-3000</strong> — читаем и прошиваем память (БИОС, NAND, eMMC). Если устройство не включается из-за прошивки, часто можно вернуть загрузку без замены всей платы.
            </p>
          </div>

          <div className="home-dept">
            <div style={{ color: "#00f2ff", fontFamily: "monospace", fontSize: "12px", marginBottom: "15px", overflowWrap: "anywhere" }}>[ DEPARTMENT_GAMMA // FPV ]</div>
            <h3 style={{ color: "#fff", fontSize: "clamp(18px, 4vw, 24px)", margin: "0 0 20px 0", fontWeight: 800 }}>ДРОНЫ И FPV-СВЯЗЬ</h3>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7" }}>
              Собираем и настраиваем квадрокоптеры и крылья под конкретную задачу: полёт, камера, дальность, устойчивость к помехам. Это не готовый дрон из магазина, а сборка: рама, моторы, полётный контроллер, видео и радио. Перед сборкой говорим, что реально улетит в ваших условиях, а что нет.
              <br /><br />
              Что именно делаем:
              <br /><br />
              ● <strong style={{ color: "#00f2ff" }}>Рама и моторы.</strong> Считаем тягу под ваш вес и задачу, ставим жёсткий карбон, нормальный крепёж и моторы, которые не сгорят на первой нагрузке.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>Полётный контроллер и регуляторы.</strong> Прошиваем, калибруем гироскоп, настраиваем управление и фильтры, чтобы дрон не трясло в кадре и не уводило в сторону.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>Связь и видео.</strong> Подбираем частоты (433 / 868 / 915 МГц, 1.2 / 2.4 / 5.8 ГГц), мотаем и настраиваем антенны, ставим ExpressLRS или Crossfire. Нужна дальняя связь или полёт рядом с глушилками — говорим честно, что получится, а что нет.
              <br />
              ● <strong style={{ color: "#00f2ff" }}>Камеры.</strong> Тепловизор, ночная камера, плата с компьютером, если нужно лететь не только по GPS. Помогаем подобрать комплект, а не свалить в раму всё подряд.
            </p>
          </div>
        </div>

        <div className="home-log">
          <div style={{ color: "#00f2ff", fontWeight: "bold", marginBottom: "15px", fontSize: "14px" }}>// TERMINAL_LOG_STREAM_v4.26.05 // MASTER_NODE_ONLINE</div>
          <div>&gt; INITIATING HIGH-LEVEL MULTI-LANGUAGE PARSING ENGINE... READY.</div>
          <div>&gt; LANGUAGES DETECTED: [TS, JS, PY, GO, RUST, CPP, CS, JAVA, KOTLIN, DART].</div>
          <div>&gt; SECURITY EXCLUSION: LOW-LEVEL ASSEMBLY CODEBASE DETECTED AND DELETED TO PRESERVE MENTAL INTEGRITY.</div>
          <div>&gt; CONNECTING RT809H PROGRAMMER... CHIP DATA STREAM: ACTIVE [100%].</div>
          <div>&gt; INJECTING INDUSTRIAL IR-STATION PROFILE... SOAK TEMPERATURE: 150C → REFLOW: 240C... BGA ALLOY IN PERFECT LIQUID PHASE.</div>
          <div>&gt; TUNING ELRS TRANSMITTER... FREQUENCY HOPPING SPREAD SPECTRUM (FHSS): ENABLED // POWER: 2000mW.</div>
          <div>&gt; FFT FILTERS APPLIED TO FLIGHT CONTROLLER GYRO... NOISE FLOOR REDUCED BY 42dB.</div>
          <div>&gt; CALCULATING SUBWOOFER ENCLOSURE VOLUME... REASONANCE FREQUENCY MATCHED AT 28Hz.</div>
          <div style={{ color: "#22c55e", marginTop: "15px", fontWeight: "bold" }}>&gt; ВЫВОД: лаборатория работает. Можно писать, чинить и собирать.</div>
        </div>

        <div className="home-cta-row">
          <Link href="/services">
            <button type="button" className="cyber-btn">Открыть Каталог Услуг</button>
          </Link>
          <Link href="/shop">
            <button type="button" className="cyber-btn-secondary">Прайс-Лист Магазина</button>
          </Link>
        </div>

        <div className="home-sys-footer">
          <span>CORE_NODE: GALAXY_CLUSTER_MAIN</span>
          <span>ENCRYPTION_PROTOCOL: OMEGA_7_STRICT</span>
          <span style={{ color: "#22c55e", textShadow: "0 0 12px rgba(34,197,94,0.7)" }}>● LAUNCH_STATUS: ABSOLUTE_DOMINANCE_ACTIVE</span>
        </div>
      </div>

      <div className="home-telemetry">
        <div>[TELEMETRY] ExpressLRS packet rate: 500Hz. Link Quality (LQ): 100%. RSSI: -45dBm. Stable.</div>
        <div>[HARDWARE] RT809H hardware buffer allocation successful. NAND flash geometry parsed correctly.</div>
        <div>[COMPILER] High-level build succeeded. Zero bytes of assembly code compiled. Clean execution.</div>
        <div>[ACOUSTICS] Korvet and Behringer amplification modules calibrated. Peak output distortion suppressed.</div>
        <div>[SYSTEM] End of infinite data block. Victimok Labs node remains operational in perpetuity.</div>
      </div>
    </div>
  );
}
