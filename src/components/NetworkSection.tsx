import React, { useEffect, useRef } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Building2, Hospital, MapPin } from "lucide-react";

const hospitals = [
  { name: "Fortis Hospitals", location: "All branches including Gurugram, Delhi, Shalimar Bagh, and Faridabad", icon: Hospital },
  { name: "AIIMS", location: "All India Institute of Medical Sciences", icon: Hospital },
  { name: "Medanta – The Medicity", location: "Gurugram", icon: Hospital },
  { name: "Narayana Health", location: "Gurugram", icon: Hospital },
  { name: "National Heart Institute", location: "Delhi", icon: Hospital },
  { name: "SSB Hospital", location: "Faridabad", icon: Hospital },
  { name: "Yatharth Super Speciality Hospital", location: "Delhi NCR", icon: Hospital },
  { name: "Aakash Healthcare", location: "Delhi NCR", icon: Hospital },
  { name: "Neo Hospital", location: "Noida", icon: Hospital },
  { name: "Max Group of Hospitals", location: "Noida and other locations", icon: Hospital },
  { name: "Holy Family Hospital", location: "Delhi", icon: Hospital },
  { name: "Jindal Hospital", location: "Haryana", icon: Hospital },
  { name: "Dharamshila Narayana Hospital", location: "Delhi", icon: Hospital },
  { name: "Artemis Hospital", location: "Gurugram", icon: Hospital },
  { name: "Yupiter Hospital", location: "Delhi NCR", icon: Hospital },
  { name: "First Consultant Clinic", location: "Delhi NCR", icon: Building2 },
  { name: "Kidney Care Clinics", location: "Delhi NCR", icon: Building2 },
  { name: "Pragma Pharmacy", location: "Punjab", icon: Building2 },
  { name: "Aggarwal Medical & General Store", location: "Tughlakabad", icon: Building2 },
  { name: "SastaSundar Healthbuddy Ltd", location: "Noida", icon: Building2 },
  { name: "Other reputable pharmacies", location: "Delhi NCR", icon: Building2 },
];

const regions = [
  { name: "Delhi NCR", description: "National Capital Region", population: "30M+", icon: Building2 },
  { name: "Uttar Pradesh", description: "India's Most Populous State", population: "200M+", icon: Building2 },
  { name: "Haryana", description: "Industrial Hub", population: "25M+", icon: Building2 },
  { name: "Punjab", description: "Agricultural Center", population: "28M+", icon: Building2 },
  { name: "Uttarakhand", description: "Himalayan State", population: "10M+", icon: Building2 },
  { name: "Himachal Pradesh", description: "Mountain Paradise", population: "7M+", icon: Building2 },
  { name: "Karnataka", description: "Tech Capital", population: "61M+", icon: Building2 },
];

const NetworkSection: React.FC = () => {
  const hospitalScrollRef = useRef<HTMLDivElement>(null);
  const regionScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hospitalContainer = hospitalScrollRef.current;
    const regionContainer = regionScrollRef.current;
    
    const setupAutoScroll = (container: HTMLDivElement | null, speed: number = 1) => {
      if (!container) return;
      
      let scrollAmount = 0;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      const scroll = () => {
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
        } else {
          scrollAmount += speed;
        }
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      };
      
      const interval = setInterval(scroll, 50);
      return interval;
    };

    const hospitalInterval = setupAutoScroll(hospitalContainer, 1);
    const regionInterval = setupAutoScroll(regionContainer, 0.8);

    return () => {
      if (hospitalInterval) clearInterval(hospitalInterval);
      if (regionInterval) clearInterval(regionInterval);
    };
  }, []);

  return (
    <section aria-labelledby="network-heading" className="py-20 bg-gradient-to-br from-professional-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Hospitals & Pharmacy Network */}
          <section aria-labelledby="hospitals-heading" className="space-y-8">
            <div className="text-center">
              <div className="inline-block">
                <h2 id="hospitals-heading" className="text-4xl font-montserrat font-800 text-professional-gray mb-4">
                  Hospitals & Pharmacy Network
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-physician-blue to-trust-green mx-auto mb-6"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Radmex products are prescribed and available in the following leading hospitals and pharmacy chains
              </p>
            </div>

            <div className="relative">
              <div 
                ref={hospitalScrollRef}
                className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[...hospitals, ...hospitals].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card 
                      key={`${item.name}-${index}`} 
                      className="flex-shrink-0 w-80 bg-white hover:bg-accent/50 transition-all duration-300 border-0 medical-shadow hover:scale-105"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-physician-blue/10 to-trust-green/10 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-7 h-7 text-physician-blue" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-montserrat font-700 text-lg text-professional-gray truncate mb-1">
                              {item.name}
                            </h3>
                            <div className="flex items-start gap-1 mt-1">
                              <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Expanding Reach Across India */}
          <section aria-labelledby="reach-heading" className="space-y-8">
            <div className="text-center">
              <div className="inline-block">
                <h2 id="reach-heading" className="text-4xl font-montserrat font-800 text-professional-gray mb-4">
                  Expanding Reach Across India
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-physician-blue to-trust-green mx-auto mb-6"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Currently operational in key states across India, serving millions of patients
              </p>
            </div>

            <div className="relative">
              <div 
                ref={regionScrollRef}
                className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[...regions, ...regions].map((region, index) => {
                  const IconComponent = region.icon;
                  return (
                    <Card 
                      key={`${region.name}-${index}`} 
                      className="flex-shrink-0 w-72 bg-white hover:bg-accent/50 transition-all duration-300 border-0 medical-shadow hover:scale-105"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-trust-green/10 to-physician-blue/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-trust-green" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-montserrat font-700 text-lg text-professional-gray mb-1">
                              {region.name}
                            </h3>
                            {/* <p className="text-sm text-muted-foreground mb-1">
                              {region.description}
                            </p> */}
                            {/* <Badge variant="secondary" className="text-xs">
                              Population: {region.population}
                            </Badge> */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
