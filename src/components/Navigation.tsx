import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Regulations', href: '#regulations' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo + Partner Logos */}
          <div className="flex items-center">
            <div className="mr-1 [filter:drop-shadow(0_0_24px_rgba(59,130,246,0.65))]">
              <img
                src="/l7.png"
                alt="Logo"
                className="w-28 h-28 object-contain [filter:drop-shadow(0_0_24px_rgba(255,255,255,1))] brightness-200 contrast-150 saturate-200"
              />
            </div>
            <div className="flex items-center gap-2 ml-1">
              <img src="/RTP%20Logo.png" alt="RTP Logo" className="shrink-0 w-24 h-24 object-contain [filter:drop-shadow(0_0_24px_rgba(255,255,255,1))] brightness-800 contrast-150 saturate-200" />
          
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-teal-400 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a href="#get-started" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;