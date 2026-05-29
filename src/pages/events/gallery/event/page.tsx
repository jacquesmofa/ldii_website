
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { galleryEvents } from '../../../../mocks/galleryData';
import MasonryGrid from '../components/MasonryGrid';
import Lightbox from '../components/Lightbox';

export default function GalleryEventPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  // Guard against an undefined slug (should never happen, but adds robustness)
  if (!slug) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Invalid URL</h2>
          <p className="text-gray-600 mb-8">
            The URL does not contain a valid event identifier.
          </p>
          <button
            onClick={() => navigate('/events/gallery')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  const event = galleryEvents.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-image-line w-10 h-10 flex items-center justify-center text-gray-400 text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Event Not Found</h2>
          <p className="text-gray-600 mb-8">
            The gallery you’re looking for doesn’t exist.
          </p>
          <button
            onClick={() => navigate('/events/gallery')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav
            className="flex items-center flex-wrap gap-y-1 text-sm"
            aria-label="Breadcrumb"
          >
            <a
              href="/"
              className="text-gray-500 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Home
            </a>
            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-gray-400 mx-1.5"></i>
            <a
              href="/events"
              className="text-gray-500 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Events
            </a>
            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-gray-400 mx-1.5"></i>
            <a
              href="/events/gallery"
              className="text-gray-500 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Gallery
            </a>
            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-gray-400 mx-1.5"></i>
            <span className="text-green-600 font-semibold truncate max-w-xs">
              {event.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.images[0]?.url})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/85 via-[#0A1E3D]/75 to-[#0A1E3D]/85"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            {event.year}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {event.title}
          </h1>
          <p className="text-lg text-white/85 max-w-3xl mx-auto mb-6 leading-relaxed">
            {event.description}
          </p>
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
              {event.location}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-image-line w-4 h-4 flex items-center justify-center"></i>
              {event.images.length} Photos
            </span>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-[64px] lg:top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'photos'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-image-line mr-1.5"></i>
                Photos ({event.images.length})
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'videos'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-video-line mr-1.5"></i>
                Videos ({event.videos.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photos - Masonry */}
      {activeTab === 'photos' && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <MasonryGrid
              images={event.images}
              onImageClick={(idx) => setLightboxIndex(idx)}
            />
          </div>
        </section>
      )}

      {/* Videos */}
      {activeTab === 'videos' && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.videos.map((video, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative w-full h-64">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl">
                        <i className="ri-play-fill w-8 h-8 flex items-center justify-center text-white text-2xl ml-0.5"></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <h4 className="text-lg font-semibold text-gray-900">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation between events */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {(() => {
              const currentIdx = galleryEvents.findIndex((e) => e.slug === slug);
              const prev = currentIdx > 0 ? galleryEvents[currentIdx - 1] : null;
              const next =
                currentIdx < galleryEvents.length - 1 ? galleryEvents[currentIdx + 1] : null;
              return (
                <>
                  {prev ? (
                    <a
                      href={`/events/gallery/${prev.slug}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors cursor-pointer group"
                    >
                      <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center group-hover:-translate-x-1 transition-transform"></i>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">Previous Event</div>
                        <div className="font-semibold text-sm">
                          {prev.title.length > 40 ? `${prev.title.slice(0, 40)}...` : prev.title}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div />
                  )}
                  <button
                    onClick={() => navigate('/events/gallery')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-grid-line w-4 h-4 flex items-center justify-center"></i>
                    All Events
                  </button>
                  {next ? (
                    <a
                      href={`/events/gallery/${next.slug}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors cursor-pointer group"
                    >
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Next Event</div>
                        <div className="font-semibold text-sm">
                          {next.title.length > 40 ? `${next.title.slice(0, 40)}...` : next.title}
                        </div>
                      </div>
                      <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform"></i>
                    </a>
                  ) : (
                    <div />
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Media Request */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need High-Resolution Media?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact our media team for access to full-resolution photos and videos from this
            event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/media-inquiries#hero"
              className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Media Team
            </a>
            <a
              href="/events/news/press-releases#hero"
              className="bg-white text-green-600 border-2 border-green-600 px-7 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Press Releases
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={event.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />
      )}
    </div>
  );
}
