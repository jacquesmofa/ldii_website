
export default function WhatWeDoPage() {
  const focusAreas = [
    {
      title: 'Climate Action & Mitigation',
      description: 'Addressing the profound impacts of climate change through comprehensive strategies that tackle underlying causes, build resilient communities, and promote sustainable environmental practices worldwide.',
      icon: 'ri-leaf-line',
      link: '/what-we-do/climate-action',
      image: 'https://readdy.ai/api/search-image?query=Climate%20action%20and%20renewable%20energy%20with%20wind%20turbines%20and%20solar%20panels%20in%20beautiful%20natural%20landscape%2C%20environmental%20sustainability%2C%20green%20technology%2C%20professional%20photography%20with%20dramatic%20sky%20and%20vibrant%20colors&width=600&height=400&seq=climate-focus&orientation=landscape',
      stats: { projects: '50+', beneficiaries: '500K+', countries: '15' }
    },
    {
      title: 'Poverty Eradication & Inclusive Growth',
      description: 'Comprehensive strategies targeting the root causes of poverty while empowering individuals and communities through sustainable economic development, skills training, and inclusive growth initiatives.',
      icon: 'ri-hand-heart-line',
      link: '/what-we-do/poverty-eradication',
      image: 'https://readdy.ai/api/search-image?query=Economic%20empowerment%20and%20poverty%20eradication%20with%20diverse%20people%20in%20business%20training%2C%20microfinance%20activities%2C%20community%20development%2C%20African%20and%20Asian%20communities%20thriving%2C%20professional%20documentary%20photography&width=600&height=400&seq=poverty-focus&orientation=landscape',
      stats: { projects: '75+', beneficiaries: '1M+', countries: '20' }
    },
    {
      title: 'Sustainable Food Systems',
      description: 'Promoting food security through innovative agricultural practices, climate-smart farming, and resilient food systems that address the intricate interplay between agriculture, climate change, and poverty.',
      icon: 'ri-plant-line',
      link: '/what-we-do/sustainable-food',
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20agriculture%20with%20farmers%20working%20in%20organized%20crop%20fields%2C%20modern%20irrigation%20systems%2C%20food%20security%20initiatives%2C%20climate-smart%20farming%2C%20professional%20agricultural%20photography%20with%20golden%20hour%20lighting&width=600&height=400&seq=food-focus&orientation=landscape',
      stats: { projects: '60+', beneficiaries: '750K+', countries: '18' }
    },
    {
      title: 'Global Health & Resilience',
      description: 'Advancing global health outcomes through targeted interventions, pandemic preparedness, health systems strengthening, and ensuring universal access to high-quality healthcare services.',
      icon: 'ri-heart-pulse-line',
      link: '/what-we-do/global-health',
      image: 'https://readdy.ai/api/search-image?query=Global%20health%20and%20healthcare%20services%20with%20medical%20professionals%20providing%20care%20in%20modern%20facilities%2C%20community%20health%20workers%2C%20pandemic%20preparedness%2C%20diverse%20patients%20receiving%20treatment%2C%20professional%20healthcare%20photography&width=600&height=400&seq=health-focus&orientation=landscape',
      stats: { projects: '45+', beneficiaries: '2M+', countries: '25' }
    },
    {
      title: 'Communication & Digital Inclusion',
      description: 'Building inclusive knowledge societies through enhanced communication infrastructure, digital literacy programs, promoting freedom of expression, and ensuring universal access to information and technology.',
      icon: 'ri-global-line',
      link: '/what-we-do/digital-inclusion',
      image: 'https://readdy.ai/api/search-image?query=Digital%20inclusion%20and%20technology%20access%20with%20diverse%20people%20using%20computers%20and%20digital%20devices%2C%20technology%20training%20centers%2C%20internet%20connectivity%2C%20digital%20literacy%20programs%2C%20professional%20technology%20photography&width=600&height=400&seq=digital-focus&orientation=landscape',
      stats: { projects: '40+', beneficiaries: '300K+', countries: '12' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Global%20development%20and%20international%20cooperation%20with%20diverse%20communities%20working%20together%20on%20sustainable%20development%20projects%2C%20environmental%20conservation%2C%20healthcare%2C%20education%2C%20professional%20documentary%20photography%20with%20inspiring%20atmosphere&width=1920&height=800&seq=whatwedo-hero&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We Do
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Building global resilience through comprehensive programs addressing climate change, poverty, food security, health, and digital inclusion across five interconnected focus areas.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Approach</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At LDII, we recognize that global challenges are interconnected and require holistic solutions. Our work spans five critical focus areas, each designed to address fundamental barriers to sustainable development and build lasting resilience in communities worldwide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through evidence-based interventions, strategic partnerships, and community-centered approaches, we create sustainable impact that transforms lives and strengthens communities across more than 50 countries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">270+</div>
              <div className="text-gray-700 font-medium">Active Projects</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.5M+</div>
              <div className="text-gray-700 font-medium">People Impacted</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Five Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive programs designed to create lasting positive change across critical development sectors.
            </p>
          </div>

          <div className="space-y-20">
            {focusAreas.map((area, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                        <i className={`${area.icon} w-8 h-8 flex items-center justify-center text-white`}></i>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{area.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">{area.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">{area.stats.projects}</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{area.stats.beneficiaries}</div>
                        <div className="text-sm text-gray-600">Beneficiaries</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{area.stats.countries}</div>
                        <div className="text-sm text-gray-600">Countries</div>
                      </div>
                    </div>
                    
                    <a
                      href={area.link}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
                    </a>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                      onError={(e) => {
                        console.warn(`Failed to load image for ${area.title}`);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Cutting Themes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cross-Cutting Themes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work is guided by fundamental principles that ensure inclusive, sustainable, and equitable development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-women-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gender Equality</h3>
              <p className="text-gray-700 leading-relaxed">
                Ensuring women and girls have equal access to opportunities, resources, and decision-making power in all our programs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-team-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Youth Empowerment</h3>
              <p className="text-gray-700 leading-relaxed">
                Investing in young people as agents of change through education, skills development, and leadership opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-recycle-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-700 leading-relaxed">
                Creating long-term solutions that protect the environment while meeting present and future community needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-scales-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equity & Inclusion</h3>
              <p className="text-gray-700 leading-relaxed">
                Prioritizing marginalized and vulnerable populations to ensure no one is left behind in development progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Building Global Resilience
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with us to create sustainable solutions for the world's most pressing challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partners"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Partner With Us
            </a>
            <a
              href="/contact"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
