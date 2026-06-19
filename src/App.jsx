import React from 'react';
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/github/GithubProjectsFeature';
import { LinkFeature } from './features/links/LinkFeature';
import { ContactFeature } from './features/contact/ContactFeature';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-neutral-200 font-sans antialiased selection:bg-emerald-500 selection:text-black">
      
      {/* ─── EFFETTI DI LUCE DI SFONDO (Rendono il sito dinamico e non cupo) ─── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Luce Viola/Blu dietro la Intro */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/15 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px]" />
        
        {/* Luce Smeraldo dietro GitHub */}
        <div className="absolute top-[35%] left-[20%] w-[60vw] h-[40vw] bg-emerald-950/20 rounded-full blur-[130px]" />
        
        {/* Luce Arancione/Rossa dietro i Contatti */}
        <div className="absolute bottom-[-5%] right-[-10%] w-[50vw] h-[50vw] bg-orange-950/20 rounded-full blur-[120px]" />
      </div>

      {/* ─── FLOATING NAVBAR PREMIUM ─── */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-neutral-950/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-2 flex items-center gap-6 z-50 shadow-lg shadow-black/20">
        <a href="#intro" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Chi Sono</a>
        <a href="#github" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">GitHub</a>
        <a href="#links" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Progetti</a>
        <a href="#contact" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Contatti</a>
      </nav>

      {/* ─── FLUSSO DELLE SEZIONI A TUTTA LARGHEZZA ─── */}
      <main className="relative z-10 w-full">
        
        {/* SEZIONE 1: INTRO (Griglia geometrica soft di sfondo) */}
        <section id="intro" className="relative min-h-[90vh] w-full flex items-center justify-center bg-grid-pattern pt-24 pb-16 px-6">
          <div className="w-full max-w-5xl">
            <IntroFeature />
          </div>
        </section>
        
        {/* SEZIONE 2: GITHUB (Sfondo leggermente più scuro per stacco visivo) */}
        <section id="github" className="w-full bg-neutral-950/30 border-y border-white/[0.02] py-24 md:py-32 px-6">
          <div className="w-full max-w-5xl mx-auto">
            <GithubProjectsFeature />
          </div>
        </section>
        
        {/* SEZIONE 3: LINKS */}
        {/* <section id="links" className="w-full py-24 md:py-32 px-6">
          <div className="w-full max-w-5xl mx-auto">
            <LinkFeature />
          </div>
        </section> */}
        
        {/* SEZIONE 4: CONTATTI */}
        <section id="contact" className="w-full bg-gradient-to-b from-transparent to-neutral-950/50 border-t border-white/[0.02] py-24 md:py-32 px-6">
          <div className="w-full max-w-5xl mx-auto">
            <ContactFeature />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;