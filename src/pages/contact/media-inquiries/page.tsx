import { useState } from 'react';

export default function MediaInquiriesPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    mediaType: '',
    deadline: '',
    subject: '',
    inquiry: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSubmit = new URLSearchParams();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('organization', formData.organization);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('mediaType', formData.mediaType);
    formDataToSubmit.append('deadline', formData.deadline);
    formDataToSubmit.append('subject', formData.subject);
    formDataToSubmit.append('inquiry', formData.inquiry);

    try {
      const response = await fetch('https://readdy.ai/api/form/d4hc8qajg2jl50j1s3sg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString()
      });

      if (response.ok) {
        alert('Thank you for your media inquiry! Our communications team will respond within 24 hours.');
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          mediaType: '',
          deadline: '',
          subject: '',
          inquiry: ''
        });
      } else {
        alert('There was an error submitting your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    }
  };

  const mediaResources = [
    {
      title: 'Press Releases',
      description: 'Latest announcements and official statements',
      icon: 'ri-newspaper-line',
      link: '/events/news/press-releases'
    },
    {
      title: 'Media Kit',
      description: 'Logos, photos, and brand guidelines',
      icon: 'ri-folder-image-line',
      link: '#'
    },
    {
      title: 'Annual Reports',
      description: 'Comprehensive impact and financial reports',
      icon: 'ri-file-chart-line',
      link: '/impact/annual-reports'
    },
    {
      title: 'Photo Gallery',
      description: 'High-resolution images from our programs',
      icon: 'ri-gallery-line',
      link: '/events/gallery'
    }
  ];

  const recentNews = [
    {
      title: 'LDII Announces Global Shocks Conference 2025',
      date: 'March 15, 2024',
      image: 'https://readdy.ai/api/search-image?query=international%20conference%20announcement%20with%20diverse%20delegates%2C%20professional%20event%20setting%2C%20global%20cooperation%20theme&width=600&height=400&seq=news1&orientation=landscape'
    },
    {
      title: 'New Partnership with World Bank for Climate Adaptation',
      date: 'March 10, 2024',
      image: 'https://readdy.ai/api/search-image?query=partnership%20signing%20ceremony%20between%20international%20organizations%2C%20professional%20handshake%2C%20climate%20action%20theme&width=600&height=400&seq=news2&orientation=landscape'
    },
    {
      title: 'Youth Empowerment Program Reaches 75,000 Participants',
      date: 'March 5, 2024',
      image: 'https://readdy.ai/api/search-image?query=diverse%20youth%20group%20celebrating%20achievement%20in%20empowerment%20program%2C%20happy%20participants%2C%20success%20milestone&width=600&height=400&seq=news3&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Media Inquiries</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            Press contacts, media resources, and information for journalists covering our work
          </p>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Press Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our communications team is available to assist journalists, bloggers, and media professionals with information about LDII's programs, impact, and initiatives. We can arrange interviews with our leadership team, provide expert commentary, and supply multimedia resources.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-user-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Media Relations Team</div>
                    <div className="text-gray-600">Communications Department</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:media@ldiinitiatives.org" className="text-green-600 hover:text-green-700">
                      media@ldiinitiatives.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Press Line</div>
                    <a href="tel:+14165550199" className="text-green-600 hover:text-green-700">
                      +1 (416) 555-0199
                    </a>
                    <div className="text-sm text-gray-600 mt-1">Available 24/7 for urgent inquiries</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-time-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Response Time</div>
                    <div className="text-gray-600">Within 24 hours for standard inquiries</div>
                    <div className="text-gray-600">Same-day for urgent requests</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit a Media Inquiry</h3>
              <form onSubmit={handleSubmit} data-readdy-form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Media Organization *</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Media Type *</label>
                    <select
                      name="mediaType"
                      value={formData.mediaType}
                      onChange={(e) => setFormData({ ...formData, mediaType: e.target.value })}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="Newspaper">Newspaper</option>
                      <option value="Magazine">Magazine</option>
                      <option value="TV">Television</option>
                      <option value="Radio">Radio</option>
                      <option value="Online">Online Publication</option>
                      <option value="Podcast">Podcast</option>
                      <option value="Blog">Blog</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="Brief description of your story"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Details *</label>
                  <textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                    placeholder="Please provide details about your inquiry, interview requests, or information needed..."
                    required
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-1 text-right">{formData.inquiry.length}/500</div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <i className={`${resource.icon} w-8 h-8 flex items-center justify-center text-green-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">{resource.title}</h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="text-sm text-green-600 font-semibold mb-2">{news.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{news.title}</h3>
                  <a href="/events/news" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center">
                    Read More
                    <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center ml-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Requests */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interview Requests</h2>
          <p className="text-xl text-green-100 mb-8">
            Our leadership team and subject matter experts are available for interviews on topics related to international development, climate action, health systems, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:media@ldiinitiatives.org"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Request an Interview
            </a>
            <a
              href="/about/who-we-are"
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
