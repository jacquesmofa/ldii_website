/**
 * ============================================================================
 * GALLERY TYPES & HELPER
 * src/mocks/galleryTypes.ts
 * ============================================================================
 *
 * This file contains the TypeScript type definitions (interfaces) and the
 * Cloudinary URL helper function used across ALL gallery event files.
 *
 * YOU DO NOT NEED TO MODIFY THIS FILE when adding new images or events.
 * Just use the 'cld()' helper in your event files.
 * ============================================================================
 */

// ============================================================
// HELPER FUNCTION: Build Cloudinary Image URLs
// ============================================================
// Every image URL follows this pattern:
// https://res.cloudinary.com/dzppzxpad/image/upload/[public_id].jpg
//
// When you upload a new image to Cloudinary, find its "Public ID" in the
// Cloudinary dashboard and pass it to this function.
// The .jpg extension is added automatically.
//
// EXAMPLE:
//   cld('my_photo_name')  →  'https://res.cloudinary.com/dzppzxpad/image/upload/my_photo_name.jpg'
//
// For PNG images, add the format:
//   cld('my_logo', 'png')  →  'https://res.cloudinary.com/dzppzxpad/image/upload/my_logo.png'
// ============================================================
export const cld = (publicId: string, format: string = 'jpg') =>
  `https://res.cloudinary.com/dzppzxpad/image/upload/${publicId}.${format}`;


// ============================================================
// INTERFACES (Type definitions - do not modify)
// ============================================================
export interface GalleryImage {
  url: string;      // Full Cloudinary image URL
  title: string;    // Caption shown below the photo and in lightbox
  width: number;    // Width ratio for masonry grid layout
  height: number;   // Height ratio for masonry grid layout
}

export interface GalleryVideo {
  title: string;      // Video caption
  thumbnail: string; // Video thumbnail URL (also from Cloudinary)
}

export interface GalleryEvent {
  slug: string;        // URL-friendly name (e.g. "my-event-2025")
  title: string;       // Full event name displayed on the page
  year: string;        // Year (e.g. "2025")
  date: string;        // Full date (e.g. "September 8–10, 2025")
  location: string;    // City, Country
  description: string; // Short paragraph about the event
  images: GalleryImage[];  // Array of all photos for this event
  videos: GalleryVideo[];  // Array of videos (empty array [] if none)
}