// src/shared/ui/MinimalBadge.tsx
import React from 'react';

interface MinimalBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'intro' | 'github' | 'contact';
  children: React.ReactNode;
}

export function MinimalBadge({ variant = 'intro', children, className = '', ...props }: MinimalBadgeProps) {
  const baseStyles = "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-neutral-300 backdrop-blur-sm transition-colors duration-300";
  
  // Il componente contiene il proprio dizionario di stile
  const variants = {
    intro: "hover:border-fuchsia-500/30",
    github: "hover:border-indigo-500/30",
    contact: "hover:border-orange-500/30",
  };

  const dotVariants = {
    intro: "bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)]",
    github: "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]",
    contact: "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className={`w-2 h-2 rounded-full ${dotVariants[variant]}`} />
      <span>{children}</span>
    </div>
  );
}