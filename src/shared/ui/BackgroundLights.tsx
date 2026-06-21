import React from 'react';

export const BackgroundLights: React.FC = () => {
  return (
    
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

  );
};