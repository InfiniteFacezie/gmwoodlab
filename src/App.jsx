import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import PromoBanner from "./components/PromoBanner.jsx";

function App() {
  return (
    <div className="min-h-screen bg-wood-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PromoBanner />
      </main>
    </div>
  );
}

export default App;