// src/features/introduction/IntroFeature.tsx
import React from 'react';
import { Button, TechBadge, MinimalBadge, ScrollReveal } from '@ui';
import { socials, technologies } from './introData';

export function IntroFeature() {
  return (
    <div className="w-full flex flex-col justify-center min-h-[50vh]">
      
      {/* 1. Badge di Stato */}
      <ScrollReveal delay={0.1}>
        <MinimalBadge dotClass="bg-fuchsia-500 shadow-fuchsia-500/50">
          Disponibile per consulenze e formazione
        </MinimalBadge>
      </ScrollReveal>

      {/* 2. Titolo Principale (Valore Ingegneristico + UI) */}
      <ScrollReveal delay={0.2}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1]">
          Ingegneria e codice <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-emerald-400">
            per interfacce ad alte prestazioni.
          </span>
        </h1>
      </ScrollReveal>
      
      {/* 3. Bio Strategica (Il tuo vero percorso) */}
      <ScrollReveal delay={0.3}>
        <p className="text-neutral-400 text-lg sm:text-xl mt-8 max-w-2xl leading-relaxed">
          Ciao, sono <span className="text-white font-semibold">Giulian</span>. Sono un <span className="text-white font-semibold">Ingegnere Biomedico</span> prestato allo sviluppo software, con 4 anni di esperienza come frontend engineer e 2 anni passati in Ricerca e Sviluppo (R&D) medicale. Oggi metto questo solido approccio analitico al servizio delle aziende come <span className="text-cyan-400 font-medium">libero professionista</span> e trasmetto le mie competenze come <span className="text-purple-400 font-medium">docente</span>.
        </p>
      </ScrollReveal>

      {/* 4. Canali Social (Animazione a cascata) */}
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

      {/* 5. Tech Stack Core */}
      <div className="mt-10 flex flex-col gap-3">
        <ScrollReveal delay={0.6}>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Tech Stack Principale</span>
        </ScrollReveal>
        
        <div className="flex flex-wrap gap-2.5">
          {technologies.map((tech, index) => (
            <ScrollReveal 
              key={tech.label} 
              delay={0.65 + (index * 0.05)}
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
      
      {/* 6. Call to Actions */}
      <ScrollReveal delay={1.0}>
        <div className="flex flex-wrap gap-4 mt-10">
          <Button href="#github" variant="primary">
            Guarda il mio codice
          </Button>
          
          <Button href="#contact" variant="outline">
            Lavoriamo insieme
          </Button>
        </div>
      </ScrollReveal>
      
    </div>
  );
}