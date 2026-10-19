import { useEffect, useState } from 'react';

export default function AchievementsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Celebration%20of%20achievements%20and%20success%20with%20diverse%20people%20celebrating%20milestones%2C%20awards%20and%20recognition%2C%20global%20impact%20visualization%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=achievements-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=International%20conference%20success%2C%20global%20leaders%20celebrating%20achievements%2C%20milestone%20celebrations%2C%20professional%20event%20photography%2C%20ultra%20high%20resolution%208k&width=1920&height=800&seq=achievements-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Community%20transformation%20success%20stories%2C%20people%20celebrating%20development%20achievements%2C%20sustainable%20development%20milestones%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=achievements-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const majorAchievements = [
    {
      year: '2024',
      title: '2nd International Post-COVID Conference',
      description: 'Successfully convened delegates from across the globe in Brampton, Ontario, addressing critical post-pandemic recovery challenges. The conference produced the Brampton Declaration on Global Resilience, established the International Post-COVID Recovery Network, and secured significant funding commitments from participating nations.',
      image: 'https://readdy.ai/api/search-image?query=Large%20international%20conference%20with%20hundreds%20of%20diverse%20delegates%20from%20multiple%20countries%2C%20professional%20conference%20hall%20with%20stage%20and%20screens%2C%20global%20summit%20atmosphere%2C%20multicultural%20audience%2C%20high-resolution%20event%20photography%20with%20excellent%20lighting&width=800&height=500&seq=achievement-conference-2024&orientation=landscape',
      outcomes: [
        'Brampton Declaration adopted by participating nations',
        'International Post-COVID Recovery Network established',
        'Significant funding commitments secured',
        'Policy recommendations developed across sectors',
        'New international partnerships formed'
      ]
    },
    {
      year: '2024',
      title: 'One Million Trees Milestone',
      description: 'Achieved the historic milestone of planting over one million trees across countries in Africa and North America. This massive reforestation initiative has created green jobs, established community-managed forest reserves, and is sequestering significant carbon annually while restoring critical biodiversity corridors.',
      image: 'https://readdy.ai/api/search-image?query=Massive%20tree%20planting%20celebration%20with%20thousands%20of%20volunteers%20and%20community%20members%2C%20newly%20planted%20forest%20areas%20across%20multiple%20landscapes%2C%20environmental%20achievement%2C%20people%20celebrating%20conservation%20success%2C%20professional%20documentary%20photography&width=800&height=500&seq=achievement-trees&orientation=landscape',
      outcomes: [
        'Over one million trees planted across countries',
        'Green jobs created in rural communities',
        'Community-managed forest reserves established',
        'Significant annual carbon sequestration',
        'Biodiversity corridors restored across continents'
      ]
    },
    {
      year: '2023-2024',
      title: 'African Health Systems Transformation',
      description: 'Completed comprehensive two-year program strengthening health infrastructure across Kenya, Uganda, Ghana, and Nigeria. Established new health clinics, trained healthcare workers, implemented digital health record systems, and reached communities with essential health services.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20facilities%20in%20Africa%20with%20medical%20professionals%20providing%20care%2C%20new%20health%20clinics%20with%20equipment%2C%20healthcare%20workers%20training%2C%20patients%20receiving%20treatment%2C%20professional%20healthcare%20photography%20with%20warm%20lighting&width=800&height=500&seq=achievement-health&orientation=landscape',
      outcomes: [
        'New health clinics established across four nations',
        'Healthcare workers trained and deployed',
        'Communities reached with essential health services',
        'Significant reduction in maternal mortality',
        'Digital health records implemented in facilities'
      ]
    },
    {
      year: '2023',
      title: 'Climate-Smart Agriculture Revolution',
      description: 'Transformed agricultural practices for thousands of smallholder farmers across East and West Africa through innovative climate-resilient farming techniques. Introduced drought-resistant crops, efficient irrigation systems, and sustainable farming practices.',
      image: 'https://readdy.ai/api/search-image?query=African%20farmers%20celebrating%20successful%20harvest%20with%20modern%20sustainable%20agriculture%2C%20drought-resistant%20crops%20growing%20in%20organized%20fields%2C%20efficient%20irrigation%20systems%2C%20agricultural%20transformation%2C%20professional%20photography%20with%20golden%20hour%20lighting&width=800&height=500&seq=achievement-agriculture&orientation=landscape',
      outcomes: [
        'Thousands of farmers reached across the region',
        'Significant average yield increase achieved',
        'Reduction in water usage through efficient irrigation',
        'Farmer incomes substantially increased',
        'Vast agricultural lands improved'
      ]
    },
    {
      year: '2023',
      title: 'Digital Innovation Hub Network',
      description: 'Established digital innovation centers across Canada, Ghana, and Kenya, providing technology training and entrepreneurship support to underserved communities. Young entrepreneurs trained, tech startups launched, and significant startup funding secured.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20technology%20innovation%20hub%20with%20young%20entrepreneurs%20working%20on%20computers%2C%20startup%20incubator%20environment%2C%20digital%20skills%20training%2C%20successful%20tech%20startups%2C%20professional%20technology%20photography%20with%20bright%20modern%20lighting&width=800&height=500&seq=achievement-digital&orientation=landscape',
      outcomes: [
        'Digital innovation centers established across three countries',
        'Entrepreneurs trained in digital skills',
        'Tech startups successfully launched',
        'Startup funding secured for entrepreneurs',
        'Communities reached with digital literacy programs'
      ]
    },
    {
      year: '2022-2024',
      title: "Women's Economic Empowerment Initiative",
      description: 'Empowered women entrepreneurs across Africa through comprehensive business training, microfinance access, and mentorship programs. Achieved exceptional loan repayment rates, created thousands of jobs, and significantly increased incomes.',
      image: 'https://readdy.ai/api/search-image?query=African%20women%20entrepreneurs%20celebrating%20business%20success%2C%20women-led%20businesses%20and%20markets%2C%20microfinance%20activities%2C%20economic%20empowerment%20in%20action%2C%20professional%20photography%20showing%20successful%20women%20in%20various%20business%20activities&width=800&height=500&seq=achievement-women&orientation=landscape',
      outcomes: [
        'Women entrepreneurs supported across the continent',
        'Thousands of jobs created through enterprise',
        'Microfinance distributed to support businesses',
        'Exceptional loan repayment rate maintained',
        'Significant average income increase achieved'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-green-600 to-emerald-700 overflow-hidden">
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
            Our Achievements
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Celebrating landmark accomplishments that demonstrate our commitment to building global resilience and creating lasting positive change.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Landmark Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Major milestones that have shaped our journey and created transformative impact in communities worldwide.
            </p>
          </div>

          <div className="space-y-16">
            {majorAchievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="order-2 lg:order-1">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://picsum.photos/seed/achievement-${index}/800/500.jpg`;
                      }}
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-10">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-green-600 font-bold text-lg">{achievement.year}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{achievement.title}</h3>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">{achievement.description}</p>
                    
                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-green-800 mb-4">Key Outcomes</h4>
                      <ul className="space-y-3">
                        {achievement.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start">
                            <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mr-3 mt-0.5 flex-shrink-0"></i>
                            <span className="text-green-700">{outcome}</span>
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

      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=People%20joining%20hands%20together%20for%20global%20impact%2C%20diverse%20community%20united%20for%20positive%20change%2C%20hope%20and%20determination%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=achievements-cta-bg&orientation=landscape)'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0A1E3D]/90"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of Our Next Achievement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us in creating even greater impact and building a more resilient future for communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/partners#donate"
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