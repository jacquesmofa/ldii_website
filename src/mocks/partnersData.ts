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
    name: 'Thrive Tours Inc.',
    role: 'Indigenous-led partner',
    description:
      'A nationally award-winning, 100% Indigenous-owned education and eco-tourism company based at Batchewana First Nation in Northern Ontario, and the operator of the Africa–Canada Mining & Technology Exchange delivered jointly with LDII.',
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
    description: 'Toronto venue of the 1st International Post-COVID Conference, July 2024.',
    website: 'https://www.mtccc.com/',
    icon: 'ri-building-2-line',
  },
];
