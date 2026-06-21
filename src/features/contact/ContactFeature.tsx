// src/features/contact/ContactFeature.tsx
import React from 'react';
import { Button, MinimalBadge, ScrollReveal } from '@ui';

export function ContactFeature() {
  return (
    <div className="w-full flex flex-col justify-center min-h-[60vh] relative">
      
      {/* ─── INTESTAZIONE DELLA SEZIONE ─── */}
      <div className="flex flex-col">

        {/* 1. Badge appare per primo */}
        <ScrollReveal delay={0.1}>
          <MinimalBadge dotClass="bg-orange-500 shadow-orange-500/50">
            Contatti
          </MinimalBadge>
        </ScrollReveal>
        
        {/* 2. Titolo Gigante */}
        <ScrollReveal delay={0.2}>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1] max-w-3xl">
            Hai un'idea in mente? <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400">
              Diamo forma al tuo progetto.
            </span>
          </h2>
        </ScrollReveal>
        
        {/* 3. Descrizione d'impatto */}
        <ScrollReveal delay={0.3}>
          <p className="text-neutral-400 text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
            Che si tratti di sviluppare una nuova architettura, di una consulenza tecnica per il tuo team, o semplicemente di scambiare due chiacchiere sul mondo dev, la mia casella di posta è aperta.
          </p>
        </ScrollReveal>
      </div>

      {/* ─── BOTTONI DI CONTATTO DIRETTI ─── */}
      <ScrollReveal delay={0.4}>
        <div className="flex flex-wrap gap-4 mt-10">
          <Button 
            href="mailto:tuamail@esempio.com" 
            variant="primary" 
            className="px-8 py-4" 
          >
            Scrivimi una mail
          </Button>
          
          <Button 
            href="https://linkedin.com/in/tuo-user" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="outline"
            className="px-8 py-4"
          >
            Troviamoci su LinkedIn
          </Button>
        </div>
      </ScrollReveal>

      {/* ─── FOOTER MINIMALE INTEGRATO ─── */}
      <ScrollReveal delay={0.6}>
        <div className="mt-24 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-400">GiulianDev</span>
            <span>•</span>
            <p>© 2026. Tutti i diritti riservati.</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Progettato con cura minimale</p>
            <span>•</span>
            <p className="hover:text-neutral-300 transition-colors">React + Vite + Tailwind</p>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}