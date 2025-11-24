
export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Global Shocks Global South Conference 2026',
      date: '2026',
      location: 'TBA',
      description: 'Premier international conference addressing systemic global challenges and building resilience strategies specifically for Global South nations.',
      type: 'Major Conference',
      attendees: '1000+ expected',
      image: 'https://readdy.ai/api/search-image?query=Large%20international%20conference%20venue%20in%20Angola%20with%20modern%20architecture%2C%20Global%20South%20delegates%20and%20speakers%2C%20professional%20event%20setup%20with%20multiple%20screens%20and%20stage%2C%20African%20cultural%20elements%20integrated%20into%20modern%20design%2C%20high-resolution%20photography%20with%20excellent%20lighting&width=600&height=400&seq=global-south-conference&orientation=landscape'
    },
    {
      title: 'Cultural Resilience One Planet Conference (CROP) 2026',
      date: 'November, 2026',
      location: 'Sydney Australia',
      description: 'Exploring the role of cultural heritage and traditional knowledge in building community resilience and sustainable development.',
      type: 'Cultural Conference',
      attendees: '500+ expected',
      image: 'https://readdy.ai/api/search-image?query=Cultural%20conference%20in%20Ghana%20with%20traditional%20African%20elements%2C%20diverse%20cultural%20representatives%2C%20modern%20conference%20facility%20with%20cultural%20decorations%2C%20professional%20event%20photography%20with%20vibrant%20colors%20and%20cultural%20displays&width=600&height=400&seq=cultural-conference&orientation=landscape'
    },
    {
      title: 'Nordic East Africa Business Economic Corporation. NEABEC 2026',
      date: 'April , 2026',
      location: 'Helsinki, Finland',
      description: 'Regional summit focusing on Fintech and Technology Transfer, Education, Business Trade & investments between the Global North and Global South, With a focus on East Africa and the Nordics',
      type: 'Regional Summit',
      attendees: '300+ expected',
      image: 'https://readdy.ai/api/search-image?query=Modern%20conference%20center%20in%20Nairobi%20with%20sustainable%20architecture%2C%20climate-focused%20summit%20setup%2C%20African%20delegates%20in%20professional%20attire%2C%20environmental%20themes%20in%20venue%20decoration%2C%20professional%20event%20photography&width=600&height=400&seq=nairobi-summit&orientation=landscape'
    },
    {
      title: 'Global Shocks Global Resilience',
      date: 'September, 2026',
      location: 'TBA, Canada',
      description: 'Intensive workshop on pandemic preparedness and health system resilience for policy makers and health professionals.',
      type: 'International Conference',
      attendees: '500+ expected',
      image: 'https://readdy.ai/api/search-image?query=Professional%20health%20workshop%20in%20modern%20Toronto%20conference%20facility%2C%20medical%20professionals%20and%20policy%20makers%20in%20discussion%2C%20health-themed%20presentation%20materials%2C%20contemporary%20Canadian%20venue%2C%20high-quality%20event%20photography&width=600&height=400&seq=health-workshop&orientation=landscape'
    }
  ];

  const pastEvents = [
    {
      title: '2nd International Post-COVID Conference',
      date: 'September 8-10, 2024',
      location: 'Brampton, ON, Canada',
      description: 'Theme: Building Planetary Health in Response to Global Shocks. Major event that convened over 350+ delegates and global stakeholders to address post-pandemic recovery strategies and build resilience focused on the following: IT IS NO LONGER A QUESTION OF "IF", BUT WHEN WILL THE NEXT SHOCK WILL HIT THE WORLD? AS AI TAKES OVER, HOW SAFE IS HUMANITY? WHAT IS THE "FUTURE" OF LOCAL, REGIONAL, AND INTERNATIONAL TRADE WHO SHALL FEED THE WORLD?',
      attendees: '500+ delegates',
      outcomes: ['20 policy recommendations', '35 new partnerships', '5 major initiatives launched', 'Global Health Resilience Framework']
    },
    {
      title: '1st International Post-COVID Conference',
      date: 'July 15-17, 2024',
      location: 'Toronto, ON, Canada',
      description: 'Groundbreaking inaugural conference focused on global recovery and resilience strategies post-pandemic.',
      attendees: '300+ delegates',
      outcomes: ['Global Recovery Framework', '20 country commitments', 'Research collaboration network']
    },
    {
      title: 'African Leadership Forum',
      date: 'March 10-12, 2024',
      location: 'Accra, Ghana',
      description: 'Regional forum bringing together African leaders to discuss continental challenges and solutions.',
      attendees: '200+ leaders',
      outcomes: ['African Resilience Charter', '12 bilateral agreements', 'Youth leadership program']
    }
  ];

  const newsArticles = [
    {
      title: 'LDII Announces 2026 Conference Series: Global Shocks and Cultural Resilience',
      date: 'January 15, 2025',
      category: 'Conference News',
      excerpt: 'Exciting lineup of international conferences planned for 2026, including the Global Shocks Global South Conference and Cultural Resilience Conference.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20news%20announcement%20with%20LDII%20logo%20and%202026%20conference%20series%20imagery%2C%20modern%20press%20release%20design%2C%20international%20conference%20promotion%20materials%2C%20high-quality%20graphic%20design&width=400&height=300&seq=news-1&orientation=landscape'
    },
    {
      title: '2nd International Post-COVID Conference: Major Success with 500+ Delegates',
      date: 'September 15, 2024',
      category: 'Event Report',
      excerpt: 'The recent conference in Brampton achieved significant outcomes with 20 policy recommendations and 35 new international partnerships.',
      image: 'https://readdy.ai/api/search-image?query=Successful%20international%20conference%20with%20diverse%20delegates%2C%20conference%20highlights%20and%20achievements%2C%20professional%20event%20documentation%2C%20celebration%20of%20conference%20success&width=400&height=300&seq=news-2&orientation=landscape'
    },
    {
      title: 'New Research on Climate Resilience Published',
      date: 'December 20, 2024',
      category: 'Research',
      excerpt: 'Comprehensive study reveals key strategies for building community resilience against climate-related shocks.',
      image: 'https://readdy.ai/api/search-image?query=Climate%20research%20publication%20with%20scientific%20charts%20and%20graphs%2C%20environmental%20data%20visualization%2C%20professional%20academic%20publication%20design%2C%20research%20findings%20presentation&width=400&height=300&seq=news-3&orientation=landscape'
    },
    {
      title: 'Partnership Agreement with UN Development Programme',
      date: 'November 30, 2024',
      category: 'Partnerships',
      excerpt: 'Strategic partnership will enhance global capacity for crisis preparedness and response coordination.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20partnership%20signing%20ceremony%20between%20international%20organizations%2C%20diplomatic%20handshake%2C%20UN%20and%20LDII%20representatives%2C%20formal%20agreement%20signing%2C%20high-quality%20event%20photography&width=400&height=300&seq=news-4&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Dynamic%20international%20conference%20with%20diverse%20global%20participants%2C%20modern%20event%20venue%20with%20multiple%20screens%20and%20presentations%2C%20professional%20conference%20photography%2C%20multicultural%20audience%20engagement%2C%20high-resolution%20image%20with%20excellent%20lighting&width=1920&height=800&seq=events-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Events & News
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Stay connected with our latest conferences, workshops, and breaking news in global resilience building.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at our upcoming conferences, summits, and workshops designed to advance global resilience.
            </p>
          </div>
          
          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {event.type}
                      </span>
                      <span className="text-green-600 font-semibold">{event.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <div className="flex items-center mb-4">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                    <div className="flex items-center mb-6">
                      <i className="ri-team-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                      <span className="text-gray-600">{event.attendees}</span>
                    </div>
                    <a
                      href={`/events/register/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Past Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the outcomes and impact of our previous conferences and events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <span className="text-green-600 font-semibold text-sm">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <div className="flex items-center mb-3">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center text-gray-600 mr-2"></i>
                  <span className="text-gray-600 text-sm">{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                <div className="mb-4">
                  <span className="text-green-600 font-semibold text-sm">{event.attendees}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {event.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="text-gray-600 text-sm flex items-center">
                        <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600 mr-2"></i>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments in our work and global resilience initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{article.excerpt}</p>
                  <a
                    href={`/news/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-green-600 hover:text-green-700 font-semibold cursor-pointer"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive updates on upcoming events, latest research, and breaking news.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
