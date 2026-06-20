// src/features/introduction/IntroFeature.tsx
import React from 'react';
import { Button, TechBadge, MinimalBadge, ScrollReveal } from '@ui';
// Importiamo le icone pulite di Lucide
// import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export function IntroFeature() {

  // Array dei Social
  // const socials = [
  //   { name: 'GitHub', icon: Github, url: 'https://github.com/tuo-user', hoverColor: 'hover:text-white hover:border-white hover:bg-white/5' },
  //   { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/tuo-user', hoverColor: 'hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/5' },
  //   { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/tuo-user', hoverColor: 'hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/5' },
  //   { name: 'Twitter / X', icon: Twitter, url: 'https://twitter.com/tuo-user', hoverColor: 'hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/5' },
  // ];

  // Array Tech Stack
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
      
      {/* 1. Badge */}
      <ScrollReveal delay={0.1}>
        <MinimalBadge dotClass="bg-cyan-500 shadow-cyan-500/50">
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
      {/* <div className="mt-6 flex flex-wrap gap-3">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <ScrollReveal 
              key={social.name} 
              delay={0.4 + (index * 0.05)} // Ritardo progressivo partendo da 0.4s
              direction="up"
            >
              <a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 transition-all duration-300 ${social.hoverColor}`}
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            </ScrollReveal>
          );
        })}
      </div> */}

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