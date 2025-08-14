import React, { useState } from 'react';
import { 
  Award, 
  Globe, 
  Gamepad2, 
  RefreshCw, 
  Building, 
  Phone,
  Star,
  TrendingUp,
  Shield,
  Users
} from 'lucide-react';
import HeroForm from './HeroForm';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "End-to-End Compliance Support",
      description: "From awareness to expert-level readiness with comprehensive guidance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Multilingual Training Delivery", 
      description: "Learn in Greek or your preferred EU language with native instructors",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Gamepad2,
      title: "Real-World Simulation",
      description: "Based on our fictional EU financial entity case studies and scenarios",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: RefreshCw,
      title: "Standardized & Updated",
      description: "Aligned to ISO 27001, ISO 22301, ENISA, NIST, ESA guidelines",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Building,
      title: "Sector Experience",
      description: "Expertise across finance, healthcare, telecom, energy & more",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Phone,
      title: "24/7 Expert Support",
      description: "Round-the-clock assistance from our EU cybersecurity specialists",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "1,500+", label: "Expert Employees", icon: Users },
    { number: "7", label: "EU Countries", icon: Globe },
    { number: "80%", label: "Cloud Infrastructure", icon: TrendingUp },
    { number: "12+", label: "Years Experience", icon: Award }
  ];

  const testimonials = [
    {
      quote: "SecureFin transformed our compliance approach. Their DORA expertise saved us months of preparation.",
      author: "Maria Koutsou",
      position: "CISO, Athens FinTech",
      rating: 5
    },
    {
      quote: "The multilingual training was exceptional. Our team across 4 countries could learn in their native language.",
      author: "Jean Dubois", 
      position: "Compliance Lead, Paris Bank",
      rating: 5
    },
    {
      quote: "Their NIS2 simulation exercises prepared us perfectly for real-world scenarios. Highly recommended.",
      author: "Hans Mueller",
      position: "Head of IT Risk, Berlin Insurance",
      rating: 5
    }
  ];

  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image with dark blue overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/l7.png" alt="Background" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-gray-900/95"></div>
        {/* Shining sweep */}
        <div className="shine-sweep top-0 bottom-0 left-0 w-1/3 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-teal-400 animate-pulse" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Sustainable Future Trainings</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Turn compliance into your competitive advantage with our proven expertise
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-12">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-teal-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-teal-500/30">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to meet the EU's toughest cybersecurity regulations?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Partner with Sustainable Future Trainings to turn compliance into your competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setShowForm(true)} className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Contact Us
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <HeroForm onSubmitted={() => setShowForm(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUs;