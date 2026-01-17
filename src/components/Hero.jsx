import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react'; 

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1713] pt-32 lg:pt-20 pb-16"
    >
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
          transform: `translateY(${scrollY * 0.2}px)`
        }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="text-left">
            <div className="flex items-center gap-4 mb-8 animate-reveal-1">
              <span className="h-[1px] w-12 bg-amber-500"></span>
              <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold">
                Pogliano Milanese — Est. 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
              <span className="block overflow-hidden">
                <span className="block animate-reveal-1">L'ARTE DEL</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-700 animate-reveal-2">
                  LEGNO VIVO.
                </span>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-lg mb-12 leading-relaxed border-l-2 border-amber-600/30 pl-8 italic animate-reveal-3">
              "Nel silenzio del legno, risuonano le voci della natura."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-reveal-3 mb-12">
              <button 
                onClick={(e) => scrollToSection(e, 'contatti')}
                className="px-10 py-5 bg-amber-600 hover:bg-white hover:text-[#0f1713] text-white font-black transition-all duration-500 transform hover:-translate-y-2 uppercase tracking-widest text-[10px] shadow-2xl"
              >
                Sopralluogo Gratuito
              </button>
              
              <button 
                onClick={(e) => scrollToSection(e, 'services')}
                className="px-10 py-5 border border-white/10 hover:border-amber-500 text-white font-bold transition-all duration-500 text-center uppercase tracking-widest text-[10px] backdrop-blur-sm"
              >
                Servizi
              </button>
            </div>

            {/* --- BADGE RECENSIONI --- */}
            <div 
              onClick={(e) => scrollToSection(e, 'testimonianze')}
              className="relative inline-flex flex-col gap-5 group cursor-pointer transition-all duration-1000 delay-700 animate-in fade-in slide-in-from-bottom-8"
            >
              <div className="absolute -inset-6 bg-amber-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="flex items-center gap-3 relative z-10">
                <span className="text-amber-500 font-black text-[10px] uppercase tracking-[0.5em]">
                  Reputazione Verificata
                </span>
                <div className="h-[1px] w-12 bg-gradient-to-r from-amber-500/50 to-transparent"></div>
              </div>

              <div className="relative z-10 flex items-center gap-6 bg-white/[0.02] border border-white/5 backdrop-blur-md p-5 pr-10 rounded-2xl group-hover:bg-white/[0.05] group-hover:border-amber-500/40 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex -space-x-3">
                  {['S', 'M', 'R'].map((initial, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full border-2 border-[#0f1713] bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center text-[10px] font-black text-white shadow-xl transition-transform group-hover:-translate-y-2"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col border-l border-white/10 pl-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-white font-black text-base ml-1">5.0</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" 
                      alt="Google" 
                      className="w-4 h-4 object-contain" 
                    />
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em]">
                      Recensioni <span className="text-white font-bold">Ufficiali</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNA IMMAGINE */}
          <div className="relative mt-16 lg:mt-0 perspective-1000">
            <div 
              className="relative z-10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/5"
              style={{ 
                transform: `translateY(${scrollY * 0.12}px) rotateX(${scrollY * 0.01}deg) rotateY(${scrollY * -0.01}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img 
                src="/uu.jpg" 
                alt="Bottega GMWoodLab" 
                className="w-full h-[500px] md:h-[700px] object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              />
            </div>
            
            {/* Glow decorativi */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-600/10 -z-10 blur-[120px] animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-900/20 -z-10 blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;