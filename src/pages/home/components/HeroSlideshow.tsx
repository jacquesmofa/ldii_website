import { useCallback, useEffect, useState } from 'react';
import { heroSlides } from '@/mocks/heroSlides';

const SLIDE_DURATION_MS = 7000;
const TOTAL = heroSlides.length;

/**
 * Picks the frame that should actually be on screen. If the next photograph has
 * not finished downloading yet, we keep the previous one visible instead of
 * fading to an empty (black) frame.
 */
function pickVisible(active: number, ready: boolean[], broken: boolean[]): number {
  for (let step = 0; step < TOTAL; step += 1) {
    const index = (active - step + TOTAL) % TOTAL;
    if (ready[index] && !broken[index]) return index;
  }
  return active;
}

/**
 * Full-bleed, endlessly looping photo slideshow used behind the home hero copy.
 * Crossfades slowly, drifts gently, and can be paused or stepped.
 */
export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState<boolean[]>(() => heroSlides.map(() => false));
  const [broken, setBroken] = useState<boolean[]>(() => heroSlides.map(() => false));

  const markReady = useCallback((index: number) => {
    setReady((current) => {
      if (current[index]) return current;
      const next = [...current];
      next[index] = true;
      return next;
    });
  }, []);

  const markBroken = useCallback((index: number) => {
    setBroken((current) => {
      if (current[index]) return current;
      const next = [...current];
      next[index] = true;
      return next;
    });
  }, []);

  /* Warm every photograph up front so a frame is never shown while still empty. */
  useEffect(() => {
    let cancelled = false;

    heroSlides.forEach((slide, index) => {
      const image = new Image();
      image.decoding = 'async';
      image.onload = () => {
        if (!cancelled) markReady(index);
      };
      image.onerror = () => {
        if (!cancelled) markBroken(index);
      };
      image.src = slide.src;
    });

    return () => {
      cancelled = true;
    };
  }, [markReady, markBroken]);

  const goTo = useCallback((index: number) => {
    setActive(((index % TOTAL) + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % TOTAL);
    }, SLIDE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [active, paused]);

  const visibleIndex = pickVisible(active, ready, broken);

  return (
    <>
      {/* Photo layers */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#0b1626' }}
        aria-hidden="true"
      >
        {heroSlides.map((slide, index) => {
          const isVisible = index === visibleIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center ${
                  isVisible ? 'hero-slide-img' : ''
                }`}
                style={{ filter: 'brightness(1.24) contrast(1.03) saturate(1.06)' }}
                loading="eager"
                decoding="async"
                onLoad={() => markReady(index)}
                onError={() => markBroken(index)}
                width="1600"
                height="900"
              />
            </div>
          );
        })}
      </div>

      {/* Readability veils — softer behind the copy, brighter toward the edges */}
      <div className="absolute inset-0 hero-veil pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-corporate-blue-900/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-corporate-blue-900/80 to-transparent pointer-events-none" />

      {/* Step controls */}
      <button
        type="button"
        onClick={() => goTo(active - 1)}
        aria-label="Previous photograph"
        className="hidden md:flex absolute left-5 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white backdrop-blur-sm hover:bg-white/25 transition-colors cursor-pointer"
      >
        <i className="ri-arrow-left-s-line text-2xl" />
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        aria-label="Next photograph"
        className="hidden md:flex absolute right-5 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white backdrop-blur-sm hover:bg-white/25 transition-colors cursor-pointer"
      >
        <i className="ri-arrow-right-s-line text-2xl" />
      </button>

      {/* Progress rail */}
      <div className="absolute bottom-0 inset-x-0 z-20 px-4 md:px-6 lg:px-10 pb-5 flex items-center gap-3 md:gap-4">
        <span className="text-[11px] font-semibold tracking-[0.22em] text-white/75 tabular-nums whitespace-nowrap">
          {String(visibleIndex + 1).padStart(2, '0')}
          <span className="text-white/40"> / {TOTAL}</span>
        </span>

        <div className="flex-1 flex items-center gap-1 md:gap-1.5">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show photograph ${index + 1}`}
              aria-current={index === visibleIndex}
              className="relative h-[3px] flex-1 rounded-full bg-white/25 overflow-hidden cursor-pointer hover:bg-white/40 transition-colors"
            >
              {index < visibleIndex && (
                <span className="absolute inset-y-0 left-0 w-full rounded-full bg-white/85" />
              )}
              {index === visibleIndex && (
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-white hero-progress"
                  style={{
                    animationDuration: `${SLIDE_DURATION_MS}ms`,
                    animationPlayState: paused ? 'paused' : 'running',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPaused((current) => !current)}
          aria-label={paused ? 'Play the slideshow' : 'Pause the slideshow'}
          className="w-8 h-8 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
        >
          <i className={paused ? 'ri-play-fill text-sm' : 'ri-pause-fill text-sm'} />
        </button>
      </div>
    </>
  );
}