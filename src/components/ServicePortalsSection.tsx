import React from 'react';
import { Download } from 'lucide-react';

const leftLinks = [
  'Scholarship',
  'BICTDA Academy',
  'IICP Registration',
  'IT Project Clearance',
  'Rule Making Process',
];

const rightLinks = [
  'OEM Licensing',
  'Domain Registration',
  'Device Type Approval',
  'Public Internet Access',
  'Data Centre Operators',
];

const ServicePortalsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-bictda-dark/90 bg-[url('/public/Bictda hero slide.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-bictda-dark/80 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-lg">Service Portals and Forms</h2>
        <div className="flex items-center mb-10">
          <span className="w-12 h-1 bg-white rounded-full mr-4"></span>
          <span className="text-2xl text-white"><Download className="inline w-8 h-8" /></span>
          <span className="w-12 h-1 bg-white rounded-full ml-4"></span>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Links */}
          <div className="flex-1 max-w-xs w-full space-y-2">
            {leftLinks.map((link, idx) => (
              <a
                key={link}
                href="#"
                className="block bg-bictda-accent/90 hover:bg-bictda-light text-white hover:text-bictda-dark font-semibold text-lg py-4 px-6 rounded-lg shadow transition-all duration-200 border border-white/10 flex items-center justify-between group"
              >
                <span>{link}</span>
                <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
          {/* Center Image with Icon */}
          <div className="flex-shrink-0 w-full max-w-md flex items-center justify-center relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/governor hero.png"
              alt="Service Portal"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-white/20 border-4 border-white flex items-center justify-center">
                <Download className="w-10 h-10 text-white" />
              </span>
            </div>
          </div>
          {/* Right Links */}
          <div className="flex-1 max-w-xs w-full space-y-2">
            {rightLinks.map((link, idx) => (
              <a
                key={link}
                href="#"
                className="block bg-bictda-accent/90 hover:bg-bictda-light text-white hover:text-bictda-dark font-semibold text-lg py-4 px-6 rounded-lg shadow transition-all duration-200 border border-white/10 flex items-center justify-between group"
              >
                <span>{link}</span>
                <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePortalsSection; 