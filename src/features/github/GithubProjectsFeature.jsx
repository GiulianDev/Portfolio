import React from 'react';
import { CardLayout } from '../../shared/ui/CardLayout';
import { useGithubProjects } from './useGithubProjects';

export function GithubProjectsFeature({ isActive }) {
  // Recuperiamo i progetti GitHub dal tuo hook custom
  const { projects, loading, error } = useGithubProjects('GiulianDev', 6);

  return (
    <CardLayout gradientColor="from-emerald-600 to-teal-700" watermarkNumber="02" isActive={isActive}>
      
      {/* HEADER DELLA SEZIONE */}
      <div className="flex-shrink-0">
        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Open Source
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 text-white tracking-tight leading-none">
          Progetti GitHub
        </h2>
      </div>
      
      {/* LISTA PROGETTI FLUIDA (Senza altezze fisse, overflow o scrollbar interne) */}
      <div className="mt-12 w-full">
        
        {loading && (
          <p className="text-white/60 animate-pulse text-center py-12 font-medium">
            Caricamento repository in corso...
          </p>
        )}
        
        {error && (
          <p className="text-red-200 bg-red-900/20 border border-red-500/10 p-4 rounded-xl text-center py-6">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects?.map((repo) => (
              <div
                key={repo.id}
                className="group flex flex-col justify-between bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Informazioni del Progetto */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white tracking-tight truncate group-hover:text-emerald-400 transition-colors duration-300">
                      {repo.name}
                    </h3>
                    
                    {/* Badge del linguaggio di programmazione */}
                    {repo.language && (
                      <span className="text-[10px] bg-white/10 text-white/90 px-2.5 py-1 rounded-md font-semibold tracking-wider uppercase whitespace-nowrap">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  
                  {/* Descrizione del progetto con fallback */}
                  <p className="text-white/60 text-sm mt-3 leading-relaxed line-clamp-2 min-h-[40px]">
                    {repo.description || 'Nessuna descrizione fornita per questo progetto.'}
                  </p>
                </div>
                
                {/* Pulsanti di Azione (Adattabili e più grandi per il touch da mobile) */}
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pt-4 border-t border-white/5">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors duration-200"
                  >
                    Codice GitHub
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 text-center bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-950/20 transition-all duration-200"
                    >
                      Vedi Online Live
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </CardLayout>
  );
}