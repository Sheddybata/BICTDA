import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Users, Globe, Shield, Zap, Building, Cpu, Database, Network, Code, Smartphone, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: "Digital Infrastructure",
      description: "Building robust ICT infrastructure to support government operations and citizen services with cutting-edge technology.",
      badge: "Core Service",
      color: "cyan"
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Comprehensive training programs to enhance digital literacy and technical skills across the state.",
      badge: "Training",
      color: "purple"
    },
    {
      icon: Globe,
      title: "E-Government Solutions",
      description: "Implementing advanced digital platforms for efficient government service delivery and citizen engagement.",
      badge: "Digital Gov",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protecting government systems and citizen data through advanced security measures and threat prevention.",
      badge: "Security",
      color: "green"
    },
    {
      icon: Zap,
      title: "Innovation Hub",
      description: "Fostering technological innovation and supporting local tech entrepreneurs with state-of-the-art facilities.",
      badge: "Innovation",
      color: "pink"
    },
    {
      icon: Building,
      title: "Smart City Initiatives",
      description: "Developing intelligent city solutions to improve urban planning and service delivery across Borno State.",
      badge: "Smart City",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "from-cyber-neon-cyan to-cyber-neon-blue",
      purple: "from-cyber-neon-purple to-cyber-neon-pink",
      blue: "from-cyber-neon-blue to-cyber-neon-cyan",
      green: "from-cyber-neon-green to-cyber-neon-cyan",
      pink: "from-cyber-neon-pink to-cyber-neon-purple",
      indigo: "from-cyber-indigo to-cyber-neon-blue"
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getBorderColor = (color: string) => {
    const colors = {
      cyan: "border-cyber-neon-cyan/20 hover:border-cyber-neon-cyan/50",
      purple: "border-cyber-neon-purple/20 hover:border-cyber-neon-purple/50",
      blue: "border-cyber-neon-blue/20 hover:border-cyber-neon-blue/50",
      green: "border-cyber-neon-green/20 hover:border-cyber-neon-green/50",
      pink: "border-cyber-neon-pink/20 hover:border-cyber-neon-pink/50",
      indigo: "border-cyber-indigo/20 hover:border-cyber-indigo/50"
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark-800/50 to-cyber-dark-900/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-cyber-neon-cyan/20 text-cyber-neon-cyan border-cyber-neon-cyan/50 animate-pulse-glow">
            Our Expertise
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive ICT solutions driving digital transformation across Borno State with cutting-edge technology and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`bg-cyber-dark-800/30 backdrop-blur-xl ${getBorderColor(service.color)} transition-all duration-500 hover:scale-105 hover:shadow-2xl group`}
              >
                <CardHeader className="text-center pb-6">
                  <div className={`mx-auto mb-6 p-4 bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl w-20 h-20 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <Badge className={`mb-4 bg-cyber-neon-${service.color}/20 text-cyber-neon-${service.color} border-cyber-neon-${service.color}/50`}>
                    {service.badge}
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-cyber-neon-cyan transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-cyber-neon-cyan/10 to-cyber-neon-purple/10 backdrop-blur-xl border-cyber-neon-cyan/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform?</h3>
              <p className="text-gray-300 mb-6">
                Join us in building a digital future for Borno State. Let's create innovative solutions together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-blue text-white px-8 py-3 rounded-lg font-semibold hover:from-cyber-neon-blue hover:to-cyber-neon-cyan transition-all duration-300 animate-pulse-glow">
                  Get Started
                </button>
                <button className="border border-cyber-neon-purple/50 text-cyber-neon-purple px-8 py-3 rounded-lg font-semibold hover:bg-cyber-neon-purple/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;