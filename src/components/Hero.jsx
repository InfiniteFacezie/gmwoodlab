import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Gestione dello scroll per l'effetto Parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione per lo scroll fluido verso le sezioni
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1713]">
      {/* Texture di sfondo per profondità */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6 animate-reveal-1">
              <span className="h-[1px] w-12 bg-amber-500"></span>
              <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">
                Pogliano Milanese — Est. 2024
              </span>
            </div>
            
            {/* Titolo con Reveal Progressivo */}
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              <span className="block overflow-hidden">
                <span className="block animate-reveal-1">L'ARTE DEL</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 animate-reveal-2">
                  LEGNO VIVO.
                </span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed border-l-2 border-amber-600/30 pl-6 italic animate-reveal-3">
              "Nel silenzio del legno, risuonano le voci della natura."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-reveal-3">
              <button 
                onClick={(e) => scrollToSection(e, 'contatti')}
                className="px-8 py-4 bg-amber-600 hover:bg-white hover:text-[#0f1713] text-white font-bold transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-xs shadow-xl"
              >
                Sopralluogo Gratuito
              </button>
              
              <button 
                onClick={(e) => scrollToSection(e, 'servizi')}
                className="px-8 py-4 border border-white/20 hover:border-amber-500 text-white font-bold transition-all duration-300 text-center uppercase tracking-widest text-xs"
              >
                Esplora Atelier
              </button>
            </div>
          </div>

          {/* Immagine con Parallax Leggero */}
          <div className="relative">
            <div 
              className="relative z-10 overflow-hidden shadow-2xl border border-white/5 transition-transform duration-200 ease-out"
              style={{ transform: `translateY(${scrollY * 0.08}px)` }} // Forza del parallax
            >
              <img 
                src="/uu.jpg" 
                alt="Bottega GMWoodLab" 
                className="w-full h-[650px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </div>
            
            {/* Elementi Grafici */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-600/10 -z-10 blur-3xl animate-pulse"></div>
            
            {/* Badge Artigianato */}
            <div 
              className="absolute -bottom-8 -right-8 p-10 bg-amber-600 text-[#0f1713] hidden md:block shadow-2xl"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }} // Parallax inverso per dinamismo
            >
              <p className="text-5xl font-black leading-none italic">100%</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black mt-2">Artigianato Italiano</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;