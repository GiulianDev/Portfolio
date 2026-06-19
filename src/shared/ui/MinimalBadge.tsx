// src/shared/ui/TechBadge.tsx
import React from 'react';

interface TechBadgeProps {
  label: string;
}

export function MinimalBadge({ label }: TechBadgeProps) {
  return (
    
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
        {label}
      </span>
    </div>

  );
}