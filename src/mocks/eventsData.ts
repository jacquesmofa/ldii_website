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
  isFeatured?: boolean;
}

// ============================================================
// ALL EVENTS DATA - Add new events here
// ============================================================
export const allEvents: EventItem[] = [
  // ==================== UPCOMING EVENTS ====================
  // NOTE: These are auto-detected as upcoming if their date is >= today
  // Adjust the `date` field when exact dates are confirmed

  {
    id: 'global-south-conference-2026',
    title: 'Global Shocks Global South Conference 2026',
    date: '2026-09-15', // Set to mid-September when exact date is confirmed
    displayDate: 'TBA 2026',
    location: 'To Be Announced',
    description: 'Our premier international conference addressing systemic global challenges and building resilience strategies specifically for Global South nations. This landmark event will bring together heads of state, policy makers, researchers, and community leaders from across Africa, Asia, and Latin America to develop comprehensive frameworks for addressing interconnected global shocks including climate change, economic instability, health crises, and food insecurity.',
    shortDescription: 'Premier international conference addressing systemic global challenges and building resilience strategies specifically for Global South nations.',
    image: 'https://readdy.ai/api/search-image?query=Large%20international%20conference%20venue%20with%20Global%20South%20delegates%20and%20speakers%20from%20Africa%20Asia%20Latin%20America%2C%20professional%20event%20setup%20with%20multiple%20screens%20and%20stage%2C%20diverse%20multicultural%20audience%2C%20high-resolution%20photography%20with%20excellent%20lighting&width=800&height=500&seq=global-south-conf&orientation=landscape',
    type: 'Major Conference',
    attendees: '1000+ expected',
    highlights: [
      'Heads of state and government ministers',
      'Leading researchers and academics',
      'Civil society and NGO leaders',
      'Private sector innovators',
      'Youth delegates from 50+ countries'
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
    date: '2026-11-10', // Set to mid-November when exact date is confirmed
    displayDate: 'November 2026',
    location: 'Sydney, Australia',
    description: 'Exploring the vital role of cultural heritage and traditional knowledge in building community resilience and sustainable development. This unique conference brings together cultural practitioners, indigenous leaders, researchers, and policy makers to examine how cultural assets can strengthen community resilience against global shocks while preserving invaluable heritage for future generations.',
    shortDescription: 'Exploring the role of cultural heritage and traditional knowledge in building community resilience and sustainable development.',
    image: 'https://readdy.ai/api/search-image?query=Cultural%20conference%20with%20traditional%20elements%20from%20diverse%20cultures%2C%20indigenous%20leaders%20and%20cultural%20practitioners%2C%20modern%20conference%20facility%20with%20cultural%20decorations%2C%20professional%20event%20photography%20with%20vibrant%20colors&width=800&height=500&seq=cultural-conf&orientation=landscape',
    type: 'Cultural Conference',
    attendees: '500+ expected',
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
    title: 'Cultural Resilience One Planet Conference (CROP) 2027',
    date: '2027-11-15', // Set to mid-November when exact date is confirmed
    displayDate: 'November 2027',
    location: 'Ontario, Canada',
    description: 'Building on the success of CROP 2026 in Australia, this conference brings together cultural heritage practitioners, indigenous leaders, and resilience experts to explore how cultural identity and traditional knowledge strengthen community resilience across the Americas. This landmark event in Ontario will examine cultural preservation strategies, indigenous-led climate adaptation, and the role of arts in healing communities affected by global shocks.',
    shortDescription: 'Building on CROP 2026 Australia, exploring cultural identity and traditional knowledge in strengthening community resilience across the Americas.',
    image: 'https://readdy.ai/api/search-image?query=Cultural%20resilience%20conference%20in%20Ontario%20Canada%20with%20indigenous%20leaders%20and%20cultural%20practitioners%2C%20modern%20Canadian%20conference%20venue%20with%20multicultural%20elements%2C%20traditional%20and%20contemporary%20cultural%20fusion%2C%20professional%20event%20photography%20with%20warm%20autumn%20atmosphere&width=800&height=500&seq=cultural-canada-2027&orientation=landscape',
    type: 'Cultural Conference',
    attendees: '600+ expected',
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
    title: 'Nordic East Africa Business Economic Cooperation (NEABEC) 2026',
    date: '2026-04-20', // April 2026 - now past (today is May 2026)
    displayDate: 'April 2026',
    location: 'Helsinki, Finland',
    description: 'A groundbreaking regional summit focusing on Fintech and Technology Transfer, Education, Business Trade & Investments between the Global North and Global South, with a specific focus on East Africa and the Nordic countries. This summit will facilitate partnerships, investment opportunities, and knowledge exchange between two dynamic regions.',
    shortDescription: 'Regional summit focusing on Fintech and Technology Transfer, Education, Business Trade & investments between the Global North and Global South.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20business%20conference%20in%20Helsinki%20Finland%20with%20Nordic%20and%20African%20business%20leaders%2C%20fintech%20and%20technology%20summit%2C%20professional%20business%20networking%20event%2C%20contemporary%20Scandinavian%20venue%2C%20high-quality%20business%20photography&width=800&height=500&seq=neabec-conf&orientation=landscape',
    type: 'Business Summit',
    attendees: '300+ expected',
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
    title: 'Global Shocks Global Resilience Conference 2026',
    date: '2026-09-01',
    displayDate: 'September 2026',
    location: 'Canada (City TBA)',
    description: 'Building on the success of our Post-COVID conference series, this international conference will address the full spectrum of global shocks and develop comprehensive resilience strategies. The conference will feature intensive workshops, panel discussions, and strategic planning sessions focused on pandemic preparedness, climate adaptation, economic stability, and social cohesion.',
    shortDescription: 'Building on the Post-COVID conference series, addressing global shocks and developing comprehensive resilience strategies.',
    image: 'https://readdy.ai/api/search-image?query=International%20conference%20in%20modern%20Canadian%20convention%20center%20with%20diverse%20global%20delegates%2C%20resilience%20and%20preparedness%20themes%2C%20professional%20conference%20setup%2C%20multicultural%20audience%2C%20high-resolution%20event%20photography&width=800&height=500&seq=resilience-conf&orientation=landscape',
    type: 'International Conference',
    attendees: '500+ expected',
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
  {
    id: 'youth-leadership-summit-2025',
    title: 'Youth Leadership Summit 2025',
    date: '2025-07-15',
    displayDate: 'July 15-17, 2025',
    location: 'Toronto, Ontario, Canada',
    description: 'Annual gathering of young leaders from around the world to develop leadership skills, build networks, and create action plans for addressing global challenges. This summit provides intensive training, mentorship opportunities, and platforms for youth-led initiatives.',
    shortDescription: 'Annual gathering of young leaders to develop leadership skills, build networks, and create action plans for global challenges.',
    image: 'https://readdy.ai/api/search-image?query=Youth%20leadership%20summit%20with%20diverse%20young%20leaders%20from%20different%20countries%2C%20leadership%20training%20and%20workshops%2C%20inspiring%20conference%20atmosphere%2C%20young%20professionals%20networking%2C%20professional%20event%20photography&width=800&height=500&seq=youth-summit&orientation=landscape',
    type: 'Youth Summit',
    attendees: '200+ expected',
    highlights: [
      'Young leaders aged 18-35',
      'Mentors and established leaders',
      'Social entrepreneurs',
      'Policy advocates',
      'Community organizers'
    ],
    themes: [
      'Leadership Development',
      'Social Entrepreneurship',
      'Policy Advocacy',
      'Community Organizing',
      'Cross-Cultural Collaboration'
    ],
    isFeatured: false
  },
  {
    id: 'women-economic-empowerment-2025',
    title: 'Women\'s Economic Empowerment Forum 2025',
    date: '2025-10-08',
    displayDate: 'October 8-10, 2025',
    location: 'Nairobi, Kenya',
    description: 'Celebrating and advancing women\'s economic empowerment across Africa and beyond. This forum brings together women entrepreneurs, business leaders, policy makers, and development practitioners to share success stories, address challenges, and create pathways for greater economic participation.',
    shortDescription: 'Celebrating and advancing women\'s economic empowerment across Africa and beyond.',
    image: 'https://readdy.ai/api/search-image?query=Women%20economic%20empowerment%20forum%20with%20successful%20African%20women%20entrepreneurs%20and%20business%20leaders%2C%20professional%20conference%20in%20Nairobi%2C%20women%20in%20business%20networking%2C%20inspiring%20atmosphere%2C%20high-quality%20event%20photography&width=800&height=500&seq=women-forum&orientation=landscape',
    type: 'Regional Forum',
    attendees: '400+ expected',
    highlights: [
      'Women entrepreneurs and business owners',
      'Women in leadership positions',
      'Microfinance and investment experts',
      'Policy makers and advocates',
      'Development practitioners'
    ],
    themes: [
      'Access to Finance and Capital',
      'Business Skills and Mentorship',
      'Policy Advocacy for Women',
      'Technology and Digital Business',
      'Work-Life Balance and Support Systems'
    ],
    isFeatured: false
  },

  // ==================== PAST EVENTS ====================
  // These automatically show in Past Events when their date is before today

  {
    id: 'postcovid-2nd-2024',
    title: '2nd International Post-COVID Conference',
    date: '2024-09-08',
    displayDate: 'September 8-10, 2024',
    location: 'Brampton, ON, Canada',
    venue: 'Pearson Convention Centre',
    description: 'Theme: Building Planetary Health in Response to Global Shocks. This landmark conference convened over 500 delegates from 40+ countries to address critical post-pandemic recovery challenges. The conference focused on four key questions: When will the next shock hit the world? As AI takes over, how safe is humanity? What is the future of local, regional, and international trade? Who shall feed the world?',
    shortDescription: '500+ delegates from 40+ countries. Building Planetary Health in Response to Global Shocks.',
    image: 'https://readdy.ai/api/search-image?query=Large%20international%20conference%20with%20500%20diverse%20delegates%20from%20multiple%20countries%20in%20modern%20convention%20center%2C%20professional%20conference%20hall%20with%20stage%20and%20screens%2C%20global%20summit%20atmosphere%2C%20high-resolution%20event%20photography&width=800&height=500&seq=postcovid-2024&orientation=landscape',
    type: 'Conference',
    attendees: '500+ delegates',
    countries: '40+ countries',
    outcomes: [
      'Brampton Declaration on Global Resilience adopted by 35 nations',
      'International Post-COVID Recovery Network established',
      '$50 million in funding commitments secured',
      '20 comprehensive policy recommendations developed',
      '35 new international partnerships formed',
      'Global Health Resilience Framework launched'
    ],
    speakers: [
      { name: 'Dr. Tedros Adhanom', role: 'WHO Director-General (Video Message)' },
      { name: 'Hon. Patrick Brown', role: 'Mayor of Brampton' },
      { name: 'Dr. Sarah Johnson', role: 'Global Health Expert' },
      { name: 'Prof. Michael Chen', role: 'Climate Resilience Researcher' }
    ],
    resources: [
      { title: 'Conference Report', type: 'PDF', size: '8.5 MB' },
      { title: 'Brampton Declaration', type: 'PDF', size: '2.1 MB' },
      { title: 'Policy Recommendations', type: 'PDF', size: '4.3 MB' },
      { title: 'Photo Gallery', type: 'Link', size: '150+ photos' }
    ],
    isFeatured: true
  },
  {
    id: 'postcovid-1st-2024',
    title: '1st International Post-COVID Conference',
    date: '2024-07-15',
    displayDate: 'July 15-17, 2024',
    location: 'Toronto, ON, Canada',
    venue: 'Metro Toronto Convention Centre',
    description: 'The groundbreaking inaugural conference that launched our global platform for post-pandemic recovery dialogue. This event established LDII as a leading voice in international resilience building, bringing together distinguished delegates for intensive workshops, panel discussions, and strategic planning sessions.',
    shortDescription: 'The groundbreaking inaugural conference that launched our global platform for post-pandemic recovery dialogue.',
    image: 'https://readdy.ai/api/search-image?query=International%20conference%20with%20300%20diverse%20delegates%20in%20Toronto%20convention%20center%2C%20inaugural%20event%20atmosphere%2C%20professional%20conference%20setup%2C%20multicultural%20audience%20engagement%2C%20high-resolution%20photography&width=800&height=500&seq=postcovid-2024-1&orientation=landscape',
    type: 'Conference',
    attendees: '300+ delegates',
    countries: '25 countries',
    outcomes: [
      'Toronto Framework for Post-Pandemic Recovery launched',
      '15 specialized working groups formed',
      'Multi-stakeholder partnership agreements signed',
      'Research collaboration network established',
      'Youth engagement program initiated'
    ],
    speakers: [
      { name: 'Dr. Amara Okafor', role: 'LDII Executive Director' },
      { name: 'Prof. David Kim', role: 'Economic Recovery Expert' },
      { name: 'Dr. Fatima Al-Rashid', role: 'Public Health Specialist' },
      { name: 'James Rodriguez', role: 'Climate Policy Advisor' }
    ],
    resources: [
      { title: 'Conference Proceedings', type: 'PDF', size: '6.2 MB' },
      { title: 'Toronto Framework', type: 'PDF', size: '3.5 MB' },
      { title: 'Working Group Reports', type: 'PDF', size: '5.8 MB' }
    ],
    isFeatured: true
  },
  {
    id: 'african-leadership-forum-2024',
    title: 'African Leadership Forum 2024',
    date: '2024-03-10',
    displayDate: 'March 10-12, 2024',
    location: 'Accra, Ghana',
    venue: 'Accra International Conference Centre',
    description: 'Regional forum bringing together African leaders to discuss continental challenges and develop collaborative solutions. The forum focused on African-led approaches to climate adaptation, economic development, health systems strengthening, and youth empowerment.',
    shortDescription: 'Regional forum bringing together African leaders to discuss continental challenges and develop collaborative solutions.',
    image: 'https://readdy.ai/api/search-image?query=African%20leadership%20forum%20with%20diverse%20African%20leaders%20and%20delegates%20in%20modern%20conference%20center%20in%20Accra%20Ghana%2C%20professional%20event%20with%20African%20cultural%20elements%2C%20high-quality%20event%20photography&width=800&height=500&seq=africa-forum-2024&orientation=landscape',
    type: 'Forum',
    attendees: '200+ leaders',
    countries: '30 African nations',
    outcomes: [
      'African Resilience Charter adopted',
      '12 bilateral cooperation agreements signed',
      'Pan-African Youth Leadership Program launched',
      'Climate Adaptation Fund for Africa proposed',
      'Health Systems Collaboration Network established'
    ],
    speakers: [
      { name: 'H.E. Nana Akufo-Addo', role: 'President of Ghana (Opening Address)' },
      { name: 'Dr. Ngozi Okonjo-Iweala', role: 'WTO Director-General (Video Message)' },
      { name: 'Prof. Wangari Maathai Foundation', role: 'Environmental Leadership' }
    ],
    resources: [
      { title: 'Forum Report', type: 'PDF', size: '5.4 MB' },
      { title: 'African Resilience Charter', type: 'PDF', size: '1.8 MB' },
      { title: 'Photo Gallery', type: 'Link', size: '100+ photos' }
    ],
    isFeatured: false
  },
  {
    id: 'climate-action-summit-2023',
    title: 'Climate Action Summit 2023',
    date: '2023-11-05',
    displayDate: 'November 5-7, 2023',
    location: 'Nairobi, Kenya',
    venue: 'Kenyatta International Convention Centre',
    description: 'Intensive summit focused on climate adaptation and mitigation strategies for African communities. The summit brought together climate scientists, policy makers, community leaders, and youth activists to develop actionable climate resilience plans.',
    shortDescription: 'Intensive summit focused on climate adaptation and mitigation strategies for African communities.',
    image: 'https://readdy.ai/api/search-image?query=Climate%20action%20summit%20in%20Nairobi%20Kenya%20with%20environmental%20experts%20and%20community%20leaders%2C%20sustainable%20development%20conference%2C%20climate-focused%20event%20with%20African%20delegates%2C%20professional%20photography&width=800&height=500&seq=climate-summit-2023&orientation=landscape',
    type: 'Summit',
    attendees: '250+ participants',
    countries: '20 countries',
    outcomes: [
      'Nairobi Climate Action Plan developed',
      'Community-based adaptation toolkit launched',
      '500,000 tree planting commitment secured',
      'Climate finance mobilization strategy adopted',
      'Youth Climate Ambassador Program initiated'
    ],
    speakers: [
      { name: 'Dr. Richard Munang', role: 'UNEP Africa Climate Change Expert' },
      { name: 'Vanessa Nakate', role: 'Climate Activist' },
      { name: 'Prof. Sunita Narain', role: 'Environmental Researcher' }
    ],
    resources: [
      { title: 'Summit Report', type: 'PDF', size: '4.7 MB' },
      { title: 'Climate Action Toolkit', type: 'PDF', size: '3.2 MB' }
    ],
    isFeatured: false
  },
  {
    id: 'digital-innovation-conference-2023',
    title: 'Digital Innovation Conference 2023',
    date: '2023-08-20',
    displayDate: 'August 20-22, 2023',
    location: 'Kigali, Rwanda',
    venue: 'Kigali Convention Centre',
    description: 'Conference exploring digital transformation and innovation for sustainable development. The event showcased successful tech startups, discussed digital inclusion strategies, and launched new innovation hub partnerships.',
    shortDescription: 'Conference exploring digital transformation and innovation for sustainable development.',
    image: 'https://readdy.ai/api/search-image?query=Digital%20innovation%20conference%20in%20Kigali%20Rwanda%20with%20tech%20entrepreneurs%20and%20innovators%2C%20modern%20technology%20event%2C%20startup%20showcase%2C%20professional%20technology%20photography&width=800&height=500&seq=digital-conf-2023&orientation=landscape',
    type: 'Conference',
    attendees: '300+ participants',
    countries: '15 countries',
    outcomes: [
      '3 new innovation hubs announced',
      'Digital Skills Training Program launched',
      '$5 million startup fund established',
      'Tech mentorship network created',
      '50 startup pitches showcased'
    ],
    speakers: [
      { name: 'Dr. Clare Akamanzi', role: 'Rwanda Development Board CEO' },
      { name: 'Juliana Rotich', role: 'Tech Entrepreneur & Investor' },
      { name: 'Iyinoluwa Aboyeji', role: 'Andela Co-founder' }
    ],
    resources: [
      { title: 'Conference Proceedings', type: 'PDF', size: '5.1 MB' },
      { title: 'Startup Directory', type: 'PDF', size: '2.8 MB' }
    ],
    isFeatured: false
  }
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
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Get all past events (date < today)
 * Events are sorted by date (most recent first)
 */
export function getPastEvents(): EventItem[] {
  const today = getToday();
  return allEvents
    .filter(event => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get featured events only (upcoming and past)
 */
export function getFeaturedEvents(): EventItem[] {
  return allEvents.filter(event => event.isFeatured);
}

/**
 * Get a single event by its ID
 */
export function getEventById(id: string): EventItem | undefined {
  return allEvents.find(event => event.id === id);
}