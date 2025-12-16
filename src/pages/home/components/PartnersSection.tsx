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

  const partners = [
    {
      name: "United Nations",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/800px-UN_emblem_blue.svg.png",
      category: "International Organizations"
    },
    {
      name: "World Health Organization",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/World_Health_Organization_Logo.svg/800px-World_Health_Organization_Logo.svg.png",
      category: "Health"
    },
    {
      name: "World Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/World_Bank_logo.svg/800px-World_Bank_logo.svg.png",
      category: "Financial"
    },
    {
      name: "UNICEF",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UNICEF_Logo.svg/800px-UNICEF_Logo.svg.png",
      category: "Children & Youth"
    },
    {
      name: "Red Cross",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Red_Cross_logo.svg/800px-Red_Cross_logo.svg.png",
      category: "Humanitarian"
    },
    {
      name: "UNESCO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Logo_unesco.svg/800px-Logo_unesco.svg.png",
      category: "Education & Culture"
    },
    {
      name: "UNHCR",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/UNHCR_Logo.svg/800px-UNHCR_Logo.svg.png",
      category: "Refugees"
    },
    {
      name: "Oxfam",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Oxfam_logo.svg/800px-Oxfam_logo.svg.png",
      category: "Development"
    },
    {
      name: "Save the Children",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Save_the_Children_logo.svg/800px-Save_the_Children_logo.svg.png",
      category: "Children"
    },
    {
      name: "Care International",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/CARE_International_logo.svg/800px-CARE_International_logo.svg.png",
      category: "Humanitarian"
    },
    {
      name: "Doctors Without Borders",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/MSF_logo.svg/800px-MSF_logo.svg.png",
      category: "Medical"
    },
    {
      name: "Greenpeace",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Greenpeace_logo.svg/800px-Greenpeace_logo.svg.png",
      category: "Environment"
    },
    {
      name: "WWF",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/WWF_logo.svg/800px-WWF_logo.svg.png",
      category: "Conservation"
    },
    {
      name: "International Red Cross",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/International_Committee_of_the_Red_Cross_Logo.svg/800px-International_Committee_of_the_Red_Cross_Logo.svg.png",
      category: "Humanitarian"
    },
    {
      name: "Plan International",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plan_International_logo.svg/800px-Plan_International_logo.svg.png",
      category: "Children's Rights"
    },
    {
      name: "ActionAid",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/ActionAid_logo.svg/800px-ActionAid_logo.svg.png",
      category: "Poverty"
    },
    {
      name: "Amnesty International",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amnesty_International_logo.svg/800px-Amnesty_International_logo.svg.png",
      category: "Human Rights"
    },
    {
      name: "Human Rights Watch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Human_Rights_Watch_logo.svg/800px-Human_Rights_Watch_logo.svg.png",
      category: "Human Rights"
    },
    {
      name: "International Rescue Committee",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/International_Rescue_Committee_logo.svg/800px-International_Rescue_Committee_logo.svg.png",
      category: "Humanitarian"
    },
    {
      name: "Mercy Corps",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mercy_Corps_logo.svg/800px-Mercy_Corps_logo.svg.png",
      category: "Development"
    },
    {
      name: "World Vision",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/World_Vision_International_Logo.svg/800px-World_Vision_International_Logo.svg.png",
      category: "Children"
    },
    {
      name: "Catholic Relief Services",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Catholic_Relief_Services_logo.svg/800px-Catholic_Relief_Services_logo.svg.png",
      category: "Relief"
    },
    {
      name: "Islamic Relief",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Islamic_Relief_Worldwide_logo.svg/800px-Islamic_Relief_Worldwide_logo.svg.png",
      category: "Humanitarian"
    },
    {
      name: "Habitat for Humanity",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Habitat_for_Humanity_logo.svg/800px-Habitat_for_Humanity_logo.svg.png",
      category: "Housing"
    },
    {
      name: "Rotary International",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Rotary_International_logo.svg/800px-Rotary_International_logo.svg.png",
      category: "Service"
    }
  ];

  const duplicatedPartners = [...partners, ...partners];

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
                    className="group flex-shrink-0 w-64 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-200 hover:border-tech-teal-400"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-full h-48 mb-4 flex items-center justify-center bg-white rounded-lg p-4 group-hover:scale-105 transition-transform duration-300 shadow-md border-2 border-gray-100">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="h-24 w-auto object-contain"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="flex items-center justify-center h-24 w-full bg-gray-100 rounded-lg"><span class="text-gray-600 font-semibold text-sm px-4 text-center">${partner.name}</span></div>`;
                            }
                          }}
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
