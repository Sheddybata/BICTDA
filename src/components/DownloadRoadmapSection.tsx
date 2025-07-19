import React from 'react';
import { Download } from 'lucide-react';

const DownloadRoadmapSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-bictda-light/30 to-white/80">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'repeating-linear-gradient(135deg, #e6f4ea 0 2px, transparent 2px 40px)'}} />
      {/* Watermark logo */}
      <img src="/bictda logo.jpg" alt="BICTDA Logo Watermark" className="absolute right-8 bottom-8 w-64 opacity-10 z-0 hidden md:block" />
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-bictda-dark mb-4">Download Our Strategic Roadmap & Action Plan</h2>
        <p className="text-bictda-dark/80 text-lg mb-8 max-w-2xl">
          Get a copy of BICTDA’s official Strategic Roadmap and Action Plan to learn more about our vision, goals, and the steps we’re taking to drive digital transformation in Borno State.
        </p>
        <a
          href="/BICTDA STRATEGIC ROAD MAP.pdf"
          download
          className="inline-flex items-center gap-4 px-12 py-6 bg-bictda-accent text-white font-extrabold rounded-2xl shadow-2xl text-2xl transition-transform duration-300 hover:scale-105 hover:bg-bictda-dark relative overflow-hidden group"
        >
          <Download className="w-8 h-8" />
          Download PDF
          {/* Shine effect */}
          <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine pointer-events-none" />
        </a>
      </div>
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .group:hover .animate-shine {
          animation: shine 1s linear;
        }
      `}</style>
    </section>
  );
};

export default DownloadRoadmapSection; 