import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import PromoBanner from "./components/PromoBanner.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx"; // <--- Importa qui

function App() {
  return (
    <div className="min-h-screen bg-[#0f1713] selection:bg-amber-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PromoBanner />
        <Contact />
      </main>
      <BackToTop /> {/* <--- Aggiungilo qui */}
    </div>
  );
}

export default App;