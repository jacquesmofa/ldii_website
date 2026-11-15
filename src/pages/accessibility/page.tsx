import copy from '../../content/pages/accessibility.json';
// Text, images and links: src/content/pages/accessibility.json (editable in the website editors).
export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{copy.heroSection.title}</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">{copy.heroSection.text}</p>
          <p className="text-green-100 mt-4">{copy.heroSection.text2}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
            
            {/* Our Commitment */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.ourCommitment.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.ourCommitment.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.ourCommitment.text2}</p>
              <p className="text-gray-700 leading-relaxed">{copy.ourCommitment.text3}</p>
            </div>

            {/* Standards and Guidelines */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.standardsAndGuidelines.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.standardsAndGuidelines.text}</p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{copy.standardsAndGuidelines.subheading}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{copy.standardsAndGuidelines.text2}</p>
                  <p className="text-gray-700 leading-relaxed">{copy.standardsAndGuidelines.text3}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{copy.standardsAndGuidelines.subheading2}</h3>
                  <p className="text-gray-700 leading-relaxed">{copy.standardsAndGuidelines.text4}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{copy.standardsAndGuidelines.subheading3}</h3>
                  <p className="text-gray-700 leading-relaxed">{copy.standardsAndGuidelines.text5}</p>
                </div>
              </div>
            </div>

            {/* Accessibility Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.accessibilityFeatures.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.accessibilityFeatures.text}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-text w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-keyboard-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-contrast-2-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-font-size w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-layout-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-focus-3-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-links-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-file-list-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-smartphone-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-video-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-error-warning-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-time-line w-6 h-6 flex items-center justify-center text-[#3CCB7F] mr-3 mt-1"></i>
                </div>
              </div>
            </div>

            {/* Assistive Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.assistiveTechnologies.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.assistiveTechnologies.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.assistiveTechnologies.item}</li>
                <li>{copy.assistiveTechnologies.item2}</li>
                <li>{copy.assistiveTechnologies.item3}</li>
                <li>{copy.assistiveTechnologies.item4}</li>
                <li>{copy.assistiveTechnologies.item5}</li>
                <li>{copy.assistiveTechnologies.item6}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{copy.assistiveTechnologies.text2}</p>
            </div>

            {/* Physical Accessibility */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.physicalAccessibility.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.physicalAccessibility.text}</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-wheelchair-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{copy.physicalAccessibility.subheading}</h3>
                    <p className="text-gray-700">{copy.physicalAccessibility.text2}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-parking-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{copy.physicalAccessibility.subheading2}</h3>
                    <p className="text-gray-700">{copy.physicalAccessibility.text3}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-service-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{copy.physicalAccessibility.subheading3}</h3>
                    <p className="text-gray-700">{copy.physicalAccessibility.text4}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-user-heart-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{copy.physicalAccessibility.subheading4}</h3>
                    <p className="text-gray-700">{copy.physicalAccessibility.text5}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-volume-up-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{copy.physicalAccessibility.subheading5}</h3>
                    <p className="text-gray-700">{copy.physicalAccessibility.text6}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Accessibility */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.documentAccessibility.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.documentAccessibility.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.documentAccessibility.item}</li>
                <li>{copy.documentAccessibility.item2}</li>
                <li>{copy.documentAccessibility.item3}</li>
                <li>{copy.documentAccessibility.item4}</li>
                <li>{copy.documentAccessibility.item5}</li>
                <li>{copy.documentAccessibility.item6}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{copy.documentAccessibility.text2}</p>
            </div>

            {/* Ongoing Efforts */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.ongoingEfforts.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.ongoingEfforts.text}</p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{copy.ongoingEfforts.subheading}</h3>
                  <p className="text-gray-700">{copy.ongoingEfforts.text2}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{copy.ongoingEfforts.subheading2}</h3>
                  <p className="text-gray-700">{copy.ongoingEfforts.text3}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{copy.ongoingEfforts.subheading3}</h3>
                  <p className="text-gray-700">{copy.ongoingEfforts.text4}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{copy.ongoingEfforts.subheading4}</h3>
                  <p className="text-gray-700">{copy.ongoingEfforts.text5}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{copy.ongoingEfforts.subheading5}</h3>
                  <p className="text-gray-700">{copy.ongoingEfforts.text6}</p>
                </div>
              </div>
            </div>

            {/* Known Limitations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.knownLimitations.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.knownLimitations.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.knownLimitations.item}</li>
                <li>{copy.knownLimitations.item2}</li>
                <li>{copy.knownLimitations.item3}</li>
                <li>{copy.knownLimitations.item4}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{copy.knownLimitations.text2}</p>
            </div>

            {/* Feedback and Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.feedbackAndContact.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.feedbackAndContact.text}</p>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{copy.feedbackAndContact.text2}</div>
                  <div className="text-gray-700">{copy.feedbackAndContact.text3}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{copy.feedbackAndContact.text4}</div>
                  <a href={copy.feedbackAndContact.emailLink} className="text-green-600 hover:text-green-700 block break-all">{copy.feedbackAndContact.link}</a>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{copy.feedbackAndContact.text5}</div>
                  <a href={copy.feedbackAndContact.phoneLink} className="text-green-600 hover:text-green-700">{copy.feedbackAndContact.link2}</a>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{copy.feedbackAndContact.text6}</div>
                  <div className="text-gray-700">{copy.feedbackAndContact.text7}</div>
                  <div className="text-gray-700">{copy.feedbackAndContact.text8}</div>
                  <div className="text-gray-700">{copy.feedbackAndContact.text9}</div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">{copy.feedbackAndContact.text10}</p>
            </div>

            {/* Formal Complaints */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.formalComplaints.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.formalComplaints.text}</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.formalComplaints.item}</li>
                <li>{copy.formalComplaints.item2}</li>
                <li>{copy.formalComplaints.item3}</li>
                <li>{copy.formalComplaints.item4}</li>
                <li>{copy.formalComplaints.item5}</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">{copy.formalComplaints.text2}</p>
            </div>

            {/* Acknowledgment */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>{copy.acknowledgment.bold}</strong>{copy.acknowledgment.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/privacy-policy"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-shield-check-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">{copy.quickLinks.subheading}</h3>
              <p className="text-gray-600">{copy.quickLinks.text}</p>
            </a>
            <a
              href="/terms-of-service"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-file-text-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">{copy.quickLinks.subheading2}</h3>
              <p className="text-gray-600">{copy.quickLinks.text2}</p>
            </a>
            <a
              href="/contact"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-customer-service-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">{copy.quickLinks.subheading3}</h3>
              <p className="text-gray-600">{copy.quickLinks.text3}</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
