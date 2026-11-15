/**
 * ============================================================
 * LDII EVENTS DATA FILE
 * ============================================================
 * 
 * HOW TO ADD A NEW EVENT:
 * 1. Add a new event object to the `allEvents` array below
 * 2. Use a unique `id` (lowercase, hyphen-separated, e.g., 'my-event-2026')
 * 3. Set the `date` field in ISO format (YYYY-MM-DD) for auto-upcoming/past detection
 * 4. Set the `displayDate` field for what users see on the page
 * 5. The homepage and event pages will automatically pick up the new event
 * 
 * AUTO-SWITCHING LOGIC:
 * - Events with `date` >= today automatically show in "Upcoming Events"
 * - Events with `date` < today automatically show in "Past Events"
 * - When a date passes, the event automatically moves to Past Events
 * ============================================================
 */

export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO format (YYYY-MM-DD) for auto-filtering
  displayDate: string; // Human-readable date shown to users
  location: string;
  venue?: string;
  description: string;
  shortDescription: string; // Used on homepage cards
  image: string;
  type: string;
  attendees?: string;
  countries?: string;
  highlights?: string[];
  themes?: string[];
  outcomes?: string[];
  speakers?: { name: string; role: string }[];
  resources?: { title: string; type: string; size: string }[];
  /** Optional group photograph shown under the description, before speakers. */
  speakersPhoto?: { url: string; caption: string };
  isFeatured?: boolean;
  /** Optional deep link to a dedicated programme page (overrides the default event links) */
  linkUrl?: string;
  linkLabel?: string;
  /** Date has passed but LDII has not confirmed the event took place: hidden from past and upcoming lists until confirmed. */
  unconfirmed?: boolean;
}

