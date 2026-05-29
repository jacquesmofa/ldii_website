/**
 * ============================================================================
 * MAIN GALLERY DATA FILE - src/mocks/galleryData.ts
 * ============================================================================
 *
 * This file assembles ALL gallery events and exports them for use across
 * the website. It also defines the "Featured Gallery" images shown on the
 * main gallery page.
 *
 * HOW THIS FILE WORKS:
 * --------------------
 * 1. It imports event data from separate files in the galleryEvents/ folder.
 *    Each file contains one event's photos.
 * 2. It merges the two parts of the 2nd Post-COVID Conference into one event.
 * 3. It exports a "featuredImages" array for the main page highlight section.
 * 4. It exports "galleryEvents" which is the master list used everywhere.
 *
 * HOW TO ADD A NEW EVENT:
 * -----------------------
 * 1. Create a new file in src/mocks/galleryEvents/ (copy an existing one)
 * 2. Replace the images with your new event's Cloudinary public IDs
 * 3. Update the event title, date, location, description
 * 4. Import the new event file HERE and add it to the galleryEvents array
 * 5. (Optional) Add a featured photo from the new event to featuredImages
 *
 * HOW TO ADD PHOTOS TO AN EXISTING EVENT:
 * ----------------------------------------
 * 1. Open the event file in src/mocks/galleryEvents/
 * 2. Find the "images: [" array
 * 3. Add a new photo block:
 *    {
 *      url: cld('your_cloudinary_public_id'),
 *      title: 'Description of photo',
 *      width: 1200,    // 1200 for landscape, 900 for portrait
 *      height: 900     // 900 for landscape, 1200 for portrait
 *    }
 * 4. Save the file. The photo appears automatically on the website.
 * ============================================================================
 */

// Import the Cloudinary URL helper and type definitions
import { cld } from './galleryTypes';
import type { GalleryImage, GalleryEvent } from './galleryTypes';

// Import individual event data files
import { event2ndPostCovidA } from './galleryEvents/event2ndPostCovidA';
import { event2ndPostCovidBImages } from './galleryEvents/event2ndPostCovidB';
import { event1stPostCovid } from './galleryEvents/event1stPostCovid';
import { eventDiplomatic } from './galleryEvents/eventDiplomatic';
import { eventBehindTheScenes } from './galleryEvents/eventBehindTheScenes';


// ============================================================
// MERGE: 2nd International Post-COVID Conference
// ============================================================
// The conference is split across TWO files (A and B) to keep file sizes
// manageable. We merge them here into ONE event.
//
// NOTE: You do NOT need to modify this merge. Just add photos to
// event2ndPostCovidA.ts or event2ndPostCovidB.ts and they automatically
// appear in the merged event.
// ============================================================
const event2ndPostCovid: GalleryEvent = {
  ...event2ndPostCovidA,
  images: [
    ...event2ndPostCovidA.images,
    ...event2ndPostCovidBImages
  ]
};


// ============================================================
// FEATURED GALLERY IMAGES (Main Gallery Page Highlight Section)
// ============================================================
// These ~10 images appear in the "Featured Gallery" masonry grid at the
// TOP of the main gallery page (/events/gallery).
//
// They are hand-picked to showcase the breadth and impact of LDII's work.
// Mix landscape (width: 1200, height: 900) and portrait (width: 900,
// height: 1200) for a beautiful puzzle-like masonry effect.
//
// TO CHANGE which images appear here: add, remove, or reorder the blocks below.
// TO ADD A NEW FEATURED PHOTO: copy a block, paste it, and update the URL
//   and title with your new Cloudinary public_id.
// ============================================================
export const featuredImages: GalleryImage[] = [
  {
    url: cld('2nd_Post_covid_cvdox1'),
    title: '2nd International Post-COVID Conference - Official Banner',
    width: 1400,
    height: 900
  },
  {
    url: cld('conferencepstcovid25_qqjep8'),
    title: 'Conference Proceedings - Brampton 2025',
    width: 1200,
    height: 800
  },
  {
    url: cld('Panel_discussion1_ujy3df'),
    title: 'Expert Panel Discussion on Global Health Resilience',
    width: 1200,
    height: 900
  },
  {
    url: cld('HE_Ambassador_OF_KENYA_slpwkj'),
    title: 'Diplomatic Engagement - His Excellency Ambassador of Kenya',
    width: 900,
    height: 1200
  },
  {
    url: cld('president_LDII_xjy7xj'),
    title: 'LDII President - Opening Address',
    width: 900,
    height: 1200
  },
  {
    url: cld('Brampton_counci_kryhsj'),
    title: 'Brampton City Council Partnership Ceremony',
    width: 1200,
    height: 900
  },
  {
    url: cld('Dr_victor_bkpass'),
    title: 'Keynote Speaker - Dr. Victor',
    width: 900,
    height: 1200
  },
  {
    url: cld('Participants2_omtkbj'),
    title: 'International Delegates - 2nd Post-COVID Conference',
    width: 1400,
    height: 900
  },
  {
    url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_blxfxa'),
    title: '1st International Post-COVID Conference - Toronto 2024',
    width: 900,
    height: 1200
  },
  {
    url: cld('Lwabaayi_Profile_ovqlxd'),
    title: 'Leadership Profile - Ronald Robert Lwabaayi',
    width: 900,
    height: 1200
  }
];


// ============================================================
// MASTER ARRAY: ALL GALLERY EVENTS
// ============================================================
// This array controls the ORDER of events on the website.
// The first event appears first on the gallery page.
//
// TO REORDER EVENTS: Simply move the imported variable up or down.
// TO ADD A NEW EVENT:
//   1. Create a new file in galleryEvents/ (copy an existing one)
//   2. Export the event object from that file
//   3. Import it HERE
//   4. Add it to this array
//   5. It will automatically appear on the website
// ============================================================
export const galleryEvents: GalleryEvent[] = [
  event2ndPostCovid,        // Event 1: 2nd Post-COVID Conference (Brampton, Sep 2025)
  event1stPostCovid,        // Event 2: 1st Post-COVID Conference (Toronto, July 2024)
  eventDiplomatic,          // Event 3: Diplomatic Engagements & Partnerships
  eventBehindTheScenes      // Event 4: Conference Planning & Behind the Scenes
];


// ============================================================
// RE-EXPORT TYPES (for backward compatibility)
// ============================================================
// Other files in the project import these from galleryData.ts.
// We re-export them so existing imports don't break.
// ============================================================
export type { GalleryImage, GalleryVideo, GalleryEvent } from './galleryTypes';