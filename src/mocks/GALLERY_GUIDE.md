/**
 * ============================================================================
 * COMPLETE GALLERY SYSTEM DOCUMENTATION
 * For LDII Website Administrators & Content Editors
 * ============================================================================
 *
 * READ THIS FIRST if you are updating gallery photos, adding new events,
 * or changing gallery content. This guide explains EVERYTHING you need.
 *
 * ============================================================================
 * TABLE OF CONTENTS
 * ============================================================================
 * 1.  HOW EASY IS IT TO UPDATE? (Difficulty level)
 * 2.  THE CLOUDINARY IMAGE SYSTEM (How images work)
 * 3.  FILE STRUCTURE (Where everything lives)
 * 4.  ADDING PHOTOS TO AN EXISTING EVENT (Step-by-step)
 * 5.  ADDING A BRAND NEW EVENT (Step-by-step)
 * 6.  UPDATING THE GALLERY HERO IMAGE
 * 7.  THE cld() HELPER FUNCTION (Cloudinary URL builder)
 * 8.  WIDTH & HEIGHT VALUES (Why they matter)
 * 9.  COMMON MISTAKES TO AVOID
 * 10. TROUBLESHOOTING (Photos not showing?)
 * 11. GALLERY PAGE ARCHITECTURE (For developers)
 * ============================================================================
 */


/* ============================================================================
 * 1. HOW EASY IS IT TO UPDATE?
 * ============================================================================
 *
 * DIFFICULTY: Easy to Intermediate
 *
 * For an intermediate tech person (someone comfortable with basic file editing,
 * copying/pasting code blocks, and uploading images to the cloud), this is
 * VERY straightforward.
 *
 * What you need to know:
 *   - How to open a .ts file in a text editor (VS Code, Notepad++, etc.)
 *   - How to copy and paste code blocks
 *   - How to upload images to Cloudinary (or ask your photo person to)
 *   - How to find the "Public ID" of an image in Cloudinary
 *
 * What you DON'T need to know:
 *   - React / TypeScript / programming (the code is already written)
 *   - How to build or deploy the website (just edit and save files)
 *   - CSS or styling (it's all handled automatically)
 *
 * Time needed:
 *   - Adding 1 photo to an existing event: 2 minutes
 *   - Adding 10 photos to an existing event: 10 minutes
 *   - Creating a new event with 20 photos: 30 minutes
 *   - Changing the hero image: 1 minute
 * ============================================================================ */


/* ============================================================================
 * 2. THE CLOUDINARY IMAGE SYSTEM
 * ============================================================================
 *
 * ALL photos in the gallery come from Cloudinary.
 * Cloudinary account: dzppzxpad
 *
 * Why Cloudinary?
 *   - Photos are optimized automatically (compressed, proper format)
 *   - Photos load fast worldwide (CDN delivery)
 *   - You don't need to store huge image files in the website code
 *   - You can change photos on Cloudinary without touching code
 *
 * WORKFLOW:
 *   1. Upload your photo to Cloudinary (cloudinary.com console)
 *   2. Copy the photo's "Public ID" from the Cloudinary dashboard
 *   3. Paste that Public ID into the code using the cld() helper
 *   4. Save the file. The photo appears on the website automatically.
 *
 * EXAMPLE of a Public ID:
 *   Original filename: "conference_photo_1.jpg"
 *   Cloudinary Public ID: "conference_photo_1"
 *   (Cloudinary strips the file extension for the Public ID)
 * ============================================================================ */


/* ============================================================================
 * 3. FILE STRUCTURE
 * ============================================================================
 *
 * src/mocks/
 *   ├── galleryTypes.ts              <-- The cld() helper and type definitions
 *   │                                   (You generally don't edit this file)
 *   │
 *   ├── galleryData.ts               <-- MASTER FILE. Controls event order,
 *   │                                   featured images, and which events exist.
 *   │                                   EDIT THIS when adding a new event.
 *   │
 *   └── galleryEvents/
 *       ├── eventDiplomatic.ts       <-- Event 1: Diplomatic photos
 *       ├── event1stPostCovid.ts     <-- Event 2: 1st Conference photos
 *       ├── event2ndPostCovidA.ts    <-- Event 3A: 2nd Conference (part 1)
 *       ├── event2ndPostCovidB.ts    <-- Event 3B: 2nd Conference (part 2)
 *       └── eventBehindTheScenes.ts  <-- Event 4: Behind the scenes photos
 *
 * Each event file contains:
 *   - Event title, date, location, description
 *   - An array of all photos for that event
 *
 * src/pages/events/gallery/
 *   ├── page.tsx                     <-- The gallery page itself (the viewer)
 *   └── components/
 *       ├── MasonryGrid.tsx          <-- The photo grid layout component
 *       └── Lightbox.tsx             <-- The full-screen photo viewer
 *
 * ============================================================================ */


