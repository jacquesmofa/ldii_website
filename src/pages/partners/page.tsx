import { useState, useEffect } from 'react';

export default function PartnersPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      // Update URL without causing page reload
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const governmentPartners = [
    {
      name: 'Government of Canada',
      description: 'Federal partnership supporting international development initiatives and capacity building programs across multiple sectors.',
      logo: 'https://readdy.ai/api/search-image?query=Government%20of%20Canada%20official%20logo%20Canadian%20flag%20maple%20leaf%20emblem%20clean%20white%20background%20professional%20government%20branding&width=200&height=120&seq=canada-gov&orientation=landscape',
      website: 'https://www.canada.ca',
      focus: 'International Development, Policy Support'
    },
    {
      name: 'Province of Ontario',
      description: 'Provincial government collaboration on local programs, community development, and economic growth initiatives.',
      logo: 'https://readdy.ai/api/search-image?query=Province%20of%20Ontario%20official%20government%20logo%20Canadian%20provincial%20emblem%20clean%20white%20background%20professional%20branding&width=200&height=120&seq=ontario-gov&orientation=landscape',
      website: 'https://www.ontario.ca',
      focus: 'Community Programs, Economic Development'
    },
    {
      name: 'City of Brampton',
      description: 'Municipal partnership supporting local community programs, newcomer services, and business development in Brampton.',
      logo: 'https://readdy.ai/api/search-image?query=City%20of%20Brampton%20Ontario%20official%20municipal%20logo%20Canadian%20city%20emblem%20clean%20white%20background%20professional%20government%20branding&width=200&height=120&seq=brampton-city&orientation=landscape',
      website: 'https://www.brampton.ca',
      focus: 'Local Programs, Community Services'
    },
    {
      name: 'United Nations Development Programme',
      description: 'Global partnership advancing sustainable development goals and building resilience in vulnerable communities worldwide.',
      logo: 'https://readdy.ai/api/search-image?query=United%20Nations%20Development%20Programme%20UNDP%20official%20logo%20blue%20and%20white%20clean%20background%20professional%20organization%20branding&width=200&height=120&seq=undp-partner&orientation=landscape',
      website: 'https://www.undp.org',
      focus: 'Sustainable Development, Global Resilience'
    }
  ];

  const privateSectorPartners = [
    {
      name: 'Toronto Region Board of Trade',
      description: 'Leading business organization supporting economic growth, innovation, and business networking across the Greater Toronto Area.',
      logo: 'https://readdy.ai/api/search-image?query=Toronto%20Region%20Board%20of%20Trade%20official%20logo%20business%20chamber%20commerce%20emblem%20clean%20background%20professional%20business%20branding&width=200&height=120&seq=toronto-bot&orientation=landscape',
      website: 'https://www.bot.com',
      focus: 'Business Development, Economic Growth'
    },
    {
      name: 'Brampton Board of Trade',
      description: 'Local business chamber fostering entrepreneurship, business connections, and economic development in Brampton.',
      logo: 'https://readdy.ai/api/search-image?query=Brampton%20Board%20of%20Trade%20official%20logo%20business%20chamber%20commerce%20emblem%20clean%20background%20professional%20business%20branding&width=200&height=120&seq=brampton-bot&orientation=landscape',
      website: 'https://www.bramptonbot.com',
      focus: 'Entrepreneurship, Business Networking'
    },
    {
      name: 'Canadian Hispanic Chamber of Commerce',
      description: 'Supporting Hispanic business community through networking, advocacy, and business development opportunities.',
      logo: 'https://readdy.ai/api/search-image?query=Canadian%20Hispanic%20Chamber%20of%20Commerce%20official%20logo%20business%20organization%20emblem%20clean%20background%20professional%20business%20branding&width=200&height=120&seq=hispanic-chamber&orientation=landscape',
      website: 'https://www.canadianhispanicchamber.com',
      focus: 'Hispanic Business Community, Advocacy'
    },
    {
      name: 'RBC Royal Bank',
      description: 'Canada\'s largest bank partnering on financial inclusion, economic development, and community investment initiatives.',
      logo: 'https://readdy.ai/api/search-image?query=RBC%20Royal%20Bank%20of%20Canada%20official%20logo%20blue%20and%20yellow%20lion%20shield%20emblem%20clean%20white%20background%20professional%20banking%20branding&width=200&height=120&seq=rbc-partner&orientation=landscape',
      website: 'https://www.rbc.com',
      focus: 'Financial Inclusion, Community Investment'
    },
    {
      name: 'Ethiopian Airlines',
      description: 'Africa\'s largest airline supporting international connectivity, trade facilitation, and humanitarian logistics.',
      logo: 'https://readdy.ai/api/search-image?query=Ethiopian%20Airlines%20official%20logo%20green%20yellow%20red%20colors%20airline%20emblem%20clean%20white%20background%20professional%20aviation%20branding&width=200&height=120&seq=ethiopian-airlines-partner&orientation=landscape',
      website: 'https://www.ethiopianairlines.com',
      focus: 'International Connectivity, Trade Facilitation'
    },
    {
      name: 'Pearson Convention Centre',
      description: 'Premier event venue partner providing space for conferences, community gatherings, and international forums.',
      logo: 'https://readdy.ai/api/search-image?query=Pearson%20Convention%20Centre%20Toronto%20official%20logo%20modern%20venue%20emblem%20clean%20white%20background%20professional%20event%20space%20branding&width=200&height=120&seq=pearson-convention-partner&orientation=landscape',
      website: 'https://www.torontopearson.com',
      focus: 'Event Hosting, Conference Facilities'
    },
    {
      name: 'Hilton Garden Inn Brampton',
      description: 'Hospitality partner providing venue support for events, conferences, and community gatherings.',
      logo: 'https://readdy.ai/api/search-image?query=Hilton%20Garden%20Inn%20official%20hotel%20logo%20hospitality%20brand%20emblem%20clean%20white%20background%20professional%20hotel%20branding&width=200&height=120&seq=hilton-partner&orientation=landscape',
      website: 'https://www.hilton.com',
      focus: 'Event Hosting, Hospitality Services'
    }
  ];

  const ngoPartners = [
    {
      name: 'World Health Organization',
      description: 'Collaboration on global health initiatives, pandemic preparedness, and health systems strengthening.',
      logo: 'https://readdy.ai/api/search-image?query=World%20Health%20Organization%20WHO%20official%20logo%20blue%20and%20white%20medical%20symbol%20clean%20background%20professional%20healthcare%20branding&width=200&height=120&seq=who-partner&orientation=landscape',
      website: 'https://www.who.int',
      focus: 'Global Health, Pandemic Response'
    },
    {
      name: 'CPLP - Community of Portuguese Language Countries',
      description: 'Partnership promoting development cooperation and cultural exchange among Portuguese-speaking nations.',
      logo: 'https://readdy.ai/api/search-image?query=CPLP%20Community%20Portuguese%20Language%20Countries%20official%20logo%20blue%20and%20white%20lusophone%20organization%20emblem%20clean%20background%20professional%20diplomatic%20branding&width=200&height=120&seq=cplp-partner&orientation=landscape',
      website: 'https://www.cplp.org',
      focus: 'Cultural Exchange, Development Cooperation'
    },
    {
      name: 'IGAD',
      description: 'Regional partnership with the Intergovernmental Authority on Development supporting peace, security, and sustainable development in East Africa.',
      logo: 'https://readdy.ai/api/search-image?query=IGAD%20Intergovernmental%20Authority%20on%20Development%20official%20logo%20East%20Africa%20regional%20organization%20emblem%20clean%20white%20background%20professional%20diplomatic%20branding&width=200&height=120&seq=igad-partner&orientation=landscape',
      website: 'https://igad.int',
      focus: 'Regional Development, Peace & Security'
    },
    {
      name: 'KWETU Connect Australia',
      description: 'Community organization partnership supporting diaspora engagement, cultural exchange, and international development connections.',
      logo: 'https://readdy.ai/api/search-image?query=KWETU%20Connect%20Australia%20official%20logo%20community%20organization%20emblem%20clean%20white%20background%20professional%20networking%20branding&width=200&height=120&seq=kwetu-partner&orientation=landscape',
      website: 'https://www.kwetuconnect.com.au',
      focus: 'Diaspora Engagement, Community Development'
    },
    {
      name: 'Mamy Kaya',
      description: 'Community organization partnership supporting grassroots development and local empowerment initiatives.',
      logo: 'https://readdy.ai/api/search-image?query=Mamy%20Kaya%20organization%20official%20logo%20clean%20background%20professional%20branding%20emblem&width=200&height=120&seq=mamy-kaya-partner&orientation=landscape',
      website: 'https://www.mamykaya.com',
      focus: 'Community Development, Local Empowerment'
    },
    {
      name: 'Green Climate Fund',
      description: 'Climate finance partnership supporting climate resilience and mitigation projects in vulnerable regions.',
      logo: 'https://readdy.ai/api/search-image?query=Green%20Climate%20Fund%20GCF%20official%20logo%20green%20environmental%20finance%20emblem%20clean%20white%20background%20professional%20climate%20funding%20branding&width=200&height=120&seq=gcf-partner&orientation=landscape',
      website: 'https://www.greenclimate.fund',
      focus: 'Climate Finance, Environmental Projects'
    }
  ];

  const academicPartners = [
    {
      name: 'University of Toronto',
      description: 'Research collaboration on global health, climate science, and sustainable development solutions.',
      logo: 'https://readdy.ai/api/search-image?query=University%20of%20Toronto%20official%20logo%20academic%20institution%20emblem%20clean%20white%20background%20professional%20university%20branding&width=200&height=120&seq=uoft-partner&orientation=landscape',
      website: 'https://www.utoronto.ca',
      focus: 'Research Collaboration, Academic Excellence'
    },
    {
      name: 'York University',
      description: 'Partnership on social research, community development studies, and policy analysis.',
      logo: 'https://readdy.ai/api/search-image?query=York%20University%20official%20logo%20academic%20institution%20emblem%20clean%20white%20background%20professional%20university%20branding&width=200&height=120&seq=york-partner&orientation=landscape',
      website: 'https://www.yorku.ca',
      focus: 'Social Research, Policy Analysis'
    },
    {
      name: 'International Development Research Centre',
      description: 'Research partnership advancing knowledge on development challenges and innovative solutions.',
      logo: 'https://readdy.ai/api/search-image?query=International%20Development%20Research%20Centre%20IDRC%20official%20logo%20blue%20and%20white%20research%20institution%20emblem%20clean%20background%20professional%20academic%20branding&width=200&height=120&seq=idrc-partner&orientation=landscape',
      website: 'https://www.idrc.ca',
      focus: 'Development Research, Innovation'
    },
    {
      name: 'Ryerson University',
      description: 'Collaborative research on urban development, innovation, and community engagement.',
      logo: 'https://readdy.ai/api/search-image?query=Ryerson%20University%20Toronto%20Metropolitan%20University%20official%20logo%20academic%20institution%20emblem%20clean%20white%20background%20professional%20university%20branding&width=200&height=120&seq=ryerson-partner&orientation=landscape',
      website: 'https://www.torontomu.ca',
      focus: 'Urban Development, Innovation Research'
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Global%20partnership%20network%20with%20diverse%20international%20professionals%20shaking%20hands%2C%20world%20map%20with%20glowing%20connection%20lines%2C%20modern%20business%20collaboration%2C%20professional%20photography%20with%20bright%20lighting&width=1920&height=800&seq=partners-hero&orientation=landscape)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Partners & Support
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Building a better world through strategic partnerships and community support
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 py-4">
            <button
              onClick={() => scrollToSection('government-partners')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'government-partners' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Government Partners
            </button>
            <button
              onClick={() => scrollToSection('private-sector')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'private-sector' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Private Sector
            </button>
            <button
              onClick={() => scrollToSection('ngo-partners')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'ngo-partners' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              NGO Partners
            </button>
            <button
              onClick={() => scrollToSection('academic-institutions')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'academic-institutions' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Academic Institutions
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'donate' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Donate
            </button>
            <button
              onClick={() => scrollToSection('volunteer')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'volunteer' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Government Partners */}
      <section id="government-partners" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Government Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with government agencies at federal, provincial, and municipal levels to drive policy change and community impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg p-3 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-green-600 font-medium text-sm mb-3">{partner.focus}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium cursor-pointer inline-flex items-center space-x-2"
                    >
                      <span>Visit Website</span>
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sector */}
      <section id="private-sector" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Private Sector Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with businesses and chambers of commerce to foster economic growth and entrepreneurship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privateSectorPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-32 h-24 bg-gray-50 rounded-lg p-3 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-green-600 font-medium text-sm mb-3">{partner.focus}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium cursor-pointer inline-flex items-center space-x-2"
                    >
                      <span>Visit Website</span>
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NGO Partners */}
      <section id="ngo-partners" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">NGO Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading non-governmental organizations to amplify our impact and reach vulnerable communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ngoPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg p-3 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-green-600 font-medium text-sm mb-3">{partner.focus}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium cursor-pointer inline-flex items-center space-x-2"
                    >
                      <span>Visit Website</span>
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Institutions */}
      <section id="academic-institutions" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Institutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research collaborations with leading universities to advance knowledge and develop evidence-based solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-32 h-24 bg-gray-50 rounded-lg p-3 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-green-600 font-medium text-sm mb-3">{partner.focus}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium cursor-pointer inline-flex items-center space-x-2"
                    >
                      <span>Visit Website</span>
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Support Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your generous donations help us create lasting impact in communities worldwide. Every contribution makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-hand-heart-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Time Donation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Make a single contribution to support our programs and initiatives. Your donation directly funds projects that build resilience and empower communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">Support immediate community needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">Fund critical research and programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">Tax receipt provided</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Giving</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Become a sustaining donor with monthly contributions. Your ongoing support provides stable funding for long-term programs and sustainable impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">Predictable funding for programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">Exclusive donor updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">Annual tax receipts</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Make Your Donation</h3>
            <form data-readdy-form id="donation-form" className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Donation Type *</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                    <input type="radio" name="donationType" value="one-time" className="w-4 h-4 text-green-600" required />
                    <span className="text-gray-700 font-medium">One-Time</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                    <input type="radio" name="donationType" value="monthly" className="w-4 h-4 text-green-600" required />
                    <span className="text-gray-700 font-medium">Monthly</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount *</label>
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {['$25', '$50', '$100', '$250'].map((amount) => (
                    <label key={amount} className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                      <input type="radio" name="amount" value={amount} className="sr-only" />
                      <span className="text-gray-700 font-medium">{amount}</span>
                    </label>
                  ))}
                </div>
                <input
                  type="number"
                  name="customAmount"
                  placeholder="Or enter custom amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="donorFirstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    id="donorFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="donorLastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    id="donorLastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="donorEmail"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="donorPhone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="donorPhone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="donorMessage" className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  id="donorMessage"
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder="Share why you're supporting LDII (max 500 characters)"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Complete Donation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Volunteer With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of dedicated volunteers making a difference in communities worldwide. Your time and skills can create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line w-8 h-8 flex items-center justify-center text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Assist with program delivery, event coordination, and community outreach activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-pencil-ruler-2-line w-8 h-8 flex items-center justify-center text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                Share your expertise in areas like research, communications, design, or technology.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-global-line w-8 h-8 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Opportunities</h3>
              <p className="text-gray-700 leading-relaxed">
                Contribute from anywhere with virtual volunteering in research, writing, or advocacy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Volunteer Application</h3>
            <form data-readdy-form id="volunteer-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="volunteerFirstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    id="volunteerFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="volunteerLastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    id="volunteerLastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="volunteerEmail" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="volunteerEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="volunteerPhone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="volunteerPhone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="volunteerArea" className="block text-sm font-medium text-gray-700 mb-2">Area of Interest *</label>
                <select
                  id="volunteerArea"
                  name="areaOfInterest"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">Select an area</option>
                  <option value="program-support">Program Support</option>
                  <option value="research">Research</option>
                  <option value="communications">Communications</option>
                  <option value="events">Event Coordination</option>
                  <option value="technology">Technology</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="volunteerAvailability" className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                <select
                  id="volunteerAvailability"
                  name="availability"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">Select availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                  <option value="remote">Remote Only</option>
                </select>
              </div>

              <div>
                <label htmlFor="volunteerExperience" className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience & Skills *</label>
                <textarea
                  id="volunteerExperience"
                  name="experience"
                  rows={5}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder="Tell us about your skills, experience, and why you want to volunteer with LDII (max 500 characters)"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Global Network
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether through partnership, donation, or volunteering, there are many ways to support our mission of building global resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Contact Us
            </a>
            <a
              href="#donate"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
