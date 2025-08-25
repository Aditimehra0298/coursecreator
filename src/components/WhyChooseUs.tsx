import React, { useState } from 'react';
import { 
  Award, 
  Globe, 
  RefreshCw,
  Building,
  Phone,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import HeroForm from './HeroForm';

const WhyChooseUs = () => {


  const stats = [
    { number: "1,500+", label: "Expert Employees", icon: Users },
    { number: "4o+", label: "Global Presence", icon: Globe },
    { number: "80%", label: "Cloud Infrastructure", icon: TrendingUp },
    { number: "12+", label: "Years Experience", icon: Award }
  ];

  const testimonials = [
    {
      quote: "Evoke AI revolutionized our course creation process. Their AI-powered platform reduced our development time by 60% while maintaining quality.",
      author: "Sarah Chen",
      position: "Learning Director, TechEdu Solutions",
      rating: 5
    },
    {
      quote: "The chatbot integration transformed our customer support. 24/7 assistance with 95% accuracy - our clients love it!",
      author: "Michael Rodriguez",
      position: "CTO, Digital Services Inc",
      rating: 5
    },
    {
      quote: "DAMNART's AI services helped us scale our training programs globally. The multilingual support is game-changing.",
      author: "Emma Thompson",
      position: "VP Operations, Global Learning Corp",
      rating: 5
    },
    {
      quote: "Their AI-driven content generation is incredible. We can now create personalized courses for each learner automatically.",
      author: "David Kim",
      position: "Head of Innovation, EduTech Pro",
      rating: 5
    },
    {
      quote: "The chatbot handles complex queries better than our human agents. It's like having an expert available 24/7.",
      author: "Lisa Anderson",
      position: "Customer Success Manager, Smart Solutions",
      rating: 5
    },
    {
      quote: "Evoke AI's platform is the future of education. Adaptive learning paths and real-time content updates are revolutionary.",
      author: "James Wilson",
      position: "CEO, Future Learning Institute",
      rating: 5
    }
  ];

  const [showForm, setShowForm] = useState(false);

  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* AI-Powered Solutions Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-200">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="font-semibold text-xs">AI-Powered Training Courses</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Evoke AI, DAMNART</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transform your Course Training operations with our innovative AI-powered solutions that drive efficiency, growth, and competitive advantage
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          

          
          {/* Why Choose Evoke AI, DAMNART? */}
          <div className="mb-16">
            <div className="text-center mb-12">
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  Cost Efficiency
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduce operational expenses by up to 70% without compromising on quality.
                </p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  Scalability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Quickly adapt to market demands with our flexible workforce solutions.
                </p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  Access to Global Talent
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tap into a diverse pool of skilled professionals across various domains.
                </p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  Focus on Core Business
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Free up your valuable time and resources to concentrate on strategic growth.
                </p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  Enhanced Productivity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage our 24/7 operational capability to boost your business efficiency.
                </p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  Innovation & Future-Readiness
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay ahead of the curve with our AI-driven solutions, ensuring your organization remains competitive in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-12">What Our Clients Say</h3>
            {/* Moving testimonials container */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left">
                {/* First set of testimonials */}
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-80 mx-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-200 shadow-lg">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="text-blue-800 font-semibold">{testimonial.author}</p>
                      <p className="text-teal-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {testimonials.map((testimonial, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 mx-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-200 shadow-lg">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="text-blue-800 font-semibold">{testimonial.author}</p>
                      <p className="text-teal-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-teal-500/30">
              <h3 className="text-3xl font-bold text-black mb-4">
              Ready to transform your conformity assessment and compliance training with AI-powered Training design technology?
              </h3>
              <p className="text-lg text-black-300 mb-8">
              Partner with Evoke AI, DAMNART to unlock your course training design potential.
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