const steps = [
  {
    number: '01',
    title: 'Listen and recruit',
    body: 'We start with community needs and welcome a balanced group of women and men into each cohort.',
    icon: 'ri-user-voice-line',
  },
  {
    number: '02',
    title: 'Learn together',
    body: 'Three times a year a new group of 25 to 30 people joins a hands-on workshop covering leadership, financial literacy and mentoring. Every participant is paired with a mentor.',
    icon: 'ri-team-line',
  },
  {
    number: '03',
    title: 'Mobilise resources',
    body: 'We bring funders, financial institutions and local businesses to the table so that learning can be turned into something real.',
    icon: 'ri-links-line',
  },
  {
    number: '04',
    title: 'Take action',
    body: 'Participants launch savings groups, small enterprises and community projects of their own design.',
    icon: 'ri-rocket-2-line',
  },
  {
    number: '05',
    title: 'Pay it forward',
    body: 'Graduates return as mentors for the next cohort, so the programme grows its own teachers.',
    icon: 'ri-loop-left-line',
  },
];

const curriculum = [
  {
    title: 'Leadership',
    body: 'Communication, decision-making and organising community action.',
    icon: 'ri-compass-3-line',
  },
  {
    title: 'Financial literacy',
    body: 'Budgeting, saving, credit, record-keeping and small business finance.',
    icon: 'ri-wallet-3-line',
  },
  {
    title: 'Mentoring',
    body: 'Every participant is matched with a mentor who stays with them through the year.',
    icon: 'ri-user-heart-line',
  },
];

const atAGlance = [
  'Three workshops a year',
  '25 to 30 participants per workshop',
  '75 to 90 community members reached each year',
  'Every participant paired with a mentor',
  'At least three community projects launched each year',
];

export default function LocalCapacityTrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://readdy.ai/api/search-image?query=Community%20leadership%20workshop%20in%20an%20African%20community%20hall%2C%20mixed%20group%20of%20women%20and%20men%20seated%20in%20a%20circle%20with%20notebooks%20and%20a%20facilitator%20at%20a%20flip%20chart%2C%20warm%20afternoon%20light%20through%20open%20windows%2C%20engaged%20and%20hopeful%20atmosphere%2C%20editorial%20documentary%20photography&width=1920&height=800&seq=capacity-training-hero-2026&orientation=landscape)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/85 via-[#0A1E3D]/75 to-[#0A1E3D]/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-[#00D9FF] font-semibold mb-5">
            Programs · Local Capacity Training
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building leaders. Strengthening communities.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Practical training in leadership, mentoring and financial literacy for women and
            men, connected to the partners and resources that make it stick.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our Local Capacity Training Program gives community members practical skills in
            leadership, mentoring and financial literacy. We then connect them with partners
            and resources to turn learning into action.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Five stages, repeated each year, so that each cohort leaves behind the mentors
              for the one that follows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-green-200 transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 bg-green-50 rounded-lg flex items-center justify-center">
                    <i
                      className={`${step.icon} w-5 h-5 flex items-center justify-center text-green-600`}
                    />
                  </div>
                  <span className="text-2xl font-bold text-gray-200">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                What participants learn
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The curriculum is deliberately practical. Each session ends with something a
                participant can use the same week, not a certificate on a wall.
              </p>
              <div className="space-y-5">
                {curriculum.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i
                        className={`${item.icon} w-5 h-5 flex items-center justify-center text-green-600`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Small%20business%20owner%20and%20mentor%20reviewing%20a%20simple%20ledger%20and%20savings%20record%20together%20at%20a%20wooden%20table%2C%20hands%20and%20notebook%20in%20close%20view%2C%20warm%20natural%20window%20light%2C%20respectful%20and%20practical%20atmosphere%2C%20editorial%20documentary%20photography&width=1000&height=800&seq=capacity-training-curriculum-2026&orientation=landscape"
                alt="A participant reviewing savings records with a mentor"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                At a glance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The programme runs on a yearly rhythm, small enough that everyone is known by
                name and repeated often enough that each cohort hands the next one its mentors.
              </p>
            </div>
            <ul className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden">
              {atAGlance.map((item) => (
                <li key={item} className="flex items-start gap-3 px-6 py-4">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="py-16 md:py-20 bg-[#0A1E3D]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get involved
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
            Join a workshop, become a mentor, or partner with us to bring the programme to
            your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:admin@ldiinitiatives.org"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              admin@ldiinitiatives.org
            </a>
            <a
              href="/partners#volunteer"
              className="bg-white/10 text-white border border-white/25 px-8 py-4 rounded-lg font-semibold hover:bg-white/15 transition-colors cursor-pointer whitespace-nowrap"
            >
              Become a Mentor
            </a>
          </div>
          <p className="text-white/50 text-sm mt-8">
            +1 647 656 3026 · www.ldiinitiatives.org
          </p>
        </div>
      </section>
    </div>
  );
}