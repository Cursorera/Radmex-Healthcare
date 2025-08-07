
import { useEffect, useState } from 'react';
import { Users, Award, Clock, Building } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    patients: 0,
    satisfaction: 0,
    emergency: 0,
    departments: 0
  });

  const targetCounts = {
    patients: 250,
    satisfaction: 99,
    emergency: 24,
    departments: 50
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targetCounts).forEach((key) => {
        const target = targetCounts[key as keyof typeof targetCounts];
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
    };

    animateCounters();
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: counts.patients,
      suffix: '+',
      label: 'Happy Patients',
      description: 'Successfully treated',
      color: 'text-trust-green',
      bgColor: 'bg-green-50'
    },
    {
      icon: Award,
      value: counts.satisfaction,
      suffix: '%',
      label: 'Patient Satisfaction',
      description: 'Rated excellent care',
      color: 'text-physician-blue',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      value: counts.emergency,
      suffix: '/7',
      label: 'Emergency Services',
      description: 'Always available',
      color: 'text-emergency-red',
      bgColor: 'bg-red-50'
    },
    {
      icon: Building,
      value: counts.departments,
      suffix: '+',
      label: 'Medical Departments',
      description: 'Specialized care units',
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
            Trusted by Thousands
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in every statistic, 
            every patient story, and every life we touch.
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
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
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
              Your Health Partner, Not Just Provider
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              These numbers represent real people, real lives, and real trust placed in our care. 
              Join thousands who have chosen Radmex Healthcare for their health journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
