// src/components/ui/Footer.tsx
import React from 'react';
import { ScrollReveal } from '@ui'; // Assicurati che l'import di ScrollReveal sia corretto per la tua struttura

export function Footer() {
  return (
    // Usiamo il tag semantico <footer>
    <footer className="w-full relative z-10 px-8 pb-8">
      <ScrollReveal delay={0.2}>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-400">GiulianDev</span>
            <span>•</span>
            <p>© {new Date().getFullYear()}. Tutti i diritti riservati.</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Progettato con cura minimale</p>
            <span>•</span>
            <p className="hover:text-neutral-300 transition-colors cursor-default">
              React + Vite + Tailwind
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}