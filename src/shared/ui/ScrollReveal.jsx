// src/shared/ui/ScrollReveal.jsx
import React from 'react';
import { motion } from 'framer-motion';

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up', // 'up', 'down', 'left', 'right'
  className = '' 
}) {
  // Definiamo da dove parte l'animazione in base alla direzione
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      className={className}
      // STATO INIZIALE (e stato in cui torna quando esce dal viewport)
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
        once: false, // Mettendo false, l'animazione si ripete in "out" e "in" ad ogni scroll
        amount: 0.3  // Parte quando il 30% dell'elemento è visibile
      }}
      // FISICA DELL'ANIMAZIONE (Morbida e moderna)
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Curva di Bezier personalizzata (stile Apple)
      }}
    >
      {children}
    </motion.div>
  );
}