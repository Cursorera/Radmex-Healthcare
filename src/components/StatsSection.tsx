import { useEffect, useState } from 'react';
import { Users, Award, Clock, Building } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    patients: 0,      // -> Hospital & Dialysis Partners
    satisfaction: 0,  // -> On-Time Delivery
    emergency: 0,     // -> 24/7 Support
    departments: 0    // -> Cities Served
  });

  // Adjust numbers as your real stats evolve
  const targetCounts = {
    patients: 250,     // partners
    satisfaction: 99,  // on-time delivery rate
    emergency: 24,     // 24/7
    departments: 50    // cities served
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    const el = document.getElementById('stats-section');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    (Object.keys(targetCounts) as (keyof typeof targetCounts)[]).forEach((key) => {
      const target = targetCounts[key];
      let current = 0;
      const increment = target / steps;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(counter);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepDuration);
    });
  }, [isVisible]);

  const stats = [
    {
      icon: Building,
      value: counts.patients,
      suffix: '+',
      label: 'Hospital & Dialysis Partners',
      description: 'Pan-India provider network',
      color: 'text-trust-green',
      bgColor: 'bg-green-50'
    },
    {
      icon: Award,
      value: counts.satisfaction,
      suffix: '%',
      label: 'On-Time Delivery',
      description: 'Last-mile reliability',
      color: 'text-physician-blue',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      value: counts.emergency,
      suffix: '/7',
      label: 'Clinical Support',
      description: 'Dialysis-critical assistance',
      color: 'text-emergency-red',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      value: counts.departments,
      suffix: '+',
      label: 'Cities Served',
      description: 'Growing national presence',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-physician-blue to-trust-green">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-800 text-white mb-6">
            Nephrology by the Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Consistent supply, quality-assured manufacturing, and nationwide reach—measurable impact for kidney care across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 medical-shadow group"
                style={{ animationDelay: `${index * 0.2}s` }}
                aria-label={stat.label}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} aria-hidden="true" />
                </div>

                {/* Counter */}
                <div className="space-y-2">
                  <div className="text-4xl font-montserrat font-800 text-professional-gray">
                    {stat.value}
                    <span className={`${stat.color} text-3xl`}>{stat.suffix}</span>
                  </div>
                  <h3 className="text-lg font-montserrat font-600 text-professional-gray">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-montserrat font-700 text-white mb-4">
              Partnering for Better Kidney Care
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Behind every metric are patients relying on uninterrupted renal therapy. Join healthcare providers who trust Radmex Healthcare for dependable nephrology supply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
