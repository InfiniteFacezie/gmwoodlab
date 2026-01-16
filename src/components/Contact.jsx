import React from 'react';

const Contact = () => {
  return (
    <section id="contatti" className="py-24 bg-[#0f1713] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Info di Contatto */}
          <div>
            <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">Contatti</span>
            <h2 className="text-5xl font-black text-white mt-4 mb-8 uppercase tracking-tighter">
              Inizia il tuo <br /><span className="text-amber-600">Progetto.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Siamo pronti a dare forma alle tue idee. Prenota un sopralluogo tecnico o vieni a trovarci in bottega.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-amber-600/30 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <span className="text-xs font-bold">TEL</span>
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">Chiamaci</h4>
                  <a href="tel:3313007162" className="text-gray-400 hover:text-amber-500 transition-colors">+39 331 300 7162</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-amber-600/30 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <span className="text-xs font-bold">LOC</span>
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">Bottega</h4>
                  <p className="text-gray-400">Pogliano Milanese, Italia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Minimale */}
          <div className="bg-white/[0.02] p-8 md:p-12 border border-white/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Nome</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-600 transition-colors" placeholder="Il tuo nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-600 transition-colors" placeholder="email@esempio.it" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Messaggio</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-600 transition-colors resize-none" placeholder="Descrivi la tua idea..."></textarea>
              </div>
              <button className="w-full py-5 bg-amber-600 text-[#0f1713] font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-300">
                Invia Richiesta
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;