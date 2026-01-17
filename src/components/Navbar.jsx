import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
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

  const navLinks = [
    { name: 'servizi', id: 'services' },      // ID tecnico: services
    { name: 'portfolio', id: 'portfolio' },    // ID tecnico: portfolio
    { name: 'processo', id: 'process' },       // ID tecnico: process
    { name: 'contatti', id: 'contatti' }        // ID tecnico: contact
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled || isOpen ? 'bg-[#0f1713]/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div 
          className="flex items-center cursor-pointer group z-[110]"
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
        >
          <img 
            src="/logo.png" 
            alt="GMWoodLab Logo" 
            className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-110"
          />
          <div className="ml-3">
            <span className="text-white font-black tracking-tighter text-xl block leading-none">GM</span>
            <span className="text-amber-600 text-[10px] uppercase tracking-[0.3em] font-bold">WoodLab</span>
          </div>
        </div>

        {/* DESKTOP MENU */}
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

        {/* MOBILE HAMBURGER ICON */}
        <div className="md:hidden z-[110]">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isOpen ? <X size={30} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-[#0f1713] transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden flex flex-col items-center justify-center space-y-8`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl uppercase tracking-[0.4em] text-white font-black hover:text-amber-500 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contatti')}
            className="mt-4 px-10 py-4 bg-amber-600 text-white text-xs uppercase tracking-[0.3em] font-bold"
          >
            Richiedi Preventivo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;