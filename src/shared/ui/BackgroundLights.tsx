import React from 'react';

export const BackgroundLights: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        
        {/* 1. Base: Luce principale (in alto a sinistra) */}
        <div 
          className="absolute top-[-5%] left-[-10%] w-[90vw] sm:w-[50vw] h-[90vw] sm:h-[50vw] bg-brand-accent/15 rounded-full blur-[120px] mix-blend-screen animate-electric" 
          style={{ animationDelay: '0s' }}
        />
        
        {/* 2. Core: Luce secondaria a destra (più lontana e tenue) */}
        <div 
          className="absolute top-[30%] right-[-10%] w-[80vw] sm:w-[40vw] h-[80vw] sm:h-[40vw] bg-brand-accent/10 rounded-full blur-[150px] mix-blend-screen animate-electric" 
          style={{ animationDelay: '2s' }}
        />
        
        {/* 3. Accento: Luce di supporto in basso (bassissima opacità) */}
        <div 
          className="absolute bottom-[-5%] left-[5%] w-[85vw] sm:w-[50vw] h-[85vw] sm:h-[50vw] bg-brand-accent/10 rounded-full blur-[140px] mix-blend-screen animate-electric" 
          style={{ animationDelay: '4s' }}
        />
        
    </div>
  );
};