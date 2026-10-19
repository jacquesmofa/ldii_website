const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrive Toronto',
    body: 'Airport reception, hotel, evening welcome and programme briefing.',
  },
  {
    day: 'Day 2',
    title: 'To Greater Sudbury',
    body: 'Coach north. Welcome reception with the Greater Sudbury Chamber of Commerce and member mining companies.',
  },
  {
    day: 'Day 3',
    title: 'Heritage and learning',
    body: 'Dynamic Earth underground tour. Laurentian University, the Goodman School of Mines and MIRARCO. Regreening sites.',
  },
  {
    day: 'Day 4',
    title: 'NORCAT training',
    body: 'Safety systems, underground orientation and hands-on skills training in an operating mine at the NORCAT Underground Centre.',
  },
  {
    day: 'Day 5',
    title: 'Technology and suppliers',
    body: 'Underground technology demonstrations, business meetings with MineConnect suppliers, college sessions with Cambrian College and Collège Boréal.',
  },
  {
    day: 'Day 6',
    title: 'Treaty orientation',
    body: 'Road north with Indigenous facilitators and invited First Nations hosts, arriving in Timmins via Kirkland Lake.',
  },
  {
    day: 'Day 7',
    title: 'Canadian Mining Expo',
    body: 'Expo floor, First Nations Forum and projects pipeline sessions. Timmins Chamber of Commerce meetings. Northern College, Haileybury School of Mines.',
  },
  {
    day: 'Day 8',
    title: 'Site visit and return',
    body: 'Site visit in the Timmins camp, subject to operator approval. Closing session with agreed next steps. Flight to Toronto.',
  },
];

const ecosystem = [
  {
    label: 'Operators',
    body: 'Nickel and copper producers in Sudbury; gold and base metal operations in Timmins. Working mines at scale, a mature health and safety culture, and closure planning built into operations.',
    icon: 'ri-landscape-line',
  },
  {
    label: 'Supply and services',
    body: 'MineConnect, the association for Northern Ontario mining supply firms. Equipment, automation, battery electric fleets, software and engineering, from suppliers who can follow up in Africa.',
    icon: 'ri-tools-line',
  },
  {
    label: 'Training and testing',
    body: 'NORCAT Underground Centre, Onaping. Hands-on skills training and live technology demonstrations underground, in an operating mine.',
    icon: 'ri-award-line',
  },
  {
    label: 'Applied research',
    body: 'MIRARCO, CEMI and MERC. Research on safety, productivity, mineral exploration and the rehabilitation of mined land.',
    icon: 'ri-flask-line',
  },
  {
    label: 'University',
    body: 'Laurentian University: Goodman School of Mines, Bharti School of Engineering and Harquail School of Earth Sciences. Programmes across the full mining cycle.',
    icon: 'ri-building-4-line',
  },
  {
    label: 'College diplomas',
    body: 'Cambrian College and Collège Boréal in Sudbury; Northern College in Timmins. Technical diplomas and the skilled trades, with French-language delivery for Francophone partners.',
    icon: 'ri-book-open-line',
  },
  {
    label: 'Market and deal-making',
    body: 'Canadian Mining Expo, Timmins. Exhibits each June, a First Nations Forum, and a projects pipeline series where suppliers and buyers meet.',
    icon: 'ri-exchange-line',
  },
  {
    label: 'Municipal leadership',
    body: 'City of Greater Sudbury and City of Timmins. Two mining cities whose economic development offices work directly with industry and welcome international delegations.',
    icon: 'ri-government-line',
  },
];

const focusAreas = [
  {
    title: 'Mineral exploration',
    body: 'Finding and defining deposits before money is spent on digging. Field-based geology, sampling and mapping methods suited to small claims, and French-language training for Francophone partners.',
    partners: 'Laurentian University · Harquail School of Earth Sciences · MERC · Collège Boréal',
  },
  {
    title: 'Gold recovery',
    body: 'Getting more gold from the same ore, without mercury. Mineral processing and recovery methods, cleaner alternatives to mercury amalgamation, and the economics of higher yield.',
    partners: 'MIRARCO · Bharti School of Engineering · Northern College',
  },
  {
    title: 'Environmental protection',
    body: 'Protecting water, land and the health of mining communities. Water monitoring, tailings management and land restoration, taught in the city that turned a damaged landscape back into forest.',
    partners: 'Vale Living with Lakes Centre · MIRARCO · City of Greater Sudbury Regreening',
  },
  {
    title: 'Mining safety',
    body: 'Sending every miner home at the end of every shift. Hands-on underground safety training, ground control, ventilation and emergency response, plus programmes to train local trainers.',
    partners: 'NORCAT Underground Centre · Cambrian College · Goodman School of Mines',
  },
  {
    title: 'Appropriate technologies',
    body: 'Equipment that fits the scale, budget and skills of a small operation. Matching small-scale operations with right-sized, maintainable equipment, sold with training and after-sales support.',
    partners: 'MineConnect members · NORCAT · CEMI',
  },
];

