import { useState } from 'react';
import { localProgrammes, programmePartners } from '@/mocks/localProgramsData';
import ProgrammeIndex from './components/ProgrammeIndex';
import ProgrammeBlock from './components/ProgrammeBlock';
import ApproachSection from './components/ApproachSection';

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'programmes', label: 'Programmes' },
  { id: 'our-approach', label: 'Our Approach' },
  { id: 'office-locations', label: 'Locations' }
];

const programmeAreas = [
  {
    title: 'Local Programs',
    tag: 'Ontario',
    body: 'Six community programmes on the ground in Ontario, spanning newcomer settlement, youth employment, community safety, wellbeing, partnerships and seniors support.',
    href: '#programmes',
    icon: 'ri-community-line'
  },
  {
    title: 'Youth Programs in Ontario',
    tag: 'Youth',
    body: 'Four connected programs for newcomer youth in Toronto, with one case worker walking with each young person from arrival to their first job.',
    href: '/programs/youth-programs-ontario',
    icon: 'ri-user-star-line'
  },
  {
    title: 'Africa-Canada Mining & Technology Exchange',
    tag: 'International',
    body: 'Executive delegations from Uganda, Kenya, South Africa, Botswana and Senegal to Northern Ontario, built around technical know-how rather than equipment.',
    href: '/programs/mining-technology-exchange',
    icon: 'ri-earth-line'
  },
  {
    title: 'Local Capacity Training',
    tag: 'Community',
    body: 'Leadership, mentoring and financial literacy workshops for women and men, connected to the partners and resources that turn learning into action.',
    href: '/programs/local-capacity-training',
    icon: 'ri-team-line'
  }
];

const offices = [
  {
    name: 'Toronto Office',
    address: '3701 Chesswood Drive, Unit 315',
    city: 'Toronto, ON M3J 2P6',
    phone: '+1 647 656 3026',
    email: 'info@ldiinitiatives.org',
    emailAlt: 'admin@ldiinitiatives.org',
    hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
    icon: 'ri-building-line',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5!2d-79.4678!3d43.7532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzExLjUiTiA3OcKwMjgnMDQuMSJX!5e0!3m2!1sen!2sca!4v1234567890'
  }
];

