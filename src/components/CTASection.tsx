
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Calendar, Heart } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="appointment" className="relative py-20 overflow-hidden">
      {/* Background with Medical Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-physician-blue via-physician-blue to-trust-green"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Medical Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse-subtle"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse-subtle"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-white rounded-full animate-pulse-subtle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Heart className="w-5 h-5 text-white animate-pulse-subtle" />
              <span className="font-semibold">Transform Your Health Journey</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-800 leading-tight">
              Ready to Experience 
              <span className="block text-yellow-300">Premium Healthcare?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards better health with our world-class medical team. 
              Your journey to wellness starts with a single click.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-physician-blue hover:bg-yellow-50 px-10 py-6 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl group"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Book Free Consultation
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-physician-blue px-10 py-6 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="mr-3 w-6 h-6" />
              Call (555) 123-CARE
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-montserrat font-800 mb-2">24/7</div>
              <div className="text-white/90">Emergency Care Available</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-montserrat font-800 mb-2">Free</div>
              <div className="text-white/90">Initial Consultation</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-montserrat font-800 mb-2">99%</div>
              <div className="text-white/90">Patient Satisfaction</div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-white/80 text-lg">
            <p>
              <strong className="text-white">Your health is our commitment.</strong> 
              {" "}Join thousands who have chosen Radmex for their healthcare journey.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 animate-float"></div>
    </section>
  );
};

export default CTASection;
