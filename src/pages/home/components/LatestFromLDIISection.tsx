import { useState } from 'react';

export default function LatestFromLDIISection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from LDII
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch our latest updates, conferences, and insights on building global resilience.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
          {/* Video Player / Thumbnail */}
          <div className="relative aspect-video bg-gray-900 rounded-t-2xl overflow-hidden">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20YouTube%20video%20thumbnail%20for%20international%20development%20organization%2C%20LDII%20conference%20presentation%20with%20speakers%20on%20stage%2C%20modern%20conference%20setup%20with%20professional%20lighting%2C%20play%20button%20overlay%2C%20high-quality%20video%20production%20aesthetic%2C%20clean%20corporate%20background%20with%20subtle%20warm%20tones&width=1200&height=675&seq=ldii-youtube-thumbnail&orientation=landscape"
                  alt="LDII Latest Conference"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="675"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer shadow-2xl"
                    aria-label="Play video"
                  >
                    <i className="ri-play-fill text-white text-3xl ml-1 w-8 h-8 flex items-center justify-center"></i>
                  </button>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-6 px-4 text-center">
                    Building Global Resilience: LDII's Latest Conference
                  </h3>
                </div>
              </div>
            ) : (
              <div className="w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="LDII Latest Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>

          {/* Video Info & Related */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Building Global Resilience: LDII's Latest Conference
                </h3>
                <p className="text-sm text-gray-500">
                  Watch highlights from our recent international conference on climate resilience and sustainable development.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="https://youtube.com/@ldiinitiatives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-youtube-line w-4 h-4 flex items-center justify-center inline mr-1"></i>
                  Visit Channel
                </a>
                <a
                  href="/events"
                  className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
                >
                  All Videos
                </a>
              </div>
            </div>

            {/* Related Videos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://youtube.com/@ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=LDII%20climate%20conference%20thumbnail%20with%20diverse%20speakers%20from%20Global%20South%2C%20professional%20conference%20setting%2C%20climate%20action%20theme%2C%20clean%20modern%20YouTube%20video%20thumbnail%20style%20with%20warm%20lighting&width=400&height=225&seq=ldii-video-climate&orientation=landscape"
                  alt="Climate Resilience Conference"
                  className="w-full h-32 object-cover rounded-lg mb-2 group-hover:opacity-80 transition-opacity"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="225"
                />
                <h5 className="font-semibold text-gray-900 text-sm group-hover:text-tech-teal-600 transition-colors">Climate Resilience Conference 2024</h5>
                <p className="text-gray-500 text-xs">2.1K views</p>
              </a>
              <a
                href="https://youtube.com/@ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=LDII%20health%20systems%20workshop%20thumbnail%2C%20medical%20professionals%20in%20discussion%20at%20African%20health%20conference%2C%20health%20resilience%20theme%2C%20professional%20video%20thumbnail%20with%20clean%20corporate%20lighting&width=400&height=225&seq=ldii-video-health&orientation=landscape"
                  alt="Health Systems"
                  className="w-full h-32 object-cover rounded-lg mb-2 group-hover:opacity-80 transition-opacity"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="225"
                />
                <h5 className="font-semibold text-gray-900 text-sm group-hover:text-tech-teal-600 transition-colors">Health Systems Strengthening</h5>
                <p className="text-gray-500 text-xs">1.8K views</p>
              </a>
              <a
                href="https://youtube.com/@ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=LDII%20sustainable%20agriculture%20project%20thumbnail%2C%20African%20farmers%20working%20with%20modern%20agricultural%20technology%2C%20food%20security%20theme%2C%20educational%20video%20thumbnail%20with%20natural%20green%20tones%20and%20warm%20lighting&width=400&height=225&seq=ldii-video-agriculture&orientation=landscape"
                  alt="Sustainable Agriculture"
                  className="w-full h-32 object-cover rounded-lg mb-2 group-hover:opacity-80 transition-opacity"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="225"
                />
                <h5 className="font-semibold text-gray-900 text-sm group-hover:text-tech-teal-600 transition-colors">Sustainable Agriculture Initiative</h5>
                <p className="text-gray-500 text-xs">3.2K views</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}