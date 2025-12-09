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

  const overallMetrics = [
    { number: '4.5M+', label: 'People Impacted', icon: 'ri-team-line', color: 'blue' },
    { number: '50+', label: 'Countries Served', icon: 'ri-global-line', color: 'green' },
    { number: '270+', label: 'Active Projects', icon: 'ri-briefcase-line', color: 'purple' },
    { number: '$100M+', label: 'Funding Mobilized', icon: 'ri-funds-line', color: 'orange' },
    { number: '1M+', label: 'Trees Planted', icon: 'ri-plant-line', color: 'emerald' },
    { number: '500+', label: 'Partner Organizations', icon: 'ri-handshake-line', color: 'indigo' }
  ];

  const programMetrics = [
    {
      program: 'Climate Action & Mitigation',
      color: 'green',
      metrics: [
        { label: 'Trees Planted', value: '1,000,000+', icon: 'ri-plant-line' },
        { label: 'CO2 Sequestered Annually', value: '250,000 tons', icon: 'ri-leaf-line' },
        { label: 'Green Jobs Created', value: '5,000+', icon: 'ri-briefcase-line' },
        { label: 'Forest Reserves Established', value: '50', icon: 'ri-map-line' },
        { label: 'Countries with Projects', value: '15', icon: 'ri-global-line' }
      ]
    },
    {
      program: 'Poverty Eradication & Inclusive Growth',
      color: 'blue',
      metrics: [
        { label: 'Women Entrepreneurs Supported', value: '15,000+', icon: 'ri-women-line' },
        { label: 'Jobs Created', value: '30,000+', icon: 'ri-briefcase-line' },
        { label: 'Microfinance Distributed', value: '$25M+', icon: 'ri-money-dollar-circle-line' },
        { label: 'Average Income Increase', value: '150%', icon: 'ri-line-chart-line' },
        { label: 'Loan Repayment Rate', value: '95%', icon: 'ri-percent-line' }
      ]
    },
    {
      program: 'Sustainable Food Systems',
      color: 'amber',
      metrics: [
        { label: 'Farmers Trained', value: '75,000+', icon: 'ri-user-line' },
        { label: 'Average Yield Increase', value: '45%', icon: 'ri-arrow-up-line' },
        { label: 'Water Usage Reduction', value: '30%', icon: 'ri-water-flash-line' },
        { label: 'Hectares Improved', value: '100,000+', icon: 'ri-landscape-line' },
        { label: 'Farmer Income Increase', value: '60%', icon: 'ri-money-dollar-circle-line' }
      ]
    },
    {
      program: 'Global Health & Resilience',
      color: 'red',
      metrics: [
        { label: 'People Served', value: '2M+', icon: 'ri-heart-pulse-line' },
        { label: 'Health Clinics Established', value: '25', icon: 'ri-hospital-line' },
        { label: 'Healthcare Workers Trained', value: '1,200+', icon: 'ri-nurse-line' },
        { label: 'Maternal Mortality Reduction', value: '35%', icon: 'ri-arrow-down-line' },
        { label: 'Digital Health Records', value: '100+ facilities', icon: 'ri-file-list-line' }
      ]
    },
    {
      program: 'Communication & Digital Inclusion',
      color: 'purple',
      metrics: [
        { label: 'Innovation Centers', value: '12', icon: 'ri-building-line' },
        { label: 'Entrepreneurs Trained', value: '3,000+', icon: 'ri-user-star-line' },
        { label: 'Tech Startups Launched', value: '500+', icon: 'ri-rocket-line' },
        { label: 'Startup Funding Secured', value: '$15M+', icon: 'ri-funds-line' },
        { label: 'Digital Literacy Reached', value: '25,000+', icon: 'ri-computer-line' }
      ]
    }
  ];

  const regionalMetrics = [
    {
      region: 'Africa',
      countries: 35,
      beneficiaries: '3.2M+',
      projects: 180,
      image: 'https://readdy.ai/api/search-image?query=African%20communities%20benefiting%20from%20development%20programs%2C%20diverse%20African%20people%20in%20various%20settings%2C%20community%20development%20across%20Africa%2C%20professional%20documentary%20photography&width=600&height=400&seq=africa-region&orientation=landscape'
    },
    {
      region: 'North America',
      countries: 2,
      beneficiaries: '800K+',
      projects: 45,
      image: 'https://readdy.ai/api/search-image?query=Canadian%20community%20programs%20with%20diverse%20multicultural%20participants%2C%20North%20American%20development%20initiatives%2C%20community%20services%2C%20professional%20photography&width=600&height=400&seq=northamerica-region&orientation=landscape'
    },
    {
      region: 'Asia',
      countries: 8,
      beneficiaries: '350K+',
      projects: 30,
      image: 'https://readdy.ai/api/search-image?query=Asian%20communities%20in%20development%20programs%2C%20diverse%20Asian%20people%20benefiting%20from%20initiatives%2C%20community%20empowerment%20in%20Asia%2C%20professional%20documentary%20photography&width=600&height=400&seq=asia-region&orientation=landscape'
    },
    {
      region: 'Latin America',
      countries: 5,
      beneficiaries: '150K+',
      projects: 15,
      image: 'https://readdy.ai/api/search-image?query=Latin%20American%20communities%20in%20development%20programs%2C%20diverse%20people%20from%20Latin%20America%2C%20community%20development%20initiatives%2C%20professional%20documentary%20photography&width=600&height=400&seq=latam-region&orientation=landscape'
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-600', light: 'from-blue-50 to-indigo-50', text: 'text-blue-600', border: 'border-blue-600' },
    green: { bg: 'bg-green-600', light: 'from-green-50 to-emerald-50', text: 'text-green-600', border: 'border-green-600' },
    purple: { bg: 'bg-purple-600', light: 'from-purple-50 to-pink-50', text: 'text-purple-600', border: 'border-purple-600' },
    orange: { bg: 'bg-orange-600', light: 'from-orange-50 to-amber-50', text: 'text-orange-600', border: 'border-orange-600' },
    emerald: { bg: 'bg-emerald-600', light: 'from-emerald-50 to-teal-50', text: 'text-emerald-600', border: 'border-emerald-600' },
    indigo: { bg: 'bg-indigo-600', light: 'from-indigo-50 to-purple-50', text: 'text-indigo-600', border: 'border-indigo-600' },
    red: { bg: 'bg-red-600', light: 'from-red-50 to-rose-50', text: 'text-red-600', border: 'border-red-600' },
    amber: { bg: 'bg-amber-600', light: 'from-amber-50 to-yellow-50', text: 'text-amber-600', border: 'border-amber-600' }
  };

  // Get color classes safely with fallback
  const getColorClasses = (color) => {
    return colorClasses[color] || colorClasses.blue;
  };

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
            Impact Metrics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Measuring our impact through comprehensive data and transparent reporting across all programs and regions.
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

      {/* Overall Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Overall Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cumulative impact across all programs, regions, and focus areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {overallMetrics.map((metric, index) => {
              const colors = getColorClasses(metric.color);
              return (
                <div key={index} className={`bg-gradient-to-br ${colors.light} rounded-2xl p-8 hover:shadow-lg transition-shadow text-center`}>
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${metric.icon} w-8 h-8 flex items-center justify-center text-white`}></i>
                  </div>
                  <div className={`text-4xl font-bold ${colors.text} mb-2`}>{metric.number}</div>
                  <div className="text-gray-700 font-medium">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program-Specific Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Program Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed performance indicators for each of our five focus areas.
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {program.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className={`bg-gradient-to-br ${colors.light} rounded-xl p-6 text-center`}>
                        <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <i className={`${metric.icon} w-5 h-5 flex items-center justify-center text-white`}></i>
                        </div>
                        <div className={`text-2xl font-bold ${colors.text} mb-2`}>{metric.value}</div>
                        <div className="text-gray-700 text-sm font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Regional Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our geographic reach and impact across different regions of the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalMetrics.map((region, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={region.image}
                  alt={region.region}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
                  }}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{region.region}</h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600 mb-1">{region.countries}</div>
                      <div className="text-gray-600 text-sm">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{region.beneficiaries}</div>
                      <div className="text-gray-600 text-sm">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">{region.projects}</div>
                      <div className="text-gray-600 text-sm">Projects</div>
                    </div>
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
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Data-driven%20impact%20and%20transparency%2C%20professional%20business%20environment%2C%20analytics%20and%20reporting%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=metrics-cta&orientation=landscape)`
          }}
        ></div>
        <div className="absolute inset-0 bg-green-600/90"></div>
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
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Annual Reports
            </a>
            <a
              href="/contact"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
