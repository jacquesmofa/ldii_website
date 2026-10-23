const localPrograms = [
  {
    title: 'Youth Programs in Ontario',
    body: 'Helping newcomer youth in Toronto settle, grow, work and stay safe — four connected programs, with one case worker walking beside each young person.',
    href: '/programs/youth-programs-ontario',
    icon: 'ri-user-star-line',
    tag: 'Youth',
  },
  {
    title: 'Local Capacity Training',
    body: 'Leadership, mentoring and financial literacy workshops for women and men, linked to the partners and resources that turn learning into action.',
    href: '/programs/local-capacity-training',
    icon: 'ri-team-line',
    tag: 'Community',
  },
  {
    title: 'Newcomers & Local Enterprise',
    body: 'Employment training for newcomers, plus networking, mentorship and startup support for entrepreneurs building businesses close to home.',
    href: '/programs#newcomer-settlement',
    icon: 'ri-briefcase-4-line',
    tag: 'Livelihoods',
  },
];

export default function LocalProgramsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-600 mb-3">
              Local Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where we work closest to home
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our local programs run from the North York office and across the Greater Toronto
              Area — practical support for young people, newcomers and small enterprises, built
              hand in hand with the communities we serve.
            </p>
          </div>
          <a
            href="/programs"
            className="inline-flex items-center gap-2 bg-[#0A1E3D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0A1E3D]/90 transition-colors cursor-pointer whitespace-nowrap self-start lg:self-auto"
          >
            All local programs
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localPrograms.map((program) => (
            <a
              key={program.href}
              href={program.href}
              className="group bg-white rounded-xl p-6 md:p-7 border border-gray-100 hover:border-green-300 transition-colors cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                  <i
                    className={`${program.icon} w-6 h-6 flex items-center justify-center text-green-600`}
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  {program.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-700 transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {program.body}
              </p>
              <span className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm">
                <span>Learn more</span>
                <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}