import { useState, useEffect } from 'react';

export default function PovertyEradicationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Economic%20empowerment%20programs%2C%20small%20business%20entrepreneurs%2C%20microfinance%20success%2C%20community%20development%2C%20prosperity%20and%20growth%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=poverty-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Vocational%20training%20and%20skills%20development%2C%20people%20learning%20trades%2C%20employment%20opportunities%2C%20economic%20inclusion%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=poverty-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Community%20cooperatives%20and%20collective%20enterprises%2C%20people%20working%20together%2C%20sustainable%20livelihoods%2C%20inclusive%20growth%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=poverty-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const challenges = [
    {
      title: 'Extreme Poverty',
      description: 'Over 700 million people live on less than $1.90 per day, struggling to meet basic needs for survival.',
      icon: 'ri-money-dollar-circle-line',
      stat: '9.2% of global population'
    },
    {
      title: 'Inequality & Exclusion',
      description: 'Systemic barriers prevent marginalized communities from accessing opportunities and resources.',
      icon: 'ri-scales-line',
      stat: 'Top 1% owns 45% of global wealth'
    },
    {
      title: 'Limited Economic Opportunities',
      description: 'Lack of decent work, entrepreneurship support, and financial inclusion perpetuates poverty cycles.',
      icon: 'ri-briefcase-line',
      stat: '200+ million unemployed globally'
    },
    {
      title: 'Inadequate Social Protection',
      description: 'Insufficient safety nets leave vulnerable populations exposed to economic shocks and crises.',
      icon: 'ri-shield-cross-line',
      stat: '55% lack social protection coverage'
    }
  ];

  const strategies = [
    {
      title: 'Economic Empowerment',
      description: 'Creating pathways to sustainable livelihoods through skills development, entrepreneurship, and financial inclusion.',
      icon: 'ri-line-chart-line',
      initiatives: [
        'Vocational training and skills development programs',
        'Microfinance and small business support',
        'Financial literacy and inclusion initiatives',
        'Job creation and employment facilitation',
        'Entrepreneurship mentorship and incubation'
      ]
    },
    {
      title: 'Social Protection Systems',
      description: 'Strengthening safety nets to protect vulnerable populations from economic shocks and ensure basic needs are met.',
      icon: 'ri-shield-check-line',
      initiatives: [
        'Cash transfer programs for vulnerable families',
        'Universal basic income pilot projects',
        'Social insurance scheme development',
        'Emergency assistance and crisis response',
        'Child and elderly support programs'
      ]
    },
    {
      title: 'Inclusive Growth Policies',
      description: 'Advocating for economic policies that ensure growth benefits all segments of society, especially the marginalized.',
      icon: 'ri-government-line',
      initiatives: [
        'Progressive taxation and wealth redistribution',
        'Minimum wage and labor rights advocacy',
        'Gender equality in economic participation',
        'Rural development and agricultural support',
        'Access to quality education and healthcare'
      ]
    },
    {
      title: 'Community Development',
      description: 'Building local capacity and infrastructure to create sustainable, self-reliant communities.',
      icon: 'ri-community-line',
      initiatives: [
        'Community-led development projects',
        'Infrastructure improvement programs',
        'Local governance strengthening',
        'Cooperative and collective enterprise support',
        'Asset building and wealth creation'
      ]
    }
  ];

  const successStories = [
    {
      title: 'Women\'s Cooperative Initiative',
      location: 'Rural Uganda',
      description: 'Empowered 500 women through agricultural cooperatives, increasing household income by 300% and achieving food security.',
      impact: '500 women, 2,000+ family members',
      image: 'https://readdy.ai/api/search-image?query=African%20women%20farmers%20working%20together%20in%20agricultural%20cooperative%2C%20successful%20harvest%2C%20community%20empowerment%2C%20rural%20development%2C%20smiling%20faces%20showing%20prosperity%20and%20hope%2C%20professional%20documentary%20photography&width=600&height=400&seq=poverty-story-1&orientation=landscape'
    },
    {
      title: 'Youth Skills Training Program',
      location: 'Toronto, Canada',
      description: 'Provided vocational training to 300 at-risk youth, achieving 85% employment rate within six months of program completion.',
      impact: '300 youth employed',
      image: 'https://readdy.ai/api/search-image?query=Diverse%20Canadian%20youth%20in%20vocational%20training%20workshop%2C%20learning%20technical%20skills%2C%20modern%20training%20facility%2C%20instructor%20guidance%2C%20hopeful%20expressions%2C%20professional%20photography&width=600&height=400&seq=poverty-story-2&orientation=landscape'
    },
    {
      title: 'Microfinance for Entrepreneurs',
      location: 'East Africa',
      description: 'Provided microloans to 1,000 small business owners, creating 3,500 jobs and strengthening local economies.',
      impact: '1,000 businesses, 3,500 jobs',
      image: 'https://readdy.ai/api/search-image?query=African%20small%20business%20owners%20and%20entrepreneurs%20in%20marketplace%2C%20successful%20shops%20and%20vendors%2C%20economic%20activity%2C%20community%20prosperity%2C%20professional%20documentary%20photography&width=600&height=400&seq=poverty-story-3&orientation=landscape'
    }
  ];

  const impactMetrics = [
    { number: '50,000+', label: 'People Lifted from Poverty' },
    { number: '2,500+', label: 'Businesses Supported' },
    { number: '15,000+', label: 'Jobs Created' },
    { number: '30+', label: 'Communities Transformed' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow */}
      <section id="hero" className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
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
            Poverty Eradication & Inclusive Growth
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            The persistence of poverty is a formidable obstacle to human development. Our comprehensive strategy targets underlying causes while empowering individuals and communities for inclusive, sustainable growth.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding the Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poverty is multidimensional, affecting access to education, healthcare, economic opportunities, and social participation. Addressing it requires comprehensive, integrated approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${challenge.icon} w-6 h-6 flex items-center justify-center text-blue-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{challenge.description}</p>
                    <p className="text-blue-600 font-semibold text-sm">{challenge.stat}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement multi-faceted strategies that address root causes of poverty while creating pathways to sustainable prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${strategy.icon} w-6 h-6 flex items-center justify-center text-blue-600`}></i>
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
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5"></i>
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

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stories of Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real people, real change. See how our programs are transforming lives and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                    <span className="text-blue-600 font-semibold">{story.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{story.description}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 font-semibold text-sm">Impact: {story.impact}</p>
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
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Measurable results in the fight against poverty and inequality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{metric.number}</div>
                <div className="font-medium">{metric.label}</div>
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
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Community%20empowerment%20and%20economic%20development%2C%20people%20working%20together%2C%20sustainable%20livelihoods%2C%20hope%20and%20progress%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=poverty-cta&orientation=landscape)`
          }}
        ></div>
        <div className="absolute inset-0 bg-green-600/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Fight Against Poverty
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Together, we can create a world where everyone has the opportunity to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/partners#donate"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Support Our Programs
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