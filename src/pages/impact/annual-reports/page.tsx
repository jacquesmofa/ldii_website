import { useState, useEffect } from 'react';
import React from 'react';

export default function AnnualReportsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Annual%20reports%20and%20transparency%2C%20professional%20business%20documents%2C%20accountability%20and%20reporting%2C%20corporate%20publications%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=reports-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Financial%20transparency%20and%20accountability%2C%20professional%20reporting%20documents%2C%20business%20analytics%20and%20data%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=reports-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Impact%20reporting%20and%20documentation%2C%20professional%20publications%2C%20organizational%20transparency%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=reports-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const reports = [
    {
      year: '2024',
      title: '2024 Annual Report',
      subtitle: 'Building Resilience in a Changing World',
      description: 'Our most comprehensive annual report showcasing unprecedented growth and impact across all five focus areas. This year marked significant milestones including the 2nd International Post-COVID Conference, achieving our one million trees goal, and expanding programs to 10 new countries.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20annual%20report%20cover%20design%202024%20with%20global%20development%20themes%2C%20modern%20corporate%20publication%2C%20international%20organization%20branding%2C%20clean%20professional%20layout%20with%20charts%20and%20world%20map&width=400&height=550&seq=report-2024&orientation=portrait',
      highlights: [
        '500+ delegates at 2nd International Post-COVID Conference',
        '1,000,000+ trees planted milestone achieved',
        '4.5M+ people impacted across 50+ countries',
        '$100M+ in funding mobilized',
        '270+ active projects implemented'
      ],
      sections: [
        'Executive Summary',
        'Message from Leadership',
        'Year in Review',
        'Program Achievements',
        'Financial Overview',
        'Looking Ahead to 2025'
      ],
      downloadSize: '15.2 MB',
      pages: 84
    },
    {
      year: '2023',
      title: '2023 Annual Report',
      subtitle: 'Expanding Our Global Footprint',
      description: 'A year of remarkable expansion and deepening impact. We launched major initiatives in digital innovation, women\'s economic empowerment, and climate-smart agriculture while strengthening health systems across Africa.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20annual%20report%20cover%20design%202023%20with%20sustainable%20development%20themes%2C%20corporate%20publication%20design%2C%20international%20NGO%20branding%2C%20modern%20layout%20with%20infographics&width=400&height=550&seq=report-2023&orientation=portrait',
      highlights: [
        '12 digital innovation centers established',
        '15,000 women entrepreneurs supported',
        '75,000 farmers trained in climate-smart agriculture',
        '25 new health clinics opened',
        'Expanded to 15 new countries'
      ],
      sections: [
        'Executive Summary',
        'Strategic Priorities',
        'Program Impact',
        'Partnership Highlights',
        'Financial Statements',
        'Future Outlook'
      ],
      downloadSize: '12.8 MB',
      pages: 76
    },
    {
      year: '2022',
      title: '2022 Annual Report',
      subtitle: 'Resilience Through Innovation',
      description: 'Focused on innovative approaches to post-pandemic recovery, this report highlights our pivot to digital solutions, health systems strengthening, and community-led resilience building.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20annual%20report%20cover%20design%202022%20with%20innovation%20and%20resilience%20themes%2C%20modern%20corporate%20publication%2C%20global%20health%20focus%2C%20clean%20professional%20layout&width=400&height=550&seq=report-2022&orientation=portrait',
      highlights: [
        'Post-pandemic recovery programs launched',
        'Health systems strengthened in 4 African countries',
        'Digital transformation initiatives begun',
        '500,000+ people reached with health services',
        'Research network established'
      ],
      sections: [
        'Year Overview',
        'COVID-19 Response',
        'Innovation Initiatives',
        'Impact Metrics',
        'Financial Report',
        'Strategic Direction'
      ],
      downloadSize: '10.5 MB',
      pages: 68
    }
  ];

  const impactReports = [
    {
      title: 'Impact Assessment 2024',
      description: 'Comprehensive evaluation of program outcomes, beneficiary feedback, and long-term impact across all focus areas.',
      type: 'Impact Assessment',
      year: '2024',
      downloadSize: '8.4 MB'
    },
    {
      title: 'Climate Action Impact Report 2024',
      description: 'Detailed analysis of our climate mitigation and adaptation programs, including carbon sequestration metrics and community resilience outcomes.',
      type: 'Thematic Report',
      year: '2024',
      downloadSize: '6.2 MB'
    },
    {
      title: 'Women\'s Empowerment Outcomes 2023-2024',
      description: 'Two-year evaluation of women\'s economic empowerment initiatives, tracking income growth, business sustainability, and social impact.',
      type: 'Program Evaluation',
      year: '2024',
      downloadSize: '5.8 MB'
    }
  ];

  const financialReports = [
    {
      title: 'Financial Statements 2024',
      description: 'Audited financial statements with detailed breakdown of revenue sources, program expenditures, and administrative costs.',
      type: 'Financial Report',
      year: '2024',
      downloadSize: '3.2 MB'
    },
    {
      title: 'Donor Report 2024',
      description: 'Transparent accounting of donor contributions and their allocation across programs and regions.',
      type: 'Donor Report',
      year: '2024',
      downloadSize: '4.1 MB'
    }
  ];

  // Handle download functionality
  const handleDownload = (title: string) => {
    console.log(`Downloading: ${title}`);
    // Add actual download logic here
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Annual Reports
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Transparent documentation of our achievements, financial stewardship, and commitment to accountability.
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

      {/* Annual Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Annual Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive yearly reviews of our programs, impact, and financial performance.
            </p>
          </div>

          <div className="space-y-16">
            {reports.map((report, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10">
                  <div className="lg:col-span-1">
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-auto rounded-2xl shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = 'https://picsum.photos/seed/report-placeholder/400/550.jpg';
                      }}
                    />
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Pages:</span>
                        <span className="font-semibold">{report.pages}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Size:</span>
                        <span className="font-semibold">{report.downloadSize}</span>
                      </div>
                      <button 
                        onClick={() => handleDownload(report.title)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2"
                      >
                        <i className="ri-download-line w-5 h-5 flex items-center justify-center"></i>
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold mr-3">
                        {report.year}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-xl text-purple-600 font-semibold mb-6">{report.subtitle}</p>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">{report.description}</p>
                    
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h4>
                      <ul className="space-y-3">
                        {report.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start">
                            <i className="ri-star-fill w-5 h-5 flex items-center justify-center text-purple-600 mr-3 mt-0.5 flex-shrink-0"></i>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-indigo-900 mb-4">Report Sections</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {report.sections.map((section, sIndex) => (
                          <div key={sIndex} className="flex items-center space-x-2">
                            <i className="ri-file-text-line w-4 h-4 flex items-center justify-center text-indigo-600"></i>
                            <span className="text-indigo-800 text-sm">{section}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Reports */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Impact & Evaluation Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed assessments of program outcomes and long-term impact on communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactReports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-bar-chart-line w-8 h-8 flex items-center justify-center text-blue-600"></i>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {report.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{report.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{report.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{report.year}</span>
                  <span>{report.downloadSize}</span>
                </div>
                <button 
                  onClick={() => handleDownload(report.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Financial Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent financial documentation demonstrating responsible stewardship of resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {financialReports.map((report, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-funds-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {report.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{report.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{report.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{report.year}</span>
                  <span>{report.downloadSize}</span>
                </div>
                <button 
                  onClick={() => handleDownload(report.title)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Download Report
                </button>
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
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Transparency%20and%20accountability%2C%20professional%20business%20environment%2C%20reporting%20and%20documentation%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=reports-cta&orientation=landscape)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0A1E3D]/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subscribe to receive our latest reports and updates on our global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/contact"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Subscribe to Updates
            </a>
            <a
              href="/impact"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              View All Impact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
