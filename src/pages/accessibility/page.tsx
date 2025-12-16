export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Accessibility Statement</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            LDII is committed to ensuring digital accessibility for people with disabilities
          </p>
          <p className="text-green-100 mt-4">Last Updated: March 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
            
            {/* Our Commitment */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Accessibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Livelihood Development International Initiatives (LDII) is committed to ensuring that our website, digital platforms, programs, and services are accessible to all people, including those with disabilities. We believe that everyone should have equal access to information, services, and opportunities, regardless of their abilities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are continuously working to improve the accessibility and usability of our digital presence and to ensure that we meet or exceed the requirements of applicable accessibility standards and guidelines. This commitment extends to all aspects of our organization, from our physical offices to our online platforms and program delivery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Accessibility is not just a legal requirement for us—it is a core value that aligns with our mission of promoting inclusive development and empowering all individuals to reach their full potential.
              </p>
            </div>

            {/* Standards and Guidelines */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Standards and Guidelines</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website and digital platforms are designed to conform to the following accessibility standards:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Content Accessibility Guidelines (WCAG) 2.1</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We strive to meet Level AA conformance with the Web Content Accessibility Guidelines (WCAG) 2.1, which are internationally recognized standards for web accessibility developed by the World Wide Web Consortium (W3C).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility for Ontarians with Disabilities Act (AODA)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    As an organization operating in Ontario, Canada, we are committed to complying with the Accessibility for Ontarians with Disabilities Act (AODA) and its associated standards, including the Integrated Accessibility Standards Regulation (IASR).
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Section 508 Standards</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We also reference Section 508 of the U.S. Rehabilitation Act, which establishes requirements for electronic and information technology accessibility for federal agencies and organizations receiving federal funding.
                  </p>
                </div>
              </div>
            </div>

            {/* Accessibility Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Features of Our Website</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have implemented numerous features to make our website accessible to all users:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-text w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-keyboard-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-contrast-2-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-font-size w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-layout-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-focus-3-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-links-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-file-list-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-smartphone-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-video-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-error-warning-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-time-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                </div>
              </div>
            </div>

            {/* Assistive Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compatible Assistive Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Alternative input devices (switch controls, eye-tracking)</li>
                <li>Browser accessibility features and extensions</li>
                <li>Text-to-speech software</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We test our website regularly with various assistive technologies to ensure compatibility and usability. If you experience any difficulties using assistive technology with our website, please contact us so we can address the issue.
              </p>
            </div>

            {/* Physical Accessibility */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Physical Accessibility of Our Facilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to ensuring that our physical offices and program locations are accessible to all visitors:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-wheelchair-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Wheelchair Accessibility</h3>
                    <p className="text-gray-700">Our offices feature wheelchair-accessible entrances, elevators, and washrooms</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-parking-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Accessible Parking</h3>
                    <p className="text-gray-700">Designated accessible parking spaces are available near building entrances</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-service-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Animals</h3>
                    <p className="text-gray-700">Service animals are welcome in all our facilities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-user-heart-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Support Persons</h3>
                    <p className="text-gray-700">Support persons are welcome to accompany visitors with disabilities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="ri-volume-up-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Assistive Listening Devices</h3>
                    <p className="text-gray-700">Available for meetings and events upon request</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Accessibility */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessible Documents and Communications</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to make all our documents and communications accessible:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>PDF documents are created with accessibility features (tags, bookmarks, alt text)</li>
                <li>Documents are available in alternative formats upon request (large print, braille, audio)</li>
                <li>Plain language is used to enhance understanding</li>
                <li>Complex information is supplemented with visual aids when appropriate</li>
                <li>Email communications are formatted for screen reader compatibility</li>
                <li>Social media posts include image descriptions</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                If you require a document in an alternative format, please contact us at least 5 business days in advance, and we will work to accommodate your request.
              </p>
            </div>

            {/* Ongoing Efforts */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Accessibility Efforts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accessibility is an ongoing commitment. We continuously work to improve accessibility through:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Regular Audits and Testing</h3>
                  <p className="text-gray-700">We conduct regular accessibility audits using automated tools and manual testing with assistive technologies. We also engage users with disabilities to provide feedback on our accessibility.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Staff Training</h3>
                  <p className="text-gray-700">All staff members receive training on accessibility best practices, including how to create accessible documents, communicate with people with disabilities, and use accessibility features in our systems.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility in Procurement</h3>
                  <p className="text-gray-700">We consider accessibility when procuring or developing new technologies, services, and facilities. Vendors and partners are expected to meet accessibility standards.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Feedback Integration</h3>
                  <p className="text-gray-700">We actively seek and incorporate feedback from users with disabilities to identify barriers and implement improvements.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility Plan</h3>
                  <p className="text-gray-700">We maintain a multi-year accessibility plan that outlines our goals, strategies, and timelines for achieving and maintaining accessibility across all aspects of our organization.</p>
                </div>
              </div>
            </div>

            {/* Known Limitations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Known Limitations and Remediation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite our best efforts, some areas of our website may not yet be fully accessible. We are aware of the following limitations and are actively working to address them:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Some older PDF documents may not be fully tagged for accessibility (we are systematically updating these)</li>
                <li>Some third-party embedded content may not meet accessibility standards (we are working with vendors to improve this)</li>
                <li>Some complex data visualizations may require alternative text descriptions (we are adding these progressively)</li>
                <li>Some archived video content may lack captions (we are adding captions to priority videos)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                If you encounter an accessibility barrier on our website, please let us know so we can prioritize addressing it.
              </p>
            </div>

            {/* Feedback and Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Feedback</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We welcome your feedback on the accessibility of our website, facilities, and services. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Accessibility Coordinator</div>
                  <div className="text-gray-700">Livelihood Development International Initiatives (LDII)</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email:</div>
                  <a href="mailto:accessibility@ldiinitiatives.org" className="text-green-600 hover:text-green-700">
                    accessibility@ldiinitiatives.org
                  </a>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone:</div>
                  <a href="tel:+14165550123" className="text-green-600 hover:text-green-700">
                    +1 (416) 555-0123
                  </a>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Mail:</div>
                  <div className="text-gray-700">3701 Chesswood Drive, Unit 315</div>
                  <div className="text-gray-700">Toronto, Ontario M3J 2P6</div>
                  <div className="text-gray-700">Canada</div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                We aim to respond to accessibility feedback within 5 business days. For urgent accessibility issues, please call us directly.
              </p>
            </div>

            {/* Formal Complaints */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Formal Accessibility Complaints</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are not satisfied with our response to your accessibility concern, you may file a formal complaint:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Submit your complaint in writing to our Accessibility Coordinator</li>
                <li>Include details of the accessibility barrier and your contact information</li>
                <li>We will acknowledge receipt within 5 business days</li>
                <li>We will investigate and provide a written response within 30 days</li>
                <li>If you are not satisfied with our response, you may escalate to our Executive Director</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                You also have the right to file a complaint with the Accessibility Directorate of Ontario or other relevant regulatory bodies.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>LDII is committed to treating all people in a way that allows them to maintain their dignity and independence.</strong> We believe in integration and equal opportunity, and we are committed to meeting the needs of people with disabilities in a timely manner through the removal and prevention of barriers to accessibility.
              </p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Privacy Policy</h3>
              <p className="text-gray-600">Learn how we protect your data</p>
            </a>
            <a
              href="/terms-of-service"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-file-text-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Terms of Service</h3>
              <p className="text-gray-600">Read our terms and conditions</p>
            </a>
            <a
              href="/contact"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-customer-service-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Contact Us</h3>
              <p className="text-gray-600">Questions? Get in touch</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
