
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HealthCare Areas', href: '#home' },
    { name: 'Products', href: '#services' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-physician-blue text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Inder Enclave, Paschim Vihar, New Delhi</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>011-41092728 | +91-9312536936</span>
            </div>
            {/* <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>24/7 Emergency Services</span>
            </div> */}
          </div>
          {/* <div className="hidden sm:block">
            <span className="bg-trust-green px-3 py-1 rounded-full text-xs font-semibold animate-pulse-subtle">
              30% Off for New Members!
            </span>
          </div> */}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "backdrop-blur-medical shadow-lg" 
          : "bg-white/95"
      )}>
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Radmex Care Logo" 
                className="h-20 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-professional-gray hover:text-physician-blue transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="medical-gradient text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 medical-shadow"
                onClick={() => scrollToSection('#contact')}
              >
               Know More
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-professional-gray hover:text-physician-blue hover:bg-professional-white rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  className="w-full medical-gradient text-white rounded-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  Know More
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
