import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Definiamo i link con etichetta e ID corrispondente
  const navLinks = [
    { name: 'servizi', id: 'servizi' },
    { name: 'portfolio', id: 'portfolio' },
    { name: 'processo', id: 'process' }, // 'processo' è il testo, 'process' è l'ID
    { name: 'contatti', id: 'contatti' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0f1713]/90 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/logo.png" 
            alt="GMWoodLab Logo" 
            className="h-12 w-auto transition-transform duration-500 group-hover:scale-110"
          />
          <div className="ml-3 hidden sm:block">
            <span className="text-white font-black tracking-tighter text-xl block leading-none">GM</span>
            <span className="text-amber-600 text-[10px] uppercase tracking-[0.3em] font-bold">WoodLab</span>
          </div>
        </div>

        {/* MENU LINKS AGGIORNATI */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[11px] uppercase tracking-[0.3em] text-gray-300 hover:text-amber-500 transition-colors duration-300 font-bold"
            >
              {link.name}
            </button>
          ))}
          
          <button 
            onClick={() => scrollToSection('contatti')}
            className="px-6 py-2 border border-amber-600/50 text-amber-500 text-[10px] uppercase tracking-widest font-bold hover:bg-amber-600 hover:text-white transition-all duration-300"
          >
            Preventivo
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;