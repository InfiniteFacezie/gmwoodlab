import React from 'react';
import { MessageSquare, Trees, PenTool, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Consulenza",
    desc: "Sopralluogo tecnico e analisi delle tue esigenze. Definiamo insieme lo stile e la funzionalità.",
    icon: <MessageSquare size={32} strokeWidth={1} />
  },
  {
    num: "02",
    title: "Selezione",
    desc: "Scegliamo solo essenze pregiate. Ogni pezzo di legno viene selezionato per venatura e stabilità.",
    icon: <Trees size={32} strokeWidth={1} />
  },
  {
    num: "03",
    title: "Creazione",
    desc: "La lavorazione artigianale prende vita nel nostro atelier, unendo tradizione e precisione millimetrica.",
    icon: <PenTool size={32} strokeWidth={1} />
  },
  {
    num: "04",
    title: "Consegna",
    desc: "Portiamo l'opera finita a casa tua. Curiamo l'installazione affinché ogni dettaglio sia perfetto.",
    icon: <CheckCircle2 size={32} strokeWidth={1} />
  }
];

const Process = () => {
  return (
    <section className="py-32 bg-[#0a0f0d] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold">Metodo Artigianale</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
            Dal Progetto <span className="text-amber-600">alla Realtà</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Linea connettiva ultra-sottile */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-600/20 to-transparent" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Contenitore Icona Style Apple */}
              <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
                {/* Cerchio di sfondo con blur (Glow) */}
                <div className="absolute inset-0 bg-amber-600/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-xl" />
                
                {/* Cerchio bordo sottile */}
                <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-amber-600/50 transition-colors duration-500" />
                
                {/* Numero Step (Piccolo e minimale) */}
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] font-bold text-amber-600 bg-[#0a0f0d] px-2">
                  {step.num}
                </span>

                {/* Icona Lucide */}
                <div className="relative text-white group-hover:text-amber-500 transition-colors duration-500">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] font-light italic">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;