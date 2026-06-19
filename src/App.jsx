import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules'; // Rimosso EffectCreative

import 'swiper/css';
import 'swiper/css/navigation';

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
          modules={[Navigation, Mousewheel, Keyboard]}
          centeredSlides={true} // FORZA la slide attiva sempre al centro
          grabCursor={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          // Spaziatura dinamica: valori decimali per far sbucare le card ai lati
          breakpoints={{
            0: { slidesPerView: 1.15, spaceBetween: 15 },    // Su mobile: 1 card + 15% visibile diviso sui lati
            768: { slidesPerView: 1.5, spaceBetween: 30 },   // Su tablet: 1 card + mezza divisa sui lati
            1024: { slidesPerView: 1.6, spaceBetween: 40 },  // Su desktop grande: Card immensa al centro, bordi visibili
          }}
          className="w-full h-[85vh] md:h-[80vh] py-8"
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