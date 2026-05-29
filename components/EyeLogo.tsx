// Создай компонент components/EyeLogo.tsx
export const EyeLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" className="inline-block fill-none stroke-cyan-500 stroke-2">
    <circle cx="20" cy="20" r="10" /> {/* Контур глаза */}
    <circle cx="20" cy="20" r="3" className="fill-cyan-400 animate-ping" /> {/* Зрачок */}
  </svg>
);
