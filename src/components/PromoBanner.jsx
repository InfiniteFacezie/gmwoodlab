import React from 'react';

const PromoBanner = () => {
  return (
    <section id="promozioni" className="py-20 bg-[#0f1713]">
      <div className="container mx-auto px-6">
        <div className="relative bg-amber-600 p-8 md:p-16 overflow-hidden">
          {/* Decorazione di sfondo */}
          <div className="absolute top-0 right-0 opacity-10 text-[15rem] font-black leading-none transform translate-x-1/4 -translate-y-1/4 select-none">
            WOOD
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-[#0f1713] uppercase tracking-tighter leading-none mb-4">
                Hai persiane da <br />ripristinare?
              </h2>
              <p className="text-[#0f1713]/80 font-medium text-lg">
                Non aspettare che il tempo le rovini. Approfitta della nostra promozione stagionale per un restauro professionale garantito.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a 
                href="#contatti" 
                className="px-10 py-5 bg-[#0f1713] text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-[#0f1713] transition-all duration-300 shadow-2xl"
              >
                Sopralluogo Gratuito
              </a>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0f1713]/60">
                Offerta Limitata
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;