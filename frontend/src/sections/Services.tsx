'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Cabello',
    subtitle: 'Hombres y Mujeres',
    description: 'Cortes expertos, coloración y peinados diseñados para realzar tu belleza natural con precisión y arte.',
    backgroundImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800',
    fullDescription: 'Nuestro servicio de cabello combina técnicas vanguardistas con productos de alta gama para ofrecerte resultados excepcionales. Desde cortes de precisión hasta coloraciones sofisticadas, cada servicio es personalizado según tu estilo y personalidad. Nuestros estilistas expertos están constantemente actualizados en las últimas tendencias internacionales, garantizando que recibas un servicio de clase mundial en un ambiente de lujo y confort.',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600',
      'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=600',
      'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=600',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600',
      'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=600',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600',
      'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=600',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600',
    ],
  },
  {
    id: 2,
    title: 'Barbería',
    subtitle: 'Clásico y Moderno',
    description: 'Técnicas tradicionales de barbería combinadas con estilo contemporáneo para el caballero moderno.',
    backgroundImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800',
    fullDescription: 'Nuestra barbería ofrece una experiencia premium que fusiona la elegancia clásica con las tendencias modernas. Cada servicio incluye consulta personalizada, afeitado con navaja tradicional, arreglo de barba con productos premium, y masaje facial relajante. Utilizamos productos exclusivos de las mejores marcas internacionales, garantizando resultados impecables y un cuidado excepcional para tu piel y cabello.',
    gallery: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600',
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600',
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=600',
      'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600',
      'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=600',
      'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=600',
      'https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=600',
    ],
  },
  {
    id: 3,
    title: 'Uñas',
    subtitle: 'Manicure y Pedicure',
    description: 'Cuidado impecable de uñas y arte que transforma tus manos y pies en obras de elegancia.',
    backgroundImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800',
    fullDescription: 'Nuestros servicios de manicure y pedicure van más allá de lo convencional. Cada tratamiento incluye exfoliación, hidratación profunda, masaje relajante y aplicación perfecta de esmaltes de lujo. Ofrecemos diseños artísticos personalizados, extensiones de uñas profesionales, y tratamientos de fortalecimiento. Trabajamos en un ambiente completamente higienizado con herramientas esterilizadas y productos de las mejores marcas internacionales.',
    gallery: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600',
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=600',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600',
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600',
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=600',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600',
      'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?q=80&w=600',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600',
      'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=600',
    ],
  },
  {
    id: 4,
    title: 'Tratamientos Spa',
    subtitle: 'Relájate y Rejuvenece',
    description: 'Terapias indulgentes diseñadas para restaurar equilibrio, vitalidad y paz interior a cuerpo y mente.',
    backgroundImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800',
    fullDescription: 'Nuestros tratamientos spa están diseñados para proporcionar una experiencia holística de bienestar. Ofrecemos masajes terapéuticos, tratamientos faciales anti-edad, envolturas corporales desintoxicantes, y rituales de relajación profunda. Cada terapia utiliza productos orgánicos premium y técnicas especializadas que combinan tradiciones ancestrales con innovación moderna. Sumérgete en un oasis de tranquilidad donde cada detalle está pensado para tu máximo confort y renovación.',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600',
      'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=600',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=600',
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600',
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=600',
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600',
      'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=600',
    ],
  },
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <section id="servicios" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nuestros <span className="text-[#C9A96E]">Servicios</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre un mundo de tratamientos premium diseñados para tus necesidades únicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedService(service)}
                className="group relative h-96 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.backgroundImage}')` }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <h3
                    className="text-3xl mb-2 tracking-tight text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#C9A96E] mb-4 font-medium">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  <div
                    className={`flex items-center text-[#C9A96E] transition-all duration-300 ${
                      hoveredCard === service.id ? 'translate-x-2' : 'translate-x-0'
                    }`}
                  >
                    <span className="text-sm font-semibold">Ver más</span>
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
                  className={`absolute top-0 left-0 w-1 bg-[#C9A96E] transition-all duration-500 ${
                    hoveredCard === service.id ? 'h-full' : 'h-0'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          <div className="min-h-screen px-6 py-12 flex items-center justify-center">
            <div
              className="max-w-6xl w-full bg-[#0B0B0B] border border-[#C9A96E]/30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#C9A96E] text-black rounded-full flex items-center justify-center hover:bg-[#D4B77E] transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 sm:p-12">
                <h3
                  className="text-4xl sm:text-5xl mb-4 text-[#C9A96E]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {selectedService.title}
                </h3>
                <p className="text-xl text-gray-400 mb-8">{selectedService.subtitle}</p>
                
                <p className="text-gray-300 leading-relaxed mb-12 text-lg">
                  {selectedService.fullDescription}
                </p>

                <h4 className="text-2xl mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Galería
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedService.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden bg-[#1F1F1F] group cursor-pointer"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${image}')` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <a
                    href="#contacto"
                    onClick={() => setSelectedService(null)}
                    className="inline-block px-10 py-4 bg-[#C9A96E] text-black font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A96E]/60 hover:scale-105"
                  >
                    Agendar Cita
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