/* ============================================================================
 * 4. ADDING PHOTOS TO AN EXISTING EVENT (Step-by-step)
 * ============================================================================
 *
 * STEP 1: Upload your photo to Cloudinary
 *   - Go to https://cloudinary.com and log into the dzppzxpad account
 *   - Click "Media Library" → "Upload"
 *   - Drag and drop your photo(s)
 *   - Wait for upload to complete
 *
 * STEP 2: Get the Public ID
 *   - In the Cloudinary Media Library, click on your uploaded photo
 *   - Look for the "Public ID" field (usually near the top)
 *   - It looks like: "my_photo_name" or "WhatsApp_Image_2026_05_26_at_10_41_48_PM_3"
 *   - Copy this exact text (no file extension needed)
 *
 * STEP 3: Open the correct event file
 *   - Find which event you want to add photos to
 *   - Open the corresponding file in src/mocks/galleryEvents/
 *   - Example: for diplomatic photos, open eventDiplomatic.ts
 *
 * STEP 4: Add the photo block
 *   - Scroll down to the "images: [" array in the file
 *   - Add a new photo block at the end (or anywhere you want it to appear):
 *
 *     {
 *       url: cld('YOUR_PUBLIC_ID_HERE'),
 *       title: 'Description of what this photo shows',
 *       width: 1200,     // Use 1200 for landscape (wide) photos
 *       height: 900      // Use 900 for landscape, 1200 for portrait (tall)
 *     },
 *
 *   - IMPORTANT: Don't forget the comma at the end of the block
 *   - IMPORTANT: Replace YOUR_PUBLIC_ID_HERE with the actual Public ID
 *   - IMPORTANT: Replace the title with a real description
 *
 * STEP 5: Save the file
 *   - Press Ctrl+S (or Cmd+S on Mac)
 *   - The photo will appear automatically on the website
 *   - No need to restart servers or rebuild anything
 *
 * EXAMPLE - Adding a photo to the Diplomatic event:
 *
 *   Before:
 *     {
 *       url: cld('last_photo_in_list'),
 *       title: 'Last existing photo',
 *       width: 900,
 *       height: 1200
 *     }
 *   ]
 *
 *   After:
 *     {
 *       url: cld('last_photo_in_list'),
 *       title: 'Last existing photo',
 *       width: 900,
 *       height: 1200
 *     },
 *     {
 *       url: cld('my_new_photo_public_id'),
 *       title: 'Ambassador meeting with LDII president',
 *       width: 1200,
 *       height: 900
 *     }
 *   ]
 * ============================================================================ */


/* ============================================================================
 * 5. ADDING A BRAND NEW EVENT (Step-by-step)
 * ============================================================================
 *
 * STEP 1: Create a new event file
 *   - Copy an existing event file (e.g., copy eventDiplomatic.ts)
 *   - Paste it in the same folder (src/mocks/galleryEvents/)
 *   - Rename it to something descriptive
 *     Example: eventYouthConference2026.ts
 *
 * STEP 2: Update the event information
 *   - Open your new file
 *   - Change the export name: export const eventYouthConference2026
 *   - Change the slug: something URL-friendly like 'youth-conference-2026'
 *   - Change the title: the full event name displayed on the website
 *   - Change the year, date, location
 *   - Change the description to match your event
 *
 * STEP 3: Add your photos
 *   - Follow the steps in section 4 above
 *   - Add all your event photos to the images array
 *   - You can start with just 5-10 photos and add more later
 *
 * STEP 4: Register the event in galleryData.ts
 *   - Open src/mocks/galleryData.ts
 *   - Import your new event at the top of the file:
 *       import { eventYouthConference2026 } from './galleryEvents/eventYouthConference2026';
 *   - Add your event to the galleryEvents array at the bottom:
 *       export const galleryEvents: GalleryEvent[] = [
 *         eventYouthConference2026,   // <-- Add your new event here
 *         event2ndPostCovid,
 *         event1stPostCovid,
 *         ...
 *       ];
 *   - The ORDER in this array controls the ORDER on the website
 *   - First event in the array = first event shown on the page
 *
 * STEP 5: (Optional) Add a featured photo
 *   - In galleryData.ts, find the "featuredImages" array
 *   - Add one of your new photos to showcase it on the main gallery page
 *   - This helps visitors discover the new event
 *
 * STEP 6: Save all files
 *   - The new event appears automatically on the website
 *   - A new tab will appear in the gallery navigation
 *   - The event will show in the overview with preview photos
 * ============================================================================ */


