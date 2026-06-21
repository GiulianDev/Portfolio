// src/features/introduction/IntroFeature.tsx
import React from 'react';
import { Button, TechBadge, MinimalBadge, ScrollReveal } from '@ui';
import { socials, technologies } from './introData';

// ─── ICONE CUSTOM (Stile Lucide: pulite e leggere) ─── //
const IconProps = { size: 20, strokeWidth: 1.5, className: "currentColor" };

export function IntroFeature() {

  return (
    <div className="w-full flex flex-col justify-center min-h-[50vh]">
      
      {/* 1. Badge */}
      <ScrollReveal delay={0.1}>
         <MinimalBadge dotClass="bg-fuchsia-500 shadow-fuchsia-500/50">
          Disponibile per nuove collaborazioni
        </MinimalBadge>
      </ScrollReveal>

      {/* 2. Titolo */}
      <ScrollReveal delay={0.2}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1]">
          Sviluppo esperienze web <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-emerald-400">
            innovative e performanti.
          </span>
        </h1>
      </ScrollReveal>
      
      {/* 3. Bio */}
      <ScrollReveal delay={0.3}>
        <p className="text-neutral-400 text-lg sm:text-xl mt-8 max-w-2xl leading-relaxed">
          Ciao, sono <span className="text-white font-semibold">Giulian</span>. Sono uno sviluppatore specializzato in React, Vite e Tailwind CSS. Trasformo idee complesse in interfacce pulite, veloci e accessibili a chiunque.
        </p>
      </ScrollReveal>

      {/* ─── NUOVA SEZIONE SOCIAL (Sempre con animazione a cascata) ─── */}
        <div className="mt-6 flex flex-wrap gap-3">
        {socials.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <ScrollReveal 
              key={social.name} 
              delay={0.4 + (index * 0.05)}
              direction="up"
            >
              <a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 transition-all duration-300 ${social.hoverColor}`}
              >
                <IconComponent />
              </a>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ─── SEZIONE TECH STACK ─── */}
      <div className="mt-10 flex flex-col gap-3">
        <ScrollReveal delay={0.6}>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Tech Stack Principale</span>
        </ScrollReveal>
        
        <div className="flex flex-wrap gap-2.5">
          {technologies.map((tech, index) => (
            <ScrollReveal 
              key={tech.label} 
              delay={0.65 + (index * 0.05)} // Riprende da 0.65s
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
      
      {/* 4. Bottoni d'azione (Ritardati per apparire alla fine) */}
      <ScrollReveal delay={1.0}>
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