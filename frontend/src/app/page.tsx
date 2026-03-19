import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Nosotros from '@/sections/Nosotros';
import Contacto from '@/sections/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}
