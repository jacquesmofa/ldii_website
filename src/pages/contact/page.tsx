import { useState } from 'react';

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const offices = [
    {
      location: 'Toronto, Canada',
      type: 'Head Office',
      address: '3701 Chesswood Dr, #315, North York, ON M3J 2P6',
      phone: '+1 416 660-4233',
      email: 'info@ldiinitiatives.org',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      image: 'https://readdy.ai/api/search-image?query=Modern%20office%20building%20in%20Toronto%20with%20glass%20facade%20and%20contemporary%20architecture%2C%20Canadian%20flag%20visible%2C%20professional%20corporate%20headquarters%2C%20urban%20business%20district%2C%20high-quality%20architectural%20photography&width=400&height=300&seq=toronto-office&orientation=landscape'
    },
    {
      location: 'Brampton, Canada',
      type: 'Regional Office',
      address: '101 West Dr C, Brampton, ON L6T 2J6',
      phone: '+1 905 123-4567',
      email: 'brampton@ldiinitiatives.org',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM EST',
      image: 'https://readdy.ai/api/search-image?query=Modern%20office%20building%20in%20Brampton%20Ontario%20with%20contemporary%20architecture%2C%20professional%20business%20center%2C%20Canadian%20urban%20development%2C%20high-quality%20architectural%20photography&width=400&height=300&seq=brampton-office&orientation=landscape'
    }
  ];

  const contactTypes = [
    {
      title: 'General Inquiries',
      description: 'Questions about our work, programs, or general information.',
      email: 'info@ldiinitiatives.org',
      phone: '+1 416 660-4233',
      icon: 'ri-question-line'
    },
    {
      title: 'Media Inquiries',
      description: 'Press releases, interviews, and media-related requests.',
      email: 'info@ldiinitiatives.org',
      phone: '+1 416 660-4234',
      icon: 'ri-newspaper-line'
    },
    {
      title: 'Partnership Opportunities',
      description: 'Collaboration proposals and partnership discussions.',
      email: 'partnerships@ldiinitiatives.org',
      phone: '+1 416 660-4235',
      icon: 'ri-handshake-line'
    },
    {
      title: 'Research Collaboration',
      description: 'Academic partnerships and research collaboration requests.',
      email: 'research@ldiinitiatives.org',
      phone: '+1 416 660-4236',
      icon: 'ri-microscope-line'
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d4h52vajg2jl50j1s2vg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        alert('Thank you for your message! We will get back to you within 24 hours.');
        form.reset();
      }
    } catch (error) {
      alert('There was an error submitting your message. Please try again or contact us directly via email.');
    }
  };

  const handleMediaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d4h52vajg2jl50j1s300', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        alert('Thank you for your media inquiry! Our communications team will respond shortly.');
        form.reset();
      }
    } catch (error) {
      alert('There was an error submitting your inquiry. Please contact us directly at info@ldiinitiatives.org');
    }
  };

  const handlePartnershipSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d4h52vajg2jl50j1s2v0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        alert('Thank you for your partnership inquiry! We will review your proposal and respond soon.');
        form.reset();
      }
    } catch (error) {
      alert('There was an error submitting your proposal. Please contact us directly at partnerships@ldiinitiatives.org');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Professional%20international%20communication%20and%20contact%20with%20diverse%20people%20from%20different%20countries%20connecting%20globally%2C%20modern%20communication%20technology%2C%20multicultural%20business%20interaction%2C%20professional%20photography%20with%20warm%20lighting&width=1920&height=800&seq=contact-hero&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Connect with our global team to explore collaboration opportunities and learn more about our work.
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 py-4">
            <button
              onClick={() => scrollToSection('get-in-touch')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'get-in-touch' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection('our-locations')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'our-locations' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Our Locations
            </button>
            <button
              onClick={() => scrollToSection('media-inquiries')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'media-inquiries' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Media Inquiries
            </button>
            <button
              onClick={() => scrollToSection('partnerships')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-medium ${
                activeSection === 'partnerships' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Partnerships
            </button>
          </div>
        </div>
      </div>

      {/* Contact Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Can We Help?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most appropriate contact method for your inquiry to ensure you reach the right team member.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all duration-300">
                  <i className={`${type.icon} text-3xl text-[#00D9FF]`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-mail-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                    <a href={`mailto:${type.email}`} className="text-green-600 hover:text-green-700 cursor-pointer text-sm">
                      {type.email}
                    </a>
                  </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form data-readdy-form id="contact-form" onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8 text-sm"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="media">Media Inquiry</option>
                  <option value="research">Research Collaboration</option>
                  <option value="support">Support/Donation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm"
                  placeholder="Please describe your inquiry in detail (max 500 characters)"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="our-locations" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our offices in Ontario, Canada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                      <span className="ml-3 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        HQ
                      </span>
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
                      <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-green-600 text-sm cursor-pointer">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-time-line w-5 h-5 flex items-center justify-center text-gray-600 mt-0.5"></i>
                      <span className="text-gray-700 text-sm">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1234567890123!2d-79.4568!3d43.7532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzExLjUiTiA3OcKwMjcnMjQuNSJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LDII Headquarters Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Media Inquiries Form */}
      <section id="media-inquiries" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
            <p className="text-xl text-gray-600">
              For press inquiries, interview requests, or media-related questions.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form data-readdy-form id="media-form" onSubmit={handleMediaSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mediaFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="mediaFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="mediaLastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
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
                  <label htmlFor="mediaEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="mediaEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="mediaPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
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
                <label htmlFor="mediaOutlet" className="block text-sm font-medium text-gray-700 mb-2">
                  Media Outlet *
                </label>
                <input
                  type="text"
                  id="mediaOutlet"
                  name="mediaOutlet"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">Select inquiry type</option>
                  <option value="interview">Interview Request</option>
                  <option value="press-release">Press Release Request</option>
                  <option value="background">Background Information</option>
                  <option value="event-coverage">Event Coverage</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mediaMessage" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="mediaMessage"
                  name="message"
                  rows={6}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder="Please provide details about your media inquiry (max 500 characters)"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Partnerships Form */}
      <section id="partnerships" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">
              Interested in partnering with LDII? Share your proposal with us.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <form data-readdy-form id="partnership-form" onSubmit={handlePartnershipSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="partnerFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="partnerFirstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="partnerLastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
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
                  <label htmlFor="partnerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="partnerEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="partnerPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
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
                <label htmlFor="partnerOrganization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="partnerOrganization"
                  name="organization"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Type *
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-8 text-sm"
                >
                  <option value="">Select partnership type</option>
                  <option value="government">Government Partnership</option>
                  <option value="private-sector">Private Sector</option>
                  <option value="ngo">NGO Partnership</option>
                  <option value="academic">Academic Institution</option>
                  <option value="funding">Funding/Donor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="partnerProposal" className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Proposal *
                </label>
                <textarea
                  id="partnerProposal"
                  name="proposal"
                  rows={6}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                  placeholder="Please describe your partnership proposal and areas of collaboration (max 500 characters)"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ready to collaborate on building global resilience? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partnerships@ldiinitiatives.org"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Start a Partnership
            </a>
            <a
              href="/partners"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Support Our Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
