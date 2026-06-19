// src/features/contact/ContactFeature.jsx
import React from 'react';

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
        <a 
          href="mailto:tuamail@esempio.com" 
          className="group relative bg-white text-black text-sm font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-xl shadow-black/40 overflow-hidden"
        >
          {/* Un micro-effetto di luce interna al passaggio del mouse */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]" />
          Invia una Email
        </a>
        
        <a 
          href="https://linkedin.com/in/tuo-user" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white text-sm font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
        >
          Connettiti su LinkedIn
        </a>
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