import { useState, useEffect } from 'react';

export default function TechnologyAIResearchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Modern%20corporate%20boardroom%20with%20AI%20technology%20displays%2C%20business%20executives%20analyzing%20artificial%20intelligence%20data%20on%20large%20screens%2C%20futuristic%20technology%20integration%20in%20professional%20setting%2C%20ultra%20high%20definition%208k%20photography%20with%20dramatic%20lighting%20and%20glass%20architecture&width=1920&height=800&seq=tech-ai-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Advanced%20AI%20research%20laboratory%20with%20scientists%20working%20on%20machine%20learning%20algorithms%2C%20high-tech%20computer%20systems%2C%20neural%20network%20visualizations%2C%20cutting-edge%20technology%20research%20facility%2C%20ultra%20high%20definition%208k%20photography%20with%20blue%20and%20green%20lighting&width=1920&height=800&seq=tech-ai-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Global%20technology%20transfer%20conference%20with%20diverse%20international%20delegates%2C%20digital%20innovation%20showcase%2C%20corporate%20technology%20exhibition%20hall%2C%20professional%20networking%20event%2C%20ultra%20high%20definition%208k%20photography%20with%20modern%20architecture&width=1920&height=800&seq=tech-ai-hero-3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=AI%20governance%20meeting%20with%20policymakers%20and%20tech%20leaders%2C%20ethical%20AI%20discussion%2C%20regulatory%20framework%20development%2C%20international%20cooperation%20on%20artificial%20intelligence%2C%20ultra%20high%20definition%208k%20photography%20with%20professional%20conference%20setting&width=1920&height=800&seq=tech-ai-hero-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Innovation%20hub%20with%20startups%20developing%20AI%20solutions%2C%20technology%20incubator%20space%2C%20entrepreneurs%20working%20on%20artificial%20intelligence%20projects%2C%20modern%20coworking%20environment%2C%20ultra%20high%20definition%208k%20photography%20with%20vibrant%20creative%20atmosphere&width=1920&height=800&seq=tech-ai-hero-5&orientation=landscape'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
          </div>
        ))}
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Technology Transformation, AI Governance & Research
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Driving responsible innovation for a digital future through cutting-edge research, ethical AI governance, and strategic technology transformation for global development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap inline-block"
              >
                Partner With Us
              </a>
              <a
                href="#our-approach"
                className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1E3D] to-[#194A84] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed">
              To empower institutions and nations to design, govern, and deploy technology responsibly, unlocking productivity, resilience, and inclusive growth through trusted digital ecosystems.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
            <p className="text-lg text-white/95 leading-relaxed">
              We help governments, institutions, and enterprises navigate the complex frontier of emerging technologies by aligning digital transformation, artificial intelligence (AI), governance frameworks, and applied research into one integrated transformation agenda. Our work sits at the intersection of policy, platforms, people, and purpose—ensuring that digital innovation is not only fast and scalable, but also ethical, inclusive, secure, and economically transformative.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bridging Innovation and Impact
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In an era defined by rapid technological advancement, LDII stands at the forefront of ensuring that innovation serves humanity's greatest challenges. Our Technology Transformation, AI Governance, and Research initiative bridges the gap between cutting-edge technological development and practical, ethical implementation for global development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We work with governments, corporations, research institutions, and civil society to develop frameworks that promote responsible AI deployment, facilitate knowledge transfer across borders, and conduct groundbreaking research that informs policy and practice worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach combines technical expertise with deep understanding of social, ethical, and economic implications, ensuring that technological progress translates into tangible benefits for communities globally.
              </p>
            </div>
            <div className="w-full h-96">
              <img
                src="https://readdy.ai/api/search-image?query=Diverse%20team%20of%20AI%20researchers%20and%20technology%20experts%20collaborating%20on%20innovation%20project%2C%20international%20cooperation%20in%20artificial%20intelligence%20development%2C%20modern%20research%20facility%20with%20advanced%20technology%2C%20professional%20photography%20with%20inspiring%20atmosphere&width=800&height=600&seq=tech-intro&orientation=landscape"
                alt="Technology Research Collaboration"
                className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section id="our-approach" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Pillars of Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six interconnected pillars driving responsible technological advancement and digital transformation
            </p>
          </div>

          <div className="space-y-16">
            {/* Pillar 1: Technology & Digital Transformation */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="w-full h-96 lg:h-auto">
                  <img
                    src="https://readdy.ai/api/search-image?query=Digital%20transformation%20and%20smart%20city%20technology%20infrastructure%2C%20modern%20data%20centers%2C%20cloud%20computing%20systems%2C%20enterprise%20technology%20platforms%2C%20government%20digital%20services%2C%20ultra%20high%20definition%208k%20photography%20with%20futuristic%20blue%20lighting&width=800&height=600&seq=digital-transform&orientation=landscape"
                    alt="Digital Transformation"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#00D9FF]/20 rounded-full mr-4">
                      <i className="ri-computer-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Technology & Digital Transformation</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We guide national and enterprise-level digital transformation strategies that modernize infrastructure, enhance service delivery, and build scalable digital ecosystems.
                  </p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${expandedSections['pillar1'] ? 'max-h-[2000px]' : 'max-h-0'}`}>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">National and enterprise digital transformation strategies</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">E-government and smart public services modernization</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">AI, cloud, and data infrastructure road-mapping</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">Digital health, fintech, GovTech, and EdTech platforms</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">Automation, workflow digitization, and legacy system transformation</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">Cybersecurity, digital identity, and data protection architecture</span>
                      </div>
                    </div>
                    <div className="bg-[#00D9FF]/10 rounded-lg p-4">
                      <strong className="text-[#0A1E3D]">Impact:</strong>
                      <p className="text-gray-700 mt-2">Increased efficiency, reduced service delivery costs, improved trust, and scalable infrastructure.</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleSection('pillar1')}
                    className="mt-4 text-[#00D9FF] hover:text-[#00C4E6] font-semibold cursor-pointer inline-flex items-center"
                  >
                    {expandedSections['pillar1'] ? 'Read Less' : 'Read More'}
                    <i className={`ri-arrow-${expandedSections['pillar1'] ? 'up' : 'down'}-s-line w-5 h-5 flex items-center justify-center ml-1`}></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Pillar 2: AI Governance, Safety & Policy Frameworks */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="w-full h-96 lg:h-auto order-2 lg:order-1">
                  <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-[#00D9FF]/20 rounded-full mr-4">
                        <i className="ri-shield-check-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">AI Governance, Safety & Policy Frameworks</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Developing ethical frameworks, regulatory guidelines, and governance structures that ensure artificial intelligence is deployed responsibly, transparently, and in alignment with international standards.
                    </p>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${expandedSections['pillar2'] ? 'max-h-[2000px]' : 'max-h-0'}`}>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">National AI policy and regulatory frameworks</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Algorithmic audits and responsible procurement</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Risk classification and AI ethics boards</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Aligned with OECD, UNESCO, ISO, and GPAI standards</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleSection('pillar2')}
                      className="mt-4 text-[#00D9FF] hover:text-[#00C4E6] font-semibold cursor-pointer inline-flex items-center"
                    >
                      {expandedSections['pillar2'] ? 'Read Less' : 'Read More'}
                      <i className={`ri-arrow-${expandedSections['pillar2'] ? 'up' : 'down'}-s-line w-5 h-5 flex items-center justify-center ml-1`}></i>
                    </button>
                  </div>
                </div>
                <div className="w-full h-96 lg:h-auto order-1 lg:order-2">
                  <img
                    src="https://readdy.ai/api/search-image?query=AI%20ethics%20committee%20meeting%20with%20diverse%20stakeholders%2C%20policymakers%20discussing%20artificial%20intelligence%20governance%2C%20regulatory%20framework%20development%2C%20professional%20conference%20room%2C%20high-quality%20photography%20with%20serious%20professional%20atmosphere&width=800&height=600&seq=ai-governance-main&orientation=landscape"
                    alt="AI Governance"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Pillar 3: AI & Emerging Technology Research */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="w-full h-96 lg:h-auto">
                  <img
                    src="https://readdy.ai/api/search-image?query=Research%20scientists%20analyzing%20AI%20and%20technology%20data%2C%20advanced%20research%20laboratory%20with%20computer%20systems%2C%20data%20visualization%20on%20screens%2C%20collaborative%20research%20environment%2C%20professional%20photography%20with%20high-tech%20atmosphere&width=800&height=600&seq=research-main&orientation=landscape"
                    alt="AI Research"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#00D9FF]/20 rounded-full mr-4">
                      <i className="ri-microscope-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">AI & Emerging Technology Research</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Conducting cutting-edge research on emerging technologies, their societal impacts, and optimal implementation strategies, producing evidence-based insights that inform policy and practice globally.
                  </p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${expandedSections['pillar3'] ? 'max-h-[2000px]' : 'max-h-0'}`}>
                    <div className="bg-[#00D9FF]/10 rounded-xl p-6 mb-6">
                      <h4 className="font-bold text-gray-900 mb-4">Research Focus Areas:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-0.5"></i>
                          <span className="text-gray-700">AI in health, education, agriculture, and governance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-0.5"></i>
                          <span className="text-gray-700">Automation impact on labor markets</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-0.5"></i>
                          <span className="text-gray-700">Data governance and cybersecurity</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-0.5"></i>
                          <span className="text-gray-700">Smart cities and digital inclusion</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#0A1E3D]/10 rounded-lg p-4">
                      <strong className="text-[#0A1E3D]">Research Outputs:</strong>
                      <p className="text-gray-700 mt-2">Policy papers, ecosystem mapping, readiness studies, and implementation guidelines.</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleSection('pillar3')}
                    className="mt-4 text-[#00D9FF] hover:text-[#00C4E6] font-semibold cursor-pointer inline-flex items-center"
                  >
                    {expandedSections['pillar3'] ? 'Read Less' : 'Read More'}
                    <i className={`ri-arrow-${expandedSections['pillar3'] ? 'up' : 'down'}-s-line w-5 h-5 flex items-center justify-center ml-1`}></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Pillar 4: National & Institutional AI Ecosystem Development */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="w-full h-96 lg:h-auto order-2 lg:order-1">
                  <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-[#00D9FF]/20 rounded-full mr-4">
                        <i className="ri-building-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">National & Institutional AI Ecosystem Development</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Building comprehensive AI ecosystems that foster innovation, entrepreneurship, and sustainable growth through strategic infrastructure and support systems.
                    </p>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${expandedSections['pillar4'] ? 'max-h-[2000px]' : 'max-h-0'}`}>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">AI innovation hubs and centers of excellence</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Startup acceleration and incubation programs</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Workforce reskilling and upskilling initiatives</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Venture capital mobilization and investment facilitation</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Public sector AI systems deployment</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleSection('pillar4')}
                      className="mt-4 text-[#00D9FF] hover:text-[#00C4E6] font-semibold cursor-pointer inline-flex items-center"
                    >
                      {expandedSections['pillar4'] ? 'Read Less' : 'Read More'}
                      <i className={`ri-arrow-${expandedSections['pillar4'] ? 'up' : 'down'}-s-line w-5 h-5 flex items-center justify-center ml-1`}></i>
                    </button>
                  </div>
                </div>
                <div className="w-full h-96 lg:h-auto order-1 lg:order-2">
                  <img
                    src="https://readdy.ai/api/search-image?query=Innovation%20hub%20with%20startups%20developing%20AI%20solutions%2C%20technology%20incubator%20space%2C%20entrepreneurs%20working%20on%20artificial%20intelligence%20projects%2C%20modern%20coworking%20environment%2C%20ultra%20high%20definition%208k%20photography%20with%20vibrant%20creative%20atmosphere&width=800&height=600&seq=ecosystem-dev&orientation=landscape"
                    alt="AI Ecosystem Development"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Pillar 5: AI Capacity Building, Leadership & Talent Development */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="w-full h-96 lg:h-auto">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20training%20workshop%20for%20AI%20and%20technology%20leadership%2C%20diverse%20executives%20in%20modern%20classroom%2C%20digital%20skills%20development%2C%20capacity%20building%20program%2C%20professional%20photography%20with%20collaborative%20learning%20atmosphere&width=800&height=600&seq=capacity-building&orientation=landscape"
                    alt="Capacity Building"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#00D9FF]/20 rounded-full mr-4">
                      <i className="ri-team-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">AI Capacity Building, Leadership & Talent Development</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Empowering leaders, professionals, and communities with the knowledge and skills needed to thrive in the AI-driven economy through comprehensive training programs.
                  </p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${expandedSections['pillar5'] ? 'max-h-[2000px]' : 'max-h-0'}`}>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">Executive AI bootcamps and leadership programs</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">Regulator training and policy maker education</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">Digital academies and technical skills development</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">Youth innovation labs and STEM programs</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                        <span className="text-gray-700">Women in AI leadership initiatives</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleSection('pillar5')}
                    className="mt-4 text-[#00D9FF] hover:text-[#00C4E6] font-semibold cursor-pointer inline-flex items-center"
                  >
                    {expandedSections['pillar5'] ? 'Read Less' : 'Read More'}
                    <i className={`ri-arrow-${expandedSections['pillar5'] ? 'up' : 'down'}-s-line w-5 h-5 flex items-center justify-center ml-1`}></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Pillar 6: Data Governance, Digital Rights & Cybersecurity */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="w-full h-96 lg:h-auto order-2 lg:order-1">
                  <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-[#00D9FF]/20 rounded-full mr-4">
                        <i className="ri-shield-user-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">Data Governance, Digital Rights & Cybersecurity</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Establishing robust frameworks for data protection, digital rights, and cybersecurity that safeguard individuals and institutions while enabling innovation.
                    </p>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${expandedSections['pillar6'] ? 'max-h-[2000px]' : 'max-h-0'}`}>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">National data strategies and governance frameworks</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Digital identity systems and privacy protection</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">Cyber resilience and security infrastructure</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-check-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                          <span className="text-gray-700">AI accountability and transparency systems</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleSection('pillar6')}
                      className="mt-4 text-[#00D9FF] hover:text-[#00C4E6] font-semibold cursor-pointer inline-flex items-center"
                    >
                      {expandedSections['pillar6'] ? 'Read Less' : 'Read More'}
                      <i className={`ri-arrow-${expandedSections['pillar6'] ? 'up' : 'down'}-s-line w-5 h-5 flex items-center justify-center ml-1`}></i>
                    </button>
                  </div>
                </div>
                <div className="w-full h-96 lg:h-auto order-1 lg:order-2">
                  <img
                    src="https://readdy.ai/api/search-image?query=Cybersecurity%20operations%20center%20with%20professionals%20monitoring%20data%20security%2C%20digital%20rights%20protection%2C%20secure%20network%20infrastructure%2C%20modern%20security%20command%20center%2C%20ultra%20high%20definition%208k%20photography%20with%20blue%20tech%20lighting&width=800&height=600&seq=cybersecurity&orientation=landscape"
                    alt="Data Governance & Cybersecurity"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with diverse stakeholders to drive responsible technology transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
                <i className="ri-government-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Governments</h3>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-global-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Multilaterals</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-4">
                <i className="ri-school-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Universities</h3>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                <i className="ri-hospital-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Hospitals</h3>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-600 rounded-full mx-auto mb-4">
                <i className="ri-bank-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Financial Institutions</h3>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-full mx-auto mb-4">
                <i className="ri-rocket-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Startups</h3>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                <i className="ri-scales-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Regulators</h3>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-600 rounded-full mx-auto mb-4">
                <i className="ri-building-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Enterprises</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
                <i className="ri-service-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">Public Agencies</h3>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-600 rounded-full mx-auto mb-4">
                <i className="ri-community-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900">NGOs</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Transformation Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic five-phase methodology for successful technology transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00D9FF] text-[#0A1E3D] rounded-full mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Readiness</h3>
              <p className="text-gray-700 text-sm">Assessment, visioning, and strategic planning</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00D9FF] text-[#0A1E3D] rounded-full mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Governance & Policy Design</h3>
              <p className="text-gray-700 text-sm">Framework development and regulatory alignment</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00D9FF] text-[#0A1E3D] rounded-full mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Infrastructure</h3>
              <p className="text-gray-700 text-sm">Platform deployment and system integration</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00D9FF] text-[#0A1E3D] rounded-full mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Talent & Skills Development</h3>
              <p className="text-gray-700 text-sm">Capacity building and workforce transformation</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00D9FF] text-[#0A1E3D] rounded-full mb-4 text-xl font-bold">5</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale & Commercialization</h3>
              <p className="text-gray-700 text-sm">Expansion, optimization, and sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Governance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ethical AI Governance for a Just Future
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As artificial intelligence reshapes every aspect of society, robust governance frameworks are essential to ensure AI serves humanity's best interests while mitigating risks and addressing ethical concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Building Responsible AI Ecosystems
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our AI governance work spans policy development, regulatory frameworks, ethical guidelines, and multi-stakeholder dialogue to create environments where AI innovation flourishes responsibly.
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#00D9FF]/20 rounded-full flex-shrink-0">
                      <i className="ri-government-line w-6 h-6 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Policy Development</h4>
                      <p className="text-gray-700">Working with governments to craft AI policies that balance innovation with protection of rights, privacy, and societal values.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#00D9FF]/20 rounded-full flex-shrink-0">
                      <i className="ri-scales-line w-6 h-6 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Ethical Frameworks</h4>
                      <p className="text-gray-700">Developing comprehensive ethical guidelines for AI development and deployment across sectors and contexts.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#00D9FF]/20 rounded-full flex-shrink-0">
                      <i className="ri-team-line w-6 h-6 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Multi-Stakeholder Dialogue</h4>
                      <p className="text-gray-700">Convening diverse voices—technologists, policymakers, civil society, and affected communities—in governance discussions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[600px]">
              <img
                src="https://readdy.ai/api/search-image?query=AI%20ethics%20committee%20meeting%20with%20diverse%20stakeholders%2C%20policymakers%20discussing%20artificial%20intelligence%20governance%2C%20regulatory%20framework%20development%2C%20professional%20conference%20room%2C%20high-quality%20photography%20with%20serious%20professional%20atmosphere&width=800&height=900&seq=ai-governance-1&orientation=portrait"
                alt="AI Governance Meeting"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key AI Governance Priorities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-user-shield-line w-7 h-7 flex items-center justify-center text-[#00D9FF]"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Privacy & Data Protection</h4>
                <p className="text-gray-700">Ensuring AI systems respect individual privacy and handle data responsibly with robust protection mechanisms.</p>
              </div>
              <div>
                <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-contrast-line w-7 h-7 flex items-center justify-center text-[#00D9FF]"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Bias & Fairness</h4>
                <p className="text-gray-700">Addressing algorithmic bias and ensuring AI systems treat all individuals and groups fairly and equitably.</p>
              </div>
              <div>
                <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-eye-line w-7 h-7 flex items-center justify-center text-[#00D9FF]"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Transparency & Explainability</h4>
                <p className="text-gray-700">Promoting AI systems that are understandable and whose decision-making processes can be explained and audited.</p>
              </div>
              <div>
                <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-shield-check-line w-7 h-7 flex items-center justify-center text-[#00D9FF]"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Safety & Security</h4>
                <p className="text-gray-700">Establishing standards for AI system safety, robustness, and protection against malicious use or unintended harms.</p>
              </div>
              <div>
                <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-hand-heart-line w-7 h-7 flex items-center justify-center text-[#00D9FF]"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Human Rights Alignment</h4>
                <p className="text-gray-700">Ensuring AI development and deployment respect and uphold fundamental human rights and dignity.</p>
              </div>
              <div>
                <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-global-line w-7 h-7 flex items-center justify-center text-[#00D9FF]"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Global Cooperation</h4>
                <p className="text-gray-700">Fostering international collaboration on AI governance to address cross-border challenges and harmonize approaches.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Research Driving Evidence-Based Action
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our research initiatives produce actionable insights that inform policy, guide implementation, and advance understanding of technology's role in sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="w-full h-96">
              <img
                src="https://readdy.ai/api/search-image?query=Research%20scientists%20analyzing%20AI%20and%20technology%20data%2C%20advanced%20research%20laboratory%20with%20computer%20systems%2C%20data%20visualization%20on%20screens%2C%20collaborative%20research%20environment%2C%20professional%20photography%20with%20high-tech%20atmosphere&width=800&height=600&seq=research-1&orientation=landscape"
                alt="Technology Research Laboratory"
                className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Cutting-Edge Research Programs
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our research spans technical, social, economic, and ethical dimensions of emerging technologies, producing comprehensive analyses that bridge academic rigor with practical applicability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-flask-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Applied AI Research:</strong>
                    <p className="text-gray-700">Investigating AI applications in healthcare, agriculture, education, and climate action for development contexts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-line-chart-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Impact Assessment:</strong>
                    <p className="text-gray-700">Evaluating the social, economic, and environmental impacts of technology interventions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-book-open-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Policy Research:</strong>
                    <p className="text-gray-700">Analyzing regulatory approaches, governance models, and policy effectiveness across jurisdictions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-lightbulb-line w-6 h-6 flex items-center justify-center text-[#00D9FF] flex-shrink-0 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Innovation Studies:</strong>
                    <p className="text-gray-700">Examining innovation ecosystems, technology adoption patterns, and barriers to implementation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0A1E3D] to-[#194A84] rounded-2xl p-8 lg:p-12 text-white mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Research Partnerships</h3>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  We collaborate with leading universities, research institutions, think tanks, and industry partners worldwide to conduct rigorous, interdisciplinary research that advances knowledge and informs practice.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                    <span>Joint research initiatives with top-tier academic institutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                    <span>Industry partnerships for applied research and pilot projects</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                    <span>Government-funded research programs addressing policy priorities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                    <span>Open-source research contributions to global knowledge commons</span>
                  </li>
                </ul>
              </div>
              <div className="w-full h-80">
                <img
                  src="https://readdy.ai/api/search-image?query=International%20research%20collaboration%20meeting%2C%20diverse%20scientists%20and%20academics%20working%20together%2C%20university%20research%20partnership%2C%20global%20knowledge%20sharing%2C%20professional%20photography%20with%20collaborative%20atmosphere&width=700&height=500&seq=research-partnership&orientation=landscape"
                  alt="Research Partnerships"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
                <i className="ri-file-text-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Publications & Reports</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our research outputs include peer-reviewed journal articles, policy briefs, white papers, and comprehensive reports that disseminate findings to diverse audiences.
              </p>
              <a
                href="/contact"
                className="text-[#00D9FF] hover:text-[#00C4E6] font-semibold cursor-pointer inline-flex items-center"
              >
                Access Research Library
                <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center ml-2"></i>
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
                <i className="ri-presentation-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge Dissemination</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We share research findings through conferences, webinars, workshops, and online platforms, ensuring insights reach practitioners, policymakers, and communities.
              </p>
              <a
                href="/events"
                className="text-[#00D9FF] hover:text-[#00C4E6] font-semibold cursor-pointer inline-flex items-center"
              >
                View Upcoming Events
                <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose LDII</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted expertise in technology transformation and responsible AI deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
                <i className="ri-trophy-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Sector Expertise</h3>
              <p className="text-gray-700">Deep experience across government, healthcare, finance, education, and enterprise sectors.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
                <i className="ri-earth-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Experience</h3>
              <p className="text-gray-700">Proven track record delivering transformation projects across 50+ countries worldwide.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
                <i className="ri-lightbulb-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Design</h3>
              <p className="text-gray-700">Forward-thinking governance frameworks that anticipate emerging challenges and opportunities.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
                <i className="ri-heart-line w-8 h-8 flex items-center justify-center text-[#00D9FF]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical-First Approach</h3>
              <p className="text-gray-700">Commitment to responsible AI that prioritizes human rights, fairness, and societal benefit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Impact Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving measurable outcomes across critical development sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className="ri-service-line w-7 h-7 flex items-center justify-center text-[#00D9FF]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Public Services</h3>
              <p className="text-gray-700">Transforming government service delivery through intelligent automation and citizen-centric platforms.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className="ri-group-line w-7 h-7 flex items-center justify-center text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Innovation</h3>
              <p className="text-gray-700">Ensuring technology benefits reach marginalized communities and underserved populations.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className="ri-line-chart-line w-7 h-7 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">National Competitiveness</h3>
              <p className="text-gray-700">Building digital economies that compete effectively in the global innovation landscape.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className="ri-shield-check-line w-7 h-7 flex items-center justify-center text-pink-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Infrastructure</h3>
              <p className="text-gray-700">Establishing resilient, secure digital infrastructure that protects against cyber threats.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className="ri-money-dollar-circle-line w-7 h-7 flex items-center justify-center text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Economic Growth</h3>
              <p className="text-gray-700">Driving productivity gains and new economic opportunities through digital transformation.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-[#0A1E3D] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className="ri-user-heart-line w-7 h-7 flex items-center justify-center text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Well-being</h3>
              <p className="text-gray-700">Improving quality of life through technology-enabled health, education, and social services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Responsible AI Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1E3D] to-[#194A84] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Commitment to Responsible AI</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are dedicated to ensuring AI systems are developed and deployed in ways that benefit humanity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-user-heart-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Human-Centered</h3>
              <p className="text-sm text-white/80">AI that serves human needs and enhances human capabilities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-eye-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Transparent</h3>
              <p className="text-sm text-white/80">Clear, explainable AI systems and decision-making processes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-shield-check-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Accountable</h3>
              <p className="text-sm text-white/80">Clear responsibility and oversight for AI system outcomes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-group-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Inclusive</h3>
              <p className="text-sm text-white/80">AI that benefits all people, especially marginalized communities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-lock-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Secure</h3>
              <p className="text-sm text-white/80">Robust protection against misuse, attacks, and unintended harms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes from our technology transformation, AI governance, and research initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold text-[#00D9FF] mb-2">150+</div>
              <div className="text-gray-900 font-semibold mb-2">Technology Transfer Projects</div>
              <div className="text-sm text-gray-600">Across 40+ countries</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold text-[#00D9FF] mb-2">25+</div>
              <div className="text-gray-900 font-semibold mb-2">AI Governance Frameworks</div>
              <div className="text-sm text-gray-600">Developed and implemented</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold text-[#00D9FF] mb-2">200+</div>
              <div className="text-gray-900 font-semibold mb-2">Research Publications</div>
              <div className="text-sm text-gray-600">In peer-reviewed journals</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl font-bold text-[#00D9FF] mb-2">5,000+</div>
              <div className="text-gray-900 font-semibold mb-2">Professionals Trained</div>
              <div className="text-sm text-gray-600">In AI ethics and governance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our work driving responsible innovation and sustainable development
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full h-80 lg:h-auto">
                  <img
                    src="https://readdy.ai/api/search-image?query=African%20healthcare%20workers%20using%20AI%20diagnostic%20technology%2C%20medical%20professionals%20with%20advanced%20health%20tech%20equipment%2C%20telemedicine%20in%20rural%20clinic%2C%20technology%20improving%20healthcare%20access%2C%20professional%20photography%20with%20hopeful%20atmosphere&width=800&height=600&seq=case-study-1&orientation=landscape"
                    alt="AI Healthcare Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Healthcare Technology Transfer
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    AI-Powered Diagnostics in Rural Africa
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Partnered with leading AI health tech companies to transfer diagnostic AI systems to rural health facilities in East Africa, training local healthcare workers and establishing sustainable maintenance protocols. The initiative has improved diagnostic accuracy by 40% and reduced patient wait times by 60%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Technology Transfer</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Capacity Building</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Healthcare Access</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full h-80 lg:h-auto order-2 lg:order-1">
                  <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                      AI Governance Framework
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      National AI Ethics Guidelines for Southeast Asia
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Collaborated with three Southeast Asian governments to develop comprehensive AI ethics and governance frameworks tailored to regional contexts, cultural values, and development priorities. The frameworks now guide AI deployment across public and private sectors, ensuring responsible innovation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Policy Development</span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Ethical AI</span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Regional Cooperation</span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-80 lg:h-auto order-1 lg:order-2">
                  <img
                    src="https://readdy.ai/api/search-image?query=Southeast%20Asian%20government%20officials%20in%20AI%20policy%20meeting%2C%20diverse%20policymakers%20discussing%20technology%20governance%2C%20national%20AI%20strategy%20development%2C%20professional%20conference%20setting%2C%20high-quality%20photography&width=800&height=600&seq=case-study-2&orientation=landscape"
                    alt="AI Governance Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full h-80 lg:h-auto">
                  <img
                    src="https://readdy.ai/api/search-image?query=Agricultural%20researchers%20using%20AI%20and%20data%20analytics%20for%20crop%20optimization%2C%20precision%20agriculture%20technology%2C%20farmers%20with%20smart%20farming%20equipment%2C%20sustainable%20agriculture%20innovation%2C%20professional%20photography%20with%20rural%20setting&width=800&height=600&seq=case-study-3&orientation=landscape"
                    alt="Agricultural AI Research Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Applied Research
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    AI for Climate-Resilient Agriculture
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Conducted multi-year research on AI applications for climate adaptation in agriculture, developing predictive models for crop selection, irrigation optimization, and pest management. Research findings have been implemented by 10,000+ smallholder farmers, increasing yields by 35% while reducing water usage by 25%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Research & Innovation</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Climate Action</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Food Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners in Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading organizations worldwide to advance responsible technology for development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="ri-government-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Government Agencies</h3>
              <p className="text-gray-700">
                Partnering with national and international government bodies on policy development and implementation
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="ri-building-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Companies</h3>
              <p className="text-gray-700">
                Collaborating with tech leaders to ensure innovations serve development goals responsibly
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="ri-school-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Institutions</h3>
              <p className="text-gray-700">
                Working with universities and research centers on cutting-edge studies and knowledge creation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0A1E3D] to-[#194A84] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Global%20technology%20partnership%20and%20innovation%20collaboration%2C%20diverse%20business%20leaders%20shaking%20hands%2C%20international%20cooperation%20for%20digital%20transformation%2C%20modern%20corporate%20setting%2C%20ultra%20high%20definition%208k%20photography%20with%20professional%20atmosphere&width=1920&height=800&seq=tech-cta-bg&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner With Us on Responsible Innovation
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you're a government, corporation, research institution, or civil society organization, we invite you to collaborate on advancing technology for sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Start a Conversation
            </a>
            <a
              href="/partners"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Explore Partnerships
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
