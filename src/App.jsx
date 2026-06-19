import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

// Importiamo le feature isolate
import { IntroFeature } from './features/introduction/IntroFeature';
import { GithubProjectsFeature } from './features/projects/GithubProjectsFeature';
import { ContactFeature } from './features/contact/ContactFeature';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-4 md:px-12 py-8 bg-[#0a0a0a]">
      {/* L'header può stare nel layout condiviso */}
      <header className="max-w-4xl mx-auto w-full mb-6">
        <h1 className="text-3xl md:text-5xl font-black text-white">Portfolio</h1>
      </header>

      <main className="w-full max-w-4xl mx-auto flex-grow flex items-center justify-center my-4">
        <Swiper
          modules={[Navigation, Mousewheel, Keyboard, EffectCreative]}
          effect={'creative'}
          grabCursor={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          creativeEffect={{
            prev: { shadow: true, translate: ['-20%', 0, -200], opacity: 0.3 },
            next: { translate: ['100%', 0, 0] },
          }}
          className="w-full h-[85vh] md:h-[80vh]"
        >
          {/* Mappiamo le feature nelle slide */}
          <SwiperSlide className="h-full w-full p-2"><IntroFeature /></SwiperSlide>
          <SwiperSlide className="h-full w-full p-2"><GithubProjectsFeature /></SwiperSlide>
          <SwiperSlide className="h-full w-full p-2"><ContactFeature /></SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}

export default App;