const transfers = [
  { title: 'Technical skills', body: 'Trained operators and trainers, and safety systems that outlast the visit.' },
  { title: 'Cleaner processing', body: 'Safer, mercury-free options for artisanal and small-scale gold workings.' },
  { title: 'Credentials', body: 'Canadian programmes delivered in-country, so students qualify without relocating.' },
  { title: 'Community participation', body: 'Practical models for consultation, benefit agreements and revenue sharing.' },
  { title: 'Technology', body: 'Equipment sold with training and after-sales support, not boxes shipped without know-how.' },
  { title: 'Closure and restoration', body: 'Closure plans written before a mine opens, and land returned to use when it ends.' },
];

const phases = [
  {
    period: '2026 – 2027',
    title: 'Foundation',
    body: 'Institutional engagement, delegation development and the first mission to Northern Ontario. Relationships established before commitments are made.',
  },
  {
    period: '2027 – 2029',
    title: 'Demonstration',
    body: 'Technology partnerships formed during the mission tested in operating conditions. Training delivery piloted in partner states.',
  },
  {
    period: '2029 – 2032',
    title: 'Capability',
    body: 'In-country curriculum delivery at scale. Supplier relationships matured into service agreements. Community agreement practice exchanged in both directions.',
  },
  {
    period: 'Beyond 2032',
    title: 'Continuity',
    body: 'An annual programme and institutional partnerships operating independently of the founding organisations.',
  },
];

