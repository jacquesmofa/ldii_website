/**
 * ============================================================================
 * EVENT 1A: 2nd International Post-COVID Conference - BRANDING, PANELS, SPEAKERS
 * src/mocks/galleryEvents/event2ndPostCovidA.ts
 * ============================================================================
 *
 * Part A of the 2nd International Post-COVID Conference gallery.
 * Contains: Official branding, panel discussions, keynote speakers,
 * diplomatic guests, and leadership portraits.
 *
 * Location: Brampton, ON, Canada | Date: September 8–10, 2025
 * ============================================================================
 */

import { cld } from '../galleryTypes';
import type { GalleryEvent } from '../galleryTypes';

export const event2ndPostCovidA: GalleryEvent = {
  slug: '2nd-international-post-covid-conference-brampton-2025',
  title: '2nd International Post-COVID Conference',
  year: '2025',
  date: 'September 8–10, 2025',
  location: 'Brampton, ON, Canada',
  description:
    'LDII\'s flagship conference bringing together global health experts, policymakers, diplomats, and community leaders to address post-pandemic recovery, health system resilience, and international cooperation. Held in partnership with the City of Brampton and featuring distinguished ambassadors, ministry officials, and international delegates.',
  images: [
    // --- OFFICIAL CONFERENCE BRANDING ---
    {
      url: cld('2nd_Post_covid_cvdox1'),
      title: 'Official Conference Banner - 2nd International Post-COVID Conference',
      width: 1400,
      height: 900
    },
    {
      url: cld('conferencepstcovid25_qqjep8'),
      title: 'Conference Identity - Brampton 2025',
      width: 1200,
      height: 800
    },
    {
      url: cld('crop2026_speaker_mpjaow'),
      title: 'Featured Speaker Spotlight 2025',
      width: 900,
      height: 1200
    },
    {
      url: cld('ldii_brampton_pckv6s'),
      title: 'LDII Brampton Venue',
      width: 1200,
      height: 900
    },
    {
      url: cld('ldii_brampton..._nyk3hf'),
      title: 'Conference Venue Setup',
      width: 1200,
      height: 800
    },
    {
      url: cld('ldiibrampton.._bxafjn'),
      title: 'Brampton Conference Hall',
      width: 1400,
      height: 900
    },

    // --- PANEL DISCUSSIONS ---
    {
      url: cld('Panel_discussion1_ujy3df'),
      title: 'Panel Discussion - Global Health Policy Frameworks',
      width: 1200,
      height: 900
    },
    {
      url: cld('Panel_discussion2_mayull'),
      title: 'Panel Discussion - Pandemic Preparedness Strategies',
      width: 1200,
      height: 900
    },
    {
      url: cld('Panel_discussion3_ffuxqz'),
      title: 'Panel Discussion - Economic Recovery Post-Pandemic',
      width: 1200,
      height: 900
    },
    {
      url: cld('Panel_discussion4_cmyd4j'),
      title: 'Panel Discussion - Community Resilience Models',
      width: 1200,
      height: 900
    },
    {
      url: cld('Panel_discussion5_qjab7t'),
      title: 'Panel Discussion - International Cooperation',
      width: 1200,
      height: 900
    },
    {
      url: cld('Panel_1_nin4iu'),
      title: 'Expert Panel Session - Opening Day',
      width: 1400,
      height: 900
    },

    // --- SPEAKERS & DELEGATES ---
    {
      url: cld('Monica_Linares_p7vo5j'),
      title: 'Speaker - Monica Linares',
      width: 900,
      height: 1200
    },
    {
      url: cld('Micheal_hhsp61'),
      title: 'Delegate - Michael',
      width: 900,
      height: 1200
    },
    {
      url: cld('Micheal.2jpg_fd1wlk'),
      title: 'Speaker Michael - Addressing the Assembly',
      width: 900,
      height: 1200
    },
    {
      url: cld('Mudaba_1_gtkq47'),
      title: 'Delegate - Mudaba',
      width: 900,
      height: 1200
    },
    {
      url: cld('Jai_Paul_anvmov'),
      title: 'Distinguished Guest - Jai Paul',
      width: 900,
      height: 1200
    },
    {
      url: cld('Jai_Paul_3_kxjcpf'),
      title: 'Jai Paul - Panel Contribution',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_victor_bkpass'),
      title: 'Keynote Speaker - Dr. Victor',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_Kirenga_oeug7l'),
      title: 'Expert Speaker - Dr. Kirenga',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_Lawrence_2_efn0yp'),
      title: 'Dr. Lawrence - Research Presentation',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_Lawrence_gkp6i7'),
      title: 'Dr. Lawrence - Session Chair',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_Jamila_zmh6d6'),
      title: 'Dr. Jamila - Health Systems Expert',
      width: 900,
      height: 1200
    },
    {
      url: cld('DR_Girum_n_Dr_Jamila_zhw977'),
      title: 'Dr. Girum and Dr. Jamila - Joint Presentation',
      width: 1200,
      height: 900
    },
    {
      url: cld('DR_Girum4_riln3k'),
      title: 'Dr. Girum - Key Insights',
      width: 900,
      height: 1200
    },
    {
      url: cld('DR_Girum_ihz81w'),
      title: 'Dr. Girum - Conference Delegate',
      width: 900,
      height: 1200
    },
    {
      url: cld('DR_Maryline_ypkufx'),
      title: 'Dr. Maryline - International Health Expert',
      width: 900,
      height: 1200
    },
    {
      url: cld('DR_Angium_yo3fki'),
      title: 'Dr. Angium - Policy Discussion',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_Angium_1_gfwz6z'),
      title: 'Dr. Angium - Research Findings',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_Angium_2_nc47vt'),
      title: 'Dr. Angium - Q&A Session',
      width: 900,
      height: 1200
    },
    {
      url: cld('DR_Angium_3_dzhtrr'),
      title: 'Dr. Angium - Closing Remarks',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_Fathia_hxtqia'),
      title: 'Dr. Fathia - Community Health Expert',
      width: 900,
      height: 1200
    },
    {
      url: cld('Dr_Fathia_2_jr3ctx'),
      title: 'Dr. Fathia - Workshop Facilitator',
      width: 900,
      height: 1200
    },
    {
      url: cld('Don_zoo4oa'),
      title: 'Delegate - Don',
      width: 900,
      height: 1200
    },
    {
      url: cld('mami_kaya_wzm5aj'),
      title: 'Delegate - Mami Kaya',
      width: 900,
      height: 1200
    }
  ],
  videos: []
};