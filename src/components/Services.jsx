import React from 'react';
import { Hammer, PenTool, Ruler } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Mobili Personalizzati',
    description: 'Progettazione d’avanguardia e falegnameria tradizionale. Creiamo pezzi unici o trasformiamo il tuo usato in design moderno.',
    icon: <PenTool size={28} strokeWidth={1.2} />
  },
  {
    id: '02',
    title: 'Riparazioni su Misura',
    description: 'Interventi tecnici di precisione per ripristinare la funzionalità e l’integrità strutturale di ogni manufatto in legno.',
    icon: <Hammer size={28} strokeWidth={1.2} />
  },
  {
    id: '03',
    title: 'Ripristino Conservativo',
    description: 'Un approccio filologico per riportare alla luce l’anima originale dei tuoi arredi d’epoca, con finiture di pregio.',
    icon: <Ruler size={28} strokeWidth={1.2} />
  }
];

const Services = () => {
  return (
    /* SFONDO SOLIDO E SICURO */
    <section id="services" className="py-32 bg-[#070a09] relative">
      
      {/* Glow ambrato per dare profondità e illuminare l'area */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Sezione - SEMPRE VISIBILE */}
        <div className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <span className="h-[1px] w-12 bg-amber-600"></span>
            <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold">Lavorazioni d'Atelier</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Soluzioni <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 italic">Su Misura</span>
          </h2>
        </div>

        {/* Griglia Card - SEMPRE VISIBILE */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div 
              key={s.id} 
              className="group relative p-10 bg-[#0a0f0d] border border-white/5 hover:border-amber-600/30 transition-all duration-500 shadow-2xl"
            >
              {/* Effetto luce al passaggio */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-10 w-16 h-16 border border-white/10 flex items-center justify-center text-amber-500 group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-500">
                  {s.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider group-hover:text-amber-500 transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm mb-12">
                  {s.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-grow bg-white/10 overflow-hidden">
                    <div className="h-full w-0 bg-amber-600 group-hover:w-full transition-all duration-700" />
                  </div>
                  <span className="text-[10px] text-amber-600 font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">Dettagli</span>
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