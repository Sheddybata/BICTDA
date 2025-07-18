import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
// @ts-ignore
import Autoplay from 'embla-carousel-autoplay';

// List of partner/collaborator logo image paths (reordered as requested)
const partnerLogos = [
  '/cisco.png',
  '/IOM-Logo.jpg',
  '/NITDA.png',
  '/Zoa.png',
  '/Nigerian-Society-of-Engineers.png',
  '/BSAGGW.jpg',
];

const PartnershipsAndCollaborationSlideshow: React.FC = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-bictda-dark mb-2">Partnerships & Collaboration</h2>
          <div className="w-24 h-1 bg-bictda-accent mx-auto mb-2"></div>
          <p className="text-bictda-dark/80 text-lg font-medium">Our partners and collaborators</p>
        </div>
        <Carousel opts={{ loop: true, align: 'center' }} plugins={[autoplay.current]}>
          <CarouselContent className="flex items-center">
            {partnerLogos.map((logo, idx) => (
              <CarouselItem
                key={idx}
                className="!basis-auto w-full sm:w-1/2 lg:w-1/3 flex justify-center items-center px-0"
              >
                <div className="bg-white rounded-xl shadow-lg p-1 flex items-center justify-center h-32 w-32 sm:w-40 lg:w-40">
                  <img
                    src={logo}
                    alt={`Partner logo ${idx + 1}`}
                    className="object-contain h-24 w-24 sm:w-32 lg:w-32"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnershipsAndCollaborationSlideshow; 