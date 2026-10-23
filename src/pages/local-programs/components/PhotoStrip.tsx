import { useEffect, useState } from 'react';
import type { ProgrammePhoto } from '@/mocks/localProgramsData';

interface PhotoStripProps {
  photos: ProgrammePhoto[];
  programmeTitle: string;
}

export default function PhotoStrip({ photos, programmeTitle }: PhotoStripProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    document.body.style.overflow = 'hidden';

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeIndex, photos.length]);

  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  return (
    <>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {photos.map((photo, index) => (
          <button
            key={photo.url}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group text-left cursor-pointer"
            aria-label={`Open photo: ${photo.caption}`}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <img
                src={photo.url}
                alt={`${programmeTitle} - ${photo.caption}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-zoom-in-line w-4 h-4 flex items-center justify-center text-gray-800"></i>
              </span>
            </div>
            <p className="mt-2 text-[11px] leading-snug text-gray-500">{photo.caption}</p>
          </button>
        ))}
      </div>

      {activePhoto && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 flex flex-col"
          onClick={() => setActiveIndex(null)}
        >
          <div className="flex items-center justify-between px-4 md:px-6 py-4 text-white shrink-0">
            <span className="text-sm text-white/60 font-medium">
              {activeIndex + 1} <span className="text-white/30">/</span> {photos.length}
            </span>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex(null);
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close photo"
            >
              <i className="ri-close-line w-5 h-5 flex items-center justify-center text-xl"></i>
            </button>
          </div>

          <div
            className="flex-1 flex items-center justify-center px-4 md:px-16 relative overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex - 1 + photos.length) % photos.length)}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous photo"
            >
              <i className="ri-arrow-left-s-line w-6 h-6 flex items-center justify-center text-2xl"></i>
            </button>

            <img
              src={activePhoto.url}
              alt={activePhoto.caption}
              className="max-w-full max-h-[72vh] object-contain rounded-lg select-none"
            />

            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % photos.length)}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-300 cursor-pointer"
              aria-label="Next photo"
            >
              <i className="ri-arrow-right-s-line w-6 h-6 flex items-center justify-center text-2xl"></i>
            </button>
          </div>

          <div className="shrink-0 px-6 py-5 text-center">
            <h3 className="text-base md:text-lg font-semibold text-white">{programmeTitle}</h3>
            <p className="text-sm text-white/60 mt-1">{activePhoto.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}