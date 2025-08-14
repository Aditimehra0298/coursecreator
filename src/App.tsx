import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SampleVideos from './components/SampleVideos';
import Services from './components/Services';
import Regulations from './components/Regulations';
import Training from './components/Training';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ELearning from './components/ELearning';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SampleVideos />
      <About />
      <ELearning />
      <Services />
      <Regulations />
      <Training />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;