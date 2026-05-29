export const CyberCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="cyber-border bg-black/80 p-6 backdrop-blur-md transition-all hover:border-cyan-400">
      <h2 className="text-cyan-400 text-xl uppercase tracking-widest mb-4">{title}</h2>
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
};
