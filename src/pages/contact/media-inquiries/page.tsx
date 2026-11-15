import { useState } from 'react';
import { submitFormToInbox } from '@/lib/web3forms';
import { getPastEvents } from '../../../mocks/eventsData';
import copy from '../../../content/pages/media-inquiries.json';
// Text, images and links: src/content/pages/media-inquiries.json (editable in the website editors).

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusError, setStatusError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.currentTarget;
    setIsSubmitting(true);

    const result = await submitFormToInbox(form, {
      subject: 'New media inquiry — LDII website',
      extra: { form_name: 'Media Inquiries Page Form' },
    });

    if (result.ok) {
      form.reset();
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
    }
    setStatusError(!result.ok);
    setStatusMessage(result.message);
    setIsSubmitting(false);
  };

  const mediaResources = copy.mediaResources;

  const recentNews = getPastEvents().slice(0, 3).map((event) => ({
    title: event.title,
    date: event.displayDate,
    image: event.image,
    link: event.linkUrl || '/events/news',
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1E3D] to-[#0A1E3D] text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{copy.heroSection.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">{copy.heroSection.text}</p>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{copy.mediaContact.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{copy.mediaContact.text}</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0A1E3D] rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-user-line w-6 h-6 flex items-center justify-center text-[#3CCB7F]"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{copy.mediaContact.text2}</div>
                    <div className="text-gray-600">{copy.mediaContact.text3}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0A1E3D] rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-[#3CCB7F]"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{copy.mediaContact.text4}</div>
                    <a href={copy.mediaContact.emailLink} className="text-tech-teal-800 hover:text-ldii-navy block break-all">{copy.mediaContact.link}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0A1E3D] rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-[#3CCB7F]"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{copy.mediaContact.text5}</div>
                    <a href={copy.mediaContact.phoneLink} className="text-tech-teal-800 hover:text-ldii-navy">{copy.mediaContact.link2}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0A1E3D] rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-time-line w-6 h-6 flex items-center justify-center text-[#3CCB7F]"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{copy.mediaContact.text6}</div>
                    <div className="text-gray-600">{copy.mediaContact.text7}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{copy.mediaContact.subheading}</h3>
              <form onSubmit={handleSubmit} id="media-inquiry-form" className="space-y-4 relative">
                <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaContact.fieldLabel}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3CCB7F] text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaContact.fieldLabel2}</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3CCB7F] text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaContact.fieldLabel3}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3CCB7F] text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaContact.fieldLabel4}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3CCB7F] text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaContact.fieldLabel5}</label>
                    <select
                      name="mediaType"
                      value={formData.mediaType}
                      onChange={(e) => setFormData({ ...formData, mediaType: e.target.value })}
                      className="w-full px-4 py-3 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3CCB7F] text-base"
                      required
                    >
                      <option value="">{copy.mediaContact.option}</option>
                      <option value="Newspaper">{copy.mediaContact.option2}</option>
                      <option value="Magazine">{copy.mediaContact.option3}</option>
                      <option value="TV">{copy.mediaContact.option4}</option>
                      <option value="Radio">{copy.mediaContact.option5}</option>
                      <option value="Online">{copy.mediaContact.option6}</option>
                      <option value="Podcast">{copy.mediaContact.option7}</option>
                      <option value="Blog">{copy.mediaContact.option8}</option>
                      <option value="Other">{copy.mediaContact.option9}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaContact.fieldLabel6}</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3CCB7F] text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaContact.fieldLabel7}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3CCB7F] text-base"
                    placeholder={copy.mediaContact.placeholder}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.mediaContact.fieldLabel8}</label>
                  <textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3CCB7F] resize-none text-base"
                    placeholder={copy.mediaContact.placeholder2}
                    required
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-1 text-right">{formData.inquiry.length}{copy.mediaContact.text8}</div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#3CCB7F] text-[#0A1E3D] py-3 rounded-lg font-semibold hover:bg-[#2EB06C] transition-all duration-300 transform hover:scale-105 whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
                {statusMessage && (
                  <p className={`text-sm ${statusError ? 'text-red-600' : 'text-green-700'}`}>{statusMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{copy.mediaResourcesSection.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#0A1E3D] rounded-full mx-auto mb-4 group-hover:bg-[#3CCB7F] transition-colors">
                  <i className={`${resource.icon} w-8 h-8 flex items-center justify-center text-[#3CCB7F] group-hover:text-[#0A1E3D] transition-colors`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3CCB7F]">{resource.title}</h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{copy.recentNews.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="text-sm text-tech-teal-800 font-semibold mb-2">{news.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{news.title}</h3>
                  <a href={news.link} className="text-[#0A1E3D] hover:text-teal-700 font-semibold inline-flex items-center">{copy.recentNews.link}<i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center ml-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Requests */}
      <section className="py-16 bg-[#0A1E3D] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{copy.interviewRequests.heading}</h2>
          <p className="text-xl text-gray-300 mb-8">{copy.interviewRequests.text}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={copy.interviewRequests.emailLink}
              className="inline-block bg-[#3CCB7F] text-[#0A1E3D] hover:bg-[#2EB06C] px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >{copy.interviewRequests.link}</a>
            <a
              href="/about/who-we-are"
              className="inline-block bg-white text-[#0A1E3D] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >{copy.interviewRequests.link2}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
