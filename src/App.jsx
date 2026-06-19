import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Importiamo Pagination e lo includiamo tra i moduli utilizzati
import { Navigation, Mousewheel, Keyboard, Pagination } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Nuova importazione CSS per i puntini

import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/projects/GithubProjectsFeature';
import { ContactFeature } from './features/contact/ContactFeature';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between py-8 bg-[#0a0a0a] overflow-hidden">
      
      <header className="max-w-6xl mx-auto w-full px-4 md:px-12 mb-6">
        <h1 className="text-3xl md:text-5xl font-black text-white">Portfolio</h1>
      </header>

      {/* Il main ora occupa tutta la larghezza (w-full) senza max-width, così le card laterali toccano i bordi */}
      <main className="w-full flex-grow flex items-center my-4">
        <Swiper
          modules={[Navigation, Mousewheel, Keyboard, Pagination]}
          centeredSlides={true}
          grabCursor={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          // Modifica qui: valori più vicini a 1 rendono la card centrale più grande
          breakpoints={{
            0: { slidesPerView: 1.05, spaceBetween: 20 },   // Quasi a tutto schermo su mobile
            768: { slidesPerView: 1.25, spaceBetween: 40 },  // Molto più grande su tablet
            1024: { slidesPerView: 1.3, spaceBetween: 60 },  // Ampia su desktop
          }}
          className="w-full h-[80vh] md:h-[80vh] py-10"
        >
          {/* SwiperSlide espone isActive come funzione (Render Prop), lo catturiamo e lo passiamo alla Feature */}
          <SwiperSlide className="h-full">
            {({ isActive }) => <IntroFeature isActive={isActive} />}
          </SwiperSlide>
          
          <SwiperSlide className="h-full">
            {({ isActive }) => <GithubProjectsFeature isActive={isActive} />}
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