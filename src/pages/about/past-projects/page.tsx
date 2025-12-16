import { useState, useEffect } from 'react';

export default function PastProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Successful%20completed%20development%20projects%20celebrating%20achievements%20diverse%20communities%20thriving%20sustainable%20development%20impact%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=past-projects-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Community%20transformation%20success%20stories%2C%20completed%20infrastructure%20projects%2C%20people%20celebrating%20achievements%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=past-projects-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Development%20project%20completion%20ceremony%2C%20community%20members%20celebrating%20success%2C%20sustainable%20development%20achievements%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=past-projects-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const pastProjects = [
    {
      title: "African Health Systems Resilience Program",
      period: "2020-2023",
      location: "Kenya, Uganda, Tanzania",
      description: "Strengthened health systems across East Africa through infrastructure development, capacity building, and technology integration. Improved healthcare access for over 2 million people.",
      outcomes: [
        "Built 15 new health clinics",
        "Trained 500+ healthcare workers",
        "Implemented digital health records system",
        "Reduced maternal mortality by 35%"
      ],
      image: "https://readdy.ai/api/search-image?query=African%20healthcare%20clinic%20with%20modern%20medical%20equipment%2C%20healthcare%20workers%20providing%20services%2C%20community%20health%20program%2C%20professional%20medical%20facility%20in%20rural%20Africa%2C%20bright%20and%20hopeful%20atmosphere&width=600&height=400&seq=health-program&orientation=landscape"
    },
    {
      title: "Climate-Smart Agriculture Initiative",
      period: "2019-2022",
      location: "Ghana, Nigeria, Senegal",
      description: "Promoted sustainable farming practices and climate-resilient crops to enhance food security and farmer livelihoods across West Africa.",
      outcomes: [
        "Trained 10,000+ farmers in sustainable practices",
        "Introduced drought-resistant crop varieties",
        "Increased crop yields by 40%",
        "Established 50 farmer cooperatives"
      ],
      image: "https://readdy.ai/api/search-image?query=African%20farmers%20working%20with%20modern%20sustainable%20agriculture%20techniques%2C%20green%20fields%20with%20healthy%20crops%2C%20climate-smart%20farming%20equipment%2C%20community%20agricultural%20project%2C%20vibrant%20and%20productive%20landscape&width=600&height=400&seq=agriculture-project&orientation=landscape"
    },
    {
      title: "Women's Economic Empowerment Initiative",
      period: "2018-2021",
      location: "Rwanda, Burundi, DRC",
      description: "Empowered women entrepreneurs through microfinance, business training, and market access programs in the Great Lakes region.",
      outcomes: [
        "Supported 5,000+ women entrepreneurs",
        "Provided $2M in microfinance loans",
        "Created 15,000+ jobs",
        "Established 100+ women's cooperatives"
      ],
      image: "https://readdy.ai/api/search-image?query=African%20women%20entrepreneurs%20in%20business%20meeting%2C%20women%20working%20in%20cooperative%20setting%2C%20microfinance%20and%20business%20development%2C%20empowered%20women%20in%20professional%20environment%2C%20inspiring%20and%20successful%20atmosphere&width=600&height=400&seq=women-empowerment&orientation=landscape"
    },
    {
      title: "Digital Innovation for Development",
      period: "2017-2020",
      location: "Multiple African Countries",
      description: "Leveraged technology to improve service delivery, governance, and economic opportunities across various sectors.",
      outcomes: [
        "Launched 25+ digital platforms",
        "Connected 100,000+ users to digital services",
        "Improved government service delivery",
        "Created 2,000+ tech jobs"
      ],
      image: "https://readdy.ai/api/search-image?query=African%20technology%20center%20with%20people%20using%20computers%20and%20digital%20devices%2C%20modern%20tech%20training%20facility%2C%20digital%20innovation%20hub%2C%20young%20people%20learning%20technology%20skills%2C%20bright%20and%20modern%20environment&width=600&height=400&seq=digital-innovation&orientation=landscape"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Past Projects</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Celebrating our completed initiatives that have transformed communities and built lasting resilience across Africa and beyond.
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

      {/* Projects Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Completed Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over the past decade, we have successfully implemented numerous projects that have created lasting positive impact in communities worldwide.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#00D9FF] mb-2">25+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#00D9FF] mb-2">15</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#00D9FF] mb-2">5M+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#00D9FF] mb-2">$50M+</div>
              <div className="text-gray-600">Total Investment</div>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {pastProjects.map((project, index) => (
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
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#00D9FF] text-[#0A1E3D] px-3 py-1 rounded-full text-sm font-semibold">
                        {project.period}
                      </span>
                      <span className="text-gray-500 text-sm">
                        <i className="ri-map-pin-line mr-1"></i>
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Outcomes:</h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start">
                            <i className="ri-check-line text-[#00D9FF] mr-2 mt-1"></i>
                            <span className="text-gray-600">{outcome}</span>
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

      {/* Call to Action with Background */}
      <section className="relative py-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%20diverse%20team%20collaboration%20global%20network%20connection%20modern%20office%20environment%20corporate%20teamwork%20international%20cooperation%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=cta-bg&orientation=landscape)'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0A1E3D]/90"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Impact Together?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to build resilient communities and create lasting positive change worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/donate#hero"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-3 rounded-lg font-semibold hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Support Our Work
            </a>
            <a
              href="/contact#hero"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0A1E3D] transition-colors cursor-pointer whitespace-nowrap"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
