// src/shared/ui/ScrollReveal.tsx
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// 1. Definiamo i tipi esatti per le direzioni consentite
type Direction = 'up' | 'down' | 'left' | 'right';

// 2. Creiamo l'interfaccia per le Props
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '' 
}: ScrollRevealProps) {
  
  // Mappiamo le coordinate di partenza in base alla direzione scelta
  const directionOffset: Record<Direction, { x: number; y: number }> = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      className={className}
      // STATO INIZIALE
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      // STATO QUANDO ENTRA NEL VIEWPORT
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      // CONFIGURAZIONE DEL VIEWPORT
      viewport={{ 
        once: false, // Animazione ad ogni entrata/uscita
        amount: 0.3  // Scatta quando il 30% dell'elemento è visibile
      }}
      // FISICA DELL'ANIMAZIONE
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Curva Bezier elegante
      }}
    >
      {children}
    </motion.div>
  );
}