/* ============================================================================
 * 6. UPDATING THE GALLERY HERO IMAGE
 * ============================================================================
 *
 * The hero image is the big background image at the top of the gallery page.
 * To change it:
 *
 * STEP 1: Get your new image URL
 *   - If it's on Cloudinary: upload the photo and get the full URL
 *     Example: https://res.cloudinary.com/dzppzxpad/image/upload/q_auto/f_auto/v1779929426/my_photo.jpg
 *   - If it's elsewhere: copy the direct image URL
 *
 * STEP 2: Open src/pages/events/gallery/page.tsx
 *   - Find the HERO SECTION (search for "HERO SECTION" or look near the top)
 *   - Find the <img> tag inside the hero section
 *   - Replace the src attribute with your new URL
 *
 * STEP 3: Save the file
 *   - The hero image updates immediately
 * ============================================================================ */


/* ============================================================================
 * 7. THE cld() HELPER FUNCTION (Cloudinary URL Builder)
 * ============================================================================
 *
 * Location: src/mocks/galleryTypes.ts
 *
 * This function builds a complete Cloudinary URL from just the Public ID.
 * You NEVER need to write the full Cloudinary URL manually.
 *
 * HOW IT WORKS:
 *   cld('my_photo')        → 'https://res.cloudinary.com/dzppzxpad/image/upload/my_photo.jpg'
 *   cld('my_photo', 'png') → 'https://res.cloudinary.com/dzppzxpad/image/upload/my_photo.png'
 *
 * WHY USE IT?
 *   - Shorter code (just the ID, not the full URL)
 *   - If the Cloudinary account changes, you only change it in ONE place
 *   - Less chance of typos in long URLs
 *   - Consistent format across all photos
 *
 * EXAMPLE USAGE IN EVENT FILES:
 *
 *   {
 *     url: cld('HE_Ambassador_OF_KENYA_slpwkj'),
 *     title: 'His Excellency - Ambassador of Kenya',
 *     width: 900,
 *     height: 1200
 *   }
 *
 * The cld() function automatically adds:
 *   - The Cloudinary base URL
 *   - The account name (dzppzxpad)
 *   - The /image/upload/ path
 *   - The .jpg extension (or whatever format you specify)
 * ============================================================================ */


/* ============================================================================
 * 8. WIDTH & HEIGHT VALUES (Why they matter)
 * ============================================================================
 *
 * The width and height values are NOT the actual pixel dimensions of the photo.
 * They are RATIO VALUES used by the masonry grid to calculate proper spacing.
 *
 * RULES:
 *   - LANDSCAPE photos (wider than tall):  width: 1200, height: 900
 *   - PORTRAIT photos (taller than wide):  width: 900,  height: 1200
 *   - SQUARE photos:                       width: 1000, height: 1000
 *   - WIDE panorama:                       width: 1400, height: 900
 *
 * WHY THIS MATTERS:
 *   The MasonryGrid component uses these ratios to calculate aspect ratios.
 *   If you set wrong values, the photo will appear stretched or squished
 *   in the grid layout.
 *
 * QUICK REFERENCE:
 *   Photo orientation  →  width  →  height
 *   Landscape          →  1200   →  900
 *   Portrait           →  900    →  1200
 *   Square             →  1000   →  1000
 *   Wide banner        →  1400   →  900
 *
 * You don't need to measure the actual photo. Just eyeball it:
 *   - Is it wider than tall? → Landscape (1200x900)
 *   - Is it taller than wide? → Portrait (900x1200)
 * ============================================================================ */


