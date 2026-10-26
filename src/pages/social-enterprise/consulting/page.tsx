const services = [
  {
    title: 'Market Analysis',
    icon: 'ri-bar-chart-box-line',
    summary:
      'A clear, evidence-based picture of the market you are entering or expanding into, before you commit resources to it.',
    points: [
      'Baseline market sizing and addressable demand',
      'Customer segmentation and buyer profiles',
      'Competitor mapping and positioning gaps',
      'Demand assessment for new sectors or product lines',
    ],
  },
  {
    title: 'Market Intelligence',
    icon: 'ri-radar-line',
    summary:
      'Ongoing intelligence rather than a one-off report, so your decisions are made on current information instead of last year\u2019s picture.',
    points: [
      'Real-time industry trend tracking',
      'Pricing shifts and margin pressure signals',
      'Competitor movements and new entrants',
      'Regulatory and policy change monitoring',
    ],
  },
  {
    title: 'Consultancy & Strategy',
    icon: 'ri-route-line',
    summary:
      'Turning raw data into a plan you can actually run, with the financial and social outcomes both written into the model.',
    points: [
      'Actionable business models and go-to-market plans',
      'Theory-of-change roadmaps',
      'Dual-bottom-line growth planning',
      'Balancing financial viability with social outcomes',
    ],
  },
];

const positioning = [
  {
    title: 'Fee-for-Service Model',
    body: 'We charge market-rate consultancy fees to commercial, non-profit and institutional clients. That revenue cross-subsidises pro-bono and low-income community work, so the mission is funded by the practice rather than competing with it.',
    icon: 'ri-scales-3-line',
  },
  {
    title: 'Impact Integration',
    body: 'We measure and report social and environmental return on investment (SROI) alongside conventional commercial metrics. That is what separates this practice from a standard market research agency.',
    icon: 'ri-seedling-line',
  },
  {
    title: 'Ecosystem Alignment',
    body: 'We work inside regional social enterprise networks and procurement frameworks, including Buy Social Canada, to open institutional B2B and B2G (business-to-government) contracts for the clients we serve.',
    icon: 'ri-node-tree',
  },
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1E3D]">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Executive%20strategy%20session%20in%20a%20bright%20modern%20boardroom%20with%20market%20data%20charts%20and%20dashboards%20on%20a%20large%20screen%2C%20diverse%20consultants%20in%20considered%20business%20attire%20reviewing%20market%20intelligence%2C%20calm%20professional%20atmosphere%2C%20muted%20green%20and%20warm%20neutral%20palette%2C%20editorial%20corporate%20photography%20with%20soft%20window%20light&width=1920&height=900&seq=consulting-hero-2026&orientation=landscape"
            alt="Consultants reviewing market analysis and intelligence in a boardroom"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/92 via-[#0A1E3D]/85 to-[#0A1E3D]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Wordmark */}
            <div className="mb-8">
              <span className="block text-2xl md:text-3xl font-bold tracking-[0.18em] text-green-400 leading-none">
                LDII
              </span>
              <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-white/55 mt-2">
                Livelihood Development International Initiatives
              </span>
            </div>

            <span className="inline-block text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#00D9FF] font-semibold mb-5">
              Social Enterprise
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Consulting &amp; Market Intelligence
            </h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
              LDII is a social enterprise providing consultancy, market analysis and market
              intelligence. We sit at the intersection of commercial research rigour and
              mission-driven impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact#get-in-touch"
                className="inline-flex items-center justify-center gap-2 bg-[#00D9FF] text-[#0A1E3D] px-7 py-3.5 rounded-md font-semibold hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
              >
                Request a Consultation
              </a>
              <a
                href="mailto:admin@ldiinitiatives.org"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-7 py-3.5 rounded-md font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
              >
                admin@ldiinitiatives.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
              Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] leading-tight mb-4">
              Three services, one evidence base
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Each engagement starts with the same question: what does the evidence actually say,
              and what does it mean for the decision in front of you?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-gray-100 p-7 hover:border-green-300 transition-colors duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F3F7F1] flex items-center justify-center mb-5">
                  <i className={`${service.icon} w-6 h-6 flex items-center justify-center text-green-700`}></i>
                </div>
                <span className="block text-[11px] font-semibold tracking-[0.22em] uppercase text-green-700 mb-2">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-[#0A1E3D] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.summary}</p>
                <ul className="space-y-2.5 mt-auto">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact#get-in-touch"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors cursor-pointer"
                >
                  Request a Consultation
                  <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 md:py-24 bg-[#F5F8F3] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
                Key Positioning
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] leading-tight mb-4">
                How we hold the commercial and the social together
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                A social enterprise is only credible if it can survive commercially. These three
                principles are how this practice does both.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {positioning.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#F3F7F1] flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} w-5 h-5 flex items-center justify-center text-green-700`}></i>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-[#0A1E3D] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-green-700 mb-3">
                Who we work with
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] leading-tight mb-5">
                Commercial, non-profit and institutional clients
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We take on work from clients who need a rigorous read on a market, and from
                organisations that need their social outcomes measured as seriously as their
                revenue.
              </p>
              <ul className="space-y-3">
                {[
                  'Businesses entering a new sector, region or product line',
                  'Non-profits and social enterprises building sustainable revenue',
                  'Institutions and government bodies commissioning market evidence',
                  'Partners preparing for B2B or B2G procurement',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <i className="ri-check-double-line w-4 h-4 flex items-center justify-center text-green-600 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700 text-sm leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 w-full h-72 md:h-96 rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Diverse%20professional%20team%20reviewing%20printed%20market%20research%20reports%20and%20data%20visualisation%20across%20a%20light%20wooden%20table%2C%20small%20social%20enterprise%20office%20with%20plants%20and%20natural%20light%2C%20collaborative%20working%20atmosphere%2C%20warm%20neutral%20and%20green%20tones%2C%20editorial%20business%20photography&width=1000&height=800&seq=consulting-team-2026&orientation=landscape"
                alt="LDII consulting team reviewing market research"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0A1E3D]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Request a consultation
          </h2>
          <p className="text-base md:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us the market question you are trying to answer. We will come back with a scoped
            approach, timeline and fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#get-in-touch"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Request a Consultation
            </a>
            <a
              href="mailto:admin@ldiinitiatives.org"
              className="bg-white/10 text-white border border-white/25 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap break-all"
            >
              admin@ldiinitiatives.org
            </a>
          </div>
          <p className="text-white/60 text-sm mt-8">
            Phone <a href="tel:+16476563026" className="text-white hover:text-[#00D9FF] transition-colors">+1 647 656 3026</a>
            <span className="mx-2 text-white/30">·</span>
            Toronto Office, 3701 Chesswood Drive, Unit 315, Toronto, ON M3J 2P6
          </p>
        </div>
      </section>
    </div>
  );
}