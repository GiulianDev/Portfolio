import React from 'react';

// Esporta un componente che fa da "scatola" per le tue feature
export function CardLayout({ children, gradientColor, watermarkNumber }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradientColor} p-8 md:p-12 flex flex-col relative overflow-hidden select-none rounded-2xl shadow-2xl`}>
      
      {/* Texture geometrica di sfondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />
      
      {/* Il contenuto specifico della Feature verrà iniettato qui */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {children}
      </div>

      {/* Filigrana numerica opzionale */}
      {watermarkNumber && (
        <div className="absolute bottom-4 right-8 text-white/5 text-8xl md:text-9xl font-black select-none pointer-events-none z-0">
          {watermarkNumber}
        </div>
      )}
      
    </div>
  );
}