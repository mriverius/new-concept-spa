import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Galeria from '@/sections/Galeria';
import Nosotros from '@/sections/Nosotros';
import Contacto from '@/sections/Contacto';
import Blog from '@/sections/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Galeria />
      <Nosotros />
      <Contacto />
      <Blog />
      <Footer />
    </div>
  );
}
