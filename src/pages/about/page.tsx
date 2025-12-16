import { Suspense } from 'react';

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-corporate-blue-700 via-corporate-blue-600 to-corporate-blue-800 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20international%20development%20organization%20team%20working%20together%20on%20global%20initiatives%2C%20diverse%20professionals%20collaborating%20in%20modern%20office%20environment%2C%20corporate%20business%20meeting%20with%20world%20map%20background%2C%20professional%20photography%20with%20natural%20lighting%20and%20modern%20aesthetic&width=1920&height=1080&seq=about-hero-bg&orientation=landscape)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue-900/85 via-corporate-blue-800/80 to-corporate-blue-900/85"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              About LDII
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Building global resilience through transformative leadership development, innovative research, and strategic partnerships that empower communities worldwide.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Livelihood Development International Initiatives (LDII) is a non-profit organization committed to creating a brighter future through the promotion of social cohesion and empowerment. We empower communities worldwide to thrive amidst systemic crises through transformative leadership development, innovative research, and strategic partnerships that build resilience against global shocks.
                </p>
                
                <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Focus Areas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line w-6 h-6 flex items-center justify-center text-tech-cyan-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">Climate resilience and environmental sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line w-6 h-6 flex items-center justify-center text-tech-cyan-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">Health systems strengthening and pandemic preparedness</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line w-6 h-6 flex items-center justify-center text-tech-cyan-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">Sustainable food systems and food security</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line w-6 h-6 flex items-center justify-center text-tech-cyan-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">Economic stability and trade development</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=International%20development%20professionals%20working%20on%20global%20initiatives%2C%20diverse%20team%20collaboration%20in%20modern%20office%2C%20professional%20business%20environment%20with%20technology%20and%20data%20visualization%2C%20corporate%20photography%20with%20natural%20lighting&width=600&height=800&seq=mission-img&orientation=portrait"
                  alt="LDII Mission"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-corporate-blue-600 text-white rounded-2xl p-8 shadow-xl">
                  <div className="text-5xl font-bold mb-2">10+</div>
                  <div className="text-lg font-semibold">Years<br />of Work Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                A world where communities are resilient, adaptive, and thriving in the face of global challenges, supported by evidence-based policies, innovative solutions, and collaborative partnerships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-government-line w-8 h-8 flex items-center justify-center text-tech-cyan-500"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Objectives</h3>
                <p className="text-gray-600">Influence global policy frameworks</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-community-line w-8 h-8 flex items-center justify-center text-tech-cyan-500"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Capacity Building</h3>
                <p className="text-gray-600">Build capacity in vulnerable communities</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-lightbulb-line w-8 h-8 flex items-center justify-center text-tech-cyan-500"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">Foster innovation and knowledge sharing</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-team-line w-8 h-8 flex items-center justify-center text-tech-cyan-500"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Partnerships</h3>
                <p className="text-gray-600">Strengthen global partnerships</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach addresses global challenges through six core activity areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-corporate-blue-600 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-megaphone-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advocacy & Policy Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lobby governmental and non-governmental organizations in Canada and globally, advocating for positive change in public policy and legislation to address Global Shocks.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-corporate-blue-600 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-book-open-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Knowledge Sharing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Organize high-impact international conferences, workshops, and publications to disseminate cutting-edge research and innovative solutions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-corporate-blue-600 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-bar-chart-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research & Data Collection</h3>
                <p className="text-gray-700 leading-relaxed">
                  Collect statistical information, conduct proprietary research, and serve as a clearing house for critical data related to global shocks.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-corporate-blue-600 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-handshake-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership & Collaboration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Actively partner with governmental organizations, diplomatic missions, and the private sector to improve lives and well-being worldwide.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-corporate-blue-600 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-file-list-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Program Development & Implementation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Develop and administer programs that promote our objectives, either independently or in collaboration with local and international partners.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-corporate-blue-600 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-group-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Engagement</h3>
                <p className="text-gray-700 leading-relaxed">
                  Raise awareness through workshops, seminars, and conferences on the holistic determinants of health including mental health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Global Presence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multi-country presence enables us to understand local contexts while maintaining global perspectives on interconnected challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line w-8 h-8 flex items-center justify-center text-tech-cyan-500"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Toronto, Canada</h3>
                    <p className="text-tech-cyan-500 font-semibold">Headquarters</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">3701 Chesswood Dr, #315, North York, ON M3J 2P6</p>
                <p className="text-gray-700 mb-4">Global strategy, policy development, and international partnerships</p>
                <p className="text-sm text-gray-500">Established: 2018</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line w-8 h-8 flex items-center justify-center text-tech-cyan-500"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Helsinki, Finland</h3>
                    <p className="text-tech-cyan-500 font-semibold">Liaison Office</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Regional Office - East Africa</p>
                <p className="text-gray-700 mb-4">Climate resilience, food security, and health systems strengthening</p>
                <p className="text-sm text-gray-500">Established: 2020</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line w-8 h-8 flex items-center justify-center text-tech-cyan-500"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Kampala, Uganda</h3>
                    <p className="text-tech-cyan-500 font-semibold">Liaison Office</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Regional Office - East Africa</p>
                <p className="text-gray-700 mb-4">Economic development, trade facilitation, and capacity building</p>
                <p className="text-sm text-gray-500">Established: 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse leadership team brings together decades of experience in international development, policy, and research.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20female%20executive%20director%2C%20international%20development%20leader%2C%20confident%20business%20woman%20in%20formal%20attire%2C%20professional%20headshot%20photography%2C%20leadership%20portrait&width=120&height=120&seq=leader-1&orientation=squarish"
                    alt="Dr. Sarah Johnson"
                    className="w-24 h-24 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Sarah Johnson</h3>
                    <p className="text-tech-cyan-500 font-semibold mb-2">Executive Director</p>
                    <p className="text-sm text-gray-600">15+ years experience</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Johnson leads LDII with a vision for transformative global health systems. Her extensive experience in policy development and international partnerships has shaped our strategic direction.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Expertise:</strong> Global Health Policy, International Development
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 rounded-2xl p-8 border border-corporate-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20male%20research%20director%2C%20senior%20scientist%2C%20academic%20professional%20in%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20research%20leadership%20portrait&width=120&height=120&seq=leader-2&orientation=squarish"
                    alt="Prof. Michael Chen"
                    className="w-24 h-24 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Prof. Michael Chen</h3>
                    <p className="text-tech-cyan-500 font-semibold mb-2">Director of Research</p>
                    <p className="text-sm text-gray-600">20+ years experience</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prof. Chen brings decades of climate research expertise to LDII. His groundbreaking work on climate resilience strategies informs our evidence-based approach to environmental challenges.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Expertise:</strong> Climate Science, Environmental Policy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 bg-gradient-to-br from-corporate-blue-600 to-corporate-blue-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Since our establishment, we have made significant contributions to global resilience building.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-tech-teal-300 mb-3">50+</div>
                <div className="text-white text-lg font-semibold">Countries Reached</div>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-tech-teal-300 mb-3">200+</div>
                <div className="text-white text-lg font-semibold">Research Publications</div>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-tech-teal-300 mb-3">1M+</div>
                <div className="text-white text-lg font-semibold">Lives Impacted</div>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-tech-teal-300 mb-3">150+</div>
                <div className="text-white text-lg font-semibold">Partner Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-12">
              Partner with us to build a more resilient world. Together, we can create lasting positive change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/partners#hero"
                className="bg-tech-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tech-teal-600 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
              >
                Become a Partner
              </a>
              <a
                href="/donate#hero"
                className="bg-corporate-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-corporate-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
              >
                Support Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
