import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Sfondo decorativo che richiama il legno */}
      <div className="absolute inset-0 bg-wood-50 -z-10" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-wood-100 text-wood-700 text-sm font-medium mb-6">
              Pogliano Milanese [cite: 20]
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-wood-900 mb-6 leading-tight">
              Il tuo sogno, <br />
              <span className="text-wood-600">il nostro mestiere.</span> [cite: 4]
            </h1>
            <p className="text-xl text-wood-700 mb-8 italic">
              "Nel silenzio del legno, risuonano le voci della natura." [cite: 5]
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contatti" className="btn-primary">
                Sopralluogo Gratuito [cite: 19]
              </a>
              <a href="#servizi" className="btn-secondary">
                Scopri le Lavorazioni [cite: 4]
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/hero-wood.jpg" 
                alt="Lavorazione artigianale legno" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge promozionale estratto dalla brochure */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-wood-100 max-w-[200px]">
              <p className="text-sm font-bold text-wood-900">
                Hai persiane da ripristinare? [cite: 18]
              </p>
              <p className="text-xs text-wood-600 mt-2">Scopri la nostra promozione [cite: 18]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;