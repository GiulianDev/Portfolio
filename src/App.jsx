import React from 'react';
import { SectionLayout } from './shared/ui/SectionLayout';
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/github/GithubProjectsFeature';
import { LinkFeature } from './features/links/LinkFeature';
import { ContactFeature } from './features/contact/ContactFeature';

function App() {
  return (
    <div className="relative min-h-screen bg-[#03050a] text-neutral-200 font-sans antialiased selection:bg-blue-500 selection:text-white">
      
      {/* ─── NUOVE LUCI GLOBALI (Tema Cosmic: Blue/Purple/Indigo) ─── */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        
        {/* Luce Blu Brillante in alto a sinistra */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/15 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Luce Viola Profondo centrale/destra */}
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/15 rounded-full blur-[130px] mix-blend-screen animate-pulse duration-10000" />
        
        {/* Luce Indaco in basso a sinistra (accompagna lo scroll verso i contatti) */}
        <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[140px] mix-blend-screen" />
        
        {/* Un tocco di Ciano (Azzurro chiaro) tenue per dare contrasto freddo */}
        <div className="absolute top-[60%] right-[20%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
        
      </div>

      {/* ─── FLOATING NAVBAR ─── */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 flex items-center gap-6 z-50 shadow-xl shadow-black/40">
        <a href="#intro" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Chi Sono</a>
        <a href="#github" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">GitHub</a>
        {/* <a href="#links" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Progetti</a> */}
        <a href="#contact" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Contatti</a>
      </nav>

      {/* Brand Header */}
      <header className="fixed top-7 left-8 z-40 hidden lg:block">
        <h1 className="text-sm font-black text-white tracking-widest uppercase opacity-40">Giulian.dev</h1>
      </header>

      {/* ─── FLUSSO DELLE SEZIONI (Con il nuovo componente condiviso) ─── */}
      <main className="relative z-10 w-full flex flex-col items-center">
        
        {/* L'intro usa la griglia e ha un'altezza minima per coprire lo schermo iniziale */}
        <SectionLayout id="intro" hasGrid className="min-h-screen pt-32">
          <IntroFeature />
        </SectionLayout>
        
        {/* GitHub usa la griglia per dare il feeling "tech/code" */}
        <SectionLayout id="github" hasGrid>
          <GithubProjectsFeature />
        </SectionLayout>
        
        {/* I link rimangono puliti senza griglia per spezzare il ritmo visivo */}
        {/* <SectionLayout id="links">
          <LinkFeature />
        </SectionLayout> */}
        
        {/* Contatti usa la griglia per chiudere il sito con lo stesso stile dell'apertura */}
        <SectionLayout id="contact" hasGrid>
          <ContactFeature />
        </SectionLayout>

      </main>
    </div>
  );
}

export default App;