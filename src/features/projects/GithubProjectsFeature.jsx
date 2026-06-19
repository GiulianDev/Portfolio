import React, { useState, useEffect } from 'react';
import { CardLayout } from '../../shared/ui/CardLayout';

export function GithubProjectsFeature({ isActive }) {
  // Qui dentro avremo la logica! Nessun'altra card ne sarà influenzata.
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Esempio fittizio di dove farai la fetch in futuro
  useEffect(() => {
    // fetch('https://api.github.com/users/tuo-username/repos')...
    setLoading(false);
  }, []);

  return (
    <CardLayout gradientColor="from-emerald-600 to-teal-700" watermarkNumber="02" isActive={isActive}>
      <div>
        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Open Source
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-6 text-white tracking-tight leading-none">
          Progetti GitHub
        </h2>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        {loading ? <p>Caricamento repository...</p> : <p>Lista interattiva dei repo qui.</p>}
      </div>
    </CardLayout>
  );
}