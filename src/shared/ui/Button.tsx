// src/shared/ui/Button.tsx
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'accent';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  className = '',
  ...props
}: ButtonProps) {
  
  // Stili base: arrotondamento più estremo (rounded-2xl invece di xl) per seguire il minimalismo delle card
  const baseStyles = "inline-flex items-center justify-center text-sm font-semibold px-6 py-3.5 rounded-2xl transition-all duration-400 ease-out focus:outline-none focus:ring-2 focus:ring-white/20";
  
  // Stili specifici aggiornati alla nuova palette Elettrica
  const variants = {
    // Primary: Ora è un bianco leggermente opaco (glassy) con testo scuro per non accecare l'utente
    primary: "group relative bg-white/90 backdrop-blur-md text-slate-900 hover:bg-white hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] overflow-hidden",
    
    // Outline: Reso ancora più etereo e sottile
    outline: "bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 text-neutral-300 hover:text-white hover:-translate-y-1",
    
    // Accent: Aggiornato al Blu/Indaco con un bagliore (glow) molto tech
    accent: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.5)] border border-white/10 hover:-translate-y-1"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  // Se viene passato un link, renderizziamo un tag <a>
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {variant === 'primary' && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_ease-in-out]" />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </a>
    );
  }

  // Altrimenti renderizziamo un classico <button>
  return (
    <button className={combinedClasses} {...props}>
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_ease-in-out]" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}