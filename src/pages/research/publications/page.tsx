export default function PublicationsPage() {
  const publications = [
    {
      title: "Building Resilient Communities: A Framework for Post-Pandemic Recovery",
      authors: "Dr. Sarah Johnson, Dr. Michael Chen, Dr. Amara Okafor",
      date: "March 2024",
      type: "Research Report",
      pages: "156 pages",
      description: "This comprehensive research report examines the multifaceted challenges communities face in the post-pandemic era and presents an evidence-based framework for building resilience. The study draws on data from 45 countries and includes case studies from diverse geographic and socioeconomic contexts. Key findings highlight the importance of integrated approaches that address health systems, economic recovery, social cohesion, and digital infrastructure simultaneously.",
      image: "https://readdy.ai/api/search-image?query=professional%20researchers%20analyzing%20community%20development%20data%20with%20charts%20and%20graphs%20in%20modern%20office%20setting%2C%20diverse%20team%20collaboration%2C%20bright%20natural%20lighting%2C%20contemporary%20workspace&width=800&height=600&seq=pub1&orientation=landscape",
      downloadUrl: "#",
      tags: ["Community Development", "Pandemic Recovery", "Resilience", "Global Health"]
    },
    {
      title: "Climate Finance for Adaptation: Innovative Mechanisms for Vulnerable Nations",
      authors: "Dr. Elena Rodriguez, Dr. James Omondi, Dr. Li Wei",
      date: "February 2024",
      type: "Policy Analysis",
      pages: "98 pages",
      description: "This policy analysis explores innovative financing mechanisms to support climate adaptation in the world's most vulnerable nations. The research examines successful models from 30 countries, including green bonds, climate insurance schemes, and blended finance approaches. The publication provides detailed recommendations for policymakers, international organizations, and private sector actors seeking to scale up adaptation finance while ensuring equitable access and local ownership.",
      image: "https://readdy.ai/api/search-image?query=climate%20change%20adaptation%20planning%20with%20financial%20charts%20and%20environmental%20data%2C%20sustainable%20development%20meeting%2C%20professional%20setting%20with%20green%20technology%20elements&width=800&height=600&seq=pub2&orientation=landscape",
      downloadUrl: "#",
      tags: ["Climate Finance", "Adaptation", "Policy", "Sustainable Development"]
    },
    {
      title: "Digital Inclusion in Rural Communities: Lessons from Canada and Beyond",
      authors: "Dr. Priya Sharma, Dr. Robert Thompson, Maria Santos",
      date: "January 2024",
      type: "Case Study Collection",
      pages: "124 pages",
      description: "This publication presents 15 detailed case studies of successful digital inclusion initiatives in rural communities across Canada, Latin America, Africa, and Asia. Each case study examines the unique challenges faced, strategies employed, partnerships developed, and outcomes achieved. The research identifies common success factors including community-led design, affordable connectivity solutions, relevant digital literacy training, and sustainable business models that can be adapted to diverse contexts.",
      image: "https://readdy.ai/api/search-image?query=rural%20community%20members%20learning%20digital%20technology%20in%20modern%20training%20center%2C%20diverse%20age%20groups%20using%20computers%20and%20tablets%2C%20supportive%20learning%20environment&width=800&height=600&seq=pub3&orientation=landscape",
      downloadUrl: "#",
      tags: ["Digital Inclusion", "Rural Development", "Technology Access", "Case Studies"]
    },
    {
      title: "Food Systems Transformation: Pathways to Sustainability and Equity",
      authors: "Dr. Ahmed Hassan, Dr. Sophie Dubois, Dr. Carlos Mendez",
      date: "December 2023",
      type: "Research Monograph",
      pages: "210 pages",
      description: "This extensive research monograph examines the complex challenges facing global food systems and presents evidence-based pathways toward sustainability and equity. Drawing on five years of research across 60 countries, the publication analyzes the interconnections between agricultural practices, climate change, nutrition, economic viability, and social justice. It offers practical recommendations for transforming food systems at local, national, and global scales while ensuring food security for all.",
      image: "https://readdy.ai/api/search-image?query=sustainable%20agriculture%20and%20food%20systems%20research%20with%20fresh%20produce%2C%20modern%20farming%20technology%2C%20scientists%20examining%20crops%20in%20greenhouse%20setting&width=800&height=600&seq=pub4&orientation=landscape",
      downloadUrl: "#",
      tags: ["Food Systems", "Sustainability", "Agriculture", "Food Security"]
    },
    {
      title: "Youth Empowerment and Mental Health: An Integrated Approach",
      authors: "Dr. Jennifer Lee, Dr. Marcus Williams, Dr. Fatima Al-Rashid",
      date: "November 2023",
      type: "Program Evaluation",
      pages: "87 pages",
      description: "This program evaluation report presents findings from a three-year study of integrated youth empowerment and mental health initiatives across 12 Canadian cities. The research demonstrates the effectiveness of holistic approaches that combine mental health support, skills development, employment training, and community engagement. The publication includes detailed program models, implementation guidelines, and measurement frameworks that can be adapted by organizations working with youth in diverse communities.",
      image: "https://readdy.ai/api/search-image?query=diverse%20youth%20group%20participating%20in%20empowerment%20workshop%2C%20supportive%20mentors%2C%20bright%20modern%20community%20center%2C%20positive%20atmosphere%20with%20collaborative%20activities&width=800&height=600&seq=pub5&orientation=landscape",
      downloadUrl: "#",
      tags: ["Youth Development", "Mental Health", "Program Evaluation", "Community Programs"]
    },
    {
      title: "Poverty Eradication Through Inclusive Economic Growth: A Multi-Country Analysis",
      authors: "Dr. David Osei, Dr. Anna Kowalski, Dr. Raj Patel",
      date: "October 2023",
      type: "Comparative Study",
      pages: "178 pages",
      description: "This comparative study analyzes poverty eradication strategies in 25 countries that have achieved significant progress in reducing extreme poverty while promoting inclusive economic growth. The research examines policy frameworks, institutional arrangements, investment priorities, and social protection systems that have proven effective. Special attention is given to ensuring that economic growth benefits marginalized populations, including women, youth, indigenous communities, and persons with disabilities.",
      image: "https://readdy.ai/api/search-image?query=economic%20development%20and%20poverty%20reduction%20programs%2C%20community%20members%20receiving%20training%20and%20support%2C%20diverse%20participants%20in%20professional%20development%20setting&width=800&height=600&seq=pub6&orientation=landscape",
      downloadUrl: "#",
      tags: ["Poverty Eradication", "Economic Growth", "Inclusive Development", "Social Protection"]
    },
    {
      title: "Strengthening Health Systems in Post-Conflict Settings",
      authors: "Dr. Amina Yusuf, Dr. Thomas Anderson, Dr. Maria Gonzalez",
      date: "September 2023",
      type: "Technical Report",
      pages: "142 pages",
      description: "This technical report provides comprehensive guidance on strengthening health systems in post-conflict settings, drawing on experiences from 18 countries. The publication addresses critical challenges including rebuilding infrastructure, training health workers, ensuring medicine supply chains, establishing governance structures, and building community trust. It presents practical tools, checklists, and frameworks that can guide health system reconstruction efforts while ensuring sustainability and local ownership.",
      image: "https://readdy.ai/api/search-image?query=healthcare%20workers%20providing%20medical%20services%20in%20rebuilt%20health%20facility%2C%20modern%20medical%20equipment%2C%20diverse%20medical%20team%20serving%20community%20members&width=800&height=600&seq=pub7&orientation=landscape",
      downloadUrl: "#",
      tags: ["Health Systems", "Post-Conflict", "Healthcare", "System Strengthening"]
    },
    {
      title: "Women's Economic Empowerment: Barriers and Breakthrough Strategies",
      authors: "Dr. Grace Mwangi, Dr. Isabella Romano, Dr. Aisha Khan",
      date: "August 2023",
      type: "Research Report",
      pages: "134 pages",
      description: "This research report examines persistent barriers to women's economic empowerment across 40 countries and identifies breakthrough strategies that have achieved transformative results. The study analyzes multiple dimensions including access to finance, property rights, education and skills development, entrepreneurship support, and workplace equality. The publication features inspiring case studies of women-led enterprises and provides actionable recommendations for policymakers, development practitioners, and private sector actors.",
      image: "https://readdy.ai/api/search-image?query=women%20entrepreneurs%20and%20business%20leaders%20in%20professional%20setting%2C%20diverse%20women%20in%20business%20meeting%2C%20modern%20office%20with%20collaborative%20workspace&width=800&height=600&seq=pub8&orientation=landscape",
      downloadUrl: "#",
      tags: ["Women's Empowerment", "Economic Development", "Gender Equality", "Entrepreneurship"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Research%20publications%20and%20academic%20papers%2C%20professional%20library%20setting%2C%20research%20documents%2C%20professional%20photography&width=1920&height=1080&seq=publications-hero&orientation=landscape)`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Research Publications</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            Comprehensive research reports, case studies, and technical publications advancing knowledge in international development
          </p>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-cover object-top min-h-[300px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {pub.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <i className="ri-user-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {pub.authors}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-calendar-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {pub.date}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-file-text-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {pub.type}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-book-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {pub.pages}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={pub.downloadUrl}
                        className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-download-line w-5 h-5 flex items-center justify-center mr-2"></i>
                        Download PDF
                      </a>
                      <button className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                        <i className="ri-share-line w-5 h-5 flex items-center justify-center mr-2"></i>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Academic%20research%20and%20publications%2C%20professional%20research%20environment%2C%20scholarly%20work%2C%20professional%20photography&width=1920&height=800&seq=publications-cta&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated on Our Research</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive notifications about new publications and research findings
          </p>
          <a
            href="/contact"
            className="relative z-20 inline-block bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Subscribe to Updates
          </a>
        </div>
      </section>
    </div>
  );
}
