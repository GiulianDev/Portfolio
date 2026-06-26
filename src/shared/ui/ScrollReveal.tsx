// src/shared/ui/ScrollReveal.tsx
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  once?: boolean; // 1. Esporremo una prop opzionale per massima flessibilità
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  once = true // 2. Default a 'true': approccio "ottimizzato prima di tutto"
}: ScrollRevealProps) {
  
  const directionOffset: Record<Direction, { x: number; y: number }> = {
    up: { y: 30, x: 0 }, // 4. Ridotto leggermente da 40 a 30 per un feeling più elegante e meno "scattoso"
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ 
        once: once, // 3. Collegato alla prop: memorizza lo stato ed elimina i listener dopo il primo trigger
        amount: 0.15 // 5. Ottimizzazione UX: abbassato da 0.3 a 0.15. Evita che blocchi grandi di testo rimangano invisibili su schermi piccoli
      }}
      transition={{
        duration: 0.7, // 6. Velocizzato leggermente (da 0.8s a 0.7s) per rendere il sito più scattante e reattivo
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], 
      }}
    >
      {children}
    </motion.div>
  );
}