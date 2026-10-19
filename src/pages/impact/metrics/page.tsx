import { useState, useEffect } from 'react';

export default function MetricsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Impact%20metrics%20and%20data%20visualization%2C%20charts%20and%20graphs%2C%20data%20analytics%2C%20professional%20business%20photography%2C%20ultra%20high%20resolution%208k&width=1920&height=800&seq=metrics-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Performance%20indicators%20and%20impact%20measurement%2C%20data-driven%20results%2C%20analytics%20dashboard%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=metrics-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Global%20impact%20statistics%20and%20metrics%2C%20data%20visualization%2C%20transparent%20reporting%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=metrics-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const programMetrics = [
    {
      program: 'Climate Action & Mitigation',
      color: 'green',
      description: 'Our environmental initiatives focus on reforestation, carbon sequestration, and creating sustainable green jobs. We work with communities to establish forest reserves and promote climate-resilient practices that regenerate ecosystems while providing economic opportunities.',
      highlights: [
        'Large-scale tree planting across multiple countries',
        'Significant annual carbon sequestration achieved',
        'Community-managed forest reserves established',
        'Green jobs created in rural communities'
      ]
    },
    {
      program: 'Poverty Eradication & Inclusive Growth',
      color: 'blue',
      description: 'We support women entrepreneurs and job creation through microfinance, business training, and community-led economic development. Our programs have achieved exceptional loan repayment rates and sustained income growth for participants.',
      highlights: [
        'Women entrepreneurs supported across Africa',
        'Thousands of sustainable jobs created',
        'Microfinance distributed with strong repayment rates',
        'Significant average income increases achieved'
      ]
    },
    {
      program: 'Sustainable Food Systems',
      color: 'amber',
      description: 'Working with smallholder farmers, we introduce climate-resilient farming techniques, efficient irrigation, and sustainable agricultural practices. Our approach improves yields while conserving water and building long-term food security.',
      highlights: [
        'Farmers trained in climate-smart agriculture',
        'Significant yield increases through improved techniques',
        'Water usage reduced through efficient irrigation',
        'Soil health improved across vast agricultural lands'
      ]
    },
    {
      program: 'Global Health & Resilience',
      color: 'red',
      description: 'Our health programs strengthen medical infrastructure, train healthcare workers, and expand access to essential services. We focus on maternal health, infectious disease prevention, and building resilient health systems that serve communities effectively.',
      highlights: [
        'Health clinics established in underserved regions',
        'Healthcare workers trained and deployed',
        'Maternal mortality significantly reduced',
        'Digital health records systems implemented'
      ]
    },
    {
      program: 'Communication & Digital Inclusion',
      color: 'purple',
      description: 'Through innovation centers and technology training, we bridge the digital divide and empower entrepreneurs. Our programs foster tech startups, digital literacy, and technology solutions that address local challenges across communities.',
      highlights: [
        'Digital innovation centers established',
        'Entrepreneurs trained in digital skills',
        'Tech startups successfully launched',
        'Digital literacy programs reaching communities'
      ]
    }
  ];

  const regionalImpact = [
    {
      region: 'Africa',
      description: 'Our largest operational region, spanning multiple countries with programs in agriculture, health, digital innovation, and women\'s empowerment. We work alongside local communities and governments to build lasting resilience.',
      image: 'https://readdy.ai/api/search-image?query=African%20communities%20benefiting%20from%20development%20programs%2C%20diverse%20African%20people%20in%20various%20settings%2C%20community%20development%20across%20Africa%2C%20professional%20documentary%20photography&width=600&height=400&seq=africa-region&orientation=landscape'
    },
    {
      region: 'North America',
      description: 'Headquarters and strategic hub for policy development, youth leadership, and community engagement. Our Canadian programs focus on newcomer integration, youth empowerment, and building cross-cultural understanding.',
      image: 'https://readdy.ai/api/search-image?query=Canadian%20community%20programs%20with%20diverse%20multicultural%20participants%2C%20North%20American%20development%20initiatives%2C%20community%20services%2C%20professional%20photography&width=600&height=400&seq=northamerica-region&orientation=landscape'
    },
    {
      region: 'Asia',
      description: 'Growing presence with programs focused on health systems, technology transfer, and climate adaptation. We partner with regional organizations to address local challenges with globally-informed solutions.',
      image: 'https://readdy.ai/api/search-image?query=Asian%20communities%20in%20development%20programs%2C%20diverse%20Asian%20people%20benefiting%20from%20initiatives%2C%20community%20empowerment%20in%20Asia%2C%20professional%20documentary%20photography&width=600&height=400&seq=asia-region&orientation=landscape'
    },
    {
      region: 'Latin America',
      description: 'Emerging programs in sustainable agriculture, community resilience, and social enterprise development. We work with local partners to adapt our proven methodologies to regional contexts.',
      image: 'https://readdy.ai/api/search-image?query=Latin%20American%20communities%20in%20development%20programs%2C%20diverse%20people%20from%20Latin%20America%2C%20community%20development%20initiatives%2C%20professional%20documentary%20photography&width=600&height=400&seq=latam-region&orientation=landscape'
    }
  ];

  const colorClasses: Record<string, { bg: string; light: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-600', light: 'from-blue-50 to-indigo-50', text: 'text-blue-600', border: 'border-blue-600' },
    green: { bg: 'bg-green-600', light: 'from-green-50 to-emerald-50', text: 'text-green-600', border: 'border-green-600' },
    purple: { bg: 'bg-purple-600', light: 'from-purple-50 to-pink-50', text: 'text-purple-600', border: 'border-purple-600' },
    amber: { bg: 'bg-amber-600', light: 'from-amber-50 to-yellow-50', text: 'text-amber-600', border: 'border-amber-600' },
    red: { bg: 'bg-red-600', light: 'from-red-50 to-rose-50', text: 'text-red-600', border: 'border-red-600' }
  };

  const getColorClasses = (color: string) => {
    return colorClasses[color] || colorClasses.blue;
  };

  return (
    <div className="min-h-screen bg-white">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Impact Metrics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Measuring our impact through comprehensive data and transparent reporting across all programs and regions.
          </p>
        </div>
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Program Performance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of our work across each focus area, highlighting the approaches and outcomes that define our impact.
            </p>
          </div>

          <div className="space-y-12">
            {programMetrics.map((program, index) => {
              const colors = getColorClasses(program.color);
              return (
                <div key={index} className="bg-white rounded-3xl p-10 shadow-xl">
                  <div className={`flex items-center mb-8 pb-6 border-b-2 ${colors.border}`}>
                    <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center mr-4`}>
                      <i className="ri-bar-chart-line w-6 h-6 flex items-center justify-center text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{program.program}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{program.description}</p>
                  
                  <div className={`bg-gradient-to-br ${colors.light} rounded-xl p-8`}>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Key Focus Areas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start">
                          <i className={`ri-check-line w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${colors.text}`}></i>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Regional Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our geographic reach and impact across different regions of the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalImpact.map((region, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={region.image}
                  alt={region.region}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{region.region}</h3>
                  <p className="text-gray-700 leading-relaxed">{region.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Data-driven%20impact%20and%20transparency%2C%20professional%20business%20environment%2C%20analytics%20and%20reporting%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=metrics-cta&orientation=landscape)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0A1E3D]/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Data-Driven Impact
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our commitment to transparency and accountability drives continuous improvement and greater impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/impact/annual-reports"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              View Annual Reports
            </a>
            <a
              href="/contact"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}