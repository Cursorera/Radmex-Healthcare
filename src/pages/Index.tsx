
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import EventGallery from '@/components/EventGallery';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
        <EventGallery />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
