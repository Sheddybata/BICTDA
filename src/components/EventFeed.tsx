import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Digital Innovation Summit 2025',
    date: 'May 10, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'BICTDA Headquarters, Maiduguri',
    description: 'A day of innovation, networking, and collaboration as we explore the future of technology in Borno State.',
    category: 'Conference'
  },
  {
    title: 'Youth Tech Bootcamp',
    date: 'June 5, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Digital Innovation Hub',
    description: 'A comprehensive training program for young entrepreneurs and tech enthusiasts to develop digital skills.',
    category: 'Training'
  },
  {
    title: 'Smart City Stakeholder Meeting',
    date: 'July 1, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Government House, Maiduguri',
    description: 'Quarterly meeting with stakeholders to discuss progress and next steps for the Smart City initiative.',
    category: 'Meeting'
  }
];

const EventFeed: React.FC = () => {
  return (
    <div id="events">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-bictda-dark">Upcoming Events</h2>
        <Button variant="ghost" className="text-bictda-accent hover:text-bictda-dark">
          View All Events
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      <div className="space-y-6">
        {events.map((event, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-bictda-accent">{event.category}</span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {event.date}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-bictda-dark mb-2 hover:text-bictda-accent cursor-pointer">
                {event.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {event.time}
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                {event.location}
              </div>
              <p className="text-bictda-dark leading-relaxed">
                {event.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventFeed; 