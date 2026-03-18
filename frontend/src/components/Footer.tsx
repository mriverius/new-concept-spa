export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] py-12 px-6 sm:px-8 lg:px-12 border-t border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3
              className="text-2xl mb-3 text-[#C9A96E]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              New Concept Spa
            </h3>
            <p className="text-gray-400 text-sm">
              Luxury Beauty & Wellness
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-3 font-medium">Location</h4>
            <p className="text-gray-400 text-sm">
              Moravia, Costa Rica
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-3 font-medium">Contact</h4>
            <p className="text-gray-400 text-sm">
              Coming Soon
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} New Concept Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
