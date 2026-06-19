// src/shared/ui/Button.tsx
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'accent';
  href?: string;
  target?: string;
  rel?: string;
  className?: string; // Permette di sovrascrivere o aggiungere classi (es: w-full su mobile)
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
  
  // Stili base applicati a tutti i bottoni
  const baseStyles = "inline-flex items-center justify-center text-sm font-bold px-6 py-3.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20";
  
  // Stili specifici per ogni variante
  const variants = {
    primary: "group relative bg-white text-black hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10 overflow-hidden",
    outline: "bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white hover:-translate-y-0.5",
    accent: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  // Se viene passato un link, renderizziamo un tag <a>
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {/* Micro-animazione di luce interna solo per il bottone primario */}
        {variant === 'primary' && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]" />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </a>
    );
  }

  // Altrimenti renderizziamo un classico <button>
  return (
    <button className={combinedClasses} {...props}>
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}
