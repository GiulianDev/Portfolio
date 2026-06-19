import React, { useRef, useEffect } from 'react';
import { CardLayout } from '../../shared/ui/CardLayout';
import { useGithubProjects } from './useGithubProjects';

export function GithubProjectsFeature({ isActive }) {
  // Recuperiamo i progetti GitHub dal tuo hook custom
  const { projects, loading, error } = useGithubProjects('GiulianDev', 6);
  
  // Creiamo un riferimento al contenitore della lista dei progetti
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const element = scrollContainerRef.current;
    if (!element) return;

    // Fermiamo l'evento NATIVO del browser sul nascere, prima che raggiunga Swiper
    const handleNativeWheel = (e) => {
      e.stopPropagation();
    };

    // Aggiungiamo il listener nativo del DOM
    element.addEventListener('wheel', handleNativeWheel, { passive: true });
    
    // Pulizia dell'evento quando il componente si smonta
    return () => {
      element.removeEventListener('wheel', handleNativeWheel);
    };
  }, []);

  return (
    <CardLayout gradientColor="from-emerald-600 to-teal-700" watermarkNumber="02" isActive={isActive}>
      
      {/* HEADER */}
      <div className="flex-shrink-0">
        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Open Source
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 text-white tracking-tight leading-none">
          Progetti GitHub
        </h2>
      </div>
      
      {/* LISTA PROGETTI CORRETTA */}
      <div 
        ref={scrollContainerRef}
        className="flex-grow mt-8 overflow-y-auto pr-2 custom-scrollbar pb-4 min-h-0 swiper-no-mousewheel swiper-no-swiping"
      >
        {loading && (
          <p className="text-white/70 animate-pulse text-center mt-10">Caricamento repository...</p>
        )}
        
        {error && (
          <p className="text-red-200 bg-red-900/20 p-4 rounded-xl text-center mt-10">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((repo) => (
              <div
                key={repo.id}
                className="group flex flex-col justify-between bg-black/20 border border-white/10 backdrop-blur-sm rounded-2xl p-5 transition-all duration-300 hover:border-white/20 hover:bg-black/30"
              >
                {/* Info Progetto */}
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-white tracking-tight truncate">
                      {repo.name}
                    </h3>
                    {/* Badge del linguaggio */}
                    {repo.language && (
                      <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-md font-medium">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  
                  {/* Descrizione con fallback */}
                  <p className="text-white/70 text-sm mt-2 line-clamp-2 min-h-[40px]">
                    {repo.description || 'Nessuna descrizione fornita per questo progetto.'}
                  </p>
                </div>
                
                {/* Pulsanti di Azione Doppi */}
                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-200"
                  >
                    Codice GitHub
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-emerald-950/20 transition-all duration-200 animate-fade-in"
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