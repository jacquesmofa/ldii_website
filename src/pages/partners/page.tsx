import { useState, useEffect } from 'react';
import { submitFormToInbox } from '@/lib/web3forms';
import PartnerCards from '../../components/feature/PartnerCards';

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Partners & Support
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Building a better world through strategic partnerships and community support
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 py-4">
            <button
              onClick={() => scrollToSection('our-partners')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'our-partners' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Our Partners
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'donate' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Donate
            </button>
            <button
              onClick={() => scrollToSection('volunteer')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'volunteer' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Our Partners */}
      <section id="our-partners" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The organisations and venues behind our conferences, delegations and exchanges. Interested in partnering with LDII? Write to us at info@ldiinitiatives.org.
            </p>
          </div>
          <PartnerCards />
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Support Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your generous donations help us create lasting impact in communities worldwide. Every contribution makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-hand-heart-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Time Donation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Make a single contribution to support our programs and initiatives. Your donation directly funds projects that build resilience and empower communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">Support immediate community needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">Fund critical research and programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                  <span className="text-gray-700">Tax receipt provided</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Giving</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Become a sustaining donor with monthly contributions. Your ongoing support provides stable funding for long-term programs and sustainable impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">Predictable funding for programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">Exclusive donor updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-gray-700">Annual tax receipts</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Make Your Donation</h3>
            <form data-readdy-form id="donation-form" onSubmit={handleDonationSubmit} className="space-y-6 relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Donation Type *</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                    <input type="radio" name="donationType" value="one-time" className="w-4 h-4 text-green-600" required />
                    <span className="text-gray-700 font-medium">One-Time</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                    <input type="radio" name="donationType" value="monthly" className="w-4 h-4 text-green-600" required />
                    <span className="text-gray-700 font-medium">Monthly</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount *</label>
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
                  placeholder="Or enter custom amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="donorFirstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    id="donorFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="donorLastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
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
                <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="donorEmail"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="donorPhone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="donorPhone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="donorMessage" className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  id="donorMessage"
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder="Share why you're supporting LDII (max 500 characters)"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={busyForm === 'Partners Page Donation Form'}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {busyForm === 'Partners Page Donation Form' ? 'Sending...' : 'Complete Donation'}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Volunteer With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of dedicated volunteers making a difference in communities worldwide. Your time and skills can create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line w-8 h-8 flex items-center justify-center text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Assist with program delivery, event coordination, and community outreach activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-pencil-ruler-2-line w-8 h-8 flex items-center justify-center text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                Share your expertise in areas like research, communications, design, or technology.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-global-line w-8 h-8 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Opportunities</h3>
              <p className="text-gray-700 leading-relaxed">
                Contribute from anywhere with virtual volunteering in research, writing, or advocacy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Volunteer Application</h3>
            <form data-readdy-form id="volunteer-form" onSubmit={handleVolunteerSubmit} className="space-y-6 relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="volunteerFirstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    id="volunteerFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="volunteerLastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
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
                  <label htmlFor="volunteerEmail" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="volunteerEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="volunteerPhone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
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
                <label htmlFor="volunteerArea" className="block text-sm font-medium text-gray-700 mb-2">Area of Interest *</label>
                <select
                  id="volunteerArea"
                  name="areaOfInterest"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">Select an area</option>
                  <option value="program-support">Program Support</option>
                  <option value="research">Research</option>
                  <option value="communications">Communications</option>
                  <option value="events">Event Coordination</option>
                  <option value="technology">Technology</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="volunteerAvailability" className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                <select
                  id="volunteerAvailability"
                  name="availability"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">Select availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                  <option value="remote">Remote Only</option>
                </select>
              </div>

              <div>
                <label htmlFor="volunteerExperience" className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience & Skills *</label>
                <textarea
                  id="volunteerExperience"
                  name="experience"
                  rows={5}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder="Tell us about your skills, experience, and why you want to volunteer with LDII (max 500 characters)"
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Global Network
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether through partnership, donation, or volunteering, there are many ways to support our mission of building global resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Contact Us
            </a>
            <a
              href="#donate"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
