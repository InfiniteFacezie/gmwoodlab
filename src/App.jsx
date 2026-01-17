import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Process from "./components/Process.jsx"; 
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx"; 
import PromoBanner from "./components/PromoBanner.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Testimonials from "./components/Testimonials.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0f1713] selection:bg-amber-600 selection:text-white overflow-hidden">
      
      {/* Linea di continuità: aumentata l'opacità per una guida visiva più elegante */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-600/20 to-transparent z-0 opacity-30 hidden md:block" />

      <Navbar />
      
      <main className="relative z-10">
        {/* 1. HERO: Spazio generoso per l'impatto iniziale */}
        <div className="wood-texture-bg">
          <Hero />
        </div>
        
        {/* 2. PROCESSO: Aumentato il padding per dare importanza al metodo */}
        <div className="bg-[#131d18] -mt-24 pt-32 pb-24 border-y border-white/[0.03]">
          <Process /> 
        </div>
        
        {/* 3. TESTIMONIANZE: Isolamento visivo per aumentare la fiducia */}
        <div className="bg-[#0f1713] py-16 border-b border-white/[0.02]">
          <Testimonials />
        </div>
        
        {/* 4. PORTFOLIO: Spazio ampio per far "parlare" le immagini dei lavori */}
        <div className="bg-[#0a0f0d] wood-texture-bg py-32 md:py-40">
          <Portfolio />
        </div>

        {/* 5. SERVIZI: Sfondo più scuro e stacco netto dal Portfolio */}
        <div className="bg-[#070a09] relative z-20 py-32 md:py-40">
          <Services />
        </div>
        
        {/* 6. PROMO BANNER: Isolato per massima conversione */}
        <div className="py-12 bg-[#070a09]">
          <PromoBanner />
        </div>
        
        {/* 7. CONTATTI: Chiusura pulita */}
        <div className="bg-[#0a0f0d] pt-10">
          <Contact />
        </div>
        
        {/* BARRA FINALE - FOOTER */}
        <footer className="bg-black py-8 border-t border-white/5 relative z-30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* P.IVA a sinistra */}
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-medium">
                P.IVA 13457820960 — © {new Date().getFullYear()} GM WOODLAB
              </div>

              {/* Credits a destra */}
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-medium">
                Made with <span className="text-amber-600 animate-pulse">♥</span> by{' '}
                <a 
                  href="https://www.theround.it" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-amber-500 transition-colors font-black"
                >
                  THE ROUND
                </a>
              </div>

            </div>
          </div>
        </footer>
        
      </main>

      <BackToTop />
    </div>
  );
}

export default App;