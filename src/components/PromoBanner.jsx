import React from 'react';
import { ShieldCheck, ArrowRight, Wind } from 'lucide-react';

const PromoBanner = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="promo" className="relative py-24 overflow-hidden bg-[#0a0f0d]">
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-1 md:p-2 rounded-[2rem] shadow-2xl">
          <div className="bg-[#0f1713] rounded-[1.8rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Contenuto Testuale */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/10 border border-amber-600/20 mb-6">
                <Wind size={16} className="text-amber-500 animate-pulse" />
                <span className="text-amber-500 font-black text-[10px] uppercase tracking-[0.2em]">Manutenzione Stagionale</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Hai persiane da <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic">Ripristinare?</span>
              </h2>
              
              <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed font-light">
                Non aspettare che il tempo rovini l'anima del legno. Offriamo un servizio di 
                <span className="text-white font-bold"> restyling completo e protezione </span> 
                contro gli agenti atmosferici con finiture nanotecnologiche.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/60 text-xs font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-amber-500" /> Sverniciatura Ecologica
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-amber-500" /> Vernici High-Tech
                </div>
              </div>
            </div>

            {/* Azione / Prezzo */}
            <div className="lg:w-1/3 w-full">
              <div className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl text-center backdrop-blur-sm relative group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-[#0f1713] px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                  Promo Inverno
                </div>
                
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">A partire da</p>
                <div className="flex items-center justify-center gap-1 mb-8">
                  <span className="text-5xl font-black text-white italic">PROMO</span>
                </div>

                <button 
                  onClick={(e) => scrollToSection(e, 'contatti')}
                  className="w-full py-5 bg-amber-600 hover:bg-white text-[#0f1713] font-black uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-3 group-hover:shadow-[0_0_30px_rgba(217,119,6,0.3)]"
                >
                  Richiedi Analisi Stato <ArrowRight size={16} />
                </button>
                
                <p className="text-[9px] text-gray-600 mt-4 uppercase tracking-tighter">
                  *Sopralluogo gratuito entro 20km da Pogliano M.se
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;