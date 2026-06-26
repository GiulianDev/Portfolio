// src/shared/ui/BackgroundLights.tsx
import React, { useMemo } from 'react';

interface BackgroundLightsProps {
  activeSection?: 'intro' | 'github' | 'contact';
}

const COLORS = {
  intro: 'rgba(217, 70, 239, 0.15)',
  github: 'rgba(99, 102, 241, 0.15)',
  contact: 'rgba(249, 115, 22, 0.15)',
} as const;

// Configurazione molto sparsa: spostate più all'esterno e con un blur enorme (effetto aurora)
const LIGHTS_CONFIG = [
  {
    id: 'top-left',
    baseClass: 'absolute top-[-20%] left-[-20%] w-[55vw] h-[55vw] rounded-full blur-[160px]',
    duration: '28s', // Molto lenta
    delay: '0s',
  },
  {
    id: 'mid-right',
    baseClass: 'absolute top-[15%] right-[-25%] w-[50vw] h-[50vw] rounded-full blur-[180px]',
    duration: '34s', // Velocità sfalsata per non farle incontrare al centro
    delay: '-7s',   // Partenza asincrona
  },
  {
    id: 'bottom-left',
    baseClass: 'absolute bottom-[-20%] left-[-15%] w-[60vw] h-[60vw] rounded-full blur-[170px]',
    duration: '40s', // Super lenta
    delay: '-14s',
  }
];

export const BackgroundLights: React.FC<BackgroundLightsProps> = ({ activeSection = 'intro' }) => {
  const currentColor = COLORS[activeSection] || COLORS.intro;

  return (
    <>
      <style>{`
        /* Unico binario continuo da 0 a 100. Zero interpolazioni intermedie. */
        @keyframes ambient-glow {
          0% { 
            transform: translate3d(0px, 0px, 0) scale(1); 
            opacity: 0.4; /* Livello iniziale meno acceso */
          }
          100% { 
            transform: translate3d(5vw, -4vh, 0) scale(1.1); 
            opacity: 0.6; /* Livello finale leggermente meno scuro dello 0.2 originale */
          }
        }
      `}</style>

      {/* Forziamo il layer isolato sulla GPU per l'intero macro-container */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        {LIGHTS_CONFIG.map((light) => (
          <div 
            key={light.id}
            className={`${light.baseClass} mix-blend-screen transition-colors duration-1000`}
            style={{ 
              backgroundColor: currentColor,
              // 'alternate' fa tornare indietro l'animazione fluidamente senza scatti
              animation: `ambient-glow ${light.duration} infinite ease-in-out alternate`,
              animationDelay: light.delay,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </>
  );
};