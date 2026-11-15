import copy from '../../content/pages/terms-of-service.json';
// Text, images and links: src/content/pages/terms-of-service.json (editable in the website editors).
export default function TermsOfServicePage() {
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
            
            {/* Agreement to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.agreementToTerms.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.agreementToTerms.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.agreementToTerms.text2}</p>
              <p className="text-gray-700 leading-relaxed">{copy.agreementToTerms.text3}</p>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.eligibility.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.eligibility.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.eligibility.item}</li>
                <li>{copy.eligibility.item2}</li>
                <li>{copy.eligibility.item3}</li>
                <li>{copy.eligibility.item4}</li>
                <li>{copy.eligibility.item5}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{copy.eligibility.text2}</p>
            </div>

            {/* Use of Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.useOfServices.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.useOfServices.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.useOfServices.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{copy.useOfServices.item}</li>
                <li>{copy.useOfServices.item2}</li>
                <li>{copy.useOfServices.item3}</li>
                <li>{copy.useOfServices.item4}</li>
                <li>{copy.useOfServices.item5}</li>
                <li>{copy.useOfServices.item6}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.useOfServices.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.useOfServices.text2}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.useOfServices.item7}</li>
                <li>{copy.useOfServices.item8}</li>
                <li>{copy.useOfServices.item9}</li>
                <li>{copy.useOfServices.item10}</li>
                <li>{copy.useOfServices.item11}</li>
                <li>{copy.useOfServices.item12}</li>
                <li>{copy.useOfServices.item13}</li>
                <li>{copy.useOfServices.item14}</li>
                <li>{copy.useOfServices.item15}</li>
                <li>{copy.useOfServices.item16}</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.userAccounts.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.userAccounts.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.userAccounts.item}</li>
                <li>{copy.userAccounts.item2}</li>
                <li>{copy.userAccounts.item3}</li>
                <li>{copy.userAccounts.item4}</li>
                <li>{copy.userAccounts.item5}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.userAccounts.text2}</p>
              <p className="text-gray-700 leading-relaxed">{copy.userAccounts.text3}</p>
            </div>

            {/* Donations and Payments */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.donationsAndPayments.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.donationsAndPayments.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.donationsAndPayments.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{copy.donationsAndPayments.item}</li>
                <li>{copy.donationsAndPayments.item2}</li>
                <li>{copy.donationsAndPayments.item3}</li>
                <li>{copy.donationsAndPayments.item4}</li>
                <li>{copy.donationsAndPayments.item5}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.donationsAndPayments.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.donationsAndPayments.text2}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{copy.donationsAndPayments.item6}</li>
                <li>{copy.donationsAndPayments.item7}</li>
                <li>{copy.donationsAndPayments.item8}</li>
                <li>{copy.donationsAndPayments.item9}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.donationsAndPayments.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.donationsAndPayments.text3}</p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.intellectualProperty.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.intellectualProperty.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.intellectualProperty.text}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.intellectualProperty.text2}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.intellectualProperty.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.intellectualProperty.text3}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.intellectualProperty.text4}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{copy.intellectualProperty.item}</li>
                <li>{copy.intellectualProperty.item2}</li>
                <li>{copy.intellectualProperty.item3}</li>
                <li>{copy.intellectualProperty.item4}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.intellectualProperty.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.intellectualProperty.text5}</p>
            </div>

            {/* Disclaimer of Warranties */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.disclaimerOfWarranties.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.disclaimerOfWarranties.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.disclaimerOfWarranties.item}</li>
                <li>{copy.disclaimerOfWarranties.item2}</li>
                <li>{copy.disclaimerOfWarranties.item3}</li>
                <li>{copy.disclaimerOfWarranties.item4}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.disclaimerOfWarranties.text2}</p>
              <p className="text-gray-700 leading-relaxed">{copy.disclaimerOfWarranties.text3}</p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.limitationOfLiability.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.limitationOfLiability.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.limitationOfLiability.item}</li>
                <li>{copy.limitationOfLiability.item2}</li>
                <li>{copy.limitationOfLiability.item3}</li>
                <li>{copy.limitationOfLiability.item4}</li>
                <li>{copy.limitationOfLiability.item5}</li>
                <li>{copy.limitationOfLiability.item6}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.limitationOfLiability.text2}</p>
              <p className="text-gray-700 leading-relaxed">{copy.limitationOfLiability.text3}</p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.indemnification.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.indemnification.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>{copy.indemnification.item}</li>
                <li>{copy.indemnification.item2}</li>
                <li>{copy.indemnification.item3}</li>
                <li>{copy.indemnification.item4}</li>
                <li>{copy.indemnification.item5}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{copy.indemnification.text2}</p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.disputeResolution.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.disputeResolution.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.disputeResolution.text}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.disputeResolution.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.disputeResolution.text2}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.disputeResolution.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.disputeResolution.text3}</p>
            </div>

            {/* General Provisions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.generalProvisions.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.generalProvisions.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.generalProvisions.text}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.generalProvisions.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.generalProvisions.text2}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.generalProvisions.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.generalProvisions.text3}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.generalProvisions.subheading4}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.generalProvisions.text4}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.generalProvisions.subheading5}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.generalProvisions.text5}</p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.contactInformation.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.contactInformation.text}</p>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{copy.contactInformation.text2}</div>
                  <div className="text-gray-700">{copy.contactInformation.text3}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{copy.contactInformation.text4}</div>
                  <div className="text-gray-700">{copy.contactInformation.text5}</div>
                  <div className="text-gray-700">{copy.contactInformation.text6}</div>
                  <div className="text-gray-700">{copy.contactInformation.text7}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{copy.contactInformation.text8}</div>
                  <a href={copy.contactInformation.emailLink} className="text-green-600 hover:text-green-700 block break-all">{copy.contactInformation.link}</a>
                  <a href={copy.contactInformation.emailLink2} className="text-green-600 hover:text-green-700 block break-all">{copy.contactInformation.link2}</a>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{copy.contactInformation.text9}</div>
                  <a href={copy.contactInformation.phoneLink} className="text-green-600 hover:text-green-700">{copy.contactInformation.link3}</a>
                </div>
              </div>
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
              href="/accessibility"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-wheelchair-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
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
