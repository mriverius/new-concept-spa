'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Cabello',
    subtitle: 'Hombres y Mujeres',
    description: 'Cortes expertos, coloración y peinados diseñados para realzar tu belleza natural con precisión y arte.',
    icon: '✂️',
  },
  {
    id: 2,
    title: 'Barbería',
    subtitle: 'Clásico y Moderno',
    description: 'Técnicas tradicionales de barbería combinadas con estilo contemporáneo para el caballero moderno.',
    icon: '💈',
  },
  {
    id: 3,
    title: 'Uñas',
    subtitle: 'Manicure y Pedicure',
    description: 'Cuidado impecable de uñas y arte que transforma tus manos y pies en obras de elegancia.',
    icon: '💅',
  },
  {
    id: 4,
    title: 'Tratamientos Spa',
    subtitle: 'Relájate y Rejuvenece',
    description: 'Terapias indulgentes diseñadas para restaurar equilibrio, vitalidad y paz interior a cuerpo y mente.',
    icon: '🌿',
  },
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestros <span className="text-[#C9A96E]">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre un mundo de tratamientos premium diseñados para tus necesidades únicas
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
                  <span className="text-sm font-medium">Ver más</span>
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
