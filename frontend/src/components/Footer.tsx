export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0B0B0B] to-[#1F1F1F] py-20 px-6 sm:px-8 lg:px-12 border-t border-[#C9A96E]/30">
      <div className="absolute inset-0 bg-gradient-to-t from-[#C9A96E]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
          <div>
            <h3
              className="text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96E] to-[#D4B77E]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              New Concept Spa
            </h3>
            <p className="text-gray-300 text-base font-light tracking-wide">
              Luxury Beauty & Wellness
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-4 font-semibold text-white">Location</h4>
            <p className="text-gray-300 text-base">
              Moravia, Costa Rica
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-4 font-semibold text-white">Contact</h4>
            <p className="text-gray-300 text-base italic">
              Coming Soon
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-[#C9A96E]/20 text-center">
          <p className="text-gray-400 text-sm tracking-wider">
            © {new Date().getFullYear()} New Concept Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
