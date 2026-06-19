import React from 'react';
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/github/GithubProjectsFeature';
import { LinkFeature } from './features/links/LinkFeature';
import { ContactFeature } from './features/contact/ContactFeature';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0f141c] text-neutral-200 font-sans antialiased selection:bg-emerald-500 selection:text-black">
      
      {/* ─── EFFETTI DI LUCE DI SFONDO POTENZIATI (Visibili su Mobile) ─── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Luce Viola/Blu alta */}
        <div className="absolute top-[-5%] left-[-10%] w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] bg-purple-500/10 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute top-[15%] right-[-10%] w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] bg-blue-500/10 rounded-full blur-[100px]" />
        
        {/* Luce Smeraldo centrale (GitHub) */}
        <div className="absolute top-[40%] left-[-5%] w-[80vw] h-[50vw] bg-emerald-500/8 rounded-full blur-[120px]" />
        
        {/* Luce Arancione bassa (Contatti) */}
        <div className="absolute bottom-[-5%] right-[-10%] w-[70vw] h-[70vw] bg-orange-500/10 rounded-full blur-[100px]" />
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

      {/* ─── FLUSSO DELLE SEZIONI ─── */}
      <main className="relative z-10 w-full">
        
        {/* SEZIONE 1: INTRO (La griglia qui risalterà molto di più) */}
        <section id="intro" className="relative min-h-[85vh] w-full flex items-center justify-center bg-grid-pattern pt-24 pb-16 px-6">
          <div className="w-full max-w-5xl">
            <IntroFeature />
          </div>
        </section>
        
        {/* SEZIONE 2: GITHUB */}
        <section id="github" className="w-full bg-slate-900/20 border-y border-white/[0.04] py-24 md:py-32 px-6">
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
        <section id="contact" className="w-full bg-gradient-to-b from-transparent to-slate-900/40 border-t border-white/[0.04] py-24 md:py-32 px-6">
          <div className="w-full max-w-5xl mx-auto">
            <ContactFeature />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;