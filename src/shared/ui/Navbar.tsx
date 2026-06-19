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
              relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-500 ease-out
              ${isActive 
                ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_20px_rgba(255,255,255,0.1)]' 
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }
            `}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}