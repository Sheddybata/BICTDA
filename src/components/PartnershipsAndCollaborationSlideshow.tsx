import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
// @ts-ignore
import Autoplay from 'embla-carousel-autoplay';

const partnerLogos = [
  '/cisco.png',
  '/IOM-Logo.jpg',
  '/NITDA.png',
  '/Zoa.png',
  '/Nigerian-Society-of-Engineers.png',
  '/BSAGGW.jpg',
  '/COMMIT Logo.png',
  '/CIAtech.png',
  '/iMMAPlogo2.png',
  '/co dev hub.png',
  '/NDPC.png',
  '/NIGSOMSAT-4.png',
  '/NTA.png',
  '/Multicyclic solutions logo.jpg',
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
          <CarouselContent className="flex items-center !ml-0 gap-0">
            {partnerLogos.map((logo, idx) => (
              <CarouselItem
                key={idx}
                className="!basis-auto w-full sm:w-1/3 lg:w-1/4 flex justify-center items-center px-0 !pl-0 !pr-0"
              >
                <div className="bg-white rounded-xl shadow-lg p-0 flex items-center justify-center h-36 w-36 sm:w-44 lg:w-52">
                  <img
                    src={logo}
                    alt={`Partner logo ${idx + 1}`}
                    className="object-contain h-32 w-32 sm:w-40 lg:w-48"
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