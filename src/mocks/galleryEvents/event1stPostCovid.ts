/**
 * ============================================================================
 * EVENT 2: 1st International Post-COVID Conference
 * src/mocks/galleryEvents/event1stPostCovid.ts
 * ============================================================================
 *
 * LDII's inaugural international conference held at the Metro Toronto
 * Convention Center, July 11–13, 2024.
 * Theme: "Building Synergies and Resilience for Future Global Shocks"
 *
 * HOW TO ADD NEW PHOTOS:
 * 1. Upload to Cloudinary, copy the Public ID
 * 2. Add a new block inside "images: [" below:
 *    { url: cld('your_id'), title: 'Description', width: 900, height: 1200 }
 * 3. Save. Photo appears automatically.
 * ============================================================================
 */

import { cld } from '../galleryTypes';
import type { GalleryEvent } from '../galleryTypes';

export const event1stPostCovid: GalleryEvent = {
  slug: '1st-international-post-covid-conference-toronto-2024',
  title: '1st International Post-COVID Conference',
  year: '2024',
  date: 'July 11–13, 2024',
  location: 'Metro Toronto Convention Center, Toronto, Canada',
  description:
    'LDII\'s inaugural international conference with the theme "Building Synergies and Resilience for Future Global Shocks." Held at the Metro Toronto Convention Center, this landmark event brought together global health experts, policymakers, researchers, and community leaders focused on recovery strategies and pandemic preparedness.',
  images: [
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_blxfxa'),
      title: 'Conference Opening - Toronto 2024',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_7_aojyj2'),
      title: 'Keynote Session - Day 1',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_6_xlootm'),
      title: 'Panel Discussion - Global Recovery',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_5_mmxaob'),
      title: 'Expert Presentation - Health Systems',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_4_u2rjhm'),
      title: 'Workshop Session - Resilience Strategies',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_3_nzl81v'),
      title: 'Delegate Engagement - Toronto',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_2_yq0s0v'),
      title: 'Networking Reception - Metro Toronto Convention Center',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.47_PM_1_dunz02'),
      title: 'Conference Hall Overview - Toronto 2024',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.46_PM_xqjvab'),
      title: 'Morning Plenary - July 11, 2024',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.46_PM_3_v0vd7f'),
      title: 'Breakout Session - Economic Recovery',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.46_PM_2_cduqgn'),
      title: 'Collaborative Discussion - July 11',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.46_PM_1_onfuyb'),
      title: 'Speaker Session - International Perspectives',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.45_PM_fg3u3m'),
      title: 'Afternoon Session - July 11',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.45_PM_1_weatol'),
      title: 'Q&A with Experts - Toronto 2024',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.44_PM_x6g2nn'),
      title: 'Day 2 Opening - July 12, 2024',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.44_PM_3_nv27fh'),
      title: 'Panel on Future Global Shocks',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.44_PM_2_qsj4lq'),
      title: 'Synergies Workshop - July 12',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_4.02.44_PM_1_n6jony'),
      title: 'Building Resilience - Group Exercise',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.40_PM_g45oyq'),
      title: 'International Delegates - Toronto',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.40_PM_7_mmplhw'),
      title: 'Conference Dinner - July 12 Evening',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.40_PM_6_ukykbp'),
      title: 'Networking Dinner - International Guests',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.40_PM_5_dcf0nl'),
      title: 'Cultural Exchange - Evening Event',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.40_PM_4_guxe4k'),
      title: 'Final Day - July 13, 2024',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.40_PM_3_tt6ugd'),
      title: 'Closing Ceremony - Toronto 2024',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.40_PM_2_mivwcp'),
      title: 'Award Presentation - Closing Day',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.40_PM_1_lbmamp'),
      title: 'Closing Remarks - Metro Toronto Convention Center',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.39_PM_k4yy3g'),
      title: 'Group Photo - 1st International Post-COVID Conference',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.39_PM_2_vttrvw'),
      title: 'Final Handshakes - Conference Conclusion',
      width: 900,
      height: 1200
    },
    {
      url: cld('WhatsApp_Image_2026-05-25_at_3.59.39_PM_1_ghv5eo'),
      title: 'Farewell - International Delegates',
      width: 900,
      height: 1200
    }
  ],
  videos: []
};