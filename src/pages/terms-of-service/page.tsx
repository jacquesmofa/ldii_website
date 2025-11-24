export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            Please read these terms carefully before using our services
          </p>
          <p className="text-green-100 mt-4">Last Updated: March 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
            
            {/* Agreement to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Livelihood Development International Initiatives ("LDII," "we," "us," or "our") governing your access to and use of our website (ldiinitiatives.org), mobile applications, programs, services, and any related content, features, or functionality (collectively, the "Services").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with these Terms, you must not access or use our Services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website with a new "Last Updated" date. Your continued use of the Services after such changes constitutes your acceptance of the modified Terms.
              </p>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our Services, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>You are at least 18 years of age or have reached the age of majority in your jurisdiction</li>
                <li>You have the legal capacity to enter into binding contracts</li>
                <li>You are not prohibited from using our Services under applicable laws</li>
                <li>All information you provide is accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </div>

            {/* Use of Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use of Services</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our Services for lawful purposes only and in accordance with these Terms. Permitted uses include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>Accessing information about our programs and initiatives</li>
                <li>Registering for and participating in our programs</li>
                <li>Making donations and supporting our work</li>
                <li>Subscribing to newsletters and communications</li>
                <li>Applying for employment or volunteer opportunities</li>
                <li>Submitting partnership or collaboration proposals</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use our Services to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any systems or data</li>
                <li>Use automated systems (bots, scrapers) without permission</li>
                <li>Collect or harvest information about other users</li>
                <li>Engage in fraudulent activities or money laundering</li>
                <li>Upload viruses, malware, or other malicious code</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some features of our Services may require you to create an account. When creating an account, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may close your account at any time by contacting us. Upon account closure, your right to use the Services will immediately cease, though certain provisions of these Terms will survive termination.
              </p>
            </div>

            {/* Donations and Payments */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Donations and Payments</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Donation Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you make a donation to LDII:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>All donations are voluntary and non-refundable unless required by law</li>
                <li>Donations will be used to support LDII's mission and programs</li>
                <li>We reserve the right to use donations where they are most needed</li>
                <li>Tax receipts will be issued for eligible donations as required by law</li>
                <li>Recurring donations can be cancelled by contacting us</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Processing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment processing is handled by secure third-party payment processors. By making a payment, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>Provide accurate payment information</li>
                <li>Authorize the specified payment amount</li>
                <li>Comply with the payment processor's terms and conditions</li>
                <li>Accept that we are not responsible for payment processor errors</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                Donations are generally non-refundable. However, if you believe an error has occurred, please contact us within 30 days. We will review refund requests on a case-by-case basis and may issue refunds at our discretion for duplicate charges, technical errors, or other exceptional circumstances.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on our Services, including text, graphics, logos, images, videos, software, and other materials (collectively, "Content"), is owned by or licensed to LDII and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You may view, download, and print Content for personal, non-commercial use only. You may not modify, reproduce, distribute, create derivative works, publicly display, or commercially exploit any Content without our prior written permission.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">User Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you submit, post, or transmit any content to our Services ("User Content"), you grant LDII a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content for our mission-related purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>You own or have the necessary rights to the User Content</li>
                <li>The User Content does not violate any third-party rights</li>
                <li>The User Content does not contain illegal or harmful material</li>
                <li>You have obtained all necessary consents and permissions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trademarks</h3>
              <p className="text-gray-700 leading-relaxed">
                "LDII," "Livelihood Development International Initiatives," and our logos are trademarks of LDII. You may not use these trademarks without our prior written permission. Other trademarks, service marks, and logos used on our Services are the property of their respective owners.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>Warranties that the Services will be uninterrupted, secure, or error-free</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not warrant that the Services will meet your requirements or that any information obtained through the Services will be accurate or reliable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LDII AND ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or use</li>
                <li>Business interruption or loss of goodwill</li>
                <li>Damages arising from your use or inability to use the Services</li>
                <li>Damages arising from unauthorized access to your data</li>
                <li>Damages arising from third-party content or conduct</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitations may not apply to you.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless LDII and its directors, officers, employees, agents, partners, and licensors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from or related to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Your use of or inability to use the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your User Content</li>
                <li>Your negligence or willful misconduct</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Informal Resolution</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any dispute with us, you agree to first contact us and attempt to resolve the dispute informally. Please send a detailed description of your dispute to legal@ldiinitiatives.org. We will attempt to resolve the dispute within 60 days.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Jurisdiction</h3>
              <p className="text-gray-700 leading-relaxed">
                You agree that any legal action or proceeding arising from or related to these Terms or the Services shall be brought exclusively in the courts located in Toronto, Ontario, Canada, and you consent to the personal jurisdiction of such courts.
              </p>
            </div>

            {/* General Provisions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">General Provisions</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Entire Agreement</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and LDII regarding the Services and supersede all prior agreements and understandings.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Severability</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Waiver</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of LDII.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assignment</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction. Any attempted assignment in violation of this provision shall be void.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h3>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about these Terms, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Livelihood Development International Initiatives (LDII)</div>
                  <div className="text-gray-700">Legal Department</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Address:</div>
                  <div className="text-gray-700">3701 Chesswood Drive, Unit 315</div>
                  <div className="text-gray-700">Toronto, Ontario M3J 2P6</div>
                  <div className="text-gray-700">Canada</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email:</div>
                  <a href="mailto:legal@ldiinitiatives.org" className="text-green-600 hover:text-green-700">
                    legal@ldiinitiatives.org
                  </a>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone:</div>
                  <a href="tel:+14165550123" className="text-green-600 hover:text-green-700">
                    +1 (416) 555-0123
                  </a>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong> If you do not agree with these Terms, you must immediately cease using our Services.
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
              href="/accessibility"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer text-center group"
            >
              <i className="ri-wheelchair-line w-12 h-12 flex items-center justify-center text-green-600 mx-auto mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Accessibility</h3>
              <p className="text-gray-600">Our commitment to accessibility</p>
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
