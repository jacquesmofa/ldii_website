import { useState, useEffect, useCallback, useRef } from 'react';
import type { GalleryImage } from '../../../../mocks/galleryData';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * ============================================================================
 * LIGHTBOX — Fullscreen photo viewer with keyboard navigation
 * src/pages/events/gallery/components/Lightbox.tsx
 * ============================================================================
 *
 * Features:
 *   • Click anywhere outside the image to close
 *   • Arrow keys (← →) to navigate between photos
 *   • Escape key to close
 *   • Prev/Next arrow buttons on screen
 *   • Counter showing current position
 *   • Loading spinner while image loads
 *   • Auto-hiding caption (shows for 4s, then fades out — hover to reveal)
 *
 * You don't need to edit this file. The gallery page controls it via props.
 * ============================================================================
 */
export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [loaded, setLoaded] = useState(false);

  /** captionVisible controls whether the bottom caption is visible */
  const [captionVisible, setCaptionVisible] = useState(true);

  /** Timer ref for the auto-hide caption feature */
  const captionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** ── Auto-hide caption after 4 seconds ── */
  const resetCaptionTimer = useCallback(() => {
    setCaptionVisible(true);
    if (captionTimerRef.current) clearTimeout(captionTimerRef.current);
    captionTimerRef.current = setTimeout(() => setCaptionVisible(false), 4000);
  }, []);

  // Reset timer when lightbox first opens or image changes
  useEffect(() => {
    resetCaptionTimer();
    return () => {
      if (captionTimerRef.current) clearTimeout(captionTimerRef.current);
    };
  }, [currentIndex, resetCaptionTimer]);

  // Navigate to the previous image (with wrap‑around)
  const handlePrev = useCallback(() => {
    setLoaded(false);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  // Navigate to the next image (with wrap‑around)
  const handleNext = useCallback(() => {
    setLoaded(false);
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard shortcuts & body scroll lock
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        default:
          break;
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, handlePrev, handleNext]);

  const image = images[currentIndex];

  // Guard against an invalid index – render nothing instead of crashing
  if (!image) {
    console.warn('Lightbox: image not found for index', currentIndex);
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
        aria-label="Close lightbox"
      >
        <i className="ri-close-line w-6 h-6 flex items-center justify-center text-xl"></i>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 text-white/70 text-sm font-medium z-10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
        aria-label="Previous image"
      >
        <i className="ri-arrow-left-s-line w-7 h-7 flex items-center justify-center text-2xl"></i>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
        aria-label="Next image"
      >
        <i className="ri-arrow-right-s-line w-7 h-7 flex items-center justify-center text-2xl"></i>
      </button>

      {/* Image container */}
      <div
        className="max-w-6xl w-full mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full flex items-center justify-center"
          style={{ maxHeight: '80vh' }}
        >
          {/* Loading spinner */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}

          {/* Image */}
          <img
            src={image.url}
            alt={image.title}
            onLoad={() => setLoaded(true)}
            className={`max-h-[80vh] max-w-full object-contain rounded-lg transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/*
          Caption — auto-hides after 4 seconds via the captionTimerRef.
          Hovering over the image area re-shows it (handled by the onMouseEnter
          on the outer container below).
        */}
        <div
          className="mt-4 text-center transition-all duration-500"
          onMouseEnter={resetCaptionTimer}
          style={{
            opacity: captionVisible ? 1 : 0,
            transform: captionVisible ? 'translateY(0)' : 'translateY(8px)',
            pointerEvents: captionVisible ? 'auto' : 'none',
          }}
        >
          <h3 className="text-white font-semibold text-lg leading-snug">{image.title}</h3>
          {/* Hint text for user about the hover interaction */}
          <p className="text-white/40 text-xs mt-2">
            Hover image to reveal title · {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}