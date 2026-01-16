import React, { useEffect, useRef } from 'react';

const services = [
  {
    id: '01',
    title: 'Mobili Personalizzati',
    description: 'Progettazione d’avanguardia e falegnameria tradizionale. Creiamo pezzi unici o trasformiamo il tuo usato in design moderno.',
  },
  {
    id: '02',
    title: 'Riparazioni su Misura',
    description: 'Interventi tecnici di precisione per ripristinare la funzionalità e l’integrità strutturale di ogni manufatto in legno.',
  },
  {
    id: '03',
    title: 'Ripristino Conservativo',
    description: 'Un approccio filologico per riportare alla luce l’anima originale dei tuoi arredi d’epoca, con finiture di pregio.',
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  // Effetto Reveal: le card appaiono una dopo l'altra quando si scorre
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
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
    <section id="servizi" ref={sectionRef} className="py-32 bg-[#0f1713] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Sezione Animato */}
        <div className="mb-20 service-card opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-amber-600"></span>
            <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold">Eccellenza Artigiana</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Lavorazioni <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">in Legno</span>
          </h2>
        </div>

        {/* Griglia Card */}
        <div className="grid md:grid-cols-3 gap-0 border border-white/5">
          {services.map((s, index) => (
            <div 
              key={s.id} 
              style={{ transitionDelay: `${index * 200}ms` }}
              className="service-card opacity-0 translate-y-10 group relative p-12 border border-white/5 bg-transparent hover:bg-white/[0.01] transition-all duration-700 ease-out overflow-hidden"
            >
              {/* Effetto Luce Gradiente al passaggio del mouse */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Numero Sfondo Dinamico */}
              <span className="text-8xl font-black text-white/[0.02] absolute -top-4 -right-4 group-hover:text-amber-600/[0.07] group-hover:-translate-y-2 transition-all duration-700 select-none">
                {s.id}
              </span>
              
              <div className="relative z-10">
                <div className="mb-8 w-10 h-10 border border-amber-600/30 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                  <div className="w-1.5 h-1.5 bg-amber-600 animate-pulse" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest group-hover:text-amber-500 transition-colors duration-500">
                  {s.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm mb-10 group-hover:text-gray-300 transition-colors">
                  {s.description}
                </p>

                {/* Linea di progresso animata */}
                <div className="relative h-[1px] w-full bg-white/10 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-12 bg-amber-600 group-hover:w-full transition-all duration-1000 ease-in-out" />
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