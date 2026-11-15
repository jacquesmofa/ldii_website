import copy from '../../../content/pages/mining-mission.json';
// Text, images and links: src/content/pages/mining-mission.json (editable in the website editors).
const itinerary = copy.itinerary;

const ecosystem = copy.ecosystem;

const focusAreas = copy.focusAreas;

const transfers = copy.transfers;

const phases = copy.phases;

export default function MiningTechnologyExchangePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              `url(${copy.hero.backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/85 via-[#0A1E3D]/75 to-[#0A1E3D]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-[#3CCB7F] font-semibold mb-5">{copy.hero.label}</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{copy.hero.title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{copy.hero.text}</p>
        </div>
      </section>

      {/* Delivery partners */}
      <section className="py-14 md:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={copy.deliveryPartners.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-green-200 transition-colors cursor-pointer"
            >
              <div className="h-14 mb-5 flex items-center">
                <img
                  src={copy.deliveryPartners.image}
                  alt={copy.deliveryPartners.imageAlt}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <span className="block text-xs uppercase tracking-widest text-green-600 font-semibold mb-2">{copy.deliveryPartners.label}</span>
              <p className="text-gray-700 leading-relaxed text-sm">{copy.deliveryPartners.text}</p>
            </a>
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <div className="h-14 mb-5 flex items-center">
                <img
                  src={copy.deliveryPartners.image2}
                  alt={copy.deliveryPartners.imageAlt2}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <span className="block text-xs uppercase tracking-widest text-green-600 font-semibold mb-2">{copy.deliveryPartners.label2}</span>
              <p className="text-gray-700 leading-relaxed text-sm">{copy.deliveryPartners.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The premise */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{copy.thePremise.heading}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">{copy.thePremise.text}</p>
          <div className="border-l-4 border-green-600 pl-6 py-2 mb-5">
            <p className="text-gray-800 italic leading-relaxed">{copy.thePremise.text2}</p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{copy.thePremise.text3}</p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{copy.itinerarySection.heading}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{copy.itinerarySection.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {itinerary.map((item) => (
              <div
                key={item.day}
                className="bg-white rounded-xl p-6 border border-gray-100 flex items-start gap-5"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-green-600 whitespace-nowrap pt-1">
                  {item.day}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{copy.ecosystemSection.heading}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{copy.ecosystemSection.text}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ecosystem.map((layer) => (
              <div key={layer.label} className="bg-gray-50 rounded-2xl p-6">
                <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i
                    className={`${layer.icon} w-5 h-5 flex items-center justify-center text-green-600`}
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{layer.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{layer.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-16 md:py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{copy.focusAreasSection.heading}</h2>
            <p className="text-lg text-white/75 leading-relaxed">{copy.focusAreasSection.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7"
              >
                <span className="block text-xs font-bold tracking-widest text-[#3CCB7F] mb-3">{copy.focusAreasSection.label}{index + 1}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{area.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{area.body}</p>
                <p className="text-white/40 text-xs leading-relaxed border-t border-white/10 pt-4">
                  {area.partners}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What transfers */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{copy.whatTransfers.heading}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{copy.whatTransfers.text}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {transfers.map((item) => (
              <div key={item.title} className="border-t-2 border-green-600 pt-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community participation */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{copy.communityParticipation.heading}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{copy.communityParticipation.text}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-checkbox-circle-line w-5 h-5 flex items-center justify-center text-green-600" />{copy.communityParticipation.subheading}</h3>
              <ul className="space-y-3">
                {[
                  'Equity participation: an ownership stake rather than a payment aligns interests over the life of a mine.',
                  'Procurement commitments with teeth: targets that are measured, reported and enforceable.',
                  'Community-led environmental monitoring, where communities hold the monitoring role themselves.',
                  'Agreements negotiated before permitting, rather than after.',
                ].map((line) => (
                  <li key={line} className="text-gray-700 text-sm leading-relaxed pl-4 border-l border-green-200">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center text-amber-600" />{copy.communityParticipation.subheading2}</h3>
              <ul className="space-y-3">
                {[
                  'Agreements signed under financial pressure, which have not aged well.',
                  'Confidentiality clauses that prevent communities from comparing terms with one another.',
                  'Consultation treated as a procedural requirement rather than a relationship.',
                  'Benefits that did not materialise: unmet employment targets, training that ended when the contractor left.',
                ].map((line) => (
                  <li key={line} className="text-gray-700 text-sm leading-relaxed pl-4 border-l border-amber-200">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">{copy.communityParticipation.text2}</p>
          </div>
        </div>
      </section>

      {/* Water, ASM, social infrastructure, academia */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Water and sustainable operations',
              body: 'Water is the constraint that most often determines whether a mine can operate, and the issue most likely to put an operation in conflict with its neighbours. Exchange covers closed-circuit recycling and tailings reprocessing, acid mine drainage prevention, dry stack tailings, community-held water quality monitoring and progressive rehabilitation during operations.',
              icon: 'ri-drop-line',
            },
            {
              title: 'Artisanal and small-scale mining',
              body: 'ASM supports livelihoods across the Global South on a scale no industrial operation approaches, and is where the most serious safety, mercury and child labour harms concentrate. What transfers is narrower and more useful: cooperative organisation and aggregation, mercury-free processing at small scale, geological data access, and regulatory design that licenses activity already happening.',
              icon: 'ri-hammer-line',
            },
            {
              title: 'Health, housing and social infrastructure',
              body: 'Mining in remote regions creates settlements whether or not anyone plans for them. The exchange covers silica and dust management, noise and diesel particulate exposure, mine rescue capability, and what a company owes a settlement it creates, written down before construction rather than negotiated after.',
              icon: 'ri-heart-pulse-line',
            },
            {
              title: 'Academic and training partnerships',
              body: 'The clearest institutional opportunity is in training delivered where the workforce is. Applied to mining, this means Canadian technical curriculum delivered in partner states, with local faculty development alongside it. It outlasts any single delegation and addresses the capability constraint directly.',
              icon: 'ri-graduation-cap-line',
            },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-5">
                <i
                  className={`${item.icon} w-6 h-6 flex items-center justify-center text-green-600`}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-10">
          <p className="text-sm text-gray-500 leading-relaxed">{copy.waterAsmSocialInfrastructureAcademia.text}</p>
        </div>
      </section>

      {/* Phased approach */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{copy.phasedApproach.heading}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{copy.phasedApproach.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <span className="block text-xs font-semibold tracking-widest text-green-600 mb-2">
                  {phase.period}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who takes part + engage */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{copy.whoTakesPartEngage.heading}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{copy.whoTakesPartEngage.text}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{copy.whoTakesPartEngage.text2}</p>
            <p className="text-gray-600 leading-relaxed">{copy.whoTakesPartEngage.text3}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-5">{copy.whoTakesPartEngage.subheading}</h3>
            <ul className="space-y-4">
              {[
                'Diplomatic missions and ministries: delegation endorsement, delegate selection and protocol.',
                'Chambers of mines and industry bodies: identifying participants and shaping sector priorities.',
                'Canadian suppliers and operators: technology demonstrations, site access and training partnerships.',
                'Academic institutions: in-country curriculum delivery and faculty development.',
                'Funders and development partners: sponsored places and in-country training.',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 bg-[#0A1E3D]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{copy.contact.heading}</h2>
            <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">{copy.contact.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/15 rounded-2xl p-7">
              <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">{copy.contact.label}</span>
              <h3 className="text-white font-bold mb-1">{copy.contact.subheading}</h3>
              <p className="text-white/60 text-sm mb-4">{copy.contact.text2}</p>
              <a
                href={copy.contact.emailLink}
                className="block text-[#3CCB7F] text-sm hover:underline break-words"
              >{copy.contact.link}</a>
              <a
                href={copy.contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/70 text-sm mt-3 hover:text-white transition-colors"
              >
                <span>{copy.contact.label2}</span>
                <i className="ri-external-link-line w-4 h-4 flex items-center justify-center" />
              </a>
            </div>
            <div className="bg-white/5 border border-white/15 rounded-2xl p-7">
              <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">{copy.contact.label3}</span>
              <h3 className="text-white font-bold mb-1">{copy.contact.subheading2}</h3>
              <p className="text-white/60 text-sm mb-4">{copy.contact.text3}</p>
              <a
                href={copy.contact.emailLink2}
                className="block text-[#3CCB7F] text-sm hover:underline break-words"
              >{copy.contact.link2}</a>
              <a href={copy.contact.phoneLink} className="block text-white/70 text-sm mt-2">{copy.contact.link3}</a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="/contact"
              className="bg-[#3CCB7F] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold hover:bg-[#2EB06C] transition-colors cursor-pointer whitespace-nowrap text-center"
            >{copy.contact.link4}</a>
            <a
              href="/partners"
              className="bg-white/10 text-white border border-white/25 px-8 py-4 rounded-lg font-semibold hover:bg-white/15 transition-colors cursor-pointer whitespace-nowrap text-center"
            >{copy.contact.link5}</a>
          </div>
        </div>
      </section>
    </div>
  );
}