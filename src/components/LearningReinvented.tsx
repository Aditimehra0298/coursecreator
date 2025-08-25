import React from 'react';
import { Brain, Globe, Users, Zap, Shield, Target } from 'lucide-react';

const LearningReinvented = () => {

  return (
    <section id="learning-reinvented" className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                {/* AI-Powered Learning Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="font-semibold text-xs">Learning Reinvented</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-4">
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Evoke AI – Reinventing Learning for the Future</span>
                </h2>
                

                
                <h3 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-6">
                  Revolutionizing Conformity Assessment Training
                </h3>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Redefining Knowledge */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-teal-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Icon Container with Animation */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Brain className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">Redefining Knowledge</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                    Redefining how conformity assessment knowledge is shared and retained.
                  </p>
                  <p className="text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                    Blending advanced AI, proven pedagogy, and global expertise.
                  </p>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* From Standards to Experiences */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-teal-50/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-teal-200/50 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Icon Container with Animation */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                    <Zap className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">From Standards to Experiences</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                    Not just translations, but interactive, story-driven learning.
                  </p>
                  <p className="text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                    Designed to make standards accessible, memorable, and effective.
                  </p>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-6 right-4 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.7s' }}></div>
                </div>
                
                {/* For Certification Bodies & Clients */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Icon Container with Animation */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Users className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">For Certification Bodies & Clients</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                    Solutions specifically tailored for certification bodies and their stakeholders.
                  </p>
                  <p className="text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                    Supporting competence, engagement, and harmonization across global markets.
                  </p>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 left-6 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute bottom-6 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '0.8s' }}></div>
                </div>

                {/* Flexible & Personalized */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-green-50/80 to-teal-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-200/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Icon Container with Animation */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                    <Target className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">Flexible & Personalized</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                    AI-powered platform delivering personalized, adaptive learning experiences.
                  </p>
                  <p className="text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                    Always aligned with latest compliance requirements in quality, safety, and standards.
                  </p>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.1s' }}></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                </div>

                {/* Impactful Global Reach */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Icon Container with Animation */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Globe className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">Impactful Global Reach</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                    Scalable learning model that ensures consistency worldwide.
                  </p>
                  <p className="text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                    Enabling organizations to achieve practical, impactful results in training.
                  </p>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                </div>

                {/* Quality & Compliance */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-pink-50/80 to-rose-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-200/50 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-rose-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Icon Container with Animation */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                    <Shield className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">Quality & Compliance</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                    Maintaining the highest standards in training quality and compliance.
                  </p>
                  <p className="text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                    Ensuring all content meets international certification requirements.
                  </p>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-6 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '0.7s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningReinvented;
