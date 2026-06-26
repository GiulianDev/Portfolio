// src/shared/ui/TechBadge.tsx
import React from 'react';

interface TechBadgeProps {
  label: string;
  dotColorClass: string; // Esempio: 'bg-blue-500'
  hoverBorderClass: string; // Esempio: 'hover:border-blue-500/50'
}

export function TechBadge({ label, dotColorClass, hoverBorderClass }: TechBadgeProps) {
  return (
    <div 
      className={`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 cursor-default hover:-translate-y-0.5 hover:bg-white/10 ${hoverBorderClass} shadow-sm hover:shadow-lg`}
    >
      {/* Pallino stile GitHub con Glow */}
      <span className={`w-2 h-2 rounded-full ${dotColorClass} shadow-[0_0_8px_currentColor] opacity-80 group-hover:opacity-100 transition-opacity`} />
      
      {/* Testo del linguaggio */}
      <span className="text-xs font-bold text-neutral-300 group-hover:text-white transition-colors tracking-wide">
        {label}
      </span>
    </div>
  );
}