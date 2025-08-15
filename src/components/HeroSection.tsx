
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Shield, Clock } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-professional-white via-blue-50/30 to-green-50/20 overflow-hidden pt-24 md:pt-0">

      <div className="container bg-gradient-to-br from-professional-white to-blue-50/30 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-800 text-professional-gray leading-tight">
              Delivering Trusted Renal Therapies
              <span className="text-physician-blue"> Across India</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Radmex Healthcare is a dedicated renal and nephrology-focused healthcare company committed to improving the quality of life for patients with kidney-related conditions. With a portfolio of specialized and high-quality therapies, we partner with leading manufacturers to bring advanced treatment options to healthcare professionals and patients across India.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Award className="w-5 h-5 text-trust-green" />
              <span className="text-sm font-semibold bg-gradient-to-r from-trust-green to-emerald-600 bg-clip-text text-transparent">Award Winning</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-physician-blue" />
              <span className="text-sm font-semibold bg-gradient-to-r from-physician-blue to-blue-600 bg-clip-text text-transparent">Reliable Renal Care Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="w-5 h-5 text-emergency-red" />
              <span className="text-sm font-semibold bg-gradient-to-r from-emergency-red to-red-600 bg-clip-text text-transparent">Global-Standard Manufacturing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="medical-gradient text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 medical-shadow group"
              onClick={() => scrollToSection('#contact')}
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

          </div>

        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-0 medical-shadow overflow-hidden">
            <div className="aspect-[4/3] w-full">
              <img
                src="/kidney.jpg"
                alt="Doctor’s gloved hands holding a kidney model—Radmex Healthcare nephrology and kidney-care medicines"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-trust-green/20 rounded-full animate-pulse-subtle"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-physician-blue/20 rounded-full animate-float"></div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.25),transparent_60%)]" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-physician-blue rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-trust-green rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-physician-blue rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-trust-green rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
