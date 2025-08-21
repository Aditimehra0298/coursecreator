import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SampleVideos from './components/SampleVideos';
import About from './components/About';
import LearningReinvented from './components/LearningReinvented';

import Services from './components/Services';
import OurClients from './components/OurClients';
import WhyChooseUs from './components/WhyChooseUs';

import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Handle hash-based navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#get-started') {
        // This will be handled by the Hero component
        window.location.hash = '#hero';
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <SampleVideos />
      <About />
      <LearningReinvented />
      <Services />
      <OurClients />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;