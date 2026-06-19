import React from 'react';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const navItems = [
    { id: 'intro', label: 'Chi Sono' },
    { id: 'github', label: 'GitHub' },
    // { id: 'links', label: 'Progetti' },
    { id: 'contact', label: 'Contatti' },
  ];

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center p-1 w-max max-w-[95vw] bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              relative px-3 py-1 sm:px-5 sm:py-1.5 text-[11px] sm:text-sm font-medium rounded-full transition-colors duration-500 ease-out flex items-center justify-center min-w-0 shrink
              ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white/70'}
            `}
          >
            {/* Effetto luce diffusa azzurra dal basso */}
            <span 
              className={`
                absolute inset-1 bg-sky-400/15 blur-sm rounded-full -z-10 transition-opacity duration-500 
                ${isActive ? 'opacity-100' : 'opacity-0'}
              `}
            />
            
            {/* Testo con gestione stringente dell'overflow */}
            <span className="relative z-10 transition-all duration-500 truncate">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}