import React, { useState, useEffect } from 'react';
import { SectionLayout } from './shared/ui/SectionLayout';
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/github/GithubProjectsFeature';
import { LinkFeature } from './features/links/LinkFeature';
import { ContactFeature } from './features/contact/ContactFeature';
import { Navbar } from '@ui';

function App() {

  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    const sections = document.querySelectorAll('main section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    // Ho cambiato il bg di base per armonizzarsi con il nuovo index.css
    <div className="relative min-h-screen bg-[#04091a] text-neutral-200 font-sans antialiased selection:bg-cyan-500 selection:text-black">        
     
      {/* ─── LUCI FLUTTUANTI (Palette Elettrica Morbida e Attenuata) ─── */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        
        {/* 1. Base: Blu Puro Profondo (Sfumato a 25%) */}
        <div 
          className="absolute top-[-5%] left-[-10%] w-[90vw] sm:w-[50vw] h-[90vw] sm:h-[50vw] bg-blue-600/25 rounded-full blur-[100px] sm:blur-[130px] mix-blend-screen animate-electric" 
          style={{ animationDelay: '0s' }}
        />
        
        {/* 2. Core (Destra): Indaco (Etereo a 15%) */}
        <div 
          className="absolute top-[30%] right-[-10%] w-[80vw] sm:w-[40vw] h-[80vw] sm:h-[40vw] bg-indigo-500/15 rounded-full blur-[120px] sm:blur-[150px] mix-blend-screen animate-electric" 
          style={{ animationDelay: '2s' }}
        />
        
        {/* 3. Accento: Violetto (Sussurrato a 15%) */}
        <div 
          className="absolute bottom-[-5%] left-[5%] w-[85vw] sm:w-[50vw] h-[85vw] sm:h-[50vw] bg-violet-600/15 rounded-full blur-[100px] sm:blur-[140px] mix-blend-screen animate-electric" 
          style={{ animationDelay: '4s' }}
        />
        
      </div>

      {/* ─── FLOATING NAVBAR ─── */}
      <Navbar id="Navbar" activeSection={activeSection} />

      {/* Brand Header */}
      <header className="fixed top-7 left-8 z-40 hidden lg:block">
        <h1 className="text-sm font-black text-white tracking-widest uppercase opacity-40">Giulian.dev</h1>
      </header>

      {/* ─── FLUSSO DELLE SEZIONI ─── */}
      <main className="relative z-10 w-full flex flex-col items-center">
        
        <SectionLayout id="intro" hasGrid className="min-h-screen pt-32">
          <IntroFeature />
        </SectionLayout>
        
        <SectionLayout id="github" hasGrid>
          <GithubProjectsFeature />
        </SectionLayout>
        
        {/* <SectionLayout id="links">
          <LinkFeature />
        </SectionLayout> */}
        
        <SectionLayout id="contact" hasGrid>
          <ContactFeature />
        </SectionLayout>

      </main>
    </div>
  );
}

export default App;