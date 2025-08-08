
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const ServicesSection = () => {
  const services = [
    {
      image: '/Ferimex.png',
      title: 'Ferimex LP',
      description: 'Ferric Pyrophosphate - 30mg, Vitamin C- 50mg, Vitamin B-12 - 0.75mcg, Folic Acid - 200mcg',
      specialties: ['Iron Supplement', 'Vitamin C', 'Vitamin B-12', 'Folic Acid'],
      color: 'text-emergency-red',
      bgColor: 'bg-red-50'
    },
    {
      image: '/Renomex.png',
      title: 'Renomex LP',
      description: 'N-Acetylecystine - 150mg & Taurine - 500mg Tablet',
      specialties: ['Brain Surgery', 'Stroke Care', 'Memory Disorders'],
      color: 'text-physician-blue',
      bgColor: 'bg-blue-50'
    },
    {
      image: '/Racidosis.png',
      title: 'Racidosis - EC',
      description: 'Sodium Bicarbonate 500/1000mg Enteric Coated Tablet',
      specialties: ['Joint Replacement', 'Sports Medicine', 'Spine Care'],
      color: 'text-trust-green',
      bgColor: 'bg-green-50'
    },
    {
      image: '/pro-prex-forte.png',
      title: 'ProPreX-Forte',
      description: 'Pre & Pro Biotec-45 Billion CFU Capsule',
      specialties: ['Brain Surgery', 'Stroke Care', 'Memory Disorders'],
      color: 'text-physician-blue',
      bgColor: 'bg-blue-50'
    },
    {
      image: '/Mextrol-160.png',
      title: 'Mextrol',
      description: 'Magestrol Acetate 40/160mg Tablet',
      specialties: ['Joint Replacement', 'Sports Medicine', 'Spine Care'],
      color: 'text-trust-green',
      bgColor: 'bg-green-50'
    },
    {
      image: '/Velamex.png',
      title: 'Velamex',
      description: 'Sevelamer Carbonate 400/800mg Tablet',
      specialties: ['Brain Surgery', 'Stroke Care', 'Memory Disorders'],
      color: 'text-physician-blue',
      bgColor: 'bg-blue-50'
    },
  ];

  return (
    <section id="services" className="py-20 bg-professional-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-montserrat font-800 text-professional-gray mb-4">
              Nephrology Product Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-physician-blue to-trust-green mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From dialysis essentials to kidney-transplant support and renal nutrition, our products are rigorously quality-checked and reliably distributed across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 medical-shadow overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} product`}
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-montserrat font-700 text-professional-gray group-hover:text-physician-blue transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Specialties */}
                {/* <div className="space-y-2">
                    <h5 className="font-semibold text-professional-gray text-sm">Key Specialties:</h5>
                    <div className="flex flex-wrap gap-2">
                      {service.specialties.map((specialty) => (
                        <span 
                          key={specialty}
                          className={`text-xs px-3 py-1 rounded-full ${service.bgColor} ${service.color} font-medium`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div> */}

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full group/btn hover:bg-physician-blue hover:text-white transition-all duration-300 mt-4"
                  onClick={() => scrollToSection('#all-products')}

                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="medical-gradient text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 medical-shadow"
            onClick={() => scrollToSection('#all-products')}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
