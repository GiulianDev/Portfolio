// src/features/contact/ContactFeature.tsx
import React, { useState, useEffect } from 'react';
import { Button, MinimalBadge, ScrollReveal } from '@ui';

export function ContactFeature() {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const email = "giuliandev@gmail.com";

  useEffect(() => {
    // Controllo per verificare se l'utente sta usando uno smartphone o un tablet
    const checkIsMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkIsMobile);
  }, []);

  const handleEmailAction = () => {
    if (isMobile) {
      // Comportamento Mobile: Apre il client email predefinito
      window.location.href = `mailto:${email}`;
    } else {
      // Comportamento PC/Desktop: Copia l'email negli appunti
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Torna allo stato iniziale dopo 2s
    }
  };

  return (
    <div className="w-full flex flex-col justify-center min-h-[60vh] relative">
      
      <div className="flex flex-col">
        <ScrollReveal delay={0.1}>
          <MinimalBadge dotClass="bg-orange-500 shadow-orange-500/50">
            Contatti
          </MinimalBadge>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1] max-w-3xl">
            Hai un'idea in mente? <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400">
              Diamo forma al tuo progetto.
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="text-neutral-400 text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
            Che si tratti di sviluppare una nuova architettura, di una consulenza tecnica per il tuo team, o semplicemente di scambiare due chiacchiere sul mondo dev, la mia casella di posta è aperta.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.4}>
        <div className="flex flex-wrap gap-4 mt-10">
          {/* Bottone con logica condizionale (Copia per PC / Mailto per Mobile) */}
          <Button 
            variant="primary" 
            className="px-8 py-4 min-w-[200px]"
            onClick={handleEmailAction}
          >
            {isMobile 
              ? "Scrivimi un'email" 
              : (copied ? "Email Copiata!" : "Copia la mia email")}
          </Button>
          
          <Button 
            href="https://linkedin.com/in/tuo-user" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="outline"
            className="px-8 py-4"
          >
            Troviamoci su LinkedIn
          </Button>
        </div>
      </ScrollReveal>

      {/* Mostro il link di fallback per il client mail SOLO su PC, 
          poiché su mobile il bottone principale fa già questa azione */}
      {!isMobile && (
        <ScrollReveal delay={0.5}>
          <div className="mt-4">
            <a 
              href={`mailto:${email}`}
              className="text-sm text-neutral-500 hover:text-orange-400 transition-colors ml-1 underline decoration-white/20 underline-offset-4"
            >
              Oppure clicca qui per aprire il tuo client mail
            </a>
          </div>
        </ScrollReveal>
      )}
      
    </div>
  );
}