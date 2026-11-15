// ============================================================
// CONFIRMED PARTNERS
// Only organisations LDII has actually worked with appear here.
// Use the organisation's real logo (upload it to Cloudinary) or leave
// `logo` empty: an icon is shown instead. Never use a generated logo.
// Names removed in Nov 2026 because they were not confirmed are listed
// in PLACEHOLDERS.md: add them back here once the CEO confirms them.
// ============================================================

export interface Partner {
  name: string;
  role: string;
  description: string;
  website: string;
  logo?: string;
  icon: string;
}

export const confirmedPartners: Partner[] = [
  {
    name: 'Intergovernmental Authority on Development (IGAD)',
    role: 'Co-convener, 1st International Post-COVID Conference',
    description:
      'The eight-country regional body of East Africa and the Horn of Africa. IGAD co-convened and co-organized the 1st International Post-COVID Conference with LDII in Toronto, July 11–13, 2024.',
    website: 'https://igad.int/igad-and-ldii-holds-the-first-international-post-covid-conference-in-canada/',
    logo: 'https://igad.int/wp-content/uploads/2021/07/Green-Logo.svg',
    icon: 'ri-government-line',
  },
  {
    name: 'City of Brampton',
    role: 'Host city and supporter, 2nd International Post-COVID-19 Conference',
    description:
      'The City of Brampton endorsed LDII’s 2nd International Post-COVID-19 Conference, held in Brampton in September 2025, and presented certificates of recognition to LDII and its partners.',
    website: 'https://www.brampton.ca/',
    icon: 'ri-building-4-line',
  },
  {
    name: 'Thrive Tours Inc.',
    role: 'Indigenous-led partner',
    description:
      'An Indigenous-led experiential tourism and education company based at Batchewana First Nation in Northern Ontario, and co-host with LDII of the annual Global South–Canada Mining & Technology Transfer Mission.',
    website: 'https://www.thrivetours.ca/',
    logo: 'https://res.cloudinary.com/dzppzxpad/image/upload/f_auto,q_auto,w_420/v1792410688/logo-2026_thrive_tours_kbecbo.webp',
    icon: 'ri-compass-3-line',
  },
  {
    name: 'KWETU Connect',
    role: 'Conference partner',
    description:
      'Sydney-based consultancy on cultural heritage, health equity and community resilience, and host of the Cultural Resilience One Planet (CROP) Conference 2026 in which LDII took part.',
    website: 'https://kwetuconnect.com',
    logo: 'https://res.cloudinary.com/dhjajm7ru/image/upload/w_420,q_auto,f_auto/v1780004656/Kwetu_connect_Logo_-_best_size_for_favicon_ilrvqn.jpg',
    icon: 'ri-earth-line',
  },
  {
    name: 'Pearson Convention Centre',
    role: 'Venue, 2nd International Post-COVID-19 Conference',
    description: 'Brampton venue of the 2nd International Post-COVID-19 Conference, 8–10 September 2025.',
    website: 'https://www.pearsonconventioncenter.com/',
    icon: 'ri-building-4-line',
  },
  {
    name: 'Metro Toronto Convention Centre',
    role: 'Venue, 1st International Post-COVID Conference',
    description: 'Toronto venue of the 1st International Post-COVID Conference, July 11–13, 2024.',
    website: 'https://www.mtccc.com/',
    icon: 'ri-building-2-line',
  },
];
