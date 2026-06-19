export function CardLayout({ children, gradientColor, watermarkNumber }) {
  return (
    <div className="w-full max-w-6xl p-12 bg-white/[0.03] border border-white/10 backdrop-blur-xl relative flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Glow leggero */}
      <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${gradientColor}`} />
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>

      {watermarkNumber && (
        <div className="absolute -bottom-6 -right-4 text-[200px] font-black text-white/5 pointer-events-none">
          {watermarkNumber}
        </div>
      )}
    </div>
  );
}