import { Link } from 'react-router-dom';
import copy from '../../../../content/pages/president.json';
// Text, images and links: src/content/pages/president.json (editable in the website editors).

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
                    src={copy.heroSection.image}
                    alt={copy.heroSection.imageAlt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{copy.heroSection.title}</h1>
              <p className="text-xl text-emerald-300 font-semibold mb-4">{copy.heroSection.text}</p>
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">{copy.heroSection.text2}</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                    <i className="ri-building-line text-emerald-300"></i>
                  </div>
                  <span>{copy.heroSection.label}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                    <i className="ri-building-line text-emerald-300"></i>
                  </div>
                  <span>{copy.heroSection.label2}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                    <i className="ri-graduation-cap-line text-emerald-300"></i>
                  </div>
                  <span>{copy.heroSection.label3}</span>
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">{copy.executiveSummary.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{copy.executiveSummary.heading}</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border-l-4 border-emerald-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.executiveSummary.text}<strong className="text-gray-900">{copy.executiveSummary.bold}</strong>{copy.executiveSummary.text2}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.executiveSummary.text3}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{copy.executiveSummary.text4}</p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">{copy.coreCompetencies.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{copy.coreCompetencies.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Competency 1 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.competency1.subheading}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">{copy.competency1.bold}</strong>{copy.competency1.label}</span>
                </li>
              </ul>
            </div>

            {/* Competency 2 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-global-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.competency2.subheading}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">{copy.competency2.bold}</strong>{copy.competency2.label}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">{copy.competency2.bold2}</strong>{copy.competency2.label2}</span>
                </li>
              </ul>
            </div>

            {/* Competency 3 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-service-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.competency3.subheading}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">{copy.competency3.bold}</strong>{copy.competency3.label}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">{copy.competency3.bold2}</strong>{copy.competency3.label2}</span>
                </li>
              </ul>
            </div>

            {/* Competency 4 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-government-line text-2xl text-cyan-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.competency4.subheading}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">{copy.competency4.bold}</strong>{copy.competency4.label}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-800">{copy.competency4.bold2}</strong>{copy.competency4.label2}</span>
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">{copy.keyAchievements.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{copy.keyAchievements.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-group-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{copy.keyAchievements.subheading}</h3>
              <p className="text-gray-600 leading-relaxed">{copy.keyAchievements.text}<strong className="text-gray-800">{copy.keyAchievements.bold}</strong>{copy.keyAchievements.text2}</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-plant-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{copy.keyAchievements.subheading2}</h3>
              <p className="text-gray-600 leading-relaxed">{copy.keyAchievements.text3}<strong className="text-gray-800">{copy.keyAchievements.bold2}</strong>{copy.keyAchievements.text4}</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-money-dollar-circle-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{copy.keyAchievements.subheading3}</h3>
              <p className="text-gray-600 leading-relaxed">{copy.keyAchievements.text5}<strong className="text-gray-800">{copy.keyAchievements.bold3}</strong>{copy.keyAchievements.text6}</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{copy.keyAchievements.subheading4}</h3>
              <p className="text-gray-600 leading-relaxed">{copy.keyAchievements.text7}<strong className="text-gray-800">{copy.keyAchievements.bold4}</strong>{copy.keyAchievements.text8}</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
              <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-award-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{copy.keyAchievements.subheading5}</h3>
              <p className="text-gray-600 leading-relaxed">{copy.keyAchievements.text9}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Engagements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">{copy.stakeholderEngagements.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{copy.stakeholderEngagements.heading}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'University of Guelph',
              'University of Toronto',
              'Toronto Region Board of Trade',
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

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">{copy.contactInfo.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{copy.contactInfo.heading}</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-xl text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{copy.contactInfo.subheading}</h4>
                  <p className="text-gray-600">{copy.contactInfo.text}</p>
                  <p className="text-gray-600">{copy.contactInfo.text2}</p>
                  <p className="text-gray-600">{copy.contactInfo.text3}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-global-line text-xl text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{copy.contactInfo.subheading2}</h4>
                  <p className="text-gray-600">{copy.contactInfo.text4}</p>
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
            </div>{copy.backNavigation.text}</Link>
        </div>
      </section>
    </div>
  );
}