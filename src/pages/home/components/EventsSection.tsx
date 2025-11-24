
export default function EventsSection() {
  const upcomingEvents = [
    {
      title: 'Global Shocks Global South Conference 2026',
      date: '2026',
      location: 'TBA',
      description: 'Premier international conference addressing systemic global challenges and building resilience strategies specifically for Global South nations.',
      image: 'https://readdy.ai/api/search-image?query=International%20conference%20with%20diverse%20Global%20South%20delegates%2C%20professional%20conference%20setting%20in%20Angola%2C%20speakers%20on%20stage%2C%20networking%20and%20collaboration%2C%20modern%20African%20conference%20venue%2C%20high-quality%20event%20photography&width=400&height=250&seq=global-south-2026&orientation=landscape',
      type: 'Conference'
    },
    {
      title: 'International Cultural Resilience Conference 2026',
      date: 'November, 2026',
      location: 'Accra, Ghana',
      description: 'Exploring the role of cultural heritage and traditional knowledge in building community resilience and sustainable development.',
      image: 'https://readdy.ai/api/search-image?query=Cultural%20conference%20in%20Ghana%20with%20traditional%20African%20elements%2C%20diverse%20cultural%20representatives%2C%20modern%20conference%20facility%20with%20cultural%20decorations%2C%20professional%20event%20photography%20with%20vibrant%20colors&width=400&height=250&seq=cultural-2026&orientation=landscape',
      type: 'Cultural Conference'
    },
    {
      title: 'Climate Resilience Summit 2026',
      date: 'April , 2026',
      location: 'Helsinki, Finland',
      description: 'Regional summit focusing on Fintech and Technology Transfer, Education, Business Trade & investments between the Global North and Global South, With a focus on East Africa and the Nordics',
      image: 'https://readdy.ai/api/search-image?query=Climate%20resilience%20summit%20with%20environmental%20experts%2C%20educational%20training%20session%2C%20environmental%20sustainability%2C%20group%20learning%2C%20professional%20workshop%20photography%20in%20Kenya&width=400&height=250&seq=climate-summit-2026&orientation=landscape',
      type: 'Summit'
    }
  ];

  const recentNews = [
    {
      title: '2nd International Post-COVID Conference: Remarkable Success',
      date: 'September 2024',
      excerpt: 'Our most recent major event achieved outstanding results with 500+ delegates and 20 policy recommendations.',
      category: 'Achievement'
    },
    {
      title: 'LDII Announces Exciting 2026 Conference Series',
      date: 'January 2025',
      excerpt: 'Global Shocks Global South Conference and Cultural Resilience Conference among major events planned for 2026.',
      category: 'Announcement'
    },
    {
      title: 'Partnership with Leading Climate Organizations Expanded',
      date: 'December 2024',
      excerpt: 'New strategic partnerships to accelerate climate resilience initiatives across Africa and North America.',
      category: 'Partnership'
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative"
      style={{
        backgroundImage: `url(https://readdy.ai/api/search-image?query=Professional%20corporate%20background%20with%20modern%20geometric%20patterns%2C%20light%20green%20and%20white%20gradient%2C%20elegant%20business%20aesthetic%2C%20clean%20minimalist%20design%2C%20soft%20professional%20lighting%2C%20contemporary%20office%20environment%2C%20high-quality%20corporate%20photography%20with%20subtle%20texture&width=1920&height=1200&seq=corporate-events-bg&orientation=landscape)`
      }}
    >
      <div className="absolute inset-0 bg-green-50/85"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Events & Latest News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our upcoming events and latest developments in global resilience
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border border-green-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {event.type}
                      </span>
                      <span className="text-gray-500 text-sm">{event.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                    <div className="flex items-center text-gray-600 mb-3">
                      <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-2"></i>
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent News */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h3>
            <div className="space-y-6">
              {recentNews.map((news, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-green-600 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{news.excerpt}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="/events"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap shadow-lg"
              >
                View All News & Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
