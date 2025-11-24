export default function DigitalInclusionPage() {
  const challenges = [
    {
      title: 'Digital Divide',
      description: 'Nearly 3 billion people remain offline, lacking access to the internet and digital technologies that are increasingly essential for participation in modern society.',
      icon: 'ri-wifi-off-line',
      stat: '37% of global population offline'
    },
    {
      title: 'Information Inequality',
      description: 'Unequal access to information and knowledge perpetuates social and economic disparities, limiting opportunities for marginalized communities.',
      icon: 'ri-book-line',
      stat: '2.6 billion lack internet access'
    },
    {
      title: 'Digital Literacy Gap',
      description: 'Even with access to technology, many lack the skills needed to effectively use digital tools and navigate online information.',
      icon: 'ri-computer-line',
      stat: '60% lack basic digital skills'
    },
    {
      title: 'Freedom of Expression',
      description: 'Restrictions on media freedom and online censorship limit access to diverse information and suppress democratic participation.',
      icon: 'ri-chat-delete-line',
      stat: '180+ countries restrict press freedom'
    }
  ];

  const strategies = [
    {
      title: 'Digital Infrastructure',
      description: 'Expanding internet connectivity and digital infrastructure to underserved communities.',
      icon: 'ri-global-line',
      initiatives: [
        'Community internet access points',
        'Affordable broadband expansion',
        'Mobile connectivity in rural areas',
        'Public WiFi networks',
        'Digital infrastructure investment advocacy'
      ]
    },
    {
      title: 'Digital Literacy Programs',
      description: 'Building capacity to effectively use digital technologies and navigate the online world.',
      icon: 'ri-graduation-cap-line',
      initiatives: [
        'Basic computer skills training',
        'Internet safety and security education',
        'Media literacy and critical thinking',
        'Digital entrepreneurship training',
        'Online learning platform development'
      ]
    },
    {
      title: 'Knowledge Sharing',
      description: 'Promoting open access to information and facilitating knowledge exchange across communities.',
      icon: 'ri-share-line',
      initiatives: [
        'Open educational resources development',
        'Community knowledge platforms',
        'Multilingual content creation',
        'Digital libraries and archives',
        'Research publication accessibility'
      ]
    },
    {
      title: 'Freedom & Pluralism',
      description: 'Advocating for freedom of expression, media pluralism, and universal access to information.',
      icon: 'ri-megaphone-line',
      initiatives: [
        'Press freedom advocacy',
        'Independent media support',
        'Digital rights protection',
        'Anti-censorship initiatives',
        'Journalist safety programs'
      ]
    }
  ];

  const projects = [
    {
      title: 'Community Digital Hub Network',
      location: 'Rural Communities',
      description: 'Establishing 50 digital hubs providing internet access, computer training, and digital services to underserved rural populations.',
      beneficiaries: '25,000+ people',
      image: 'https://readdy.ai/api/search-image?query=Rural%20community%20digital%20learning%20center%2C%20diverse%20people%20using%20computers%2C%20internet%20access%2C%20digital%20literacy%20training%2C%20modern%20technology%20hub%2C%20professional%20photography&width=600&height=400&seq=digital-project-1&orientation=landscape'
    },
    {
      title: 'Digital Skills for Newcomers',
      location: 'Canada',
      description: 'Training newcomers in essential digital skills for employment, education, and social integration in Canadian society.',
      beneficiaries: '3,000+ newcomers',
      image: 'https://readdy.ai/api/search-image?query=Diverse%20newcomers%20in%20Canadian%20digital%20skills%20training%20class%2C%20computer%20learning%2C%20instructor%20support%2C%20multicultural%20classroom%2C%20professional%20photography&width=600&height=400&seq=digital-project-2&orientation=landscape'
    },
    {
      title: 'Open Knowledge Platform',
      location: 'Global',
      description: 'Creating multilingual online platform providing free educational resources, reaching learners in 50+ countries.',
      beneficiaries: '100,000+ learners',
      image: 'https://readdy.ai/api/search-image?query=People%20from%20different%20countries%20accessing%20online%20learning%20platform%2C%20diverse%20students%20using%20tablets%20and%20laptops%2C%20global%20education%2C%20digital%20knowledge%20sharing%2C%20professional%20photography&width=600&height=400&seq=digital-project-3&orientation=landscape'
    }
  ];

  const impactMetrics = [
    { number: '150,000+', label: 'People Connected' },
    { number: '75+', label: 'Digital Hubs Established' },
    { number: '10,000+', label: 'People Trained' },
    { number: '50+', label: 'Countries Reached' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Digital%20inclusion%20and%20technology%20access%2C%20people%20using%20computers%20and%20internet%2C%20digital%20literacy%20training%2C%20technology%20education%2C%20bridging%20digital%20divide%2C%20professional%20technology%20photography&width=1920&height=1080&seq=digital-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Communication &amp; Digital Inclusion
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Communication and information are essential pillars for building inclusive knowledge societies, promoting freedom of expression, pluralism, and universal access to information.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Digital Divide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In our increasingly digital world, access to information and communication technologies is essential for social and economic participation. Yet billions remain excluded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${challenge.icon} w-6 h-6 flex items-center justify-center text-purple-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{challenge.description}</p>
                    <p className="text-purple-600 font-semibold text-sm">{challenge.stat}</p>
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
              We work to bridge the digital divide and ensure everyone can access, use, and benefit from information and communication technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${strategy.icon} w-6 h-6 flex items-center justify-center text-purple-600`}></i>
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
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5"></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Inclusion in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are connecting communities and empowering people through digital access and literacy.
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
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-purple-600"></i>
                    <span className="text-purple-600 font-semibold">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-purple-800 font-semibold text-sm">Impact: {project.beneficiaries}</p>
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
            <h2 className="text-4xl font-bold mb-6">Our Digital Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Measurable progress in bridging the digital divide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-white/90 font-medium">{metric.label}</div>
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
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Digital%20empowerment%20and%20technology%20access%2C%20people%20learning%20technology%2C%20digital%20literacy%2C%20professional%20technology%20photography%2C%20hope%20and%20progress&width=1920&height=800&seq=digital-cta&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bridge the Digital Divide
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Help us ensure everyone has access to the information and technologies they need to thrive.
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
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}