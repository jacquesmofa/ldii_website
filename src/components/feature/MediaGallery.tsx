import { useState, useMemo } from 'react';
import { useMedia } from '../../context/MediaContext';
import type { GalleryCategory, GalleryImage } from '../../types/media';

interface Breadcrumb {
  label: string;
  path: string[];
}

export default function MediaGallery() {
  const { assets, loading } = useMedia();
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  // Navigate through the gallery hierarchy
  const navigateToPath = (path: string[]) => {
    setCurrentPath(path);
  };

  // Get current category based on path
  const getCurrentCategory = useMemo((): GalleryCategory | null => {
    if (!assets.gallery) return null;

    let current: any = assets.gallery;
    
    for (const segment of currentPath) {
      if (current.subcategories && current.subcategories[segment]) {
        current = current.subcategories[segment];
      } else if (assets.gallery[segment]) {
        current = assets.gallery[segment];
      } else {
        return null;
      }
    }

    return current as GalleryCategory;
  }, [assets.gallery, currentPath]);

  // Generate breadcrumbs
  const breadcrumbs = useMemo((): Breadcrumb[] => {
    const crumbs: Breadcrumb[] = [{ label: 'All Galleries', path: [] }];
    
    let current: any = assets.gallery;
    
    for (let i = 0; i < currentPath.length; i++) {
      const segment = currentPath[i];
      
      if (current.subcategories && current.subcategories[segment]) {
        current = current.subcategories[segment];
        crumbs.push({
          label: current.title || segment,
          path: currentPath.slice(0, i + 1)
        });
      } else if (assets.gallery[segment]) {
        current = assets.gallery[segment];
        crumbs.push({
          label: current.title || segment,
          path: currentPath.slice(0, i + 1)
        });
      }
    }
    
    return crumbs;
  }, [assets.gallery, currentPath]);

  // Get all subcategories at current level
  const getSubcategories = (): Array<{ key: string; category: GalleryCategory }> => {
    if (currentPath.length === 0) {
      // Root level - show main categories
      return Object.entries(assets.gallery || {}).map(([key, category]) => ({
        key,
        category: category as GalleryCategory
      }));
    }

    const current = getCurrentCategory();
    if (!current || !current.subcategories) return [];

    return Object.entries(current.subcategories).map(([key, category]) => ({
      key,
      category: category as GalleryCategory
    }));
  };

  // Get images at current level
  const getCurrentImages = (): GalleryImage[] => {
    const current = getCurrentCategory();
    return current?.images || [];
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const subcategories = getSubcategories();
  const images = getCurrentImages();
  const current = getCurrentCategory();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-gray-400 mx-2"></i>
                )}
                <button
                  onClick={() => navigateToPath(crumb.path)}
                  className={`font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    index === breadcrumbs.length - 1
                      ? 'text-green-600'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {crumb.label}
                </button>
              </div>
            ))}
          </nav>
        </div>
      </section>

      {/* Current Category Header */}
      {current && currentPath.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {current.title}
            </h1>
            {current.description && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                {current.description}
              </p>
            )}
            {current.location && (
              <div className="flex items-center justify-center space-x-2 text-green-600 font-semibold mb-2">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center"></i>
                <span>{current.location}</span>
              </div>
            )}
            {current.date && (
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <i className="ri-calendar-line w-5 h-5 flex items-center justify-center"></i>
                <span>{current.date}</span>
              </div>
            )}
            {current.attendees && (
              <div className="flex items-center justify-center space-x-2 text-gray-600 mt-2">
                <i className="ri-group-line w-5 h-5 flex items-center justify-center"></i>
                <span>{current.attendees} Attendees</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Subcategories Grid */}
      {subcategories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {currentPath.length === 0 ? 'Browse Categories' : 'Subcategories'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategories.map(({ key, category }) => (
                <button
                  key={key}
                  onClick={() => navigateToPath([...currentPath, key])}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer text-left"
                >
                  {category.thumbnail && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.thumbnail}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    {!category.thumbnail && (
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                    )}
                    {category.description && (
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {category.description}
                      </p>
                    )}
                    <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Explore</span>
                      <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center ml-2"></i>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Images Grid */}
      {images.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImage(image)}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-64">
                    <img
                      src={image.thumbnail || image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                      <i className="ri-zoom-in-line w-8 h-8 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold text-sm line-clamp-2">
                      {image.title}
                    </h3>
                    {image.date && (
                      <p className="text-white/80 text-xs mt-1">{image.date}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {subcategories.length === 0 && images.length === 0 && currentPath.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-image-line w-10 h-10 flex items-center justify-center text-gray-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Media Available</h3>
            <p className="text-gray-600 mb-8">
              This category doesn't have any images or subcategories yet.
            </p>
            <button
              onClick={() => navigateToPath(currentPath.slice(0, -1))}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Go Back
            </button>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white rounded-lg p-6 mt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {lightboxImage.title}
              </h3>
              {lightboxImage.description && (
                <p className="text-gray-600 mb-4">{lightboxImage.description}</p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {lightboxImage.date && (
                  <div>
                    <span className="text-gray-500">Date:</span>
                    <p className="font-semibold text-gray-900">{lightboxImage.date}</p>
                  </div>
                )}
                {lightboxImage.location && (
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <p className="font-semibold text-gray-900">{lightboxImage.location}</p>
                  </div>
                )}
                {lightboxImage.photographer && (
                  <div>
                    <span className="text-gray-500">Photographer:</span>
                    <p className="font-semibold text-gray-900">{lightboxImage.photographer}</p>
                  </div>
                )}
                {lightboxImage.size && (
                  <div>
                    <span className="text-gray-500">Size:</span>
                    <p className="font-semibold text-gray-900">{lightboxImage.size}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
