import React, { useState, useRef } from 'react';

const Portfolio = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches ? e.touches[0].pageX : e.pageX;
    const position = ((x - rect.left) / rect.width) * 100;
    if (position >= 0 && position <= 100) setSliderPos(position);
  };

  const projects = [
    { title: "Tavolo in Rovere", cat: "Su Misura", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069" },
    { title: "Cucina Minimal", cat: "Interior", img: "https://images.unsplash.com/photo-1556912177-4517af26df0e?q=80&w=2070" },
    { title: "Scale in Noce", cat: "Strutture", img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0f1713] border-t border-white/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">Showcase</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 uppercase tracking-tighter">
            L'Eccellenza <span className="text-amber-600">del Fare</span>
          </h2>
        </div>

        {/* --- BEFORE/AFTER SLIDER --- */}
        <div className="mb-24">
          <h3 className="text-white text-xl font-bold mb-8 uppercase tracking-widest text-center italic">Restauro Persiane: Il Miracolo del Legno</h3>
          <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden cursor-ew-resize border-2 border-amber-600/20 shadow-2xl"
            onMouseMove={handleMove} onTouchMove={handleMove}
          >
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover" alt="Dopo" />
            <div className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-amber-600" style={{ width: `${sliderPos}%` }}>
              <img src="https://images.unsplash.com/photo-1558444458-450849303798?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 * (100 / sliderPos)}%` }} alt="Prima" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-600 rounded-full left-[50%] flex items-center justify-center pointer-events-none shadow-xl border-4 border-[#0f1713]" style={{ left: `${sliderPos}%`, transform: `translate(-50%, -50%)` }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#0f1713] stroke-2 fill-none"><path d="M18 8l4 4-4 4M6 8l-4 4 4 4" /></svg>
            </div>
          </div>
        </div>

        {/* --- GALLERY GRID --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden aspect-square border border-white/5 bg-gray-900">
              <img src={p.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" alt={p.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1713] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">{p.cat}</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;