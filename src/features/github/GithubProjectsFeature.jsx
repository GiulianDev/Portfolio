import React from 'react';
import { CardLayout } from '../../shared/ui/CardLayout';
import { useGithubProjects } from './useGithubProjects';

export function GithubProjectsFeature({ isActive }) {
  // 1 riga di codice per gestire tutta la logica complessa!
  const { projects, loading, error } = useGithubProjects('GiulianDev', 6);

  return (
    <CardLayout gradientColor="from-emerald-600 to-teal-700" watermarkNumber="02" isActive={isActive}>
      
      {/* HEADER DELLA CARD (Immutato) */}
      <div className="flex-shrink-0">
        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Open Source
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 text-white tracking-tight leading-none">
          Progetti GitHub
        </h2>
      </div>
      
      {/* CONTENUTO SCORREVOLE */}
      <div className="flex-grow mt-8 overflow-y-auto pr-2 custom-scrollbar pb-4">
        {loading && <p className="text-white/70 animate-pulse text-center mt-10">Caricamento repository...</p>}
        
        {error && <p className="text-red-200 bg-red-900/20 p-4 rounded-xl text-center mt-10">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between bg-black/20 hover:bg-black/40 border border-white/10 backdrop-blur-sm rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 truncate">
                    {repo.name}
                  </h3>
                  <p className="text-white/70 text-sm mt-2 line-clamp-2">
                    {repo.description || 'Nessuna descrizione disponibile.'}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </CardLayout>
  );
}