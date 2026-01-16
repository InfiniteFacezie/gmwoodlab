import React from 'react';

const steps = [
  {
    num: "1",
    title: "Consulenza Gratuita",
    desc: "Sopralluogo tecnico e analisi delle tue esigenze. Progettiamo insieme il mobile dei tuoi sogni.",
    icon: "📐"
  },
  {
    num: "2",
    title: "Selezione Materiali",
    desc: "Scegliamo solo essenze pregiate e sostenibili, garantendo durata e venature uniche per ogni pezzo.",
    icon: "🪵"
  },
  {
    num: "3",
    title: "Lavorazione Artigianale",
    desc: "La sapienza manuale incontra la precisione tecnica nella nostra bottega di Pogliano Milanese.",
    icon: "🛠️"
  },
  {
    num: "4",
    title: "Consegna e Setup",
    desc: "Portiamo l'opera a casa tua, curando ogni dettaglio dell'installazione per un risultato perfetto.",
    icon: "✅"
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-[#0a0f0d] border-t border-white/5 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">Workflow</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 uppercase tracking-tighter">
            Dal Progetto <span className="text-amber-600">alla Realtà</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Linea connettiva tratteggiata (Solo desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] border-t border-dashed border-amber-600/30 -z-0" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
              {/* Icona e Numero */}
              <div className="w-24 h-24 bg-[#0f1713] border-2 border-amber-600 flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(217,119,6,0.2)]">
                <span className="text-4xl">{step.icon}</span>
                <span className="absolute -top-4 -right-4 w-10 h-10 bg-amber-600 text-[#0f1713] font-black flex items-center justify-center text-sm">
                  {step.num}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Placeholder per Foto Processo */}
        <div className="grid md:grid-cols-4 gap-4 mt-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="aspect-[3/2] bg-white/5 border border-white/10" />
           <div className="aspect-[3/2] bg-white/5 border border-white/10" />
           <div className="aspect-[3/2] bg-white/5 border border-white/10" />
           <div className="aspect-[3/2] bg-white/5 border border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Process;