import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Importiamo Pagination e lo includiamo tra i moduli utilizzati
import { Navigation, Mousewheel, Keyboard, Pagination } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Nuova importazione CSS per i puntini

// Import delle tue feature
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/github/GithubProjectsFeature';
import { ContactFeature } from './features/contact/ContactFeature';
import { LinkFeature } from './features/links/LinkFeature';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] overflow-hidden">
      
      <header className="px-6 py-8 md:px-12">
        <h1 className="text-3xl font-black text-white">Portfolio</h1>
      </header>

      {/* Rimosso max-w-4xl per permettere al carosello di estendersi */}
      <main className="w-full flex-grow flex items-center">
        <Swiper
          modules={[Navigation, Mousewheel, Keyboard, Pagination]}
          centeredSlides={true}
          grabCursor={true}
          // navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          // Peek & Reveal: I decimali fanno "sbucare" le altre slide ai lati
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 15 },
            768: { slidesPerView: 1.3, spaceBetween: 30 },
            1024: { slidesPerView: 1.5, spaceBetween: 40 },
          }}
          className="w-full h-[75vh] py-10" // Padding verticale per permettere alle card di scalare
        >
          <SwiperSlide className="h-full">
            {({ isActive }) => <IntroFeature isActive={isActive} />}
          </SwiperSlide>
          
          <SwiperSlide className="h-full">
            {({ isActive }) => <GithubProjectsFeature isActive={isActive} />}
          </SwiperSlide>

          <SwiperSlide className="h-full">
            {({ isActive }) => <LinkFeature isActive={isActive} />}
          </SwiperSlide>
          
          <SwiperSlide className="h-full">
            {({ isActive }) => <ContactFeature isActive={isActive} />}
          </SwiperSlide>
        </Swiper>
      </main>

    </div>
  );
}

export default App;