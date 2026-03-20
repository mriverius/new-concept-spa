'use client';

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#DCD7CE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DCD7CE] via-transparent to-transparent lg:opacity-60" />
            </div>
          </div>

          <div className="space-y-6">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Donde la belleza encuentra la{' '}
              <span className="text-[#C9A96E]">excelencia</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                En <span className="text-[#C9A96E] font-medium">New Concept Spa</span>, creemos que el cuidado personal 
                es una experiencia que va más allá de lo estético. Es un momento para ti, un espacio donde la profesionalidad 
                se encuentra con la calidez humana.
              </p>

              <p className="text-lg">
                Nuestro equipo de expertos combina años de experiencia con las técnicas más innovadoras 
                para ofrecerte resultados que superan tus expectativas. Cada tratamiento es personalizado, 
                cada detalle pensado para tu bienestar.
              </p>

              <p className="text-lg">
                Más que un spa, somos tu refugio de tranquilidad en Moravia. Un lugar donde el estrés 
                se desvanece y emerge tu mejor versión, renovada y llena de confianza.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-[#C9A96E]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  5+
                </p>
                <p className="text-sm text-gray-600 mt-2">Años de experiencia</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#C9A96E]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  100%
                </p>
                <p className="text-sm text-gray-600 mt-2">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
