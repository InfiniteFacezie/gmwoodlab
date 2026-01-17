import React, { useEffect, useRef } from 'react';
import { Hammer, PenTool, Ruler } from 'lucide-react'; // Icone più attinenti alla falegnameria

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
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Sezione */}
        <div className="mb-24 service-card opacity-0 translate-y-10 transition-all duration-1000 ease-out text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <span className="h-[1px] w-12 bg-amber-600"></span>
            <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold">Eccellenza Artigiana</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Soluzioni <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 italic">In Legno</span>
          </h2>
        </div>

        {/* Griglia Card Evoluta */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div 
              key={s.id} 
              style={{ transitionDelay: `${index * 200}ms` }}
              className="service-card opacity-0 translate-y-10 group relative p-10 bg-[#0a0f0d]/50 border border-white/5 hover:border-amber-600/30 transition-all duration-700 ease-out shadow-luxury"
            >
              {/* Effetto Vetro/Luce interno */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Numero Sfondo Materico */}
              <span className="text-9xl font-black text-white/[0.01] absolute -top-8 -right-4 group-hover:text-amber-600/[0.03] transition-all duration-1000 select-none">
                {s.id}
              </span>
              
              <div className="relative z-10">
                {/* Icona con cerchio ambrato soffuso */}
                <div className="mb-10 w-16 h-16 border border-white/10 flex items-center justify-center text-amber-500 group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-700">
                  {s.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider group-hover:text-amber-500 transition-colors duration-500">
                  {s.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm mb-12 font-normal">
                  {s.description}
                </p>

                {/* Linea di progresso artigianale */}
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-grow bg-white/10 overflow-hidden">
                    <div className="h-full w-0 bg-amber-600 group-hover:w-full transition-all duration-1000 ease-in-out" />
                  </div>
                  <span className="text-[10px] text-amber-600 font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">Dettagli</span>
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