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
    { 
      title: "Tavolo Massello", 
      cat: "Design D'Interni", 
      img: "/1.jpg",
      gridClass: "md:col-span-2 md:row-span-2" 
    },
    { 
      title: "Libreria a Muro", 
      cat: "Arredi Su Misura", 
      img: "/2.jpg",
      gridClass: "md:col-span-1 md:row-span-1" 
    },
    { 
      title: "Infissi in Legno", 
      cat: "Serramenti", 
      img: "/3.jpg",
      gridClass: "md:col-span-1 md:row-span-1" 
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold">Showcase</span>
          <h2 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
            L'Essenza <span className="text-amber-600 italic">del Legno</span>
          </h2>
        </div>

        {/* --- BEFORE/AFTER SLIDER (Altezza 16:9 e Larghezza piena) --- */}
        <div className="mb-24">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/9] overflow-hidden cursor-ew-resize shadow-luxury rounded-sm border border-white/5"
            onMouseMove={handleMove} onTouchMove={handleMove}
          >
            {/* Immagine DOPO */}
            <img src="/slider2b.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Dopo" />
            
            {/* Contenitore Immagine PRIMA */}
            <div 
              className="absolute inset-0 h-full overflow-hidden border-r border-amber-500 z-10" 
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src="/slider2.jpg" 
                className="absolute inset-0 h-full object-cover" 
                style={{ 
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', 
                  maxWidth: 'none' 
                }} 
                alt="Prima" 
              />
            </div>

            {/* Cursore Interattivo */}
            <div 
              className="absolute top-0 bottom-0 z-20" 
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-[#0f1713]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#0f1713] stroke-[3] fill-none">
                  <path d="M18 8l4 4-4 4M6 8l-4 4 4 4" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1 uppercase tracking-widest">Prima</div>
            <div className="absolute bottom-4 right-4 z-30 bg-amber-600 text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest">Dopo</div>
          </div>
        </div>

        {/* --- ASYMMETRIC GRID (Allineata allo slider sopra) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-full md:h-[800px]">
          {projects.map((p, i) => (
            <div key={i} className={`group relative overflow-hidden bg-black shadow-luxury border border-white/5 ${p.gridClass}`}>
              <img 
                src={p.img} 
                className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100 brightness-[0.4] group-hover:brightness-[0.7] grayscale group-hover:grayscale-0" 
                alt={p.title} 
              />
              <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-3">{p.cat}</span>
                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none">{p.title}</h3>
                <div className="h-[2px] w-0 bg-amber-600 group-hover:w-20 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;