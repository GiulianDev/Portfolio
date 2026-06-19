// src/features/contact/ContactFeature.jsx
import React from 'react';
import { Button } from '../../shared/ui/Button';

export function ContactFeature() {
  return (
    <div className="w-full flex flex-col justify-center min-h-[60vh] relative">
      
      {/* ─── INTESTAZIONE DELLA SEZIONE ─── */}
      <div className="flex flex-col">
        {/* Badge minimale con punto luce arancione */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Disponibile per nuove collaborazioni
          </span>
        </div>
        
        {/* Titolo Gigante con gradiente caldo */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1] max-w-3xl">
          Hai un progetto in mente? <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400">
            Filiamo il codice insieme.
          </span>
        </h2>
        
        {/* Descrizione d'impatto */}
        <p className="text-neutral-400 text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
          Che si tratti di una grande idea, di una posizione aperta nel tuo team o semplicemente di un saluto tra sviluppatori, la mia casella di posta è sempre aperta.
        </p>
      </div>

      {/* ─── BOTTONI DI CONTATTO DIRETTI ─── */}
      <div className="flex flex-wrap gap-4 mt-10">
        <Button 
          href="mailto:tuamail@esempio.com" 
          variant="primary" 
          className="px-8 py-4" /* Allarghiamo il padding per dare più importanza */
        >
          Invia una Email
        </Button>
        
        <Button 
          href="https://linkedin.com/in/tuo-user" 
          target="_blank" 
          rel="noopener noreferrer" 
          variant="outline"
          className="px-8 py-4"
        >
          Connettiti su LinkedIn
        </Button>
      </div>

      {/* ─── FOOTER MINIMALE INTEGRATO SUL FONDO DELLA PAGINA ─── */}
      <div className="mt-24 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-400">GiulianDev</span>
          <span>•</span>
          <p>© 2026. Tutti i diritti riservati.</p>
        </div>
        <div className="flex items-center gap-4">
          <p>Progettato con cura minimale</p>
          <span>•</span>
          <p className="hover:text-neutral-300 transition-colors">React + Vite + Tailwind</p>
        </div>
      </div>

    </div>
  );
}