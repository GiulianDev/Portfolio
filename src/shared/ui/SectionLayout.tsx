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
    <>
    <style>{`
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: 
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
          .mask-y-fade {
            mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          }
      `}</style>
      <section 
        id={id} 
        className={`relative w-full py-24 md:py-32 flex justify-center ${className}`}
        >
        
        {/* ─── EFFETTO GRIGLIA CON DISSOLVENZA (Mask) ─── */}
        {hasGrid && (
          <div id={`${id}-bg-grid`} className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern mask-y-fade opacity-80" />
        )}
        
        {/* ─── CONTENITORE DEL CONTENUTO ─── */}
        <div id={`${id}-container`} className="relative z-10 w-full max-w-5xl px-6">
          {children}
        </div>
        
      </section>
    </>
  );
}
