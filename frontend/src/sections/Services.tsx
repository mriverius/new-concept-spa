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
    <section id="services" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-[#C9A96E]">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Discover a world of premium treatments tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-[#1F1F1F] p-8 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#C9A96E]/10 to-transparent transition-opacity duration-500 ${
                  hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3
                  className="text-2xl mb-2 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h3>

                <p className="text-sm text-[#C9A96E] mb-4 font-medium">
                  {service.subtitle}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div
                  className={`mt-6 flex items-center text-[#C9A96E] transition-all duration-300 ${
                    hoveredCard === service.id ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                  }`}
                >
                  <span className="text-sm font-medium">Learn More</span>
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
                className={`absolute bottom-0 left-0 h-1 bg-[#C9A96E] transition-all duration-500 ${
                  hoveredCard === service.id ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
