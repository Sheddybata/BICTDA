import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ExecutiveNote: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-bictda-dark to-bictda-medium" id="about">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-2 md:p-0 flex flex-col md:flex-row items-stretch overflow-hidden">
          {/* Left: Text */}
          <div className="flex-1 p-4 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-bictda-dark mb-4 flex items-center">
              <span className="border-l-4 border-bictda-accent mr-3 pl-2">Introduction</span>
            </h2>
            <p className="text-bictda-dark leading-relaxed mb-6">
              The Borno State Information and Communication Technology Development Agency (BICTDA) was established on March 8, 2024, in alignment with Governor Zullum's ambitious 25 years development goals. This initiative aims to significantly enhance the state's digital infrastructure and economy by focusing on three core pillars:
            </p>
            <p className="text-bictda-dark leading-relaxed mb-6">
              <b>Bridging the Digital Divide:</b> The BICTDA is committed to reducing disparities in digital access and literacy across Borno State. This involves expanding internet connectivity, increasing access to digital tools, and promoting ICT education to ensure that all citizens can participate fully in the digital age.
            </p>
            <p className="text-bictda-dark leading-relaxed mb-6">
              <b>Transforming Borno into a Regional Tech Hub:</b> The agency's vision is to position Borno as a leading technology center within the region. By fostering innovation, supporting tech startups, and creating a conducive environment for technological growth, BICTDA seeks to attract investment and drive economic development.
            </p>
            <p className="text-bictda-dark leading-relaxed mb-6">
              <b>25 Years Development Plan:</b> All efforts are aligned with the long-term vision for sustainable growth and prosperity in Borno State.
            </p>
          </div>
          {/* Right: Image and Badge */}
          <div className="relative flex-shrink-0 w-full md:w-[400px] flex items-stretch justify-center bg-bictda-light">
            <img
              src="/zullum Introduction.png"
              alt="Prof. Babagana Umara Zulum"
              className="object-cover w-full h-full border-4 border-bictda-accent rounded-none md:rounded-r-xl"
              style={{ background: '#e6f4ea', height: '100%' }}
            />
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-bictda-accent text-white rounded-lg px-4 py-2 text-center shadow-lg text-sm font-bold">
              <div className="text-2xl leading-none">25</div>
              <div className="leading-none">Years<br />Development<br />Plan</div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
              <div className="bg-white/90 rounded-lg shadow p-3 text-center">
                <span className="block font-semibold text-bictda-dark text-base md:text-lg">Prof. Engr. Babagana Umara Zulum CON mni, FNSE</span>
                <span className="block text-bictda-accent text-sm md:text-base mt-1">Executive Governor Borno state of Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveNote; 