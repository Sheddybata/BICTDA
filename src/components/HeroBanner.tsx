import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const images = [
  '/Bictda hero slide.png',
  '/Purple and Black Gradient Modern Professional Company Annual Report.png',
  '/governor hero.png',
  '/zullum-hero.jpg.jpg',
];

const HeroBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-72 sm:h-96 md:h-[500px] flex items-center overflow-hidden">
      {/* Slideshow Images */}
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt="BICTDA Hero Slide"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: 1 }}
        />
      ))}
      {/* Green Gradient Overlay at 60% opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-bictda-dark via-bictda-medium to-bictda-light" style={{ opacity: 0.6, zIndex: 2 }}></div>
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-full sm:max-w-2xl md:max-w-4xl">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Borno State Information and Communication Technology Development Agency
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-bictda-light mb-4 sm:mb-8 max-w-full sm:max-w-2xl">
              Driving digital transformation and technological advancement across Borno State
            </p>
            <Button 
              size="lg" 
              className="bg-bictda-medium text-white hover:bg-bictda-dark font-semibold px-6 sm:px-8 py-2 sm:py-3 md:px-8 md:py-3 text-base sm:text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner; 