import React, { useRef, useState, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  fallbackSrc?: string;
  label: string;
  className?: string;
  onError?: (error: string) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  fallbackSrc, 
  label, 
  className = "", 
  onError 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    const video = videoRef.current;
    if (!video) return;

    console.error(`Video error for ${label}:`, {
      src: currentSrc,
      error: video.error,
      networkState: video.networkState,
      readyState: video.readyState
    });

    // Try fallback source if available and we haven't tried it yet
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      console.log(`Trying fallback source for ${label}: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
      video.src = fallbackSrc;
      video.load();
    } else {
      setHasError(true);
      setIsLoading(false);
      onError?.(`Failed to load video: ${label}`);
    }
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadedMetadata = () => {
    setIsLoading(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gray-800 text-white ${className}`}>
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-lg font-semibold mb-2">Video Unavailable</p>
          <p className="text-sm text-gray-300 mb-4">Unable to load video content</p>
          <button 
            onClick={() => {
              setCurrentSrc(src);
              setHasError(false);
              setIsLoading(true);
              if (videoRef.current) {
                videoRef.current.src = src;
                videoRef.current.load();
              }
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-800 text-white z-10 ${className}`}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-lg font-semibold">Loading Video...</p>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        src={currentSrc}
        muted
        loop
        playsInline
        preload="metadata"
        controls
        crossOrigin="anonymous"
        className={`w-full h-full object-contain bg-black ${className}`}
        onLoadStart={handleLoadStart}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onError={handleError}
      />
    </>
  );
};

export default VideoPlayer;
