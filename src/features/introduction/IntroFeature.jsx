import React from 'react';
import { Button } from '../../shared/ui/Button';
import { TechBadge } from '../../shared/ui/TechBadge'

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
      
      {/* Badge minimale */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
          Disponibile per nuove opportunità
        </span>
      </div>
      
      {/* Titolo Principale Gigante con Gradiente (Spezza il nero!) */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1]">
        Sviluppo esperienze web <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-emerald-400">
          innovative e performanti.
        </span>
      </h1>
      
      {/* Sottotitolo / Bio corta */}
      <p className="text-neutral-400 text-lg sm:text-xl mt-8 max-w-2xl leading-relaxed">
        Ciao, sono <span className="text-white font-semibold">Giulian</span>. Sono uno sviluppatore specializzato in React, Vite e Tailwind CSS. Trasformo idee complesse in interfacce pulite, veloci e accessibili a chiunque.
      </p>

      {/* ─── NUOVA SEZIONE TECH STACK ─── */}
      <div className="mt-8 flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Tech Stack Principale</span>
        <div className="flex flex-wrap gap-2.5">
          {technologies.map((tech) => (
            <TechBadge 
              key={tech.label} 
              label={tech.label} 
              dotColorClass={tech.dot} 
              hoverBorderClass={tech.border} 
            />
          ))}
        </div>
      </div>
      
      {/* Pulsanti d'azione rapidi */}
      <div className="flex flex-wrap gap-4 mt-10">
        <Button href="#github" variant="primary">
          Esplora i miei progetti
        </Button>
        
        <Button href="#contact" variant="outline">
          Contattami
        </Button>
      </div>
      

    </div>
  );
}