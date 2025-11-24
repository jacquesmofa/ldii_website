export default function LatestNewsPage() {
  const newsArticles = [
    {
      title: 'LDII Announces Ambitious 2026 Conference Series: Global Shocks and Cultural Resilience',
      date: 'January 15, 2025',
      category: 'Conference News',
      image: 'https://readdy.ai/api/search-image?query=Professional%20news%20announcement%20with%20international%20conference%20series%20imagery%2C%20modern%20press%20release%20design%2C%20global%20summit%20promotion%20materials%2C%20high-quality%20graphic%20design&width=800&height=500&seq=news-conf-2026&orientation=landscape',
      excerpt: 'LDII unveils an exciting lineup of international conferences planned for 2026, including the Global Shocks Global South Conference and Cultural Resilience One Planet Conference (CROP).',
      content: 'Livelihood Development International Initiatives (LDII) is proud to announce an ambitious series of international conferences scheduled for 2026. The lineup includes the Global Shocks Global South Conference, which will bring together over 1,000 delegates from across Africa, Asia, and Latin America to address systemic global challenges. Additionally, the Cultural Resilience One Planet Conference (CROP) will explore the vital role of cultural heritage in building community resilience. The Nordic East Africa Business Economic Cooperation (NEABEC) summit in Helsinki will focus on fintech, technology transfer, and trade partnerships between Nordic countries and East Africa.',
      author: 'LDII Communications Team'
    },
    {
      title: '2nd International Post-COVID Conference Achieves Major Success with 500+ Delegates',
      date: 'September 15, 2024',
      category: 'Event Report',
      image: 'https://readdy.ai/api/search-image?query=Successful%20international%20conference%20with%20diverse%20delegates%20celebrating%20achievements%2C%20conference%20highlights%20and%20success%2C%20professional%20event%20documentation%2C%20celebration%20atmosphere&width=800&height=500&seq=news-postcovid&orientation=landscape',
      excerpt: 'The recent conference in Brampton achieved significant outcomes with 20 policy recommendations, 35 new international partnerships, and $50 million in funding commitments.',
      content: 'The 2nd International Post-COVID Conference held in Brampton, Ontario from September 8-10, 2024, exceeded all expectations with over 500 delegates from 40+ countries participating. The conference produced the landmark Brampton Declaration on Global Resilience, which has been adopted by 35 nations. Key outcomes include the establishment of the International Post-COVID Recovery Network, 20 comprehensive policy recommendations, and $50 million in funding commitments from participating nations. The conference addressed critical questions about future global shocks, AI safety, international trade, and food security.',
      author: 'Dr. Amara Okafor, Executive Director'
    },
    {
      title: 'LDII Achieves Historic One Million Trees Milestone',
      date: 'August 20, 2024',
      category: 'Environmental',
      image: 'https://readdy.ai/api/search-image?query=Massive%20tree%20planting%20celebration%20with%20community%20members%20and%20volunteers%2C%20one%20million%20trees%20milestone%20achievement%2C%20environmental%20conservation%20success%2C%20professional%20documentary%20photography&width=800&height=500&seq=news-trees&orientation=landscape',
      excerpt: 'Our Global Tree Planting Initiative reaches the historic milestone of one million trees planted across 15 countries in Africa and North America.',
      content: 'LDII is thrilled to announce the achievement of a historic milestone: over one million trees have been planted through our Global Tree Planting Initiative. This massive reforestation effort spans 15 countries across Africa and North America, creating 5,000 green jobs, establishing 50 community-managed forest reserves, and sequestering an estimated 250,000 tons of CO2 annually. The initiative goes beyond simple tree planting, integrating community development, climate education, and sustainable livelihood creation. Local communities are trained in forest management, agroforestry techniques, and carbon credit systems.',
      author: 'James Rodriguez, Climate Action Director'
    },
    {
      title: 'New Partnership with UN Development Programme Strengthens Global Capacity',
      date: 'November 30, 2024',
      category: 'Partnerships',
      image: 'https://readdy.ai/api/search-image?query=Professional%20partnership%20signing%20ceremony%20between%20international%20organizations%2C%20diplomatic%20handshake%2C%20UN%20and%20NGO%20representatives%2C%20formal%20agreement%20signing%2C%20high-quality%20event%20photography&width=800&height=500&seq=news-undp&orientation=landscape',
      excerpt: 'Strategic partnership with UNDP will enhance global capacity for crisis preparedness and response coordination across multiple regions.',
      content: 'LDII has signed a strategic partnership agreement with the United Nations Development Programme (UNDP) to enhance global capacity for crisis preparedness and response coordination. This partnership will leverage UNDP\'s extensive network and LDII\'s community-based expertise to strengthen resilience in vulnerable communities worldwide. Key areas of collaboration include pandemic preparedness, climate adaptation, economic recovery, and digital inclusion. The partnership will initially focus on 15 priority countries across Africa and Asia.',
      author: 'LDII Communications Team'
    },
    {
      title: 'Comprehensive Climate Resilience Research Published',
      date: 'December 20, 2024',
      category: 'Research',
      image: 'https://readdy.ai/api/search-image?query=Climate%20research%20publication%20with%20scientific%20charts%20and%20graphs%2C%20environmental%20data%20visualization%2C%20professional%20academic%20publication%20design%2C%20research%20findings%20presentation&width=800&height=500&seq=news-research&orientation=landscape',
      excerpt: 'New comprehensive study reveals key strategies for building community resilience against climate-related shocks in vulnerable regions.',
      content: 'LDII\'s research team has published a comprehensive study on climate resilience strategies for vulnerable communities. The research, conducted across 20 countries over three years, identifies key factors that enable communities to adapt to and recover from climate-related shocks. Key findings include the importance of diversified livelihoods, community-based early warning systems, climate-smart agriculture, and strong social networks. The study provides actionable recommendations for policy makers, development practitioners, and community leaders.',
      author: 'Dr. Sarah Johnson, Research Director'
    },
    {
      title: 'Digital Innovation Hubs Expand to Three New Countries',
      date: 'October 15, 2024',
      category: 'Programs',
      image: 'https://readdy.ai/api/search-image?query=Modern%20technology%20innovation%20hub%20opening%20ceremony%20with%20young%20entrepreneurs%2C%20digital%20skills%20training%20center%2C%20startup%20incubator%20launch%2C%20professional%20technology%20photography&width=800&height=500&seq=news-digital&orientation=landscape',
      excerpt: 'LDII expands its Digital Innovation Hub network with new centers in Nigeria, Tanzania, and Rwanda, bringing the total to 15 hubs across Africa.',
      content: 'LDII is expanding its Digital Innovation Hub network with the opening of three new centers in Nigeria, Tanzania, and Rwanda. These hubs will provide technology training, entrepreneurship support, and access to digital tools for underserved communities. The expansion brings the total number of innovation hubs to 15 across Africa. Since the program\'s launch, over 3,000 young entrepreneurs have received training, 500 tech startups have been launched, and $15 million in startup funding has been secured. The new hubs will focus on fintech, agritech, and healthtech solutions.',
      author: 'Dr. Priya Sharma, Innovation Director'
    },
    {
      title: 'Women\'s Economic Empowerment Initiative Reaches 15,000 Entrepreneurs',
      date: 'September 5, 2024',
      category: 'Programs',
      image: 'https://readdy.ai/api/search-image?query=African%20women%20entrepreneurs%20celebrating%20business%20success%2C%20women-led%20businesses%20and%20economic%20empowerment%2C%20microfinance%20success%20stories%2C%20professional%20photography&width=800&height=500&seq=news-women&orientation=landscape',
      excerpt: 'Our Women\'s Economic Empowerment Initiative has now supported 15,000 women entrepreneurs across Africa, creating over 30,000 jobs.',
      content: 'LDII\'s Women\'s Economic Empowerment Initiative has reached a significant milestone, having supported 15,000 women entrepreneurs across Africa. The program has distributed over $25 million in microfinance, achieved a remarkable 95% loan repayment rate, and created more than 30,000 jobs. Women participants have seen their incomes increase by an average of 150%. The initiative provides comprehensive business training, microfinance access, and ongoing mentorship to help women start and grow sustainable businesses.',
      author: 'Grace Nakato, Women\'s Programs Director'
    },
    {
      title: 'Youth Leadership Program Graduates 500 Young Leaders',
      date: 'July 25, 2024',
      category: 'Youth',
      image: 'https://readdy.ai/api/search-image?query=Youth%20leadership%20graduation%20ceremony%20with%20diverse%20young%20leaders%20from%20different%20countries%2C%20leadership%20program%20completion%20celebration%2C%20inspiring%20atmosphere%2C%20professional%20event%20photography&width=800&height=500&seq=news-youth&orientation=landscape',
      excerpt: 'The 2024 cohort of our Youth Leadership Development Program graduates 500 young leaders from 30 countries, ready to drive positive change.',
      content: 'LDII\'s Youth Leadership Development Program has graduated its largest cohort yet, with 500 young leaders from 30 countries completing the comprehensive program. Participants received training in policy analysis, project management, cross-cultural communication, and leadership skills. The program includes a prestigious fellowship component that places young leaders in international organizations and government agencies. Alumni of the program have gone on to launch 50 youth-led policy initiatives and establish a leadership network spanning 30 countries.',
      author: 'Ahmed Hassan, Youth Programs Coordinator'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=News%20and%20media%20with%20newspapers%20magazines%20and%20digital%20screens%20showing%20headlines%2C%20journalism%20and%20communication%2C%20professional%20news%20environment%2C%20high-quality%20photography&width=1920&height=800&seq=news-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest News
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest developments, achievements, and announcements from LDII.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest news, program updates, and organizational announcements.
            </p>
          </div>

          <div className="space-y-12">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center flex-wrap gap-3 mb-4">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h3>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">{article.excerpt}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{article.content}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {article.author}</span>
                      <a
                        href={`/news/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-orange-600 hover:text-orange-700 font-semibold cursor-pointer inline-flex items-center space-x-2"
                      >
                        <span>Read Full Article</span>
                        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Subscribe to Newsletter
            </a>
            <a
              href="/events/news/press-releases"
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Press Releases
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
