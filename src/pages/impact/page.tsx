
export default function ImpactPage() {
  const achievements = [
    {
      title: '2nd International Post-COVID Conference',
      date: 'September 8-10, 2024',
      location: 'Brampton, ON, Canada',
      description: 'Our flagship event brought together over 500 delegates from 40+ countries to address post-pandemic challenges and develop comprehensive recovery strategies. The conference featured keynote speakers from the World Health Organization, United Nations, and leading academic institutions. Key outcomes included the Brampton Declaration on Global Resilience, establishment of the International Post-COVID Recovery Network, and commitment to $50 million in recovery funding from participating nations.',
      impact: '500+ delegates, 40+ countries, $50M funding commitments',
      outcomes: [
        'Brampton Declaration on Global Resilience adopted by 35 nations',
        'International Post-COVID Recovery Network established',
        'Policy framework for pandemic preparedness developed',
        'Cross-border collaboration agreements signed'
      ],
      image: 'https://readdy.ai/api/search-image?query=Massive%20international%20conference%20hall%20filled%20with%20delegates%20from%20multiple%20countries%2C%20professional%20event%20photography%2C%20global%20summit%20atmosphere%2C%20high-resolution%20image%20with%20dramatic%20lighting%20and%20wide%20perspective&width=600&height=400&seq=conference-2&orientation=landscape'
    },
    {
      title: '1st International Post-COVID Conference',
      date: 'July 15-17, 2024',
      location: 'Toronto, ON, Canada',
      description: 'The inaugural conference that launched our global platform for post-pandemic recovery dialogue. This groundbreaking event established LDII as a leading voice in international resilience building. Over 300 distinguished delegates participated in intensive workshops, panel discussions, and strategic planning sessions. The conference resulted in the formation of working groups on health systems strengthening, economic recovery, and climate resilience integration.',
      impact: '300+ delegates, 25 countries, 15 working groups established',
      outcomes: [
        'Toronto Framework for Post-Pandemic Recovery launched',
        '15 specialized working groups formed',
        'Multi-stakeholder partnership agreements signed',
        'Research collaboration network established'
      ],
      image: 'https://readdy.ai/api/search-image?query=Large%20international%20conference%20with%20diverse%20delegates%20from%20around%20the%20world%20in%20modern%20convention%20center%2C%20professional%20conference%20photography%2C%20multicultural%20audience%2C%20high-resolution%20image%20with%20excellent%20lighting%20and%20composition&width=600&height=400&seq=conference-1&orientation=landscape'
    },
    {
      title: 'Global Tree Planting Initiative',
      date: 'Ongoing since 2020',
      location: 'Multiple Countries',
      description: 'Our most ambitious environmental project has successfully coordinated the planting of over one million trees across 15 countries in Africa and North America. This initiative goes beyond simple reforestation - it integrates community development, climate education, and sustainable livelihood creation. Local communities are trained in forest management, agroforestry techniques, and carbon credit systems. The program has created over 5,000 green jobs and established 50 community-managed forest reserves.',
      impact: '1,000,000+ trees planted, 15 countries, 5,000 green jobs created',
      outcomes: [
        '50 community-managed forest reserves established',
        '5,000 green jobs created in rural communities',
        'Carbon sequestration of 250,000 tons CO2 annually',
        'Biodiversity corridors restored across 3 continents'
      ],
      image: 'https://readdy.ai/api/search-image?query=Large-scale%20tree%20planting%20initiative%20with%20volunteers%20from%20different%20communities%20planting%20saplings%20in%20various%20landscapes%2C%20environmental%20conservation%20in%20action%2C%20professional%20photography%20showing%20reforestation%20efforts%2C%20bright%20natural%20lighting&width=600&height=400&seq=tree-planting&orientation=landscape'
    },
    {
      title: 'African Health Systems Resilience Program',
      date: 'January 2023 - December 2024',
      location: 'Kenya, Uganda, Ghana, Nigeria',
      description: 'A comprehensive two-year program that strengthened health infrastructure across four African nations. Working with local governments and international partners, we established 25 new health clinics, trained 1,200 healthcare workers, and implemented digital health record systems. The program focused on maternal health, infectious disease prevention, and emergency response capabilities. Our innovative mobile health units reached remote communities, providing essential services to over 500,000 people.',
      impact: '25 new clinics, 1,200 healthcare workers trained, 500,000+ people served',
      outcomes: [
        'Maternal mortality reduced by 35% in target regions',
        'Digital health records implemented in 100+ facilities',
        'Emergency response time improved by 50%',
        'Community health worker network expanded by 300%'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20facility%20in%20Africa%20with%20medical%20professionals%20providing%20care%20to%20patients%2C%20community%20health%20workers%20in%20action%2C%20medical%20equipment%20and%20technology%2C%20professional%20healthcare%20photography%20with%20warm%20lighting&width=600&height=400&seq=health-program&orientation=landscape'
    },
    {
      title: 'Climate-Smart Agriculture Initiative',
      date: 'March 2022 - Ongoing',
      location: 'East Africa, West Africa',
      description: 'Transforming agricultural practices across sub-Saharan Africa through innovative climate-resilient farming techniques. This program has reached 75,000 smallholder farmers, introducing drought-resistant crops, efficient irrigation systems, and sustainable farming practices. Farmers receive comprehensive training in climate adaptation, soil conservation, and market access. The initiative has increased average crop yields by 45% while reducing water usage by 30%.',
      impact: '75,000 farmers reached, 45% yield increase, 30% water reduction',
      outcomes: [
        'Drought-resistant crop varieties adopted by 60,000 farmers',
        'Efficient irrigation systems installed in 200 communities',
        'Farmer income increased by average of 60%',
        'Soil health improved across 100,000 hectares'
      ],
      image: 'https://readdy.ai/api/search-image?query=African%20farmers%20working%20with%20modern%20sustainable%20agriculture%20techniques%2C%20drought-resistant%20crops%20growing%20in%20organized%20fields%2C%20irrigation%20systems%2C%20agricultural%20innovation%2C%20professional%20photography%20with%20golden%20hour%20lighting&width=600&height=400&seq=agriculture&orientation=landscape'
    },
    {
      title: 'Digital Innovation for Development Program',
      date: 'June 2023 - Present',
      location: 'Canada, Ghana, Kenya',
      description: 'Bridging the digital divide through technology transfer and innovation hubs. This program established 12 digital innovation centers across three countries, providing technology training, entrepreneurship support, and access to digital tools for underserved communities. Over 3,000 young entrepreneurs have received training in digital skills, with 500 launching successful tech startups. The program focuses on solutions for local challenges including fintech, agritech, and healthtech.',
      impact: '12 innovation centers, 3,000 entrepreneurs trained, 500 startups launched',
      outcomes: [
        '500 successful tech startups launched',
        'Digital literacy programs reached 25,000 people',
        '$15 million in startup funding secured',
        'Technology solutions deployed in 100+ communities'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20technology%20innovation%20hub%20with%20young%20African%20entrepreneurs%20working%20on%20computers%20and%20digital%20devices%2C%20startup%20incubator%20environment%2C%20collaborative%20workspace%2C%20professional%20technology%20photography&width=600&height=400&seq=digital-innovation&orientation=landscape'
    },
    {
      title: 'Women\'s Economic Empowerment Initiative',
      date: 'September 2022 - Ongoing',
      location: 'Multiple African Countries',
      description: 'Empowering women entrepreneurs and leaders across Africa through comprehensive business training, microfinance access, and mentorship programs. This initiative has supported 15,000 women in starting or expanding their businesses, with a focus on sustainable enterprises. Women receive training in business management, financial literacy, and leadership skills. The program has achieved a 95% loan repayment rate and created over 30,000 jobs.',
      impact: '15,000 women entrepreneurs supported, 30,000 jobs created, 95% loan repayment',
      outcomes: [
        '15,000 women-led businesses established or expanded',
        '$25 million in microfinance distributed',
        'Women\'s income increased by average of 150%',
        'Leadership training provided to 5,000 women'
      ],
      image: 'https://readdy.ai/api/search-image?query=African%20women%20entrepreneurs%20in%20business%20settings%2C%20women%20working%20in%20markets%20and%20small%20businesses%2C%20economic%20empowerment%20in%20action%2C%20professional%20photography%20showing%20successful%20women%20in%20various%20business%20activities&width=600&height=400&seq=women-empowerment&orientation=landscape'
    },
    {
      title: 'Youth Leadership Development Program',
      date: 'January 2023 - Present',
      location: 'Canada, Africa',
      description: 'Developing the next generation of global leaders through comprehensive leadership training, international exchange programs, and mentorship opportunities. This program has engaged 2,500 young leaders aged 18-35 from diverse backgrounds. Participants receive training in policy analysis, project management, and cross-cultural communication. The program includes a prestigious fellowship component that places young leaders in international organizations and government agencies.',
      impact: '2,500 young leaders trained, 200 international placements, 50 policy initiatives',
      outcomes: [
        '200 young leaders placed in international organizations',
        '50 youth-led policy initiatives implemented',
        'Leadership network spanning 30 countries established',
        'Annual Youth Leadership Summit launched'
      ],
      image: 'https://readdy.ai/api/search-image?query=Diverse%20group%20of%20young%20leaders%20from%20different%20countries%20participating%20in%20leadership%20training%2C%20international%20youth%20conference%2C%20mentorship%20sessions%2C%20professional%20photography%20with%20inspiring%20atmosphere&width=600&height=400&seq=youth-leadership&orientation=landscape'
    },
    {
      title: 'Sustainable Energy Access Project',
      date: 'May 2023 - Ongoing',
      location: 'Rural Africa',
      description: 'Bringing clean, affordable energy to remote communities through solar power installations and energy efficiency programs. This project has provided electricity access to 150,000 people in 300 rural communities. Beyond installation, the program includes technical training for local technicians, energy entrepreneurship development, and sustainable financing mechanisms. The initiative has reduced household energy costs by 70% while eliminating reliance on harmful kerosene and wood fuel.',
      impact: '150,000 people with electricity access, 300 communities served, 70% cost reduction',
      outcomes: [
        '500 solar installations completed',
        '200 local technicians trained',
        'Energy entrepreneurship programs in 50 communities',
        'Carbon emissions reduced by 100,000 tons annually'
      ],
      image: 'https://readdy.ai/api/search-image?query=Solar%20panels%20being%20installed%20in%20rural%20African%20communities%2C%20clean%20energy%20infrastructure%2C%20local%20technicians%20working%20on%20renewable%20energy%20systems%2C%20sustainable%20development%20in%20action%2C%20professional%20photography&width=600&height=400&seq=solar-energy&orientation=landscape'
    },
    {
      title: 'Global Policy Research Network',
      date: 'August 2022 - Present',
      location: 'International',
      description: 'Establishing a world-class research network that produces evidence-based policy recommendations for global challenges. This network brings together 150 researchers from 40 institutions across 6 continents. The network has published 75 policy briefs, 25 comprehensive research reports, and influenced policy decisions in 20 countries. Research focuses on post-pandemic recovery, climate adaptation, sustainable development, and international cooperation.',
      impact: '150 researchers, 75 policy briefs, 25 research reports, 20 countries influenced',
      outcomes: [
        '75 evidence-based policy briefs published',
        'Policy recommendations adopted by 20 governments',
        'International research collaboration agreements signed',
        'Annual Global Policy Forum established'
      ],
      image: 'https://readdy.ai/api/search-image?query=International%20research%20collaboration%20with%20diverse%20researchers%20working%20together%2C%20policy%20analysis%20and%20research%20activities%2C%20academic%20conference%20setting%2C%20professional%20photography%20showing%20intellectual%20collaboration&width=600&height=400&seq=research-network&orientation=landscape'
    }
  ];

  const impactMetrics = [
    { number: '1M+', label: 'Trees Planted Globally', icon: 'ri-plant-line' },
    { number: '1000+', label: 'Global Leaders Engaged', icon: 'ri-team-line' },
    { number: '50+', label: 'Countries Reached', icon: 'ri-global-line' },
    { number: '300+', label: 'Policy Recommendations', icon: 'ri-file-text-line' },
    { number: '100+', label: 'International Events', icon: 'ri-calendar-event-line' },
    { number: '2M+', label: 'People Impacted', icon: 'ri-heart-line' }
  ];

  const successStories = [
    {
      title: 'Climate Resilience in East Africa',
      description: 'Implemented drought-resistant agricultural practices benefiting 75,000 farmers across Kenya, Uganda, and Ethiopia. Our comprehensive approach included seed distribution, irrigation training, and market linkage programs.',
      impact: '45% increase in crop yields during drought seasons',
      location: 'East Africa'
    },
    {
      title: 'Health System Strengthening',
      description: 'Supported pandemic preparedness initiatives in 15 countries, improving health infrastructure and response capabilities through technology transfer and capacity building programs.',
      impact: '3.5M people with improved healthcare access',
      location: 'Global'
    },
    {
      title: 'Trade Policy Reform',
      description: 'Advocated for fair trade policies that benefited small-scale farmers and producers in developing countries, establishing direct market access and fair pricing mechanisms.',
      impact: '40% increase in fair trade participation',
      location: 'Sub-Saharan Africa'
    },
    {
      title: 'Digital Innovation Hub Network',
      description: 'Established technology transfer programs connecting developed and developing countries for sustainable solutions, fostering innovation and entrepreneurship in underserved communities.',
      impact: '200+ innovative solutions deployed',
      location: 'Multiple Regions'
    },
    {
      title: 'Women\'s Cooperative Development',
      description: 'Supported the formation of 500 women\'s cooperatives across rural Africa, providing business training, microfinance access, and market linkage support for sustainable income generation.',
      impact: '25,000 women with increased income',
      location: 'Rural Africa'
    },
    {
      title: 'Youth Employment Initiative',
      description: 'Created employment opportunities for 10,000 young people through skills training, entrepreneurship support, and job placement programs in technology, agriculture, and renewable energy sectors.',
      impact: '10,000 youth employed in green economy',
      location: 'Africa & Canada'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Inspiring%20visual%20representation%20of%20global%20positive%20impact%20with%20diverse%20communities%20thriving%2C%20sustainable%20development%20in%20action%2C%20environmental%20restoration%2C%20people%20celebrating%20achievements%2C%20professional%20photography%20with%20warm%20lighting%20and%20uplifting%20atmosphere&width=1920&height=800&seq=impact-hero&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Measuring our contribution to global resilience through concrete achievements and lasting change across continents.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Impact by Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifiable results from our comprehensive approach to building global resilience and sustainable development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${metric.icon} w-8 h-8 flex items-center justify-center text-white`}></i>
                </div>
                <div className="text-4xl font-bold text-teal-600 mb-2">{metric.number}</div>
                <div className="text-gray-700 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Key Achievements Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Major Achievements</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Landmark initiatives that have shaped our approach to global resilience building and created lasting positive change in communities worldwide. Each achievement represents years of dedicated work, strategic partnerships, and unwavering commitment to sustainable development.
            </p>
          </div>
          
          <div className="space-y-20">
            {achievements.map((achievement, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-teal-600 rounded-full mr-4"></div>
                      <span className="text-teal-600 font-semibold text-lg">{achievement.date}</span>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                    <div className="flex items-center mb-6">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-gray-500 mr-2"></i>
                      <p className="text-gray-600 font-medium">{achievement.location}</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">{achievement.description}</p>
                    
                    <div className="bg-teal-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-teal-800 mb-3">Key Impact</h4>
                      <p className="text-teal-800 font-medium">{achievement.impact}</p>
                    </div>
                    
                    <div className="bg-emerald-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-emerald-800 mb-4">Major Outcomes</h4>
                      <ul className="space-y-2">
                        {achievement.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start">
                            <i className="ri-check-line w-5 h-5 flex items-center justify-center text-emerald-600 mr-3 mt-0.5"></i>
                            <span className="text-emerald-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our work creates lasting positive change in communities worldwide, transforming lives and building resilient futures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-teal-600 mr-3"></i>
                  <span className="text-teal-600 font-semibold">{story.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{story.description}</p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">{story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Annual Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation of our annual achievements and impact across all focus areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-file-text-line w-8 h-8 flex items-center justify-center text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2024 Annual Report</h3>
              <p className="text-gray-600 mb-4">Comprehensive overview of achievements, challenges, and future directions.</p>
              <a href="/reports/2024" className="text-teal-600 hover:text-teal-700 font-semibold cursor-pointer">
                Download Report →
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-bar-chart-line w-8 h-8 flex items-center justify-center text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Assessment 2024</h3>
              <p className="text-gray-600 mb-4">Detailed analysis of program outcomes and beneficiary feedback.</p>
              <a href="/reports/impact-2024" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                View Assessment →
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-funds-line w-8 h-8 flex items-center justify-center text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Report 2024</h3>
              <p className="text-gray-600 mb-4">Transparent accounting of resource allocation and financial stewardship.</p>
              <a href="/reports/financial-2024" className="text-emerald-600 hover:text-emerald-700 font-semibold cursor-pointer">
                View Financials →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of Our Impact
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us in creating lasting positive change and building resilience for communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support/donate"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Support Our Work
            </a>
            <a
              href="/partners"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
