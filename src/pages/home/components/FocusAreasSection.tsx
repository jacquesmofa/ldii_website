import { useTranslation } from 'react-i18next';

export default function FocusAreasSection() {
  const { t } = useTranslation();
  
  const focusAreas = [
    {
      title: 'Climate Crisis Response',
      description: 'Developing crisis-proof social structures that address environmental challenges, droughts, and climate-related disasters.',
      icon: 'ri-leaf-line',
      image: 'https://readdy.ai/api/search-image?query=Climate%20action%20and%20environmental%20protection%20with%20renewable%20energy%20solutions%2C%20green%20technology%2C%20sustainable%20development%2C%20tree%20planting%20initiatives%2C%20clean%20environment%2C%20professional%20environmental%20photography&width=400&height=300&seq=climate-focus&orientation=landscape'
    },
    {
      title: 'Global Health Systems',
      description: 'Strengthening pandemic preparedness and public health infrastructure for robust response to global health crises.',
      icon: 'ri-heart-pulse-line',
      image: 'https://readdy.ai/api/search-image?query=Global%20health%20systems%20and%20medical%20infrastructure%2C%20healthcare%20professionals%2C%20modern%20medical%20facilities%2C%20pandemic%20preparedness%2C%20public%20health%20initiatives%2C%20professional%20medical%20photography&width=400&height=300&seq=health-focus&orientation=landscape'
    },
    {
      title: 'Sustainable Food Systems',
      description: 'Ensuring sustainable food systems that withstand trade wars and climate-induced instability.',
      icon: 'ri-plant-line',
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20agriculture%20and%20food%20security%2C%20modern%20farming%20techniques%2C%20food%20production%20systems%2C%20agricultural%20sustainability%2C%20community%20gardens%2C%20professional%20agricultural%20photography&width=400&height=300&seq=food-focus&orientation=landscape'
    },
    {
      title: 'Health Systems and Resilience',
      description: 'Building resilient health systems that promote universal access and health equity for all communities.',
      icon: 'ri-shield-cross-line',
      image: 'https://readdy.ai/api/search-image?query=Health%20system%20resilience%20and%20community%20healthcare%2C%20medical%20professionals%20serving%20diverse%20communities%2C%20health%20equity%20initiatives%2C%20healthcare%20accessibility%2C%20professional%20healthcare%20photography&width=400&height=300&seq=health-resilience&orientation=landscape'
    },
    {
      title: 'Trade & Economic Development',
      description: 'Promoting sustainable economic frameworks that minimize trade war impacts and foster long-term stability.',
      icon: 'ri-exchange-line',
      image: 'https://readdy.ai/api/search-image?query=International%20trade%20and%20economic%20development%2C%20global%20commerce%2C%20fair%20trade%20practices%2C%20economic%20empowerment%2C%20business%20partnerships%2C%20professional%20business%20photography&width=400&height=300&seq=trade-focus&orientation=landscape'
    },
    {
      title: 'Investment & Social Enterprise',
      description: 'Facilitating responsible investment practices that create lasting impact and community self-sufficiency.',
      icon: 'ri-funds-line',
      image: 'https://readdy.ai/api/search-image?query=Social%20enterprise%20and%20sustainable%20investment%2C%20community%20development%20projects%2C%20responsible%20investing%2C%20social%20impact%20initiatives%2C%20economic%20empowerment%2C%20professional%20development%20photography&width=400&height=300&seq=investment-focus&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Strategic Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building global resilience through targeted interventions designed to counter systemic "Global Shocks"
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
                  <i className={`${area.icon} text-3xl text-[#00D9FF]`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00C4E6] transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            {t('focusAreas.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
