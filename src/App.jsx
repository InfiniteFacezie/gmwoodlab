import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Process from "./components/Process.jsx"; // Lo storytelling del workflow
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx"; // La galleria e lo slider
import PromoBanner from "./components/PromoBanner.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#0f1713] selection:bg-amber-600 selection:text-white">
      <Navbar />
      <main>
        {/* L'ingresso: l'anima del brand */}
        <Hero />
        
        {/* Come lavoriamo: crea fiducia */}
        <Process /> 
        
        {/* Cosa facciamo: i servizi tecnici */}
        <Services />
        
        {/* La prova del valore: i lavori fatti */}
        <Portfolio />
        
        {/* L'offerta diretta */}
        <PromoBanner />
        
        {/* Il contatto finale */}
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;