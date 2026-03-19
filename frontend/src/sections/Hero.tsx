'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Eleva tu experiencia de<br />
          <span className="text-[#C9A96E]">belleza y bienestar</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
          Tratamientos de lujo, atención experta y relajación total en un solo lugar
        </p>

        <div className="flex justify-center items-center">
          <a
            href="#contacto"
            className="group relative px-12 py-5 bg-[#C9A96E] text-black font-semibold text-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A96E]/60 hover:scale-105"
          >
            <span className="relative z-10">Agendar cita</span>
            <div className="absolute inset-0 bg-[#D4B77E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#C9A96E]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
