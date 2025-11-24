export default function OurWorkPage() {
  const coreActivities = [
    {
      title: 'Advocacy & Policy Development',
      description: 'Lobby governmental and non-governmental organizations in Canada and globally, advocating for positive change in public policy and legislation to address Global Shocks.',
      icon: 'ri-government-line',
      details: [
        'Policy brief development and dissemination',
        'Legislative advocacy at national and international levels',
        'Stakeholder engagement and coalition building',
        'Evidence-based policy recommendations'
      ]
    },
    {
      title: 'Education & Knowledge Sharing',
      description: 'Organize high-impact international conferences, workshops, and publications to disseminate cutting-edge research and innovative solutions.',
      icon: 'ri-book-open-line',
      details: [
        'International conferences and summits',
        'Capacity building workshops',
        'Research publications and reports',
        'Online learning platforms and resources'
      ]
    },
    {
      title: 'Research & Data Collection',
      description: 'Collect statistical information, conduct proprietary research, and serve as a clearing house for critical data related to global shocks.',
      icon: 'ri-bar-chart-line',
      details: [
        'Primary and secondary research studies',
        'Data collection and analysis',
        'Trend monitoring and forecasting',
        'Research methodology development'
      ]
    },
    {
      title: 'Partnership & Collaboration',
      description: 'Actively partner with governmental organizations, diplomatic missions, and the private sector to improve lives and well-being worldwide.',
      icon: 'ri-handshake-line',
      details: [
        'Strategic partnership development',
        'Multi-stakeholder initiatives',
        'Cross-sector collaboration',
        'International network building'
      ]
    },
    {
      title: 'Program Development & Implementation',
      description: 'Develop and administer programs that promote our objectives, either independently or in collaboration with local and international partners.',
      icon: 'ri-settings-line',
      details: [
        'Program design and planning',
        'Implementation and monitoring',
        'Impact assessment and evaluation',
        'Adaptive management approaches'
      ]
    },
    {
      title: 'Community Engagement',
      description: 'Raise awareness through workshops, seminars, and conferences on the holistic determinants of health including mental health.',
      icon: 'ri-community-line',
      details: [
        'Community outreach programs',
        'Public awareness campaigns',
        'Stakeholder consultation processes',
        'Grassroots mobilization initiatives'
      ]
    },
    {
      title: 'Fundraising & Resource Mobilization',
      description: 'Engage in comprehensive fundraising activities involving the general public, private sector, and stakeholders to advance our global mandate.',
      icon: 'ri-funds-line',
      details: [
        'Grant writing and proposal development',
        'Donor relationship management',
        'Corporate partnership development',
        'Crowdfunding and public campaigns'
      ]
    }
  ];

  const workAreas = [
    {
      title: 'Crisis Prevention & Preparedness',
      description: 'Building systems and capacities to anticipate and prevent global shocks before they occur.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20emergency%20operations%20center%20with%20multiple%20screens%20showing%20global%20data%20and%20crisis%20monitoring%20systems%2C%20professional%20staff%20coordinating%20disaster%20response%2C%20high-tech%20command%20center%2C%20professional%20photography%2C%20excellent%20lighting&width=400&height=300&seq=crisis-prevention&orientation=landscape'
    },
    {
      title: 'Resilience Building',
      description: 'Strengthening communities and institutions to withstand and recover from systemic shocks.',
      image: 'https://readdy.ai/api/search-image?query=Community%20resilience%20training%20session%20with%20diverse%20group%20of%20people%20learning%20disaster%20preparedness%20skills%2C%20professional%20workshop%20setting%2C%20collaborative%20learning%20environment%2C%20high-resolution%20photography&width=400&height=300&seq=resilience-building&orientation=landscape'
    },
    {
      title: 'Innovation & Technology',
      description: 'Leveraging cutting-edge technology and innovative approaches to address global challenges.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20technology%20innovation%20lab%20with%20researchers%20working%20on%20advanced%20solutions%20for%20global%20challenges%2C%20high-tech%20equipment%2C%20collaborative%20workspace%2C%20professional%20photography%2C%20bright%20lighting&width=400&height=300&seq=innovation-tech&orientation=landscape'
    },
    {
      title: 'Capacity Development',
      description: 'Building human and institutional capacity to effectively respond to global challenges.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20training%20session%20with%20international%20participants%20learning%20leadership%20and%20crisis%20management%20skills%2C%20modern%20conference%20room%2C%20diverse%20group%20of%20professionals%2C%20high-quality%20photography&width=400&height=300&seq=capacity-development&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Professional%20international%20development%20work%20in%20action%2C%20diverse%20team%20of%20experts%20working%20on%20global%20projects%2C%20field%20work%20and%20office%20collaboration%2C%20modern%20development%20initiatives%2C%20high-resolution%20photography%2C%20professional%20lighting%2C%20representing%20global%20cooperation%20and%20development%20work&width=1920&height=800&seq=our-work-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive approaches to building global resilience through research, advocacy, partnerships, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Core Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses global challenges through seven core activity areas.
            </p>
          </div>
          
          <div className="space-y-12">
            {coreActivities.map((activity, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-6">
                      <i className={`${activity.icon} w-8 h-8 flex items-center justify-center text-teal-600`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{activity.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{activity.description}</p>
                  <ul className="space-y-3">
                    {activity.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-teal-600"></i>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <i className={`${activity.icon} w-24 h-24 flex items-center justify-center text-teal-600`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Work Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused interventions across critical areas to build comprehensive global resilience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from our comprehensive approach to global resilience building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Policy Briefs Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">75+</div>
              <div className="text-gray-600 font-medium">International Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Leaders Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%20diverse%20team%20collaboration%20global%20network%20connection%20modern%20office%20environment%20corporate%20teamwork%20international%20cooperation%20success%20celebration&width=1200&height=400&seq=partnership-cta-bg&orientation=landscape)'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our global network of partners working to build resilience against systemic shocks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partners#hero"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Partnerships
            </a>
            <a
              href="/contact#hero"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
