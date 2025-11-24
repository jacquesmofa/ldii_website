
export default function ClimateActionPage() {
  const challenges = [
    {
      title: 'Rising Sea Levels',
      description: 'Coastal communities face unprecedented threats from rising ocean levels, requiring immediate adaptation strategies.',
      icon: 'ri-water-flash-line',
      impact: '680 million people living in low-lying coastal zones'
    },
    {
      title: 'Extreme Weather Events',
      description: 'Increasing frequency and intensity of hurricanes, floods, droughts, and wildfires devastating communities worldwide.',
      icon: 'ri-thunderstorms-line',
      impact: 'Economic losses exceeding $200 billion annually'
    },
    {
      title: 'Temperature Extremes',
      description: 'Record-breaking heatwaves and cold snaps threatening public health, agriculture, and infrastructure.',
      icon: 'ri-temp-hot-line',
      impact: 'Over 12,000 heat-related deaths annually'
    },
    {
      title: 'Ecosystem Collapse',
      description: 'Biodiversity loss and ecosystem degradation undermining natural climate regulation systems.',
      icon: 'ri-plant-line',
      impact: '1 million species at risk of extinction'
    }
  ];

  const strategies = [
    {
      title: 'Renewable Energy Transition',
      description: 'Accelerating the shift from fossil fuels to clean, renewable energy sources to reduce greenhouse gas emissions.',
      icon: 'ri-sun-line',
      initiatives: [
        'Solar and wind energy infrastructure development',
        'Energy efficiency programs for communities',
        'Green technology innovation and deployment',
        'Policy advocacy for renewable energy adoption'
      ]
    },
    {
      title: 'Climate Resilience Building',
      description: 'Strengthening community capacity to adapt to and recover from climate-related shocks and stresses.',
      icon: 'ri-shield-check-line',
      initiatives: [
        'Early warning systems for extreme weather',
        'Climate-resilient infrastructure design',
        'Community-based adaptation planning',
        'Disaster risk reduction programs'
      ]
    },
    {
      title: 'Carbon Sequestration',
      description: 'Implementing nature-based solutions to capture and store atmospheric carbon dioxide.',
      icon: 'ri-leaf-line',
      initiatives: [
        'Reforestation and afforestation projects',
        'Wetland restoration and protection',
        'Sustainable land management practices',
        'Blue carbon ecosystem conservation'
      ]
    },
    {
      title: 'Climate Policy Advocacy',
      description: 'Influencing policy frameworks at local, national, and international levels to drive climate action.',
      icon: 'ri-government-line',
      initiatives: [
        'Evidence-based policy recommendations',
        'Stakeholder engagement and coalition building',
        'Climate finance mobilization',
        'International climate agreement support'
      ]
    }
  ];

  const projects = [
    {
      title: 'Coastal Community Resilience Program',
      location: 'East Africa',
      description: 'Building adaptive capacity in vulnerable coastal communities through infrastructure improvements and livelihood diversification.',
      beneficiaries: '50,000+ people',
      image: 'https://readdy.ai/api/search-image?query=African%20coastal%20community%20with%20climate%20resilient%20infrastructure%2C%20mangrove%20restoration%2C%20sustainable%20fishing%20practices%2C%20community%20members%20working%20together%20on%20adaptation%20projects%2C%20professional%20documentary%20photography&width=600&height=400&seq=climate-project-1&orientation=landscape'
    },
    {
      title: 'Urban Green Infrastructure Initiative',
      location: 'Canada',
      description: 'Implementing green roofs, urban forests, and sustainable drainage systems to mitigate urban heat islands and flooding.',
      beneficiaries: '200,000+ residents',
      image: 'https://readdy.ai/api/search-image?query=Modern%20Canadian%20city%20with%20green%20roofs%2C%20urban%20gardens%2C%20tree-lined%20streets%2C%20sustainable%20architecture%2C%20people%20enjoying%20green%20spaces%2C%20professional%20urban%20photography&width=600&height=400&seq=climate-project-2&orientation=landscape'
    },
    {
      title: 'Renewable Energy Access Project',
      location: 'Rural Communities',
      description: 'Providing off-grid solar solutions to remote communities, reducing reliance on fossil fuels and improving energy access.',
      beneficiaries: '30,000+ households',
      image: 'https://readdy.ai/api/search-image?query=Rural%20community%20with%20solar%20panels%20installation%2C%20clean%20energy%20access%2C%20families%20benefiting%20from%20renewable%20electricity%2C%20sustainable%20development%2C%20professional%20documentary%20photography&width=600&height=400&seq=climate-project-3&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Climate%20action%20and%20environmental%20sustainability%2C%20renewable%20energy%20wind%20turbines%20and%20solar%20panels%2C%20green%20technology%2C%20sustainable%20future%2C%20dramatic%20sky%20with%20hope%20and%20determination%2C%20professional%20environmental%20photography&width=1920&height=800&seq=climate-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Climate Action & Mitigation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Addressing the profound and far-reaching impacts of climate change through comprehensive strategies that tackle underlying causes and build resilient communities.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Climate Crisis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The impact of climate change is profound and far-reaching, affecting every aspect of human life and natural systems. Urgent action is needed to address the underlying causes and build resilience against its effects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${challenge.icon} w-6 h-6 flex items-center justify-center text-red-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{challenge.description}</p>
                    <p className="text-red-600 font-semibold text-sm">{challenge.impact}</p>
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
              We implement comprehensive strategies that address both mitigation and adaptation, working with communities to build resilience and reduce emissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${strategy.icon} w-6 h-6 flex items-center justify-center text-green-600`}></i>
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
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5"></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our climate action initiatives are making real impact in communities around the world.
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
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-green-600 font-semibold">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-green-800 font-semibold text-sm">Impact: {project.beneficiaries}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Climate Action Movement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Together, we can build a sustainable future and protect our planet for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partners#donate"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Support Our Work
            </a>
            <a
              href="/contact"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
