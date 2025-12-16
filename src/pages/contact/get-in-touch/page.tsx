import { useState } from 'react';

export default function GetInTouchPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSubmit = new URLSearchParams();
    formDataToSubmit.append('firstName', formData.firstName);
    formDataToSubmit.append('lastName', formData.lastName);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('subject', formData.subject);
    formDataToSubmit.append('message', formData.message);

    try {
      const response = await fetch('https://readdy.ai/api/form/d4hc8qajg2jl50j1s3sg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString()
      });

      if (response.ok) {
        alert('Thank you for contacting us! We will get back to you within 24-48 hours.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'info@ldiinitiatives.org',
      link: 'mailto:info@ldiinitiatives.org'
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 5pm EST',
      contact: '+1 (416) 555-0123',
      link: 'tel:+14165550123'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      description: 'Toronto Office',
      contact: '3701 Chesswood Drive, Unit 315',
      link: '/contact#our-locations'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Live Chat',
      description: 'Available during business hours',
      contact: 'Start a conversation',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            We'd love to hear from you. Reach out to us with any questions, comments, or partnership inquiries.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-green-50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <i className={`${method.icon} w-8 h-8 flex items-center justify-center text-green-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                <p className="text-green-600 font-semibold group-hover:text-green-700">{method.contact}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00D9FF] text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00D9FF] text-base"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00D9FF] text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00D9FF] text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Volunteer Interest">Volunteer Interest</option>
                  <option value="Donation Question">Donation Question</option>
                  <option value="Program Information">Program Information</option>
                  <option value="Media Request">Media Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00D9FF] resize-none text-base"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
                <div className="text-sm text-gray-500 mt-1 text-right">{formData.message.length}/500</div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00D9FF] text-[#0A1E3D] py-3 rounded-lg font-semibold hover:bg-[#00C4E6] transition-all duration-300 transform hover:scale-105 whitespace-nowrap disabled:opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Looking for Something Specific?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/contact#media-inquiries"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer group"
            >
              <i className="ri-newspaper-line w-12 h-12 flex items-center justify-center text-green-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Media Inquiries</h3>
              <p className="text-gray-600">Press releases, interviews, and media resources</p>
            </a>
            <a
              href="/partners"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer group"
            >
              <i className="ri-handshake-line w-12 h-12 flex items-center justify-center text-green-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Partnership Opportunities</h3>
              <p className="text-gray-600">Explore ways to collaborate with LDII</p>
            </a>
            <a
              href="/contact#our-locations"
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer group"
            >
              <i className="ri-building-line w-12 h-12 flex items-center justify-center text-green-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Our Offices</h3>
              <p className="text-gray-600">Find our office locations and visit us</p>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect With Us on Social Media</h2>
          <p className="text-gray-600 mb-8">Follow us for the latest updates, stories, and news from our global programs</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all cursor-pointer group">
              <i className="ri-facebook-fill w-6 h-6 flex items-center justify-center text-gray-700 group-hover:text-white"></i>
            </a>
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all cursor-pointer group">
              <i className="ri-twitter-fill w-6 h-6 flex items-center justify-center text-gray-700 group-hover:text-white"></i>
            </a>
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all cursor-pointer group">
              <i className="ri-linkedin-fill w-6 h-6 flex items-center justify-center text-gray-700 group-hover:text-white"></i>
            </a>
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all cursor-pointer group">
              <i className="ri-instagram-fill w-6 h-6 flex items-center justify-center text-gray-700 group-hover:text-white"></i>
            </a>
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all cursor-pointer group">
              <i className="ri-youtube-fill w-6 h-6 flex items-center justify-center text-gray-700 group-hover:text-white"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
