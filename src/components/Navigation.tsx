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
    { name: 'Learning Reinvented', href: '#learning-reinvented' },
    { name: 'Services', href: '#services' },
    { name: 'Our Clients', href: '#our-clients' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/20 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
          {/* Logo + Partner Logos */}
          <div className="flex items-center">
            <div className="mr-1 [filter:drop-shadow(0_0_24px_rgba(59,130,246,0.65))]">
              <img
                src="/l7.png"
                alt="Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain [filter:drop-shadow(0_0_24px_rgba(255,255,255,1))] brightness-200 contrast-150 saturate-200"
              />
            </div>
            <div className="flex items-center gap-1 sm:gap-2 ml-1">
              <img src="/RTP LOGO.png" alt="RTP Logo" className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain [filter:drop-shadow(0_0_24px_rgba(255,255,255,1))] brightness-800 contrast-150 saturate-200" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm xl:text-base font-semibold transition-colors hover:text-teal-600 whitespace-nowrap ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-black'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <a href="#get-started" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-lg transition-all duration-200 hover:bg-gray-100/80 ${
                isScrolled || isMobileMenuOpen ? 'text-gray-800 bg-white/50' : 'text-black bg-white/20'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-xl">
            <div className="px-4 pt-6 pb-8 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-4 text-gray-800 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-200 border border-transparent hover:border-blue-200"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Smooth scroll to section
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#get-started" 
                  className="block w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;