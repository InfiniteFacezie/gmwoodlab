import React, { useState, useRef } from 'react';

const Portfolio = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Gestione sia per mouse che per touch (mobile)
    const x = e.touches ? e.touches[0].pageX : e.pageX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    if (position >= 0 && position <= 100) {
      setSliderPos(position);
    }
  };

  const projects = [
    { 
      title: "Tavolo Massello", 
      cat: "Design D'Interni", 
      img: "/1.jpg" 
    },
    { 
      title: "Libreria a Muro", 
      cat: "Arredi Su Misura", 
      img: "/2.jpg" 
    },
    { 
      title: "Infissi in Legno", 
      cat: "Serramenti", 
      img: "/3.jpg" 
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0f1713] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold">Showcase</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 uppercase tracking-tighter">
            L'Eccellenza <span className="text-amber-600">del Fare</span>
          </h2>
        </div>

        
{/* --- BEFORE/AFTER SLIDER CORRETTO --- */}
<div className="mb-24">
  <h3 className="text-white text-xs font-bold mb-8 uppercase tracking-[0.3em] text-center opacity-70 italic">
    Restauro Professionale: Il Prima e il Dopo
  </h3>
  <div 
    ref={containerRef}
    className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden cursor-ew-resize border border-white/10 shadow-2xl rounded-sm bg-[#050807]"
    onMouseMove={handleMove} 
    onTouchMove={handleMove}
  >
    {/* Immagine DOPO (slider2b.jpg) - Base */}
    <img 
      src="/slider2b.jpg" 
      className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
      alt="Dopo il restauro" 
    />
    
    {/* Contenitore Immagine PRIMA (slider2.jpg) - Taglio dinamico */}
    <div 
      className="absolute inset-0 h-full overflow-hidden border-r border-amber-500 z-10 pointer-events-none" 
      style={{ width: `${sliderPos}%` }}
    >
      {/* L'immagine interna DEVE avere la stessa larghezza del contenitore padre (max-w-4xl) 
          per non apparire di dimensioni diverse */}
      <img 
        src="/slider2.jpg" 
        className="absolute inset-0 h-full object-cover  brightness-75" 
        style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw', maxWidth: 'none' }} 
        alt="Prima del restauro" 
      />
    </div>

    {/* Cursore dello slider */}
    <div 
      className="absolute top-0 bottom-0 z-20 pointer-events-none" 
      style={{ left: `${sliderPos}%` }}
    >
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-[#0f1713]">
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#0f1713] stroke-[3] fill-none">
          <path d="M18 8l4 4-4 4M6 8l-4 4 4 4" />
        </svg>
      </div>
    </div>
    
    {/* Etichette */}
    <div className="absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1 uppercase tracking-widest">Prima</div>
    <div className="absolute bottom-4 right-4 z-30 bg-amber-600 text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest">Dopo</div>
  </div>
</div>

        {/* --- GALLERY GRID --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden aspect-square border border-white/5 bg-black">
              <img 
                src={p.img} 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 brightness-[0.35] contrast-[1.2] grayscale group-hover:grayscale-0 group-hover:brightness-[0.6]" 
                alt={p.title} 
              />
              <div className="absolute inset-0 bg-amber-900/40 mix-blend-color opacity-90 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent opacity-100 pointer-events-none" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-amber-500 text-[9px] font-bold uppercase tracking-[0.5em] mb-2">{p.cat}</span>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4 leading-none">{p.title}</h3>
                <div className="h-[1px] w-0 bg-amber-600 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;