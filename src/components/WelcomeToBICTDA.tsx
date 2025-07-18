import React from 'react';

const welcomeText = `The Borno State Information and Communication Technology Development Agency (BICTDA) was established on March 8, 2024, with the mission of enhancing the digital infrastructure and economic landscape of Borno State. Recognizing the critical role that technology plays in modern society, the agency is dedicated to bridging the digital divide that has historically affected the region, ensuring that all citizens have access to the latest advancements in information and communication technology.\n\nThrough a comprehensive strategy, BICTDA aspires to transform Borno into a leading tech hub in the northeastern region of Nigeria. This transformation will involve fostering innovation, supporting local tech startups, and creating partnerships with educational institutions to promote computer literacy and digital skills among the youth.\n\nFurthermore, the agency seeks to leverage modern ICT solutions to enhance government services, making them more efficient, transparent, and accessible to the public. By implementing digital platforms for public services, BICTDA aims to improve the overall quality of life for Borno citizens, enabling them to engage more effectively with their government and access essential services from the comfort of their own homes.\n\nIn summary, BICTDA plays a pivotal role in driving the technological advancement of Borno State, with a vision of not just improving infrastructure, but also empowering the community and fostering sustainable economic growth through the strategic use of technology.`;

const WelcomeToBICTDA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-bictda-light to-bictda-medium" id="welcome">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row items-stretch overflow-hidden">
          {/* Left: Image */}
          <div className="relative flex-shrink-0 w-full md:w-[400px] flex items-stretch justify-center bg-bictda-light">
            <img
              src="/Executive secretary BICTDA.png"
              alt="Executive Secretary BICTDA"
              className="object-cover w-full h-48 md:h-full border-4 border-bictda-accent rounded-none md:rounded-l-xl"
              style={{ background: '#e6f4ea' }}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
              <div className="bg-white/90 rounded-lg shadow p-3 text-center">
                <span className="block font-semibold text-bictda-dark text-base md:text-lg">Engr. Mohammed Kabir Wanori FNSE FNIEEE</span>
                <span className="block text-bictda-accent text-sm md:text-base mt-1">Executive Secretary BICTDA</span>
              </div>
            </div>
          </div>
          {/* Right: Text */}
          <div className="flex-1 p-4 md:p-12 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block bg-bictda-accent/10 text-bictda-accent font-semibold px-4 py-2 rounded-lg mb-2 text-sm">From the Desk of the ES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-bictda-dark mb-4">Welcome to BICTDA</h2>
            </div>
            <div className="text-bictda-dark leading-relaxed space-y-4 whitespace-pre-line">
              {welcomeText.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToBICTDA; 