// src/features/contact/ContactFeature.jsx
import React from 'react';
import { CardLayout } from '../../shared/ui/CardLayout';

export function ContactFeature({ isActive }) {
  return (
    <CardLayout gradientColor="from-amber-600 to-orange-700" watermarkNumber="04" isActive={isActive}>
      
      <div className="flex flex-col justify-between h-full py-4">
        {/* Intestazione */}
        <div>
          <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Disponibile a nuove idee
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-6 text-white tracking-tight leading-none max-w-2xl">
            Hai un progetto in mente? Lavoriamoci insieme.
          </h2>
        </div>
        
        {/* Call To Action Minimali */}
        <div className="mt-12">
          <p className="text-white/70 text-lg mb-6 max-w-md">
            Scrivimi direttamente per collaborazioni, posizioni aperte o anche solo per fare due chiacchiere sul codice.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:tuamail@esempio.com" 
              className="bg-white text-black font-bold px-6 py-3.5 rounded-2xl text-sm transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-xl shadow-black/25"
            >
              Invia una Email
            </a>
            
            <a 
              href="https://linkedin.com/in/tuo-user" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/10 border border-white/20 text-white font-bold px-6 py-3.5 rounded-2xl text-sm transition-all duration-300 hover:scale-[1.02]"
            >
              Connettiti su LinkedIn
            </a>
          </div>
        </div>

        {/* Footer integrato nella chiusura */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 GiulianDev. Tutti i diritti riservati.</p>
          <p>Sviluppato in React + Vite + Tailwind</p>
        </div>

      </div>
    </CardLayout>
  );
}