export default function MiningTechnologyExchangePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://readdy.ai/api/search-image?query=Underground%20hard%20rock%20mine%20tunnel%20with%20modern%20equipment%20and%20warm%20industrial%20lighting%2C%20engineer%20in%20safety%20gear%20and%20helmet%20examining%20rock%20face%2C%20dramatic%20depth%20and%20scale%2C%20teal%20and%20amber%20tones%2C%20cinematic%20documentary%20photography&width=1920&height=800&seq=mining-exchange-hero-2026&orientation=landscape)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/85 via-[#0A1E3D]/75 to-[#0A1E3D]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-[#00D9FF] font-semibold mb-5">
            Flagship Programme · June 2027
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Africa–Canada Mining &amp; Technology Exchange
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Executive delegations from Uganda, Kenya, South Africa, Botswana and Senegal to
            Northern Ontario. Human capital development in modern mining: safer operations and
            increased yield.
          </p>
        </div>
      </section>

      {/* Delivery partners */}
      <section className="py-14 md:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.thrivetours.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-green-200 transition-colors cursor-pointer"
            >
              <div className="h-14 mb-5 flex items-center">
                <img
                  src="https://res.cloudinary.com/dzppzxpad/image/upload/f_auto,q_auto,w_360/v1792410688/logo-2026_thrive_tours_kbecbo.webp"
                  alt="Thrive Tours logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <span className="block text-xs uppercase tracking-widest text-green-600 font-semibold mb-2">
                Canadian host and delivery lead
              </span>
              <p className="text-gray-700 leading-relaxed text-sm">
                A nationally award-winning, 100% Indigenous-owned education and eco-tourism
                company based at Batchewana First Nation. Thrive Tours designs and hosts
                experiential programmes for universities, international groups and visiting
                delegations, and brings the First Nations relationships and treaty knowledge at
                the heart of responsible mining in Northern Ontario.
              </p>
            </a>
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <div className="h-14 mb-5 flex items-center">
                <img
                  src="https://res.cloudinary.com/dzppzxpad/image/upload/q_auto/f_auto/v1781702619/Circular_LDII_bewv0j.png"
                  alt="LDII logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <span className="block text-xs uppercase tracking-widest text-green-600 font-semibold mb-2">
                African partnerships lead
              </span>
              <p className="text-gray-700 leading-relaxed text-sm">
                A federally incorporated Canadian organisation that facilitates technology
                transfer from the Global North to the Global South. LDII works directly with
                African diplomatic missions, ministries responsible for mining, and chambers of
                mines to build practical, lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The premise */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The premise: capability, not equipment
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            The constraint in much of African mining is not the absence of equipment. It is the
            capability to operate, maintain and sustain it. Suppliers sell machinery and leave.
            Training is sold separately, if at all, and rarely delivered on site.
          </p>
          <div className="border-l-4 border-green-600 pl-6 py-2 mb-5">
            <p className="text-gray-800 italic leading-relaxed">
              That observation did not come from us. It came from the Uganda High Commission in
              Ottawa, and it has been repeated in substance by every mission we have spoken with.
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            It is the organising idea of the mission. Every layer of the Northern Ontario
            ecosystem is a source of that know-how, and most of it sits within an hour&rsquo;s
            drive of Greater Sudbury.
          </p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eight days in Northern Ontario
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Built around the Canadian Mining Expo in Timmins, with travel time capped at two
              days each way and arrivals phased by country.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Northern Ontario
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Two mining regions about four hours apart give delegates the full life cycle in
              one programme: discovery, deep mining, processing, supply, research, closure and
              land restoration. Both have mined for more than a century and are still working.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Five focus areas
            </h2>
            <p className="text-lg text-white/75 leading-relaxed">
              Each focus area is matched to institutions that already do this work, so
              small-scale miners learn from the people and places that practise it every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7"
              >
                <span className="block text-xs font-bold tracking-widest text-[#00D9FF] mb-3">
                  0{index + 1}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What transfers
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Delegates should leave with relationships and capability, not brochures. An expo
              visit on its own sends people home with documents and little else; this programme
              is built so that every week in Canada opens work that continues in Africa.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community participation and negotiated benefit
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The programme crosses two treaty territories. Greater Sudbury sits in Robinson
              Huron Treaty territory, on the traditional lands of Atikameksheng Anishnawbek and
              Wahnapitae First Nation. Timmins sits in Treaty 9 territory. These are specific
              Nations with their own laws, leadership and priorities, and the programme treats
              them that way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-checkbox-circle-line w-5 h-5 flex items-center justify-center text-green-600" />
                What works
              </h3>
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
                <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center text-amber-600" />
                What has not worked
              </h3>
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
            <p className="text-lg text-gray-700 leading-relaxed">
              The transferable element is not the legal instrument. It is the recognition that a
              mine operating without the consent of the people who live with its consequences is
              carrying a risk that does not appear on a balance sheet until it does.
            </p>
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
              body: 'ASM supports livelihoods across the continent on a scale no industrial operation approaches, and is where the most serious safety, mercury and child labour harms concentrate. What transfers is narrower and more useful: cooperative organisation and aggregation, mercury-free processing at small scale, geological data access, and regulatory design that licenses activity already happening.',
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
          <p className="text-sm text-gray-500 leading-relaxed">
            Institutions named on this page are listed as the relevant Canadian capability for
            this work. Naming them is not a claim that they have committed to, or endorsed, the
            programme.
          </p>
        </div>
      </section>

      {/* Phased approach */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A phased approach
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The sequence is deliberately slow at the start, because the relationships this
              depends on cannot be rushed.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Who takes part
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              People working in mining or mining education: policy makers, chambers of mines,
              regional and traditional leaders, faculty and students.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Delegates are vetted with each country&rsquo;s mission, chamber and ministry. This
              is a working programme, not a travel or visa route. Each country is planned
              separately with its own mission, ministry and chamber of mines, and delegations
              are drawn from ministries, geological surveys and private-sector mining leadership.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Representatives of African missions in Canada are invited to visit Greater Sudbury
              and Timmins ahead of the delegations, to see the programme before recommending it
              home.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              How to engage with the programme
            </h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Talk to the steering committee
            </h2>
            <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              The full programme document, the day-by-day itinerary, the delegate package and
              the partner list are available on request.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/15 rounded-2xl p-7">
              <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">
                Programme operator
              </span>
              <h3 className="text-white font-bold mb-1">Thrive Tours Inc.</h3>
              <p className="text-white/60 text-sm mb-4">
                Brad Robinson, Chief Executive Officer
              </p>
              <a
                href="mailto:brad@thrivetours.ca"
                className="block text-[#00D9FF] text-sm hover:underline break-words"
              >
                brad@thrivetours.ca
              </a>
              <a
                href="https://www.thrivetours.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/70 text-sm mt-3 hover:text-white transition-colors"
              >
                <span>www.thrivetours.ca</span>
                <i className="ri-external-link-line w-4 h-4 flex items-center justify-center" />
              </a>
            </div>
            <div className="bg-white/5 border border-white/15 rounded-2xl p-7">
              <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">
                Co-host and African partnerships
              </span>
              <h3 className="text-white font-bold mb-1">
                Livelihood Development International Initiatives
              </h3>
              <p className="text-white/60 text-sm mb-4">Ronald Lwabaayi, President</p>
              <a
                href="mailto:admin@ldiinitiatives.org"
                className="block text-[#00D9FF] text-sm hover:underline break-words"
              >
                admin@ldiinitiatives.org
              </a>
              <a href="tel:+16476563026" className="block text-white/70 text-sm mt-2">
                +1 647 656 3026
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="/contact"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap text-center"
            >
              Request the Programme Document
            </a>
            <a
              href="/partners"
              className="bg-white/10 text-white border border-white/25 px-8 py-4 rounded-lg font-semibold hover:bg-white/15 transition-colors cursor-pointer whitespace-nowrap text-center"
            >
              Our Partners
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}