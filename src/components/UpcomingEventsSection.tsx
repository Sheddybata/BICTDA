import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    type: 'Program',
    title: 'Certiport Cyber Security training',
    time: '9:00 AM - 5:00 PM',
    location: 'Hybrid: Online&Offline',
    date: 'August, 2025',
    description: `BICTDA is pleased to announce a sponsored Cyber Security training program for qualified and passionate tech enthusiasts in Borno State. This intensive training will prepare participants for the globally recognized Certiport "IT Specialist - Cybersecurity" certification.\nThis program is highly competitive and aims to build a new generation of cybersecurity professionals in the state. Please fill out this form accurately and completely.`,
  },
  {
    type: 'Seminar',
    title: 'Mastering the Modern Muse',
    time: '10:00 AM',
    location: 'University of Maiduguri.',
    date: 'September, 2025',
    description: `BICTDA will host an academic seminar for lecturers and postgraduate students focused on the ethical application of artificial intelligence (AI) in education. The seminar will cover readily available AI tools and their practical uses. Additionally, we will introduce micro-credentials.`,
  },
  {
    type: 'Workshop',
    title: 'Workshop for GSM Marketers & digital literacy instructors',
    time: '10:00 AM',
    location: 'BICTDA Headquarters',
    date: 'September, 2025',
    description: `BICTDA will launch a workshop for GSM marketers and digital literacy instructors on new and emerging tools and solutions in the modern tech world, including AI, digital marketing, blockchain technology, and more.`,
  },
];

const UpcomingEventsSection: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-bictda-dark">Upcoming Events</h2>
          <a href="/events" className="text-bictda-accent font-bold flex items-center gap-1 hover:underline">View All Events <span>&rarr;</span></a>
        </div>
        {upcomingEvents.map((event, idx) => (
          <div key={idx} className="bg-white border border-bictda-accent/10 rounded-2xl p-6 mb-6 shadow flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <Badge className="bg-bictda-accent/10 text-bictda-accent font-bold px-3 py-1 rounded-full text-xs mb-2">{event.type}</Badge>
              <h3 className="text-xl md:text-2xl font-bold text-bictda-dark mb-2">{event.title}</h3>
              <div className="flex items-center text-bictda-dark/70 text-sm mb-2">
                <Clock className="w-4 h-4 mr-1" />{event.time}
                <span className="mx-2">|</span>
                <MapPin className="w-4 h-4 mr-1" />{event.location}
              </div>
              <div className="text-bictda-dark/90 text-base font-medium whitespace-pre-line">{event.description}</div>
            </div>
            <div className="flex-shrink-0 flex items-center md:items-start">
              <span className="flex items-center text-bictda-dark/70 text-sm"><Calendar className="w-5 h-5 mr-1" />{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEventsSection; 