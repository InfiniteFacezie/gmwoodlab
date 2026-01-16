import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effetto per cambiare lo sfondo allo scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FUNZIONE PER LO SCROLL FLUIDO
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altezza della navbar per non coprire i titoli
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0f1713]/95 backdrop-blur-lg py-4 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Cliccandolo si torna su */}
        <div 
          className="flex flex-col group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-2xl font-black text-white tracking-[0.2em] leading-none group-hover:text-amber-500 transition-colors">
            GM<span className="text-amber-600">WOOD</span>LAB
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-[1px] w-4 bg-amber-600"></span>
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.4em]">Atelier Falegnameria</span>
          </div>
        </div>
        
        {/* Menu Centrale */}
        <div className="hidden md:flex items-center space-x-12">
          {['Servizi', 'Promozioni', 'Contatti'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-xs uppercase tracking-[0.3em] text-gray-300 hover:text-amber-500 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex items-center">
          <a 
            href="tel:3313007162" 
            className="group relative px-6 py-2 border border-amber-600/50 overflow-hidden"
          >
            <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#0f1713] transition-colors duration-300">
              Prenota Consulenza
            </span>
            <span className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;