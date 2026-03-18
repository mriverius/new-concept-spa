'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Elevate Your Beauty &<br />
          <span className="text-[#C9A96E]">Wellness Experience</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
          Luxury treatments, expert care, and total relaxation in one place
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#services"
            className="group relative px-10 py-4 bg-[#C9A96E] text-black font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A96E]/50"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-[#D4B77E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>

          <a
            href="https://wa.me/50612345678"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-4 border-2 border-[#C9A96E] text-[#C9A96E] font-medium text-lg transition-all duration-300 hover:bg-[#C9A96E] hover:text-black"
          >
            Chat on WhatsApp
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
