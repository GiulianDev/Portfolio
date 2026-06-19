import React from 'react';

// Aggiungiamo la prop isActive
export function CardLayout({ children, gradientColor, watermarkNumber, isActive }) {
  return (
    <div 
      className={`w-full h-full bg-gradient-to-br ${gradientColor} p-10 md:p-16 flex flex-col relative overflow-hidden select-none rounded-3xl shadow-2xl transition-all duration-700 ease-out 
      ${isActive ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-40 blur-[2px] z-0'}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />
      
      {/* Nascondiamo anche il contenuto interno testuale quando la card è di lato per un look più pulito */}
      <div className={`relative z-10 flex flex-col h-full justify-between transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>

      {watermarkNumber && (
        <div className="absolute bottom-4 right-8 text-white/5 text-8xl md:text-9xl font-black select-none pointer-events-none z-0">
          {watermarkNumber}
        </div>
      )}
    </div>
  );
}