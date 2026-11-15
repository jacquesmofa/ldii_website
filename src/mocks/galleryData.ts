/**
 * Photo gallery. Albums and photos are in src/content/gallery.json (editable in the website
 * editors): "featured" is the selection at the top of /events/gallery, "albums" are the event
 * albums at /events/gallery/<slug>. A photo without a size is treated as landscape.
 */
import galleryRaw from '../content/gallery.json';
import { normalize } from '../content/normalize';

const gallery = normalize(galleryRaw);
import type { GalleryImage, GalleryEvent } from './galleryTypes';

const withSize = (p: Partial<GalleryImage>): GalleryImage => ({
  url: p.url || '',
  title: p.title || '',
  width: p.width || 1200,
  height: p.height || 900,
});

export const featuredImages: GalleryImage[] = (gallery.featured as Partial<GalleryImage>[]).filter((p) => p.url).map(withSize);

export const galleryEvents: GalleryEvent[] = (gallery.albums as unknown as Partial<GalleryEvent>[])
  .filter((a) => a.slug && a.title)
  .map((a) => ({
    slug: a.slug!,
    title: a.title!,
    shortTitle: a.shortTitle,
    year: a.year || '',
    date: a.date || '',
    location: a.location || '',
    description: a.description || '',
    images: (a.images || []).filter((p) => p.url).map(withSize),
    videos: (a.videos || []).filter((v) => v.thumbnail || v.src),
  }));

export type { GalleryImage, GalleryVideo, GalleryEvent } from './galleryTypes';
