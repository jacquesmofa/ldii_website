import { useState, useEffect } from 'react';

export default function UpcomingProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Future%20development%20projects%20planning%20with%20diverse%20international%20team%2C%20modern%20project%20management%2C%20innovative%20solutions%20for%20global%20challenges%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=upcoming-projects-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Strategic%20planning%20for%20sustainable%20development%2C%20project%20blueprints%20and%20innovation%2C%20future-focused%20initiatives%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=upcoming-projects-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Next%20generation%20development%20programs%2C%20cutting-edge%20technology%20for%20social%20impact%2C%20visionary%20projects%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=upcoming-projects-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const upcomingProjects = [
    {
      title: "Global South Climate Adaptation Program",
      timeline: "2025-2028",
      location: "15 Countries across Africa, Asia, and Latin America",
      status: "Planning Phase",
      budget: "$25 Million",
      description: "A comprehensive climate adaptation initiative focusing on building resilience in vulnerable communities across the Global South through infrastructure development, capacity building, and innovative climate solutions.",
      objectives: [
        "Develop climate-resilient infrastructure in 50 communities",
        "Train 5,000+ community leaders in adaptation strategies",
        "Implement early warning systems in vulnerable regions",
        "Create climate adaptation toolkits for local governments"
      ],
      image: "https://readdy.ai/api/search-image?query=Climate%20adaptation%20infrastructure%20project%20in%20developing%20country%2C%20renewable%20energy%20installation%2C%20flood%20protection%20systems%2C%20community%20resilience%20building%2C%20sustainable%20development%20in%20tropical%20environment&width=600&height=400&seq=climate-adaptation&orientation=landscape"
    },
    {
      title: "Digital Health Revolution Initiative",
      timeline: "2025-2027",
      location: "Nigeria, Kenya, Ghana, Rwanda",
      status: "Funding Secured",
      budget: "$15 Million",
      description: "Transforming healthcare delivery through digital innovation, telemedicine platforms, and AI-powered diagnostic tools to improve health outcomes in underserved communities.",
      objectives: [
        "Deploy telemedicine platforms in 100+ health facilities",
        "Train 2,000+ healthcare workers in digital health tools",
        "Implement AI diagnostic systems for early disease detection",
        "Establish digital health data management systems"
      ],
      image: "https://readdy.ai/api/search-image?query=Modern%20digital%20health%20clinic%20in%20Africa%20with%20telemedicine%20equipment%2C%20healthcare%20workers%20using%20tablets%20and%20digital%20devices%2C%20patients%20receiving%20remote%20consultation%2C%20advanced%20medical%20technology%20in%20developing%20country%20setting&width=600&height=400&seq=digital-health&orientation=landscape"
    },
    {
      title: "Youth Innovation and Entrepreneurship Hub",
      timeline: "2025-2026",
      location: "Accra, Lagos, Nairobi, Kigali",
      status: "Partnership Development",
      budget: "$8 Million",
      description: "Creating innovation hubs across major African cities to empower young entrepreneurs with skills, resources, and networks needed to build successful businesses and drive economic growth.",
      objectives: [
        "Establish 4 innovation hubs in major African cities",
        "Support 1,000+ young entrepreneurs",
        "Facilitate $10M+ in startup funding",
        "Create 5,000+ jobs for young people"
      ],
      image: "https://readdy.ai/api/search-image?query=Modern%20innovation%20hub%20with%20young%20African%20entrepreneurs%20working%20on%20startups%2C%20collaborative%20workspace%20with%20technology%2C%20business%20incubator%20environment%2C%20creative%20and%20inspiring%20atmosphere%20with%20diverse%20young%20professionals&width=600&height=400&seq=youth-innovation&orientation=landscape"
    },
    {
      title: "Sustainable Agriculture Technology Platform",
      timeline: "2026-2029",
      location: "West and East Africa",
      status: "Concept Development",
      budget: "$20 Million",
      description: "Leveraging precision agriculture, IoT sensors, and mobile technology to help smallholder farmers increase productivity, reduce environmental impact, and improve food security.",
      objectives: [
        "Deploy smart farming technology to 10,000+ farmers",
        "Increase crop yields by 50% through precision agriculture",
        "Reduce water usage by 30% through smart irrigation",
        "Create digital marketplace for agricultural products"
      ],
      image: "https://readdy.ai/api/search-image?query=Smart%20agriculture%20technology%20in%20African%20farm%2C%20farmers%20using%20mobile%20apps%20and%20IoT%20sensors%2C%20precision%20farming%20equipment%2C%20sustainable%20agriculture%20with%20modern%20technology%2C%20green%20fields%20with%20digital%20monitoring%20systems&width=600&height=400&seq=smart-agriculture&orientation=landscape"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Funding Secured':
        return 'bg-cyan-100 text-cyan-800';
      case 'Planning Phase':
        return 'bg-blue-100 text-blue-800';
      case 'Partnership Development':
        return 'bg-yellow-100 text-yellow-800';
      case 'Concept Development':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slideshow */}
      <section id="hero" className="relative py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Projects</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Pioneering the future of sustainable development with innovative projects designed to create lasting impact and build resilient communities.
            </p>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Projects Pipeline Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Project Pipeline</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are developing ambitious initiatives that will transform communities and address critical global challenges over the next five years.
            </p>
          </div>

          {/* Pipeline Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">$68M</div>
              <div className="text-gray-600">Total Investment</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Targeted</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Expected Beneficiaries</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
              <div className="text-gray-600">Launch Year</div>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {upcomingProjects.map((project, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.timeline}
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.budget}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">
                      <i className="ri-map-pin-line mr-1"></i>
                      {project.location}
                    </p>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Objectives:</h4>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, objectiveIndex) => (
                          <li key={objectiveIndex} className="flex items-start">
                            <i className="ri-target-line text-blue-600 mr-2 mt-1"></i>
                            <span className="text-gray-600">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities with Background */}
      <section className="relative py-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%20diverse%20team%20collaboration%20global%20network%20connection%20modern%20office%20environment%20corporate%20teamwork%20international%20cooperation%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=partnership-opportunities-bg&orientation=landscape)'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0A1E3D]/90"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join us in shaping the future. We welcome partners who share our vision of creating sustainable impact and building resilient communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="ri-hand-heart-line text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">Funding Partners</h3>
              <p className="text-white/90">Support our initiatives through strategic funding and investment opportunities.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="ri-team-line text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">Implementation Partners</h3>
              <p className="text-white/90">Collaborate with us in project implementation and community engagement.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <i className="ri-lightbulb-line text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">Technology Partners</h3>
              <p className="text-white/90">Provide innovative solutions and technical expertise for our projects.</p>
            </div>
          </div>
          
          <div className="text-center mt-12 relative z-20">
            <a
              href="/partners#hero"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-3 rounded-lg font-semibold hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Partnership Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
