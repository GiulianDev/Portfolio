import React, { ReactNode } from 'react';

interface MinimalBadgeProps {
  children: ReactNode; // Permette di scrivere il testo dentro al tag
  dotClass?: string;   // Gestisce il colore del pallino e del relativo bagliore
}

export function MinimalBadge({ children, dotClass = "bg-emerald-500 shadow-emerald-500/50" }: MinimalBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Il punto luce con animazione pulse e ombra dinamica */}
      <span className={`w-2 h-2 rounded-full shadow-lg animate-pulse ${dotClass}`} />
      
      {/* Il testo passato all'interno del tag */}
      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
        {children}
      </span>
    </div>
  );
}