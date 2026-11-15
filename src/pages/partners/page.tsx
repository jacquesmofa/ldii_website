import { useState, useEffect } from 'react';
import { submitFormToInbox } from '@/lib/web3forms';
import PartnerCards from '../../components/feature/PartnerCards';
import copy from '../../content/pages/partners.json';
// Text, images and links: src/content/pages/partners.json (editable in the website editors).

export default function PartnersPage() {
  const [activeSection, setActiveSection] = useState('');
  const [status, setStatus] = useState<{ form: string; ok: boolean; message: string } | null>(null);
  const [busyForm, setBusyForm] = useState('');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      // Update URL without causing page reload
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const submitPartnerForm = async (form: HTMLFormElement, formKey: string, subject: string) => {
    if (busyForm) return;
    setBusyForm(formKey);
    setStatus(null);

    const result = await submitFormToInbox(form, {
      subject,
      extra: { form_name: formKey },
    });

    if (result.ok) form.reset();
    setStatus({ form: formKey, ok: result.ok, message: result.message });
    setBusyForm('');
  };

  const handleDonationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitPartnerForm(e.currentTarget, 'Partners Page Donation Form', 'New donation pledge — LDII website');
  };

  const handleVolunteerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitPartnerForm(e.currentTarget, 'Volunteer Application Form', 'New volunteer application — LDII website');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_1920,h_800,q_auto,f_auto/untitled-6585_1_cnqwkm.jpg)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{copy.heroSection.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">{copy.heroSection.text}</p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-[72px] z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 py-4">
            <button
              onClick={() => scrollToSection('our-partners')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'our-partners' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >{copy.stickyNavigation.button}</button>
            <button
              onClick={() => scrollToSection('donate')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'donate' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >{copy.stickyNavigation.button2}</button>
            <button
              onClick={() => scrollToSection('volunteer')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'volunteer' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >{copy.stickyNavigation.button3}</button>
          </div>
        </div>
      </div>

      {/* Our Partners */}
      <section id="our-partners" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.ourPartners.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.ourPartners.text}</p>
          </div>
          <PartnerCards />
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.donateSection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.donateSection.text}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-hand-heart-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{copy.donateSection.subheading}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{copy.donateSection.text2}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">{copy.donateSection.label}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">{copy.donateSection.label2}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">{copy.donateSection.label3}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{copy.donateSection.subheading2}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{copy.donateSection.text3}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">{copy.donateSection.label4}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">{copy.donateSection.label5}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">{copy.donateSection.label6}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{copy.donateSection.subheading3}</h3>
            <form id="donation-form" onSubmit={handleDonationSubmit} className="space-y-6 relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{copy.donateSection.fieldLabel}</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                    <input type="radio" name="donationType" value="one-time" className="w-4 h-4 text-green-600" required />
                    <span className="text-gray-700 font-medium">{copy.donateSection.label7}</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                    <input type="radio" name="donationType" value="monthly" className="w-4 h-4 text-green-600" required />
                    <span className="text-gray-700 font-medium">{copy.donateSection.label8}</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{copy.donateSection.fieldLabel2}</label>
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {['$25', '$50', '$100', '$250'].map((amount) => (
                    <label key={amount} className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                      <input type="radio" name="amount" value={amount} className="sr-only" />
                      <span className="text-gray-700 font-medium">{amount}</span>
                    </label>
                  ))}
                </div>
                <input
                  type="number"
                  name="customAmount"
                  placeholder={copy.donateSection.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="donorFirstName" className="block text-sm font-medium text-gray-700 mb-2">{copy.donateSection.fieldLabel3}</label>
                  <input
                    type="text"
                    id="donorFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="donorLastName" className="block text-sm font-medium text-gray-700 mb-2">{copy.donateSection.fieldLabel4}</label>
                  <input
                    type="text"
                    id="donorLastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-2">{copy.donateSection.fieldLabel5}</label>
                <input
                  type="email"
                  id="donorEmail"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="donorPhone" className="block text-sm font-medium text-gray-700 mb-2">{copy.donateSection.fieldLabel6}</label>
                <input
                  type="tel"
                  id="donorPhone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="donorMessage" className="block text-sm font-medium text-gray-700 mb-2">{copy.donateSection.fieldLabel7}</label>
                <textarea
                  id="donorMessage"
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder={copy.donateSection.placeholder2}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={busyForm === 'Partners Page Donation Form'}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {busyForm === 'Partners Page Donation Form' ? 'Sending...' : 'Send my pledge'}
                </button>
              </div>
              {status && status.form === 'Partners Page Donation Form' && (
                <p className={`text-sm text-center ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.volunteerSection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.volunteerSection.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line w-8 h-8 flex items-center justify-center text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.volunteerSection.subheading}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.volunteerSection.text2}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-pencil-ruler-2-line w-8 h-8 flex items-center justify-center text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.volunteerSection.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.volunteerSection.text3}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-global-line w-8 h-8 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.volunteerSection.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.volunteerSection.text4}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{copy.volunteerSection.subheading4}</h3>
            <form id="volunteer-form" onSubmit={handleVolunteerSubmit} className="space-y-6 relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="volunteerFirstName" className="block text-sm font-medium text-gray-700 mb-2">{copy.volunteerSection.fieldLabel}</label>
                  <input
                    type="text"
                    id="volunteerFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="volunteerLastName" className="block text-sm font-medium text-gray-700 mb-2">{copy.volunteerSection.fieldLabel2}</label>
                  <input
                    type="text"
                    id="volunteerLastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="volunteerEmail" className="block text-sm font-medium text-gray-700 mb-2">{copy.volunteerSection.fieldLabel3}</label>
                  <input
                    type="email"
                    id="volunteerEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="volunteerPhone" className="block text-sm font-medium text-gray-700 mb-2">{copy.volunteerSection.fieldLabel4}</label>
                  <input
                    type="tel"
                    id="volunteerPhone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="volunteerArea" className="block text-sm font-medium text-gray-700 mb-2">{copy.volunteerSection.fieldLabel5}</label>
                <select
                  id="volunteerArea"
                  name="areaOfInterest"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">{copy.volunteerSection.option}</option>
                  <option value="program-support">{copy.volunteerSection.option2}</option>
                  <option value="research">{copy.volunteerSection.option3}</option>
                  <option value="communications">{copy.volunteerSection.option4}</option>
                  <option value="events">{copy.volunteerSection.option5}</option>
                  <option value="technology">{copy.volunteerSection.option6}</option>
                  <option value="fundraising">{copy.volunteerSection.option7}</option>
                  <option value="other">{copy.volunteerSection.option8}</option>
                </select>
              </div>

              <div>
                <label htmlFor="volunteerAvailability" className="block text-sm font-medium text-gray-700 mb-2">{copy.volunteerSection.fieldLabel6}</label>
                <select
                  id="volunteerAvailability"
                  name="availability"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">{copy.volunteerSection.option9}</option>
                  <option value="weekdays">{copy.volunteerSection.option10}</option>
                  <option value="weekends">{copy.volunteerSection.option11}</option>
                  <option value="flexible">{copy.volunteerSection.option12}</option>
                  <option value="remote">{copy.volunteerSection.option13}</option>
                </select>
              </div>

              <div>
                <label htmlFor="volunteerExperience" className="block text-sm font-medium text-gray-700 mb-2">{copy.volunteerSection.fieldLabel7}</label>
                <textarea
                  id="volunteerExperience"
                  name="experience"
                  rows={5}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder={copy.volunteerSection.placeholder}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={busyForm === 'Volunteer Application Form'}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {busyForm === 'Volunteer Application Form' ? 'Sending...' : 'Submit Application'}
                </button>
              </div>
              {status && status.form === 'Volunteer Application Form' && (
                <p className={`text-sm text-center ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{copy.ctaSection.heading}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{copy.ctaSection.text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#3CCB7F] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2EB06C] transition-colors cursor-pointer whitespace-nowrap inline-block"
            >{copy.ctaSection.link}</a>
            <a
              href="#donate"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block"
            >{copy.ctaSection.link2}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
