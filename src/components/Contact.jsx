import React from 'react';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contatti" className="py-32 bg-[#0f1713] relative overflow-hidden">
      
      {/* Glow Decorativo Luxury - Calore d'Atelier */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-amber-900/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Scritta Decorativa di Sfondo */}
      <div className="absolute -bottom-10 -left-10 text-[22rem] font-black text-white/[0.015] select-none leading-none tracking-tighter">
        GM
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* COLONNA SINISTRA: Branding & Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-10 bg-amber-600"></span>
              <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold">Contatti</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.85]">
              Diamo Forma <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-700 italic">
                Ai Tuoi Sogni.
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg font-light mb-14 max-w-md leading-relaxed opacity-80">
              Dalla bozza su carta alla posa in opera. Ogni grande progetto inizia con un dialogo. <span className="text-white font-medium">Raccontaci la tua visione.</span>
            </p>

            <div className="space-y-12">
              <div className="group flex items-center gap-8">
                <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center text-amber-500 group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-700 shadow-xl">
                  <Phone size={22} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">Telefono Direttivo</h4>
                  <a href="tel:3313007162" className="text-white text-xl font-light hover:text-amber-500 transition-colors tracking-tight">
                    +39 331 300 7162
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-8">
                <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center text-amber-500 group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-700 shadow-xl">
                  <MapPin size={22} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">Sede Atelier</h4>
                  <p className="text-white text-xl font-light tracking-tight">Pogliano Milanese, IT</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: Il Form "Premium" */}
          <div className="lg:col-span-7">
            <div className="relative p-[1px] bg-gradient-to-br from-white/10 via-transparent to-white/5 shadow-2xl">
              <div className="bg-[#0a0f0d] p-10 md:p-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
                
                <form className="relative z-10 space-y-10">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name"
                        className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-amber-600 transition-colors placeholder-transparent" 
                        placeholder="Nome"
                      />
                      <label htmlFor="name" className="absolute left-0 -top-4 text-gray-500 text-[9px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-amber-600 font-bold">
                        Nome Completo
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email"
                        className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-amber-600 transition-colors placeholder-transparent" 
                        placeholder="Email"
                      />
                      <label htmlFor="email" className="absolute left-0 -top-4 text-gray-500 text-[9px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-amber-600 font-bold">
                        Email Ufficiale
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea 
                      id="message"
                      rows="4" 
                      className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-amber-600 transition-colors resize-none placeholder-transparent" 
                      placeholder="Messaggio"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-4 text-gray-500 text-[9px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-amber-600 font-bold">
                      Dettagli del Progetto
                    </label>
                  </div>

                  <button className="group relative w-full py-7 bg-amber-600 text-[#0f1713] font-black uppercase tracking-[0.4em] text-[11px] overflow-hidden transition-all duration-700 shadow-xl">
                    <div className="relative z-10 flex items-center justify-center gap-4">
                      Invia Richiesta <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                  </button>
                </form>

                <p className="mt-10 text-center text-gray-600 text-[9px] uppercase tracking-[0.3em] font-medium italic">
                  "L'eccellenza richiede tempo. Risponderemo con cura entro 24h."
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