"use client";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  const contactLinks = [
    { name: "✈️ Личка Telegram", href: "https://t.me/victimok", isTelegram: true },
    { name: "📢 Наш Канал", href: "https://t.me/victimoklabs", isTelegram: true },
    { name: "✉️ Рабочая Почта", href: "mailto:victimoklabs@gmail.com", isTelegram: false },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof contactLinks)[0]
  ) => {
    if (link.isTelegram) {
      e.preventDefault();
      const handle = link.href.split("/").pop();
      window.location.href = `tg://resolve?domain=${handle}`;
      setTimeout(() => {
        window.open(link.href, "_blank", "noopener,noreferrer");
      }, 1500);
    }
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-card" onClick={(e) => e.stopPropagation()}>
        <h3
          style={{
            color: "#ffffff",
            fontSize: "22px",
            margin: "0 0 8px 0",
            letterSpacing: "0.15em",
            fontWeight: 900,
          }}
        >
          СВЯЗЬ С ЛАБОРАТОРИЕЙ
        </h3>
        <div
          style={{
            color: "#00f2ff",
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "0.2em",
            marginBottom: "25px",
          }}
        >
          // PROTOCOL: DIRECT_COMMUNICATION_LINE
        </div>

        <div
          style={{
            textAlign: "left",
            color: "#9ca3af",
            fontSize: "13.5px",
            lineHeight: "1.7",
            marginBottom: "30px",
            background: "rgba(0, 242, 255, 0.02)",
            borderLeft: "3px solid #00f2ff",
            padding: "15px 20px",
            borderRadius: "0 8px 8px 0",
          }}
        >
          Вы можете напрямую связаться с инженерным штабом{" "}
          <span style={{ color: "#fff", fontWeight: 600 }}>Victimok Labs</span>{" "}
          для обсуждения любых технологических задач.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              target={link.isTelegram ? undefined : "_blank"}
              rel={link.isTelegram ? undefined : "noopener noreferrer"}
              className="glass-btn"
              style={{ width: "100%", textAlign: "center" }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          style={{
            marginTop: "30px",
            background: "transparent",
            border: "none",
            color: "#ef4444",
            cursor: "pointer",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            transition: "color 0.2s ease",
            minHeight: "44px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f87171")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#ef4444")}
        >
          [ РАЗОРВАТЬ СОЕДИНЕНИЕ ]
        </button>
      </div>
    </div>
  );
};
