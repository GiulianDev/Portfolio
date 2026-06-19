import React from 'react';

export function CardLayout({ children, gradientColor, watermarkNumber, isActive }) {
  return (
    <div 
      className={`w-full h-full p-10 md:p-16 flex flex-col relative overflow-hidden select-none transition-all duration-700 ease-out 
      /* STILE LUMINOSO: Sfondo bianco leggerissimo, bordo superiore più chiaro per l'effetto "luce dall'alto" */
      rounded-2xl border border-white/10 border-t-white/20 bg-white/[0.05] backdrop-blur-2xl
      ${isActive ? 'scale-100 opacity-100 z-10 shadow-[0_8px_40px_rgb(0,0,0,0.6)]' : 'scale-90 opacity-40 blur-[4px] z-0'}`}
    >
      {/* IL GLOW: Opacità alzata al 30% e uso di 'mix-blend-screen' per farlo brillare letteralmente sul fondo scuro */}
      <div className={`absolute inset-0 opacity-30 mix-blend-screen bg-gradient-to-br ${gradientColor} pointer-events-none`} />
      
      {/* RIFLESSO DEL VETRO: Abbiamo aumentato l'intensità del riflesso in alto a destra */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
      
      {/* Contenuto testuale */}
      <div className={`relative z-10 flex flex-col h-full justify-between transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>

      {/* Watermark in background: aumentato leggermente il contrasto (white/10) per non farlo sparire nella nuova luce */}
      {watermarkNumber && (
        <div className="absolute bottom-4 right-8 text-white/10 text-8xl md:text-9xl font-black select-none pointer-events-none z-0">
          {watermarkNumber}
        </div>
      )}
    </div>
  );
}