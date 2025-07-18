import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Globe, Zap, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-cyber-neon-cyan/30 rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-cyber-neon-purple/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-cyber-neon-blue/30 rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-8 bg-cyber-neon-cyan/20 text-cyber-neon-cyan border-cyber-neon-cyan/50 hover:bg-cyber-neon-cyan/30 animate-pulse-glow">
            <Globe className="w-4 h-4 mr-2" />
            Borno State Government
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyber-neon-cyan via-cyber-neon-blue to-cyber-neon-purple bg-clip-text text-transparent animate-text-glow leading-tight">
            BICTDA
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-cyber-neon-cyan/90 font-light">
            Borno State Information and Communication Technology Development Agency
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming Borno State into a leading regional ICT hub through innovative digital solutions, 
            capacity building, and cutting-edge technological advancement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-blue text-white hover:from-cyber-neon-blue hover:to-cyber-neon-cyan font-semibold px-8 py-4 text-lg animate-pulse-glow group"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyber-neon-purple/50 text-cyber-neon-purple hover:bg-cyber-neon-purple/10 hover:border-cyber-neon-purple font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-cyber-dark-800/50 backdrop-blur-xl border-cyber-neon-cyan/20 hover:border-cyber-neon-cyan/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyber-neon-cyan mb-2">50+</div>
                <div className="text-gray-300">Digital Projects</div>
              </CardContent>
            </Card>
            <Card className="bg-cyber-dark-800/50 backdrop-blur-xl border-cyber-neon-purple/20 hover:border-cyber-neon-purple/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyber-neon-purple mb-2">1000+</div>
                <div className="text-gray-300">Trained Professionals</div>
              </CardContent>
            </Card>
            <Card className="bg-cyber-dark-800/50 backdrop-blur-xl border-cyber-neon-blue/20 hover:border-cyber-neon-blue/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyber-neon-blue mb-2">27</div>
                <div className="text-gray-300">Local Governments</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;