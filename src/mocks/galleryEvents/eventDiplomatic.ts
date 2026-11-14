/**
 * ============================================================================
 * EVENT 3: Diplomatic Engagements & Strategic Partnerships
 * src/mocks/galleryEvents/eventDiplomatic.ts
 * ============================================================================
 *
 * A collection of diplomatic meetings, partnership signings, and international
 * engagements that strengthen LDII's global network.
 *
 * HOW TO ADD NEW PHOTOS TO THIS EVENT:
 * 1. Upload the photo to Cloudinary
 * 2. Copy the Public ID from Cloudinary dashboard
 * 3. Add a new block inside the "images: [" array below:
 *
 *    {
 *      url: cld('your_public_id_here'),
 *      title: 'Description of what the photo shows',
 *      width: 1200,   // Use 1200 for landscape, 900 for portrait
 *      height: 900    // Use 900 for landscape, 1200 for portrait
 *    }
 *
 * 4. Save the file. The photo will appear automatically on the website.
 * ============================================================================
 */

import { cld } from '../galleryTypes';
import type { GalleryEvent } from '../galleryTypes';

export const eventDiplomatic: GalleryEvent = {
  slug: 'diplomatic-engagements-partnerships',
  title: 'Diplomatic Engagements',
  shortTitle: 'Diplomatic Engagements',
  year: '2024–2025',
  date: '2024–2025',
  location: 'Canada & International',
  description:
    'Meetings between LDII and diplomatic missions, delegations and organizations in Canada, including the High Commissions of Kenya and South Africa.',
  images: [
    {
      url: cld('HE_Ambassador_OF_KENYA_slpwkj'),
      title: 'Kenya\'s High Commissioner to Canada with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('HE_Ambassador_OF_KENYA5_pfgzlv'),
      title: 'Kenya\'s High Commissioner to Canada with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('HE_Ambassador_OF_KENYA.4JPG_ub2ull'),
      title: 'Kenya High Commission dialogue with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('Iftika_gc4ksu'),
      title: 'Diplomatic guest with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('Iftika_2_ka6io7'),
      title: 'Diplomatic guest in discussion with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('Iftika_3_oix5fe'),
      title: 'Diplomatic guest with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('Iftika_4_izigrc'),
      title: 'Diplomatic guest with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('H_E_of_Kenya_n_Jai_Paul_rvtdln'),
      title: 'Kenya\'s High Commissioner to Canada with Jai Paul · Brampton, September 2025',
      width: 1200,
      height: 900
    },
    {
      url: cld('H_E_Kenyan_A3_pkpitk'),
      title: 'Kenya High Commission delegation, group photo',
      width: 1200,
      height: 900
    },
    {
      url: cld('H_E_Kenyan_A_s49voa'),
      title: 'Kenya High Commission dialogue with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('Brampton_Board_of_Trade_noll70'),
      title: 'LDII and the Brampton Board of Trade · Brampton, Ontario',
      width: 1200,
      height: 900
    },
    {
      url: cld('Albertine_Angola_dlaepr'),
      title: 'Representative of the Angola delegation · Brampton, September 2025',
      width: 900,
      height: 1200
    },
    {
      url: cld('Albertine_Angola.2jpg_qvcq24'),
      title: 'Representative of the Angola delegation',
      width: 900,
      height: 1200
    },
    {
      url: cld('angola_mcipj6'),
      title: 'Meeting with the Angola delegation',
      width: 1200,
      height: 900
    },
    {
      url: cld('Dei_Bio_phama_prssgi'),
      title: 'Meeting with guests',
      width: 1200,
      height: 900
    },
    {
      url: cld('ABDU_K_2_nogu02'),
      title: 'Delegate with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('ABDU_K_2_fnfwsc'),
      title: 'Delegate with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('christopher_Barcey_l9mg1u'),
      title: 'Media guest with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('Bracey_Chris_t32jrw'),
      title: 'Media guest with LDII',
      width: 900,
      height: 1200
    },
    {
      url: cld('Braceley_n_Journalist_g9575z'),
      title: 'Guests with LDII',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_12.25.40bnmv_iwh2fn'),
      title: 'LDII and the Brampton Board of Trade · Brampton, Ontario',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.35_2_hfkaqv'),
      title: 'Kenya-Canada dialogue · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.34_jp6zsm'),
      title: 'Kenya-Canada dialogue 2 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.35_ue5qne'),
      title: 'Kenya-Canada dialogue 3 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.34_6_h0apkr'),
      title: 'Kenya-Canada dialogue 4 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.34_5_lsdqfd'),
      title: 'Kenya-Canada dialogue 5 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.34_4_qqin8e'),
      title: 'Kenya-Canada dialogue 6 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.34_3_capvso'),
      title: 'Kenya-Canada dialogue 7 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.34_2_ugpwhp'),
      title: 'Kenya-Canada dialogue 8 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.33_iqycrq'),
      title: 'LDII offices - meeting room · Toronto, Ontario',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.33_7_dfleyh'),
      title: 'Kenya-Canada dialogue 9 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.33_6_w42eol'),
      title: 'Kenya-Canada dialogue 10 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.34_1_ihefg8'),
      title: 'Kenya-Canada dialogue with LDII · Toronto, March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.33_4_lflfjr'),
      title: 'Kenya-Canada dialogue 11 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.33_2_ykaz0x'),
      title: 'Kenya-Canada dialogue 12 · LDII offices, Toronto · March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.33_1_khmwog'),
      title: 'Kenya-Canada dialogue with LDII 2 · Toronto, March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.53.33_3_pl12xf'),
      title: 'Kenya-Canada dialogue with LDII 3 · Toronto, March 2026',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.52.07mnmb_pd2gbi'),
      title: 'Kenya High Commission dialogue with LDII · Toronto',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.48.54mnjb_w0hjti'),
      title: 'South African High Commission dialogue with LDII · Toronto',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.48.54mkn_wxxa4y'),
      title: 'Kenya High Commission dialogue with LDII 2 · Toronto',
      width: 1200,
      height: 900
    },
    {
      url: cld('WhatsApp_Image_2026-10-19_at_10.48.54mkjn_knn9oc'),
      title: 'South African High Commission dialogue with LDII 2 · Toronto',
      width: 1200,
      height: 900
    }
  ],
  videos: []
};