export default function LocalProgramsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <title>Local Community Development | LDII Ontario Programs</title>
      <meta
        name="description"
        content="LDII's local community development and empowerment programmes in Ontario: newcomer settlement and housing, youth employment, community safety, mental health, partnerships and seniors support."
      />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=diverse%20community%20gathering%20in%20a%20bright%20Toronto%20community%20hall%2C%20newcomer%20families%2C%20young%20people%20and%20seniors%20talking%20together%2C%20warm%20natural%20light%2C%20hopeful%20welcoming%20atmosphere%2C%20soft%20neutral%20tones%2C%20editorial%20documentary%20photography&width=1920&height=900&seq=local-programs-hero-2026&orientation=landscape"
          alt="LDII local community programmes in Ontario"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/85 via-[#0A1E3D]/75 to-[#0A1E3D]/90"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#00D9FF] font-semibold mb-5">
              LDII Local Programs
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-5">
              Local Community Development<br className="hidden md:block" /> &amp; Empowerment
            </h1>
            <p className="text-base md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Empowering individuals. Supporting youth. Strengthening communities across Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky section navigation */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-colors duration-300 cursor-pointer border ${
                  activeSection === item.id
                    ? 'bg-[#0A1E3D] text-white border-[#0A1E3D]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Intro / About */}
      <section id="overview" className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] leading-tight mb-6">
                Empowering individuals. Supporting youth. Strengthening communities.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Livelihood Development International Initiatives (LDII) improves livelihoods and
                strengthens communities through inclusive, community-based programmes. Our local
                work is focused on Ontario, with a vision to expand across Canada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work with community organizations, schools, colleges and universities,
                government agencies, police services and businesses through six programmes, with a
                strong emphasis on youth, families and seniors.
              </p>

              <a
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors cursor-pointer"
              >
                <span>Read our full story</span>
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F5F8F3] rounded-xl p-7 border border-green-100/70">
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-green-800 mb-4">
                  Who we work with
                </h3>
                <ul className="space-y-2.5">
                  {programmePartners.map((partner) => (
                    <li key={partner} className="flex items-center gap-2.5">
                      <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                      <span className="text-sm text-gray-700">{partner}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-green-200/60">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Six programmes. One case worker per youth. Partners who stay beyond a single
                    project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme areas */}
      <section className="py-16 md:py-20 bg-[#F5F8F3] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] leading-tight mb-4">
              Four programme areas, delivered with partners
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Each area has its own delivery model and dedicated team. Together they cover local
              community development in Ontario, specialist youth work, capacity training and
              international exchange.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {programmeAreas.map((area) => (
              <a
                key={area.title}
                href={area.href}
                className="group flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-green-300 transition-colors duration-300 cursor-pointer"
              >
                <span className="w-10 h-10 rounded-lg bg-[#F3F7F1] flex items-center justify-center shrink-0">
                  <i className={`${area.icon} w-5 h-5 flex items-center justify-center text-green-700`}></i>
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-sm font-bold text-[#0A1E3D] group-hover:text-green-800 transition-colors">
                      {area.title}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                      {area.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programme index */}
      <section id="programmes" className="py-16 md:py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
              Our Programmes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] leading-tight mb-4">
              Six community programmes, delivered in Ontario
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Each programme responds to a specific pressure families and young people face, and
              each is delivered with local partners rather than in isolation.
            </p>
          </div>

          <div className="mt-10">
            <ProgrammeIndex />
          </div>
        </div>
      </section>

      {/* Programme detail sections */}
      {localProgrammes.map((programme, index) => (
        <ProgrammeBlock
          key={programme.id}
          programme={programme}
          background={index % 2 === 0 ? 'tint' : 'white'}
        />
      ))}

      {/* Approach + commitment */}
      <ApproachSection />

      {/* Office locations */}
      <section id="office-locations" className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] mb-4">
              Visit the LDII Toronto office
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our doors are open to participants, families and partners across the Greater Toronto
              Area.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-3xl mx-auto">
            {offices.map((office) => (
              <div
                key={office.name}
                className="bg-white rounded-xl overflow-hidden border border-gray-100"
              >
                <div className="bg-[#0A1E3D] p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center">
                      <i className={`${office.icon} w-5 h-5 flex items-center justify-center text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">{office.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-green-600 mt-0.5"></i>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">{office.address}</p>
                        <p className="text-gray-600 text-sm">{office.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                      <a
                        href="tel:+16476563026"
                        className="text-gray-700 text-sm hover:text-green-700 transition-colors cursor-pointer"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                      <div className="flex flex-col gap-1">
                        <a
                          href="mailto:info@ldiinitiatives.org"
                          className="text-gray-700 text-sm hover:text-green-700 transition-colors cursor-pointer break-all"
                        >
                          {office.email}
                        </a>
                        <a
                          href="mailto:admin@ldiinitiatives.org"
                          className="text-gray-700 text-sm hover:text-green-700 transition-colors cursor-pointer break-all"
                        >
                          {office.emailAlt}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-time-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                      <p className="text-gray-700 text-sm">{office.hours}</p>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden h-56">
                    <iframe
                      src={office.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${office.name} Location`}
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Get involved today
          </h2>
          <p className="text-base md:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you are a young person seeking support, a newcomer family finding your feet, or
            a partner who wants to build something lasting, we are here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#00D9FF] text-[#0A1E3D] px-7 py-3.5 rounded-md font-semibold text-base hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Contact Us
            </a>
            <a
              href="/partners"
              className="bg-white/10 text-white border border-white/25 px-7 py-3.5 rounded-md font-semibold text-base hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}