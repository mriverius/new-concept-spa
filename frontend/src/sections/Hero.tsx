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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-float"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070')",
          filter: 'blur(1px)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#C9A96E]/5 via-transparent to-transparent" />
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-1500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 blur-3xl bg-[#C9A96E]/20 scale-150" />
          <h1
            className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Elevate Your Beauty &<br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96E] via-[#D4B77E] to-[#C9A96E]">
                Wellness Experience
              </span>
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#C9A96E] via-[#D4B77E] to-[#C9A96E] opacity-40" />
            </span>
          </h1>
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl mb-16 text-gray-100 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
          Luxury treatments, expert care, and total relaxation in one place
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#services"
            className="group relative px-12 py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A96E] via-[#D4B77E] to-[#C9A96E] bg-[length:200%_100%] group-hover:bg-[length:100%_100%] transition-all duration-500" />
            <div className="absolute inset-0 shadow-[0_0_40px_rgba(201,169,110,0.4)] group-hover:shadow-[0_0_60px_rgba(201,169,110,0.7)] transition-all duration-500" />
            <span className="relative z-10 text-black font-semibold text-lg tracking-wide">Book Now</span>
          </a>

          <a
            href="https://wa.me/50612345678"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 rounded-full border-2 border-[#C9A96E] overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A96E] via-[#D4B77E] to-[#C9A96E] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            <span className="relative z-10 text-[#C9A96E] group-hover:text-black font-semibold text-lg tracking-wide transition-colors duration-500">
              Chat on WhatsApp
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#C9A96E] drop-shadow-[0_0_8px_rgba(201,169,110,0.5)]"
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
