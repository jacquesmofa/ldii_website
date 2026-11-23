import { useState } from 'react';
import { submitFormToInbox } from '@/lib/web3forms';
import copy from '../../content/pages/contact.json';
// Text, images and links: src/content/pages/contact.json (editable in the website editors).

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState('');
  const [status, setStatus] = useState<{ form: string; ok: boolean; message: string } | null>(null);
  const [busyForm, setBusyForm] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const offices = copy.offices;

  const contactTypes = copy.contactTypes;

  const submitContactForm = async (form: HTMLFormElement, formKey: string, subject: string) => {
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

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitContactForm(e.currentTarget, 'General Contact Form', 'New general enquiry — LDII website');
  };

  const handleMediaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitContactForm(e.currentTarget, 'Media Inquiry Form', 'New media inquiry — LDII website');
  };

  const handlePartnershipSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitContactForm(e.currentTarget, 'Partnership Form', 'New partnership proposal — LDII website');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_1920,h_800,q_auto,f_auto/WhatsApp_Image_2026-10-19_at_10.53.33_iqycrq.jpg)`
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
              onClick={() => scrollToSection('get-in-touch')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'get-in-touch' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >{copy.stickyNavigation.button}</button>
            <button
              onClick={() => scrollToSection('our-locations')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'our-locations' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >{copy.stickyNavigation.button2}</button>
            <button
              onClick={() => scrollToSection('media-inquiries')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'media-inquiries' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >{copy.stickyNavigation.button3}</button>
            <button
              onClick={() => scrollToSection('partnerships')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'partnerships' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >{copy.stickyNavigation.button4}</button>
          </div>
        </div>
      </div>

      {/* Contact Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.contactTypesSection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.contactTypesSection.text}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all duration-300">
                  <i className={`${type.icon} text-3xl text-[#3CCB7F]`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-mail-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                    <a href={`mailto:${type.email}`} className="text-green-600 hover:text-green-700 cursor-pointer text-sm break-all">
                      {type.email}
                    </a>
                  </div>
                  {type.emailAlt && (
                    <div className="flex items-center space-x-2">
                      <i className="ri-mail-send-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                      <a href={`mailto:${type.emailAlt}`} className="text-green-600 hover:text-green-700 cursor-pointer text-sm break-all">
                        {type.emailAlt}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <i className="ri-phone-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                    <a href={`tel:${type.phone}`} className="text-green-600 hover:text-green-700 cursor-pointer text-sm">
                      {type.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Form */}
      <section id="get-in-touch" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.getInTouchForm.heading}</h2>
            <p className="text-xl text-gray-600">{copy.getInTouchForm.text}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-6 relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">{copy.getInTouchForm.fieldLabel}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">{copy.getInTouchForm.fieldLabel2}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{copy.getInTouchForm.fieldLabel3}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{copy.getInTouchForm.fieldLabel4}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">{copy.getInTouchForm.fieldLabel5}</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{copy.getInTouchForm.fieldLabel6}</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8 text-sm"
                >
                  <option value="">{copy.getInTouchForm.option}</option>
                  <option value="general">{copy.getInTouchForm.option2}</option>
                  <option value="partnership">{copy.getInTouchForm.option3}</option>
                  <option value="media">{copy.getInTouchForm.option4}</option>
                  <option value="research">{copy.getInTouchForm.option5}</option>
                  <option value="support">{copy.getInTouchForm.option6}</option>
                  <option value="other">{copy.getInTouchForm.option7}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{copy.getInTouchForm.fieldLabel7}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm"
                  placeholder={copy.getInTouchForm.placeholder}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={busyForm === 'General Contact Form'}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {busyForm === 'General Contact Form' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status && status.form === 'General Contact Form' && (
                <p className={`text-sm text-center ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="our-locations" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.officeLocations.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.officeLocations.text}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 mb-12 max-w-2xl mx-auto">
            {offices.map((office, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={office.image}
                  alt={`${office.location} Office`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{office.location}</h3>
                    {index === 0 && (
                      <span className="ml-3 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">{copy.officeLocations.label}</span>
                    )}
                  </div>
                  <p className="text-green-600 font-medium mb-4">{office.type}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-gray-600 mt-0.5"></i>
                      <span className="text-gray-700 text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-gray-600"></i>
                      <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-green-600 text-sm cursor-pointer">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-gray-600"></i>
                      <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-green-600 text-sm cursor-pointer break-all">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Africa Regional Liaison Offices */}
          {copy.liaisonOffices?.items?.length > 0 && (
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{copy.liaisonOffices.heading}</h3>
                {copy.liaisonOffices.text && <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">{copy.liaisonOffices.text}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {copy.liaisonOffices.items.map((o: { country: string; lines: string[] }) => (
                  <div key={o.country} className="border border-gray-200 border-t-4 border-t-green-600 rounded-lg p-6 bg-white">
                    <p className="text-xs font-semibold uppercase tracking-widest text-green-700">{copy.liaisonOffices.heading.replace(/s$/, '')}</p>
                    <h4 className="mt-2 text-xl font-bold text-gray-900">{o.country}</h4>
                    <div className="mt-4 flex items-start gap-3 text-sm text-gray-700">
                      <i className="ri-map-pin-line text-gray-500 mt-0.5" aria-hidden="true"></i>
                      <address className="not-italic leading-relaxed">
                        {(o.lines || []).map((l) => <span key={l} className="block">{l}</span>)}
                      </address>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={copy.map.embedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={copy.map.title}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Media Inquiries Form */}
      <section id="media-inquiries" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.mediaInquiriesForm.heading}</h2>
            <p className="text-xl text-gray-600">{copy.mediaInquiriesForm.text}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form id="media-form" onSubmit={handleMediaSubmit} className="space-y-6 relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mediaFirstName" className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaInquiriesForm.fieldLabel}</label>
                  <input
                    type="text"
                    id="mediaFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="mediaLastName" className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaInquiriesForm.fieldLabel2}</label>
                  <input
                    type="text"
                    id="mediaLastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mediaEmail" className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaInquiriesForm.fieldLabel3}</label>
                  <input
                    type="email"
                    id="mediaEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="mediaPhone" className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaInquiriesForm.fieldLabel4}</label>
                  <input
                    type="tel"
                    id="mediaPhone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="mediaOutlet" className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaInquiriesForm.fieldLabel5}</label>
                <input
                  type="text"
                  id="mediaOutlet"
                  name="mediaOutlet"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaInquiriesForm.fieldLabel6}</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">{copy.mediaInquiriesForm.option}</option>
                  <option value="interview">{copy.mediaInquiriesForm.option2}</option>
                  <option value="press-release">{copy.mediaInquiriesForm.option3}</option>
                  <option value="background">{copy.mediaInquiriesForm.option4}</option>
                  <option value="event-coverage">{copy.mediaInquiriesForm.option5}</option>
                  <option value="other">{copy.mediaInquiriesForm.option6}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mediaMessage" className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaInquiriesForm.fieldLabel7}</label>
                <textarea
                  id="mediaMessage"
                  name="message"
                  rows={6}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder={copy.mediaInquiriesForm.placeholder}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={busyForm === 'Media Inquiry Form'}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {busyForm === 'Media Inquiry Form' ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </div>
              {status && status.form === 'Media Inquiry Form' && (
                <p className={`text-sm text-center ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Partnerships Form */}
      <section id="partnerships" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.partnershipsForm.heading}</h2>
            <p className="text-xl text-gray-600">{copy.partnershipsForm.text}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <form id="partnership-form" onSubmit={handlePartnershipSubmit} className="space-y-6 relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="partnerFirstName" className="block text-sm font-medium text-gray-700 mb-2">{copy.partnershipsForm.fieldLabel}</label>
                  <input
                    type="text"
                    id="partnerFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="partnerLastName" className="block text-sm font-medium text-gray-700 mb-2">{copy.partnershipsForm.fieldLabel2}</label>
                  <input
                    type="text"
                    id="partnerLastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="partnerEmail" className="block text-sm font-medium text-gray-700 mb-2">{copy.partnershipsForm.fieldLabel3}</label>
                  <input
                    type="email"
                    id="partnerEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="partnerPhone" className="block text-sm font-medium text-gray-700 mb-2">{copy.partnershipsForm.fieldLabel4}</label>
                  <input
                    type="tel"
                    id="partnerPhone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="partnerOrganization" className="block text-sm font-medium text-gray-700 mb-2">{copy.partnershipsForm.fieldLabel5}</label>
                <input
                  type="text"
                  id="partnerOrganization"
                  name="organization"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">{copy.partnershipsForm.fieldLabel6}</label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">{copy.partnershipsForm.option}</option>
                  <option value="government">{copy.partnershipsForm.option2}</option>
                  <option value="private-sector">{copy.partnershipsForm.option3}</option>
                  <option value="ngo">{copy.partnershipsForm.option4}</option>
                  <option value="academic">{copy.partnershipsForm.option5}</option>
                  <option value="funding">{copy.partnershipsForm.option6}</option>
                  <option value="other">{copy.partnershipsForm.option7}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="partnerProposal" className="block text-sm font-medium text-gray-700 mb-2">{copy.partnershipsForm.fieldLabel7}</label>
                <textarea
                  id="partnerProposal"
                  name="proposal"
                  rows={6}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder={copy.partnershipsForm.placeholder}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={busyForm === 'Partnership Form'}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {busyForm === 'Partnership Form' ? 'Sending...' : 'Submit Proposal'}
                </button>
              </div>
              {status && status.form === 'Partnership Form' && (
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
              href={copy.ctaSection.emailLink}
              className="bg-[#3CCB7F] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2EB06C] transition-colors cursor-pointer whitespace-nowrap"
            >{copy.ctaSection.link}</a>
            <a
              href="/partners"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >{copy.ctaSection.link2}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
