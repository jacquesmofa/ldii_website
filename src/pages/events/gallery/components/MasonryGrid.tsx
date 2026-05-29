
import { useState, useRef, useEffect } from 'react';
import type { GalleryImage } from '../../../../mocks/galleryData';

interface MasonryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

/**
 * LazyImage – renders a single image with lazy‑loading, a loading placeholder
 * and a hover overlay. It uses IntersectionObserver to only load the image
 * when it is near the viewport.
 */
function LazyImage({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guard against browsers that do not support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const aspectRatio = image.height / image.width;

  return (
    <div
      ref={ref}
      className="mb-4 break-inside-avoid group cursor-pointer"
      onClick={onClick}
    >
      <div
        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
        style={{ paddingBottom: `${aspectRatio * 100}%` }}
      >
        {inView ? (
          <>
            <img
              src={image.url}
              alt={image.title}
              onLoad={() => setLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!loaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-100" />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p className="text-white font-semibold text-sm leading-snug">
            {image.title}
          </p>
        </div>

        {/* Zoom icon */}
        <div className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
          <i className="ri-zoom-in-line w-5 h-5 flex items-center justify-center text-gray-800"></i>
        </div>
      </div>
    </div>
  );
}

/**
 * MasonryGrid – distributes images into a responsive number of columns.
 * It calculates column heights based on image aspect ratios so that the
 * visual balance mimics a true masonry layout.
 */
export default function MasonryGrid({
  images,
  onImageClick,
}: MasonryGridProps) {
  // Determine the number of columns based on viewport width
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w >= 1280) setColumns(4);
      else if (w >= 1024) setColumns(3);
      else if (w >= 640) setColumns(2);
      else setColumns(1);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // -------------------------------------------------------------------------
  // Distribute images across columns by shortest column height
  // -------------------------------------------------------------------------
  const columnArrays: GalleryImage[][] = Array.from(
    { length: columns },
    () => []
  );
  const columnIndexMap: number[][] = Array.from(
    { length: columns },
    () => []
  );
  const heights = new Array(columns).fill(0);

  images.forEach((img, idx) => {
    const shortest = heights.indexOf(Math.min(...heights));
    columnArrays[shortest].push(img);
    columnIndexMap[shortest].push(idx);
    // Use aspect ratio as a relative height metric
    heights[shortest] += img.height / img.width;
  });

  // Render columns
  return (
    <div className="flex gap-4">
      {columnArrays.map((col, colIdx) => (
        <div key={colIdx} className="flex-1">
          {col.map((image, imgIdx) => (
            <LazyImage
              key={columnIndexMap[colIdx][imgIdx]}
              image={image}
              onClick={() => onImageClick(columnIndexMap[colIdx][imgIdx])}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
