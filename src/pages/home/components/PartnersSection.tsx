import { useRef, useState } from 'react';

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrevious = () => {
    if (scrollRef.current) {
      setIsPaused(true);
      scrollRef.current.scrollLeft -= 280;
      setTimeout(() => setIsPaused(false), 3000);
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      setIsPaused(true);
      scrollRef.current.scrollLeft += 280;
      setTimeout(() => setIsPaused(false), 3000);
    }
  };

  const partnerCategories = [
    {
      title: 'Government Partners',
      description: 'Collaborating with government agencies and ministries across multiple countries',
      icon: 'ri-government-line',
      count: '15+'
    },
    {
      title: 'International NGOs',
      description: 'Working with leading non-governmental organizations worldwide',
      icon: 'ri-global-line',
      count: '25+'
    },
    {
      title: 'Private Sector',
      description: 'Partnering with corporations committed to sustainable development',
      icon: 'ri-building-line',
      count: '30+'
    },
    {
      title: 'Academic Institutions',
      description: 'Research collaborations with universities and research centers',
      icon: 'ri-school-line',
      count: '10+'
    }
  ];

  const keyPartners = [
    {
      name: 'United Nations Development Programme',
      logo: 'https://readdy.ai/api/search-image?query=United%20Nations%20Development%20Programme%20UNDP%20official%20logo%20blue%20and%20white%20clean%20background%20professional%20organization%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=undp-logo-v2&orientation=squarish',
      website: 'https://www.undp.org',
      category: 'International Organization'
    },
    {
      name: 'World Health Organization',
      logo: 'https://readdy.ai/api/search-image?query=World%20Health%20Organization%20WHO%20official%20logo%20blue%20and%20white%20medical%20symbol%20clean%20background%20professional%20healthcare%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=who-logo-v2&orientation=squarish',
      website: 'https://www.who.int',
      category: 'Health Organization'
    },
    {
      name: 'African Union',
      logo: 'https://readdy.ai/api/search-image?query=African%20Union%20official%20logo%20green%20and%20gold%20colors%20continental%20organization%20emblem%20clean%20white%20background%20professional%20diplomatic%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=au-logo-v2&orientation=squarish',
      website: 'https://au.int',
      category: 'Regional Organization'
    },
    {
      name: 'CPLP - Community of Portuguese Language Countries',
      logo: 'https://readdy.ai/api/search-image?query=CPLP%20Community%20Portuguese%20Language%20Countries%20official%20logo%20blue%20and%20white%20lusophone%20organization%20emblem%20clean%20background%20professional%20diplomatic%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=cplp-logo-v2&orientation=squarish',
      website: 'https://www.cplp.org',
      category: 'Lusophone Organization'
    },
    {
      name: 'World Bank Group',
      logo: 'https://readdy.ai/api/search-image?query=World%20Bank%20Group%20official%20logo%20blue%20and%20white%20financial%20institution%20emblem%20clean%20background%20professional%20development%20finance%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=worldbank-logo-v2&orientation=squarish',
      website: 'https://www.worldbank.org',
      category: 'Financial Institution'
    },
    {
      name: 'International Monetary Fund',
      logo: 'https://readdy.ai/api/search-image?query=International%20Monetary%20Fund%20IMF%20official%20logo%20blue%20and%20white%20economic%20organization%20emblem%20clean%20background%20professional%20financial%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=imf-logo-v2&orientation=squarish',
      website: 'https://www.imf.org',
      category: 'Financial Institution'
    },
    {
      name: 'European Union',
      logo: 'https://readdy.ai/api/search-image?query=European%20Union%20EU%20official%20logo%20blue%20background%20with%20yellow%20stars%20circle%20emblem%20clean%20professional%20diplomatic%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=eu-logo-v2&orientation=squarish',
      website: 'https://europa.eu',
      category: 'Regional Organization'
    },
    {
      name: 'OECD',
      logo: 'https://readdy.ai/api/search-image?query=OECD%20Organization%20Economic%20Cooperation%20Development%20official%20logo%20blue%20and%20white%20clean%20background%20professional%20economic%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=oecd-logo-v2&orientation=squarish',
      website: 'https://www.oecd.org',
      category: 'Economic Organization'
    },
    {
      name: 'Climate Investment Funds',
      logo: 'https://readdy.ai/api/search-image?query=Climate%20Investment%20Funds%20CIF%20official%20logo%20green%20and%20blue%20environmental%20finance%20emblem%20clean%20background%20professional%20climate%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=cif-logo-v2&orientation=squarish',
      website: 'https://www.climateinvestmentfunds.org',
      category: 'Climate Finance'
    },
    {
      name: 'Green Climate Fund',
      logo: 'https://readdy.ai/api/search-image?query=Green%20Climate%20Fund%20GCF%20official%20logo%20green%20environmental%20finance%20emblem%20clean%20white%20background%20professional%20climate%20funding%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=gcf-logo-v2&orientation=squarish',
      website: 'https://www.greenclimate.fund',
      category: 'Climate Finance'
    },
    {
      name: 'International Development Research Centre',
      logo: 'https://readdy.ai/api/search-image?query=International%20Development%20Research%20Centre%20IDRC%20official%20logo%20blue%20and%20white%20research%20institution%20emblem%20clean%20background%20professional%20academic%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=idrc-logo-v2&orientation=squarish',
      website: 'https://www.idrc.ca',
      category: 'Research Institution'
    },
    {
      name: 'USAID',
      logo: 'https://readdy.ai/api/search-image?query=USAID%20United%20States%20Agency%20International%20Development%20official%20logo%20red%20white%20blue%20American%20flag%20colors%20clean%20background%20professional%20aid%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=usaid-logo-v2&orientation=squarish',
      website: 'https://www.usaid.gov',
      category: 'Development Agency'
    },
    {
      name: 'City of Brampton',
      logo: 'https://readdy.ai/api/search-image?query=City%20of%20Brampton%20Ontario%20official%20municipal%20logo%20Canadian%20city%20emblem%20clean%20white%20background%20professional%20government%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=brampton-logo-v2&orientation=squarish',
      website: 'https://www.brampton.ca',
      category: 'Municipal Government'
    },
    {
      name: 'Brampton Board of Trade',
      logo: 'https://readdy.ai/api/search-image?query=Brampton%20Board%20of%20Trade%20official%20logo%20business%20chamber%20commerce%20emblem%20clean%20background%20professional%20business%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=brampton-trade-logo-v2&orientation=squarish',
      website: 'https://www.bramptonbot.com',
      category: 'Business Organization'
    },
    {
      name: 'Toronto Region Board of Trade',
      logo: 'https://readdy.ai/api/search-image?query=Toronto%20Region%20Board%20of%20Trade%20official%20logo%20business%20chamber%20commerce%20emblem%20clean%20background%20professional%20business%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=toronto-trade-logo-v2&orientation=squarish',
      website: 'https://www.bot.com',
      category: 'Business Organization'
    },
    {
      name: 'Canadian Hispanic Chamber of Commerce',
      logo: 'https://readdy.ai/api/search-image?query=Canadian%20Hispanic%20Chamber%20of%20Commerce%20official%20logo%20business%20organization%20emblem%20clean%20background%20professional%20business%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=hispanic-chamber-logo-v2&orientation=squarish',
      website: 'https://www.canadianhispanicchamber.com',
      category: 'Business Organization'
    },
    {
      name: 'Government of Canada',
      logo: 'https://readdy.ai/api/search-image?query=Government%20of%20Canada%20official%20logo%20Canadian%20flag%20maple%20leaf%20emblem%20clean%20white%20background%20professional%20government%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=canada-gov-logo-v2&orientation=squarish',
      website: 'https://www.canada.ca',
      category: 'Federal Government'
    },
    {
      name: 'Province of Ontario',
      logo: 'https://readdy.ai/api/search-image?query=Province%20of%20Ontario%20official%20government%20logo%20Canadian%20provincial%20emblem%20trillium%20flower%20clean%20white%20background%20professional%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=ontario-prov-logo-v2&orientation=squarish',
      website: 'https://www.ontario.ca',
      category: 'Provincial Government'
    },
    {
      name: 'RBC Royal Bank',
      logo: 'https://readdy.ai/api/search-image?query=RBC%20Royal%20Bank%20of%20Canada%20official%20logo%20blue%20and%20yellow%20lion%20shield%20emblem%20clean%20white%20background%20professional%20banking%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=rbc-logo-v2&orientation=squarish',
      website: 'https://www.rbc.com',
      category: 'Financial Institution'
    },
    {
      name: 'Ethiopian Airlines',
      logo: 'https://readdy.ai/api/search-image?query=Ethiopian%20Airlines%20official%20logo%20green%20yellow%20red%20colors%20airline%20emblem%20clean%20white%20background%20professional%20aviation%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=ethiopian-airlines-logo-v2&orientation=squarish',
      website: 'https://www.ethiopianairlines.com',
      category: 'Aviation Partner'
    },
    {
      name: 'Pearson Convention Centre',
      logo: 'https://readdy.ai/api/search-image?query=Pearson%20Convention%20Centre%20Toronto%20official%20logo%20modern%20venue%20emblem%20clean%20white%20background%20professional%20event%20space%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=pearson-convention-logo-v2&orientation=squarish',
      website: 'https://www.torontopearson.com',
      category: 'Venue Partner'
    },
    {
      name: 'KWETU Connect Australia',
      logo: 'https://readdy.ai/api/search-image?query=KWETU%20Connect%20Australia%20official%20logo%20community%20organization%20emblem%20clean%20white%20background%20professional%20networking%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=kwetu-logo-v2&orientation=squarish',
      website: 'https://www.kwetuconnect.com.au',
      category: 'Community Organization'
    },
    {
      name: 'IGAD',
      logo: 'https://readdy.ai/api/search-image?query=IGAD%20Intergovernmental%20Authority%20on%20Development%20official%20logo%20East%20Africa%20regional%20organization%20emblem%20clean%20white%20background%20professional%20diplomatic%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=igad-logo-v2&orientation=squarish',
      website: 'https://igad.int',
      category: 'Regional Organization'
    },
    {
      name: 'Mamy Kaya',
      logo: 'https://readdy.ai/api/search-image?query=Mamy%20Kaya%20organization%20official%20logo%20clean%20background%20professional%20branding%20emblem%20high%20contrast%20clear%20visibility&width=300&height=300&seq=mamy-kaya-logo-v2&orientation=squarish',
      website: 'https://www.mamykaya.com',
      category: 'Partner Organization'
    },
    {
      name: 'Hilton Garden Inn Brampton',
      logo: 'https://readdy.ai/api/search-image?query=Hilton%20Garden%20Inn%20official%20hotel%20logo%20hospitality%20brand%20emblem%20clean%20white%20background%20professional%20hotel%20branding%20high%20contrast%20clear%20visibility&width=300&height=300&seq=hilton-brampton-logo-v2&orientation=squarish',
      website: 'https://www.hilton.com/en/hotels/yyzbrgi-hilton-garden-inn-toronto-brampton/',
      category: 'Hospitality Partner'
    }
  ];

  const duplicatedPartners = [...keyPartners, ...keyPartners];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Global Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building resilience through strategic partnerships across government, civil society, and private sector
          </p>
        </div>
        
        {/* Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnerCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-corporate-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${category.icon} w-8 h-8 flex items-center justify-center text-corporate-blue-600`}></i>
              </div>
              <div className="text-3xl font-bold text-corporate-blue-600 mb-2">{category.count}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
        
        {/* Sliding Partner Logos with Enhanced Visibility */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16 overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Strategic Partners</h3>
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-tech-teal-500 text-gray-700 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer -ml-6"
              aria-label="Previous partners"
            >
              <i className="ri-arrow-left-s-line w-6 h-6 flex items-center justify-center"></i>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-tech-teal-500 text-gray-700 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer -mr-6"
              aria-label="Next partners"
            >
              <i className="ri-arrow-right-s-line w-6 h-6 flex items-center justify-center"></i>
            </button>

            <div className="overflow-hidden px-4">
              <div 
                ref={scrollRef}
                className={`flex gap-8 ${isPaused ? '' : 'animate-scroll-smooth'}`}
                style={{
                  width: 'max-content',
                  scrollBehavior: 'smooth'
                }}
              >
                {duplicatedPartners.map((partner, index) => (
                  <a
                    key={index}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-shrink-0 w-64 bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-full h-48 mb-4 flex items-center justify-center bg-white rounded-lg p-6 group-hover:scale-105 transition-transform duration-300 shadow-sm border border-gray-100">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain filter contrast-125 brightness-100"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-tech-teal-600 transition-colors duration-300 leading-tight min-h-[40px]">
                        {partner.name}
                      </h4>
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {partner.category}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Partnership CTA - Separated from Footer */}
        <div className="text-center bg-corporate-blue-600 rounded-2xl p-12 relative overflow-hidden mb-20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%20diverse%20team%20collaboration%20global%20network%20connection%20modern%20office%20environment%20corporate%20teamwork%20international%20cooperation%20success%20celebration&width=1200&height=400&seq=partnership-cta-bg&orientation=landscape)'
            }}
          ></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Partner with Us
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join our global network of partners committed to building resilient communities and sustainable futures.
            </p>
            <a
              href="/partners#hero"
              className="bg-white text-corporate-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block shadow-lg"
            >
              Explore Partnership Opportunities
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-smooth {
          animation: scroll-smooth 60s linear infinite;
        }
        
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
