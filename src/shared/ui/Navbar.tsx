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
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-500 ease-out flex items-center justify-center
              ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white/70'}
            `}
          >
            {/* Effetto luce diffusa azzurra dal basso, resa più delicata */}
            <span 
              className={`
                absolute inset-1 bg-sky-400/15 blur-sm rounded-full -z-10 transition-opacity duration-500 
                ${isActive ? 'opacity-100' : 'opacity-0'}
              `}
            />
            
            <span className="relative z-10 transition-all duration-500">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}