// src/shared/ui/ProjectCard.tsx
import React from 'react';

// Definiamo i dati che la card si aspetta di ricevere
interface ProjectCardProps {
  title: string;
  description?: string | null;
  language?: string | null;
  githubUrl: string;
  liveUrl?: string | null;
}

export function ProjectCard({ 
  title, 
  description, 
  language, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/20 rounded-3xl p-7 md:p-8 transition-all duration-500 overflow-hidden backdrop-blur-sm">
      
      <div>
        {/* Top: Indicatore del Linguaggio (Stile minimale a "dot") */}
        {language && (
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
            <span className="text-[11px] font-semibold text-neutral-500 tracking-widest uppercase">
              {language}
            </span>
          </div>
        )}
        
        {/* Titolo */}
        <h3 className="text-xl md:text-2xl font-medium text-neutral-200 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        
        {/* Descrizione pulita */}
        <p className="text-neutral-400 text-sm mt-3 leading-relaxed line-clamp-2">
          {description || 'Nessuna descrizione fornita. Esplora la repository per scoprire i dettagli tecnici di questo progetto.'}
        </p>
      </div>
      
      {/* Footer: Link minimali con freccia animata al passaggio del mouse */}
      <div className="flex items-center gap-6 mt-10">
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-neutral-500 hover:text-white transition-colors duration-300 flex items-center gap-1.5"
        >
          Codice
          <span className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
            →
          </span>
        </a>

        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-400/70 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1.5"
          >
            Sito Live
            <span className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out delay-75">
              ↗
            </span>
          </a>
        )}
      </div>

    </div>
  );
}