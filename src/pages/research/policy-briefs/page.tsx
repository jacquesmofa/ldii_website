export default function PolicyBriefsPage() {
  const policyBriefs = [
    {
      title: 'Global Shocks and Systemic Resilience: A Framework for the 21st Century',
      authors: 'Dr. Sarah Johnson, Prof. Michael Chen, Dr. Amara Okafor',
      date: 'December 2024',
      pages: 45,
      downloads: '15,000+',
      image: 'https://readdy.ai/api/search-image?query=Professional%20policy%20brief%20cover%20with%20global%20network%20visualization%2C%20international%20development%20policy%20document%2C%20modern%20academic%20publication%20design%20with%20charts%20and%20world%20map&width=400&height=550&seq=policy-1&orientation=portrait',
      abstract: 'This comprehensive policy brief outlines a new framework for understanding and responding to global shocks in an increasingly interconnected world. Drawing on case studies from the COVID-19 pandemic, climate disasters, and economic crises, the brief provides actionable recommendations for policymakers at local, national, and international levels. Key recommendations include establishing early warning systems, building redundancy into critical systems, strengthening international cooperation mechanisms, and investing in community-level resilience.',
      keyRecommendations: [
        'Establish integrated early warning systems for multiple shock types',
        'Create national resilience funds with dedicated budgets',
        'Strengthen international cooperation frameworks',
        'Invest in community-based resilience building',
        'Develop adaptive governance structures',
        'Build redundancy into critical infrastructure'
      ],
      targetAudience: 'National governments, international organizations, policy makers'
    },
    {
      title: 'Climate Adaptation Finance: Bridging the Gap for Vulnerable Communities',
      authors: 'James Rodriguez, Dr. Fatima Al-Rashid, Prof. David Kim',
      date: 'November 2024',
      pages: 38,
      downloads: '12,500+',
      image: 'https://readdy.ai/api/search-image?query=Climate%20finance%20policy%20document%20cover%20with%20environmental%20imagery%2C%20green%20finance%20and%20adaptation%20themes%2C%20professional%20policy%20brief%20design&width=400&height=550&seq=policy-2&orientation=portrait',
      abstract: 'This policy brief examines the critical gap between climate adaptation financing needs and available resources, particularly for vulnerable communities in developing countries. The brief analyzes current financing mechanisms, identifies barriers to access, and proposes innovative solutions including community-based adaptation funds, climate insurance schemes, and blended finance approaches. Special attention is given to ensuring that financing reaches the most vulnerable populations.',
      keyRecommendations: [
        'Simplify access procedures for adaptation funds',
        'Establish community-based adaptation financing',
        'Develop climate insurance schemes for vulnerable regions',
        'Increase grant-based financing for adaptation',
        'Strengthen local capacity for fund management',
        'Create blended finance mechanisms'
      ],
      targetAudience: 'Finance ministries, climate funds, development banks'
    },
    {
      title: 'Post-Pandemic Health Systems: Lessons and Recommendations',
      authors: 'Dr. Amara Okafor, Prof. Lisa Zhang, Dr. Carlos Mendez',
      date: 'October 2024',
      pages: 52,
      downloads: '18,000+',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20policy%20document%20cover%20with%20medical%20imagery%2C%20health%20systems%20strengthening%2C%20professional%20policy%20brief%20design%20with%20healthcare%20themes&width=400&height=550&seq=policy-3&orientation=portrait',
      abstract: 'Drawing on lessons from the COVID-19 pandemic, this policy brief provides comprehensive recommendations for strengthening health systems to better prepare for and respond to future health crises. The brief examines successful interventions, identifies persistent gaps, and proposes a framework for building resilient health systems. Key areas include surge capacity, supply chain resilience, health workforce development, and community health systems.',
      keyRecommendations: [
        'Build surge capacity into health systems',
        'Strengthen health supply chain resilience',
        'Invest in health workforce development',
        'Establish community health worker networks',
        'Implement digital health record systems',
        'Create regional health cooperation mechanisms'
      ],
      targetAudience: 'Health ministries, WHO, health system managers'
    },
    {
      title: 'Digital Inclusion for Sustainable Development: Policy Pathways',
      authors: 'Dr. Priya Sharma, Kwame Mensah, Prof. Sarah Johnson',
      date: 'September 2024',
      pages: 42,
      downloads: '14,000+',
      image: 'https://readdy.ai/api/search-image?query=Digital%20inclusion%20policy%20document%20cover%20with%20technology%20imagery%2C%20digital%20transformation%20themes%2C%20professional%20policy%20brief%20design&width=400&height=550&seq=policy-4&orientation=portrait',
      abstract: 'This policy brief examines the critical role of digital inclusion in achieving sustainable development goals. The brief analyzes barriers to digital access, successful digital inclusion initiatives, and policy approaches that have proven effective. Recommendations focus on infrastructure development, digital literacy programs, affordable access, and creating enabling regulatory environments. Special attention is given to reaching marginalized populations.',
      keyRecommendations: [
        'Invest in digital infrastructure in underserved areas',
        'Implement universal digital literacy programs',
        'Ensure affordable internet access',
        'Create enabling regulatory frameworks',
        'Support local digital content creation',
        'Establish digital innovation hubs'
      ],
      targetAudience: 'ICT ministries, telecommunications regulators, development agencies'
    },
    {
      title: 'Women\'s Economic Empowerment: Evidence-Based Policy Approaches',
      authors: 'Grace Nakato, Dr. Fatima Al-Rashid, Prof. Michael Chen',
      date: 'August 2024',
      pages: 40,
      downloads: '16,000+',
      image: 'https://readdy.ai/api/search-image?query=Women%20empowerment%20policy%20document%20cover%20with%20women%20in%20business%20imagery%2C%20gender%20equality%20themes%2C%20professional%20policy%20brief%20design&width=400&height=550&seq=policy-5&orientation=portrait',
      abstract: 'Based on extensive research and program evaluation, this policy brief provides evidence-based recommendations for advancing women\'s economic empowerment. The brief examines successful interventions in microfinance, business training, and market access, while addressing systemic barriers including legal frameworks, social norms, and access to resources. Recommendations are tailored for different contexts and development stages.',
      keyRecommendations: [
        'Reform legal frameworks to ensure equal economic rights',
        'Expand access to finance for women entrepreneurs',
        'Provide comprehensive business development services',
        'Address unpaid care work burden',
        'Promote women in leadership positions',
        'Create women-friendly market access mechanisms'
      ],
      targetAudience: 'Gender ministries, finance institutions, development agencies'
    },
    {
      title: 'Sustainable Food Systems: Policy Framework for Resilience',
      authors: 'Prof. David Kim, James Rodriguez, Dr. Sarah Johnson',
      date: 'July 2024',
      pages: 48,
      downloads: '13,500+',
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20agriculture%20policy%20document%20cover%20with%20farming%20imagery%2C%20food%20security%20themes%2C%20professional%20policy%20brief%20design&width=400&height=550&seq=policy-6&orientation=portrait',
      abstract: 'This policy brief presents a comprehensive framework for building sustainable and resilient food systems that can withstand climate shocks, economic disruptions, and other challenges. The brief examines the interconnections between agriculture, climate change, nutrition, and livelihoods, providing integrated policy recommendations. Special focus is given to smallholder farmers and vulnerable populations.',
      keyRecommendations: [
        'Promote climate-smart agriculture practices',
        'Strengthen agricultural extension services',
        'Improve market access for smallholder farmers',
        'Invest in agricultural research and innovation',
        'Establish food security safety nets',
        'Support diversified farming systems'
      ],
      targetAudience: 'Agriculture ministries, FAO, agricultural development agencies'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Policy%20research%20and%20analysis%2C%20professional%20research%20environment%2C%20policy%20documents%20and%20analysis%2C%20professional%20photography&width=1920&height=1080&seq=policy-hero&orientation=landscape)`
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Policy Briefs
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Evidence-based policy recommendations addressing critical global development challenges.
          </p>
        </div>
      </section>

      {/* Policy Briefs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Policy Briefs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive policy analysis and actionable recommendations for decision-makers worldwide.
            </p>
          </div>

          <div className="space-y-12">
            {policyBriefs.map((brief, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-10">
                  <div className="lg:col-span-1">
                    <img
                      src={brief.image}
                      alt={brief.title}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Pages:</span>
                        <span className="font-semibold">{brief.pages}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Downloads:</span>
                        <span className="font-semibold">{brief.downloads}</span>
                      </div>
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2">
                        <i className="ri-download-line w-5 h-5 flex items-center justify-center"></i>
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <div className="flex items-center mb-4">
                      <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold mr-3">
                        Policy Brief
                      </span>
                      <span className="text-indigo-600 font-semibold">{brief.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{brief.title}</h3>
                    <p className="text-gray-600 mb-6">{brief.authors}</p>
                    
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Abstract</h4>
                      <p className="text-gray-700 leading-relaxed">{brief.abstract}</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Recommendations</h4>
                      <ul className="space-y-3">
                        {brief.keyRecommendations.map((rec, rIndex) => (
                          <li key={rIndex} className="flex items-start">
                            <i className="ri-checkbox-circle-line w-5 h-5 flex items-center justify-center text-indigo-600 mr-3 mt-0.5 flex-shrink-0"></i>
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-purple-900 mb-2">Target Audience</h4>
                      <p className="text-purple-800">{brief.targetAudience}</p>
                    </div>
                  </div>
                </div>
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
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Evidence-based%20policy%20research%2C%20professional%20research%20environment%2C%20policy%20analysis%20and%20documentation%2C%20professional%20photography&width=1920&height=800&seq=policy-cta&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Inform Policy with Evidence
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Access our full library of policy briefs and research publications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/research/publications"
              className="relative z-20 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Browse All Publications
            </a>
            <a
              href="/contact"
              className="relative z-20 bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Request Custom Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
