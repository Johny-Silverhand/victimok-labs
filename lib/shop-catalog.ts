import type { CatalogSection } from "./catalog";

export const shopCatalog: CatalogSection[] = [
  {
    id: "phones",
    nav: "Смартфоны",
    category: "📱 СМАРТФОНЫ — ФЛАГИ 2026",
    badge: "NODE: PHONE_STORE",
    color: "#00f2ff",
    description: "Флагманские смартфоны сезона 2026. Цены — «от» по витрине DNS (где модель есть) и крупной рознице РФ на сентябрь 2026. Apple в DNS.ру не продаётся.",
    groups: [
      {
        groupName: "Apple",
        items: [
          { name: "iPhone 17 128 ГБ", price: "от 58 000 ₽" },
          { name: "iPhone 17 256 ГБ", price: "от 66 490 ₽" },
          { name: "iPhone 17 Pro 256 ГБ", price: "от 72 399 ₽" },
          { name: "iPhone 17 Pro 512 ГБ", price: "от 99 999 ₽" },
          { name: "iPhone 17 Pro Max 256 ГБ", price: "от 81 099 ₽" },
          { name: "iPhone 17 Pro Max 512 ГБ", price: "от 119 990 ₽" },
          { name: "iPhone 17 Pro Max 1 ТБ", price: "от 126 250 ₽" },
        ],
      },
      {
        groupName: "Samsung",
        items: [
          { name: "Galaxy S26 256 ГБ", price: "от 89 990 ₽" },
          { name: "Galaxy S26+ 256 ГБ", price: "от 104 990 ₽" },
          { name: "Galaxy S26+ 512 ГБ", price: "от 119 990 ₽" },
          { name: "Galaxy S26 Ultra 256 ГБ", price: "от 124 990 ₽" },
          { name: "Galaxy S26 Ultra 512 ГБ", price: "от 144 990 ₽" },
          { name: "Galaxy S26 Ultra 1 ТБ", price: "от 189 990 ₽" },
          { name: "Galaxy Z Fold7 512 ГБ", price: "от 166 990 ₽" },
          { name: "Galaxy Z Flip7 256 ГБ", price: "от 91 999 ₽" },
        ],
      },
      {
        groupName: "другие флаги",
        items: [
          { name: "Pixel 10 Pro 256 ГБ", price: "от 77 990 ₽" },
          { name: "Pixel 10 Pro XL 512 ГБ", price: "от 89 000 ₽" },
          { name: "Xiaomi 16 256 ГБ", price: "от 59 000 ₽" },
          { name: "Xiaomi 16 Ultra 512 ГБ", price: "от 79 000 ₽" },
          { name: "Honor Magic 8 Pro 512 ГБ", price: "от 69 000 ₽" },
          { name: "OnePlus 14 256 ГБ", price: "от 64 000 ₽" },
          { name: "Nothing Phone 3 256 ГБ", price: "от 49 000 ₽" },
        ],
      },
    ],
  },
  {
    id: "laptops",
    nav: "Ноутбуки",
    category: "💻 НОУТБУКИ — ФЛАГИ 2026",
    badge: "NODE: NOTEBOOK_STORE",
    color: "#818cf8",
    description: "Новые флагманские ноутбуки. Цены — «от» по текущим витринам РФ (MacBook в DNS.ру нет). Апгрейд RAM/SSD — отдельно.",
    groups: [
      {
        groupName: "Apple",
        items: [
          { name: "MacBook Air 15 M4 16/256", price: "от 92 900 ₽" },
          { name: "MacBook Air 15 M4 24/512", price: "от 128 990 ₽" },
          { name: "MacBook Pro 14 M4 Pro 24/512", price: "от 161 999 ₽" },
          { name: "MacBook Pro 14 M4 Pro 48/1 ТБ", price: "от 289 000 ₽" },
          { name: "MacBook Pro 16 M4 Max 36/1 ТБ", price: "от 349 000 ₽" },
          { name: "MacBook Pro 16 M4 Max 64/2 ТБ", price: "от 429 000 ₽" },
        ],
      },
      {
        groupName: "ультрабуки",
        items: [
          { name: "Dell XPS 14 OLED 32/1 ТБ", price: "от 189 000 ₽" },
          { name: "Dell XPS 16 OLED 32/1 ТБ", price: "от 229 000 ₽" },
          { name: "ASUS Zenbook 14 OLED Core Ultra 7", price: "от 129 000 ₽" },
          { name: "ThinkPad X1 Carbon Gen 13", price: "от 159 000 ₽" },
          { name: "Surface Laptop 7 15 Snapdragon X Elite", price: "от 139 000 ₽" },
        ],
      },
      {
        groupName: "игровые",
        items: [
          { name: "ROG Zephyrus G16 RTX 5080", price: "от 486 990 ₽" },
          { name: "Legion Pro 7i RTX 5080", price: "от 239 000 ₽" },
          { name: "Razer Blade 16 RTX 5090", price: "от 355 776 ₽" },
          { name: "MSI Stealth 18 RTX 5090", price: "от 359 000 ₽" },
        ],
      },
    ],
  },
  {
    id: "tablets",
    nav: "Планшеты и аудио",
    category: "🎧 ПЛАНШЕТЫ, ЧАСЫ И АУДИО",
    badge: "NODE: TABLET_AUDIO",
    color: "#f59e0b",
    description: "Планшеты, часы и аудио. Цены — «от» по рознице РФ (Apple не в DNS.ру). AirPods Pro 3 — витрина DNS.",
    groups: [
      {
        groupName: "Планшеты",
        items: [
          { name: "iPad Pro 13 M4 256 ГБ Wi-Fi", price: "от 95 990 ₽" },
          { name: "iPad Pro 13 M4 1 ТБ Wi-Fi + Cellular", price: "от 179 000 ₽" },
          { name: "iPad Air 13 M3 256 ГБ", price: "от 68 690 ₽" },
          { name: "Galaxy Tab S10 Ultra 512 ГБ", price: "от 99 000 ₽" },
        ],
      },
      {
        groupName: "Часы",
        items: [
          { name: "Apple Watch Ultra 2 GPS + Cellular", price: "от 79 000 ₽" },
          { name: "Apple Watch Series 11 GPS 46 мм", price: "от 44 000 ₽" },
          { name: "Galaxy Watch Ultra LTE", price: "от 54 000 ₽" },
        ],
      },
      {
        groupName: "Аудио",
        items: [
          { name: "AirPods Pro 3 USB-C", price: "от 23 999 ₽" },
          { name: "Sony WH-1000XM6", price: "от 25 950 ₽" },
          { name: "Bose QC Ultra Headphones", price: "от 36 000 ₽" },
          { name: "Galaxy Buds3 Pro", price: "от 16 000 ₽" },
        ],
      },
    ],
  },
  {
    id: "pc",
    nav: "ПК и железо",
    category: "🖥 ПК И ЖЕЛЕЗО",
    badge: "NODE: SILICON_RIG",
    color: "#38bdf8",
    description: "Компоненты класса RTX 50 и Ryzen 9 / Core Ultra 9. Видеокарты — нижняя полка DNS. Сборки под ключ считаются от железа.",
    groups: [
      {
        groupName: "Процессоры и видеокарты",
        items: [
          { name: "NVIDIA GeForce RTX 5080 16 ГБ", price: "от 119 999 ₽" },
          { name: "NVIDIA GeForce RTX 5090 32 ГБ", price: "от 389 999 ₽" },
          { name: "AMD Ryzen 9 9950X", price: "от 42 990 ₽" },
          { name: "Intel Core Ultra 9 285K", price: "от 54 990 ₽" },
        ],
      },
      {
        groupName: "Память, накопители и плата",
        items: [
          { name: "DDR5-6000 64 ГБ (2×32)", price: "от 22 000 ₽" },
          { name: "NVMe PCIe 5.0 2 ТБ", price: "от 24 000 ₽" },
          { name: "NVMe PCIe 5.0 4 ТБ", price: "от 44 000 ₽" },
          { name: "Материнская плата AMD X870 / X870E", price: "от 32 000 ₽" },
          { name: "Блок питания 1000W 80+ Platinum ATX 3.1", price: "от 22 000 ₽" },
        ],
      },
      {
        groupName: "Мониторы и сборки под ключ",
        items: [
          { name: "Монитор 27\" 4K 240 Гц OLED", price: "от 89 000 ₽" },
          { name: "Сборка офисный контур под ключ", price: "от 75 000 ₽" },
          { name: "Сборка игровой контур под ключ (RTX 5080)", price: "от 265 000 ₽" },
          { name: "Сборка максимальный контур (RTX 5090)", price: "от 530 000 ₽" },
        ],
      },
    ],
  },
  {
    id: "fpv",
    nav: "FPV",
    category: "⚡ FPV-КОМПЛЕКТУЮЩИЕ И ГОТОВЫЕ КОМПЛЕКСЫ",
    badge: "NODE: AEROSPACE_STORE",
    color: "#22c55e",
    description: "Кастомные FPV-комплектующие аэрокосмического сектора Victimok Labs: карбоновые рамы, винтомоторные группы, ExpressLRS / Crossfire, резонансные антенны и модули машинного зрения. Позиции собраны из номенклатуры DEPARTMENT_GAMMA. Дополнительно — батареи, очки, GPS, готовые квады 5/7/10\", ELRS-рюкзак, VTX и комплекты пропеллеров.",
    groups: [
      {
        groupName: "Рамы, тяга и полетные стеки",
        items: [
          { name: "Карбоновая рама повышенной жесткости 5 дюймов", price: "от 3 500 ₽" },
          { name: "Карбоновая рама 7 / 10 дюймов + титановый крепеж", price: "от 4 500 ₽" },
          { name: "Бесколлекторный двигатель под экстремальную нагрузку (шт.)", price: "от 1 800 ₽" },
          { name: "Полетный стек FC + ESC (DShot1200 / bidirectional DShot)", price: "от 8 500 ₽" },
          { name: "Готовый FPV-комплекс 7 дюймов под ключ (рама, тяга, стек, камера)", price: "от 35 000 ₽" },
        ],
      },
      {
        groupName: "Связь, антенны и видео",
        items: [
          { name: "Комплект ExpressLRS TX/RX (частотные сетки 868 / 915 / 2.4)", price: "от 4 200 ₽" },
          { name: "Модуль Crossfire / форсирование мощности до 2–5 Вт", price: "по запросу" },
          { name: "Антенна «клевер» 5.8 GHz (настройка на VNA)", price: "от 900 ₽" },
          { name: "Антенна «патч» / «хеликс» под канал видеопередачи", price: "от 1 500 ₽" },
          { name: "Камера ночного видения Starlight", price: "от 6 500 ₽" },
          { name: "Тепловизионный модуль + одноплатник для оптического контура", price: "от 28 000 ₽" },
        ],
      },
      {
        groupName: "Батареи, очки и GPS",
        items: [
          { name: "LiPo 6S 1300 mAh 150C (сборка под 5\")", price: "от 2 400 ₽" },
          { name: "LiPo 6S 1800 mAh 120C (сборка под 7\")", price: "от 3 200 ₽" },
          { name: "Li-ion 6S 8000 mAh дальнолет (10\")", price: "от 6 500 ₽" },
          { name: "Очки DJI Goggles 3", price: "от 42 000 ₽" },
          { name: "Очки Walksnail Avatar HD Goggles X", price: "от 28 000 ₽" },
          { name: "GPS-модуль с компасом (BN / M10)", price: "от 2 200 ₽" },
        ],
      },
      {
        groupName: "Готовые квады, ELRS, VTX и пропеллеры",
        items: [
          { name: "Готовый квад 5 дюймов под ключ (ELRS + O3)", price: "от 29 000 ₽" },
          { name: "Готовый дальнолет 10 дюймов под ключ", price: "от 48 000 ₽" },
          { name: "Рюкзак ExpressLRS TX (Gemini / Diversity)", price: "от 12 500 ₽" },
          { name: "Видеопередатчик VTX 5.8 1.6–2.5 Вт", price: "от 3 800 ₽" },
          { name: "Комплект пропеллеров 5\" (4 пары)", price: "от 900 ₽" },
          { name: "Комплект пропеллеров 7\" (4 пары)", price: "от 1 200 ₽" },
          { name: "Комплект пропеллеров 10\" (карбоновые)", price: "от 1 800 ₽" },
        ],
      },
    ],
  },
  {
    id: "silicon",
    nav: "Лаборатория",
    category: "🛠 ДЕВАЙСЫ, ПАМЯТЬ И ВОССТАНОВЛЕННЫЕ УЗЛЫ",
    badge: "NODE: SILICON_STORE",
    color: "#a855f7",
    description: "Аппаратный контур DEPARTMENT_BRAVO: восстановленные полупроводниковые узлы, дампы и инженерный обвес лаборатории. Никакого блочного ширпотреба — только компонентный уровень, проверенный на ИК-станции, осциллографе и RT809H / PC-3000. В номенклатуре — донорские платы, комплекты флюса/трафаретов и пакеты сессий программатора.",
    groups: [
      {
        groupName: "Память, логика и восстановленные платы",
        items: [
          { name: "Банка видеопамяти GDDR6 / HBM после лабораторного отбора", price: "по запросу" },
          { name: "Восстановленный мост / хаб / мультиконтроллер EC", price: "от 5 500 ₽" },
          { name: "Сокет Intel/AMD после ИК-монтажа (обменный фонд)", price: "от 7 000 ₽" },
          { name: "Инженерный дамп BIOS / UEFI (ME-регион очищен вручную)", price: "от 3 500 ₽" },
        ],
      },
      {
        groupName: "Лабораторный инструмент и прошивка",
        items: [
          { name: "Сессия программатора RT809H: SPI Flash / NAND / eMMC / UFS", price: "от 4 500 ₽" },
          { name: "Кастомная одноплатная обвязка под оптический контур", price: "по запросу" },
          { name: "Комплект гидроизоляции плат (компаунд / лак, 3 слоя)", price: "от 1 200 ₽" },
        ],
      },
      {
        groupName: "Доноры, флюс и пакеты сессий",
        items: [
          { name: "Донорская материнская плата ноутбука (разбор на узлы)", price: "от 8 500 ₽" },
          { name: "Донорская логика Mac (доноры чипов)", price: "по запросу" },
          { name: "Комплект флюса и трафаретов BGA (CPU/GPU/SoC)", price: "от 3 200 ₽" },
          { name: "Пакет сессий программатора: 5 слотов SPI / NAND", price: "от 18 000 ₽" },
          { name: "Пакет сессий программатора: 10 слотов UFS / eMMC", price: "от 32 000 ₽" },
        ],
      },
    ],
  },
  {
    id: "software",
    nav: "Софт",
    category: "💻 СОФТ, ЛИЦЕНЗИИ И ГОТОВЫЕ МОДУЛИ",
    badge: "NODE: SOFTWARE_STORE",
    color: "#2dd4bf",
    description: "Программное крыло DEPARTMENT_ALPHA: готовые модули высокого уровня без ассемблера и машинных кодов. TypeScript, Python, Go, Rust, Flutter / Dart, React / Next.js — масштабируемые абстракции, которые можно развернуть как узел лаборатории. В линейке — лендинг Next.js, кабинет, Telegram-бот и ИИ-модуль.",
    groups: [
      {
        groupName: "Enterprise и потоковые данные",
        items: [
          { name: "Лицензия узла CRM / ERP (real-time синхронизация)", price: "от 180 000 ₽" },
          { name: "Микросервисный каркас Go / Rust / Node.js (стартовый контур)", price: "от 120 000 ₽" },
          { name: "Модуль очередей Kafka / RabbitMQ под ключ", price: "от 50 000 ₽" },
          { name: "Контур PostgreSQL / Redis с репликацией", price: "от 40 000 ₽" },
        ],
      },
      {
        groupName: "Мобильные клиенты и автоматизация",
        items: [
          { name: "Мобильный клиент Flutter / Dart (чистая архитектура)", price: "от 45 000 ₽" },
          { name: "Модуль сквозного шифрования E2EE", price: "от 60 000 ₽" },
          { name: "Пакет рефакторинга и миграции зависимостей", price: "от 25 000 ₽" },
          { name: "Скрипты автоматизации пайплайна (TS / Python / Go)", price: "от 30 000 ₽" },
        ],
      },
      {
        groupName: "Веб, кабинет, боты и ИИ",
        items: [
          { name: "Лендинг Next.js / React (шаблон лаборатории)", price: "от 35 000 ₽" },
          { name: "Кабинет клиента Next.js (сессии, заказы, роли)", price: "от 90 000 ₽" },
          { name: "Telegram-бот заказов и уведомлений", price: "от 28 000 ₽" },
          { name: "ИИ-модуль консультанта (RAG / агент)", price: "от 75 000 ₽" },
        ],
      },
    ],
  },
  {
    id: "peripherals",
    nav: "Периферия",
    category: "🖱 ПЕРИФЕРИЯ, СЕТЬ И ДОК",
    badge: "NODE: PERIPH_STORE",
    color: "#fb7185",
    description: "Клавиатуры и мыши, 4K-вебкамера, USB-C док, Wi-Fi 7 mesh, NAS на 4 отсека, power bank 65 Вт и портативный монитор — обвес рабочего контура лаборатории.",
    groups: [
      {
        groupName: "Клавиатуры и мыши",
        items: [
          { name: "Клавиатура механическая 75% (hot-swap, RU/EN)", price: "от 9 500 ₽" },
          { name: "Клавиатура TKL беспроводная низкопрофильная", price: "от 11 000 ₽" },
          { name: "Клавиатура 60% Hall-effect (8K Hz)", price: "от 14 000 ₽" },
          { name: "Мышь беспроводная 8K Hz (сенсор 3950)", price: "от 8 500 ₽" },
          { name: "Мышь эргономичная офисная (silent)", price: "от 3 200 ₽" },
        ],
      },
      {
        groupName: "Видео, док и монитор",
        items: [
          { name: "Веб-камера 4K Sony STARVIS", price: "от 12 500 ₽" },
          { name: "USB-C док 12-in-1 (HDMI 4K, PD 100W)", price: "от 9 800 ₽" },
          { name: "Портативный монитор 16\" 2.5K 120 Гц USB-C", price: "от 24 000 ₽" },
        ],
      },
      {
        groupName: "Сеть, NAS и питание",
        items: [
          { name: "Wi-Fi 7 mesh (комплект 2 ноды)", price: "от 24 290 ₽" },
          { name: "NAS 4-bay (без дисков, 2.5/3.5)", price: "от 62 499 ₽" },
          { name: "Power bank 65W 20 000 мА·ч", price: "от 6 500 ₽" },
        ],
      },
    ],
  },
];
