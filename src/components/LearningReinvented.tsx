import React from 'react';
import { Brain, Globe, Users, Zap, Shield, Target } from 'lucide-react';

const LearningReinvented = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Advanced artificial intelligence that personalizes and adapts content for optimal learning outcomes."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Proven pedagogical methods combined with global subject matter expertise across all domains."
    },
    {
      icon: Users,
      title: "Certification Bodies",
      description: "Designed specifically for certification bodies and their clients worldwide."
    },
    {
      icon: Zap,
      title: "Interactive Experiences",
      description: "Story-driven, interactive learning that transforms complex standards into memorable experiences."
    },
    {
      icon: Shield,
      title: "Quality & Compliance",
      description: "Always aligned with the latest requirements in quality, safety, and compliance."
    },
    {
      icon: Target,
      title: "Global Impact",
      description: "Supporting competence, engagement, and harmonization across international markets."
    }
  ];

  return (
    <section id="learning-reinvented" className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Section Header */}
              <div>
                {/* AI-Powered Learning Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="font-semibold text-xs">Learning Reinvented</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-teal-600 transition-all duration-500">Learning Reinvented</span>
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At <span className="text-teal-600 font-semibold">Evoke AI</span>, we are redefining how conformity assessment knowledge is shared and retained. Our approach blends advanced artificial intelligence, proven pedagogical methods, and global subject matter expertise to produce innovative, video-based learning in any language.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We don't just translate standards—we transform them into interactive, story-driven experiences that are accessible, memorable, and effective for learners worldwide. Our solutions are designed for certification bodies and their clients, supporting competence, engagement, and harmonization across international markets.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With our AI-powered platform, learning is flexible, personalized, and always aligned with the latest requirements in quality, safety, and compliance. Experience the future of digital training—where knowledge becomes truly global, practical, and impactful.
                </p>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 animate-pulse-slow mb-4">
                      <feature.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div className="group-hover:translate-y-1 transition-transform duration-300">
                      <h3 className="text-sm font-semibold text-blue-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Animated Robot */}
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Background Animation Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-30"></div>
                  <div className="absolute top-10 right-0 w-3 h-3 bg-teal-400 rounded-full animate-ping opacity-40"></div>
                  <div className="absolute bottom-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-50"></div>
                  <div className="absolute top-32 right-10 w-3 h-3 bg-teal-500 rounded-full animate-bounce opacity-30"></div>
                </div>
                
                {/* Energy Rings */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-blue-300/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute top-1/2 left-1/2 w-80 h-80 border-2 border-teal-300/15 rounded-full animate-spin-slow-reverse"></div>
                  
                  {/* Logo Images in Rings - Moving in Circular Motion */}
                  <div className="absolute top-1/2 left-1/2 w-96 h-96">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-logo-orbit-outer">
                      <img src="/public/RTP LOGO.png" alt="RTP Logo" className="w-24 h-24 object-contain animate-pulse-slow opacity-80" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 w-80 h-80">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-logo-orbit-inner">
                      <img src="/public/l7.png" alt="DamnArt Logo" className="w-20 h-20 object-contain animate-pulse-slow opacity-80" />
                    </div>
                  </div>
                </div>
                
                {/* Animated Robot */}
                <svg className="w-full h-full robot-animation" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="robotBody" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#E2E8F0" />
                      <stop offset="50%" stopColor="#CBD5E1" />
                      <stop offset="100%" stopColor="#94A3B8" />
                    </linearGradient>
                    <linearGradient id="robotVisor" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="50%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#0369A1" />
                    </linearGradient>
                    <linearGradient id="robotGlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Robot Body */}
                  <rect x="60" y="80" width="80" height="100" rx="20" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  
                  {/* Robot Head */}
                  <circle cx="100" cy="60" r="25" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  
                  {/* Visor */}
                  <ellipse cx="100" cy="60" rx="18" ry="12" fill="url(#robotVisor)"/>
                  <ellipse cx="95" cy="55" rx="3" ry="2" fill="#FFFFFF" opacity="0.8"/>
                  
                  {/* Antenna */}
                  <line x1="100" y1="35" x2="100" y2="25" stroke="#64748B" strokeWidth="2"/>
                  <circle cx="100" cy="25" r="3" fill="url(#robotGlow)" filter="url(#glow)"/>
                  
                  {/* Arms */}
                  <rect x="40" y="90" width="25" height="60" rx="12" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  <rect x="135" y="90" width="25" height="60" rx="12" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  
                  {/* Hands */}
                  <circle cx="40" cy="150" r="8" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  <circle cx="160" cy="150" r="8" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  
                  {/* Chest Panel */}
                  <rect x="70" y="100" width="60" height="40" rx="8" fill="url(#robotGlow)" opacity="0.3"/>
                  <circle cx="85" cy="115" r="3" fill="url(#robotGlow)" filter="url(#glow)"/>
                  <circle cx="115" cy="115" r="3" fill="url(#robotGlow)" filter="url(#glow)"/>
                  <circle cx="100" cy="130" r="4" fill="url(#robotGlow)" filter="url(#glow)"/>
                  
                  {/* Legs */}
                  <rect x="75" y="180" width="20" height="30" rx="10" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  <rect x="105" y="180" width="20" height="30" rx="10" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  
                  {/* Feet */}
                  <ellipse cx="85" cy="210" rx="12" ry="6" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  <ellipse cx="115" cy="210" rx="12" ry="6" fill="url(#robotBody)" stroke="#64748B" strokeWidth="2"/>
                  
                  {/* Floating Data Particles */}
                  <circle cx="30" cy="100" r="2" fill="url(#robotGlow)" opacity="0.7" className="particle-1"/>
                  <circle cx="170" cy="120" r="2" fill="url(#robotGlow)" opacity="0.7" className="particle-2"/>
                  <circle cx="50" cy="180" r="2" fill="url(#robotGlow)" opacity="0.7" className="particle-3"/>
                  <circle cx="150" cy="200" r="2" fill="url(#robotGlow)" opacity="0.7" className="particle-4"/>
                  
                  {/* Additional Animated Elements */}
                  <circle cx="20" cy="80" r="1.5" fill="url(#robotGlow)" opacity="0.6" className="particle-5"/>
                  <circle cx="180" cy="160" r="1.5" fill="url(#robotGlow)" opacity="0.6" className="particle-6"/>
                  <circle cx="25" cy="220" r="1.5" fill="url(#robotGlow)" opacity="0.6" className="particle-7"/>
                  <circle cx="175" cy="90" r="1.5" fill="url(#robotGlow)" opacity="0.6" className="particle-8"/>
                  
                  {/* Animated Circuit Lines */}
                  <path d="M15 50 Q50 30 100 20 Q150 30 185 50" stroke="url(#robotGlow)" strokeWidth="1" fill="none" opacity="0.4" className="circuit-line-1"/>
                  <path d="M15 230 Q50 210 100 200 Q150 210 185 230" stroke="url(#robotGlow)" strokeWidth="1" fill="none" opacity="0.4" className="circuit-line-2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningReinvented;
