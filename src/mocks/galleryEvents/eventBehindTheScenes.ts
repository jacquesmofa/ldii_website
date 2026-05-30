/**
 * ============================================================================
 * EVENT 4: Conference Planning & Behind the Scenes
 * src/mocks/galleryEvents/eventBehindTheScenes.ts
 * ============================================================================
 *
 * Candid photographs from conference planning sessions, preparation
 * meetings, and behind-the-scenes moments from July 2025.
 *
 * HOW TO ADD NEW PHOTOS:
 * 1. Upload to Cloudinary, copy the Public ID
 * 2. Add a new block inside "images: [" below:
 *    { url: cld('your_id'), title: 'Description', width: 1200, height: 900 }
 * 3. Save. Photo appears automatically.
 * ============================================================================
 */

import { cld } from '../galleryTypes';
import type { GalleryEvent } from '../galleryTypes';

export const eventBehindTheScenes: GalleryEvent = {
  slug: 'conference-planning-behind-the-scenes',
  title: 'Conference Planning & Behind the Scenes',
  year: '2025',
  date: 'July 2025',
  location: 'Brampton & Toronto, Canada',
  description:
    'Candid photographs from conference planning sessions, preparation meetings, and behind-the-scenes moments that showcase the dedication and teamwork behind LDII\'s major international events. These images capture the preparation, coordination, and community effort that make our conferences possible.',
  images: [
    {
      url: cld('PSX_20250726_005744_m8jl0j'),
      title: 'Early Morning Setup - July 26, 2025',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_034602_tk8ljk'),
      title: 'Venue Preparation - Team at Work',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_034738_fdedeu'),
      title: 'Stage Setup - Technical Team',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_034927_qjf4hu'),
      title: 'Audio-Visual Preparation',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_035110_ggtre1'),
      title: 'Registration Area Setup',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_035355_lkupcq'),
      title: 'Banner and Branding Installation',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_035940_umksxu'),
      title: 'Final Walkthrough - July 26 Morning',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_040135_jbfyuq'),
      title: 'Catering and Hospitality Prep',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_040303_vqjfbf'),
      title: 'Volunteer Briefing Session',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_040431_fjq4ij'),
      title: 'Security and Protocol Check',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_040904_yeip7j'),
      title: 'Exhibition Booth Setup',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_041138_qirydd'),
      title: 'Team Huddle - Final Instructions',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_041456_uovyur'),
      title: 'Signage and Wayfinding Setup',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_041456_1_zconpt'),
      title: 'Technical Rehearsal',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_041639_syxmy3'),
      title: 'Delegate Packet Preparation',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_042018_doox1t'),
      title: 'Welcome Desk Final Touches',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_042149_lqvmhm'),
      title: 'Name Badge and Material Organization',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_042335_bpxbk9'),
      title: 'Floral and Decor Arrangement',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_042541_brtsst'),
      title: 'Photography Station Setup',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_043005_pmuehm'),
      title: 'Livestream Equipment Check',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_043430_cf2qwm'),
      title: 'Sound Check - Main Hall',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_043944_xejquc'),
      title: 'Lighting Adjustment',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_044621_kf9t5e'),
      title: 'Projection and Screen Test',
      width: 1200,
      height: 900
    },
    {
      url: cld('PSX_20250726_044621_1_cj2ur5'),
      title: 'Backup Systems Check',
      width: 1200,
      height: 900
    }
  ],
  videos: []
};