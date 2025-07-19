import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Departments', href: '#' },
    { label: 'Media', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header>
      {/* Top Bar */}
      <div className="w-full bg-bictda-dark text-white text-xs sm:text-sm py-2 px-2 sm:px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4 text-bictda-accent" />
            <span className="font-medium">info@bictda.bo.gov.ng</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1">
            <MapPin className="w-4 h-4 text-bictda-accent" />
            <span className="font-semibold">No. 3 Cresent, Shehu Sanda Kyarimi Old GRA</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <a href="https://www.facebook.com/bictda" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="w-4 h-4 hover:text-bictda-accent" /></a>
          <a href="https://x.com/bictda_borno" target="_blank" rel="noopener noreferrer" aria-label="X"><Twitter className="w-4 h-4 hover:text-bictda-accent" /></a>
          <a href="https://www.instagram.com/bictda/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-4 h-4 hover:text-bictda-accent" /></a>
          <a href="https://www.linkedin.com/company/bictda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-4 h-4 hover:text-bictda-accent" /></a>
          <span className="ml-3 bg-bictda-light text-bictda-dark font-bold px-3 py-1 rounded">Open mon-fri: 8:30am - 4:00pm</span>
        </div>
      </div>
      {/* Main Header */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-2 sm:px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/bictda logo.jpg"
              alt="BICTDA Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-[10%] object-cover bg-white"
            />
            <div>
              <h1 className="font-extrabold text-3xl sm:text-4xl text-bictda-accent tracking-tight">BICTDA</h1>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-bictda-dark hover:text-bictda-accent font-semibold text-base transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t border-bictda-light bg-white">
            <nav className="flex flex-col space-y-2 sm:space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-bictda-dark hover:text-bictda-accent font-medium transition-colors text-base py-2 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;