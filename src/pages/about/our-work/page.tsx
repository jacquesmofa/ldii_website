import { useState, useEffect } from 'react';

export default function OurWorkPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Professional%20international%20development%20work%20in%20action%2C%20diverse%20team%20of%20experts%20working%20on%20global%20projects%2C%20field%20work%20and%20office%20collaboration%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=our-work-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Global%20development%20programs%20implementation%2C%20community%20engagement%2C%20sustainable%20development%20initiatives%2C%20international%20cooperation%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=our-work-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Policy%20advocacy%20and%20research%20work%2C%20international%20conferences%2C%20knowledge%20sharing%2C%20global%20partnerships%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=our-work-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const coreActivities = [
    {
      title: 'Advocacy & Policy Development',
      description: 'Lobby governmental and non-governmental organizations in Canada and globally, advocating for positive change in public policy and legislation to address Global Shocks.',
      icon: 'ri-government-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20government%20policy%20advocacy%20meeting%20with%20diverse%20stakeholders%20discussing%20legislative%20reforms%2C%20modern%20conference%20room%20setting%2C%20official%20government%20building%20interior%2C%20professional%20photography%20with%20natural%20lighting%2C%20policy%20documents%20and%20presentations%20visible%2C%20collaborative%20atmosphere%20representing%20democratic%20governance%20and%20public%20policy%20development&width=600&height=400&seq=advocacy-policy&orientation=landscape',
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
      image: 'https://readdy.ai/api/search-image?query=International%20conference%20with%20diverse%20participants%20engaged%20in%20knowledge%20sharing%20workshop%2C%20modern%20auditorium%20with%20large%20screens%20displaying%20research%20presentations%2C%20professional%20educational%20setting%2C%20attendees%20taking%20notes%20and%20networking%2C%20high-quality%20photography%20with%20excellent%20lighting%2C%20representing%20global%20education%20and%20capacity%20building%20initiatives&width=600&height=400&seq=education-knowledge&orientation=landscape',
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
      image: 'https://readdy.ai/api/search-image?query=Research%20team%20analyzing%20global%20data%20and%20statistics%20on%20multiple%20computer%20screens%2C%20modern%20data%20analytics%20center%2C%20professional%20researchers%20working%20with%20charts%20and%20graphs%2C%20high-tech%20research%20facility%2C%20collaborative%20data%20science%20environment%2C%20professional%20photography%20with%20bright%20lighting%2C%20representing%20evidence-based%20research%20and%20statistical%20analysis&width=600&height=400&seq=research-data&orientation=landscape',
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
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%20between%20international%20leaders%2C%20diverse%20group%20of%20executives%20and%20diplomats%20collaborating%20on%20global%20initiatives%2C%20modern%20corporate%20meeting%20room%2C%20formal%20partnership%20signing%20ceremony%2C%20professional%20photography%20with%20excellent%20lighting%2C%20representing%20multi-stakeholder%20collaboration%20and%20strategic%20partnerships&width=600&height=400&seq=partnership-collab&orientation=landscape',
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
      image: 'https://readdy.ai/api/search-image?query=International%20development%20program%20implementation%20in%20action%2C%20field%20workers%20and%20local%20communities%20collaborating%20on%20sustainable%20development%20projects%2C%20professional%20program%20managers%20coordinating%20activities%2C%20modern%20project%20management%20setting%20with%20planning%20boards%20and%20timelines%2C%20high-quality%20photography%20representing%20effective%20program%20delivery%20and%20community%20engagement&width=600&height=400&seq=program-development&orientation=landscape',
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
      image: 'https://readdy.ai/api/search-image?query=Community%20engagement%20workshop%20with%20diverse%20local%20residents%20participating%20in%20health%20awareness%20seminar%2C%20grassroots%20community%20center%20setting%2C%20facilitators%20leading%20interactive%20discussions%2C%20inclusive%20and%20welcoming%20atmosphere%2C%20professional%20photography%20with%20warm%20lighting%2C%20representing%20community%20empowerment%20and%20public%20health%20education%20initiatives&width=600&height=400&seq=community-engagement&orientation=landscape',
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
      image: 'https://readdy.ai/api/search-image?query=Professional%20fundraising%20event%20with%20donors%20and%20stakeholders%20networking%2C%20corporate%20philanthropy%20gala%20with%20elegant%20setting%2C%20development%20officers%20presenting%20impact%20reports%20to%20potential%20funders%2C%20modern%20fundraising%20campaign%20materials%20and%20presentations%2C%20high-quality%20photography%20representing%20resource%20mobilization%20and%20donor%20engagement%20for%20global%20development&width=600&height=400&seq=fundraising-resource&orientation=landscape',
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
      {/* Hero Section with Slideshow */}
      <section id="hero" className="relative py-24 bg-gradient-to-br from-corporate-blue-900 to-corporate-blue-700 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive approaches to building global resilience through research, advocacy, partnerships, and innovative solutions.
          </p>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
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
                    <div className="w-16 h-16 bg-[#0A1E3D]/10 rounded-full flex items-center justify-center mr-6">
                      <i className={`${activity.icon} w-8 h-8 flex items-center justify-center text-[#00D9FF]`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{activity.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{activity.description}</p>
                  <ul className="space-y-3">
                    {activity.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-[#00D9FF]"></i>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-80 object-cover object-top"
                    />
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
      <section className="py-20 bg-gradient-to-br from-[#0A1E3D] to-[#1a3a5f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Measurable results from our comprehensive approach to global resilience building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">150+</div>
              <div className="text-white/90 font-medium">Policy Briefs Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">75+</div>
              <div className="text-white/90 font-medium">International Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">500+</div>
              <div className="text-white/90 font-medium">Leaders Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">25+</div>
              <div className="text-white/90 font-medium">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%20diverse%20team%20collaboration%20global%20network%20connection%20modern%20office%20environment%20corporate%20teamwork%20international%20cooperation%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=partnership-cta-bg&orientation=landscape)'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0A1E3D]/90"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our global network of partners working to build resilience against systemic shocks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/partners#hero"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Partnerships
            </a>
            <a
              href="/contact#hero"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
