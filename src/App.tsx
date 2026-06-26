import React, { useState, useEffect } from 'react';
import { Navbar, SectionLayout, BackgroundLights, Footer } from '@ui';
import { GithubProjectsFeature } from '@features/github/GithubProjectsFeature';
import { IntroFeature } from '@features/introduction/IntroFeature';
import { ContactFeature } from '@features/contact/ContactFeature';
import { SectionVariant } from './shared/types/section';

function App() {

  const sectionsArray: SectionVariant[] = ['intro', 'github', 'contact'];
  const [activeSection, setActiveSection] = useState<SectionVariant>('intro');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionVariant);
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
      <BackgroundLights activeSection={activeSection} />

      {/* ─── FLOATING NAVBAR ─── */}
      <Navbar activeSection={activeSection} />

      {/* Brand Header */}
      <header className="fixed top-7 left-8 z-40 hidden lg:block">
        <h1 className="text-sm font-black text-white tracking-widest uppercase opacity-40">Giulian.dev</h1>
      </header>

      {/* ─── FLUSSO DELLE SEZIONI ─── */}
      <main className="relative z-10 w-full flex flex-col items-center">
        
        <SectionLayout id={sectionsArray[0]} hasGrid>
          <IntroFeature />
        </SectionLayout>
        
        <SectionLayout id={sectionsArray[1]} hasGrid>
          <GithubProjectsFeature />
        </SectionLayout>
        
        {/* <SectionLayout id="links">
          <LinkFeature />
        </SectionLayout> */}
        
        <SectionLayout id={sectionsArray[2]} hasGrid>
          <ContactFeature />
        </SectionLayout>

      </main>

      {/* ─── GLOBAL FOOTER ─── */}
      <Footer />

    </div>
  );
}

export default App;