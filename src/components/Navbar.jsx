import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // FUNZIONE DI SCROLL: Cruciale per far muovere il menu
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altezza della Navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false); // Chiude il menu mobile dopo il click
    }
  };

  const navLinks = [
    { name: 'METODO', href: 'process' },
    { name: 'RECENSIONI', href: 'testimonianze' },
    { name: 'PORTFOLIO', href: 'portfolio' },
    { name: 'SERVIZI', href: 'services' },
    { name: 'PROMO', href: 'promo' }, // <-- Nuova voce inserita qui
    { name: 'CONTATTI', href: 'contatti' },
  ];

  return (
    <nav className="fixed w-full z-[100] transition-all duration-300">
      <div className="bg-[#0f1713]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="z-[110] flex items-center gap-3">
            <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="GM Wood Lab Logo" 
                className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="flex flex-col md:flex-row md:items-baseline">
                <span className="text-white font-black tracking-tighter text-xl leading-none">GM</span>
                <span className="text-amber-600 font-light text-[10px] md:ml-2 uppercase tracking-[0.3em] leading-none">
                  WoodLab
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.href}`} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white/70 hover:text-amber-600 text-[10px] uppercase tracking-[0.3em] font-bold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contatti" 
              onClick={(e) => scrollToSection(e, 'contatti')}
              className="border border-amber-600 text-amber-600 px-4 py-2 text-[10px] uppercase tracking-widest font-black hover:bg-amber-600 hover:text-[#0f1713] transition-all"
            >
              Richiedi Preventivo Gratuito
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-[110] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-[#0f1713] z-[105] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white text-3xl font-black uppercase tracking-tighter hover:text-amber-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contatti"
            onClick={(e) => scrollToSection(e, 'contatti')}
            className="mt-4 bg-amber-600 text-[#0f1713] px-8 py-4 font-black uppercase tracking-[0.2em] text-sm"
          >
            Richiedi Preventivo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;