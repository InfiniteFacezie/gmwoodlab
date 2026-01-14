import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-wood-200">
      <div className="container-custom flex justify-between items-center h-20">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-wood-900 tracking-tight">GMWOODLAB</span>
          <span className="text-xs text-wood-600 uppercase tracking-widest">Bottega di Falegnameria</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-wood-900 font-medium">
          <a href="#servizi" className="hover:text-wood-600 transition-colors">Servizi</a>
          <a href="#promozioni" className="hover:text-wood-600 transition-colors">Promozioni</a>
          <a href="#contatti" className="hover:text-wood-600 transition-colors">Contatti</a>
        </div>

        <a href="tel:3313007162" className="btn-primary py-2 px-4 text-sm">
          Chiama Ora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;