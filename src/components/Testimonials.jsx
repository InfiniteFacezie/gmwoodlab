import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Marco Valenti", role: "Architetto", text: "GM Wood Lab ha trasformato un'idea complessa in un'opera d'arte. La precisione millimetrica è fuori dal comune.", stars: 5 },
  { id: 2, name: "Elena Gatti", role: "Privato", text: "Il restauro delle mie vecchie persiane è stato incredibile. Sembravano irrecuperabili, ora sono il pezzo forte.", stars: 5 },
  { id: 3, name: "Roberto Riva", role: "Designer", text: "Collaboro con molte falegnamerie, ma la cura del dettaglio di questa bottega è unica.", stars: 5 },
  { id: 4, name: "Alessandro Moretti", role: "Ristoratore", text: "Abbiamo affidato a GM la realizzazione dei tavoli in rovere massiccio. Finitura vellutata e resistentissima.", stars: 5 },
  { id: 5, name: "Giulia Bianchi", role: "Interior Designer", text: "Cercavo un artigiano che capisse il minimalismo. Il mobile bagno in teak è un capolavoro di precisione.", stars: 5 },
  { id: 6, name: "Paolo Veronesi", role: "Privato", text: "Il ripristino del vecchio portone di famiglia è stato commovente. Hanno salvato ogni venatura originale.", stars: 5 },
  { id: 7, name: "Sara Fontana", role: "Architetto", text: "Progettazione rapida e realizzazione impeccabile. GM è il partner ideale per chi cerca il lusso vero.", stars: 5 },
  { id: 8, name: "Davide Costa", role: "Collezionista", text: "Vetrina per orologi su misura. Un lavoro da orologiai applicato al legno. Professionalità rara.", stars: 5 },
  { id: 9, name: "Chiara Sereni", role: "Home Stager", text: "Pezzi unici che cambiano l'impatto di una stanza. La loro capacità di trasformare il legno è magica.", stars: 5 }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonianze" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold">Feedback</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mt-2">
              Voci dalla <span className="text-amber-600 italic">Bottega</span>
            </h2>
          </div>
          
          {/* Frecce di Navigazione Desktop */}
          <div className="hidden md:flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:border-amber-600 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:border-amber-600 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* HERO CARD (Fissa) */}
          <div className="lg:col-span-5 bg-[#0a0f0d] border border-white/5 p-10 shadow-luxury flex flex-col justify-between relative group">
            <Quote className="absolute -top-6 -right-6 text-white/[0.03] scale-[3]" size={80} />
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-600 text-amber-600" />)}
              </div>
              <p className="text-2xl md:text-3xl font-medium text-white leading-snug mb-10 italic">
                "{testimonials[0].text}"
              </p>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-[#0f1713] font-black">{testimonials[0].name.charAt(0)}</div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{testimonials[0].name}</h4>
                <p className="text-amber-600 text-[9px] font-bold uppercase tracking-widest">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* SLIDER CONTENITORE (Fix Scorrimento) */}
          <div className="lg:col-span-7 relative">
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar touch-pan-x"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {testimonials.slice(1).map((t, idx) => (
                <div 
                  key={t.id} 
                  className={`flex-none snap-start p-8 border border-white/5 shadow-luxury transition-all duration-500 hover:border-amber-600/30
                    ${idx % 2 === 0 ? 'w-[85vw] md:w-[350px] bg-[#0a0f0d]/40' : 'w-[85vw] md:w-[380px] bg-[#0a0f0d]/80 lg:mt-8'}`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-amber-600 text-amber-600 opacity-50" />)}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white text-[10px] font-bold">{t.name.charAt(0)}</div>
                    <div>
                      <h4 className="text-white text-[10px] font-bold uppercase tracking-widest">{t.name}</h4>
                      <p className="text-amber-600 text-[8px] font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Spazio finale per permettere lo scroll completo */}
              <div className="flex-none w-1 md:w-6 h-full"></div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
      `}</style>
    </section>
  );
};

export default Testimonials;