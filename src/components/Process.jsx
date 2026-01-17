import React from 'react';
import { Search, PenTool, Hammer, Truck } from 'lucide-react';

const steps = [
  {
    icon: <Search size={24} />,
    title: "Consulenza",
    desc: "Ascoltiamo le tue idee per definire essenze, finiture e volumi del progetto.",
    tag: "01"
  },
  {
    icon: <PenTool size={24} />,
    title: "Progettazione",
    desc: "Disegni tecnici e rendering per visualizzare l'opera prima del primo taglio.",
    tag: "02"
  },
  {
    icon: <Hammer size={24} />,
    title: "Produzione",
    desc: "L'arte della falegnameria prende vita nel nostro atelier di Pogliano.",
    tag: "03"
  },
  {
    icon: <Truck size={24} />,
    title: "Consegna",
    desc: "Posa in opera curata nei minimi dettagli per garantire la massima durata.",
    tag: "04"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header con linea decorativa */}
        <div className="flex flex-col items-center mb-24">
          <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">Il Metodo</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter text-center">
            Dal Tronco <span className="text-amber-600 italic">all'Opera</span>
          </h2>
          <div className="h-20 w-[1px] bg-gradient-to-b from-amber-600 to-transparent mt-8"></div>
        </div>

        {/* Timeline Horizontal / Vertical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          
          {/* Linea di connessione (solo Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="group relative flex flex-col items-center px-4 mb-16 md:mb-0">
              
              {/* Cerchio con Icona */}
              <div className="relative z-10 w-20 h-20 bg-[#0a0f0d] border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-700 group-hover:border-amber-600 group-hover:shadow-[0_0_30px_rgba(217,119,6,0.2)]">
                <div className="text-amber-500 transition-transform duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
                
                {/* Badge Numerico */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-[10px] font-black text-[#0f1713] border-4 border-[#0f1713]">
                  {step.tag}
                </div>
              </div>

              {/* Testi */}
              <div className="text-center mt-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4 group-hover:text-amber-500 transition-colors">
                  {step.title}
                </h3>
                <div className="w-10 h-[2px] bg-amber-600/30 mx-auto mb-4 group-hover:w-20 transition-all duration-500"></div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Decorazione di connessione mobile */}
              <div className="md:hidden h-12 w-[1px] bg-white/10 mt-8 last:hidden"></div>
            </div>
          ))}
        </div>

        {/* Footer Sezione */}
        <div className="mt-20 flex justify-center">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] italic border-y border-white/5 py-4 px-8">
            Artigianato d'eccellenza dal 19XX
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;