import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Rimuoviamo la Navigation (le frecce verticali sono scomode) e teniamo i moduli verticali
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/pagination'; 

// Import delle tue feature
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/github/GithubProjectsFeature';
import { ContactFeature } from './features/contact/ContactFeature';

function App() {
  return (
    // Cambiamo l'altezza in h-screen rigida per bloccare la viewport cinematografica
    <div className="h-screen w-screen bg-[#0a0a0a] overflow-hidden flex flex-col relative font-sans antialiased text-gray-200">
      
      {/* 1. HEADER FISSO CON SFUMATURA (Le card svaniranno qui sotto) */}
      <header className="absolute top-0 left-0 w-full px-6 py-8 md:px-12 z-50 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent pb-20 pointer-events-auto">
        <h1 className="text-3xl font-black text-white tracking-tight">Portfolio</h1>
      </header>

      {/* 2. CONTENITORE PRINCIPALE DEL REEL VERTICALE */}
      <main className="w-full h-full flex-grow">
        <Swiper
          direction="vertical" // <-- Il trucco magico è qui!
          modules={[Mousewheel, Keyboard, Pagination]}
          centeredSlides={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          // Mostra la card centrale e fa sbucare la precedente in alto e la successiva in basso
          slidesPerView={1.18} 
          spaceBetween={30}
          className="w-full h-full"
        >
          {/* Usiamo il padding verticale (py-28) per non far sovrapporre il testo all'header/footer sfumati */}
          <SwiperSlide className="h-full px-4 md:px-24 py-28 flex items-center justify-center">
            {({ isActive }) => <IntroFeature isActive={isActive} />}
          </SwiperSlide>
          
          <SwiperSlide className="h-full px-4 md:px-24 py-28 flex items-center justify-center">
            {({ isActive }) => <GithubProjectsFeature isActive={isActive} />}
          </SwiperSlide>
          
          <SwiperSlide className="h-full px-4 md:px-24 py-28 flex items-center justify-center">
            {({ isActive }) => <ContactFeature isActive={isActive} />}
          </SwiperSlide>
        </Swiper>
      </main>

      {/* 3. FOOTER FISSO CON SFUMATURA (Le card svaniranno anche qui sotto) */}
      <footer className="absolute bottom-0 left-0 w-full py-8 text-center text-white/30 text-xs z-50 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent pt-20 pointer-events-none">
        <p className="tracking-widest uppercase font-medium text-[10px]">
          © 2026 GiulianDev • Usa la rotellina o trascina per esplorare
        </p>
      </footer>

    </div>
  );
}

export default App;