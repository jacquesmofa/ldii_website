import { getPastEvents, getUpcomingEvents, type EventItem } from '../../mocks/eventsData';

/**
 * LDII's real, documented record: the events in src/mocks/eventsData.ts.
 * Used by the Impact, Achievements and Past/Upcoming Projects pages so they
 * only ever show engagements that actually happened (or are announced).
 */
export function TrackRecord({ mode = 'past' }: { mode?: 'past' | 'upcoming' }) {
  const items: EventItem[] = mode === 'past' ? getPastEvents() : getUpcomingEvents();

  if (items.length === 0) {
    return (
      <p className="text-center text-lg text-gray-600">
        New engagements will be announced here. <a href="/contact" className="text-teal-700 font-semibold underline">Contact us</a> to hear first.
      </p>
    );
  }

  return (
    <ol className="relative border-l-2 border-[#00D9FF]/40 ml-3 md:ml-6 space-y-14">
      {items.map((event) => {
        const href = event.linkUrl || (mode === 'past' ? '/events/past' : '/events/upcoming');
        const label = event.linkLabel || (event.linkUrl?.includes('gallery') ? 'See the photos' : 'Learn more');
        const summary = event.shortDescription || event.description.split('\n')[0];
        return (
          <li key={event.id} className="pl-8 md:pl-12 relative">
            <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#0A1E3D] border-4 border-[#00D9FF]" aria-hidden="true"></span>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
              <a href={href} className="lg:col-span-2 block overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </a>
              <div className="lg:col-span-3">
                <p className="text-teal-700 font-semibold tracking-wide uppercase text-sm mb-2">{event.displayDate}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A1E3D] mb-3 leading-snug">{event.title}</h3>
                <p className="flex items-start text-gray-600 mb-4">
                  <i className="ri-map-pin-line mr-2 mt-0.5 text-teal-600" aria-hidden="true"></i>
                  {event.venue ? `${event.venue}, ${event.location}` : event.location}
                </p>
                <p className="text-gray-700 leading-relaxed mb-5">{summary}</p>
                <a href={href} className="inline-flex items-center font-semibold text-[#0A1E3D] hover:text-teal-700">
                  {label} <i className="ri-arrow-right-line ml-2" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default TrackRecord;
