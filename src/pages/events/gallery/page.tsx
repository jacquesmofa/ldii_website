import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryEvents } from '../../../mocks/galleryData';
import MasonryGrid from './components/MasonryGrid';

/* ──────────────────────────────────────────────────────────────────────────
   GALLERY PAGE  —  TWO VIEW MODES
   ──────────────────────────────────────────────────────────────────────────

   1. OVERVIEW MODE (default when you first visit /events/gallery)
      • Shows each event as its own section
      • Each section displays up to 10 preview images
      • A "View All" button opens the full grid for that event
      • Visitors scroll down to browse different events

   2. CATEGORY MODE (when you click an event tab or "View All")
      • Shows the full masonry grid for ONE event only
      • All photos in that event, scrollable
      • Lightbox click-to-expand still works
      • A "Back to Overview" link returns to the landing view

   This keeps the initial gallery page clean and uncluttered while
   still giving visitors access to every single photo.

   ──────────────────────────────────────────────────────────────────────────
   DATA SETUP — Adapting existing galleryEvents to the reference format
   ────────────────────────────────────────────────────────────────────────── */

// Build category tabs from your existing galleryEvents array
const galleryCategories = galleryEvents.map((event) => ({
  id: event.slug,
  name: event.title,
}));

// Flatten all event images into one array with category tags
const galleryImages = galleryEvents.flatMap((event) =>
  event.images.map((image, index) => ({
    id: `${event.slug}-${index}`,
    category: event.slug,
    url: image.url,
    title: image.title,
    description: image.title,
    width: image.width,
    height: image.height,
  }))
);

