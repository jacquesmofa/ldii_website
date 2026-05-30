import { useTranslation } from 'react-i18next';

export default function FocusAreasSection() {
  const { t } = useTranslation();

  const focusAreas = [
    {
      title: 'Climate Crisis Response',
      description: 'Developing crisis-proof social structures that address environmental challenges, droughts, and climate-related disasters.',
      icon: 'ri-leaf-line',
      href: '/what-we-do/climate-action'
    },
    {
      title: 'Global Health Systems',
      description: 'Strengthening pandemic preparedness and public health infrastructure for robust response to global health crises.',
      icon: 'ri-heart-pulse-line',
      href: '/what-we-do/global-health'
    },
    {
      title: 'Sustainable Food Systems',
      description: 'Ensuring sustainable food systems that withstand trade wars and climate-induced instability.',
      icon: 'ri-plant-line',
      href: '/what-we-do/sustainable-food'
    },
    {
      title: 'Trade & Economic Development',
      description: 'Promoting sustainable economic frameworks that minimize trade war impacts and foster long-term stability.',
      icon: 'ri-exchange-line',
      href: '/what-we-do/poverty-eradication'
    },
    {
      title: 'Investment & Social Enterprise',
      description: 'Facilitating responsible investment practices that create lasting impact and community self-sufficiency.',
      icon: 'ri-funds-line',
      href: '/what-we-do/technology-ai-research'
    },
    {
      title: 'Digital Inclusion',
      description: 'Bridging the digital divide through technology access, AI research, and digital literacy programs.',
      icon: 'ri-computer-line',
      href: '/what-we-do/digital-inclusion'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Focus Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Addressing the world's most pressing challenges through targeted interventions and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <a
              key={index}
              href={area.href}
              className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#00D9FF]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0A1E3D] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D9FF] transition-colors duration-300">
                  <i className={`${area.icon} text-white text-xl w-6 h-6 flex items-center justify-center group-hover:text-[#0A1E3D] transition-colors duration-300`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00D9FF] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#00D9FF] group-hover:gap-2 transition-all">
                    Learn More
                    <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/focus-areas"
            className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#00c4e6] transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
          >
            View All Focus Areas
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
          </a>
        </div>
      </div>
    </section>
  );
}