import { useState, useRef, useEffect, useCallback } from 'react';
import { getUpcomingEvents, getPastEvents, EventItem } from '@/mocks/eventsData';

function EventCarouselRow({
  events,
  sectionTitle,
  linkPrefix,
}: {
  events: EventItem[];
  sectionTitle: string;
  linkPrefix: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const left = el.scrollLeft > 1;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
    setCanScrollLeft(left);
    setCanScrollRight(right);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el || !cardWidth) return;
    const scrollAmount = cardWidth + 16; // card width + gap
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const measure = () => {
      const firstCard = el.querySelector('[data-card]') as HTMLElement | null;
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
      checkScroll();
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);
    el.addEventListener('scroll', checkScroll);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener('scroll', checkScroll);
    };
  }, [events, checkScroll]);

  if (events.length === 0) return null;

  return (
    <div className="mb-16">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          {sectionTitle}
        </h3>
        <span className="text-sm text-gray-500 font-medium">
          {events.length} {events.length === 1 ? 'event' : 'events'}
        </span>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-lg ${
            canScrollLeft
              ? 'bg-white border-[#0A1E3D] text-[#0A1E3D] hover:bg-[#0A1E3D] hover:text-white cursor-pointer'
              : 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
          }`}
          aria-label="Previous event"
        >
          <i className="ri-arrow-left-s-line text-xl w-6 h-6 flex items-center justify-center"></i>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-lg ${
            canScrollRight
              ? 'bg-white border-[#0A1E3D] text-[#0A1E3D] hover:bg-[#0A1E3D] hover:text-white cursor-pointer'
              : 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
          }`}
          aria-label="Next event"
        >
          <i className="ri-arrow-right-s-line text-xl w-6 h-6 flex items-center justify-center"></i>
        </button>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-14"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {events.map((event) => (
            <a
              key={event.id}
              data-card
              href={`${linkPrefix}#${event.id}`}
              className="group flex-shrink-0 w-[calc(100%-0px)] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] snap-start bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#00D9FF]/40 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-[#00D9FF] text-[#0A1E3D] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {event.type}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
                    <span className="font-medium">{event.displayDate}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00D9FF] transition-colors duration-300 line-clamp-2 leading-tight">
                  {event.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3 flex-1">
                  {event.shortDescription}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0"></i>
                  <span className="truncate">{event.location}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D9FF] group-hover:gap-3 transition-all duration-300 mt-auto">
                  Learn More
                  <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Events & Latest News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our upcoming events and explore our past conferences and achievements
          </p>
        </div>

        {/* Upcoming Events Row */}
        <EventCarouselRow
          events={upcomingEvents}
          sectionTitle="Upcoming Events"
          linkPrefix="/events/upcoming"
        />

        {/* Past Events Row */}
        <EventCarouselRow
          events={pastEvents}
          sectionTitle="Past Events"
          linkPrefix="/events/past"
        />

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <a
            href="/events"
            className="bg-[#0A1E3D] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#0A1E3D]/90 transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
          >
            View All Events
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
          </a>
        </div>
      </div>
    </section>
  );
}