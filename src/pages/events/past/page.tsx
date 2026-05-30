import { getPastEvents } from '@/mocks/eventsData';

export default function PastEventsPage() {
  const pastEvents = getPastEvents();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Past%20conferences%20and%20events%2C%20professional%20conference%20setting%2C%20international%20gatherings%2C%20professional%20event%20photography&width=1920&height=1080&seq=past-events-hero&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Past Events & Resources
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Explore the outcomes, resources, and lasting impact of our previous conferences and events.
          </p>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Event Archive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive documentation, reports, and resources from our past events.
            </p>
          </div>

          <div className="space-y-16">
            {pastEvents.map((event) => (
              <div key={event.id} id={event.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
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
                        {event.displayDate}
                      </span>
                      {event.attendees && (
                        <span className="text-blue-600 font-semibold">{event.attendees}</span>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <div className="flex items-center mb-2">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                    {event.venue && (
                      <div className="flex items-center mb-4">
                        <i className="ri-building-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                        <span className="text-gray-600">{event.venue}</span>
                      </div>
                    )}
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                    
                    {event.countries && (
                      <div className="flex items-center mb-6">
                        <i className="ri-global-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                        <span className="text-blue-600 font-semibold">{event.countries}</span>
                      </div>
                    )}
                  </div>
                </div>

                {(event.outcomes || event.speakers || event.resources) && (
                  <div className="bg-gray-50 p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {event.outcomes && (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">Key Outcomes</h4>
                          <ul className="space-y-3">
                            {event.outcomes.map((outcome, oIndex) => (
                              <li key={oIndex} className="flex items-start">
                                <i className="ri-check-double-line w-5 h-5 flex items-center justify-center text-green-600 mr-2 mt-0.5 flex-shrink-0"></i>
                                <span className="text-gray-700 text-sm">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {event.speakers && (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">Featured Speakers</h4>
                          <ul className="space-y-3">
                            {event.speakers.map((speaker, sIndex) => (
                              <li key={sIndex} className="flex items-start">
                                <i className="ri-user-star-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2 mt-0.5 flex-shrink-0"></i>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm block">{speaker.name}</span>
                                  <span className="text-gray-600 text-xs">{speaker.role}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {event.resources && (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">Resources</h4>
                          <ul className="space-y-3">
                            {event.resources.map((resource, rIndex) => (
                              <li key={rIndex}>
                                <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                  <div className="flex items-center">
                                    <i className={`${resource.type === 'PDF' ? 'ri-file-pdf-line' : 'ri-image-line'} w-5 h-5 flex items-center justify-center text-blue-600 mr-2`}></i>
                                    <span className="text-gray-700 text-sm font-medium">{resource.title}</span>
                                  </div>
                                  <span className="text-gray-500 text-xs">{resource.size}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {pastEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-event-line text-gray-400 text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Past Events</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Check out our upcoming events to see what is coming next.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-gradient-to-br from-[#0A1E3D] to-[#0A1E3D] relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Conference%20and%20event%20participation%2C%20professional%20networking%2C%20international%20collaboration%2C%20professional%20photography&width=1920&height=800&seq=past-events-cta&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Next Event
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of our upcoming conferences and contribute to building global resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events/upcoming"
              className="relative z-20 bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              View Upcoming Events
            </a>
            <a
              href="/events/gallery"
              className="relative z-20 bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Browse Photo Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}