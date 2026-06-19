import React from 'react';
import { useGithubProjects } from './useGithubProjects';

export function GithubProjectsFeature() {
  // Recuperiamo i progetti GitHub dal tuo hook custom originale
  const { projects, loading, error } = useGithubProjects('GiulianDev', 6);

  return (
    <div className="w-full flex flex-col justify-center">
      
      {/* ─── INTESTAZIONE DELLA SEZIONE (Stile identico all'Intro) ─── */}
      <div className="flex flex-col">
        {/* Badge minimale con punto luce verde */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Open Source & Repository
          </span>
        </div>
        
        {/* Titolo Gigante con sfumatura Smeraldo/Teal */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight text-white leading-none">
          Codice in <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Movimento.</span>
        </h2>
        
        {/* Breve descrizione per dare contesto */}
        <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
          Una selezione dei miei ultimi lavori su GitHub. Dai micro-servizi alle interfacce frontend, qui è dove le idee prendono forma attraverso il codice.
        </p>
      </div>

      {/* ─── GRIGLIA DEI PROGETTI FLUIDA ─── */}
      <div className="mt-12 w-full">
        
        {/* Stato di Caricamento */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
            <p className="text-neutral-500 text-sm font-medium">Sincronizzazione con GitHub...</p>
          </div>
        )}
        
        {/* Stato di Errore */}
        {error && (
          <div className="bg-red-950/20 border border-red-500/10 p-6 rounded-2xl text-center">
            <p className="text-red-400 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Rendering dei Progetti */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects?.map((repo) => (
              <div
                key={repo.id}
                className="group relative flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-emerald-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-emerald-950/10"
              >
                {/* Effetto bagliore interno nascosto, visibile solo al passaggio del mouse */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Card: Titolo e Linguaggio */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate group-hover:text-emerald-400 transition-colors duration-300">
                      {repo.name}
                    </h3>
                    
                    {repo.language && (
                      <span className="text-[10px] bg-white/[0.06] text-neutral-300 border border-white/5 px-2.5 py-1 rounded-md font-semibold tracking-wider uppercase whitespace-nowrap">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  
                  {/* Descrizione (Taglio automatico a 2 righe per uniformare le card) */}
                  <p className="text-neutral-400 text-sm mt-3 leading-relaxed line-clamp-2 min-h-[40px]">
                    {repo.description || 'Nessuna descrizione fornita per questo repository. Clicca sotto per esplorare il codice sorgente.'}
                  </p>
                </div>
                
                {/* Pulsanti d'azione minimali */}
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mt-8 pt-4 border-t border-white/[0.04]">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 text-center bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all duration-200"
                  >
                    Repository Git
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 text-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black text-xs font-black py-3 px-4 rounded-xl shadow-md shadow-emerald-500/10 transition-all duration-200"
                    >
                      Sito Live ↗
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}