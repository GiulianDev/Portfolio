import React from 'react';
import { ScrollReveal } from '@ui';
import { TechBadge } from './TechBadge';

const technologies = [
  { label: 'TypeScript', dot: 'bg-blue-500', border: 'hover:border-blue-500/50' },
  { label: 'JavaScript', dot: 'bg-yellow-400', border: 'hover:border-yellow-400/50' },
  { label: 'React', dot: 'bg-cyan-400', border: 'hover:border-cyan-400/50' },
  { label: 'Tailwind CSS', dot: 'bg-sky-400', border: 'hover:border-sky-400/50' },
  { label: 'C#', dot: 'bg-green-500', border: 'hover:border-green-500/50' },
  { label: 'C++', dot: 'bg-pink-500', border: 'hover:border-pink-500/50' },
  { label: 'HTML', dot: 'bg-orange-500', border: 'hover:border-orange-500/50' },
  { label: 'CSS', dot: 'bg-blue-400', border: 'hover:border-blue-400/50' },
];

export function Technologies() {
  return (
    <div className="mt-10 flex flex-col gap-3">
      <ScrollReveal delay={0.6}>
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Tech Stack Principale</span>
      </ScrollReveal>
      
      <div className="flex flex-wrap gap-2.5">
        {technologies.map((tech, index) => (
          <ScrollReveal 
            key={tech.label} 
            delay={0.65 + (index * 0.05)}
            direction="up"
          >
            <TechBadge 
              label={tech.label} 
              dotColorClass={tech.dot} 
              hoverBorderClass={tech.border} 
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}