import React from 'react';

export function IntroFeature() {
  return (
    <div className="w-full flex flex-col justify-center min-h-[50vh]">
      
      {/* Badge minimale */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
          Disponibile per nuove opportunità
        </span>
      </div>
      
      {/* Titolo Principale Gigante con Gradiente (Spezza il nero!) */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mt-6 tracking-tight text-white leading-[1.1]">
        Sviluppo esperienze web <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-emerald-400">
          innovative e performanti.
        </span>
      </h1>
      
      {/* Sottotitolo / Bio corta */}
      <p className="text-neutral-400 text-lg sm:text-xl mt-8 max-w-2xl leading-relaxed">
        Ciao, sono <span className="text-white font-semibold">Giulian</span>. Sono uno sviluppatore specializzato in React, Vite e Tailwind CSS. Trasformo idee complesse in interfacce pulite, veloci e accessibili a chiunque.
      </p>
      
      {/* Pulsanti d'azione rapidi */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a 
          href="#github" 
          className="bg-white text-black text-sm font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02]"
        >
          Esplora i miei progetti
        </a>
        <a 
          href="#contact" 
          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-colors duration-200"
        >
          Contattami
        </a>
      </div>

    </div>
  );
}