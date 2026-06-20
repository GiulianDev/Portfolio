// src/features/github/GithubProjectsFeature.tsx
import React from 'react';
import { useGithubProjects } from './useGithubProjects';
import { ProjectCard, MinimalBadge } from '@ui';
import { ScrollReveal } from '../../shared/ui/ScrollReveal';

export function GithubProjectsFeature() {
  const { projects, loading, error } = useGithubProjects('GiulianDev', 6);

  return (
    <div className="w-full flex flex-col justify-center">
      
      {/* ─── INTESTAZIONE DELLA SEZIONE ─── */}
      <div className="flex flex-col">
       
        {/* 1. Il Badge appare per primo */}
        <ScrollReveal delay={0.1}>
          <MinimalBadge dotClass="bg-indigo-500 shadow-indigo-500/50">
            Open Source & Repository
          </MinimalBadge>
        </ScrollReveal>
        
        {/* 2. Il Titolo segue */}
        <ScrollReveal delay={0.2}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight text-white leading-none">
            Codice in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">Movimento.</span>
          </h2>
        </ScrollReveal>
        
        {/* 3. La Descrizione completa l'header */}
        <ScrollReveal delay={0.3}>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Una selezione dei miei ultimi lavori su GitHub. Dai micro-servizi alle interfacce frontend, qui è dove le idee prendono forma attraverso il codice.
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
              <p className="text-neutral-500 text-sm font-medium">Sincronizzazione con GitHub...</p>
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
            {projects?.map((repo, index) => (
              <ScrollReveal
                key={repo.id}
                /* Partiamo da 0.4s (dopo la descrizione) e aggiungiamo 0.1s per ogni card */
                delay={0.4 + (index * 0.1)} 
                direction="up"
              >
                <ProjectCard
                  title={repo.name}
                  description={repo.description}
                  language={repo.language}
                  githubUrl={repo.html_url}
                  liveUrl={repo.homepage}
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}