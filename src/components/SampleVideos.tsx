import { useRef, useState } from 'react';

type PlayableKey = 'greek' | 'english';
type LanguageKey = PlayableKey | 'french' | 'german' | 'spanish';

const SampleVideos = () => {
  const refs = useRef<Record<LanguageKey, HTMLVideoElement | null>>({
    greek: null,
    english: null,
    french: null,
    german: null,
    spanish: null,
  });

  const languages: Array<{ key: LanguageKey; label: string; src: string; capsuleClass?: string }> = [
    { key: 'greek', label: 'Greek (Ελληνικά)', src: '/a8d.mp4', capsuleClass: 'bg-teal-100 text-teal-800 hover:bg-teal-200' },
    { key: 'english', label: 'English', src: '/a9d.mp4', capsuleClass: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
    { key: 'french', label: 'Français', src: '', capsuleClass: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
    { key: 'german', label: 'Deutsch', src: '', capsuleClass: 'bg-amber-100 text-amber-800 hover:bg-amber-200' },
    { key: 'spanish', label: 'Español', src: '', capsuleClass: 'bg-rose-100 text-rose-800 hover:bg-rose-200' },
  ];

  const [active, setActive] = useState<PlayableKey>('greek');

  const switchTo = (lang: PlayableKey) => {
    // Pause all videos and switch view
    (Object.keys(refs.current) as LanguageKey[]).forEach(k => {
      const vid = refs.current[k];
      if (vid) vid.pause();
    });
    setActive(lang);
  };

  // Removed 'All' capsule

  // No form gating here
  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Sample Learning Videos
            </h2>
            <p className="text-lg text-gray-700">Kickstart Your Learning • Unlock New Skills</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {languages.map(lang => {
                const isPlayable = (lang.key === 'greek' || lang.key === 'english');
                const isActive = active === lang.key;
                const baseClass = 'px-3 py-1 rounded-full text-sm font-medium transition-colors';
                const activeClass = 'bg-black/80 text-white';
                const normalClass = lang.capsuleClass || 'bg-gray-200 text-gray-800 hover:bg-gray-300';
                const disabledClass = 'opacity-50 cursor-not-allowed pointer-events-none';
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
                  <video
                    src={lang.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls
                    className="w-full h-full object-contain bg-black"
                    ref={el => { if (el) refs.current[lang.key] = el; }}
                    onPlay={() => {
                      (Object.keys(refs.current) as LanguageKey[]).forEach(k => {
                        if (k !== lang.key) refs.current[k]?.pause();
                      });
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Credit */}
          <div className="text-center mt-2">
            <p className="text-sm text-gray-400 italic animate-pulse">
            This training video is the result of our dynamic collaboration with Evoke.AI DAMNART, a Design and Technology Company of Dubai, with presence in India, the UK, Canada and the US.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SampleVideos;


