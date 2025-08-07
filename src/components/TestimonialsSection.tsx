
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Martinez',
      age: 34,
      specialty: 'Cardiology',
      rating: 5,
      image: 'patient-1',
      quote: 'Dr. Johnson and the cardiology team saved my life. Their quick diagnosis and compassionate care during my heart surgery gave me a second chance. The follow-up care has been exceptional.',
      procedure: 'Cardiac Bypass Surgery',
      location: 'Miami, FL'
    },
    {
      name: 'Michael Chen',
      age: 28,
      specialty: 'Orthopedics',
      rating: 5,
      image: 'patient-2',
      quote: 'After my sports injury, I thought my athletic career was over. The orthopedic team at Radmex not only got me back on my feet but stronger than before. Their expertise is unmatched.',
      procedure: 'ACL Reconstruction',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Emily Thompson',
      age: 45,
      specialty: 'Neurology',
      rating: 5,
      image: 'patient-3',
      quote: 'The neurological care I received was outstanding. From the detailed diagnosis to the personalized treatment plan, every step was explained clearly. I feel confident in my ongoing care.',
      procedure: 'Brain Tumor Treatment',
      location: 'New York, NY'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-professional-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-800 text-professional-gray mb-4">
            Patient Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-physician-blue to-trust-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real patients who have experienced the Radmex difference. 
            Your health journey could be next.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Patient Image Side */}
                <div className="relative h-80 lg:h-auto bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    {/* Patient Avatar */}
                    <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center mx-auto">
                      <div className="w-28 h-28 bg-gradient-to-br from-physician-blue to-trust-green rounded-full flex items-center justify-center">
                        <div className="text-4xl font-montserrat font-800 text-white">
                          {currentData.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Patient Info */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-montserrat font-700 text-professional-gray">
                        {currentData.name}
                      </h3>
                      <p className="text-gray-600">
                        Age {currentData.age} • {currentData.location}
                      </p>
                      <div className="inline-block bg-physician-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {currentData.specialty} Patient
                      </div>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6">
                    <Quote className="w-12 h-12 text-white/30" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(currentData.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-professional-gray leading-relaxed mb-6 font-lato">
                    "{currentData.quote}"
                  </blockquote>

                  {/* Procedure Info */}
                  <div className="space-y-3 mb-8">
                    <div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Procedure:
                      </span>
                      <p className="text-lg font-semibold text-professional-gray">
                        {currentData.procedure}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Department:
                      </span>
                      <p className="text-lg font-semibold text-physician-blue">
                        {currentData.specialty}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevTestimonial}
                        className="w-10 h-10 p-0 rounded-full border-physician-blue text-physician-blue hover:bg-physician-blue hover:text-white"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextTestimonial}
                        className="w-10 h-10 p-0 rounded-full border-physician-blue text-physician-blue hover:bg-physician-blue hover:text-white"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial 
                              ? 'bg-physician-blue scale-125' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-montserrat font-700 text-professional-gray">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-600 text-lg">
              Join thousands of patients who have transformed their health with our expert care.
            </p>
            <Button 
              size="lg"
              className="medical-gradient text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 medical-shadow"
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
