import { useEffect, useState } from 'react';

const EventGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      image: "/event-12.jpeg"
    },
    {
      id: 2,
      image: "/event-1.png"
    },
    {
      id: 3,
      image: "/events-2.jpeg"
    },
    {
      id: 4,
      image: "/event08.jpeg"
    },
    {
      id: 5,
      image: "/event09.jpeg"
    },
    {
      id: 6,
      image: "/event05.jpeg"
    },
    {
      id: 7,
      image: "/event06.jpeg"
    },
    {
      id: 8,
      image: "/event07.jpeg"
    },
    {
      id: 9,
      image: "/events-1.jpeg"
    },
  ];

  const cardsPerView = 4;
  
  // Infinite auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Create infinite loop effect
        const nextIndex = prevIndex + 1;
        return nextIndex;
      });
    }, 50000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Event Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our visual showcase of memorable moments and achievements.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110"
            aria-label="Previous images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110"
            aria-label="Next images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-1000 ease-linear"
              style={{ 
                transform: `translateX(-${(currentIndex % events.length) * (100 / cardsPerView + 1.5)}%)`,
                width: `${events.length * 2 * (100 / cardsPerView + 1.5)}%`
              }}
            >
              {/* Duplicate events for infinite scroll effect */}
              {[...events, ...events].map((event, index) => (
                <div
                  key={`${event.id}-${Math.floor(index / events.length)}`}
                  className="flex-shrink-0 w-72"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    {/* Event Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.image}
                        alt={`Event ${event.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventGallery;