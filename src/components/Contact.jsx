import React from 'react';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contatti" className="py-32 bg-[#0f1713] relative overflow-hidden">
      {/* Elemento Decorativo: Numero di sezione o background text */}
      <div className="absolute -bottom-10 -left-10 text-[20rem] font-black text-white/[0.02] select-none leading-none">
        GM
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* COLONNA SINISTRA: Branding & Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-8 bg-amber-600"></span>
              <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold">Contatti</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
              Diamo Forma <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
                Ai Tuoi Sogni.
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              Dalla bozza su carta alla posa in opera. Ogni grande progetto inizia con un dialogo. Raccontaci la tua visione.
            </p>

            <div className="space-y-10">
              <div className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-amber-500 group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-500">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Telefono</h4>
                  <a href="tel:3313007162" className="text-white text-lg font-medium hover:text-amber-500 transition-colors">
                    +39 331 300 7162
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-amber-500 group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-500">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Atelier</h4>
                  <p className="text-white text-lg font-medium">Pogliano Milanese, IT</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: Il Form "Premium" */}
          <div className="lg:col-span-7">
            <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
              <div className="bg-[#0a0f0d] p-8 md:p-12 relative overflow-hidden">
                {/* Texture Wood sottile interna al form */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
                
                <form className="relative z-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name"
                        className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-600 transition-colors placeholder-transparent" 
                        placeholder="Nome"
                      />
                      <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-500 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-amber-600">
                        Nome Completo
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email"
                        className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-600 transition-colors placeholder-transparent" 
                        placeholder="Email"
                      />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-amber-600">
                        Email Aziendale / Privata
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea 
                      id="message"
                      rows="4" 
                      className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-amber-600 transition-colors resize-none placeholder-transparent" 
                      placeholder="Messaggio"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-500 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-amber-600">
                      Descrivi il tuo progetto
                    </label>
                  </div>

                  <button className="group relative w-full py-6 bg-amber-600 text-[#0f1713] font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all duration-500 hover:bg-white hover:text-black">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      Invia Richiesta
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                    {/* Effetto sweep al passaggio del mouse */}
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </form>

                <p className="mt-8 text-center text-gray-600 text-[9px] uppercase tracking-widest">
                  Rispondiamo solitamente entro 24 ore lavorative.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;