import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '340vh', /* Чуть увеличили под размер картинки */
      padding: '100px 20px',
      boxSizing: 'border-box'
    }}>
      
      {/* СВЕРХМАССИВНЫЙ МЕЖГАЛАКТИЧЕСКИЙ ТЕРМИНАЛ ОРГАНИЗАЦИИ */}
      <div className="cyber-terminal" style={{
        position: 'relative',
        padding: '100px 70px',
        maxWidth: '1300px',
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: '16px',
        marginBottom: '60px'
      }}>
        
        {/* Высокотехнологичные угловые маркеры с закруглением */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50px', height: '50px', borderTop: '4px solid #00f2ff', borderLeft: '4px solid #00f2ff', borderTopLeftRadius: '16px' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '50px', borderTop: '4px solid #00f2ff', borderRight: '4px solid #00f2ff', borderTopRightRadius: '16px' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50px', height: '50px', borderBottom: '4px solid #00f2ff', borderLeft: '4px solid #00f2ff', borderBottomLeftRadius: '16px' }}></div>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50px', height: '50px', borderBottom: '4px solid #00f2ff', borderRight: '4px solid #00f2ff', borderBottomRightRadius: '16px' }}></div>

        {/* ГЛАВНЫЙ СВЕРХСВЕТОВОЙ ТИТУЛ */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#00f2ff', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.5em', marginBottom: '15px' }}>
            // COGNITIVE INFRASTRUCTURE DESTABILIZATION PREVENTED // NODE: VICTIMOK_ALPHA_PREMIUM
          </div>
          <h1 style={{
            fontSize: '76px',
            fontWeight: 950,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            margin: '0 0 20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '25px',
            color: '#ffffff'
          }}>
            VICTIM<span className="cyber-eye">👁</span>K LABS
          </h1>
          <p style={{
            color: '#00f2ff',
            letterSpacing: '0.7em',
            fontSize: '15px',
            textTransform: 'uppercase',
            margin: 0,
            fontWeight: 700
          }}>
            Universal Multi-Tasking Technological Hegemony & Engineering Complex
          </p>
        </div>

        {/* ИНТЕГРИРОВАННОЕ ФОТО ЛАБОРАТОРИИ */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '60px',
          position: 'relative'
        }}>
          <img 
            src="/victimlabs.png" 
            alt="Victimok Labs HQ Terminal" 
            style={{
              width: '100%',
              maxHeight: '550px',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '1px solid rgba(0, 242, 255, 0.25)',
              boxShadow: '0 0 30px rgba(0, 242, 255, 0.15)'
            }} 
          />
          {/* Маленький технический маркер поверх картинки */}
          <div style={{
            position: 'absolute',
            bottom: '15px',
            right: '20px',
            backgroundColor: 'rgba(0,0,0,0.75)',
            color: '#00f2ff',
            fontFamily: 'monospace',
            fontSize: '11px',
            padding: '4px 10px',
            borderRadius: '4px',
            border: '1px solid rgba(0,242,255,0.3)',
            letterSpacing: '0.1em'
          }}>
            REALTIME_HQ_CAM_01
          </div>
        </div>

        {/* СЕКЦИЯ 1: ГЛОБАЛЬНЫЙ КВАНТОВЫЙ МАНИФЕСТ */}
        <div style={{
          background: 'rgba(0, 242, 255, 0.01)',
          border: '1px solid rgba(0, 242, 255, 0.1)',
          padding: '50px',
          borderRadius: '12px',
          marginBottom: '60px',
          textAlign: 'left'
        }}>
          <h2 style={{ color: '#00f2ff', fontSize: '22px', margin: '0 0 25px 0', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            01 // ПАРАДИГМА АБСОЛЮТНОЙ ТЕХНОЛОГИЧЕСКОЙ СИНГУЛЯРНОСТИ
          </h2>
          <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: '1.9', margin: '0 0 25px 0' }}>
            Вектор развития Victimok Labs направлен на преодоление энтропии в сложных киберфизических системах. Мы агрегируем распределенные мощности, преобразуя абстрактные математические концепты в осязаемую вычислительную и аппаратную реальность. Наше присутствие манифестируется на всех уровнях кремниевой и логической эволюции. Мы не ищем компромиссов с устаревшими стандартами индустрии — мы аннигилируем неэффективность, выстраивая полностью автономные контуры автоматизации, проектирования и глубинного аппаратного восстановления.
          </p>
          <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
            Каждая подсистема, проходящая через терминалы лаборатории, подвергается тотальному спектральному анализу, математическому моделированию переходных процессов и декомпозиции до базовых логических примитивов. Оперируя сущностями планетарного и межгалактического масштаба, мы замыкаем циклы передачи данных, создавая бесшовную синергию между высокоуровневым программным кодом и физической структурой проводников.
          </p>
        </div>

        {/* СЕКЦИЯ 2: ПОЛНАЯ СПЕЦИФИКАЦИЯ ДЕПАРТАМЕНТОВ */}
        <h2 style={{ color: '#fff', fontSize: '26px', textAlign: 'left', margin: '0 0 40px 0', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid rgba(0,242,255,0.15)', paddingBottom: '15px' }}>
          02 // СТРУКТУРНАЯ АРХИТЕКТУРА И ДЕЯТЕЛЬНОСТЬ ПОДРАЗДЕЛЕНИЙ
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', textAlign: 'left', marginBottom: '60px' }}>
          
          {/* РАЗРАБОТКА — ПОЛНЫЙ СТЕК */}
          <div style={{ borderLeft: '4px solid #00f2ff', background: 'rgba(0,0,0,0.2)', padding: '35px', borderRadius: '0 8px 8px 0' }}>
            <div style={{ color: '#00f2ff', fontFamily: 'monospace', fontSize: '12px', marginBottom: '15px' }}>[ DEPARTMENT_ALPHA // HIGH_LEVEL_SOFTWARE_OVERLORD ]</div>
            <h3 style={{ color: '#fff', fontSize: '24px', margin: '0 0 20px 0', fontWeight: 800 }}>ГЛОБАЛЬНЫЙ МНОГОЯЗЫКОВОЙ ПРОГРАММНЫЙ ИНЖИНИРИНГ</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.7' }}>
              Программное крыло Victimok Labs оперирует полным спектром современных абстракций, платформ и парадигм программирования. Мы пишем, оптимизируем и разворачиваем отказоустойчивые системы практически на всех существующих языках высокого уровня, обеспечивая беспрецедентную гибкость архитектурных решений. Наш промышленный стек включает в себя объектно-ориентированные, functional, реактивные и декларативные среды разработки: 
              <br /><br />
              <span style={{ color: '#fff', fontWeight: 'bold' }}>TypeScript, JavaScript, Python, Go (Golang), Rust, C++, C#, Java, Kotlin, Swift, Dart, а также специализированные фреймворки Flutter, React, Next.js и тяжелые enterprise-решения для работы с Big Data и искусственным интеллектом.</span>
              <br /><br />
              Мы создаем экосистемы любой сложности — от распределенных микросервисных бэкендов, облачных платформ автоматизации и кроссплатформенных мобильных комплексов до сложнейших CRM и ERP систем, управляющих терабайтами потоковых данных в реальном времени. 
              <br /><br />
              <strong style={{ color: '#ef4444' }}>⚠️ ИСКЛЮЧЕНИЕ ИЗ СТЕКА:</strong> Из наших пайплайнов полностью и навсегда изгнана вся низкоуровневая мерзость. Мы принципиально бойкотируем Ассемблер (Assembly) и машинные коды. Ручное управление регистрами процессора, ковыряние в прерываниях и написание платформозависимых костылей для конкретного кремниевого кристалла — это тупиковый путь эволюции, сжигающий ресурсы человеческого интеллекта ради копеечной мнимой оптимизации. Современные компиляторы и интеллектуальные оптимизаторы кода высшего уровня давно превосходят ручной низкоуровневый ввод. Мы управляем абстракциями макро-уровня, создавая масштабируемые цифровые миры, а не перекладываем байты в регистрах вручную.
            </p>
          </div>

          {/* РЕМОНТ — ТОПОВОЕ ОБОРУДОВАНИЕ */}
          <div style={{ borderLeft: '4px solid #00f2ff', background: 'rgba(0,0,0,0.2)', padding: '35px', borderRadius: '0 8px 8px 0' }}>
            <div style={{ color: '#00f2ff', fontFamily: 'monospace', fontSize: '12px', marginBottom: '15px' }}>[ DEPARTMENT_BRAVO // HARDCORE_SILICON_SURGERY ]</div>
            <h3 style={{ color: '#fff', fontSize: '24px', margin: '0 0 20px 0', fontWeight: 800 }}>КЛИНИЧЕСКАЯ РЕАНИМАЦИЯ ЭЛЕКТРОНИКИ И МИКРОЭЛЕКТРОННЫЙ АНАЛИЗ</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.7' }}>
              Мы осуществляем бескомпромиссный компонентный ремонт полупроводниковых структур и многослойных печатных плат там, где официальные вендоры выносят вердикт «непригодно к восстановлению». Никакого блочного или модульного ремонта — только точечное хирургическое вмешательство на микронном уровне, восстановление топологии дорожек, ликвидация межслойных тепловых и электрических замыканий.
              <br /><br />
              В наших лабораториях развернут комплекс профессионального оборудования промышленного класса, оставляющий далеко позади базовые инструменты начального уровня:
              <br /><br />
              ● <strong style={{ color: '#00f2ff' }}>Автоматизированные инфракрасные паяльные станции верхнего и нижнего подогрева</strong> для прецизионного реболлинга и BGA-монтажа массивных чипсетов, сокетов, CPU, GPU и модулей памяти HBM/GDDR без малейшего риска термического деформирования текстолита.
              <br />
              ● <strong style={{ color: '#00f2ff' }}>Цифровые лабораторные осциллографы со сверхвысокой полосой пропускания и логические анализаторы</strong> для поканального мониторинга шин данных PCIe, RAM, I2C, SPI, отслеживания переходных процессов в многофазных VRM-зонах питания и поиска микросекундных пульсаций напряжения.
              <br />
              ● <strong style={{ color: '#00f2ff' }}>Ультимативные программаторы топ-уровня (серии RT809H, лазерные комплексы и инженерные программаторы PC-3000)</strong>, позволяющие работать напрямую со структурами памяти NAND, eMMC, UFS, SPI Flash, осуществлять внутрисхемное чтение, восстановление поврежденных областей Bootloader и перепрошивку мультиконтроллеров (EC) в обход любых аппаратных защит.
            </p>
          </div>

          {/* ДРОНЫ И БПЛА */}
          <div style={{ borderLeft: '4px solid #00f2ff', background: 'rgba(0,0,0,0.2)', padding: '35px', borderRadius: '0 8px 8px 0' }}>
            <div style={{ color: '#00f2ff', fontFamily: 'monospace', fontSize: '12px', marginBottom: '15px' }}>[ DEPARTMENT_GAMMA // AEROSPACE_FPV_WARFARE ]</div>
            <h3 style={{ color: '#fff', fontSize: '24px', margin: '0 0 20px 0', fontWeight: 800 }}>АВИОНИКА, БЕСПИЛОТНЫЕ КОМПЛЕКСЫ И КАНАЛЫ СВЯЗИ FPV</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.7' }}>
              Аэрокосмический сектор Victimok Labs занимается глубокой разработкой, кастомизацией, сборкой и частотным программированием беспилотных летательных аппаратов (БПЛА) мультироторного и самолетного типа. Мы выходим далеко за рамки гражданского хобби, проектируя и конфигурируя ударные, разведывательные и дальнобойные FPV-комплексы, способные выполнять задачи в условиях жесткого подавления средствами радиоэлектронной борьбы (РЭБ).
              <br /><br />
              Направления нашей деятельности в авиационном секторе включают:
              <br /><br />
              ● <strong style={{ color: '#00f2ff' }}>Сборка и расчет синергии винтомоторных групп:</strong> Оптимизация соотношения тяги к весу, подбор карбоновых рам повышенной жесткости, титанового крепежа и высокооборотистых бесколлекторных двигателей под экстремальные весовые нагрузки.
              <br />
              ● <strong style={{ color: '#00f2ff' }}>Программирование полетных контроллеров и ESC:</strong> Тонкая калибровка гироскопов и акселерометров, ручная настройка PID-коэффициентов и фильтров Fast Fourier Transform (FFT) для подавления механических вибраций в полете. Прошивка регуляторов скорости на базе протоколов DShot1200 / Бинаправленного DShot.
              <br />
              ● <strong style={{ color: '#00f2ff' }}>Развертывание защищенных каналов связи и видеопередачи:</strong> Расчет, ручная сборка и настройка резонансных частот антенн типа «клевер», «патч» и «хеликс» на анализаторах цепей (VNA). Конфигурирование приемопередатчиков ExpressLRS (ELRS) и Crossfire на нестандартных частотных сетках (433MHz, 868MHz, 915MHz, 1.2GHz, 2.4GHz, 5.8GHz) с мощностью излучения до 2-5 Ватт для сквозного пробития куполов глушения. 
              <br />
              ● <strong style={{ color: '#00f2ff' }}>Интеграция систем машинного зрения:</strong> Установка тепловизионных модулей, камер ночного видения со сверхчувствительными матрицами Starlight и кастомных плат на базе одноплатных компьютеров для автономного наведения по оптическому контуру без использования спутниковой навигации GPS/ГЛОНАСС.
            </p>
          </div>

        </div>

        {/* СЕКЦИЯ 3: БЕСКОНЕЧНЫЙ ДАТА-СТРИМ И ЛОГИ СИСТЕМЫ */}
        <div style={{
          border: '1px dashed rgba(0, 242, 255, 0.2)',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'left',
          fontFamily: 'monospace',
          fontSize: '13px',
          color: '#9ca3af',
          marginBottom: '60px',
          lineHeight: '1.8',
          background: 'rgba(0,0,0,0.5)'
        }}>
          <div style={{ color: '#00f2ff', fontWeight: 'bold', marginBottom: '15px', fontSize: '14px' }}>// TERMINAL_LOG_STREAM_v4.26.05 // MASTER_NODE_ONLINE</div>
          <div>&gt; INITIATING HIGH-LEVEL MULTI-LANGUAGE PARSING ENGINE... READY.</div>
          <div>&gt; LANGUAGES DETECTED: [TS, JS, PY, GO, RUST, CPP, CS, JAVA, KOTLIN, DART].</div>
          <div>&gt; SECURITY EXCLUSION: LOW-LEVEL ASSEMBLY CODEBASE DETECTED AND DELETED TO PRESERVE MENTAL INTEGRITY.</div>
          <div>&gt; CONNECTING RT809H PROGRAMMER... CHIP DATA STREAM: ACTIVE [100%].</div>
          <div>&gt; INJECTING INDUSTRIAL IR-STATION PROFILE... SOAK TEMPERATURE: 150C &rarr; REFLOW: 240C... BGA ALLOY IN PERFECT LIQUID PHASE.</div>
          <div>&gt; TUNING ELRS TRANSMITTER... FREQUENCY HOPPING SPREAD SPECTRUM (FHSS): ENABLED // POWER: 2000mW.</div>
          <div>&gt; FFT FILTERS APPLIED TO FLIGHT CONTROLLER GYRO... NOISE FLOOR REDUCED BY 42dB.</div>
          <div>&gt; CALCULATING SUBWOOFER ENCLOSURE VOLUME... REASONANCE FREQUENCY MATCHED AT 28Hz.</div>
          <div style={{ color: '#22c55e', marginTop: '15px', fontWeight: 'bold' }}>&gt; CONCLUSION: VICTIMOK LABS ИМЕЕТ СТАТУС АБСОЛЮТНОЙ ТЕХНОЛОГИЧЕСКОЙ ДОМИНАНТЫ. ВСЕ СИСТЕМЫ СТАБИЛЬНЫ.</div>
        </div>

        {/* НАВИГАЦИОННЫЕ КНОПКИ С ЗАКРУГЛЕНИЕМ (8PX) */}
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginTop: '60px' }}>
          <Link href="/services">
            <button className="cyber-btn" style={{ borderRadius: '8px', padding: '18px 50px', fontSize: '15px' }}>Открыть Каталог Услуг</button>
          </Link>
          <Link href="/shop">
            <button className="cyber-btn-secondary" style={{ borderRadius: '8px', padding: '18px 50px', fontSize: '15px' }}>Прайс-Лист Магазина</button>
          </Link>
        </div>

        {/* Глобальный системный подвал доски */}
        <div style={{
          fontFamily: 'monospace',
          fontSize: '13px',
          color: '#4b5563',
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(0, 242, 255, 0.2)',
          paddingTop: '35px',
          marginTop: '60px'
        }}>
          <span>CORE_NODE: GALAXY_CLUSTER_MAIN</span>
          <span>ENCRYPTION_PROTOCOL: OMEGA_7_STRICT</span>
          <span style={{ color: '#22c55e', textShadow: '0 0 12px rgba(34,197,94,0.7)' }}>● LAUNCH_STATUS: ABSOLUTE_DOMINANCE_ACTIVE</span>
        </div>

      </div>
      
      {/* ДОПОЛНИТЕЛЬНЫЕ ТЕХНОЛОГИЧЕСКИЕ СТРОКИ ДЛЯ БЕСКОНЕЧНОГО СКРОЛЛА */}
      <div style={{
        maxWidth: '1300px',
        width: '100%',
        textAlign: 'left',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#2d3748',
        lineHeight: '1.6',
        padding: '0 50px'
      }}>
        <div>[TELEMETRY] ExpressLRS packet rate: 500Hz. Link Quality (LQ): 100%. RSSI: -45dBm. Stable.</div>
        <div>[HARDWARE] RT809H hardware buffer allocation successful. NAND flash geometry parsed correctly.</div>
        <div>[COMPILER] High-level build succeeded. Zero bytes of assembly code compiled. Clean execution.</div>
        <div>[ACOUSTICS] Korvet and Behringer amplification modules calibrated. Peak output distortion suppressed.</div>
        <div>[SYSTEM] End of infinite data block. Victimok Labs node remains operational in perpetuity.</div>
      </div>

    </main>
  );
}