// ============================================================
// ALL EVENTS DATA - Add new events here
// ============================================================
export const allEvents: EventItem[] = [
  // ==================== UPCOMING EVENTS ====================
  // NOTE: These are auto-detected as upcoming if their date is >= today
  // Adjust the `date` field when exact dates are confirmed

  {
    id: 'africa-canada-mining-technology-exchange-2027',
    title: 'Global South–Canada Mining & Technology Transfer Mission',
    date: '2027-06-01',
    displayDate: 'June 2027',
    location: 'Greater Sudbury & Timmins, Ontario',
    venue: 'Concludes at the Canadian Mining Expo, Timmins',
    description:
      "Every June, government and industry delegations from across the Global South come to Greater Sudbury to see one of the world’s leading mining ecosystems at work: its mines, suppliers, technologies and research institutions. They meet the people behind them and look for partnerships that bring proven Canadian know-how to mining in their own countries. The mission then travels north and ends at the Canadian Mining Expo in Timmins.\n\nCo-hosted by LDII and Thrive Tours Inc., an Indigenous-led experiential tourism and education company based at Batchewana First Nation. The Sudbury programme covers the story of the city’s regreening, mining innovation including automation, battery-electric equipment and research at Laurentian, Cambrian and NORCAT, and business-to-business meetings with local mining suppliers and service companies.",
    shortDescription:
      'The annual Global South mining mission to Greater Sudbury, ending at the Canadian Mining Expo in Timmins.',
    image:
      'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_800,h_500,q_auto,f_auto/WhatsApp_Image_2026-11-12_at_19.43.20_7_rimlmd.jpg',
    type: 'International Delegation',
    highlights: [
      'Government and industry delegations from across the Global South',
      'Northern Ontario mining suppliers and service companies',
      'Laurentian University, Cambrian College and NORCAT',
    ],
    themes: [
      'Sudbury’s regreening, from environmental damage to recovery',
      'Mining innovation: automation and battery-electric equipment',
      'Training and technical know-how',
      'Business-to-business partnerships',
    ],
    linkUrl: '/programs/mining-technology-exchange',
    linkLabel: 'About the mission',
    isFeatured: true,
  },
  {
    id: 'global-south-conference-2026',
    unconfirmed: true, // see PLACEHOLDERS.md
    title: 'Global Shocks Global South Conference 2026',
    date: '2026-09-15', // Set to mid-September when exact date is confirmed
    displayDate: 'TBA 2026',
    location: 'To Be Announced',
    description: 'Our premier international conference addressing systemic global challenges and building resilience strategies specifically for Global South nations. This landmark event will bring together heads of state, policy makers, researchers, and community leaders from across Africa, Asia, and Latin America to develop comprehensive frameworks for addressing interconnected global shocks including climate change, economic instability, health crises, and food insecurity.',
    shortDescription: 'Premier international conference addressing systemic global challenges and building resilience strategies specifically for Global South nations.',
    image: '',
    type: 'Major Conference',
    highlights: [
      'Heads of state and government ministers',
      'Leading researchers and academics',
      'Civil society and NGO leaders',
      'Private sector innovators',
      'Youth delegates'
    ],
    themes: [
      'Climate Resilience in the Global South',
      'Economic Recovery and Inclusive Growth',
      'Health Systems Strengthening',
      'Food Security and Sustainable Agriculture',
      'Digital Transformation and Innovation'
    ],
    isFeatured: true
  },
  {
    id: 'cultural-resilience-conference-2026',
    title: 'Cultural Resilience One Planet Conference (CROP) 2026',
    date: '2026-11-06',
    displayDate: '6–8 November 2026',
    location: 'Sydney, Australia',
    description: 'Exploring the vital role of cultural heritage and traditional knowledge in building community resilience and sustainable development. This unique conference brings together cultural practitioners, Indigenous leaders, researchers, and policy makers to examine how cultural assets can strengthen community resilience against global shocks while preserving invaluable heritage for future generations.',
    shortDescription: 'Exploring the role of cultural heritage and traditional knowledge in building community resilience and sustainable development.',
    image: 'https://res.cloudinary.com/dhjajm7ru/image/upload/c_pad,b_rgb:0A1E3D,w_800,h_500,q_auto,f_auto/v1781706372/Crop_rounded_big_zgkob2.png',
    type: 'Cultural Conference',
    highlights: [
      'Indigenous knowledge keepers',
      'Cultural heritage experts',
      'UNESCO representatives',
      'Community resilience practitioners',
      'Artists and cultural innovators'
    ],
    themes: [
      'Traditional Knowledge and Climate Adaptation',
      'Cultural Heritage Preservation',
      'Indigenous-Led Conservation',
      'Arts and Community Healing',
      'Intergenerational Knowledge Transfer'
    ],
    isFeatured: true
  },
  {
    id: 'cultural-resilience-conference-2027',
    unconfirmed: true, // see PLACEHOLDERS.md
    title: 'Cultural Resilience One Planet Conference (CROP) 2027',
    date: '2027-11-15', // Set to mid-November when exact date is confirmed
    displayDate: 'November 2027',
    location: 'Ontario, Canada',
    description: 'Building on the success of CROP 2026 in Australia, this conference brings together cultural heritage practitioners, Indigenous leaders, and resilience experts to explore how cultural identity and traditional knowledge strengthen community resilience across the Americas. This landmark event in Ontario will examine cultural preservation strategies, indigenous-led climate adaptation, and the role of arts in healing communities affected by global shocks.',
    shortDescription: 'Building on CROP 2026 Australia, exploring cultural identity and traditional knowledge in strengthening community resilience across the Americas.',
    image: 'https://res.cloudinary.com/dhjajm7ru/image/upload/c_pad,b_rgb:0A1E3D,w_800,h_500,q_auto,f_auto/v1781706372/Crop_rounded_big_zgkob2.png',
    type: 'Cultural Conference',
    highlights: [
      'Indigenous knowledge keepers from North and South America',
      'Cultural heritage preservation experts',
      'UNESCO and ICCROM representatives',
      'Community resilience practitioners',
      'Artists and cultural innovators',
      'Youth cultural ambassadors'
    ],
    themes: [
      'Indigenous-Led Climate Adaptation in the Americas',
      'Cultural Heritage Preservation Across Borders',
      'Arts and Community Healing After Global Shocks',
      'Traditional Knowledge and Modern Science Integration',
      'Intergenerational Knowledge Transfer and Youth Engagement',
      'Cultural Resilience and Food Sovereignty'
    ],
    isFeatured: true
  },
  {
    id: 'neabec-2026',
    unconfirmed: true, // see PLACEHOLDERS.md
    title: 'Nordic East Africa Business Economic Cooperation (NEABEC) 2026',
    date: '2026-04-20', // April 2026 - now past (today is May 2026)
    displayDate: 'April 2026',
    location: 'Helsinki, Finland',
    description: 'A groundbreaking regional summit focusing on Fintech and Technology Transfer, Education, Business Trade & Investments between the Global North and Global South, with a specific focus on East Africa and the Nordic countries. This summit will facilitate partnerships, investment opportunities, and knowledge exchange between two dynamic regions.',
    shortDescription: 'Regional summit focusing on Fintech and Technology Transfer, Education, Business Trade & investments between the Global North and Global South.',
    image: '',
    type: 'Business Summit',
    highlights: [
      'Nordic business leaders and investors',
      'East African entrepreneurs and innovators',
      'Fintech and technology companies',
      'Government trade representatives',
      'Academic and research institutions'
    ],
    themes: [
      'Fintech Innovation and Financial Inclusion',
      'Technology Transfer and Capacity Building',
      'Education Partnerships',
      'Trade and Investment Opportunities',
      'Sustainable Business Practices'
    ],
    isFeatured: true
  },
  {
    id: 'global-resilience-conference-2026',
    unconfirmed: true, // see PLACEHOLDERS.md
    title: 'Global Shocks Global Resilience Conference 2026',
    date: '2026-09-01',
    displayDate: 'September 2026',
    location: 'Canada (City TBA)',
    description: 'Building on the success of our Post-COVID conference series, this international conference will address the full spectrum of global shocks and develop comprehensive resilience strategies. The conference will feature intensive workshops, panel discussions, and strategic planning sessions focused on pandemic preparedness, climate adaptation, economic stability, and social cohesion.',
    shortDescription: 'Building on the Post-COVID conference series, addressing global shocks and developing comprehensive resilience strategies.',
    image: '',
    type: 'International Conference',
    highlights: [
      'Global health experts',
      'Climate scientists and policy makers',
      'Economic resilience specialists',
      'Community development leaders',
      'International organization representatives'
    ],
    themes: [
      'Pandemic Preparedness and Response',
      'Climate Adaptation Strategies',
      'Economic Shock Absorption',
      'Social Cohesion and Community Resilience',
      'International Cooperation Frameworks'
    ],
    isFeatured: false
  },

  // ==================== NOVEMBER 2026 (real engagements with photo albums) ====================
  {
    id: 'greater-sudbury-mining-ecosystem-2026',
    title: 'Trip to the Mining Capital of Canada: the Greater Sudbury Mining Ecosystem',
    date: '2026-11-05',
    displayDate: 'November 2026',
    location: 'Greater Sudbury, Ontario, Canada',
    description: "LDII's trip to Greater Sudbury, the mining capital of Canada, to engage with its mining ecosystem: site and facility visits, meetings with hosts and partners, and exchanges on mining expertise.",
    shortDescription: 'Site and facility visits and meetings with the mining ecosystem of Greater Sudbury, the mining capital of Canada.',
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_800,h_500,q_auto,f_auto/WhatsApp_Image_2026-11-12_at_19.43.21_oegqfu.jpg',
    type: 'Mission',
    linkUrl: '/events/gallery/greater-sudbury-mining-ecosystem-2026',
    linkLabel: 'See the photos',
    isFeatured: true
  },
  {
    id: 'canada-south-africa-economic-outlook-2026',
    title: 'Canada and South Africa: Economic Outlook, Trade Opportunity and the Road to Market Access',
    date: '2026-11-04',
    displayDate: 'November 2026',
    location: 'Canada',
    description: 'A seminar on the economic outlook between Canada and South Africa, the trade opportunities it opens and the road to market access, bringing participants together for presentations, discussion and networking.',
    shortDescription: 'A seminar on the Canada–South Africa economic outlook, trade opportunities and the road to market access.',
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_800,h_500,q_auto,f_auto/untitled-6585_1_cnqwkm.jpg',
    type: 'Seminar',
    linkUrl: '/events/gallery/canada-south-africa-economic-outlook-2026',
    linkLabel: 'See the photos',
    isFeatured: true
  },
  {
    id: 'angola-diplomatic-engagement-2025',
    title: 'Angola Diplomatic Engagement',
    date: '2025-06-01',
    displayDate: '2025',
    location: 'Canada',
    description: 'A diplomatic engagement with representatives of Angola, strengthening ties between LDII, Angola and Canada.',
    shortDescription: 'A diplomatic engagement with representatives of Angola.',
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_800,h_500,q_auto,f_auto/Angola_Diplomatic_Engagement_2_jmvzbi.jpg',
    type: 'Diplomatic',
    linkUrl: '/events/gallery/angola-diplomatic-engagement-2025',
    linkLabel: 'See the photos',
    isFeatured: false
  },

  // ==================== PAST EVENTS ====================
  // These automatically show in Past Events when their date is before today

  {
    id: 'postcovid-2nd-2024',
    title: '2nd International Post-COVID-19 Conference',
    date: '2025-09-08',
    displayDate: 'September 8–10, 2025',
    location: 'Brampton, Ontario, Canada',
    venue: 'Pearson Convention Centre',
    description: 'Economic Damages from Global Shocks: Building Resilience for the Future.\n\nGlobal shocks such as pandemics, natural disasters and financial crises can have far-reaching and devastating effects on economies around the world. Their impact cuts across trade, finance and industry, leading to widespread job losses, slower economic growth and rising poverty.\n\nMeasuring the full extent of this damage is difficult because these shocks are complex and interconnected. At the Pearson Convention Centre in Brampton, the 2nd International Post-COVID-19 Conference brought together partners, policymakers, researchers and community leaders. They examined these effects, shared lessons from the pandemic and explored practical paths toward recovery and long-term resilience.\n\nOver three days, discussions focused on how communities, businesses and institutions can better prepare for and respond to future shocks. The goal was to protect livelihoods and strengthen partnerships across borders.\n\nLocal Impact. Global Partnerships.',
    shortDescription: 'Economic damages from global shocks and building resilience for the future — partners, policymakers, researchers and community leaders in Brampton, Ontario.',
    speakersPhoto: {
      url: 'https://res.cloudinary.com/dzppzxpad/image/upload/f_auto,q_auto,w_1400/v1792547513/WhatsApp_Image_2026-10-19_at_16.26.00mnbvcx_vjgns5.jpg',
      caption: 'Speakers and panellists, 2nd International Post-COVID-19 Conference · Pearson Convention Centre, Brampton, Ontario · September 8–10, 2025',
    },
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_800,h_500,q_auto,f_auto/General_aiu2gv.jpg',
    type: 'Conference',
    isFeatured: true
  },
  {
    id: 'covid-remembrance-parade-2023',
    title: 'COVID-19 Remembrance Parade & Candlelight Vigil',
    date: '2023-10-01',
    displayDate: 'October 1, 2023',
    location: 'Toronto, ON, Canada',
    venue: 'Christie Pits Park',
    description: 'The world’s first COVID-19 Remembrance Parade and Candlelight Vigil, organized by LDII under the theme “Walking for Humanity, Healing, and Compassion, with Unity, Hope, and Renewal Beyond COVID-19.” Participants representing nations from around the world walked from Christie Pits Park, led by St. Andrews Pipes & Drums, before a candlelight vigil.',
    shortDescription: 'The world’s first COVID-19 remembrance parade and candlelight vigil, Toronto.',
    image: 'https://image.mux.com/QKbLbZRHUvy005DYmhnQUBaYH2FJGlXdOXr00pHFtdAXw/thumbnail.jpg?width=800&height=500&fit_mode=smartcrop&time=30',
    type: 'Remembrance',
    linkUrl: '/events/news#covid-remembrance-parade-2023',
    linkLabel: 'Watch the film and read the story',
    isFeatured: true,
  },
  {
    id: 'postcovid-1st-2024',
    title: '1st International Post-COVID Conference',
    date: '2024-07-11',
    displayDate: 'July 11–13, 2024',
    location: 'Toronto, ON, Canada',
    venue: 'Metro Toronto Convention Centre',
    description: "LDII's inaugural international conference, held at the Metro Toronto Convention Centre from July 11 to 13, 2024, under the theme Evaluating the Impact of COVID-19 on Humanity: Building Synergies and Resilience for Future Global Shocks. The Intergovernmental Authority on Development (IGAD) took part as co-convener and co-organizer, and delegates came from African Union member states, regional blocs and Canadian universities.",
    shortDescription: "LDII's inaugural international conference: Building Synergies and Resilience for Future Global Shocks.",
    image: 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_800,h_500,q_auto,f_auto/WhatsApp_Image_2026-05-25_at_3.59.39_PM_k4yy3g.jpg',
    type: 'Conference',
    linkUrl: '/events/gallery/1st-international-post-covid-conference-toronto-2024',
    linkLabel: 'See the photos',
    isFeatured: true
  },
];

// ============================================================
// UTILITY FUNCTIONS - Auto-filter upcoming vs past events
// ============================================================

/**
 * Get today's date for comparison
 */
export function getToday(): Date {
  return new Date();
}

/**
 * Get all upcoming events (date >= today)
 * Events are sorted by date (soonest first)
 */
export function getUpcomingEvents(): EventItem[] {
  const today = getToday();
  return allEvents
    .filter(event => new Date(event.date) >= today && !event.unconfirmed)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Get all past events (date < today)
 * Events are sorted by date (most recent first)
 */
export function getPastEvents(): EventItem[] {
  const today = getToday();
  return allEvents
    .filter(event => new Date(event.date) < today && !event.unconfirmed)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get featured events only (upcoming and past)
 */
export function getFeaturedEvents(): EventItem[] {
  return allEvents.filter(event => event.isFeatured && !event.unconfirmed);
}

/**
 * Get a single event by its ID
 */
export function getEventById(id: string): EventItem | undefined {
  return allEvents.find(event => event.id === id);
}