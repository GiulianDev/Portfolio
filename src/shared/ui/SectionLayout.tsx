// src/shared/ui/SectionLayout.tsx
import React, { ReactNode } from 'react';

// Definiamo l'interfaccia per le props
interface SectionLayoutProps {
  id: string;                  // L'ID è obbligatorio per far funzionare lo scroll
  children: ReactNode;         // children accetta qualsiasi elemento React valido
  hasGrid?: boolean;           // Il '?' indica che è opzionale (di default è false)
  className?: string;          // Opzionale, per aggiungere classi extra (di default è '')
}

export function SectionLayout({ 
  id, 
  children, 
  hasGrid = false, 
  className = '' 
}: SectionLayoutProps) {
  return (
    <section 
      id={id} 
      className={`relative w-full py-24 md:py-32 flex justify-center ${className}`}
    >
      
      {/* ─── EFFETTO GRIGLIA CON DISSOLVENZA (Mask) ─── */}
      {hasGrid && (
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern mask-y-fade opacity-80" />
      )}
      
      {/* ─── CONTENITORE DEL CONTENUTO ─── */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        {children}
      </div>
      
    </section>
  );
}