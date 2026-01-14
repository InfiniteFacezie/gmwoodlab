import React from 'react';

const PromoBanner = () => (
  <section id="promozioni" className="container-custom my-12">
    <div className="bg-wood-900 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      <div className="z-10">
        <h2 className="text-3xl font-bold mb-2">Hai persiane da ripristinare? </h2>
        <p className="text-wood-200 mb-6">Scopri la nostra promozione e contattaci per un sopralluogo gratuito. </p>
        <a href="tel:3313007162" className="btn-primary bg-white text-wood-900 hover:bg-wood-100 border-none transition-colors">
          Contattaci Ora [cite: 17, 19]
        </a>
      </div>
      <div className="text-9xl opacity-10 absolute right-[-20px] bottom-[-20px] font-bold select-none">WOOD</div>
    </div>
  </section>
);

export default PromoBanner;