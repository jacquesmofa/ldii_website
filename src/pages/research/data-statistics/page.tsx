import { useState } from 'react';

export default function DataStatisticsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('global');
  const [selectedYear, setSelectedYear] = useState<string>('2024');

  const globalStats = [
    {
      title: 'Lives Impacted',
      value: '1M+',
      change: '+18%',
      trend: 'up',
      icon: 'ri-user-heart-line',
      color: 'green'
    },
    {
      title: 'Countries Reached',
      value: '50+',
      change: '+5',
      trend: 'up',
      icon: 'ri-global-line',
      color: 'blue'
    },
    {
      title: 'Active Projects',
      value: '200+',
      change: '+25',
      trend: 'up',
      icon: 'ri-folder-chart-line',
      color: 'purple'
    },
    {
      title: 'Trees Planted',
      value: '1M+',
      change: '+250K',
      trend: 'up',
      icon: 'ri-plant-line',
      color: 'green'
    },
    {
      title: 'Healthcare Access',
      value: '500K+',
      change: '+12%',
      trend: 'up',
      icon: 'ri-heart-pulse-line',
      color: 'red'
    },
    {
      title: 'Youth Trained',
      value: '75K+',
      change: '+20%',
      trend: 'up',
      icon: 'ri-graduation-cap-line',
      color: 'indigo'
    },
    {
      title: 'Women Empowered',
      value: '150K+',
      change: '+15%',
      trend: 'up',
      icon: 'ri-women-line',
      color: 'pink'
    },
    {
      title: 'Funding Mobilized',
      value: '$85M+',
      change: '+22%',
      trend: 'up',
      icon: 'ri-money-dollar-circle-line',
      color: 'yellow'
    }
  ];

  const regionalData = [
    {
      region: 'Africa',
      projects: 85,
      beneficiaries: '450K+',
      investment: '$32M',
      image: 'https://readdy.ai/api/search-image?query=African%20community%20development%20project%20with%20diverse%20people%20working%20together%20on%20sustainable%20agriculture%20and%20education%20programs%2C%20bright%20sunny%20day%2C%20hopeful%20atmosphere&width=800&height=600&seq=africa-data&orientation=landscape'
    },
    {
      region: 'Asia-Pacific',
      projects: 62,
      beneficiaries: '320K+',
      investment: '$28M',
      image: 'https://readdy.ai/api/search-image?query=Asian%20Pacific%20community%20development%20with%20people%20participating%20in%20health%20and%20education%20programs%2C%20modern%20facilities%2C%20collaborative%20environment&width=800&height=600&seq=asia-data&orientation=landscape'
    },
    {
      region: 'Latin America',
      projects: 38,
      beneficiaries: '180K+',
      investment: '$15M',
      image: 'https://readdy.ai/api/search-image?query=Latin%20American%20community%20development%20programs%20with%20diverse%20participants%20in%20sustainable%20development%20activities%2C%20vibrant%20colors%2C%20positive%20energy&width=800&height=600&seq=latam-data&orientation=landscape'
    },
    {
      region: 'North America',
      projects: 15,
      beneficiaries: '50K+',
      investment: '$10M',
      image: 'https://readdy.ai/api/search-image?query=Canadian%20community%20programs%20with%20diverse%20newcomers%20and%20youth%20participating%20in%20empowerment%20activities%2C%20modern%20urban%20setting%2C%20inclusive%20atmosphere&width=800&height=600&seq=northam-data&orientation=landscape'
    }
  ];

  const programMetrics = [
    {
      program: 'Climate Action & Mitigation',
      participants: '280K+',
      treesPlanted: '1M+',
      carbonReduced: '500K tons',
      communities: '1,200+',
      image: 'https://readdy.ai/api/search-image?query=climate%20action%20program%20with%20people%20planting%20trees%20and%20installing%20renewable%20energy%20systems%2C%20environmental%20conservation%2C%20green%20technology&width=600&height=400&seq=climate-metrics&orientation=landscape'
    },
    {
      program: 'Poverty Eradication',
      participants: '350K+',
      jobsCreated: '45K+',
      incomeIncrease: '35%',
      communities: '2,500+',
      image: 'https://readdy.ai/api/search-image?query=poverty%20eradication%20program%20with%20people%20receiving%20vocational%20training%20and%20starting%20small%20businesses%2C%20economic%20empowerment%2C%20hopeful%20future&width=600&height=400&seq=poverty-metrics&orientation=landscape'
    },
    {
      program: 'Sustainable Food Systems',
      participants: '220K+',
      farmsSupported: '8,500+',
      yieldIncrease: '40%',
      communities: '1,800+',
      image: 'https://readdy.ai/api/search-image?query=sustainable%20agriculture%20program%20with%20farmers%20using%20modern%20techniques%20and%20organic%20farming%20methods%2C%20abundant%20harvest%2C%20food%20security&width=600&height=400&seq=food-metrics&orientation=landscape'
    },
    {
      program: 'Global Health & Resilience',
      participants: '500K+',
      healthFacilities: '450+',
      vaccinations: '1.2M+',
      communities: '3,000+',
      image: 'https://readdy.ai/api/search-image?query=global%20health%20program%20with%20healthcare%20workers%20providing%20medical%20services%20to%20diverse%20communities%2C%20modern%20health%20facilities%2C%20quality%20care&width=600&height=400&seq=health-metrics&orientation=landscape'
    },
    {
      program: 'Digital Inclusion',
      participants: '150K+',
      devicesProvided: '25K+',
      trainingHours: '500K+',
      communities: '800+',
      image: 'https://readdy.ai/api/search-image?query=digital%20inclusion%20program%20with%20diverse%20people%20learning%20computer%20skills%20and%20accessing%20internet%2C%20technology%20training%20center%2C%20digital%20literacy&width=600&height=400&seq=digital-metrics&orientation=landscape'
    }
  ];

  const yearlyTrends = [
    { year: '2020', projects: 120, beneficiaries: 650000, funding: 45000000 },
    { year: '2021', projects: 145, beneficiaries: 780000, funding: 58000000 },
    { year: '2022', projects: 170, beneficiaries: 890000, funding: 68000000 },
    { year: '2023', projects: 185, beneficiaries: 950000, funding: 75000000 },
    { year: '2024', projects: 200, beneficiaries: 1000000, funding: 85000000 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Data%20analytics%20and%20statistics%2C%20charts%20and%20graphs%2C%20data%20visualization%2C%20professional%20business%20photography&width=1920&height=1080&seq=data-hero&orientation=landscape)`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Data & Statistics</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            Comprehensive data and metrics tracking our global impact and program effectiveness
          </p>
        </div>
      </section>

      {/* Global Impact Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Impact Dashboard</h2>
            <p className="text-lg text-gray-600">Real-time statistics from our programs worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 flex items-center justify-center bg-${stat.color}-100 rounded-lg`}>
                    <i className={`${stat.icon} w-6 h-6 flex items-center justify-center text-${stat.color}-600`}></i>
                  </div>
                  <span className={`flex items-center text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <i className={`${stat.trend === 'up' ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} w-4 h-4 flex items-center justify-center mr-1`}></i>
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Regional Impact Breakdown</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalData.map((region, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img
                  src={region.image}
                  alt={region.region}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{region.region}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{region.projects}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{region.beneficiaries}</div>
                      <div className="text-sm text-gray-600">Beneficiaries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{region.investment}</div>
                      <div className="text-sm text-gray-600">Investment</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program-Specific Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Program-Specific Metrics</h2>
          
          <div className="space-y-8">
            {programMetrics.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <img
                      src={program.image}
                      alt={program.program}
                      className="w-full h-full object-cover object-top min-h-[300px]"
                    />
                  </div>
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{program.program}</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(program).filter(([key]) => key !== 'program' && key !== 'image').map(([key, value], idx) => (
                        <div key={idx}>
                          <div className="text-3xl font-bold text-green-600 mb-2">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Trends */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">5-Year Growth Trends</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 text-gray-700 font-semibold">Year</th>
                    <th className="text-left py-4 px-6 text-gray-700 font-semibold">Active Projects</th>
                    <th className="text-left py-4 px-6 text-gray-700 font-semibold">Beneficiaries</th>
                    <th className="text-left py-4 px-6 text-gray-700 font-semibold">Funding (USD)</th>
                    <th className="text-left py-4 px-6 text-gray-700 font-semibold">Growth Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyTrends.map((trend, index) => {
                    const prevYear = index > 0 ? yearlyTrends[index - 1] : null;
                    const growthRate = prevYear 
                      ? Math.round(((trend.beneficiaries - prevYear.beneficiaries) / prevYear.beneficiaries) * 100)
                      : 0;
                    
                    return (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-900">{trend.year}</td>
                        <td className="py-4 px-6 text-gray-700">{trend.projects}</td>
                        <td className="py-4 px-6 text-gray-700">{trend.beneficiaries.toLocaleString()}</td>
                        <td className="py-4 px-6 text-gray-700">${(trend.funding / 1000000).toFixed(1)}M</td>
                        <td className="py-4 px-6">
                          {growthRate > 0 && (
                            <span className="flex items-center text-green-600 font-semibold">
                              <i className="ri-arrow-up-line w-4 h-4 flex items-center justify-center mr-1"></i>
                              {growthRate}%
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Data Transparency */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-xl p-8 border border-green-200 relative">
            <i className="ri-shield-check-line w-16 h-16 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Transparency & Verification</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All statistics are independently verified and updated quarterly. Our data collection methodologies follow international standards and are regularly audited by third-party organizations. For detailed methodology and raw data access, please contact our research team.
            </p>
            <a
              href="/contact"
              className="relative z-20 inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Request Detailed Data
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
