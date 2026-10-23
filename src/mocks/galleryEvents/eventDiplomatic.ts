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
  title: 'Diplomatic Engagements & Strategic Partnerships',
  year: '2024–2025',
  date: '2024–2025',
  location: 'Canada & International',
  description:
    'A curated collection of LDII\'s diplomatic engagements and strategic partnerships with international delegations, government representatives, and organizational partners. These meetings strengthen our global network and advance our mission of international cooperation and community resilience.',
  images: [
    {
      url: cld('HE_Ambassador_OF_KENYA_slpwkj'),
      title: 'His Excellency - Ambassador of Kenya Official Visit',
      width: 900,
      height: 1200
    },
    {
      url: cld('HE_Ambassador_OF_KENYA5_pfgzlv'),
      title: 'Kenyan Ambassador - Diplomatic Exchange Ceremony',
      width: 900,
      height: 1200
    },
    {
      url: cld('HE_Ambassador_OF_KENYA.4JPG_ub2ull'),
      title: 'Kenyan High Commission - Partnership Dialogue',
      width: 900,
      height: 1200
    },
    {
      url: cld('Mofa_1_dc7saf'),
      title: 'Ministry of Foreign Affairs - Official Representative',
      width: 900,
      height: 1200
    },
    {
      url: cld('Iftika_gc4ksu'),
      title: 'Diplomatic Delegate Iftika - Arrival Ceremony',
      width: 900,
      height: 1200
    },
    {
      url: cld('Iftika_2_ka6io7'),
      title: 'Iftika - Bilateral Cooperation Discussion',
      width: 900,
      height: 1200
    },
    {
      url: cld('Iftika_3_oix5fe'),
      title: 'Iftika - Strategic Partnership Signing',
      width: 900,
      height: 1200
    },
    {
      url: cld('Iftika_4_izigrc'),
      title: 'Iftika - Closing Diplomatic Session',
      width: 900,
      height: 1200
    },
    {
      url: cld('H_E_of_Kenya_n_Jai_Paul_rvtdln'),
      title: 'His Excellency of Kenya with Jai Paul - Official Meeting',
      width: 1200,
      height: 900
    },
    {
      url: cld('H_E_Kenyan_A3_pkpitk'),
      title: 'Kenyan Diplomatic Delegation - Group Photo',
      width: 1200,
      height: 900
    },
    {
      url: cld('H_E_Kenyan_A_s49voa'),
      title: 'Kenyan High Commission - Engagement Session',
      width: 900,
      height: 1200
    },
    {
      url: cld('Brampton_Board_of_Trade_noll70'),
      title: 'Brampton Board of Trade - Business Partnership',
      width: 1200,
      height: 900
    },
    {
      url: cld('Albertine_Angola_dlaepr'),
      title: 'Angola Partnership - Representative Albertine',
      width: 900,
      height: 1200
    },
    {
      url: cld('Albertine_Angola.2jpg_qvcq24'),
      title: 'Albertine - Angola Delegation Official',
      width: 900,
      height: 1200
    },
    {
      url: cld('angola_mcipj6'),
      title: 'Angola Delegation - Partnership Meeting',
      width: 1200,
      height: 900
    },
    {
      url: cld('Dei_Bio_phama_prssgi'),
      title: 'DEI Bio-Pharma - Strategic Alliance',
      width: 1200,
      height: 900
    },
    {
      url: cld('ABDU_K_2_nogu02'),
      title: 'Delegate Abdu K - International Partnership',
      width: 900,
      height: 1200
    },
    {
      url: cld('ABDU_K_2_fnfwsc'),
      title: 'Abdu K - Diplomatic Engagement',
      width: 900,
      height: 1200
    },
    {
      url: cld('christopher_Barcey_l9mg1u'),
      title: 'Journalist Christopher Barcey - Press Partnership',
      width: 900,
      height: 1200
    },
    {
      url: cld('Bracey_Chris_t32jrw'),
      title: 'Chris Bracey - Media & Communications Partnership',
      width: 900,
      height: 1200
    },
    {
      url: cld('Braceley_n_Journalist_g9575z'),
      title: 'Bracey with International Press Delegation',
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