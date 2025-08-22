import React, { useRef, useState, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  fallbackSrc?: string;
  backupSrc?: string;
  label: string;
  className?: string;
  onLoad?: () => void;
  onError?: (error: string) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  fallbackSrc, 
  backupSrc, 
  label, 
  className = "", 
  onLoad,
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

    const errorDetails = {
      src: currentSrc,
      error: video.error,
      networkState: video.networkState,
      readyState: video.readyState,
      errorCode: video.error?.code,
      errorMessage: video.error?.message
    };

    console.error(`Video error for ${label}:`, errorDetails);

    // Check if it's a network error (code 2) or media error for large files
    const isNetworkError = video.error?.code === 2;
    const isLargeFileError = currentSrc.includes('/a8d.mp4') || currentSrc.includes('/a9d.mp4');

    // Try fallback source if available and we haven't tried it yet
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      console.log(`Trying fallback source for ${label}: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
      video.src = fallbackSrc;
      video.load();
    } else if (backupSrc && currentSrc !== backupSrc) {
      // Try backup source if fallback failed
      console.log(`Trying backup source for ${label}: ${backupSrc}`);
      setCurrentSrc(backupSrc);
      setHasError(false);
      setIsLoading(true);
      video.src = backupSrc;
      video.load();
    } else {
      setHasError(true);
      setIsLoading(false);
      const errorMessage = isLargeFileError && isNetworkError 
        ? `Large video file temporarily unavailable: ${label}` 
        : `Failed to load video: ${label}`;
      onError?.(errorMessage);
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
    onLoad?.();
  };

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gray-800 text-white ${className}`}>
        <div className="text-center p-8">
          <div className="text-4xl mb-4">📹</div>
          <p className="text-lg font-semibold mb-2">Video Demo Unavailable</p>
          <p className="text-sm text-gray-300 mb-4">
            {currentSrc.includes('/a8d.mp4') || currentSrc.includes('/a9d.mp4') 
              ? "Your training video is temporarily unavailable. We're trying alternative sources to ensure you can see our content quality."
              : "Unable to load video content at this time."
            }
          </p>
          <div className="space-y-2">
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
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors mr-2"
            >
              Retry
            </button>
            <a 
              href="mailto:contact@damnart.com?subject=Video Demo Request"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors inline-block"
            >
              Request Demo
            </a>
          </div>
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
