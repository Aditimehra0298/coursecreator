import React, { useState } from 'react';
import HeroForm from './HeroForm';

const OurClients = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="our-clients" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-200">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
              <span className="font-semibold text-xs">Trusted Partners</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Our Valued Clients</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading organizations worldwide who rely on our AI-powered learning solutions for their training and development needs.
            </p>
          </div>

          {/* Moving Logos Container */}
          <div className="w-full overflow-x-hidden group">
            <div
              className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 animate-logo-scroll-reverse"
              style={{ 
                animation: 'logo-scroll-reverse 40s linear infinite',
                minHeight: '60px',
                width: 'max-content'
              }}
            >
              {/* Complete set of logos - repeated 4 times for seamless infinite loop */}
              {Array(4).fill([ 'l3', 'l4', 'l5', 'l6', 'l7', 'l9', 'l10']).flat().map((logo, idx) => (
                <img
                  key={`logo-${idx}-${logo}`}
                  src={`/${logo}.png`}
                  alt={`Partner Logo ${logo}`}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-200 shadow-lg inline-block">
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                Join Our Growing Network of Clients
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Experience the transformative power of AI-driven learning solutions
              </p>
              <button 
                onClick={() => setShowForm(true)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-sm font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowForm(false)}></div>
          <div className="relative z-10 w-full max-w-3xl mx-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-teal-600/40 to-blue-600/40 text-white">
                <h3 className="text-xl font-semibold">Get Started Today</h3>
                <button onClick={() => setShowForm(false)} className="text-white/90 hover:text-white text-2xl leading-none">×</button>
              </div>
              <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-900/30 to-teal-900/30">
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurClients;
