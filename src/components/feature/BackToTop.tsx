import { useEffect, useState } from 'react';

/** Small square button that appears after scrolling and returns to the top. */
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-40 w-11 h-11 bg-ldii-navy text-white shadow-lg flex items-center justify-center rounded-[3px] hover:bg-tech-teal-800 transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
    >
      <i className="ri-arrow-up-line text-xl" aria-hidden="true" />
    </button>
  );
}
