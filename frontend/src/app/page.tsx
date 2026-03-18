import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
