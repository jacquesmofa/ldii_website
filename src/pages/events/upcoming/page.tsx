import { getUpcomingEvents } from '@/mocks/eventsData';

export default function UpcomingEventsPage() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Exciting%20upcoming%20international%20conference%20with%20modern%20venue%20setup%2C%20anticipation%20and%20preparation%20for%20major%20event%2C%20professional%20event%20planning%2C%20inspiring%20conference%20atmosphere%2C%20high-resolution%20photography&width=1920&height=800&seq=upcoming-hero&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join us at our upcoming conferences, summits, and forums designed to advance global resilience and create lasting positive change.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">2025-2026 Event Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these transformative events bringing together global leaders, experts, and changemakers.
            </p>
          </div>

          <div className="space-y-16">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} id={event.id} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                  <div className="p-10">
                    <div className="flex items-center flex-wrap gap-3 mb-4">
                      <span className="bg-[#00D9FF] text-[#0A1E3D] px-3 py-1 rounded-full text-sm font-semibold">
                        {event.type}
                      </span>
                      <span className="text-green-600 font-bold text-lg">{event.displayDate}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <div className="flex items-center mb-4">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                      <span className="text-gray-600 font-medium">{event.location}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                    
                    {event.attendees && (
                      <div className="flex items-center mb-6">
                        <i className="ri-team-line w-5 h-5 flex items-center justify-center text-green-600 mr-2"></i>
                        <span className="text-green-600 font-semibold">{event.attendees}</span>
                      </div>
                    )}

                    {event.highlights && event.themes && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-4">
                          <h4 className="font-bold text-gray-900 mb-3">Key Participants</h4>
                          <ul className="space-y-2">
                            {event.highlights.slice(0, 3).map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start text-sm">
                                <i className="ri-user-star-line w-4 h-4 flex items-center justify-center text-green-600 mr-2 mt-0.5 flex-shrink-0"></i>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white rounded-xl p-4">
                          <h4 className="font-bold text-gray-900 mb-3">Key Themes</h4>
                          <ul className="space-y-2">
                            {event.themes.slice(0, 3).map((theme, tIndex) => (
                              <li key={tIndex} className="flex items-start text-sm">
                                <i className="ri-lightbulb-line w-4 h-4 flex items-center justify-center text-green-600 mr-2 mt-0.5 flex-shrink-0"></i>
                                <span className="text-gray-700">{theme}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`/events/register/${event.id}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap text-center"
                      >
                        Register Interest
                      </a>
                      <a
                        href={`/events/details/${event.id}`}
                        className="bg-white hover:bg-gray-100 text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap text-center"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-event-line text-gray-400 text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Upcoming Events</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Check back soon for our next events. Subscribe to our newsletter to stay updated.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated on Our Events
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subscribe to receive early notifications about upcoming events, registration openings, and exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Subscribe to Updates
            </a>
            <a
              href="/events"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              View All Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}