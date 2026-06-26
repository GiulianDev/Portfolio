// src/features/introduction/IntroFeature.tsx
import React from 'react';
import { Button, MinimalBadge, ScrollReveal } from '@ui';
import { Socials } from '@features/introduction/components/Socials';
import { Technologies } from './components/Technologies';

export function IntroFeature() {
  return (
    <div className="w-full flex flex-col justify-center min-h-[50vh]">
      
      {/* 1. Badge di Stato */}
      <MinimalBadge variant="intro">
        Disponibile per consulenze e mentoring
      </MinimalBadge>

      {/* 2. Titolo Principale */}
      <ScrollReveal delay={0.2}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1]">
          Il rigore dell'ingegneria, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-emerald-400">
            unito alla creatività del frontend.
          </span>
        </h1>
      </ScrollReveal>
      
      {/* 3. Bio Strategica */}
      <ScrollReveal delay={0.3}>
        <p className="text-neutral-400 text-lg sm:text-xl mt-8 max-w-2xl leading-relaxed">
          Ciao, sono <span className="text-white font-semibold">Giulian</span>. Ingegnere Biomedico di formazione, sviluppatore web per vocazione. Dopo 4 anni passati a scrivere interfacce e 2 anni in Ricerca & Sviluppo (R&D) in ambito medicale, oggi aiuto le aziende a costruire software complessi e affianco nuovi talenti come formatore.
        </p>
      </ScrollReveal>

      {/* 4. Canali Social */}
      <Socials/>

      {/* 5. Tech Stack Core */}
      <Technologies/>
      
      {/* 6. Call to Actions */}
      <ScrollReveal delay={1.0}>
        <div className="flex flex-wrap gap-4 mt-10">
          <Button href="#github" variant="primary">
            Guarda i miei esperimenti
          </Button>
          
          <Button href="#contact" variant="outline">
            Parliamone
          </Button>
        </div>
      </ScrollReveal>
      
    </div>
  );
}