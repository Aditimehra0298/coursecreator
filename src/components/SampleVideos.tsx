import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

type LanguageKey = 'greek' | 'english' | 'french' | 'spanish' | 'languages';

interface SampleVideosProps {
  onVideoError?: (message: string) => void;
}

const SampleVideos: React.FC<SampleVideosProps> = ({ onVideoError }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageKey>('greek');

  const languages: Array<{ 
    key: LanguageKey; 
    label: string; 
    src: string; 
    fallbackSrc: string;
    backupSrc: string;
    capsuleClass?: string; 
  }> = [
    { 
      key: 'greek', 
      label: 'Greek (Ελληνικά)', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      fallbackSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      backupSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      capsuleClass: 'bg-teal-100 text-teal-800 hover:bg-teal-200' 
    },
    { 
      key: 'english', 
      label: 'English', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      fallbackSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      backupSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      capsuleClass: 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
    },
    { 
      key: 'french', 
      label: 'Français', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 
      fallbackSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      backupSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      capsuleClass: 'bg-purple-100 text-purple-800 hover:bg-purple-200' 
    },
    { 
      key: 'spanish', 
      label: 'Español', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      fallbackSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      backupSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      capsuleClass: 'bg-orange-100 text-orange-800 hover:bg-orange-200' 
    },
    { 
      key: 'languages', 
      label: 'Multi-Language', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      fallbackSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      backupSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      capsuleClass: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200' 
    }
  ];

  const handleLanguageSelect = (language: LanguageKey) => {
    setSelectedLanguage(language);
  };

  const handleVideoLoad = () => {
    // Video loaded successfully
  };

  const handleVideoError = (message: string) => {
    onVideoError?.(message);
  };

  const selectedVideo = languages.find(lang => lang.key === selectedLanguage);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience Our Training Quality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch sample training content in multiple languages to see the quality and effectiveness of our AI-driven methodology.
          </p>
        </div>

        {/* Language Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {languages.map((language) => (
            <button
              key={language.key}
              onClick={() => handleLanguageSelect(language.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                selectedLanguage === language.key
                  ? 'ring-2 ring-blue-500 ring-offset-2'
                  : ''
              } ${language.capsuleClass}`}
            >
              {language.label}
            </button>
          ))}
        </div>

        {/* Video Player */}
        {selectedVideo && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative">
                <VideoPlayer
                  src={selectedVideo.src}
                  fallbackSrc={selectedVideo.fallbackSrc}
                  backupSrc={selectedVideo.backupSrc}
                  label={selectedVideo.label}
                  onLoad={handleVideoLoad}
                  onError={handleVideoError}
                />
              </div>
              
              {/* Video Info */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {selectedVideo.label} Training Sample
                    </h3>
                    <p className="text-gray-600">
                      High-quality training content demonstrating our AI-driven methodology
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Training Quality</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Professional Training Content - Optimized for Reliable Streaming
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleVideos;


