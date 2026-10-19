const programs = [
  {
    id: 'settlement-belonging',
    title: 'Newcomer Settlement and Belonging',
    summary:
      'Starting life in a new country is hard, especially for young people. We help newcomer youth and their families find their footing and feel at home.',
    points: [
      'One-to-one needs assessment and referrals',
      'Help with school enrolment, ID, banking and housing',
      'Community events that build friendships and belonging',
    ],
    icon: 'ri-home-heart-line',
  },
  {
    id: 'skills-leadership',
    title: 'Youth Skills and Leadership Training',
    summary:
      'Our training cohorts give young people the skills and confidence to succeed in school, work and community.',
    points: [
      'Work-readiness: resumes, interviews and workplace culture',
      'Leadership, communication and teamwork',
      'Digital and job-search skills',
    ],
    icon: 'ri-graduation-cap-line',
  },
  {
    id: 'jobs-connect',
    title: 'Youth Jobs Connect',
    summary:
      'We link trained youth with employers who want to hire them, and we stay with them after they are hired.',
    points: [
      'Matching with employers, paid placements and apprenticeships',
      'Interview preparation and introductions',
      'Follow-up support so youth keep their jobs',
    ],
    icon: 'ri-briefcase-4-line',
  },
  {
    id: 'safe-pathways',
    title: 'Safe Pathways: Youth Crime Prevention',
    summary:
      'We help young people choose positive paths and avoid crime and gang involvement.',
    points: [
      'Mentorship from trusted adults and peers',
      'Safe after-school and weekend activities',
      'Conflict resolution, decision-making and handling peer pressure',
      'Outreach through schools, families and faith communities',
    ],
    icon: 'ri-shield-user-line',
  },
];

export default function YouthProgramsOntarioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://readdy.ai/api/search-image?query=Diverse%20newcomer%20youth%20in%20Toronto%20working%20together%20in%20a%20bright%20community%20centre%2C%20young%20people%20of%20many%20backgrounds%20in%20a%20workshop%20circle%20with%20a%20mentor%2C%20warm%20natural%20light%20through%20large%20windows%2C%20hopeful%20and%20welcoming%20atmosphere%2C%20editorial%20documentary%20photography&width=1920&height=800&seq=youth-ontario-hero-2026&orientation=landscape)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/85 via-[#0A1E3D]/75 to-[#0A1E3D]/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-[#00D9FF] font-semibold mb-5">
            Programs · Ontario
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Youth Programs in Ontario
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Helping newcomer youth in Toronto settle, grow, work and stay safe.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5">
            From our North York office, LDII supports young newcomers and youth facing
            barriers through four connected programs.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Each young person has one case worker who walks with them from arrival to their
            first job, so no one falls through the cracks.
          </p>
        </div>
      </section>

      {/* Four programs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four connected programs, one case worker
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Support is continuous rather than a series of one-off workshops. Young people
              move through settlement, training, employment and safety support with the same
              person beside them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <article
                key={program.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 transition-colors"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i
                      className={`${program.icon} w-6 h-6 flex items-center justify-center text-green-600`}
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-green-600 mb-1">
                      Program {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      {program.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-5">{program.summary}</p>
                <ul className="space-y-2">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Young%20newcomer%20students%20walking%20together%20outside%20a%20Toronto%20community%20centre%20after%20a%20program%20session%2C%20backpacks%20and%20conversation%2C%20autumn%20city%20street%20with%20trees%2C%20genuine%20candid%20moment%2C%20warm%20soft%20daylight%2C%20editorial%20documentary%20photography&width=1000&height=800&seq=youth-ontario-serve-2026&orientation=landscape"
                alt="Newcomer youth in Toronto walking together after a program session"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Who we serve
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Newcomer youth aged 15 to 29 in Toronto, with a focus on youth facing extra
                barriers, including racialized youth, young women, youth with limited English
                and youth at risk of involvement in crime.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Young people are referred through schools, settlement agencies, faith
                communities and families, and can also walk in and ask for help directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="py-16 md:py-20 bg-[#0A1E3D]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get involved
            </h2>
            <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Are you a young person looking for support, an employer ready to hire, or a
              volunteer who wants to mentor? We would like to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <a
              href="mailto:admin@ldiinitiatives.org"
              className="bg-white/5 border border-white/15 rounded-xl px-6 py-7 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mx-auto mb-3" />
              <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                Email
              </span>
              <span className="text-white text-sm break-words">admin@ldiinitiatives.org</span>
            </a>
            <a
              href="tel:+16476563026"
              className="bg-white/5 border border-white/15 rounded-xl px-6 py-7 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mx-auto mb-3" />
              <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                Phone
              </span>
              <span className="text-white text-sm whitespace-nowrap">+1 647 656 3026</span>
            </a>
            <div className="bg-white/5 border border-white/15 rounded-xl px-6 py-7">
              <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mx-auto mb-3" />
              <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                Visit
              </span>
              <span className="text-white text-sm leading-relaxed">
                3701 Chesswood Dr, Unit 315
                <br />
                North York, ON
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="/partners#volunteer"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap text-center"
            >
              Become a Mentor
            </a>
            <a
              href="/contact"
              className="bg-white/10 text-white border border-white/25 px-8 py-4 rounded-lg font-semibold hover:bg-white/15 transition-colors cursor-pointer whitespace-nowrap text-center"
            >
              Contact the Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}