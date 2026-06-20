// src/features/introduction/IntroFeature.jsx
import React from 'react';
import { Button, TechBadge, MinimalBadge } from '@ui';
import { ScrollReveal } from '../../shared/ui/ScrollReveal';

export function IntroFeature() {

  const technologies = [
    { label: 'TypeScript', dot: 'bg-blue-500', border: 'hover:border-blue-500/50' },
    { label: 'JavaScript', dot: 'bg-yellow-400', border: 'hover:border-yellow-400/50' },
    { label: 'React', dot: 'bg-cyan-400', border: 'hover:border-cyan-400/50' },
    { label: 'Tailwind CSS', dot: 'bg-sky-400', border: 'hover:border-sky-400/50' },
    { label: 'HTML', dot: 'bg-orange-500', border: 'hover:border-orange-500/50' },
    { label: 'CSS', dot: 'bg-blue-400', border: 'hover:border-blue-400/50' },
    { label: 'C#', dot: 'bg-green-500', border: 'hover:border-green-500/50' },
    { label: 'C++', dot: 'bg-pink-500', border: 'hover:border-pink-500/50' },
  ];

  return (
    <div className="w-full flex flex-col justify-center min-h-[50vh]">
      
      {/* 1. Badge appare per primo */}
      <ScrollReveal delay={0.1}>
        <MinimalBadge dotClass="bg-cyan-500 shadow-cyan-500/50">
          Disponibile per nuove collaborazioni
        </MinimalBadge>
      </ScrollReveal>

      {/* 2. Il Titolo appare subito dopo */}
      <ScrollReveal delay={0.2}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1]">
          Sviluppo esperienze web <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-emerald-400">
            innovative e performanti.
          </span>
        </h1>
      </ScrollReveal>
      
      {/* 3. La Bio segue il flusso */}
      <ScrollReveal delay={0.3}>
        <p className="text-neutral-400 text-lg sm:text-xl mt-8 max-w-2xl leading-relaxed">
          Ciao, sono <span className="text-white font-semibold">Giulian</span>. Sono uno sviluppatore specializzato in React, Vite e Tailwind CSS. Trasformo idee complesse in interfacce pulite, veloci e accessibili a chiunque.
        </p>
      </ScrollReveal>

      {/* ─── SEZIONE TECH STACK ANIMATA A CASCATA VELOCE ─── */}
      <div className="mt-8 flex flex-col gap-3">
        <ScrollReveal delay={0.4}>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Tech Stack Principale</span>
        </ScrollReveal>
        
        <div className="flex flex-wrap gap-2.5">
          {technologies.map((tech, index) => (
            /* Moltiplico l'index per 0.05 così ogni badge ha un ritardo di 50ms rispetto al precedente */
            <ScrollReveal 
              key={tech.label} 
              delay={0.45 + (index * 0.05)} 
              direction="up"
            >
              <TechBadge 
                label={tech.label} 
                dotColorClass={tech.dot} 
                hoverBorderClass={tech.border} 
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      {/* 4. Infine compaiono i bottoni d'azione */}
      <ScrollReveal delay={0.8}>
        <div className="flex flex-wrap gap-4 mt-10">
          <Button href="#github" variant="primary">
            Esplora i miei progetti
          </Button>
          
          <Button href="#contact" variant="outline">
            Contattami
          </Button>
        </div>
      </ScrollReveal>
      
    </div>
  );
}