import { useEffect, useRef } from 'react';

/**
 * Plays a Mux HLS stream (public Playback ID). Safari plays HLS natively;
 * other browsers load hls.js on demand, so it never weighs on the first page load.
 * background: silent endless loop, paused when off screen and for people who prefer reduced motion.
 */
export default function HlsVideo({
  src,
  poster,
  title,
  background = false,
  className = '',
}: {
  src: string;
  poster: string;
  title: string;
  background?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let destroyed = false;
    let hls: { destroy: () => void } | null = null;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const attach = async () => {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      } else {
        const { default: Hls } = await import('hls.js');
        if (destroyed) return;
        if (Hls.isSupported()) {
          const h = new Hls({ capLevelToPlayerSize: true, startLevel: -1 });
          h.loadSource(src);
          h.attachMedia(video);
          hls = h;
        } else {
          video.src = src;
        }
      }
      if (background && !reduced) video.play().catch(() => {});
    };

    if (background) {
      if (reduced) return;
      // Load and play only while on screen.
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src && !hls) attach();
          else video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
      io.observe(video);
      return () => {
        destroyed = true;
        io.disconnect();
        hls?.destroy();
      };
    }
    attach();
    return () => {
      destroyed = true;
      hls?.destroy();
    };
  }, [src, background]);

  return background ? (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      aria-hidden="true"
      tabIndex={-1}
    />
  ) : (
    <video ref={ref} className={className} poster={poster} controls playsInline preload="none" title={title} aria-label={title} />
  );
}
