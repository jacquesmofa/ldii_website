import { useState, useEffect } from 'react';

export default function SustainableFoodPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Abundant%20organic%20farm%20harvest%20with%20diverse%20fresh%20vegetables%20and%20fruits%2C%20sustainable%20agriculture%2C%20healthy%20food%20production%2C%20vibrant%20colors%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=food-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Farmers%20working%20in%20sustainable%20agricultural%20fields%20using%20modern%20eco-friendly%20farming%20techniques%2C%20food%20security%2C%20community%20farming%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=food-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Global%20food%20systems%20network%20connecting%20farms%20to%20communities%2C%20food%20distribution%2C%20nutrition%20access%2C%20sustainable%20supply%20chain%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=food-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const challenges = [
    {
      title: 'Food Insecurity',
      description: 'Over 800 million people face chronic hunger, while 2 billion experience moderate to severe food insecurity.',
      icon: 'ri-restaurant-line',
      stat: '1 in 10 people globally'
    },
    {
      title: 'Climate Impact on Agriculture',
      description: 'Changing weather patterns, droughts, and extreme events threaten crop yields and livestock production.',
      icon: 'ri-temp-hot-line',
      stat: '25% yield reduction by 2050'
    },
    {
      title: 'Unsustainable Practices',
      description: 'Industrial agriculture depletes soil, pollutes water, and contributes significantly to greenhouse gas emissions.',
      icon: 'ri-plant-line',
      stat: '30% of global emissions'
    },
    {
      title: 'Food Waste',
      description: 'One-third of all food produced is lost or wasted, while millions go hungry.',
      icon: 'ri-delete-bin-line',
      stat: '1.3 billion tons annually'
    }
  ];

  const strategies = [
    {
      title: 'Sustainable Agriculture',
      description: 'Promoting farming practices that protect the environment, support farmer livelihoods, and ensure food security.',
      icon: 'ri-seedling-line',
      initiatives: [
        'Agroecological farming methods training',
        'Organic and regenerative agriculture promotion',
        'Climate-smart agriculture techniques',
        'Soil health and conservation practices',
        'Water-efficient irrigation systems'
      ]
    },
    {
      title: 'Food System Resilience',
      description: 'Building robust food systems that can withstand shocks and ensure consistent access to nutritious food.',
      icon: 'ri-shield-check-line',
      initiatives: [
        'Crop diversification and seed banks',
        'Local food production strengthening',
        'Supply chain optimization',
        'Post-harvest loss reduction',
        'Emergency food security programs'
      ]
    },
    {
      title: 'Nutrition & Access',
      description: 'Ensuring all people have access to sufficient, safe, and nutritious food to meet their dietary needs.',
      icon: 'ri-heart-pulse-line',
      initiatives: [
        'School feeding programs',
        'Nutrition education and awareness',
        'Food assistance for vulnerable populations',
        'Micronutrient supplementation',
        'Maternal and child nutrition support'
      ]
    },
    {
      title: 'Policy & Advocacy',
      description: 'Influencing policies and practices to create enabling environments for sustainable food systems.',
      icon: 'ri-government-line',
      initiatives: [
        'Food security policy development',
        'Agricultural subsidy reform advocacy',
        'Land rights and tenure security',
        'Fair trade and market access',
        'Food waste reduction legislation'
      ]
    }
  ];

  const projects = [
    {
      title: 'Climate-Smart Agriculture Program',
      location: 'East Africa',
      description: 'Training 5,000 smallholder farmers in drought-resistant crops and water conservation, increasing yields by 40% despite climate challenges.',
      beneficiaries: '5,000 farmers, 25,000 people',
      image: 'https://readdy.ai/api/search-image?query=African%20smallholder%20farmers%20using%20climate-smart%20agriculture%20techniques%2C%20drought-resistant%20crops%2C%20water%20conservation%2C%20successful%20harvest%2C%20community%20training%2C%20professional%20documentary%20photography&width=600&height=400&seq=food-project-1&orientation=landscape'
    },
    {
      title: 'Urban Agriculture Initiative',
      location: 'Canadian Cities',
      description: 'Establishing community gardens and rooftop farms in urban areas, providing fresh produce to 10,000 residents and creating green spaces.',
      beneficiaries: '10,000 urban residents',
      image: 'https://readdy.ai/api/search-image?query=Urban%20community%20garden%20in%20Canadian%20city%2C%20diverse%20people%20growing%20vegetables%2C%20rooftop%20farming%2C%20fresh%20produce%2C%20sustainable%20urban%20agriculture%2C%20professional%20photography&width=600&height=400&seq=food-project-2&orientation=landscape'
    },
    {
      title: 'School Feeding Program',
      location: 'Rural Communities',
      description: 'Providing nutritious meals to 15,000 school children daily, improving attendance, health outcomes, and academic performance.',
      beneficiaries: '15,000 children',
      image: 'https://readdy.ai/api/search-image?query=School%20children%20receiving%20nutritious%20meals%20in%20rural%20school%20cafeteria%2C%20healthy%20food%2C%20happy%20children%20eating%20together%2C%20community%20support%2C%20professional%20documentary%20photography&width=600&height=400&seq=food-project-3&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 to-green-700 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sustainable Food Systems
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Promoting food security is paramount. We acknowledge the intricate interplay between agriculture, climate change, and poverty, committed to fostering resilient, sustainable food systems for all.
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

      {/* The Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Food Security Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our global food system faces unprecedented challenges from climate change, population growth, and unsustainable practices. Transformative change is urgently needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${challenge.icon} w-6 h-6 flex items-center justify-center text-emerald-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{challenge.description}</p>
                    <p className="text-emerald-600 font-semibold text-sm">{challenge.stat}</p>
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
              We work across the entire food system to promote sustainability, resilience, and equitable access to nutritious food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${strategy.icon} w-6 h-6 flex items-center justify-center text-emerald-600`}></i>
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
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5"></i>
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
              Our food security initiatives are creating lasting impact in communities worldwide.
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
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-emerald-600"></i>
                    <span className="text-emerald-600 font-semibold">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <p className="text-emerald-800 font-semibold text-sm">Impact: {project.beneficiaries}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Community%20gathering%20around%20abundant%20food%20harvest%20celebration%2C%20diverse%20people%20sharing%20nutritious%20meals%2C%20food%20security%20success%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=food-cta-bg&orientation=landscape)'
          }}
        ></div>
        <div className="absolute inset-0 bg-emerald-600/90"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Support Sustainable Food Systems
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Help us build a world where everyone has access to nutritious, sustainably produced food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/partners#donate"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}