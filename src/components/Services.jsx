import React from 'react';

const services = [
  {
    title: "Mobili Personalizzati",
    desc: "Creiamo mobili su misura che si adattano perfettamente al tuo spazio e al tuo stile. Oltre a trasformare un vecchio mobile in qualcosa di più moderno.",
    icon: "🪑"
  },
  {
    title: "Riparazioni su Misura",
    desc: "Ripristiniamo con cura i tuoi mobili per farli tornare alla loro bellezza originale.",
    icon: "🔨"
  },
  {
    title: "Ripristino Conservativo",
    desc: "Riportiamo in vita i tuoi vecchi mobili con la nostra attenzione ai dettagli.",
    icon: "✨"
  }
];

const Services = () => {
  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wood-900 mb-4">Lavorazioni in Legno</h2>
          <p className="text-wood-600 font-medium uppercase tracking-widest text-sm">Servizio veloce e affidabile </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card group hover:-translate-y-2 transition-all duration-300 border-wood-100">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-wood-900">{s.title} [cite: 7, 9, 12]</h3>
              <p className="text-wood-700 leading-relaxed text-sm">
                {s.desc} [cite: 8, 10, 11, 12]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;