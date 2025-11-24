
export default function AboutPage() {
  const coreActivities = [
    {
      title: 'Advocacy & Policy Development',
      description: 'Lobby governmental and non-governmental organizations in Canada and globally, advocating for positive change in public policy and legislation to address Global Shocks.',
      icon: 'ri-government-line'
    },
    {
      title: 'Education & Knowledge Sharing',
      description: 'Organize high-impact international conferences, workshops, and publications to disseminate cutting-edge research and innovative solutions.',
      icon: 'ri-book-open-line'
    },
    {
      title: 'Research & Data Collection',
      description: 'Collect statistical information, conduct proprietary research, and serve as a clearing house for critical data related to global shocks.',
      icon: 'ri-bar-chart-line'
    },
    {
      title: 'Partnership & Collaboration',
      description: 'Actively partner with governmental organizations, diplomatic missions, and the private sector to improve lives and well-being worldwide.',
      icon: 'ri-team-line'
    },
    {
      title: 'Program Development & Implementation',
      description: 'Develop and administer programs that promote our objectives, either independently or in collaboration with local and international partners.',
      icon: 'ri-settings-line'
    },
    {
      title: 'Community Engagement',
      description: 'Raise awareness through workshops, seminars, and conferences on the holistic determinants of health including mental health.',
      icon: 'ri-community-line'
    }
  ];

  const globalOffices = [
    {
      location: 'Toronto, Canada',
      type: 'Headquarters',
      address: '3701 Chesswood Dr, #315, North York, ON M3J 2P6',
      focus: 'Global strategy, policy development, and international partnerships',
      established: '2018'
    },
    {
      location: 'Helsinki, Finland',
      type: 'Liaison Office',
      address: 'Regional Office - East Africa',
      focus: 'Climate resilience, food security, and health systems strengthening',
      established: '2020'
    },
    {
      location: 'Kampala, Uganda',
      type: 'Liaison Office',
      address: 'Regional Office - East Africa',
      focus: 'Economic development, trade facilitation, and capacity building',
      established: '2021'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Executive Director',
      expertise: 'Global Health Policy, International Development',
      experience: '15+ years',
      bio: 'Dr. Johnson leads LDII with a vision for transformative global health systems. Her extensive experience in policy development and international partnerships has shaped our strategic direction.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20woman%20executive%20director%20in%20business%20attire%2C%20confident%20leadership%20portrait%2C%20international%20development%20background%2C%20professional%20headshot%20photography&width=300&height=400&seq=leader-1&orientation=portrait'
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Director of Research',
      expertise: 'Climate Science, Environmental Policy',
      experience: '20+ years',
      bio: 'Prof. Chen brings decades of climate research expertise to LDII. His groundbreaking work on climate resilience strategies informs our evidence-based approach to environmental challenges.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20research%20director%20in%20academic%20setting%2C%20scholarly%20appearance%2C%20climate%20science%20background%2C%20professional%20portrait%20photography&width=300&height=400&seq=leader-2&orientation=portrait'
    },
    {
      name: 'Dr. Amara Okafor',
      position: 'Director of Programs',
      expertise: 'Public Health, Community Development',
      experience: '12+ years',
      bio: 'Dr. Okafor oversees all program implementation with a focus on community-centered approaches. Her passion for grassroots development ensures our programs create lasting impact.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20woman%20program%20director%20in%20healthcare%20setting%2C%20community%20development%20background%2C%20warm%20professional%20portrait%20photography&width=300&height=400&seq=leader-3&orientation=portrait'
    },
    {
      name: 'James Rodriguez',
      position: 'Director of Partnerships',
      expertise: 'International Relations, Strategic Partnerships',
      experience: '18+ years',
      bio: 'James builds and maintains our global network of partners. His diplomatic expertise and relationship-building skills have expanded LDII\'s reach across continents.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20male%20partnerships%20director%20in%20diplomatic%20setting%2C%20international%20relations%20background%2C%20confident%20professional%20portrait%20photography&width=300&height=400&seq=leader-4&orientation=portrait'
    },
    {
      name: 'Dr. Fatima Al-Rashid',
      position: 'Director of Finance & Operations',
      expertise: 'Financial Management, Organizational Development',
      experience: '14+ years',
      bio: 'Dr. Al-Rashid ensures financial sustainability and operational excellence across all LDII initiatives. Her strategic financial planning supports our mission-driven work.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Middle%20Eastern%20woman%20finance%20director%20in%20business%20attire%2C%20financial%20expertise%20background%2C%20confident%20professional%20portrait%20photography&width=300&height=400&seq=leader-5&orientation=portrait'
    },
    {
      name: 'David Thompson',
      position: 'Director of Communications',
      expertise: 'Strategic Communications, Public Relations',
      experience: '16+ years',
      bio: 'David leads our global communications strategy, ensuring our message reaches diverse audiences. His expertise in storytelling amplifies the voices of communities we serve.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20male%20communications%20director%20in%20media%20setting%2C%20public%20relations%20background%2C%20engaging%20professional%20portrait%20photography&width=300&height=400&seq=leader-6&orientation=portrait'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Director of Innovation & Technology',
      expertise: 'Digital Innovation, Technology Solutions',
      experience: '13+ years',
      bio: 'Dr. Sharma drives technological innovation in our programs and operations. Her vision for digital inclusion and tech-enabled solutions transforms how we deliver impact.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20South%20Asian%20woman%20technology%20director%20in%20modern%20tech%20office%2C%20innovation%20background%2C%20professional%20portrait%20photography&width=300&height=400&seq=leader-7&orientation=portrait'
    }
  ];

  const organizationalValues = [
    {
      title: 'Global Perspective',
      description: 'We approach challenges with a comprehensive understanding of interconnected global systems and their local impacts.',
      icon: 'ri-global-line'
    },
    {
      title: 'Evidence-Based Solutions',
      description: 'Our interventions are grounded in rigorous research, data analysis, and proven methodologies.',
      icon: 'ri-microscope-line'
    },
    {
      title: 'Collaborative Partnership',
      description: 'We believe in the power of multi-stakeholder partnerships to create sustainable and scalable impact.',
      icon: 'ri-handshake-line'
    },
    {
      title: 'Innovation & Adaptation',
      description: 'We continuously evolve our approaches to meet emerging challenges and leverage new opportunities.',
      icon: 'ri-lightbulb-line'
    },
    {
      title: 'Equity & Inclusion',
      description: 'We prioritize marginalized communities and ensure equitable access to resources and opportunities.',
      icon: 'ri-scales-line'
    },
    {
      title: 'Sustainability',
      description: 'We design programs and policies that create lasting positive change for current and future generations.',
      icon: 'ri-leaf-line'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Diverse%20international%20team%20of%20professionals%20working%20together%20on%20global%20development%20projects%2C%20modern%20office%20environment%20with%20world%20map%2C%20collaborative%20atmosphere%2C%20professional%20photography%20with%20warm%20lighting&width=1920&height=800&seq=about-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About LDII
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Building global resilience through transformative leadership development, innovative research, and strategic partnerships that empower communities worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Livelihood Development International Initiatives (LDII) is a non-profit organization committed to creating a brighter future through the promotion of social cohesion and empowerment. We empower communities worldwide to thrive amidst systemic crises through transformative leadership development, innovative research, and strategic partnerships that build resilience against global shocks.
              </p>
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Core Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-green-700">Climate resilience and environmental sustainability</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-green-700">Health systems strengthening and pandemic preparedness</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-green-700">Sustainable food systems and food security</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-green-700">Economic stability and trade development</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-award-line w-8 h-8 flex items-center justify-center text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-900">30+ Years</p>
                    <p className="text-blue-700 font-medium">of Work Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A world where communities are resilient, adaptive, and thriving in the face of global challenges, supported by evidence-based policies, innovative solutions, and collaborative partnerships.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategic Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <i className="ri-target-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-gray-700">Influence global policy frameworks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-target-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-gray-700">Build capacity in vulnerable communities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-target-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-gray-700">Foster innovation and knowledge sharing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-target-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-gray-700">Strengthen global partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses global challenges through six core activity areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${activity.icon} w-8 h-8 flex items-center justify-center text-green-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-700 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-country presence enables us to understand local contexts while maintaining global perspectives on interconnected challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalOffices.map((office, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{office.location}</h3>
                    <span className="text-green-600 font-semibold text-sm">{office.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{office.address}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{office.focus}</p>
                <div className="text-green-600 font-semibold text-sm">Established: {office.established}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse leadership team brings together decades of experience in international development, policy, and research.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{leader.position}</p>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">{leader.bio}</p>
                  <p className="text-gray-600 text-sm mb-2"><strong>Expertise:</strong> {leader.expertise}</p>
                  <p className="text-gray-600 text-sm">{leader.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide our work and define our approach to building global resilience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizationalValues.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${value.icon} w-8 h-8 flex items-center justify-center text-green-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Since our establishment, we have made significant contributions to global resilience building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90 font-medium">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/90 font-medium">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-white/90 font-medium">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-white/90 font-medium">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Partner with us to build a more resilient world. Together, we can create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partners"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Become a Partner
            </a>
            <a
              href="/support"
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