/* ============================================================================
 * 9. COMMON MISTAKES TO AVOID
 * ============================================================================
 *
 * MISTAKE 1: Forgetting the comma
 *   WRONG: }
 *          {
 *   RIGHT:  },
 *          {
 *   Every photo block except the last one needs a comma after the closing }.
 *   The LAST photo block in the array should NOT have a comma.
 *
 * MISTAKE 2: Wrong Public ID
 *   - Double-check you copied the Public ID exactly from Cloudinary
 *   - Do NOT include the file extension (.jpg, .png) in the Public ID
 *   - The cld() function adds the extension automatically
 *   - WRONG: cld('my_photo.jpg')
 *   - RIGHT:  cld('my_photo')
 *
 * MISTAKE 3: Wrong width/height
 *   - If you set width: 900, height: 1200 for a landscape photo,
 *     it will look squished in the grid.
 *   - Always use 1200x900 for landscape, 900x1200 for portrait.
 *
 * MISTAKE 4: Forgetting to save galleryData.ts
 *   - When adding a NEW event, you MUST update galleryData.ts
 *   - Just creating the event file is NOT enough
 *   - The event won't appear until you add it to the galleryEvents array
 *
 * MISTAKE 5: Using spaces in filenames
 *   - Cloudinary Public IDs can have spaces, but they get weird
 *   - If your Public ID has spaces, they become underscores or %20
 *   - Copy the Public ID EXACTLY as shown in Cloudinary
 * ============================================================================ */


/* ============================================================================
 * 10. TROUBLESHOOTING (Photos not showing?)
 * ============================================================================
 *
 * PROBLEM: Photo doesn't appear on the website
 *   CHECK 1: Is the file saved? (Ctrl+S)
 *   CHECK 2: Is the Public ID correct? (Compare with Cloudinary dashboard)
 *   CHECK 3: Is the photo block inside the images array? (Between the [ ] brackets)
 *   CHECK 4: Did you forget a comma after the previous photo block?
 *   CHECK 5: Did you remember to add the event to galleryData.ts (for new events)?
 *
 * PROBLEM: Photo appears but looks stretched or wrong size
 *   - Check the width and height values (see section 8)
 *   - Landscape photos should be 1200x900, portrait 900x1200
 *
 * PROBLEM: Photo appears but takes a long time to load
 *   - This is normal for large photos
 *   - The MasonryGrid component shows a gray placeholder while loading
 *   - Cloudinary automatically optimizes photos, but very large ones still take time
 *   - Consider uploading smaller file sizes to Cloudinary (under 2MB)
 *
 * PROBLEM: New event doesn't appear in the gallery tabs
 *   - Check galleryData.ts - is the event imported and added to galleryEvents?
 *   - Check the event file - is it properly exported? (export const eventName)
 *   - Check the slug - it should be unique and URL-friendly (no spaces)
 *
 * PROBLEM: Gallery page shows an error
 *   - Check for missing commas in the images array
 *   - Check for missing closing brackets } or ]
 *   - Check that every photo block has url, title, width, and height
 * ============================================================================ */


/* ============================================================================
 * 11. GALLERY PAGE ARCHITECTURE (For developers)
 * ============================================================================
 *
 * The gallery page has TWO view modes:
 *
 * 1. OVERVIEW MODE (default)
 *    - Shows ALL events as individual sections on one long page
 *    - Each section shows up to 10 preview photos in a masonry grid
 *    - Clicking "View All" switches to Category mode for that event
 *    - Clicking a preview photo opens the lightbox
 *
 * 2. CATEGORY MODE (full-grid view)
 *    - Shows ALL photos for ONE selected event
 *    - Uses the MasonryGrid component for responsive layout
 *    - Clicking any photo opens the lightbox
 *    - "Back to Overview" button returns to the landing view
 *
 * DATA FLOW:
 *    galleryData.ts exports galleryEvents[]
 *    → page.tsx imports galleryEvents
 *    → page.tsx builds galleryCategories[] and galleryImages[] from galleryEvents
 *    → page.tsx renders either Overview or Category view
 *    → Category view uses MasonryGrid component
 *    → Clicking a photo opens the inline Lightbox
 *
 * COMPONENTS:
 *    - page.tsx: Main gallery page, handles state, tabs, lightbox, views
 *    - MasonryGrid.tsx: Responsive masonry grid with lazy loading
 *    - Lightbox.tsx: Fullscreen photo viewer (separate component, but
 *      page.tsx currently uses an inline lightbox)
 *
 * STATE MANAGEMENT:
 *    - viewMode: 'overview' | 'category'  -- which view is showing
 *    - activeCategory: string            -- which event is selected
 *    - lightboxOpen: boolean             -- is lightbox visible
 *    - lightboxIndex: number             -- which photo is shown in lightbox
 *
 * KEYBOARD SHORTCUTS (when lightbox is open):
 *    - Escape: Close lightbox
 *    - Arrow Left: Previous photo
 *    - Arrow Right: Next photo
 * ============================================================================ */