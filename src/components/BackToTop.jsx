import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra il tasto quando si scende di 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="group relative w-12 h-12 bg-amber-600 flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-2xl"
        aria-label="Torna su"
      >
        {/* Freccia minimale */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 fill-none stroke-[#0f1713] stroke-2 group-hover:stroke-amber-600 transition-colors"
        >
          <path d="M5 15l7-7 7 7" strokeLinecap="square" />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;