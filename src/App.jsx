import React from 'react';
// Componenti Swiper e moduli necessari
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, EffectCreative } from 'swiper/modules';

// Import degli stili core di Swiper + stili dell'effetto Creative
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import './index.css'; 

const portfolioItems = [
  { 
    id: 1, 
    title: 'Presentazione', 
    desc: 'Ciao! Sono uno sviluppatore appassionato di interfacce web reattive e UX curate nei minimi dettagli. Benvenuto nel mio mazzo di progetti.', 
    type: 'Chi Sono',
    color: 'from-purple-600 to-indigo-700' // Gradiente moderno viola
  },
  { 
    id: 2, 
    title: 'E-commerce React Full-Stack', 
    desc: 'Un\'applicazione completa con carrello persistente, gestione dello stato globale e sistema di checkout integrato.', 
    type: 'GitHub Progetto',
    color: 'from-emerald-600 to-teal-700' // Gradiente moderno verde
  },
  { 
    id: 3, 
    title: 'Dashboard Analitica', 
    desc: 'Grafici interattivi avanzati, filtri temporali e sincronizzazione dati in tempo reale tramite WebSocket.', 
    type: 'Lavoro Recente',
    color: 'from-blue-600 to-cyan-700' // Gradiente moderno blu
  },
  { 
    id: 4, 
    title: 'Bot Node.js Automazione', 
    desc: 'Script Node.js per automatizzare flussi operativi, ruoli aziendali e comandi personalizzati della community.', 
    type: 'Scripting',
    color: 'from-amber-600 to-orange-700' // Gradiente moderno arancio
  },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-4 md:px-12 py-8 bg-[#0a0a0a]">
      
      {/* HEADER PRINCIPALE */}
      <header className="max-w-4xl mx-auto w-full mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Disponibile per progetti</p>
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          Portfolio Sviluppatore
        </h1>
      </header>

      {/* CONTENITORE DELLO SLIDER (LARGHEZZA MASSIMA OTTIMIZZATA PER L'EFFETTO CARTE) */}
      <main className="w-full max-w-4xl mx-auto flex-grow flex items-center justify-center my-4">
        <Swiper
          modules={[Navigation, Mousewheel, Keyboard, EffectCreative]}
          effect={'creative'} // Attiviamo l'effetto carte
          grabCursor={true}   // Mostriamo il cursore mano
          navigation={true}   // Frecce visibili
          mousewheel={true}   // Scroll con rotellina
          keyboard={true}     // Navigazione tastiera
          slidesPerView={1}   // Una sola carta sovrapposta alla volta
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -200], // La carta precedente indietreggia a sinistra
              opacity: 0.3
            },
            next: {
              translate: ['100%', 0, 0], // La carta successiva scivola sopra da destra
            },
          }}
          className="w-full h-[60vh] md:h-[55vh] rounded-2xl shadow-2xl" // Bordo tondo e ombra massiccia
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id} className="h-full w-full">
              
              {/* SCHEDA PRINCIPALE AD ALTO IMPATTO VISIVO */}
              {/* L'uso di rounded-2xl, shadow-lg, e gradiente la rendono una card moderna */}
              <div className={`w-full h-full bg-gradient-to-br ${item.color} p-8 md:p-12 flex flex-col justify-between relative overflow-hidden select-none`}>
                
                {/* Texture geometrica di sfondo in filigrana */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />
                
                {/* Top della carta: Tag e Titolo */}
                <div>
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {item.type}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold mt-6 text-white tracking-tight leading-none">
                    {item.title}
                  </h2>
                </div>

                {/* Bottom della carta: Descrizione e bottone d'azione */}
                <div className="max-w-xl">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 font-medium">
                    {item.desc}
                  </p>
                  
                  <button className="bg-white text-black hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5 font-bold py-3 px-6 rounded-xl shadow-lg text-sm md:text-base flex items-center gap-2 group">
                    Visualizza Dettagli
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

                {/* Numero della sezione in filigrana sullo sfondo */}
                <div className="absolute bottom-4 right-8 text-white/5 text-8xl md:text-9xl font-black select-none pointer-events-none">
                  0{item.id}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

      {/* FOOTER DI NAVIGAZIONE */}
      <footer className="max-w-4xl mx-auto w-full text-center text-xs text-gray-500 mt-2">
        Usa lo swipe, le frecce della tastiera o la rotellina del mouse per sfogliare le sezioni.
      </footer>

    </div>
  );
}

export default App;