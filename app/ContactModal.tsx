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

// Внутри компонента используй такой обработчик:
const handleLinkClick = (e: React.MouseEvent, link: any) => {
  if (link.isTelegram) {
    e.preventDefault();
    const handle = link.href.split('/').pop();
    
    // Пытаемся открыть через системный протокол
    window.location.href = `tg://resolve?domain=${handle}`;
    
    // Если через 1.5 сек приложение не открылось (мы все еще на сайте), 
    // идем в веб-версию в новой вкладке
    setTimeout(() => {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    }, 1500);
  }
};

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      }} 
      onClick={onClose}
    >
      
      {/* Стеклянный терминал контактов */}
      <div 
        style={{
          background: 'rgba(7, 7, 12, 0.95)',
          border: '1px solid rgba(0, 242, 255, 0.25)',
          borderRadius: '16px',
          padding: '40px 35px',
          maxWidth: '500px', /* Немного расширили под объемный текст */
          width: '100%',
          boxShadow: '0 0 35px rgba(0, 242, 255, 0.25)',
          textAlign: 'center',
          position: 'relative',
          boxSizing: 'border-box'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Хедер модалки */}
        <h3 style={{ color: '#ffffff', fontSize: '22px', margin: '0 0 8px 0', letterSpacing: '0.15em', fontWeight: 900 }}>
          СВЯЗЬ С ЛАБОРАТОРИЕЙ
        </h3>
        <div style={{ color: '#00f2ff', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '25px' }}>
          // PROTOCOL: DIRECT_COMMUNICATION_LINE
        </div>

        {/* Блок информационного текста в стиле бла-бла-бла хардкор */}
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
          <br /><br />
          Представляйте свои хардверные и софтверные проекты на аудит, отправляйте технические задания на разработку кроссплатформенных CRM-систем, кастомную сборку, частотное конфигурирование FPV-авиаоники или сложнейший компонентный ремонт электроники. 
          <br /><br />
          <span style={{ color: '#00f2ff' }}>Коллаборации, коммерческие офферы и интеграции</span> обрабатываются в приоритетном режиме. Выберите защищенный узел шлюза ниже для отправки пакетов данных.
        </div>

        {/* Список закругленных стеклянных кнопок связей */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#d1d5db',
                background: 'rgba(0, 242, 255, 0.03)',
                border: '1px solid rgba(0, 242, 255, 0.15)',
                padding: '14px 20px',
                borderRadius: '8px', /* Четкое скругление */
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'all 0.2s ease',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 242, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 255, 0.4)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 242, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 242, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 255, 0.15)';
                e.currentTarget.style.color = '#d1d5db';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Закрыть поп-ап */}
        <button 
          onClick={onClose}
          style={{
            marginTop: '30px',
            background: 'transparent',
            border: 'none',
            color: '#ef4444',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            transition: 'color 0.2s ease'
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
