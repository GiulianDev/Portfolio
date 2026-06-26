// src/shared/ui/BackgroundLights.tsx
import React from 'react';

interface BackgroundLightsProps {
  activeSection?: 'intro' | 'github' | 'contact';
}

// Estendiamo in modo Type-Safe le proprietà CSS per supportare le variabili del keyframe (Senior Level)
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

// 1. Centralizziamo TUTTE le classi CSS strutturali e grafiche condivise
const COMMON_LIGHT_CLASSES = 'absolute rounded-full mix-blend-screen transition-colors duration-1000';

// 2. La configurazione ora contiene SOLO i valori geometrici e cinetici unici
const LIGHTS_CONFIG = [
  {
    id: 'top-left',
    layoutClass: 'top-[-20%] left-[-20%] w-[70vw] h-[60vw] blur-[150px]',
    duration: '26s',
    delay: '0s',
    xMove: '14vw',
    yMove: '10vh',
    scaleEnd: 1.15
  },
  {
    id: 'mid-right',
    layoutClass: 'top-[20%] right-[-25%] w-[55vw] h-[55vw] blur-[170px]',
    duration: '32s',
    delay: '-5s',
    xMove: '-12vw',
    yMove: '-12vh',
    scaleEnd: 1.1
  },
  {
    id: 'bottom-left',
    layoutClass: 'bottom-[-20%] left-[-15%] w-[65vw] h-[65vw] blur-[160px]',
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
            opacity: 0.50; 
          }
          100% { 
            transform: translate3d(var(--x-move), var(--y-move), 0) scale(var(--scale-end)); 
            opacity: 0.70; 
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
            // Composizione pulita delle classi stringa senza duplicazioni
            className={`${COMMON_LIGHT_CLASSES} ${light.layoutClass}`}
            style={{ 
              backgroundColor: currentColor,
              animation: `ambient-glow ${light.duration} infinite ease-in-out alternate`,
              animationDelay: light.delay,
              willChange: 'transform, opacity',
              // Iniettiamo le variabili CSS tipizzate correttamente tramite l'interfaccia CustomGlowStyles
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