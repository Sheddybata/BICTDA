import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, Globe, Shield, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark-800/50 to-cyber-dark-900/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 mt-2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-bictda-dark tracking-tight drop-shadow-sm">Contact Us</h2>
          <p className="text-lg md:text-xl text-bictda-dark/80 max-w-2xl mx-auto leading-relaxed font-semibold">
            Ready to transform your digital experience? Contact us today and join the digital revolution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-bictda-light/30 to-white/80 backdrop-blur-xl border-bictda-accent/30 flex flex-col justify-center items-center shadow-xl p-3 sm:p-6">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-extrabold text-bictda-dark flex items-center">
                <Send className="w-6 h-6 mr-2 text-bictda-accent" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white border-bictda-accent/40 text-bictda-dark placeholder-bictda-dark/60 focus:border-bictda-accent focus:ring-bictda-accent/20 font-bold text-base sm:text-lg" 
                />
                <Input 
                  placeholder="Your Email" 
                  type="email" 
                  className="bg-white border-bictda-accent/40 text-bictda-dark placeholder-bictda-dark/60 focus:border-bictda-accent focus:ring-bictda-accent/20 font-bold text-base sm:text-lg" 
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-white border-bictda-accent/40 text-bictda-dark placeholder-bictda-dark/60 focus:border-bictda-accent focus:ring-bictda-accent/20 font-bold text-base sm:text-lg" 
              />
              <Textarea 
                placeholder="Your Message" 
                rows={6} 
                className="bg-white border-bictda-accent/40 text-bictda-dark placeholder-bictda-dark/60 focus:border-bictda-accent focus:ring-bictda-accent/20 font-bold text-base sm:text-lg" 
              />
              <Button className="w-full bg-bictda-accent hover:bg-bictda-dark text-white py-2 sm:py-3 font-bold text-base sm:text-lg shadow-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Newsletter Signup Modern Section */}
          <Card className="bg-gradient-to-br from-bictda-light/30 to-white/80 backdrop-blur-xl border-bictda-accent/30 flex flex-col justify-center items-center shadow-xl p-3 sm:p-10">
            <CardContent className="p-4 sm:p-10 flex flex-col items-center">
              <div className="mb-4 sm:mb-6 p-2 sm:p-4 bg-bictda-accent/20 rounded-2xl w-14 sm:w-20 h-14 sm:h-20 flex items-center justify-center shadow-lg">
                <Mail className="w-8 sm:w-10 h-8 sm:h-10 text-bictda-accent" />
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-bictda-dark mb-2 sm:mb-4 tracking-tight text-center drop-shadow-lg">Subscribe to our Newsletter</h3>
              <p className="text-base sm:text-lg text-bictda-dark font-semibold mb-2 sm:mb-6 text-center max-w-xs">
                Get the latest updates on digital transformation, projects, and tech innovation in Borno State.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-md">
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  className="bg-white border-bictda-accent/40 text-bictda-dark placeholder-bictda-dark/60 focus:border-bictda-accent focus:ring-bictda-accent/20 font-bold text-base sm:text-lg flex-1 shadow-md" 
                />
                <Button className="bg-bictda-accent hover:bg-bictda-dark text-white px-4 sm:px-8 font-bold text-base sm:text-lg shadow-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-bictda-dark/70 mt-2 sm:mt-4 font-semibold">We respect your privacy. Unsubscribe at any time.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;