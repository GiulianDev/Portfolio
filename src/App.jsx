import React from 'react';
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/github/GithubProjectsFeature';
import { LinkFeature } from './features/links/LinkFeature';
import { ContactFeature } from './features/contact/ContactFeature';

function App() {
  return (
    // Questo è il vero contenitore dello scroll-snap: controlla l'altezza e lo scrolling dell'intera pagina
    <div className="h-screen w-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-[#0a0a0a] text-neutral-100 custom-scrollbar select-none">
      
      {/* Floating Pill Navbar - Perfetta sia per Desktop che Mobile */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 flex items-center gap-5 z-50 shadow-2xl shadow-black/80 transition-all duration-300 hover:border-white/20 pointer-events-auto">
        <a href="#intro" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Chi Sono</a>
        <a href="#github" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">GitHub</a>
        <a href="#links" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Progetti</a>
        <a href="#contact" className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors">Contatti</a>
      </nav>

      {/* Brand Header (Nascosto su mobile per pulizia, visibile su PC) */}
      <header className="fixed top-7 left-8 z-40 hidden md:block">
        <h1 className="text-lg font-black text-white tracking-tighter uppercase">Giulian.dev</h1>
      </header>

      {/* Flusso delle sezioni - Ognuna è agganciata allo scroll snap */}
      <main className="w-full h-full">
        
        <section id="intro" className="snap-start h-screen w-full flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-5xl transition-all duration-500">
            <IntroFeature isActive={true} />
          </div>
        </section>
        
        <section id="github" className="snap-start h-screen w-full flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-5xl h-[85vh] flex flex-col">
            <GithubProjectsFeature isActive={true} />
          </div>
        </section>
        
        <section id="links" className="snap-start h-screen w-full flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-5xl transition-all duration-500">
            <LinkFeature isActive={true} />
          </div>
        </section>
        
        <section id="contact" className="snap-start h-screen w-full flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-5xl transition-all duration-500">
            <ContactFeature isActive={true} />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;