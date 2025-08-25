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
  const refs = useRef<Record<LanguageKey, HTMLVideoElement | null>>({
    greek: null,
    english: null,
    french: null,
    german: null,
    spanish: null,
    languages: null,
  });

  const languages: Array<{ key: LanguageKey; label: string; src: string; capsuleClass?: string; fallbackSrc?: string }> = [
    { 
      key: 'greek', 
      label: 'Greek (Ελληνικά)', 
      src: '/a8d_netlify.mp4', 
      fallbackSrc: '/a8d_basic.mp4',
      capsuleClass: 'bg-teal-100 text-teal-800 hover:bg-teal-200' 
    },
    { 
      key: 'english', 
      label: 'English', 
      src: '/a9d_netlify.mp4', 
      fallbackSrc: '/a9d_basic.mp4',
      capsuleClass: 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
    },
    { 
      key: 'french', 
      label: 'Français', 
      src: '/a8d_netlify.mp4', 
      fallbackSrc: '/a8d_basic.mp4',
      capsuleClass: 'bg-purple-100 text-purple-800 hover:bg-purple-200' 
    },
    { 
      key: 'german', 
      label: 'Deutsch', 
      src: '/a9d_netlify.mp4', 
      fallbackSrc: '/a9d_basic.mp4',
      capsuleClass: 'bg-amber-100 text-amber-800 hover:bg-amber-200' 
    },
    { 
      key: 'spanish', 
      label: 'Español', 
      src: '/a8d_netlify.mp4', 
      fallbackSrc: '/a8d_basic.mp4',
      capsuleClass: 'bg-rose-100 text-rose-800 hover:bg-rose-200' 
    },
    { 
      key: 'languages', 
      label: '+40 more languages', 
      src: '/a9d_netlify.mp4', 
      fallbackSrc: '/a9d_basic.mp4',
      capsuleClass: 'bg-rose-100 text-rose-800 hover:bg-rose-200' 
    },
  ];

  const [active, setActive] = useState<PlayableKey>('greek');
  const [videoError, setVideoError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log('SampleVideos mounted, checking video sources:');
    languages.forEach(lang => {
      console.log(`${lang.key}: ${lang.src}`);
    });
    
    // Test if netlify videos are accessible
    const testVideo = document.createElement('video');
    testVideo.src = '/a8d_netlify.mp4';
    testVideo.addEventListener('canplaythrough', () => {
      console.log('✅ Netlify video file is accessible and can play');
    });
    testVideo.addEventListener('error', (e) => {
      console.log('❌ Netlify video file error:', e);
    });
    testVideo.load();
    
    // Set initial loading state to false after a short delay to allow video to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const switchTo = (lang: PlayableKey) => {
    // Pause all videos and switch view
    (Object.keys(refs.current) as LanguageKey[]).forEach(k => {
      const vid = refs.current[k];
      if (vid) vid.pause();
    });
    setActive(lang);
  };

  const handleVideoError = (lang: LanguageKey, error: string) => {
    console.log(`Video error for ${lang}:`, error);
    setVideoError(`${lang} - ${error}`);
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
                  {/* Always show video element for now to debug */}
                  <video
                    ref={(el) => {
                      refs.current[lang.key] = el;
                    }}
                    src={lang.src}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/l7.png"
                    onLoadStart={() => {
                      console.log(`🎬 Video loading started for ${lang.key} with src: ${lang.src}`);
                      setIsLoading(true);
                    }}
                    onCanPlay={() => {
                      console.log(`✅ Video can play for ${lang.key} with src: ${lang.src}`);
                      setVideoError(null);
                      setIsLoading(false);
                    }}
                    onLoadedData={() => {
                      console.log(`📊 Video data loaded for ${lang.key} with src: ${lang.src}`);
                      setIsLoading(false);
                    }}
                    onLoadedMetadata={() => {
                      console.log(`📋 Video metadata loaded for ${lang.key} with src: ${lang.src}`);
                    }}
                    onProgress={() => {
                      console.log(`📈 Video progress for ${lang.key} with src: ${lang.src}`);
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement;
                      const error = target.error;
                      console.log(`❌ Video error details for ${lang.key}:`, {
                        currentSrc: target.currentSrc,
                        error: error,
                        networkState: target.networkState,
                        readyState: target.readyState,
                        src: target.src,
                        intendedSrc: lang.src
                      });
                      
                      setIsLoading(false);
                      
                      // Temporarily disable fallback to debug
                      console.log(`🚫 Fallback disabled for debugging - showing error for ${lang.key}`);
                      handleVideoError(lang.key, error ? error.message : 'Unknown error');
                      
                      // Original fallback logic (commented out for debugging)
                      /*
                      if (lang.fallbackSrc && target.src !== lang.fallbackSrc && target.src === lang.src) {
                        console.log(`🔄 Trying fallback: ${lang.fallbackSrc} for ${lang.key}`);
                        target.src = lang.fallbackSrc;
                        target.load();
                      } else {
                        console.log(`🚫 No fallback available or already tried fallback for ${lang.key}`);
                        handleVideoError(lang.key, error ? error.message : 'Unknown error');
                      }
                      */
                    }}
                  />
                  
                  {/* Debug status */}
                  <div className="text-white text-center py-2 bg-blue-600 text-sm">
                    Current Source: {lang.src} | Loading: {isLoading ? 'Yes' : 'No'} | Error: {videoError ? 'Yes' : 'No'}
                  </div>
                  
                  {/* Show error message below video if needed */}
                  {videoError && videoError.includes(lang.label) && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-2">
                      <strong>Video Error:</strong> {videoError}
                      <button 
                        onClick={() => {
                          setVideoError(null);
                          const video = refs.current[lang.key];
                          if (video) {
                            video.load();
                          }
                        }}
                        className="ml-2 px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                      >
                        Retry
                      </button>
                    </div>
                  )}
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


