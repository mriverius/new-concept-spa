'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Hair',
    subtitle: 'Men & Women',
    description: 'Expert cuts, coloring, and styling crafted to enhance your natural beauty with precision and artistry.',
    icon: '✂️',
  },
  {
    id: 2,
    title: 'Barbering',
    subtitle: 'Classic & Modern',
    description: 'Traditional barbering techniques meet contemporary style for the modern gentleman.',
    icon: '💈',
  },
  {
    id: 3,
    title: 'Nails',
    subtitle: 'Manicure & Pedicure',
    description: 'Immaculate nail care and artistry that transforms your hands and feet into works of elegance.',
    icon: '💅',
  },
  {
    id: 4,
    title: 'Spa Treatments',
    subtitle: 'Relax & Rejuvenate',
    description: 'Indulgent therapies designed to restore balance, vitality, and inner peace to body and mind.',
    icon: '🌿',
  },
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96E] to-[#D4B77E]">Services</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover a world of premium treatments tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative transition-all duration-700 cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div
                className={`relative p-10 rounded-2xl border transition-all duration-700 ${
                  hoveredCard === service.id
                    ? 'transform -translate-y-4 shadow-[0_20px_60px_rgba(201,169,110,0.3)] border-[#C9A96E]/50'
                    : 'border-[#C9A96E]/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
                }`}
                style={{
                  background: 'rgba(31, 31, 31, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A96E]/15 via-transparent to-transparent transition-opacity duration-700 ${
                    hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10">
                  <div
                    className={`text-6xl mb-8 transform transition-all duration-700 ${
                      hoveredCard === service.id ? 'scale-125 -rotate-6' : 'scale-100 rotate-0'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className="text-3xl mb-3 tracking-tight font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#C9A96E] mb-5 font-semibold tracking-wider uppercase">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-400/90 leading-relaxed text-[15px]">
                    {service.description}
                  </p>

                  <div
                    className={`mt-8 flex items-center text-[#C9A96E] transition-all duration-500 ${
                      hoveredCard === service.id ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                    }`}
                  >
                    <span className="text-sm font-semibold tracking-wide">Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#C9A96E] to-[#D4B77E] rounded-b-2xl transition-all duration-700 ${
                    hoveredCard === service.id ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
