import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Marco Valenti",
    role: "Architetto",
    text: "GMWoodLab ha trasformato un'idea complessa in un'opera d'arte. La precisione millimetrica e la scelta delle essenze sono fuori dal comune. Un vero atelier del legno."
  },
  {
    name: "Elena Gatti",
    role: "Proprietaria Casa Privata",
    text: "Il restauro delle mie vecchie persiane è stato incredibile. Sembravano irrecuperabili, ora sono il pezzo forte della facciata. Professionalità rarissima."
  },
  {
    name: "Roberto Riva",
    role: "Designer d'Interni",
    text: "Collaboro con molte falegnamerie, ma la cura del dettaglio di questa bottega a Pogliano è unica. Riescono a dare un'anima moderna a un materiale antico."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0a0f0d] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="text-amber-600 mb-6 opacity-50" size={40} strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Cosa dicono <span className="text-amber-600">di noi</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((rev, i) => (
            <div key={i} className="p-10 border border-white/5 bg-[#0f1713] relative group hover:border-amber-600/30 transition-colors duration-500">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-500 text-xs">★</span>
                ))}
              </div>
              <p className="text-gray-400 italic leading-relaxed mb-8 font-light">
                "{rev.text}"
              </p>
              <div>
                <p className="text-white font-bold uppercase tracking-widest text-xs">{rev.name}</p>
                <p className="text-amber-600/60 text-[10px] uppercase tracking-widest mt-1">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;