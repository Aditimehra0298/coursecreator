import React from 'react';

const VideoCreatorTraining = () => {
  return (
    <section id="video-creator-training" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background with gradient matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-blue-600 mb-4 sm:mb-6">
            Learn. Create. Inspire – Video Creator Training
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Explore our platform today and discover the future of interactive learning.
          </p>
        </div>

        {/* Image Section - Responsive sizing */}
        <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
          <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <div className="rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://www.sftrainings.org/wp-content/uploads/2024/12/Idhar-Udhar-ke-use-5.png"
                alt="Abstract geometric design representing dynamic learning"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/1200x600/2D3748/A0AEC0?text=Abstract+Learning+Concept';
                }}
              />
            </div>
          </div>
        </div>

        {/* Features Grid Section - Enhanced responsive design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Feature Card 1: Self-Paced Learning */}
          <div className="group p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-white/90 hover:border-blue-200">
            <div className="mb-4 sm:mb-6 text-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl">⏱️</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 mb-3 sm:mb-4 text-center">Self-Paced Learning</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center leading-relaxed">
              Flexible learning options to fit your busy schedule with personalized pacing.
            </p>
          </div>

          {/* Feature Card 2: Interactive Content */}
          <div className="group p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-white/90 hover:border-teal-200">
            <div className="mb-4 sm:mb-6 text-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl">🧠</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-600 mb-3 sm:mb-4 text-center">Interactive Content</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center leading-relaxed">
              Engaging video lessons, quizzes, and simulations to enhance learning retention.
            </p>
          </div>

          {/* Feature Card 3: Progress Tracking */}
          <div className="group p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-white/90 hover:border-blue-200">
            <div className="mb-4 sm:mb-6 text-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl">📈</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 mb-3 sm:mb-4 text-center">Progress Tracking</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center leading-relaxed">
              Monitor your progress and set personalized learning goals with detailed analytics.
            </p>
          </div>

          {/* Feature Card 4: Certification and Accreditation */}
          <div className="group p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-white/90 hover:border-teal-200">
            <div className="mb-4 sm:mb-6 text-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl">📜</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-600 mb-3 sm:mb-4 text-center">Certification & Accreditation</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center leading-relaxed">
              Earn industry-recognized global certifications upon successful completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCreatorTraining;
