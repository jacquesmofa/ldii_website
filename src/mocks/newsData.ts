// Real LDII news only: each item links to its photo album or event page.
export interface NewsArticle {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  link: string;
  linkLabel: string;
}

export const newsArticles: NewsArticle[] = [
  {
    title: 'LDII Visits Greater Sudbury, the Mining Capital of Canada',
    date: 'November 2026',
    category: 'Mining & Partnerships',
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_900,h_700,q_auto,f_auto/WhatsApp_Image_2026-11-12_at_19.43.21_oegqfu.jpg',
    excerpt: 'An LDII delegation travelled to Greater Sudbury to engage with its mining ecosystem.',
    content: 'The trip included site and facility visits, meetings with hosts and partners, and exchanges on the mining expertise that LDII connects with African missions, ministries and chambers of mines.',
    author: 'LDII',
    link: '/events/gallery/greater-sudbury-mining-ecosystem-2026',
    linkLabel: 'See the photos',
  },
  {
    title: 'Canada and South Africa: Economic Outlook, Trade Opportunity and the Road to Market Access',
    date: 'November 2026',
    category: 'Trade',
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_900,h_700,q_auto,f_auto/untitled-6585_1_cnqwkm.jpg',
    excerpt: 'A seminar on the economic outlook between Canada and South Africa and the road to market access.',
    content: 'Participants came together for presentations on trade opportunities, discussion and networking between Canadian and South African stakeholders.',
    author: 'LDII',
    link: '/events/gallery/canada-south-africa-economic-outlook-2026',
    linkLabel: 'See the photos',
  },
  {
    title: 'Angola Diplomatic Engagement',
    date: 'November 2026',
    category: 'Diplomacy',
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_900,h_700,q_auto,f_auto/Angola_Diplomatic_Engagement_2_jmvzbi.jpg',
    excerpt: 'LDII met with representatives of Angola to strengthen ties between LDII, Angola and Canada.',
    content: 'The engagement continues LDII\'s work with diplomatic missions to build partnerships between African nations and Canada.',
    author: 'LDII',
    link: '/events/gallery/angola-diplomatic-engagement-2026',
    linkLabel: 'See the photos',
  },
  {
    title: '2nd International Post-COVID-19 Conference Explores Economic Damages from Global Shocks',
    date: 'September 2025',
    category: 'Event Report',
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_900,h_700,q_auto,f_auto/General_aiu2gv.jpg',
    excerpt: 'The 2nd International Post-COVID-19 Conference was held at the Pearson Convention Centre in Brampton, Ontario, from September 8 to 10, 2025.',
    content: 'Under the theme Economic Damages from Global Shocks: Building Resilience for the Future, partners, policymakers, researchers and community leaders examined how pandemics, natural disasters and financial crises cut across trade, finance and industry, and explored practical paths toward recovery and long-term resilience.',
    author: 'LDII',
    link: '/events/gallery/2nd-international-post-covid-conference-brampton-2025',
    linkLabel: 'See the photos',
  },
  {
    title: 'The First International Post-COVID Pandemic Conference',
    date: 'July 11–13, 2024',
    category: 'Event Report',
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_900,h_700,q_auto,f_auto/WhatsApp_Image_2026-05-25_at_3.59.39_PM_k4yy3g.jpg',
    excerpt: 'LDII\'s inaugural international conference, held at the Metro Toronto Convention Centre in July 2024.',
    content: 'Under the theme Building Synergies and Resilience for Future Global Shocks, the conference brought together health experts, policymakers, researchers and community leaders focused on recovery strategies and pandemic preparedness.',
    author: 'LDII',
    link: '/events/gallery/1st-international-post-covid-conference-toronto-2024',
    linkLabel: 'See the photos',
  },
];
