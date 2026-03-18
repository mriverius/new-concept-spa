'use client';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-[#C9A96E]">Contáctanos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para atenderte y hacer realidad tu experiencia de belleza ideal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-[#1F1F1F] p-8 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-[#C9A96E]/10 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#C9A96E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Dirección
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    La Guaria, Guadalupe<br />
                    San José, Costa Rica
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1F1F1F] p-8 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-[#C9A96E]/10 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#C9A96E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Teléfonos
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+50622355684"
                      className="block text-gray-400 hover:text-[#C9A96E] transition-colors duration-300"
                    >
                      2235-5684
                    </a>
                    <a
                      href="tel:+50622357313"
                      className="block text-gray-400 hover:text-[#C9A96E] transition-colors duration-300"
                    >
                      2235-7313
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1F1F1F] p-8 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-[#C9A96E]/10 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#C9A96E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Horario
                  </h3>
                  <div className="text-gray-400 space-y-1">
                    <p>Lunes a Viernes: 6:00am – 6:00pm</p>
                    <p>Sábado: 8:00am – 4:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1F1F1F] p-2 rounded-lg overflow-hidden h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.4!2d-84.05324!3d9.94686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTYnNDguNyJOIDg0wrAwMycxMS43Ilc!5e0!3m2!1ses!2scr!4v1234567890&q=XW3W%2BQ74%2C+San+Jos%C3%A9%2C+La+Guaria%2C+Costa+Rica"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem', minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://wa.me/50672850521"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>

          <a
            href="tel:+50672850521"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A96E] text-black font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A96E]/60 hover:scale-105"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
