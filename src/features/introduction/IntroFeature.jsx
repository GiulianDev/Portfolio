// src/features/introduction/IntroFeature.jsx
import React from 'react';
import { CardLayout } from '../../shared/ui/CardLayout';

// Accettiamo isActive come parametro
export function IntroFeature({ isActive }) {
  return (
    <CardLayout gradientColor="from-purple-600 to-indigo-700" watermarkNumber="01" isActive={isActive}>
      <div>
        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Chi Sono
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-6 text-white tracking-tight leading-none">
          Presentazione
        </h2>
      </div>
      
      <div className="max-w-xl">
        <p className="text-white/80 text-lg mb-6">
          Qui in futuro potremo inserire un componente Video Player o una bio interattiva.
        </p>
      </div>
    </CardLayout>
  );
}