import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Globe, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bictda-dark text-white">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/bictda logo.jpg"
                alt="BICTDA Logo"
                className="w-14 h-14 rounded-[10%] object-cover border border-bictda-accent shadow"
              />
              <div>
                <h3 className="font-bold text-xl">BICTDA</h3>
              </div>
            </div>
            <p className="text-bictda-light text-sm leading-relaxed">
              Driving digital transformation and technological advancement across Borno State through innovative ICT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-bictda-accent">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Programs', 'Projects', 'News', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-bictda-light hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-bictda-accent">Services</h4>
            <ul className="space-y-2">
              {['Digital Infrastructure', 'Capacity Building', 'E-Government', 'Cybersecurity', 'Innovation Hub', 'Smart City Initiatives'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-bictda-light hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-bictda-accent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-bictda-accent" />
                <span className="text-bictda-light text-sm">No. 3 Cresent, Shehu Sanda Kyarimi Old GRA, Maiduguri, Borno State</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-bictda-accent" />
                <span className="text-bictda-light text-sm">08067261763</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-bictda-accent" />
                <span className="text-bictda-light text-sm">Info@bictda.bo.gov.ng</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-bictda-accent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-bictda-light text-sm">
            © 2025 BICTDA - Borno State Government. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/bictda"
              className="backdrop-blur-xl bg-white/10 border border-bictda-accent/20 rounded-full shadow-lg flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_4px_rgba(34,197,94,0.25)] group"
              style={{ WebkitBackdropFilter: 'blur(8px)' }}
              aria-label="Facebook"
              target="_blank" rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/bictda/#"
              className="backdrop-blur-xl bg-white/10 border border-bictda-accent/20 rounded-full shadow-lg flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_4px_rgba(34,197,94,0.25)] group"
              style={{ WebkitBackdropFilter: 'blur(8px)' }}
              aria-label="Instagram"
              target="_blank" rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://x.com/bictda_borno"
              className="backdrop-blur-xl bg-white/10 border border-bictda-accent/20 rounded-full shadow-lg flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_4px_rgba(34,197,94,0.25)] group"
              style={{ WebkitBackdropFilter: 'blur(8px)' }}
              aria-label="X"
              target="_blank" rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/bictda"
              className="backdrop-blur-xl bg-white/10 border border-bictda-accent/20 rounded-full shadow-lg flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_4px_rgba(34,197,94,0.25)] group"
              style={{ WebkitBackdropFilter: 'blur(8px)' }}
              aria-label="LinkedIn"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;