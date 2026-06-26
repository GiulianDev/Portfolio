// src/features/github/GithubProjectsFeature.tsx
import React from 'react';
import { useGithubProjects } from './useGithubProjects';
import { ProjectCard, MinimalBadge } from '@ui';
import { ScrollReveal } from '../../shared/ui/ScrollReveal';

export function GithubProjectsFeature() {
  const { projects, loading, error } = useGithubProjects('GiulianDev', 4);

  return (
    <div className="w-full flex flex-col justify-center">
      
      {/* ─── INTESTAZIONE DELLA SEZIONE ─── */}
      <div className="flex flex-col">
       
        {/* 1. Il Badge */}
        <ScrollReveal delay={0.1}>
          <MinimalBadge variant="github">
            Spazio Sperimentale
          </MinimalBadge>
        </ScrollReveal>
        
        {/* 2. Il Titolo */}
        <ScrollReveal delay={0.2}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight text-white leading-none">
            Il mio codice, <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">dietro le quinte.</span>
          </h2>
        </ScrollReveal>
        
        {/* 3. La Descrizione Trasparente */}
        <ScrollReveal delay={0.3}>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-3xl leading-relaxed">
            Lavorando su sistemi medicali e software complessi, gran parte del codice che scrivo in produzione è (giustamente) protetto da NDA. <br className="hidden sm:block" />
            Qui trovi il mio <strong className="text-neutral-300 font-medium">laboratorio aperto</strong>: esperimenti su nuove librerie, boilerplate e progetti che creo a scopo didattico per i miei studenti.
          </p>
        </ScrollReveal>
      </div>

      {/* ─── GRIGLIA DEI PROGETTI ─── */}
      <div className="mt-12 w-full">
        
        {loading && (
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
              <p className="text-neutral-500 text-sm font-medium">Recupero repository in corso...</p>
            </div>
          </ScrollReveal>
        )}
        
        {error && (
          <ScrollReveal delay={0.4}>
            <div className="bg-red-950/20 border border-red-500/10 p-6 rounded-2xl text-center">
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          </ScrollReveal>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects?.length === 0 ? (
              <ScrollReveal delay={0.4} direction="up" className="md:col-span-2">
                <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] text-center">
                  <p className="text-neutral-400">
                    Sto riordinando la scrivania. <br />
                    A breve caricherò nuovi esperimenti open-source.
                  </p>
                </div>
              </ScrollReveal>
            ) : (
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