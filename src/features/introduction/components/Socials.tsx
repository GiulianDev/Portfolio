import { ScrollReveal } from '@ui';
import React from 'react';

// ─── ICONE CUSTOM ─── //
const IconProps = { size: 20, strokeWidth: 1.5, className: "currentColor" };

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={IconProps.size} height={IconProps.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={IconProps.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={IconProps.size} height={IconProps.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={IconProps.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={IconProps.size} height={IconProps.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={IconProps.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={IconProps.size} height={IconProps.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={IconProps.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

// ─── ESPORTIAMO GLI ARRAY DATI ─── //
const socials = [
  { 
    name: 'GitHub', 
    icon: GithubIcon, 
    url: 'https://github.com/GiulianDev', 
    hoverColor: 'hover:text-white hover:border-white hover:bg-white/5' 
  }, { 
    name: 'LinkedIn', icon: LinkedinIcon, 
    url: 'https://linkedin.com/in/tuo-user', 
    hoverColor: 'hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/5' 
  }, { 
    name: 'Instagram', icon: InstagramIcon, 
    url: 'https://instagram.com/tuo-user', 
    hoverColor: 'hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/5' 
  }, { 
    name: 'Twitter / X', icon: TwitterIcon, 
    url: 'https://twitter.com/tuo-user', 
    hoverColor: 'hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/5' 
  },
];

export function Socials() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {socials.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <ScrollReveal 
            key={social.name} 
            delay={0.4 + (index * 0.05)}
            direction="up"
          >
            <a 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 transition-all duration-300 ${social.hoverColor}`}
            >
              <IconComponent />
            </a>
          </ScrollReveal>
        );
      })}
    </div>
  );
}