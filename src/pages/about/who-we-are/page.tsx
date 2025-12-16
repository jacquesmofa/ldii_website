import { useState, useEffect } from 'react';

export default function WhoWeArePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Diverse%20international%20team%20of%20professionals%20from%20different%20ethnicities%20working%20together%20in%20modern%20collaborative%20workspace%2C%20multicultural%20office%20environment%2C%20teamwork%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=team-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Global%20organization%20leadership%20team%20meeting%2C%20diverse%20executives%20collaborating%2C%20international%20business%20professionals%2C%20modern%20conference%20room%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=team-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Multicultural%20team%20celebrating%20success%20together%2C%20diverse%20professionals%2C%20collaborative%20achievement%2C%20inclusive%20workplace%20culture%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=team-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Executive Director',
      bio: 'Former UN Deputy Secretary-General with 20+ years in international development and crisis management.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20African%20American%20woman%20executive%20in%20business%20suit%2C%20warm%20smile%2C%20professional%20lighting%2C%20corporate%20portrait%20photography%2C%20high%20resolution%2C%20modern%20office%20background&width=300&height=400&seq=leader-1&orientation=portrait'
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Director of Research',
      bio: 'Leading economist specializing in global trade and sustainable development policy.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Asian%20male%20professor%20in%20business%20attire%2C%20confident%20expression%2C%20academic%20portrait%20photography%2C%20high%20resolution%2C%20university%20office%20background&width=300&height=400&seq=leader-2&orientation=portrait'
    },
    {
      name: 'Dr. Amara Okafor',
      position: 'Director of Global Health',
      bio: 'Public health expert with extensive experience in pandemic preparedness and health systems strengthening.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20African%20woman%20doctor%20in%20medical%20professional%20attire%2C%20confident%20smile%2C%20healthcare%20portrait%20photography%2C%20high%20resolution%2C%20medical%20facility%20background&width=300&height=400&seq=leader-3&orientation=portrait'
    },
    {
      name: 'James Rodriguez',
      position: 'Director of Climate Action',
      bio: 'Environmental scientist and policy advisor with expertise in climate resilience and adaptation strategies.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Hispanic%20male%20environmental%20scientist%20in%20business%20casual%20attire%2C%20professional%20expression%2C%20corporate%20portrait%20photography%2C%20high%20resolution%2C%20modern%20office%20background&width=300&height=400&seq=leader-4&orientation=portrait'
    }
  ];

  const team = [
    {
      department: 'Policy Research',
      members: 15,
      description: 'Expert analysts developing evidence-based policy recommendations for global challenges.'
    },
    {
      department: 'Program Management',
      members: 12,
      description: 'Experienced professionals implementing and overseeing international development programs.'
    },
    {
      department: 'Communications',
      members: 8,
      description: 'Strategic communicators amplifying our message and engaging global stakeholders.'
    },
    {
      department: 'Operations',
      members: 10,
      description: 'Dedicated support staff ensuring efficient organizational operations across all offices.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow */}
      <section id="hero" className="relative py-24 bg-gradient-to-br from-green-600 to-emerald-700 overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated professionals driving global resilience through innovative solutions and collaborative leadership.
          </p>
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

      {/* Organization Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Organization</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                LDII brings together a diverse team of experts, researchers, policy analysts, and practitioners from around the world. Our multidisciplinary approach combines academic rigor with practical experience to address complex global challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2014, we have grown from a small think tank to a globally recognized organization with offices across multiple continents. Our team includes former government officials, UN executives, academic researchers, and civil society leaders.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">45+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">25+</div>
                  <div className="text-gray-600">Nationalities</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20international%20organization%20team%20photo%20with%20diverse%20professionals%20from%20different%20countries%20and%20backgrounds%20standing%20together%20in%20contemporary%20office%20lobby%2C%20multicultural%20workplace%2C%20professional%20group%20photography%2C%20high%20resolution%2C%20excellent%20lighting%20and%20composition&width=600&height=400&seq=team-photo&orientation=landscape"
                alt="LDII Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership brings decades of experience in international relations, policy development, and global crisis management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-cyan-500 font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized teams working collaboratively to deliver comprehensive solutions to global challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{dept.members}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{dept.department}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advisory Board</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished leaders from government, academia, and civil society guide our strategic direction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Former Government Officials</h3>
              <p className="text-gray-600 mb-4">Ex-ministers and senior diplomats from G20 countries</p>
              <div className="text-teal-600 font-semibold">8 Members</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Leaders</h3>
              <p className="text-gray-600 mb-4">University presidents and research institute directors</p>
              <div className="text-teal-600 font-semibold">6 Members</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Civil Society Leaders</h3>
              <p className="text-gray-600 mb-4">NGO executives and community organization leaders</p>
              <div className="text-teal-600 font-semibold">5 Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team with Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20career%20opportunities%20diverse%20team%20recruitment%20global%20organization%20hiring%20talented%20professionals%20modern%20workplace%20culture%20international%20team%20building%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=join-team-bg&orientation=landscape)'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0A1E3D]/90"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Global Team
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate professionals who share our commitment to building global resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/careers#hero"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Open Positions
            </a>
            <a
              href="/partners#volunteer"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
