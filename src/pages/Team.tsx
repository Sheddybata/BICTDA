import React from 'react';

const teamMembers = [
  {
    name: 'Engr. Mohammed Kabir Wanori FNSE FNIEEE',
    title: 'Executive Secretary',
    image: '/NEW wanori green.png',
    bio: 'Visionary leader driving digital transformation and ICT innovation across Borno State.'
  },
  {
    name: 'Dr. Mohammed Idris Yelwa',
    title: 'Board Chairman',
    image: '/dr. yelwa.jpg',
    bio: 'Respected board chairman who contributed knowledge and expertise, fueling agency growth.'
  },
  {
    name: 'Associate Prof. Mustapha A. Tijjani',
    title: 'Board Member',
    image: '/mustapha.jpg',
    bio: 'Specialist in ICT infrastructure and smart city initiatives.'
  },
  {
    name: 'Zannah Lawan Ajimii',
    title: 'Board Member',
    image: '/zannah.jpg',
    bio: 'Championing innovation and capacity building for the next generation.'
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-bictda-light/40 via-white to-bictda-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-bictda-dark mb-3 tracking-tight drop-shadow-sm">Our Team</h1>
          <div className="w-24 h-1 bg-bictda-accent mx-auto rounded-full"></div>
          <p className="text-lg text-bictda-dark/80 mt-4 max-w-2xl mx-auto font-medium">
            Meet the passionate professionals leading BICTDA’s mission to transform Borno State through technology and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-3 sm:p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-xl object-cover border-4 border-bictda-accent mb-3 sm:mb-4 shadow"
              />
              <h3 className="text-lg sm:text-xl font-bold text-bictda-dark mb-1">{member.name}</h3>
              <p className="text-bictda-accent font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{member.title}</p>
              <p className="text-bictda-dark/80 text-xs sm:text-sm font-medium">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 