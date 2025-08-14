import { useState, useEffect } from 'react';
import HeroForm from './HeroForm';
// Hero section
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [showConsult, setShowConsult] = useState(false);
  
  // Lock scroll and close on Escape when modal is open
  useEffect(() => {
    if (!(showForm || showConsult)) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setShowForm(false); setShowConsult(false); }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showForm, showConsult]);

  // Open the form when '#get-started' is present (e.g., from header button)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#get-started') {
        setShowForm(true);
        const el = document.getElementById('hero');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.pixabay.com/video/2024/12/17/247123_large.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-teal-900/90 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-pulse">
            <div className="[filter:drop-shadow(0_0_28px_rgba(59,130,246,0.7))]">
              <img
                src="/l7.png"
                alt="Logo"
                className="w-28 h-28 object-contain [filter:drop-shadow(0_0_12px_rgba(255,255,255,0.9))] brightness-110"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Sustainable Future Trainings
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-light">
              Your Trusted Partner in EU Cybersecurity & Digital Trust
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering organizations across Greece and the EU to meet the highest standards in cybersecurity, 
            digital resilience, and EU regulatory compliance.
          </p>
          
          <p className="text-md sm:text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            We combine innovative financial solutions, RegTech platforms, and specialized training to help you 
            comply with the Digital Operational Resilience Act (DORA) and the Network & Information Security 
            Directive 2 (NIS2) — ensuring your business stays secure, compliant, and future-ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => setShowConsult(true)} className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-xl flex items-center justify-center">
              <Calendar className="mr-2 w-5 h-5" />
              Book a Free Consultation
            </button>
          </div>
          {/* Modal mounted at the end of the section */}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
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
                <a href="tel:+918894915917" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-3 transition-colors">
                  <PhoneCircleIcon className="w-5 h-5" />
                  <span>+Phone Number</span>
                </a>
                <a href="https://wa.me/+918894915917" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-3 transition-colors">
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