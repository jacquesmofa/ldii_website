import { useEffect } from 'react';
import HeroSlideshow from './HeroSlideshow';

export default function HeroSection() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-corporate-blue-900">
        {/* Endless photo slideshow */}
        <HeroSlideshow />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-36 md:pt-36 md:pb-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85 mb-7 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-tech-teal-400" />
            A Canadian Non-Profit with a Social Enterprise
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight mx-auto max-w-4xl drop-shadow-[0_2px_18px_rgba(4,12,25,0.55)] animate-fade-in">
            Livelihood Development International Initiatives
          </h1>

          <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-tech-teal-300 mt-6 sm:mt-7 animate-fade-in">
            Local impact. Global partnerships.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mt-4 sm:mt-5 mb-9 sm:mb-11 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_12px_rgba(4,12,25,0.6)] animate-slide-up reveal">
            Livelihood Development International Initiatives (LDII) is a non-profit organization
            committed to creating a brighter future through the promotion of social cohesion and
            empowerment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up-delay px-4 reveal">
            <a
              href="/about"
              className="w-full sm:w-auto bg-tech-teal-500 text-corporate-blue-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-semibold text-sm sm:text-base hover:bg-tech-teal-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              Learn About Our Mission
            </a>
            <a
              href="/focus-areas"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/40 px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-semibold text-sm sm:text-base hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}