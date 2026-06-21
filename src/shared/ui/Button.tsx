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
  
  // ─── STILI BASE ───
  // Forma "a pillola" (rounded-full), animazioni più secche e veloci (duration-200),
  // active:scale-[0.98] per un feedback tattile "premium" al click.
  const baseStyles = "inline-flex items-center justify-center text-sm font-medium px-7 py-3 rounded-full transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 active:scale-[0.98]";
  
  const variants = {
    // Primary: Contrasto netto. Bianco puro con testo molto scuro. 
    // Un leggero bagliore bianco si attiva solo all'hover, rendendolo vivo ma non invadente.
    primary: "bg-white text-slate-950 hover:bg-neutral-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]",
    
    // Outline: Minimalista e tecnico. Bordo quasi invisibile che si definisce all'hover,
    // insieme a un leggerissimo cambio di sfondo per dare profondità.
    outline: "bg-transparent border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.03]",
    
    // Accent: Elegante e vibrante. Sostituisce il vecchio gradiente con un colore solido indaco 
    // incorniciato da un bordo semitrasparente e un glow morbido.
    accent: "bg-indigo-500 text-white border border-indigo-400/50 hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-300/60"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        <span className="flex items-center justify-center gap-2.5">{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span className="flex items-center justify-center gap-2.5">{children}</span>
    </button>
  );
}