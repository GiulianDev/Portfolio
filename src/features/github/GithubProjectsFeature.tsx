// src/features/github/GithubProjectsFeature.tsx
import React from 'react';
import { useGithubProjects } from './useGithubProjects';
import { ProjectCard, MinimalBadge } from '@ui';
import { ScrollReveal } from '../../shared/ui/ScrollReveal';

export function GithubProjectsFeature() {
  // Ho abbassato il limite a 4: meglio mostrare pochi progetti curati (qualità > quantità)
  const { projects, loading, error } = useGithubProjects('GiulianDev', 4);

  return (
    <div className="w-full flex flex-col justify-center">
      
      {/* ─── INTESTAZIONE DELLA SEZIONE (Ripensata per un Senior con NDA) ─── */}
      <div className="flex flex-col">
       
        {/* 1. Il Badge: da "Open Source" a "Laboratorio" */}
        <ScrollReveal delay={0.1}>
          <MinimalBadge dotClass="bg-indigo-500 shadow-indigo-500/50">
            Laboratorio & Sandbox Didattica
          </MinimalBadge>
        </ScrollReveal>
        
        {/* 2. Il Titolo: meno orientato alla "produzione" e più alla "ricerca" */}
        <ScrollReveal delay={0.2}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight text-white leading-none">
            Spazio di <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">Sperimentazione.</span>
          </h2>
        </ScrollReveal>
        
        {/* 3. La Descrizione Strategica: Spiega il perché dei pochi progetti valorizzando il tuo lavoro */}
        <ScrollReveal delay={0.3}>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-3xl leading-relaxed">
            Gran parte dei sistemi complessi e delle interfacce medicali che ho sviluppato in questi anni è strettamente confidenziale e coperta da NDA. <br className="hidden sm:block" />
            Utilizzo il mio profilo GitHub come un <strong className="text-neutral-300 font-medium">laboratorio personale</strong> per esplorare nuovi paradigmi, creare boilerplate e condividere codice a scopo didattico per i miei studenti.
          </p>
        </ScrollReveal>
      </div>

      {/* ─── GRIGLIA DEI PROGETTI ─── */}
      <div className="mt-12 w-full">
        
        {/* Stato di caricamento animato */}
        {loading && (
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
              <p className="text-neutral-500 text-sm font-medium">Recupero repository in corso...</p>
            </div>
          </ScrollReveal>
        )}
        
        {/* Stato di errore animato */}
        {error && (
          <ScrollReveal delay={0.4}>
            <div className="bg-red-950/20 border border-red-500/10 p-6 rounded-2xl text-center">
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          </ScrollReveal>
        )}

        {/* Mappiamo l'array usando la ProjectCard, con animazione a cascata */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects?.length === 0 ? (
              // ─── FALLBACK SE GITHUB E' TOTALMENTE VUOTO ───
              <ScrollReveal delay={0.4} direction="up" className="md:col-span-2">
                <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] text-center">
                  <p className="text-neutral-400">
                    Al momento sto riorganizzando le mie repository pubbliche. <br />
                    I miei esperimenti open-source appariranno qui a breve.
                  </p>
                </div>
              </ScrollReveal>
            ) : (
              // ─── RENDERING DELLE CARD ───
              projects?.map((repo, index) => (
                <ScrollReveal
                  key={repo.id}
                  delay={0.4 + (index * 0.1)} 
                  direction="up"
                >
                  <ProjectCard
                    title={repo.name}
                    description={repo.description || "Progetto didattico / Sperimentazione tecnica"}
                    language={repo.language}
                    githubUrl={repo.html_url}
                    liveUrl={repo.homepage}
                  />
                </ScrollReveal>
              ))
            )}
          </div>
        )}
      </div>

    </div>
  );
}