import { useEffect, useRef, useState } from 'react';

const EventGallery = () => {
  const [offsetPx, setOffsetPx] = useState(0);
  const offsetRef = useRef(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

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
    {
      id: 10,
      image: "/1.JPG"
    },
    {
      id: 11,
      image: "/2.JPG"
    },
    {
      id: 12,
      image: "/3.JPG"
    },
    {
      id: 13,
      image: "/4.JPG"
    },
    {
      id: 14,
      image: "/5.JPG"
    },
    {
      id: 15,
      image: "/7.JPG"
    },
    {
      id: 16,
      image: "/10.JPG"
    },
    {
      id: 17,
      image: "/11.JPG"
    },
    {
      id: 18,
      image: "/13.JPG"
    },
    {
      id: 19,
      image: "/14.JPG"
    },
    {
      id: 20,
      image: "/15.JPG"
    },
    {
      id: 21,
      image: "/16.JPG"
    },
    {
      id: 22,
      image: "/17.png"
    },
    {
      id: 23,
      image: "/18.JPG"
    },
    {
      id: 24,
      image: "/19.JPG"
    },
    {
      id: 25,
      image: "/21.jpg"
    },
    {
      id: 26,
      image: "/22.jpg"
    },
    {
      id: 27,
      image: "/25.jpg"
    },
    {
      id: 28,
      image: "/26.jpg"
    },
    {
      id: 29,
      image: "/27.jpg"
    },
    {
      id: 30,
      image: "/28.jpg"
    },
    {
      id: 31,
      image: "/29.jpg"
    },
    {
      id: 32,
      image: "/30.jpg"
    }
  ];

  // Smooth continuous auto-scroll using requestAnimationFrame
  useEffect(() => {
    const speedPxPerSecond = 40; // adjust for desired speed

    const step = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const deltaMs = timestamp - (lastTimeRef.current ?? timestamp);
      lastTimeRef.current = timestamp;

      const trackEl = trackRef.current;
      if (trackEl) {
        const halfWidth = trackEl.scrollWidth / 2; // because we duplicate items
        let next = offsetRef.current + (speedPxPerSecond * deltaMs) / 1000;
        if (next >= halfWidth) {
          next = next - halfWidth; // seamless loop
        }
        offsetRef.current = next;
        setOffsetPx(next);
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, []);

  const shiftManually = (direction: 1 | -1) => {
    const trackEl = trackRef.current;
    if (!trackEl) return;
    // Attempt to compute one-card step including gap using positions of first two children
    const first = trackEl.children[0] as HTMLElement | undefined;
    const second = trackEl.children[1] as HTMLElement | undefined;
    let step = 300; // fallback
    if (first && second) {
      const firstRect = first.getBoundingClientRect();
      const secondRect = second.getBoundingClientRect();
      step = Math.abs(secondRect.left - firstRect.left);
    }
    const halfWidth = trackEl.scrollWidth / 2;
    let next = offsetRef.current + direction * step;
    if (next < 0) {
      next = halfWidth + next; // wrap backwards
    }
    if (next >= halfWidth) {
      next = next - halfWidth;
    }
    offsetRef.current = next;
    setOffsetPx(next);
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
            onClick={() => shiftManually(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110"
            aria-label="Previous images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => shiftManually(1)}
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
              ref={trackRef}
              className="flex gap-6 will-change-transform"
              style={{ transform: `translateX(-${offsetPx}px)` }}
            >
              {/* Duplicate events for infinite scroll effect */}
              {[...events, ...events].map((event, index) => (
                <div
                  key={`${event.id}-${index < events.length ? 'a' : 'b'}`}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    {/* Event Image */}
                    <div className="relative h-72 overflow-hidden">
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