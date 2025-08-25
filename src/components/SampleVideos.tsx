import { useRef, useState, useEffect } from 'react';

// Add custom CSS for marquee animation
const marqueeStyle = `
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`;

type PlayableKey = 'greek' | 'english';
type LanguageKey = PlayableKey | 'french' | 'german' | 'spanish' | 'languages';

const SampleVideos = () => {
  const [active, setActive] = useState<PlayableKey>('greek');

  const languages: Array<{ key: LanguageKey; label: string; capsuleClass?: string }> = [
    { 
      key: 'greek', 
      label: 'Greek (Ελληνικά)', 
      capsuleClass: 'bg-teal-100 text-teal-800 hover:bg-teal-200' 
    },
    { 
      key: 'english', 
      label: 'English', 
      capsuleClass: 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
    },
    { 
      key: 'french', 
      label: 'Français', 
      capsuleClass: 'bg-purple-100 text-purple-800 hover:bg-purple-200' 
    },
    { 
      key: 'german', 
      label: 'Deutsch', 
      capsuleClass: 'bg-amber-100 text-amber-800 hover:bg-amber-200' 
    },
    { 
      key: 'spanish', 
      label: 'Español', 
      capsuleClass: 'bg-rose-100 text-rose-800 hover:bg-rose-200' 
    },
    { 
      key: 'languages', 
      label: '+40 more languages', 
      capsuleClass: 'bg-rose-100 text-rose-800 hover:bg-rose-200' 
    },
  ];

  useEffect(() => {
    console.log('SampleVideos mounted, using Vimeo video: https://vimeo.com/1112787730');
  }, []);

  const switchTo = (lang: PlayableKey) => {
    setActive(lang);
  };

  // Removed 'All' capsule

  // No form gating here
    return (
    <>
      <style>{marqueeStyle}</style>
      <section id="sample-videos" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* AI-Powered Learning Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-200">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="font-semibold text-xs">AI-Enhanced Learning</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              Experience the Future of Conformity Assessment Training
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Witness how <span className="text-teal-600 font-semibold">Evoke AI by DAMNART</span> transforms complex technical standards into engaging, multilingual learning experiences that empower professionals worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <p className="text-sm text-gray-600 mb-3 w-full">Choose Your Learning Language:</p>
              {languages.map(lang => {
                const isPlayable = (lang.key === 'greek' || lang.key === 'english');
                const isActive = active === lang.key;
                const baseClass = 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105';
                const activeClass = 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg';
                const normalClass = lang.capsuleClass || 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md';
                const disabledClass = 'opacity-50 cursor-not-allowed pointer-events-none bg-gray-100 text-gray-400';
                return (
                  <button
                    key={lang.key}
                    onClick={isPlayable ? () => switchTo(lang.key as PlayableKey) : undefined}
                    className={`${baseClass} ${isPlayable ? (isActive ? activeClass : normalClass) : disabledClass}`}
                    aria-disabled={!isPlayable}
                  >
                    {lang.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 items-start">
            {languages.filter(l => l.key === active).map(lang => (
              <div key={lang.key} className="block">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black" style={{ aspectRatio: '16 / 9' }}>
                  {/* Vimeo Video Embed - Different videos for different languages */}
                  <iframe
                    src={active === 'greek' 
                      ? "https://player.vimeo.com/video/1112787768?autoplay=0&loop=1&title=0&byline=0&portrait=0"
                      : "https://player.vimeo.com/video/1112787730?autoplay=0&loop=1&title=0&byline=0&portrait=0"
                    }
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={active === 'greek' ? "Evoke AI Training Video - Greek" : "Evoke AI Training Video"}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Permission Notice - Close to Video */}
          <div className="mt-4 text-center">
            <div className="bg-teal-50 text-grey-800 py-4 px-6 rounded-lg border border-white-200 mb-6">
              <p className="text-[10px] italic mt-2 opacity-75">
                Content shared with the kind permission of Sustainable Futures Trainings, serving as prime examples of our exceptional quality and innovative instructional methodology.
              </p>
            </div>
          </div>

          {/* Enhanced Content Below Video */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                🚀 Ready to Transform Your Training?
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Experience the power of <span className="text-teal-600 font-semibold">AI-driven course creation</span> that makes complex standards accessible, engaging, and effective for learners worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center text-blue-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Multilingual Support</span>
                </div>
                <div className="flex items-center text-teal-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>AI-Enhanced Learning</span>
                </div>
                <div className="flex items-center text-indigo-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Global Standards</span>
                </div>
              </div>
              
              {/* Visit Example Site Button */}
              <div className="mt-6 text-center">
                <a 
                  href="https://sfteucybersecurity.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Our Client Site
                </a>
              </div>
            </div>
          </div>
          

        </div>
      </div>

      </section>
    </>
  );
};

export default SampleVideos;


