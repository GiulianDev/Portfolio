import React from 'react';
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/github/GithubProjectsFeature';
import { LinkFeature } from './features/links/LinkFeature';
import { ContactFeature } from './features/contact/ContactFeature';

function App() {
  return (
    // Sfondo unico, lo scroll torna ad essere quello nativo, fluido e piacevole del browser
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 selection:bg-white selection:text-black antialiased">
      
      {/* Floating Pill Navbar rimane fissa ed elegante */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 flex items-center gap-6 z-50 shadow-xl shadow-black/40">
        <a href="#intro" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Chi Sono</a>
        <a href="#github" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">GitHub</a>
        <a href="#links" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Progetti</a>
        <a href="#contact" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Contatti</a>
      </nav>

      {/* Brand Header */}
      <header className="fixed top-7 left-8 z-40 hidden lg:block">
        <h1 className="text-sm font-black text-white tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity">Giulian.dev</h1>
      </header>

      {/* Contenitore principale: non usiamo max-w globale qui per permettere layout più dinamici */}
      <main className="w-full">
        
        {/* Sezione 1: Intro (Altezza minima quasi a schermo intero solo per l'impatto iniziale) */}
        <section id="intro" className="min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-12">
          <div className="w-full max-w-4xl">
            <IntroFeature />
          </div>
        </section>
        
        {/* Sezione 2: GitHub (Niente h-screen! Si allunga quanto serve, eliminando lo scroll interno fastidioso) */}
        <section id="github" className="py-24 md:py-36 px-4 border-t border-white/[0.03] bg-gradient-to-b from-transparent to-white/[0.01]">
          <div className="w-full max-w-5xl mx-auto">
            <GithubProjectsFeature />
          </div>
        </section>
        
        {/* Sezione 3: Link Extra */}
        <section id="links" className="py-24 md:py-36 px-4 border-t border-white/[0.03]">
          <div className="w-full max-w-4xl mx-auto">
            <LinkFeature />
          </div>
        </section>
        
        {/* Sezione 4: Contatti */}
        <section id="contact" className="py-24 md:py-36 px-4 border-t border-white/[0.03] bg-gradient-to-b from-white/[0.01] to-transparent">
          <div className="w-full max-w-4xl mx-auto">
            <ContactFeature />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;