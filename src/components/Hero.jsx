import React, { useState, useEffect } from 'react';

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
      const offset = 100; // Offset aumentato per la nuova Navbar
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
      /* pt-32: Spazio fondamentale per non finire sotto la Navbar fissa */
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1713] pt-32 lg:pt-20 pb-16"
    >
      {/* Background decorativo più coerente col brand */}
    <div 
    className="absolute inset-0 opacity-10 pointer-events-none" 
    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} 
  />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6 animate-reveal-1">
              <span className="h-[1px] w-12 bg-amber-500"></span>
              <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
                Pogliano Milanese — Est. 2024
              </span>
            </div>
            
            {/* Font scaling migliorato per mobile (text-4xl invece di 6xl) */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
              <span className="block overflow-hidden">
                <span className="block animate-reveal-1">L'ARTE DEL</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 animate-reveal-2">
                  LEGNO VIVO.
                </span>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-lg mb-10 leading-relaxed border-l-2 border-amber-600/30 pl-6 italic animate-reveal-3">
              "Nel silenzio del legno, risuonano le voci della natura."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-reveal-3">
              <button 
                onClick={(e) => scrollToSection(e, 'contatti')}
                className="px-8 py-5 bg-amber-600 hover:bg-white hover:text-[#0f1713] text-white font-black transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-[10px] shadow-2xl"
              >
                Sopralluogo Gratuito
              </button>
              
              <button 
                onClick={(e) => scrollToSection(e, 'services')}
                className="px-8 py-5 border border-white/20 hover:border-amber-500 text-white font-bold transition-all duration-300 text-center uppercase tracking-widest text-[10px]"
              >
                Esplora Atelier
              </button>
            </div>
          </div>

          {/* Immagine con Parallax e Z-index gestito */}
          <div className="relative mt-12 lg:mt-0">
            <div 
              className="relative z-10 overflow-hidden shadow-luxury border border-white/5"
              style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            >
              <img 
                src="/uu.jpg" 
                alt="Bottega GMWoodLab" 
                className="w-full h-[450px] md:h-[650px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </div>
            
            {/* Elementi Grafici Soffusi */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-600/5 -z-10 blur-[120px] animate-pulse"></div>
            
            {/* Badge Artigianato: Reso responsive per non coprire troppo su tablet */}
            <div 
              className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 p-6 md:p-10 bg-amber-600 text-[#0f1713] hidden sm:block shadow-luxury"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <p className="text-3xl md:text-5xl font-black leading-none italic">100%</p>
              <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black mt-2">Artigianato Italiano</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;