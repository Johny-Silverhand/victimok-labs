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
    { name: "✉️ Рабочая Почта", href: "mailto:victimoklabs@gmail.com", isTelegram: false }
  ];

  // Логика обработки клика для Telegram
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof contactLinks[0]) => {
    if (link.isTelegram) {
      e.preventDefault();
      const handle = link.href.split('/').pop();

      // 1. Пытаемся открыть системный протокол
      window.location.href = `tg://resolve?domain=${handle}`;

      // 2. Если приложение не открылось (задержка 1.5с), открываем веб-версию
      setTimeout(() => {
        window.open(link.href, '_blank', 'noopener,noreferrer');
      }, 1500);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(10px)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 999,
      }} 
      onClick={onClose}
    >
      <div 
        style={{
          background: 'rgba(7, 7, 12, 0.95)',
          border: '1px solid rgba(0, 242, 255, 0.25)',
          borderRadius: '16px',
          padding: '40px 35px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 0 35px rgba(0, 242, 255, 0.25)',
          textAlign: 'center',
          position: 'relative',
          boxSizing: 'border-box'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ color: '#ffffff', fontSize: '22px', margin: '0 0 8px 0', letterSpacing: '0.15em', fontWeight: 900 }}>
          СВЯЗЬ С ЛАБОРАТОРИЕЙ
        </h3>
        <div style={{ color: '#00f2ff', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '25px' }}>
          // PROTOCOL: DIRECT_COMMUNICATION_LINE
        </div>

        <div style={{
          textAlign: 'left',
          color: '#9ca3af',
          fontSize: '13.5px',
          lineHeight: '1.7',
          marginBottom: '30px',
          background: 'rgba(0, 242, 255, 0.02)',
          borderLeft: '3px solid #00f2ff',
          padding: '15px 20px',
          borderRadius: '0 8px 8px 0'
        }}>
          Вы можете напрямую связаться с инженерным штабом <span style={{ color: '#fff', fontWeight: 600 }}>Victimok Labs</span> для обсуждения любых технологических задач.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              target={link.isTelegram ? undefined : "_blank"}
              rel={link.isTelegram ? undefined : "noopener noreferrer"}
              style={{
                color: '#d1d5db',
                background: 'rgba(0, 242, 255, 0.03)',
                border: '1px solid rgba(0, 242, 255, 0.15)',
                padding: '14px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'all 0.2s ease',
                display: 'block',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 242, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 255, 0.4)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 242, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 255, 0.15)';
                e.currentTarget.style.color = '#d1d5db';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={onClose}
          style={{
            marginTop: '30px', background: 'transparent', border: 'none',
            color: '#ef4444', cursor: 'pointer', fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#f87171'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#ef4444'}
        >
          [ РАЗОРВАТЬ СОЕДИНЕНИЕ ]
        </button>
      </div>
    </div>
  );
};
