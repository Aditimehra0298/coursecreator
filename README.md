# Project Evoke - AI-Powered Learning Platform

## Video Optimization for Netlify

This project has been optimized for smooth video playback on Netlify with the following improvements:

### Video File Structure
- **Web-optimized videos**: `*_web.mp4` (17MB) - Best for web streaming
- **Basic quality videos**: `*_basic.mp4` (6MB) - Fallback option
- **Original videos**: `*.mp4` (25MB) - Full quality (may be slower)

### Key Improvements Made
1. **Optimized video sources**: Using web-optimized versions for primary playback
2. **Fallback system**: Automatic fallback to basic quality if web version fails
3. **Better error handling**: Comprehensive error handling with user feedback
4. **Loading states**: Visual loading indicators to improve user experience
5. **Netlify headers**: Proper MIME types and caching headers for video files
6. **Preloading**: Metadata preloading for faster video startup

### Testing
Visit `/test-videos.html` to test video playback and verify Netlify compatibility.

### Components Updated
- `SampleVideos.tsx` - Main video player with optimization
- `Footer.tsx` - Background video with fallback
- `_headers` - Netlify configuration for video files

### Browser Compatibility
- Modern browsers with HTML5 video support
- Mobile-friendly with `playsInline` attribute
- Fallback support for older browsers

## Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deploy to Netlify

The project is configured for optimal Netlify deployment with proper video handling and caching.
