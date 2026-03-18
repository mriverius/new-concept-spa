'use client';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800',
    alt: 'Spa interior',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800',
    alt: 'Hair styling',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=800',
    alt: 'Nail treatment',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800',
    alt: 'Spa treatment',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800',
    alt: 'Beauty salon',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800',
    alt: 'Relaxation area',
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-[#C9A96E]">Galería</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Un vistazo a nuestro espacio dedicado a tu bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden bg-[#1F1F1F] cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-12 h-12 text-[#C9A96E] mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
