'use client';

export default function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#1F1F1F]">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-[#C9A96E]">Blog</span>
        </h2>
        
        <div className="mt-12 p-12 border-2 border-[#C9A96E]/20 bg-[#0B0B0B]/50">
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-[#C9A96E] opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
            Muy pronto contenido sobre belleza y bienestar
          </p>
          <p className="text-gray-500 mt-4">
            Próximamente compartiremos tips, tendencias y consejos de nuestros expertos
          </p>
        </div>
      </div>
    </section>
  );
}
