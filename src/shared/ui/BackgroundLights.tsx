// src/shared/ui/BackgroundLights.tsx
import React from 'react';

interface BackgroundLightsProps {
  activeSection?: 'intro' | 'github' | 'contact';
}

export const BackgroundLights: React.FC<BackgroundLightsProps> = ({ activeSection = 'intro' }) => {
  
  // 1. Definiamo i colori localmente
  const colors = {
    intro: 'rgba(217, 70, 239, 0.15)',    // Fucsia
    github: 'rgba(99, 102, 241, 0.15)',   // Indigo
    contact: 'rgba(249, 115, 22, 0.15)',  // Orange
  };

  const currentColor = colors[activeSection] || colors.intro;

  // 2. Definiamo l'animazione direttamente qui
  // Usiamo uno stile per iniettare i keyframes se necessario, 
  // o più semplicemente usiamo le animazioni native di Tailwind (se le hai già)
  // Ma per essere totalmente indipendenti, usiamo un oggetto style
  
  const blobStyle = {
    backgroundColor: currentColor,
    animation: 'electric-blob 10s infinite ease-in-out',
  };

  return (
    <>
      <style>{`
        @keyframes electric-blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.2; }
          33% { transform: translate(3vw, -2vh) scale(1.1); opacity: 0.3; }
          66% { transform: translate(-2vw, 2vh) scale(0.9); opacity: 0.2; }
        }
      `}</style>

      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-[-5%] left-[-10%] w-[90vw] h-[90vw] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000" 
          style={{ ...blobStyle, animationDelay: '0s' }}
        />
        <div 
          className="absolute top-[30%] right-[-10%] w-[80vw] h-[80vw] rounded-full blur-[150px] mix-blend-screen transition-colors duration-1000" 
          style={{ ...blobStyle, animationDelay: '2s', opacity: 0.8 }} 
        />
        <div 
          className="absolute bottom-[-5%] left-[5%] w-[85vw] h-[85vw] rounded-full blur-[140px] mix-blend-screen transition-colors duration-1000" 
          style={{ ...blobStyle, animationDelay: '4s', opacity: 0.8 }}
        />
      </div>
    </>
  );
};