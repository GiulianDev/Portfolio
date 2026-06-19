// src/shared/ui/ProjectCard.tsx
import React from 'react';
import { Button } from './Button';

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
    <div className="group relative flex flex-col justify-between bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-emerald-900/20 overflow-hidden">
      
      {/* Effetto bagliore interno sfumato verde */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        {/* Top Card: Titolo e Linguaggio */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </h3>
          
          {language && (
            <span className="text-[10px] bg-white/10 text-neutral-300 border border-white/10 px-2.5 py-1 rounded-md font-semibold tracking-wider uppercase whitespace-nowrap">
              {language}
            </span>
          )}
        </div>
        
        {/* Descrizione con blocco automatico a 2 righe */}
        <p className="text-neutral-300 text-sm mt-3 leading-relaxed line-clamp-2 min-h-[40px]">
          {description || 'Nessuna descrizione fornita per questo progetto. Clicca sotto per esplorare il codice.'}
        </p>
      </div>
      
      {/* Pulsanti d'azione */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mt-8 pt-4 border-t border-white/10">
        <Button 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          variant="outline"
          className="w-full sm:flex-1 !py-3 !text-xs"
        >
          Codice Sorgente
        </Button>

        {liveUrl && (
          <Button 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="accent"
            className="w-full sm:flex-1 !py-3 !text-xs"
          >
            Sito Live ↗
          </Button>
        )}
      </div>

    </div>
  );
}