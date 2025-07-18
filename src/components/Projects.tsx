import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Reporting Management System',
    description: 'A reporting management platform that connects citizens with the government, allowing users to report complaints. The responsible government body reviews these reports and advises the government accordingly.',
    image: '/RMS.png',
    href: '#reporting-management'
  },
  {
    title: 'Digital Innovation Hub',
    description: 'A hub for fostering and promoting technological innovation, supporting local tech entrepreneurs, and facilitating the Student Industrial Work Experience Scheme from various educational institutions.',
    image: '/Digital innovation hub.png',
    href: '#innovation-hub'
  },
  {
    title: 'Learning Management System',
    description: 'Our learning management system is an open library of valuable tools that works with desktops, laptops, and mobile devices, providing assessments and downloadable/verified certificates. Think of our LMS as Encarta.',
    image: '/LMS.png',
    href: '#learning-management'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-bictda-dark mb-2 tracking-tight">Major Projects & Initiatives</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-bictda-accent via-bictda-medium to-bictda-light mx-auto rounded-full mb-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white/60 backdrop-blur-xl border border-bictda-accent/10 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group overflow-visible"
              style={{ minHeight: 220 }}
            >
              {/* Overlapping square image */}
              <div className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 rounded-[10%] bg-gradient-to-br from-bictda-accent/20 to-bictda-light flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                <img src={project.image} alt={project.title} className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-[10%]" />
              </div>
              <div className="pt-16 pb-6 px-6 flex flex-col h-full">
                <h3 className="text-xl font-extrabold text-bictda-dark mb-2 text-center group-hover:text-bictda-accent transition-colors duration-300">{project.title}</h3>
                <p className="text-bictda-dark/80 mb-6 leading-relaxed text-center text-base font-medium flex-1">{project.description}</p>
                <div className="flex justify-center mt-auto">
                  <a href={project.href} className="inline-flex items-center text-bictda-accent hover:text-bictda-dark font-semibold transition-colors text-base group">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;