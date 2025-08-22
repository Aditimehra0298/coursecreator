import React, { useState } from 'react';
import HeroForm from './HeroForm';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [showConsult, setShowConsult] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 z-0"></div>
    
      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-20 lg:pt-32">
        
        {/* Hero Section Content */}
        <div className="relative max-w-7xl mx-auto mt-4 sm:mt-8 lg:mt-12 pb-16 sm:pb-20 lg:pb-32 flex flex-col items-center justify-center">
          {/* Main content section */}
          <div className="w-full text-center z-20 mb-6 sm:mb-8 lg:mb-12">
            {/* Course Creator Platform Capsule */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-200">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="font-semibold text-sm">Course Creator Platform</span>
            </div>
      
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-blue-600">
               Empowering the AI Era of Assurance: Cutting-Edge Conformity Assessment Training
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              <span className="text-teal-600 font-semibold">Evoke AI by DAMNART</span> delivers multilingual, video-based learning solutions for global conformity assessment. Collaborating with top QMS experts, we combine advanced AI, modern pedagogy, and creative design to make technical standards engaging, accessible, and future-ready.
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Transforming how certification bodies train and grow—worldwide.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowConsult(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-md text-gray-700 font-semibold bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Start Your Project
              </button>
            </div>
          </div>
          
          {/* Video Container */}
          <div className="relative w-full max-w-4xl flex items-center justify-center z-10">
            {/* Video Container */}
            <div className="w-full aspect-video relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              >
                <source src="https://cdn.pixabay.com/video/2023/04/15/159053-818026314_large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay for better visibility */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved Waves Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".3" 
            fill="#94a3b8"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.46,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,65.6-49.07V0Z" 
            opacity=".6" 
            fill="#64748b"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#475569"
          ></path>
        </svg>
      </div>
      
      {/* Curved Dividing Waves - Like ContactPigeon Style */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32">
          {/* Main curved wave - more pronounced like ContactPigeon */}
          <path 
            d="M0,120 Q150,60 300,90 Q450,40 600,80 Q750,20 900,70 Q1050,50 1200,90 L1200,120 Z" 
            fill="#f8fafc"
            opacity="0.95"
          ></path>
          
          {/* Secondary wave layer */}
          <path 
            d="M0,120 Q200,80 400,100 Q600,60 800,90 Q1000,40 1200,80 L1200,120 Z" 
            fill="#e2e8f0"
            opacity="0.8"
          ></path>
          
          {/* Accent wave line */}
          <path 
            d="M0,120 Q100,70 250,90 Q400,50 550,80 Q700,30 850,70 Q1000,50 1150,80" 
            stroke="#cbd5e1" 
            strokeWidth="2" 
            fill="none"
            opacity="0.6"
          ></path>
        </svg>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowForm(false)}></div>
          <div className="relative z-10 w-full max-w-3xl mx-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-teal-600/40 to-blue-600/40 text-white">
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <button onClick={() => setShowForm(false)} className="text-white/90 hover:text-white text-2xl leading-none">×</button>
              </div>
              <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-900/30 to-teal-900/30">
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Quick Contact Modal */}
      {showConsult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowConsult(false)}></div>
          <div className="relative z-10 w-full max-w-md mx-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden text-white">
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-teal-600/40 to-blue-600/40">
                <h3 className="text-xl font-semibold">Contact Our Consultant</h3>
                <button onClick={() => setShowConsult(false)} className="text-white/90 hover:text-white text-2xl leading-none">×</button>
              </div>
              <div className="p-6 space-y-4">
                <a href="tel:+919262740889" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-3 transition-colors">
                  <PhoneCircleIcon className="w-5 h-5" />
                  <span>+Phone Number</span>
                </a>
                <a href="https://wa.me/+919262740889" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-3 transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

// Brand icons (inline SVG)
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
  >
    <path
      fill="#25D366"
      d="M12.05 0A11.82 11.82 0 0 0 .158 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.3-1.654a11.87 11.87 0 0 0 5.683 1.448h.005c6.554 0 11.889-5.335 11.892-11.893A11.82 11.82 0 0 0 12.05 0Z"
    />
    <path
      fill="#FFF"
      d="M12.051 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.197c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.894 6.993c-.003 5.45-4.437 9.884-9.887 9.884Zm5.421-7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.922-2.206-.242-.579-.487-.5-.672-.51-.173-.009-.372-.011-.571-.011s-.521.074-.793.372c-.272.297-1.041 1.016-1.041 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"
    />
  </svg>
);

const PhoneCircleIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
  >
    <circle cx="12" cy="12" r="12" fill="#0ea5e9" />
    <path
      fill="#fff"
      d="M7.5 4.75c.27-.27.7-.28.97-.02l2.02 2.02c.28.28.38.69.25 1.06l-.48 1.43c-.08.24-.02.5.16.68l2.15 2.15c.18.18.44.24.68.16l1.43-.48c.37-.12.78-.02 1.06.25l2.02 2.02c.26.26.25.68-.02.97l-1.06 1.06c-.47.47-1.16.64-1.8.44-1.63-.49-3.58-2.05-5.87-4.34-2.29-2.29-3.85-4.24-4.34-5.87-.2-.64-.03-1.33.44-1.8l1.06-1.06Z"
    />
  </svg>
);