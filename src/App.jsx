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
    <div className="relative min-h-screen bg-[#0f1713] wood-texture-bg selection:bg-amber-600 selection:text-white">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Process /> 
        <Services />
        <Portfolio />
        <Testimonials />
        <PromoBanner />
        <Contact />
      </main>

      <BackToTop />
    </div>
  );
}

export default App;