// src/features/github/GithubProjectsFeature.tsx
import React from 'react';
import { useGithubProjects } from './useGithubProjects';
import { ProjectCard } from '../../shared/ui/ProjectCard';

export function GithubProjectsFeature() {
  const { projects, loading, error } = useGithubProjects('GiulianDev', 6);

  return (
    <div className="w-full flex flex-col justify-center">
      
      {/* ─── INTESTAZIONE DELLA SEZIONE ─── */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Open Source & Repository
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight text-white leading-none">
          Codice in <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Movimento.</span>
        </h2>
        
        <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
          Una selezione dei miei ultimi lavori su GitHub. Dai micro-servizi alle interfacce frontend, qui è dove le idee prendono forma attraverso il codice.
        </p>
      </div>

      {/* ─── GRIGLIA DEI PROGETTI ─── */}
      <div className="mt-12 w-full">
        
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
            <p className="text-neutral-500 text-sm font-medium">Sincronizzazione con GitHub...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-950/20 border border-red-500/10 p-6 rounded-2xl text-center">
            <p className="text-red-400 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Mappiamo l'array usando la nostra nuova componente condivisa! */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects?.map((repo) => (
              <ProjectCard
                key={repo.id}
                title={repo.name}
                description={repo.description}
                language={repo.language}
                githubUrl={repo.html_url}
                liveUrl={repo.homepage}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}