const GalleryPage = () => {
  /* ─── STATE ─── */
  const [viewMode, setViewMode] = useState<'overview' | 'category'>('overview');
  const [activeCategory, setActiveCategory] = useState<string>(galleryEvents[0]?.slug ?? '');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showGridTitles, setShowGridTitles] = useState(true);
  const [showLightboxCaption, setShowLightboxCaption] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const captionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  /* ─── FILTERED IMAGES for current category view ─── */
  const categoryImages = galleryImages.filter(i => i.category === activeCategory);
  const categoryName = galleryCategories.find(c => c.id === activeCategory)?.name || 'All Photos';

  /* ─── SWITCH TO CATEGORY FULL-GRID VIEW ─── */
  const enterCategory = useCallback((catId: string) => {
    setActiveCategory(catId);
    setViewMode('category');
    setShowGridTitles(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setShowGridTitles(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  /* ─── SWITCH BACK TO OVERVIEW LANDING ─── */
  const backToOverview = useCallback(() => {
    setViewMode('overview');
    setLightboxOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /* ─── AUTO-HIDE grid titles after 4 seconds ─── */
  useEffect(() => {
    if (viewMode !== 'category') return;
    setShowGridTitles(true);
    const timer = setTimeout(() => setShowGridTitles(false), 4000);
    return () => clearTimeout(timer);
  }, [viewMode, activeCategory]);

  /* ─── AUTO-HIDE lightbox caption after 4 seconds ─── */
  useEffect(() => {
    if (!lightboxOpen) return;
    setShowLightboxCaption(true);
    if (captionTimerRef.current) clearTimeout(captionTimerRef.current);
    captionTimerRef.current = setTimeout(() => setShowLightboxCaption(false), 4000);
    return () => {
      if (captionTimerRef.current) clearTimeout(captionTimerRef.current);
    };
  }, [lightboxOpen, lightboxIndex]);

  /* ─── KEYBOARD NAVIGATION (lightbox) ─── */
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
        document.body.style.overflow = '';
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex(prev => (prev - 1 + categoryImages.length) % categoryImages.length);
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex(prev => (prev + 1) % categoryImages.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, categoryImages.length]);

  /* ─── LIGHTBOX CONTROLS ─── */
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goNext = () => {
    setLightboxIndex(prev => (prev + 1) % categoryImages.length);
  };

  const goPrev = () => {
    setLightboxIndex(prev => (prev - 1 + categoryImages.length) % categoryImages.length);
  };

  const resetCaptionTimer = () => {
    setShowLightboxCaption(true);
    if (captionTimerRef.current) clearTimeout(captionTimerRef.current);
    captionTimerRef.current = setTimeout(() => setShowLightboxCaption(false), 4000);
  };

  const selectedItem = categoryImages[lightboxIndex];

  /* ─── COMPUTE PREVIEW IMAGES per category for overview ─── */
  const getCategoryPreviewImages = (catId: string) => {
    return galleryImages.filter(i => i.category === catId).slice(0, 10);
  };

  const getCategoryCount = (catId: string) => {
    return galleryImages.filter(i => i.category === catId).length;
  };

  /* ─── CATEGORY TAB COMPONENT ─── */
  const CategoryTab = ({ cat }: { cat: { id: string; name: string } }) => {
    const isActive = viewMode === 'category' && activeCategory === cat.id;
    return (
      <button
        onClick={() => enterCategory(cat.id)}
        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
          isActive
            ? 'bg-[#0A1E3D] text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-green-300'
        }`}
      >
        {cat.name}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <title>Gallery | LDII — Events &amp; Photo Collections</title>
      <meta name="description" content="Browse the LDII gallery showcasing international conferences, diplomatic engagements, community programs, and behind-the-scenes moments." />
      <meta name="keywords" content="LDII gallery, conference photos, diplomatic events, community programs, international gatherings" />
      <link rel="canonical" href="/events/gallery" />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[45vh] md:h-[50vh] min-h-[300px] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dzppzxpad/image/upload/q_auto/f_auto/v1779929426/2nd_Post_covid_cvdox1.jpg"
          alt="LDII Gallery"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto"
            >
              Moments of Impact, Stories of Transformation
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/80 text-sm"
            >
              <i className="ri-image-line w-4 h-4 flex items-center justify-center"></i>
              <span>{galleryImages.length}+ photographs across {galleryCategories.length} collections</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NAVIGATION TABS  +  BACK BUTTON
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-gray-50 border-b border-gray-100 sticky top-[64px] lg:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Overview tab — only visible when in category mode */}
            <AnimatePresence>
              {viewMode === 'category' && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={backToOverview}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-md flex items-center gap-2"
                >
                  <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
                  Back to Overview
                </motion.button>
              )}
            </AnimatePresence>

            {/* Category tabs */}
            {galleryCategories.map((cat) => (
              <CategoryTab key={cat.id} cat={cat} />
            ))}
          </div>

          {/* Stats / breadcrumb bar */}
          <div className="mt-4 text-center">
            {viewMode === 'overview' ? (
              <p className="text-sm text-gray-500">
                Scroll down to explore each collection. Click &quot;View All&quot; to see the complete set.
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-[#0A1E3D]">{categoryImages.length}</span> photos in{' '}
                <span className="font-semibold text-[#0A1E3D]">{categoryName}</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-xs text-gray-400 italic">
                  Titles auto-hide after 4 seconds — hover any photo to reveal details
                </span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          VIEW 1  —  OVERVIEW LANDING (default)
          Shows each category as a section with up to 10 preview images
          ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        {viewMode === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {galleryCategories.map((cat, catIdx) => {
              const previews = getCategoryPreviewImages(cat.id);
              const count = getCategoryCount(cat.id);
              if (previews.length === 0) return null;

              return (
                <section
                  key={cat.id}
                  id={`section-${cat.id}`}
                  className={`py-14 md:py-20 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1E3D] mb-1">
                          {cat.name}
                        </h2>
                        <p className="text-gray-500 text-sm">
                          {count} {count === 1 ? 'photo' : 'photos'} — click any to preview
                        </p>
                      </div>
                      <button
                        onClick={() => enterCategory(cat.id)}
                        className="px-6 py-2.5 bg-[#0A1E3D] text-white rounded-full text-sm font-semibold hover:bg-[#152c52] transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-sm hover:shadow-md"
                      >
                        View All {count} Photos
                        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>

                    {/* Preview grid — masonry style, up to 10 images */}
                    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
                      {previews.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="break-inside-avoid group cursor-pointer"
                          onClick={() => {
                            enterCategory(cat.id);
                            // Small delay to let category view render, then open lightbox
                            setTimeout(() => {
                              const catImages = galleryImages.filter(i => i.category === cat.id);
                              const newIndex = catImages.findIndex(i => i.id === item.id);
                              if (newIndex >= 0) openLightbox(newIndex);
                            }, 350);
                          }}
                        >
                          <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-500">
                            <img
                              src={item.url}
                              alt={item.title}
                              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                              <p className="text-white font-semibold text-sm truncate">{item.title}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* "View All" bottom button (mobile-friendly) */}
                    <div className="mt-6 text-center sm:hidden">
                      <button
                        onClick={() => enterCategory(cat.id)}
                        className="px-6 py-2.5 bg-[#0A1E3D] text-white rounded-full text-sm font-semibold hover:bg-[#152c52] transition-all duration-300 cursor-pointer"
                      >
                        View All {count} Photos
                      </button>
                    </div>
                  </div>
                </section>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════
          VIEW 2  —  CATEGORY FULL-GRID (masonry layout via MasonryGrid)
          Shows ALL images for the selected category with proper previews
          ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        {viewMode === 'category' && (
          <motion.div
            key="category"
            ref={gridRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="py-14 md:py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Section title */}
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A1E3D] mb-2">
                  {categoryName}
                </h2>
                <p className="text-gray-500 text-sm">
                  {categoryImages.length} {categoryImages.length === 1 ? 'photo' : 'photos'} — click any to view full size
                </p>
              </div>

              {/* Proper masonry grid with visible previews */}
              <MasonryGrid
                images={categoryImages}
                onImageClick={(index) => openLightbox(index)}
              />

              {categoryImages.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-image-line text-2xl text-gray-400 w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <p className="text-gray-500 text-lg">No photos found in this category.</p>
                  <button
                    onClick={backToOverview}
                    className="mt-4 px-6 py-2.5 bg-[#0A1E3D] text-white rounded-full text-sm font-semibold hover:bg-[#152c52] transition-colors cursor-pointer"
                  >
                    Back to Gallery Overview
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════
          LIGHTBOX MODAL
          Full-screen photo viewer with prev/next, keyboard, captions
          ═══════════════════════════════════════════════════════════════════ */}
      {lightboxOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={closeLightbox}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 md:px-6 py-4 text-white shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/60 font-medium">
                {lightboxIndex + 1} <span className="text-white/30">/</span> {categoryImages.length}
              </span>
              <span className="hidden sm:inline text-sm text-white/40">{selectedItem.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); setShowLightboxCaption(p => !p); }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                title="Toggle caption"
              >
                <i className={`${showLightboxCaption ? 'ri-chat-off-line' : 'ri-chat-1-line'} text-lg w-5 h-5 flex items-center justify-center`}></i>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
          </div>

          {/* Image area with click zones */}
          <div
            className="flex-1 flex items-center justify-center px-4 md:px-16 relative overflow-hidden"
            onMouseMove={resetCaptionTimer}
          >
            {/* Left click zone */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1/4 z-10 cursor-w-resize hidden md:block"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              title="Previous image"
            />

            {/* Right click zone */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/4 z-10 cursor-e-resize hidden md:block"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              title="Next image"
            />

            {/* Prev arrow button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-2xl md:text-3xl w-6 h-6 flex items-center justify-center"></i>
            </button>

            {/* Image */}
            <motion.img
              key={selectedItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedItem.url}
              alt={selectedItem.title}
              className="max-w-full max-h-[72vh] object-contain rounded-lg select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next arrow button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-2xl md:text-3xl w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>

          {/* Caption — auto-fades after 4 seconds */}
          <div
            className={`shrink-0 px-6 py-5 text-center transition-opacity duration-700 ${
              showLightboxCaption ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-1">{selectedItem.title}</h3>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">{selectedItem.description}</p>
            <p className="text-xs text-green-500 mt-2 font-medium uppercase tracking-wider">
              {categoryName}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;