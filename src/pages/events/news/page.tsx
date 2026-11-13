import { newsArticles } from '../../../mocks/newsData';
export default function LatestNewsPage() {
  // Real LDII news only (13 Nov 2026): every item matches an event documented in the gallery.
  // The Readdy template's invented items (UN partnership, tree, hub, microfinance and graduation
  // figures, invented directors) were removed at the owner's request.

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=News%20and%20media%20with%20newspapers%20magazines%20and%20digital%20screens%20showing%20headlines%2C%20journalism%20and%20communication%2C%20professional%20news%20environment%2C%20high-quality%20photography&width=1920&height=800&seq=news-hero&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest News
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest developments, achievements, and announcements from LDII.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest news, program updates, and organizational announcements.
            </p>
          </div>

          <div className="space-y-12">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center flex-wrap gap-3 mb-4">
                      <span className="bg-[#00D9FF] text-[#0A1E3D] px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h3>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">{article.excerpt}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{article.content}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{article.author}</span>
                      <a
                        href={article.link}
                        className="text-orange-600 hover:text-orange-700 font-semibold cursor-pointer inline-flex items-center space-x-2"
                      >
                        <span>{article.linkLabel}</span>
                        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#00D9FF] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00C4E6] transition-colors cursor-pointer whitespace-nowrap"
            >
              Subscribe to Newsletter
            </a>
            <a
              href="/events/press-releases"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Press Releases
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
