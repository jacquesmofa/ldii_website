
export default function FocusAreasPage() {
  const focusAreas = [
    {
      title: 'Climate Crisis Response',
      description: 'We develop crisis-proof social structures that directly address environmental challenges, including droughts, resource scarcity, and climate-related disasters.',
      icon: 'ri-leaf-line',
      details: [
        'Protection and resilience building for disadvantaged groups: children, women, minorities, and at-risk populations',
        'Climate adaptation strategies for vulnerable communities',
        'Sustainable resource management systems',
        'Disaster risk reduction and preparedness programs'
      ],
      achievement: 'Successfully organized the planting of over half a million trees globally',
      image: 'https://readdy.ai/api/search-image?query=Climate%20action%20and%20environmental%20protection%20with%20renewable%20energy%20infrastructure%2C%20solar%20panels%20and%20wind%20turbines%20in%20green%20landscape%2C%20sustainable%20development%20in%20action%2C%20professional%20photography%20with%20bright%20natural%20lighting%20and%20hopeful%20atmosphere&width=600&height=400&seq=climate-action&orientation=landscape'
    },
    {
      title: 'Global Health Systems',
      description: 'We strengthen pandemic preparedness and public health infrastructure to ensure a robust response to future global infections and health crises.',
      icon: 'ri-heart-pulse-line',
      details: [
        'Advocacy for universal access to healthcare',
        'Prevention and treatment of preventable diseases',
        'Health equity promotion and policy development',
        'Community health resilience building'
      ],
      achievement: 'Supported health system strengthening in 25+ countries',
      image: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20facility%20with%20diverse%20medical%20professionals%20providing%20care%2C%20advanced%20medical%20equipment%2C%20multicultural%20healthcare%20team%2C%20professional%20medical%20photography%20with%20clean%20bright%20lighting%20and%20caring%20atmosphere&width=600&height=400&seq=health-systems&orientation=landscape'
    },
    {
      title: 'Sustainable Food Systems',
      description: 'We work to ensure sustainable food systems that can withstand trade wars and climate-induced instability.',
      icon: 'ri-plant-line',
      details: [
        'Food scarcity challenges and supply chain resilience',
        'Agricultural sustainability and technology transfer',
        'Nutrition security and community-based food solutions',
        'Sustainable farming practices and crop diversification'
      ],
      achievement: 'Improved food security for 200,000+ farmers across Africa',
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20agriculture%20with%20diverse%20crops%20growing%20in%20fertile%20fields%2C%20modern%20farming%20techniques%2C%20farmers%20working%20with%20advanced%20agricultural%20technology%2C%20abundant%20harvest%2C%20professional%20photography%20with%20warm%20natural%20lighting&width=600&height=400&seq=food-systems&orientation=landscape'
    },
    {
      title: 'Health Systems and Resilience',
      description: 'Building robust health infrastructure that can withstand and respond effectively to global health emergencies and systemic shocks.',
      icon: 'ri-shield-cross-line',
      details: [
        'Emergency response capacity building',
        'Health workforce development and training',
        'Medical supply chain resilience',
        'Digital health innovation and telemedicine'
      ],
      achievement: 'Trained 5,000+ healthcare workers in crisis response',
      image: 'https://readdy.ai/api/search-image?query=Emergency%20medical%20response%20team%20in%20action%2C%20healthcare%20workers%20in%20protective%20equipment%2C%20modern%20medical%20emergency%20facility%2C%20professional%20medical%20response%2C%20high-quality%20photography%20with%20dramatic%20lighting%20showing%20healthcare%20resilience&width=600&height=400&seq=health-resilience&orientation=landscape'
    },
    {
      title: 'Trade & Economic Development',
      description: 'We promote sustainable economic frameworks that minimize the impact of trade wars and tariffs, fostering long-term stability.',
      icon: 'ri-exchange-line',
      details: [
        'Fair trade practices and market access for disadvantaged communities',
        'Economic empowerment programs and trade policy advocacy',
        'Cross-border collaboration initiatives',
        'Small business development and entrepreneurship support'
      ],
      achievement: 'Facilitated $50M+ in fair trade agreements',
      image: 'https://readdy.ai/api/search-image?query=International%20trade%20and%20economic%20development%20with%20diverse%20business%20professionals%20in%20modern%20trading%20floor%2C%20global%20commerce%2C%20multicultural%20business%20meeting%2C%20professional%20photography%20with%20dynamic%20lighting%20showing%20economic%20prosperity&width=600&height=400&seq=trade-development&orientation=landscape'
    },
    {
      title: 'Investment & Social Enterprise',
      description: 'We facilitate responsible and resilient investment practices that create lasting impact and capacity for self-sufficiency.',
      icon: 'ri-funds-line',
      details: [
        'Social enterprise development and public-private partnerships',
        'Sustainable investment practices aligned with ESG criteria',
        'Capacity building for community economic development',
        'Impact measurement and evaluation frameworks'
      ],
      achievement: 'Mobilized $100M+ in sustainable investments',
      image: 'https://readdy.ai/api/search-image?query=Social%20enterprise%20and%20sustainable%20investment%20with%20diverse%20entrepreneurs%20and%20investors%20collaborating%2C%20modern%20business%20incubator%2C%20innovative%20social%20impact%20projects%2C%20professional%20photography%20with%20inspiring%20lighting%20showing%20economic%20empowerment&width=600&height=400&seq=social-investment&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Comprehensive%20global%20development%20showing%20multiple%20focus%20areas%20including%20climate%20action%2C%20healthcare%2C%20agriculture%2C%20technology%2C%20and%20economic%20development%2C%20diverse%20communities%20working%20together%2C%20professional%20photography%20with%20inspiring%20lighting%20and%20hopeful%20atmosphere&width=1920&height=800&seq=focus-areas-hero&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Focus Areas
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Building Global Resilience through strategic interventions across six critical areas designed to counter systemic "Global Shocks."
          </p>
        </div>
      </section>

      {/* Focus Areas Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Strategic Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each focus area is designed to proactively counter the impacts of systemic "Global Shocks" through comprehensive, evidence-based interventions.
            </p>
          </div>
          
          <div className="space-y-20">
            {focusAreas.map((area, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
                      <i className={`${area.icon} text-3xl text-[#00D9FF]`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Interventions:</h4>
                    <ul className="space-y-3">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-1"></i>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Key Achievement:</h4>
                    <p className="text-green-800">{area.achievement}</p>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cross-Cutting Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach across all focus areas creates synergistic effects that amplify our impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Countries Engaged</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Programs Implemented</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">$200M+</div>
              <div className="text-gray-600 font-medium">Resources Mobilized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Guiding Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work across all focus areas is guided by these fundamental principles that ensure sustainable and equitable outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-leaf-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Stewardship</h3>
              <p className="text-gray-700">Protecting and preserving our planet for future generations.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-700">Proactively identifying and addressing potential threats.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-lightbulb-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-700">Embracing cutting-edge solutions and creative approaches.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-heart-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health and Well-being</h3>
              <p className="text-gray-700">Prioritizing the physical and mental health of all communities.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-shield-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-700">Ensuring secure environments for all stakeholders.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-recycle-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-700">Creating long-term solutions that endure and adapt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner Across Our Focus Areas
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us in building comprehensive resilience across all critical areas of global development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partners"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Partnerships
            </a>
            <a
              href="/research"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Our Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
