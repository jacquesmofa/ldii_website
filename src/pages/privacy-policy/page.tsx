import pageText from '../../content/pages/privacy-policy.json';
// Text, images and links: src/content/pages/privacy-policy.json (editable in the website editors).
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{pageText.heroSection.title}</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">{pageText.heroSection.text}</p>
          <p className="text-green-100 mt-4">{pageText.heroSection.text2}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.introduction.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.introduction.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.introduction.text2}</p>
              <p className="text-gray-700 leading-relaxed">{pageText.introduction.text3}</p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.informationWeCollect.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{pageText.informationWeCollect.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.informationWeCollect.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.informationWeCollect.item}</li>
                <li>{pageText.informationWeCollect.item2}</li>
                <li>{pageText.informationWeCollect.item3}</li>
                <li>{pageText.informationWeCollect.item4}</li>
                <li>{pageText.informationWeCollect.item5}</li>
                <li>{pageText.informationWeCollect.item6}</li>
                <li>{pageText.informationWeCollect.item7}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.informationWeCollect.text2}</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{pageText.informationWeCollect.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.informationWeCollect.text3}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.informationWeCollect.item8}</li>
                <li>{pageText.informationWeCollect.item9}</li>
                <li>{pageText.informationWeCollect.item10}</li>
                <li>{pageText.informationWeCollect.item11}</li>
                <li>{pageText.informationWeCollect.item12}</li>
                <li>{pageText.informationWeCollect.item13}</li>
                <li>{pageText.informationWeCollect.item14}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{pageText.informationWeCollect.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed">{pageText.informationWeCollect.text4}</p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.howWeUseYourInformation.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.howWeUseYourInformation.text}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.howWeUseYourInformation.subheading}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.howWeUseYourInformation.item}</li>
                <li>{pageText.howWeUseYourInformation.item2}</li>
                <li>{pageText.howWeUseYourInformation.item3}</li>
                <li>{pageText.howWeUseYourInformation.item4}</li>
                <li>{pageText.howWeUseYourInformation.item5}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.howWeUseYourInformation.subheading2}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.howWeUseYourInformation.item6}</li>
                <li>{pageText.howWeUseYourInformation.item7}</li>
                <li>{pageText.howWeUseYourInformation.item8}</li>
                <li>{pageText.howWeUseYourInformation.item9}</li>
                <li>{pageText.howWeUseYourInformation.item10}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.howWeUseYourInformation.subheading3}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.howWeUseYourInformation.item11}</li>
                <li>{pageText.howWeUseYourInformation.item12}</li>
                <li>{pageText.howWeUseYourInformation.item13}</li>
                <li>{pageText.howWeUseYourInformation.item14}</li>
                <li>{pageText.howWeUseYourInformation.item15}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.howWeUseYourInformation.subheading4}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.howWeUseYourInformation.item16}</li>
                <li>{pageText.howWeUseYourInformation.item17}</li>
                <li>{pageText.howWeUseYourInformation.item18}</li>
                <li>{pageText.howWeUseYourInformation.item19}</li>
                <li>{pageText.howWeUseYourInformation.item20}</li>
              </ul>
            </div>

            {/* Information Sharing and Disclosure */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.informationSharingAndDisclosure.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.informationSharingAndDisclosure.text}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.informationSharingAndDisclosure.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.informationSharingAndDisclosure.text2}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.informationSharingAndDisclosure.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.informationSharingAndDisclosure.text3}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.informationSharingAndDisclosure.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.informationSharingAndDisclosure.text4}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.informationSharingAndDisclosure.subheading4}</h3>
              <p className="text-gray-700 leading-relaxed">{pageText.informationSharingAndDisclosure.text5}</p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.dataSecurity.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.dataSecurity.text}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.dataSecurity.item}</li>
                <li>{pageText.dataSecurity.item2}</li>
                <li>{pageText.dataSecurity.item3}</li>
                <li>{pageText.dataSecurity.item4}</li>
                <li>{pageText.dataSecurity.item5}</li>
                <li>{pageText.dataSecurity.item6}</li>
                <li>{pageText.dataSecurity.item7}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.dataSecurity.text2}</p>
              <p className="text-gray-700 leading-relaxed">{pageText.dataSecurity.text3}</p>
            </div>

            {/* Your Rights and Choices */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.yourRightsAndChoices.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.yourRightsAndChoices.text}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.yourRightsAndChoices.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.yourRightsAndChoices.text2}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.yourRightsAndChoices.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.yourRightsAndChoices.text3}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.yourRightsAndChoices.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.yourRightsAndChoices.text4}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.yourRightsAndChoices.subheading4}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.yourRightsAndChoices.text5}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pageText.yourRightsAndChoices.subheading5}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.yourRightsAndChoices.text6}</p>

              <p className="text-gray-700 leading-relaxed">{pageText.yourRightsAndChoices.text7}</p>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.internationalDataTransfers.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.internationalDataTransfers.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.internationalDataTransfers.text2}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.internationalDataTransfers.item}</li>
                <li>{pageText.internationalDataTransfers.item2}</li>
                <li>{pageText.internationalDataTransfers.item3}</li>
                <li>{pageText.internationalDataTransfers.item4}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{pageText.internationalDataTransfers.text3}</p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.childrenSPrivacy.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.childrenSPrivacy.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.childrenSPrivacy.text2}</p>
              <p className="text-gray-700 leading-relaxed">{pageText.childrenSPrivacy.text3}</p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.dataRetention.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.dataRetention.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.dataRetention.text2}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>{pageText.dataRetention.item}</li>
                <li>{pageText.dataRetention.item2}</li>
                <li>{pageText.dataRetention.item3}</li>
                <li>{pageText.dataRetention.item4}</li>
                <li>{pageText.dataRetention.item5}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{pageText.dataRetention.text3}</p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.thirdPartyLinks.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.thirdPartyLinks.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.thirdPartyLinks.text2}</p>
              <p className="text-gray-700 leading-relaxed">{pageText.thirdPartyLinks.text3}</p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.changesToPrivacyPolicy.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.changesToPrivacyPolicy.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{pageText.changesToPrivacyPolicy.text2}</p>
              <p className="text-gray-700 leading-relaxed">{pageText.changesToPrivacyPolicy.text3}</p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageText.contactInformation.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{pageText.contactInformation.text}</p>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{pageText.contactInformation.text2}</div>
                  <div className="text-gray-700">{pageText.contactInformation.text3}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{pageText.contactInformation.text4}</div>
                  <div className="text-gray-700">{pageText.contactInformation.text5}</div>
                  <div className="text-gray-700">{pageText.contactInformation.text6}</div>
                  <div className="text-gray-700">{pageText.contactInformation.text7}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{pageText.contactInformation.text8}</div>
                  <a href={pageText.contactInformation.emailLink} className="text-green-600 hover:text-green-700 block break-all">{pageText.contactInformation.link}</a>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{pageText.contactInformation.text9}</div>
                  <a href={pageText.contactInformation.phoneLink} className="text-green-600 hover:text-green-700">{pageText.contactInformation.link2}</a>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">{pageText.contactInformation.text10}</p>
            </div>

            {/* Acknowledgment */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>{pageText.acknowledgment.bold}</strong>{pageText.acknowledgment.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/terms-of-service"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-file-text-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">{pageText.quickLinks.subheading}</h3>
              <p className="text-gray-600">{pageText.quickLinks.text}</p>
            </a>
            <a
              href="/accessibility"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-wheelchair-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">{pageText.quickLinks.subheading2}</h3>
              <p className="text-gray-600">{pageText.quickLinks.text2}</p>
            </a>
            <a
              href="/contact"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-customer-service-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">{pageText.quickLinks.subheading3}</h3>
              <p className="text-gray-600">{pageText.quickLinks.text3}</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
