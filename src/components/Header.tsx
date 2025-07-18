import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Our Team', href: '/team' },
    { label: 'Organogram', href: '/organogram' },
    { label: 'Latest News', href: '/latest-news' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-bictda-light">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/bictda logo.jpg"
              alt="BICTDA Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-[10%] object-cover border border-bictda-accent shadow"
            />
            <div>
              <h1 className="font-bold text-lg sm:text-2xl text-bictda-dark">BICTDA</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-bictda-dark hover:text-bictda-accent font-medium transition-colors text-sm sm:text-base"
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
          <div className="md:hidden py-2 border-t border-bictda-light">
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