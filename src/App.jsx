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
      
      {/* Linea di continuità che "lega" i diversi colori di sfondo */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-600/10 to-transparent z-0 opacity-20 hidden md:block" />

      <Navbar />
      
      <main className="relative z-10">
        {/* 1. HERO: Sfondo originale wood-texture */}
        <div className="wood-texture-bg">
          <Hero />
        </div>
        
        {/* 2. PROCESSO: Colore leggermente più chiaro per staccare */}
        <div className="bg-[#131d18] -mt-20 pt-20 pb-10 border-y border-white/[0.02]">
          <Process /> 
        </div>
        
         {/* 3. TESTIMONIANZE: Posizionate strategicamente dopo il portfolio per dare fiducia */}
        <div className="bg-[#0f1713] border-t border-white/[0.02]">
          <Testimonials />
        </div>
        
        {/* 4. PORTFOLIO: Spostato prima dei servizi per mostrare subito il lavoro */}
        <div className="bg-[#0a0f0d] wood-texture-bg pt-20 pb-10">
          <Portfolio />
        </div>

        {/* 5. SERVIZI: Torna allo scuro profondo per chiudere la spiegazione tecnica */}
        <div className="bg-[#0a0f0d] relative z-20 pt-10 pb-20">
          <Services />
        </div>
        
        <PromoBanner />
        
        {/* 6. CONTATTI: Chiusura */}
        <div className="bg-[#0a0f0d]">
          <Contact />
        </div>
      </main>

      <BackToTop />
    </div>
  );
}

export default App;