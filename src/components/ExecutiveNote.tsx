import React from 'react';

const ExecutiveNote: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-bictda-light/40 via-white to-bictda-accent/10 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'repeating-linear-gradient(135deg, #e6f4ea 0 2px, transparent 2px 40px)'}} />
      {/* Watermark logo */}
      <img src="/bictda logo.jpg" alt="BICTDA Logo Watermark" className="absolute left-8 bottom-8 w-64 opacity-10 z-0 hidden md:block" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch bg-white/90 rounded-2xl shadow-xl overflow-hidden">
          {/* Left: Executive Secretary Photo */}
          <div className="flex-shrink-0 w-full md:w-[400px] flex flex-col items-center justify-center bg-bictda-light/30 p-8 md:p-0 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-bictda-accent bg-white mt-4 md:mt-0 inline-block">
              <img
                src="/zullum Introduction2.png"
                alt="Governor Borno State"
                className="object-contain w-64 h-64 md:w-80 md:h-80 bg-white block"
              />
            </div>
            <div className="mt-6 text-center">
              <span className="block font-bold text-bictda-dark text-lg md:text-xl">Prof. Babagana Umara Zulum CON fnse mni</span>
              <span className="block text-bictda-accent text-sm md:text-base mt-1">Governor, Borno State of Nigeria</span>
              <span className="block text-bictda-dark/70 text-xs mt-2 italic">"Transforming Borno through digital vision"</span>
              <img src="/signature.png" alt="Signature" className="mx-auto mt-2 w-32 opacity-80" onError={e => (e.currentTarget.style.display='none')} />
            </div>
          </div>
          {/* Right: Message */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white/80 relative">
            <span className="inline-block bg-bictda-accent text-white font-bold px-4 py-2 rounded-lg mb-4 text-sm shadow">Message from the Governor</span>
            <blockquote className="text-bictda-dark text-2xl md:text-3xl font-extrabold italic mb-6 border-l-4 border-bictda-accent pl-6 leading-snug">
              "Our mission is to bridge the digital divide, empower our people, and build a vibrant ICT ecosystem that drives progress and creates a brighter future for all."
            </blockquote>
            <div className="text-bictda-dark leading-relaxed space-y-4 whitespace-pre-line text-base md:text-lg font-medium">
              The global landscape is undergoing a significant digital transformation, reshaping economies and societies. Borno State is committed to this change through its twenty-five-year development plan and the Ten-Pack Agenda, recognizing technology's vital role in creating a better future. The 2024-2027 Strategic Roadmap for Digital Transformation outlines our commitment to advance Borno into the digital age, ensuring innovation and effective governance while equipping citizens with digital skills.
              <br />
              To bridge the digital divide and ensure access to essential services, we will invest in infrastructure, deploying fiber optic networks and high-speed internet. We aim to enhance ICT regulations, adopt emerging technologies, and improve government efficiency.
              <br />
              Partnerships are crucial to our success, and we invite collaboration from the private sector, civil society, and international organizations. Our focus is on empowering our people, fostering innovation, and cultivating a vibrant ICT ecosystem that stimulates job creation and economic growth.
              <br />
              Join us on this transformative journey to build a digitally empowered Borno State, where technology drives progress and creates a brighter future for all.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveNote; 