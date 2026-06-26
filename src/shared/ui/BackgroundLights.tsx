// src/shared/ui/BackgroundLights.tsx
import React from 'react';

interface BackgroundLightsProps {
  activeSection?: 'intro' | 'github' | 'contact';
}

interface CustomGlowStyles extends React.CSSProperties {
  '--x-move': string;
  '--y-move': string;
  '--scale-end': string | number;
}

const COLORS = {
  intro: 'rgba(217, 70, 239, 0.15)',
  github: 'rgba(99, 102, 241, 0.15)',
  contact: 'rgba(249, 115, 22, 0.15)',
} as const;

const COMMON_LIGHT_CLASSES = 'absolute rounded-full mix-blend-screen transition-colors duration-1000';

// Modificata la configurazione geometrica per gestire il mobile-first
const LIGHTS_CONFIG = [
  {
    id: 'top-left',
    // Mobile: Più grande (110vw) e meno sfocato (70px) | Desktop: Torna al setup originale
    layoutClass: 'top-[-15%] left-[-25%] w-[110vw] h-[100vw] blur-[70px] md:top-[-20%] md:left-[-20%] md:w-[70vw] md:h-[60vw] md:blur-[150px]',
    duration: '26s',
    delay: '0s',
    xMove: '14vw',
    yMove: '10vh',
    scaleEnd: 1.15
  },
  {
    id: 'mid-right',
    // Mobile: Più centrato e visibile | Desktop: Riposizionato a destra
    layoutClass: 'top-[25%] right-[-35%] w-[90vw] h-[90vw] blur-[80px] md:top-[20%] md:right-[-25%] md:w-[55vw] md:h-[55vw] md:blur-[170px]',
    duration: '32s',
    delay: '-5s',
    xMove: '-12vw',
    yMove: '-12vh',
    scaleEnd: 1.1
  },
  {
    id: 'bottom-left',
    // Mobile: Ottimizzato per la fine del flusso dello schermo dello smartphone
    layoutClass: 'bottom-[-15%] left-[-20%] w-[100vw] h-[100vw] blur-[75px] md:bottom-[-20%] md:left-[-15%] md:w-[65vw] h-[65vw] md:blur-[160px]',
    duration: '38s',
    delay: '-10s',
    xMove: '10vw',
    yMove: '-8vh',
    scaleEnd: 1.2
  }
] as const;

export const BackgroundLights: React.FC<BackgroundLightsProps> = ({ activeSection = 'intro' }) => {
  const currentColor = COLORS[activeSection] || COLORS.intro;

  return (
    <>
      <style>{`
        @keyframes ambient-glow {
          0% { 
            transform: translate3d(0px, 0px, 0) scale(1); 
            opacity: 0.55; /* Leggermente aumentata l'opacity minima per mobile */
          }
          100% { 
            transform: translate3d(var(--x-move), var(--y-move), 0) scale(var(--scale-end)); 
            opacity: 0.75; /* Leggermente aumentata l'opacity massima per mobile */
          }
        }
      `}</style>

      <div 
        className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        {LIGHTS_CONFIG.map((light) => (
          <div 
            key={light.id}
            className={`${COMMON_LIGHT_CLASSES} ${light.layoutClass}`}
            style={{ 
              backgroundColor: currentColor,
              animation: `ambient-glow ${light.duration} infinite ease-in-out alternate`,
              animationDelay: light.delay,
              willChange: 'transform, opacity',
              '--x-move': light.xMove,
              '--y-move': light.yMove,
              '--scale-end': light.scaleEnd
            } as CustomGlowStyles}
          />
        ))}
      </div>
    </>
  );
};