import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
// IMPORTAZIONE DAL FILE ESTERNO
import { testimonialsData } from '../data/testimonialsData';

const Testimonials = () => {
  const scrollRef = useRef(null);
  
  // Icona Google ufficiale fornita da Google tramite CDN stabile
  const googleIcon = "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png";

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Se il file dei dati non è ancora pronto, evitiamo crash
  if (!testimonialsData || testimonialsData.length === 0) return null;

  return (
    <section id="testimonianze" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold italic">Feedback Verificati</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mt-2">
              Dicono di <span className="text-amber-600 italic">GM WOODLAB</span>
            </h2>
          </div>
          
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
          
        {/* Card Principale (Hero) */}
<div className="lg:col-span-5 bg-[#0a0f0d] border border-white/5 p-10 shadow-luxury flex flex-col justify-between relative group min-h-[450px]">
  <Quote className="absolute -top-6 -right-6 text-white/[0.03] scale-[3]" size={80} />
  
  <div>
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(testimonialsData[0].stars)].map((_, i) => (
            <Star key={i} size={14} className="fill-amber-600 text-amber-600" />
          ))}
        </div>
        <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest ml-2">
          Recensione Google
        </span>
      </div>
      
      {/* Icona Google aggiunta anche qui */}
      <img src={googleIcon} alt="Google" className="w-5 h-5 object-contain opacity-80" />
    </div>

    <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-10 italic">
      "{testimonialsData[0].text}"
    </p>
  </div>

  <div className="flex items-center justify-between pt-8 border-t border-white/5">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black">
        {testimonialsData[0].name.charAt(0)}
      </div>
      <div>
        <h4 className="text-white font-bold text-sm uppercase tracking-wider leading-none">
          {testimonialsData[0].name}
        </h4>
        <p className="text-white/40 text-[9px] uppercase tracking-widest mt-1">
          {testimonialsData[0].date}
        </p>
      </div>
    </div>
    <a 
      href={testimonialsData[0].googleLink} 
      target="_blank" 
      rel="noreferrer" 
      className="text-amber-600 hover:text-white transition-colors"
    >
      <ExternalLink size={18} />
    </a>
  </div>
</div>

          {/* Slider Card Piccole - Prende tutti gli altri elementi dell'array esterno */}
          <div className="lg:col-span-7 relative">
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar touch-pan-x"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {testimonialsData.slice(1).map((t, idx) => (
                <div 
                  key={t.id} 
                  className={`flex-none snap-start p-8 border border-white/5 shadow-luxury transition-all duration-500 hover:border-amber-600/30 flex flex-col justify-between
                    ${idx % 2 === 0 ? 'w-[85vw] md:w-[350px] bg-[#0a0f0d]/40' : 'w-[85vw] md:w-[380px] bg-[#0a0f0d]/80 lg:mt-8'}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star key={i} size={10} className="fill-amber-600 text-amber-600 opacity-70" />
                        ))}
                      </div>
                      <img src={googleIcon} alt="Google" className="w-5 h-5 object-contain" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-[10px] font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-widest leading-none">{t.name}</h4>
                        <p className="text-white/30 text-[8px] uppercase tracking-widest mt-1">{t.date}</p>
                      </div>
                    </div>
                    <a href={t.googleLink} target="_blank" rel="noreferrer" className="text-amber-600/50 hover:text-amber-600 transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex-none w-1 md:w-6 h-full"></div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Testimonials;