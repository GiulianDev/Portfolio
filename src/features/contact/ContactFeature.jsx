import React from 'react';
import { CardLayout } from '../../shared/ui/CardLayout';

export function ContactFeature({ isActive }) {
  // Qui potrai gestire gli state del form (nome, email, messaggio) e l'invio
  return (
    <CardLayout gradientColor="from-blue-600 to-cyan-700" watermarkNumber="03" isActive={isActive}>
      <div>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-6 text-white tracking-tight leading-none">
          Lavoriamo Insieme
        </h2>
      </div>
      
      <div className="w-full max-w-md mt-8">
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="La tua email" className="p-3 rounded bg-white/10 text-white placeholder-white/50 border border-white/20" />
          <textarea placeholder="Il tuo messaggio" rows="4" className="p-3 rounded bg-white/10 text-white placeholder-white/50 border border-white/20"></textarea>
          <button type="button" className="bg-white text-black font-bold py-3 px-6 rounded-xl">Invia</button>
        </form>
      </div>
    </CardLayout>
  );
}