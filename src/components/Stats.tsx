import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { School, Building2, Handshake, Server } from 'lucide-react';

  const stats = [
    {
    icon: School,
    value: '27',
    label: 'Training Centres',
    color: 'text-green-600',
    bg: 'bg-green-100',
    },
    {
      icon: Building2,
    value: '2000',
    label: 'Registered Hubs',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    icon: Handshake,
    value: '15',
    label: 'Partners',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    icon: Server,
    value: '300',
    label: 'Projects',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card
                key={idx}
                className="relative flex flex-col items-center justify-center py-6 md:py-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-0"
                style={{ minHeight: 120 }}
              >
                <div className="absolute -top-5 md:-top-7 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md bg-white z-10">
                  <span className={`inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full ${stat.bg} shadow ${stat.color}`}>
                    <Icon className="w-5 h-5 md:w-7 md:h-7" />
                  </span>
                </div>
                <CardContent className="pt-8 md:pt-10 flex flex-col items-center">
                  <div className="text-2xl md:text-4xl font-bold mb-2 text-green-600">{stat.value}</div>
                  <div className="text-gray-500 text-base md:text-lg font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;