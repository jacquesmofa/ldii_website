
export default function ResearchPage() {
  const researchAreas = [
    {
      title: 'Global Shock Analysis',
      description: 'Comprehensive research on systemic risks and their interconnected impacts across multiple sectors.',
      publications: 25,
      icon: 'ri-earthquake-line'
    },
    {
      title: 'Climate Resilience',
      description: 'Evidence-based research on climate adaptation strategies and community resilience building.',
      publications: 18,
      icon: 'ri-temp-hot-line'
    },
    {
      title: 'Health Systems Strengthening',
      description: 'Research on pandemic preparedness, health equity, and sustainable health infrastructure.',
      publications: 22,
      icon: 'ri-hospital-line'
    },
    {
      title: 'Economic Stability',
      description: 'Analysis of trade policies, economic shocks, and sustainable development frameworks.',
      publications: 20,
      icon: 'ri-line-chart-line'
    }
  ];

  const featuredPublications = [
    {
      title: 'Global Shocks and Systemic Resilience: A Framework for the 21st Century',
      authors: 'Dr. Sarah Johnson, Prof. Michael Chen, Dr. Amara Okafor',
      date: 'December 2024',
      type: 'Policy Brief',
      abstract: 'This comprehensive policy brief outlines a new framework for understanding and responding to global shocks, providing actionable recommendations for policymakers worldwide.',
      downloads: '15,000+',
      image: 'https://readdy.ai/api/search-image?query=Professional%20academic%20research%20publication%20cover%20with%20global%20network%20visualization%2C%20policy%20document%20design%2C%20international%20development%20theme%2C%20high-quality%20graphic%20design%20with%20modern%20typography&width=300&height=400&seq=research-1&orientation=portrait'
    },
    {
      title: 'Climate Adaptation Strategies for Vulnerable Communities',
      authors: 'James Rodriguez, Dr. Fatima Al-Rashid, Prof. David Kim',
      date: 'November 2024',
      type: 'Research Report',
      abstract: 'An in-depth analysis of successful climate adaptation strategies implemented in vulnerable communities across Africa, Asia, and Latin America.',
      downloads: '12,500+',
      image: 'https://readdy.ai/api/search-image?query=Climate%20research%20report%20cover%20with%20environmental%20imagery%2C%20scientific%20data%20visualization%2C%20climate%20adaptation%20themes%2C%20professional%20academic%20publication%20design&width=300&height=400&seq=research-2&orientation=portrait'
    },
    {
      title: 'Post-Pandemic Health System Transformation',
      authors: 'Dr. Amara Okafor, Prof. Lisa Zhang, Dr. Carlos Mendez',
      date: 'October 2024',
      type: 'White Paper',
      abstract: 'Comprehensive analysis of health system transformations following the COVID-19 pandemic, with recommendations for building resilient health infrastructure.',
      downloads: '18,000+',
      image: 'https://readdy.ai/api/search-image?query=Medical%20research%20white%20paper%20cover%20with%20healthcare%20imagery%2C%20health%20system%20visualization%2C%20professional%20medical%20publication%20design%20with%20clean%20modern%20layout&width=300&height=400&seq=research-3&orientation=portrait'
    }
  ];

  const dataResources = [
    {
      title: 'Global Resilience Index',
      description: 'Comprehensive database tracking resilience indicators across 195 countries.',
      lastUpdated: 'January 2025',
      records: '50,000+',
      access: 'Open Access'
    },
    {
      title: 'Climate Risk Assessment Database',
      description: 'Detailed climate risk assessments for vulnerable regions worldwide.',
      lastUpdated: 'December 2024',
      records: '25,000+',
      access: 'Registered Access'
    },
    {
      title: 'Health System Performance Metrics',
      description: 'Real-time data on health system performance and pandemic preparedness.',
      lastUpdated: 'January 2025',
      records: '75,000+',
      access: 'Partner Access'
    }
  ];

  const researchPartners = [
    'Harvard Kennedy School',
    'Oxford Global Governance Institute',
    'London School of Economics',
    'University of Toronto',
    'African Development Bank',
    'World Health Organization',
    'United Nations Development Programme',
    'Brookings Institution'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Modern%20research%20facility%20with%20diverse%20international%20researchers%20working%20on%20global%20challenges%2C%20advanced%20data%20visualization%20screens%2C%20collaborative%20research%20environment%2C%20professional%20photography%20with%20bright%20lighting%20and%20academic%20atmosphere&width=1920&height=800&seq=research-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Research
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Evidence-based research driving policy innovation and practical solutions for global resilience building.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research spans critical areas of global development, providing evidence-based insights for policy and practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <i className={`${area.icon} w-8 h-8 flex items-center justify-center text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{area.description}</p>
                <div className="text-green-600 font-semibold">{area.publications} Publications</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our latest research publications providing cutting-edge insights into global challenges and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPublications.map((publication, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                      {publication.type}
                    </span>
                    <span className="text-gray-500 text-sm">{publication.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{publication.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{publication.authors}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{publication.abstract}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold text-sm">{publication.downloads} downloads</span>
                    <a
                      href={`/research/publications/${publication.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-green-600 hover:text-green-700 font-semibold cursor-pointer"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Data & Statistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive databases and statistical resources supporting evidence-based decision making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataResources.map((resource, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{resource.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated:</span>
                    <span className="font-semibold">{resource.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Records:</span>
                    <span className="font-semibold">{resource.records}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Access:</span>
                    <span className={`font-semibold ${resource.access === 'Open Access' ? 'text-green-600' : resource.access === 'Registered Access' ? 'text-blue-600' : 'text-orange-600'}`}>
                      {resource.access}
                    </span>
                  </div>
                </div>
                <a
                  href={`/research/data/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block"
                >
                  Access Database
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research directly influences policy decisions and practical interventions worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Policy Adoptions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100K+</div>
              <div className="text-gray-600 font-medium">Research Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Research Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading academic institutions and research organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchPartners.map((partner, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-gray-800">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Collaborate on Research
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our global research network and contribute to evidence-based solutions for global challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/research/collaborate"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Research Collaboration
            </a>
            <a
              href="/research/publications"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Browse All Publications
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
