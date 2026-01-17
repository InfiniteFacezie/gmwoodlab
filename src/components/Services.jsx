import React from 'react';
import { Hammer, PenTool, Ruler } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Mobili Personalizzati',
    description: 'Progettazione d’avanguardia e falegnameria tradizionale. Creiamo pezzi unici o trasformiamo il tuo usato in design moderno.',
    icon: <PenTool size={28} strokeWidth={1} /> // Ridotto lo spessore per eleganza
  },
  {
    id: '02',
    title: 'Riparazioni su Misura',
    description: 'Interventi tecnici di precisione per ripristinare la funzionalità e l’integrità strutturale di ogni manufatto in legno.',
    icon: <Hammer size={28} strokeWidth={1} />
  },
  {
    id: '03',
    title: 'Ripristino Conservativo',
    description: 'Un approccio filologico per riportare alla luce l’anima originale dei tuoi arredi d’epoca, con finiture di pregio.',
    icon: <Ruler size={28} strokeWidth={1} />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#070a09] relative">
      
      {/* Glow ambrato più soffuso e profondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-amber-900/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-28 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <span className="h-[1px] w-12 bg-amber-600"></span>
            <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold">Lavorazioni d'Atelier</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
            Soluzioni <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-700 italic">Su Misura</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div 
              key={s.id} 
              className="group relative p-12 bg-[#0a0f0d] border border-white/5 hover:border-amber-600/20 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
            >
              {/* Overlay gradiente al passaggio più morbido */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                {/* ID numerico sottile */}
                <span className="absolute top-0 right-0 text-white/[0.03] text-6xl font-black group-hover:text-amber-600/10 transition-colors duration-700">
                  {s.id}
                </span>

                <div className="mb-12 w-20 h-20 border border-white/5 flex items-center justify-center text-amber-500 group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-700">
                  {s.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-[0.15em] leading-tight group-hover:text-amber-500 transition-colors">
                  {s.title}
                </h3>
                
                {/* Testo più leggero (font-light) e arioso */}
                <p className="text-gray-400 font-light leading-relaxed text-base mb-16 tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                  {s.description}
                </p>

                <div className="flex items-center gap-6">
                  <div className="h-[1px] flex-grow bg-white/5 overflow-hidden">
                    <div className="h-full w-0 bg-amber-600 group-hover:w-full transition-all duration-1000 ease-out" />
                  </div>
                  <span className="text-[9px] text-amber-600 font-black tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-all duration-700 uppercase">
                    Dettagli
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;