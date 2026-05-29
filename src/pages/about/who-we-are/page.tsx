import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BoardMemberCard({ member }: { member: { name: string; title: string; shortBio: string; fullBio: string } }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-5 flex items-center justify-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="w-10 h-10 flex items-center justify-center">
            <i className="ri-user-3-line text-3xl text-gray-500"></i>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-emerald-600 font-semibold text-sm mb-3">{member.title}</p>
      <p className="text-gray-600 text-sm leading-relaxed">
        {expanded ? member.fullBio : member.shortBio}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors cursor-pointer inline-flex items-center gap-1"
      >
        <span>{expanded ? 'Read Less' : 'Read More'}</span>
        <div className="w-4 h-4 flex items-center justify-center">
          {expanded ? (
            <i className="ri-arrow-up-line"></i>
          ) : (
            <i className="ri-arrow-down-line"></i>
          )}
        </div>
      </button>
    </div>
  );
}

export default function WhoWeArePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Diverse%20international%20team%20of%20professionals%20from%20different%20ethnicities%20working%20together%20in%20modern%20collaborative%20workspace%2C%20multicultural%20office%20environment%2C%20teamwork%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=team-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Global%20organization%20leadership%20team%20meeting%2C%20diverse%20executives%20collaborating%2C%20international%20business%20professionals%2C%20modern%20conference%20room%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=team-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Multicultural%20team%20celebrating%20success%20together%2C%20diverse%20professionals%2C%20collaborative%20achievement%2C%20inclusive%20workplace%20culture%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=team-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const boardMembers = [
    {
      name: 'Ronald Robert Lwabaayi',
      title: 'President & Founder, Chairman of the Board',
      shortBio: 'A distinguished economist and former World Bank researcher leading LDII\'s vision for transformative global development.',
      fullBio: 'Mr. Ronald Lwabaayi is the Founder and President of Livelihood Development International Initiatives (LDII). A distinguished Economist and Canadian leader in international trade, he brings over a decade of high-level global development experience. As a former World Bank Researcher, he bridges Canadian innovation with the Global South through technology transfer, trade facilitation, and climate action leadership. He also serves as Chairman of the Climate Change Action of East Africa.'
    },
    {
      name: 'Ann Chidwick',
      title: 'Board Member',
      shortBio: 'Dedicated to advancing LDII\'s mission through strategic governance and community engagement.',
      fullBio: 'Ann Chidwick serves as a valued member of the LDII Board of Directors. With a deep commitment to international development and community empowerment, she contributes strategic oversight and governance expertise to ensure LDII fulfills its mission with integrity and sustainable impact across all programs and initiatives.'
    },
    {
      name: 'Daniel Kajumba',
      title: 'Board Member',
      shortBio: 'Bringing extensive experience in international development and cross-cultural collaboration.',
      fullBio: 'Daniel Kajumba is a committed Board Member of LDII, bringing extensive experience in international development and cross-cultural collaboration. His insights help shape the organization\'s strategic direction, particularly in strengthening partnerships between Canadian institutions and emerging markets in Africa and beyond.'
    },
    {
      name: 'Zaharah Kayongo',
      title: 'Board Member',
      shortBio: 'Passionate advocate for sustainable development and gender-inclusive global health initiatives.',
      fullBio: 'Zaharah Kayongo serves on the LDII Board of Directors with a passion for sustainable development and gender-inclusive global health initiatives. Her governance contributions help ensure that LDII\'s programs remain equitable, inclusive, and responsive to the needs of vulnerable populations worldwide.'
    },
    {
      name: 'Victor Amadi Ubah',
      title: 'Board Member',
      shortBio: 'Expert in policy analysis and program implementation for international development frameworks.',
      fullBio: 'Victor Amadi Ubah is a dedicated Board Member whose expertise in policy analysis and program implementation strengthens LDII\'s international development frameworks. He provides valuable guidance on organizational strategy and helps ensure operational excellence across all LDII initiatives.'
    },
    {
      name: 'Farah Nasseradin',
      title: 'Board Member',
      shortBio: 'Committed to fostering multicultural solidarity and interfaith cooperation through development work.',
      fullBio: 'Farah Nasseradin brings a deep commitment to multicultural solidarity and interfaith cooperation to the LDII Board of Directors. Her perspective enriches the organization\'s approach to inclusive development and helps build bridges across diverse communities in Canada and internationally.'
    },
    {
      name: 'Abdullah',
      title: 'Board Member',
      shortBio: 'Strategic advisor focused on expanding LDII\'s impact through innovative partnerships.',
      fullBio: 'Abdullah serves as a Board Member of LDII, contributing strategic advisory expertise focused on expanding the organization\'s impact through innovative partnerships. His guidance supports LDII\'s growth as a recognized leader in international development, climate action, and global health resilience.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow */}
      <section id="hero" className="relative py-24 bg-gradient-to-br from-green-600 to-emerald-700 overflow-hidden">
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
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated professionals driving global resilience through innovative solutions and collaborative leadership.
          </p>
        </div>
        
        {/* Slide Indicators */}
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

      {/* Organization Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Organization</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                LDII brings together a diverse team of experts, researchers, policy analysts, and practitioners from around the world. Our multidisciplinary approach combines academic rigor with practical experience to address complex global challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2014, we have grown from a small think tank to a globally recognized organization with offices across multiple continents. Our team includes former government officials, UN executives, academic researchers, and civil society leaders.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">45+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500 mb-2">25+</div>
                  <div className="text-gray-600">Nationalities</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20international%20organization%20team%20photo%20with%20diverse%20professionals%20from%20different%20countries%20and%20backgrounds%20standing%20together%20in%20contemporary%20office%20lobby%2C%20multicultural%20workplace%2C%20professional%20group%20photography%2C%20high%20resolution%2C%20excellent%20lighting%20and%20composition&width=600&height=400&seq=team-photo&orientation=landscape"
                alt="LDII Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership brings decades of experience in international relations, policy development, and global crisis management.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-60 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src="https://storage.readdy-site.link/project_files/836b8318-f1ec-485e-88c4-18bd6440b55d/701ca0d0-fd60-45d3-8075-b92942a7a09f_WhatsApp-Image-2026-05-15-at-17.09.45.jpeg?v=1dbaf5f87cc5c04b8030605dd2f15a5f"
                    alt="Mr. Ronald Lwabaayi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Ronald Lwabaayi</h3>
                  <p className="text-emerald-600 font-semibold mb-4">President & Founder</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A distinguished Economist and Canadian leader in international trade with over a decade of high-level global development experience. Former World Bank Researcher, bridging Canadian innovation with the Global South through technology transfer, trade facilitation, and climate action leadership.
                  </p>
                  <Link
                    to="/about/who-we-are/president-profile"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors cursor-pointer group"
                  >
                    <span>Read Full Profile</span>
                    <div className="w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Board of Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Board of Directors provides strategic oversight and governance, ensuring LDII fulfills its mission with integrity and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <BoardMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team with Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20career%20opportunities%20diverse%20team%20recruitment%20global%20organization%20hiring%20talented%20professionals%20modern%20workplace%20culture%20international%20team%20building%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=join-team-bg&orientation=landscape)'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0A1E3D]/90"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Global Team
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate professionals who share our commitment to building global resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/careers#hero"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Open Positions
            </a>
            <a
              href="/partners#volunteer"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}