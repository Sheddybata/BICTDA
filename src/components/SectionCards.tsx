import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Advisory and Oversights',
    image: '/advisory and oversights.png',
  },
  {
    title: 'Training and Regulations',
    image: '/training and regulations.png',
  },
  {
    title: 'Policy and Development',
    image: '/policy and Development.png',
  },
  {
    title: 'Infrastructure Development',
    image: '/infrastructure Development.png',
  },
  {
    title: 'Digital Service Promotion',
    image: '/Digital Service Promotion.png',
  },
  {
    title: 'Collaboration and Partnership',
    image: '/collaboration and partnership.png',
  },
];

const SectionCards: React.FC = () => {
  return (
    <section className="py-16" id="core-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bictda-dark mb-4">Our Core Services</h2>
          <div className="w-24 h-1 bg-bictda-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-between py-6 md:py-10 px-2 md:px-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-0 relative"
              style={{ minHeight: 240 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-44 md:h-44 bg-gray-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <img src={service.image} alt={service.title} className="w-16 h-16 md:w-28 md:h-28 object-contain" />
                </div>
                <div className="text-center">
                  <h3 className="text-base md:text-xl font-bold text-bictda-dark mb-2">{service.title}</h3>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow text-bictda-accent border border-bictda-accent">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCards; 