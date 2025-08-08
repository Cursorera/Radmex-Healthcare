
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Shield, Clock } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-professional-white via-blue-50/30 to-green-50/20 overflow-hidden">
      {/* Floating Badge */}
      {/* <div className="absolute top-24 right-8 z-10 animate-float">
        <Badge className="bg-trust-green text-white px-4 py-2 text-sm font-semibold animate-pulse-subtle">
          WorldClass Renal Care
        </Badge>
      </div> */}

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-800 text-professional-gray leading-tight">
              Revolutionizing Renal Care with
              <span className="text-physician-blue"> Cutting-Edge Treatments</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              RADMEX HEALTHCARE PVT. LTD. is a leading healthcare company specializing in the Nephrology segment, operating at a pan-India level. We are dedicated to providing world-class quality products and exceptional services to our customers,
              supported by a team of professionals and a strong distribution network.
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
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 medical-shadow">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-physician-blue rounded-full flex items-center justify-center mx-auto">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-physician-blue rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-montserrat font-700 text-xl text-professional-gray">
                    Doctor-Patient Care
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xs mx-auto">
                    Authentic healthcare relationships built on trust and expertise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-trust-green/20 rounded-full animate-pulse-subtle"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-physician-blue/20 rounded-full animate-float"></div>
        </div>
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
