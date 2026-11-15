import { useState } from 'react';
import { getUpcomingEvents, getPastEvents } from '@/mocks/eventsData';
import { submitFormToInbox } from '@/lib/web3forms';
import { newsArticles as allNews } from '../../mocks/newsData';
import copy from '../../content/pages/events.json';
// Text, images and links: src/content/pages/events.json (editable in the website editors).

export default function EventsPage() {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [subscribeError, setSubscribeError] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubscribing) return;
    const form = e.currentTarget;
    setIsSubscribing(true);

    const result = await submitFormToInbox(form, {
      subject: 'New newsletter subscriber — LDII events page',
      extra: { form_name: 'Events Page Newsletter Form' },
    });

    if (result.ok) {
      form.reset();
      setSubscribeEmail('');
    }
    setSubscribeError(!result.ok);
    setSubscribeMessage(result.message);
    setIsSubscribing(false);
  };
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  const newsArticles = allNews.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_1920,h_800,q_auto,f_auto/General_aiu2gv.jpg)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{copy.heroSection.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">{copy.heroSection.text}</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.upcomingEvents.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.upcomingEvents.text}</p>
          </div>
          
          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} id={event.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-[#3CCB7F] text-[#0A1E3D] px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {event.type}
                      </span>
                      <span className="text-green-600 font-semibold">{event.displayDate}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <div className="flex items-center mb-4">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                    {event.attendees && (
                      <div className="flex items-center mb-6">
                        <i className="ri-team-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                        <span className="text-gray-600">{event.attendees}</span>
                      </div>
                    )}
                    <a
                      href={event.linkUrl || '/contact'}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block"
                    >
                      {event.linkLabel || 'Register Now'}
                    </a>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-event-line text-gray-400 text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{copy.upcomingEvents.subheading}</h3>
              <p className="text-gray-600 max-w-md mx-auto">{copy.upcomingEvents.text2}</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.pastEvents.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.pastEvents.text}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} id={event.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <span className="text-green-600 font-semibold text-sm">{event.displayDate}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <div className="flex items-center mb-3">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center text-gray-600 mr-2"></i>
                  <span className="text-gray-600 text-sm">{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{event.shortDescription}</p>
                {event.attendees && (
                  <div className="mb-4">
                    <span className="text-green-600 font-semibold text-sm">{event.attendees}</span>
                  </div>
                )}
                {event.outcomes && event.outcomes.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{copy.pastEvents.subheading}</h4>
                    <ul className="space-y-1">
                      {event.outcomes.slice(0, 4).map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="text-gray-600 text-sm flex items-center">
                          <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600 mr-2"></i>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {pastEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-event-line text-gray-400 text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{copy.pastEvents.subheading2}</h3>
              <p className="text-gray-600 max-w-md mx-auto">{copy.pastEvents.text2}</p>
            </div>
          )}
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.latestNews.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.latestNews.text}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{article.excerpt}</p>
                  <a
                    href={article.link}
                    className="text-green-700 hover:text-green-800 font-semibold cursor-pointer"
                  >
                    {article.linkLabel} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{copy.newsletterSignup.heading}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{copy.newsletterSignup.text}</p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} id="events-newsletter-form" className="relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder={copy.newsletterSignup.placeholder}
                  required
                  className="w-full min-w-0 flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-sm box-border"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-[#3CCB7F] text-[#0A1E3D] px-6 py-3 rounded-lg font-semibold hover:bg-[#2EB06C] transition-all duration-300 transform hover:scale-105 whitespace-nowrap disabled:opacity-60 text-sm"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {subscribeMessage && (
                <p className={`text-sm mt-3 ${subscribeError ? 'text-red-300' : 'text-[#3CCB7F]'}`}>{subscribeMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}