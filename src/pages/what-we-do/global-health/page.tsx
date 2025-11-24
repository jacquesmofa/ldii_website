export default function GlobalHealthPage() {
  const challenges = [
    {
      title: 'Pandemic Preparedness',
      description: 'COVID-19 exposed critical gaps in global health systems, highlighting the urgent need for robust pandemic prevention and response mechanisms.',
      icon: 'ri-virus-line',
      stat: '7 million COVID-19 deaths globally'
    },
    {
      title: 'Healthcare Access Inequality',
      description: 'Half the world\'s population lacks access to essential health services, with stark disparities between and within countries.',
      icon: 'ri-hospital-line',
      stat: '50% lack essential health coverage'
    },
    {
      title: 'Chronic Disease Burden',
      description: 'Non-communicable diseases account for 71% of global deaths, requiring comprehensive prevention and management strategies.',
      icon: 'ri-heart-pulse-line',
      stat: '41 million deaths annually'
    },
    {
      title: 'Mental Health Crisis',
      description: 'Mental health disorders affect 1 in 8 people globally, yet mental health services remain severely underfunded and stigmatized.',
      icon: 'ri-brain-line',
      stat: '1 billion people affected'
    }
  ];

  const strategies = [
    {
      title: 'Health Systems Strengthening',
      description: 'Building robust, resilient health systems capable of delivering quality care to all populations.',
      icon: 'ri-hospital-line',
      initiatives: [
        'Primary healthcare infrastructure development',
        'Health workforce training and retention',
        'Medical supply chain optimization',
        'Health information systems modernization',
        'Quality assurance and accreditation programs'
      ]
    },
    {
      title: 'Universal Health Coverage',
      description: 'Ensuring everyone can access quality health services without financial hardship.',
      icon: 'ri-shield-cross-line',
      initiatives: [
        'Health insurance scheme development',
        'Subsidized care for vulnerable populations',
        'Essential medicines access programs',
        'Community health worker networks',
        'Mobile health clinics for remote areas'
      ]
    },
    {
      title: 'Disease Prevention & Control',
      description: 'Implementing evidence-based interventions to prevent and manage infectious and chronic diseases.',
      icon: 'ri-medicine-bottle-line',
      initiatives: [
        'Vaccination and immunization campaigns',
        'Disease surveillance and early warning systems',
        'Vector control and sanitation programs',
        'Chronic disease screening and management',
        'Health promotion and behavior change'
      ]
    },
    {
      title: 'Mental Health & Wellbeing',
      description: 'Addressing mental health needs through integrated, community-based approaches.',
      icon: 'ri-mental-health-line',
      initiatives: [
        'Mental health awareness and destigmatization',
        'Counseling and psychosocial support services',
        'Integration of mental health into primary care',
        'Crisis intervention and suicide prevention',
        'Workplace mental health programs'
      ]
    }
  ];

  const projects = [
    {
      title: 'Post-COVID Health System Recovery',
      location: 'Multiple Countries',
      description: 'Supporting health systems to recover from pandemic impacts while building resilience for future health emergencies.',
      beneficiaries: '500,000+ people',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20workers%20in%20modern%20medical%20facility%2C%20post-pandemic%20recovery%2C%20diverse%20medical%20team%2C%20advanced%20equipment%2C%20patient%20care%2C%20professional%20medical%20photography%20with%20hopeful%20atmosphere&width=600&height=400&seq=health-project-1&orientation=landscape'
    },
    {
      title: 'Community Health Worker Program',
      location: 'Rural East Africa',
      description: 'Training and deploying 1,000 community health workers to provide primary care and health education in underserved areas.',
      beneficiaries: '1,000 CHWs, 200,000 people',
      image: 'https://readdy.ai/api/search-image?query=African%20community%20health%20workers%20providing%20care%20in%20rural%20village%2C%20medical%20training%2C%20patient%20consultation%2C%20community%20healthcare%2C%20professional%20documentary%20photography&width=600&height=400&seq=health-project-2&orientation=landscape'
    },
    {
      title: 'Mental Health Support Initiative',
      location: 'Canada',
      description: 'Providing accessible mental health services to youth and newcomers, reducing stigma and improving wellbeing outcomes.',
      beneficiaries: '5,000+ individuals',
      image: 'https://readdy.ai/api/search-image?query=Diverse%20Canadian%20youth%20in%20mental%20health%20counseling%20session%2C%20supportive%20environment%2C%20professional%20therapist%2C%20safe%20space%2C%20hope%20and%20healing%2C%20professional%20photography&width=600&height=400&seq=health-project-3&orientation=landscape'
    }
  ];

  const impactMetrics = [
    { number: '1M+', label: 'People Reached' },
    { number: '50+', label: 'Health Facilities Supported' },
    { number: '2,000+', label: 'Health Workers Trained' },
    { number: '25+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Global%20health%20systems%2C%20healthcare%20workers%2C%20medical%20facilities%2C%20pandemic%20preparedness%2C%20health%20resilience%2C%20universal%20healthcare%20access%2C%20professional%20medical%20photography&width=1920&height=1080&seq=health-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Global Health &amp; Resilience
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Advancing global health outcomes, particularly underscored by post-COVID needs. We focus on targeted interventions and ensuring universal access to high-quality healthcare services for all.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Health Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The COVID-19 pandemic revealed critical vulnerabilities in global health systems. Building resilient, equitable health systems is more urgent than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${challenge.icon} w-6 h-6 flex items-center justify-center text-red-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{challenge.description}</p>
                    <p className="text-red-600 font-semibold text-sm">{challenge.stat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work to strengthen health systems, expand access to care, and build resilience against future health threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${strategy.icon} w-6 h-6 flex items-center justify-center text-red-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{strategy.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{strategy.description}</p>
                  </div>
                </div>
                <div className="ml-16">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Initiatives:</h4>
                  <ul className="space-y-2">
                    {strategy.initiatives.map((initiative, initIndex) => (
                      <li key={initIndex} className="flex items-start space-x-2">
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5"></i>
                        <span className="text-gray-700">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Health Programs in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our health initiatives are improving access to care and building resilient health systems worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-red-600"></i>
                    <span className="text-red-600 font-semibold">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-red-800 font-semibold text-sm">Impact: {project.beneficiaries}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Health Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Measurable improvements in health outcomes and system resilience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{metric.number}</div>
                <div className="font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Healthcare%20professionals%20working%20together%2C%20medical%20teamwork%2C%20health%20system%20strengthening%2C%20professional%20medical%20photography%2C%20hope%20and%20healing&width=1920&height=800&seq=health-cta&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Support Global Health
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Help us build resilient health systems and ensure everyone has access to quality healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partners#donate"
              className="relative z-20 bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Support Our Work
            </a>
            <a
              href="/contact"
              className="relative z-20 bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}