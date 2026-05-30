import { useMedia } from '../../../context/MediaContext';

export default function GlobalPresenceSection() {
  const { assets, loading } = useMedia();

  return (
    <section className="py-16 bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Unity & Canadian Roots
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Working together across nations to build a resilient future for all humanity, while strengthening our foundation across Canada.
          </p>
        </div>

        {/* Single Image - World Map with Canadian Connection */}
        <div className="mb-12">
          {loading ? (
            <div className="w-full h-80 md:h-96 bg-gray-200 animate-pulse rounded-2xl"></div>
          ) : (
            <img
              src={assets.gallery.maps?.world_network || "https://readdy.ai/api/search-image?query=High%20quality%20detailed%20world%20map%20with%20bright%20glowing%20network%20connections%20between%20continents%2C%20illuminated%20connection%20lines%20showing%20global%20partnerships%2C%20modern%20digital%20cartography%20with%20vibrant%20blue%20and%20green%20network%20nodes%2C%20professional%20geographic%20visualization%20with%20data%20flow%20lines%2C%20international%20connectivity%20map%20with%20bright%20connection%20points%20across%20all%20continents%2C%20clean%20high-resolution%20world%20map%20design%20with%20warm%20lighting&width=1200&height=600&seq=ldii-global-network-map&orientation=landscape"}
              alt="LDII Global Network Connections"
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              loading="lazy"
              decoding="async"
              width="1200"
              height="600"
            />
          )}
        </div>

        {/* Combined Content - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Global Unity */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0A1E3D] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-global-line text-[#00D9FF] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Global Unity & Collaboration</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              LDII works across continents to build a resilient future for all humanity. Our network spans Africa, North America, and beyond, connecting communities, governments, and organizations through shared purpose and collaborative action.
            </p>
            <a
              href="/about/who-we-are"
              className="inline-flex items-center gap-2 text-[#00D9FF] font-semibold hover:text-[#00c4e6] transition-colors cursor-pointer"
            >
              Learn about our global presence
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>

          {/* One Canada */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0A1E3D] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-2-line text-[#00D9FF] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">One Canada</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              From our roots in Ontario, we build resilience across all Canadian provinces and territories. We collaborate with federal, provincial, and municipal governments to foster sustainable development and community empowerment nationwide.
            </p>
            <a
              href="/contact/our-locations"
              className="inline-flex items-center gap-2 text-[#00D9FF] font-semibold hover:text-[#00c4e6] transition-colors cursor-pointer"
            >
              Explore our locations
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center bg-white rounded-xl p-5 border border-gray-100">
            <div className="text-3xl font-bold text-[#0A1E3D] mb-1">5</div>
            <div className="text-sm text-gray-600">Global Offices</div>
          </div>
          <div className="text-center bg-white rounded-xl p-5 border border-gray-100">
            <div className="text-3xl font-bold text-[#0A1E3D] mb-1">25+</div>
            <div className="text-sm text-gray-600">Countries Reached</div>
          </div>
          <div className="text-center bg-white rounded-xl p-5 border border-gray-100">
            <div className="text-3xl font-bold text-[#0A1E3D] mb-1">50+</div>
            <div className="text-sm text-gray-600">International Partners</div>
          </div>
          <div className="text-center bg-white rounded-xl p-5 border border-gray-100">
            <div className="text-3xl font-bold text-[#0A1E3D] mb-1">13</div>
            <div className="text-sm text-gray-600">Canadian Provinces & Territories</div>
          </div>
        </div>
      </div>
    </section>
  );
}