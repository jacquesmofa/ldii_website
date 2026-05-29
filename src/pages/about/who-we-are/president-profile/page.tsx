import { Link } from 'react-router-dom';

export default function PresidentProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-700 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/70 via-[#0A1E3D]/60 to-[#0A1E3D]/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative">
                <div className="w-72 h-72 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="https://storage.readdy-site.link/project_files/836b8318-f1ec-485e-88c4-18bd6440b55d/701ca0d0-fd60-45d3-8075-b92942a7a09f_WhatsApp-Image-2026-05-15-at-17.09.45.jpeg?v=1dbaf5f87cc5c04b8030605dd2f15a5f"
                    alt="Mr. Ronald Lwabaayi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mr. Ronald Lwabaayi
              </h1>
              <p className="text-xl text-emerald-300 font-semibold mb-4">
                Founder & President, LDII
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                Economist, Technology Transfer & International Trade Facilitator
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                    <i className="ri-building-line text-emerald-300"></i>
                  </div>
                  <span>Member, Toronto Board of Trade</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                    <i className="ri-building-line text-emerald-300"></i>
                  </div>
                  <span>Member, Brampton Board of Trade</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                    <i className="ri-graduation-cap-line text-emerald-300"></i>
                  </div>
                  <span>University of British Columbia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Executive Summary</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border-l-4 border-emerald-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mr. Ronald Lwabaayi is a distinguished Economist and Canadian leader in international trade with a career spanning over a decade in high-level global development. Prior to founding Livelihood Development International Initiatives (LDII), Mr. Lwabaayi served as a <strong className="text-gray-900">Researcher for the World Bank</strong>, where he gained deep analytical insights into global economic structures and systemic development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As an enthusiastic leader of trade and a seasoned researcher on world events, he has dedicated his career to bridging the gap between Canadian innovation and the developmental needs of the Global South. He was the chairman of the Climate Change Action of East Africa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              His unique background as an economist allows him to design frameworks that address "Global Shocks" crises in health, climate, and trade while ensuring the economic viability and long-term sustainability of community-led initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Core Competencies & Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Competency 1 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Research & Analytical Expertise</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">World Bank Research Legacy:</strong> Leverages a rigorous background in global economic research to analyze market trends, evaluate risk, and design evidence-based solutions for emerging economies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">Macro-Economic Strategy:</strong> Applies economic principles to the development of ecomuseums and cultural institutions, ensuring they serve as catalysts for non-oil GDP growth and international trade.</span>
                </li>
              </ul>
            </div>

            {/* Competency 2 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-global-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global North-South Technology Transfer</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">Innovation Brokerage:</strong> At the forefront of transferring advanced Canadian technologies to emerging markets, specifically in CleanTech, Smart City infrastructure, and Digital Health systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">Institutional Alignment:</strong> Directly engages with government bodies at all levels - Federal, Provincial (Ontario), and Municipal (Toronto/Brampton) - to align international development projects with Canadian regulatory standards and foreign policy.</span>
                </li>
              </ul>
            </div>

            {/* Competency 3 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-service-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trade & Diplomacy Excellence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">Business Network Integration:</strong> Leverages senior memberships in the Toronto and Brampton Boards of Trade (Canada's largest business networks) to provide African governments and private sectors with direct access to Canadian SMEs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">Diplomatic Bridge:</strong> Acts as a trusted intermediary between diplomatic missions in Canada and the Canadian private sector, facilitating high-value investment frameworks and bilateral trade agreements.</span>
                </li>
              </ul>
            </div>

            {/* Competency 4 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-government-line text-2xl text-cyan-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Relationship with the Government of Canada</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">Compliance & Integrity:</strong> Operates LDII as a Canadian-registered non-profit in full compliance with Federal and Provincial laws, maintaining a reputation for transparency and ethical engagement rooted in international institutional standards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">Advocacy:</strong> Actively lobbies and consults with Canadian governmental and non-governmental organizations to influence public policy regarding international climate adaptation and global health resilience.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Key Achievements (2023-2026)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-group-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">International Post-COVID Conferences</h3>
              <p className="text-gray-600 leading-relaxed">
                Successfully convened over <strong className="text-gray-800">250 global delegates</strong>, including Canadian decision-makers, in Toronto and Brampton to strategize on "Building Synergies for Future Global Shocks" (2024, 2025).
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-plant-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Climate & Environment Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                Spearheaded global reforestation efforts with <strong className="text-gray-800">500,000+ trees planted</strong>. Organized the East Africa Climate Summit in Nairobi (2023), facilitating MOUs between Canadian green-tech firms and African ministries.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-money-dollar-circle-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Economic Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                His initiatives have facilitated trade delegations and technology pilot agreements valued at over <strong className="text-gray-800">$10M CAD</strong>, directly benefiting the economic diversification of partner nations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Interfaith & Multicultural Solidarity</h3>
              <p className="text-gray-600 leading-relaxed">
                Organized the <strong className="text-gray-800">1st International Interfaith Multicultural Memorial (2024)</strong> in Ontario, bringing together multi-sectoral leaders to foster social cohesion and mental health awareness in diverse communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
              <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-award-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">World Bank Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Served as a researcher for the World Bank, developing deep analytical insights into global economic structures and systemic development frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Engagements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Network</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Stakeholder Engagements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'University of Guelph',
              'University of Toronto',
              'Toronto Board of Trade',
              'Brampton Board of Trade',
              'University of British Columbia',
              'World Bank Alumni Network'
            ].map((institution) => (
              <div key={institution} className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-building-2-line text-emerald-600"></i>
                </div>
                <span className="font-semibold text-gray-800">{institution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation & Closing */}
      <section className="py-20 bg-emerald-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <i className="ri-double-quotes-l text-5xl text-emerald-400"></i>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
            For visionary leadership as an Economist and Global Facilitator in bridging Canadian innovation with the Global South, for advancing technology transfer through rigorous research and diplomatic cooperation, and for creating sustainable platforms for shared prosperity.
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-emerald-300 font-semibold text-lg">Proposed Citation</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Contact Information</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-xl text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">3701 Chesswood Dr #315</p>
                  <p className="text-gray-600">North York, ON M3J 2P6</p>
                  <p className="text-gray-600">Toronto, Canada</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-global-line text-xl text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Web</h4>
                  <p className="text-gray-600">LDII Official Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link
            to="/about/who-we-are"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-arrow-left-line"></i>
            </div>
            Back to Who We Are
          </Link>
        </div>
      </section>
    </div>
  );
}