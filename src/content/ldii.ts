/**
 * LDII: single source of truth for facts, copy and photo picks.
 * Every page reads from here so numbers, names and contact details can never drift apart.
 * Copy comes from the CEO's documents (About Us, International Focus brief, Local Programmes,
 * Newcomer Settlement, operational framework email, Nov 2026). Do not add figures that are not
 * confirmed by LDII: list them in PLACEHOLDERS.md instead.
 */

/** Cloudinary photo from LDII's own library (cloud dzppzxpad), sized and cropped on the fly. */
export const photo = (id: string, w = 1200, h?: number, gravity = 'auto') =>
  `https://res.cloudinary.com/dzppzxpad/image/upload/${h ? `c_fill,g_${gravity},w_${w},h_${h}` : `c_limit,w_${w}`},q_auto,f_auto/${id}`;

export const ORG = {
  name: 'Livelihood Development International Initiatives',
  short: 'LDII',
  tagline: 'Local Impact, Global Partnerships.',
  promise: 'Empowering People. Strengthening Communities. Connecting the World.',
  experience: 'over 10 years',
  hq: 'Toronto, Ontario',
  president: 'Ronald Lwabaayi',
  email: 'admin@ldiinitiatives.org',
  phone: '+1 647 656 3026',
  phoneHref: 'tel:+16476563026',
  address: '3701 Chesswood Drive, Unit 315, Toronto, ON M3J 2P6',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=3701+Chesswood+Drive+Unit+315+Toronto+ON+M3J+2P6',
  url: 'https://ldiinitiatives.org',
  socials: [
    { label: 'Facebook', icon: 'ri-facebook-fill', href: 'https://www.facebook.com/ldiinitiatives' },
    { label: 'LinkedIn', icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/company/ldiinitiatives' },
    { label: 'X', icon: 'ri-twitter-x-line', href: 'https://x.com/ldiinitiatives' },
    { label: 'Instagram', icon: 'ri-instagram-line', href: 'https://www.instagram.com/ldiinitiatives' },
    { label: 'YouTube', icon: 'ri-youtube-fill', href: 'https://www.youtube.com/@ldiinitiatives' },
  ],
};

export const MISSION =
  'Livelihood Development International Initiatives is a nonprofit organization with a social enterprise committed to creating a brighter future that promotes social cohesion and human empowerment. We empower local and global communities to thrive amidst systemic crises through transformative leadership, development, innovative research, strategic partnership and human capital development that build resilience against global shocks.';

export const ABOUT = [
  'Livelihood Development International Initiatives (LDII) is a Canadian nonprofit organization with a social enterprise approach and over 10 years of experience, headquartered in Toronto, Ontario. We are dedicated to improving livelihoods, empowering individuals, strengthening communities, and advancing inclusive and sustainable development locally and internationally.',
  'LDII serves as a platform for collaboration, bringing together communities, universities, colleges, research institutions, governments, diplomatic missions, businesses, civil society organizations, and development partners to address pressing social, economic, and environmental challenges.',
  'Through community-based initiatives, education, research collaboration, international conferences, institutional capacity building, technology transfer, scholarship opportunities, and knowledge exchange, we seek to bridge gaps in access to knowledge, resources, and opportunities.',
  'Our work encompasses community empowerment, education, healthcare, climate action, food security, innovation, economic development, and institutional strengthening. We promote practical solutions and strategic partnerships that respond to emerging challenges while supporting long-term community wellbeing and resilience.',
  'LDII advances its work through two complementary programme areas: Local Community Development & Empowerment and International Partnerships & Knowledge Exchange. Through these programmes, we connect people, institutions, expertise, and opportunities across Canada and internationally, fostering meaningful collaboration between the Global North and Global South.',
  'We believe sustainable development is achieved when communities are empowered, institutions are strengthened, and knowledge is transformed into meaningful action. Through inclusive engagement, innovation, and collaborative partnerships, LDII strives to create lasting opportunities, strengthen resilience, and contribute to a more equitable, prosperous, and sustainable future.',
];

/** The six core areas named in the CEO's brief. */
export const CORE_AREAS = [
  { title: 'Youth Empowerment', icon: 'ri-seedling-line' },
  { title: 'Global North–Global South Strategic Partnerships', icon: 'ri-earth-line' },
  { title: 'Climate Resilience & Environmental Sustainability', icon: 'ri-leaf-line' },
  { title: 'Health Systems Strengthening & Pandemic Preparedness', icon: 'ri-heart-pulse-line' },
  { title: 'Sustainable Food Systems & Food Security', icon: 'ri-plant-line' },
  { title: 'Economic Stability & Trade Development', icon: 'ri-exchange-funds-line' },
];

/** Operational framework, from Ronald Lwabaayi's email to the web team (29 Sept 2026). */
export const FRAMEWORK = [
  {
    title: 'Driving Investment & Strategic Partnerships',
    icon: 'ri-hand-coin-line',
    points: [
      'Mobilizing capital: partnering with the private sector, academic institutions and industry leaders to fund community projects and local businesses.',
      'Global trade networks: facilitating cross-border enterprise and diaspora trade to connect local entrepreneurs with international markets.',
    ],
  },
  {
    title: 'Grassroots Entrepreneurship & Economic Inclusion',
    icon: 'ri-store-2-line',
    points: [
      'Social enterprise support: seed funding, incubation and mentorship for small businesses and social ventures.',
      'Digital and financial literacy: technology access, skills training and workforce development that support income generation.',
    ],
  },
  {
    title: 'Climate & Sustainable Food Resilience',
    icon: 'ri-plant-line',
    points: [
      'Agricultural innovation: supporting climate-smart agriculture and sustainable food systems that protect farming livelihoods.',
      'Reforestation and ecosystem protection: coordinating environmental initiatives, including tree planting, to restore ecosystems.',
    ],
  },
  {
    title: 'Policy Advocacy & Knowledge Sharing',
    icon: 'ri-government-line',
    points: [
      'International forums: convening policymakers, corporate leaders and non-profits to advance solutions for poverty reduction.',
      'Health and infrastructure systems: strengthening local health systems and community infrastructure for long-term stability.',
    ],
  },
];

// ---------------------------------------------------------------------------
// INTERNATIONAL FOCUS (copy exactly as in the "International Focus Page" brief)
// ---------------------------------------------------------------------------
export const INTERNATIONAL = {
  title: 'International Focus',
  tagline: 'Building Global Resilience. Advancing Innovation. Creating Sustainable Opportunities.',
  intro:
    'Climate change, health emergencies, food insecurity and economic instability are interconnected, and so are their solutions. LDII bridges knowledge and resource gaps between the Global North and Global South, so that institutions and communities can work together on lasting social, economic and environmental progress.',
  principles: [
    { title: 'Knowledge Exchange & Research', text: 'Sharing research, expertise and proven practices across countries and sectors.', icon: 'ri-book-open-line' },
    { title: 'Technology Transfer & Innovation', text: 'Improving access to appropriate technologies and technical expertise.', icon: 'ri-cpu-line' },
    { title: 'Capacity Building', text: 'Strengthening leadership, professional skills and institutional effectiveness.', icon: 'ri-building-4-line' },
    { title: 'Partnerships & Resource Mobilization', text: 'Connecting partners and resources to collaborative initiatives.', icon: 'ri-links-line' },
    { title: 'Inclusive Development', text: 'Putting the needs of disadvantaged communities at the centre.', icon: 'ri-team-line' },
  ],
  delivery: 'We deliver these through conferences, workshops, policy dialogues, research collaborations and professional exchanges.',
  stakeholders: [
    'Universities and colleges',
    'Research institutions',
    'Governments and diplomatic missions',
    'Healthcare institutions',
    'Businesses and investors',
    'International organizations',
    'Community stakeholders',
  ],
  areas: [
    {
      slug: 'climate',
      title: 'Climate Action & Environmental Resilience',
      tagline: 'Protecting Communities. Safeguarding Our Planet.',
      summary:
        'Climate and environmental crises threaten livelihoods, food security and economic stability, and they hit vulnerable populations hardest. We help communities and institutions anticipate, withstand and recover from them.',
      bullets: [
        'Climate change adaptation and mitigation',
        'Disaster preparedness and community resilience',
        'Drought, water scarcity and sustainable water management',
        'Biodiversity conservation and ecosystem restoration',
        'Climate education, with a focus on women, children and marginalized communities',
      ],
      icon: 'ri-leaf-line',
      image: 'WhatsApp_Image_2026-11-12_at_19.43.21_2_oirpuf',
      imageAlt: 'The LDII delegation outdoors in Greater Sudbury, a city known worldwide for its regreening',
    },
    {
      slug: 'mining',
      title: 'Mining Innovation & Sustainable Resource Development',
      tagline: 'Connecting Global Expertise. Empowering Sustainable Development.',
      summary:
        'We partner with Canadian universities, colleges, mining companies and technology providers to give mining professionals from the Global South access to modern expertise and practical training.',
      bullets: [
        'Specialized training for engineers, technicians and researchers',
        'Modern exploration and extraction technologies',
        'Environmental management and mine rehabilitation',
        'Occupational health and safety',
        'Responsible investment in the mining sector',
      ],
      icon: 'ri-hammer-line',
      image: 'WhatsApp_Image_2026-11-12_at_19.43.21_oegqfu',
      imageAlt: 'The LDII delegation underground in hard hats during the Greater Sudbury mining visit',
      link: { href: '/programs/mining-technology-exchange', label: 'Africa–Canada Mining & Technology Transfer Mission' },
    },
    {
      slug: 'trade',
      title: 'International Trade & Economic Empowerment',
      tagline: 'Connecting Markets. Expanding Opportunity.',
      summary:
        'Tariffs, trade wars and supply-chain disruptions fall hardest on developing economies and small businesses. We promote inclusive trade frameworks that build long-term stability.',
      bullets: [
        'Trade diplomacy and policy dialogue',
        'Fair trade and equitable market access',
        'Economic diversification and trade resilience',
        'Sustainable, resilient supply chains',
        'Business forums and cross-border investment partnerships',
      ],
      icon: 'ri-exchange-funds-line',
      image: 'untitled-6617_1_iqswnj',
      imageAlt: 'Delegates before the Canadian and South African flags at the Canada–South Africa economic outlook seminar',
    },
    {
      slug: 'health',
      title: 'Global Health & Pandemic Preparedness',
      tagline: 'Strengthening Health Systems. Advancing Health Equity.',
      summary:
        'COVID-19 showed that strong public health infrastructure and international cooperation save lives. We support better-prepared, more equitable health systems.',
      bullets: [
        'Pandemic preparedness and emergency response',
        'Public health infrastructure',
        'Healthcare research and medical innovation',
        'Health equity and access',
        'Disease prevention and health education',
      ],
      icon: 'ri-heart-pulse-line',
      image: 'WhatsApp_Image_2026-10-19_at_18.38.57_9_qa73aa',
      imageAlt: 'IGAD’s Director of Health and Social Development speaking beside the EU-IGAD COVID-19 response banner, Toronto, July 2024',
    },
    {
      slug: 'food',
      title: 'Food Security & Resilient Food Systems',
      tagline: 'Securing Sustainable Livelihoods.',
      summary:
        'Climate change, conflict, rising costs and fragile supply chains threaten food availability and affordability. We work toward food systems that can withstand these shocks.',
      bullets: [
        'Food security and nutrition',
        'Climate-resilient food production',
        'Food supply chains and market stability',
        'Food security policy and advocacy',
        'Community food security for vulnerable populations',
      ],
      icon: 'ri-plant-line',
      image: 'WhatsApp_Image_2026-05-25_at_4.02.44_PM_1_n6jony',
      imageAlt: 'Delegates visiting a food store stocked with sacks of produce, Toronto, July 2024',
    },
    {
      slug: 'investment',
      title: 'Sustainable Investment & Social Enterprise',
      tagline: 'Mobilizing Investment. Creating Lasting Impact.',
      summary:
        'Lasting development needs investment that serves communities as well as balance sheets. We connect capital to local priorities, with transparency and accountability.',
      bullets: [
        'Social enterprise development',
        'Responsible investment and ESG principles',
        'Public-private partnerships',
        'Entrepreneurship and small-business growth',
        'Economic participation for underserved communities',
      ],
      icon: 'ri-hand-coin-line',
      image: 'Brampton_Board_of_Trade_noll70',
      imageAlt: 'A handshake with the Brampton Board of Trade',
    },
  ],
  cta: {
    title: 'Partner With Us',
    text: 'Whether you represent a university, government, business or community organization, we would welcome the chance to explore how we can work together.',
  },
};

// ---------------------------------------------------------------------------
// LOCAL COMMUNITY DEVELOPMENT & EMPOWERMENT (from "LDII Local Programs")
// ---------------------------------------------------------------------------
export const LOCAL = {
  title: 'Local Community Development & Empowerment',
  tagline: 'Empowering Individuals. Supporting Youth. Strengthening Communities.',
  intro: [
    'LDII is committed to improving livelihoods, empowering individuals, supporting youth development, and strengthening communities through inclusive, community-based programmes.',
    'Our current local programme focus is Ontario, Canada, with a vision for future expansion throughout Canada. Through partnerships with community organizations, educational institutions, government agencies, police services, businesses and other stakeholders, we seek to address social and economic challenges while building stronger, safer, and more resilient communities.',
  ],
  programmes: [
    {
      slug: 'newcomers',
      title: 'Newcomer Settlement, Integration & Housing Support',
      tagline: 'Welcoming Newcomers. Supporting Integration. Building Stable Communities.',
      summary:
        'We help newcomers, youth and immigrant families build confidence, access essential information, and participate meaningfully in Canadian society, because successful settlement also requires stable housing, social connections, educational opportunities and supportive communities.',
      bullets: [
        'Newcomer orientation and settlement support',
        'Housing stability and housing navigation',
        'Youth settlement and integration',
        'Community integration and access to community services',
        'Family and community support',
        'Cultural awareness and inclusion',
        'Settlement partnerships with agencies, schools and service providers',
      ],
      icon: 'ri-home-heart-line',
      image: 'WhatsApp_Image_2026-10-19_at_10.53.33_6_w42eol',
      imageAlt: 'Community members gathered at the LDII offices in Toronto',
      detail: true,
    },
    {
      slug: 'youth-employment',
      title: 'Youth Employment, Career Development & Economic Empowerment',
      tagline: 'Developing Skills. Expanding Opportunities. Building Economic Independence.',
      summary:
        'We equip young people with the knowledge, confidence and practical skills to succeed in education, employment, entrepreneurship and community leadership.',
      bullets: [
        'Employment readiness and career development: job search, résumés, interviews, workplace readiness',
        'Computer training and digital literacy',
        'Vocational and practical skills development',
        'Financial literacy and money management',
        'Youth entrepreneurship and small-business development',
        'Youth leadership, mentorship and professional networking',
        'Partnerships with colleges, universities, employers and training institutions',
      ],
      icon: 'ri-briefcase-4-line',
      image: 'WhatsApp_Image_2026-11-12_at_19.43.17_k9kxst',
      imageAlt: 'Two students in school blazers with LDII hosts',
    },
    {
      slug: 'youth-safety',
      title: 'Youth Development, Community Safety & Crime Prevention',
      tagline: 'Empowering Youth. Preventing Crime. Building Safer Communities.',
      summary:
        'Effective crime prevention begins with education, mentorship, positive youth engagement and access to meaningful opportunities. We work with youth, families, schools, police services and community organizations to build safer, more inclusive neighbourhoods across Ontario.',
      bullets: [
        'Youth crime prevention and awareness',
        'Positive youth development, mentorship and guidance',
        'Community safety education',
        'Community–police partnerships',
        'Violence prevention and conflict resolution',
        'School and community partnerships',
        'Neighbourhood safety and community engagement',
      ],
      icon: 'ri-shield-user-line',
      image: 'Brampton_council_3_zhgvl1',
      imageAlt: 'LDII at Brampton City Hall',
    },
    {
      slug: 'youth-wellbeing',
      title: 'Youth Education, Mental Health & Social Inclusion',
      tagline: 'Promoting Wellbeing. Expanding Knowledge. Building Inclusive Communities.',
      summary:
        'Education, supportive relationships and community engagement can reduce social isolation, address mental health stigma and create opportunities for meaningful participation.',
      bullets: [
        'Youth education and lifelong learning',
        'Mental health awareness, education and stigma reduction',
        'Youth emotional wellbeing',
        'Social inclusion and community participation',
        'Digital inclusion and community learning',
        'Youth workshops and awareness campaigns',
        'Partnerships with schools, mental health organizations and youth-serving agencies',
      ],
      icon: 'ri-mental-health-line',
      image: 'WhatsApp_Image_2026-10-19_at_18.38.56oplm_suwsaa',
      imageAlt: 'Participants in conversation around a table',
    },
    {
      slug: 'partnerships',
      title: 'Community Partnerships & Collaborative Development',
      tagline: 'Connecting Organizations. Strengthening Partnerships. Advancing Community Development.',
      summary:
        'LDII brings together community organizations, educational institutions, government agencies, businesses and development partners to identify shared priorities and explore collaborative solutions to local challenges.',
      bullets: [
        'Community partnership development',
        'Collaboration with universities, colleges and research institutions',
        'Government and community engagement',
        'Community capacity building',
        'Resource sharing and knowledge exchange',
        'Business and community partnerships',
        'Community networking and development forums',
      ],
      icon: 'ri-community-line',
      image: 'Brampton_counci_kryhsj',
      imageAlt: 'Community partners in Brampton with a certificate of recognition',
    },
    {
      slug: 'seniors',
      title: 'Seniors’ Support, Wellbeing & Social Inclusion',
      tagline: 'Supporting Seniors. Promoting Dignity. Strengthening Community Connections.',
      summary:
        'Many older adults face social isolation, limited access to information and digital exclusion. We promote seniors’ wellbeing, dignity, independence and meaningful participation in community life.',
      bullets: [
        'Social inclusion and community engagement',
        'Social isolation prevention',
        'Digital literacy and computer training for seniors',
        'Health and wellbeing awareness',
        'Intergenerational learning and engagement',
        'Safety and fraud awareness',
        'Partnerships with seniors’ organizations and community centres',
      ],
      icon: 'ri-user-heart-line',
      image: 'Braceley_n_Journalist_g9575z',
      imageAlt: 'Two guests sharing something on a phone',
    },
  ],
  approach: [
    { title: 'Community Engagement & Needs Identification', text: 'Encouraging meaningful participation and identifying challenges, priorities and opportunities within local communities.' },
    { title: 'Education, Training & Skills Development', text: 'Workshops, computer training, financial literacy, career development, leadership training and community learning, particularly for youth.' },
    { title: 'Youth Development & Community Safety', text: 'Positive youth engagement, mentorship, crime prevention education and collaborative community safety initiatives.' },
    { title: 'Social Inclusion & Community Wellbeing', text: 'Mental health awareness, community participation and supportive relationships for vulnerable and underserved populations.' },
    { title: 'Community Partnerships & Capacity Building', text: 'Connecting organizations, institutions and stakeholders to strengthen local initiatives and build community resilience.' },
    { title: 'Seniors’ Wellbeing & Community Engagement', text: 'Social inclusion, lifelong learning, digital literacy and wellbeing education for older adults.' },
  ],
};

/** Newcomer Settlement & Integration Programme (from "Our Community Development and Impact Areas"). */
export const NEWCOMER = {
  title: 'Newcomer Settlement & Integration Programme',
  closing: 'Supporting New Beginnings. Empowering Newcomers. Strengthening Communities.',
  areas: [
    { title: 'Settlement Orientation & Information', text: 'Helping newcomers understand essential aspects of life in Canada, including public services, community resources, Canadian institutions, and everyday responsibilities.', icon: 'ri-compass-3-line' },
    { title: 'Community Integration & Social Inclusion', text: 'Encouraging newcomers to establish social connections, participate in community activities, develop a sense of belonging, and build supportive relationships.', icon: 'ri-group-line' },
    { title: 'Employment & Career Pathway Information', text: 'Providing information about Canadian employment systems, job-search resources, workplace expectations, professional development opportunities, and relevant employment support organizations.', icon: 'ri-briefcase-line' },
    { title: 'Housing Information & Community Resources', text: 'Helping newcomers understand housing-related information, tenant rights and responsibilities, available housing resources, and appropriate sources of assistance.', icon: 'ri-home-4-line' },
    { title: 'Financial Literacy & Banking Awareness', text: 'Promoting understanding of Canadian banking systems, budgeting, saving, credit, and responsible financial decision-making.', icon: 'ri-bank-line' },
    { title: 'Access to Community Services', text: 'Helping newcomers identify relevant community organizations and resources related to healthcare, education, language learning, settlement services, and family support.', icon: 'ri-service-line' },
    { title: 'Cultural Orientation & Community Participation', text: 'Promoting awareness of Canadian cultural diversity, civic responsibilities, community engagement, mutual respect, and peaceful coexistence.', icon: 'ri-global-line' },
    { title: 'Personal Development & Community Empowerment', text: 'Encouraging newcomers to develop confidence, practical knowledge, leadership potential, and the skills needed to participate meaningfully in their communities.', icon: 'ri-medal-line' },
  ],
  beneficiaries: [
    'Newly arrived immigrants and permanent residents',
    'Refugees and other eligible newcomers',
    'Newcomer families and individuals',
    'Internationally trained professionals navigating settlement and workforce integration',
    'Seniors',
    'Marginalized families',
    'Indigenous community members',
    'Individuals experiencing barriers to social and economic integration',
  ],
  eligibility: 'Eligibility for particular activities may depend on programme requirements and available resources.',
  approach: [
    'LDII recognizes that successful settlement requires more than access to information. It involves developing confidence, building relationships, understanding available opportunities, and participating actively in community life.',
    'Our approach emphasizes community education, practical guidance, information sharing, capacity building, and collaboration with relevant community organizations and service providers. We seek to help newcomers overcome settlement barriers while encouraging independence, inclusion, and long-term community participation.',
  ],
  commitment:
    'At LDII, we believe every newcomer deserves the opportunity to feel welcomed, informed, supported, and empowered, and to develop their potential, establish meaningful connections, and contribute to Canada’s social and economic development.',
};

/** Youth empowerment dimensions (from the CEO's brief). */
export const YOUTH_DIMENSIONS = [
  { title: 'Personal & Psychological', text: 'Builds self-esteem, resilience and independent decision-making skills.' },
  { title: 'Economic', text: 'Access to job training, employment, entrepreneurship and financial literacy.' },
  { title: 'Civic & Political', text: 'Participation in public policy, community service and leadership roles.' },
  { title: 'Social & Cultural', text: 'Inclusion, equality and representation across diverse backgrounds.' },
];

// ---------------------------------------------------------------------------
// VIDEO: first international Post-COVID parade (Mux, public playback ID only)
// ---------------------------------------------------------------------------
export const PARADE_VIDEO = {
  playbackId: 'QKbLbZRHUvy005DYmhnQUBaYH2FJGlXdOXr00pHFtdAXw',
  title: 'The first international Post-COVID parade and candlelight vigil in the world · Toronto, October 1, 2023',
  poster: (w = 1600, time = 20) =>
    `https://image.mux.com/QKbLbZRHUvy005DYmhnQUBaYH2FJGlXdOXr00pHFtdAXw/thumbnail.jpg?width=${w}&time=${time}`,
  src: 'https://stream.mux.com/QKbLbZRHUvy005DYmhnQUBaYH2FJGlXdOXr00pHFtdAXw.m3u8',
};

// ---------------------------------------------------------------------------
// NEWS POSTS: real articles about LDII, each with its source and original link
// ---------------------------------------------------------------------------
export interface Post {
  slug: string;
  date: string; // ISO
  displayDate: string;
  source: string;
  sourceShort: string;
  logo?: string;
  sourceIcon?: string;
  title: string;
  excerpt: string;
  body: string[];
  link?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
  video?: boolean;
}

export const POSTS: Post[] = [
  {
    slug: 'kenya-high-commission-dialogue-2026',
    date: '2026-08-27',
    displayDate: 'August 27, 2026',
    source: 'High Commission of Kenya in Canada (@KenyaInCanada)',
    sourceShort: 'Kenya in Canada',
    sourceIcon: 'ri-twitter-x-line',
    title: 'Kenya’s High Commissioner and LDII President discuss sustainable development priorities for 2026/2027',
    excerpt:
      'Amb. Geoffrey E. Kaituko, CBS, held discussions with Mr. Ronald Lwabaayi, President of LDII, bringing together diplomatic and private-sector perspectives on sustainable development priorities for 2026/2027.',
    body: [
      'The High Commission of Kenya in Canada reported that Amb. Geoffrey E. Kaituko, CBS, held discussions with Mr. Ronald Lwabaayi, President of Livelihood Development International Initiatives (LDII). The engagement brought together diplomatic and private-sector perspectives to explore opportunities for advancing sustainable development priorities for 2026/2027.',
      'The discussions focused on sustainable mining and natural-resource development, with emphasis on transparent investment models and green-mining frameworks that can leverage Canada’s extensive mining expertise alongside Kenya’s emerging mining sector.',
      'They also explored opportunities for tourism and heritage exchange, including economic corridors that promote sustainable travel, deepen cultural understanding, and strengthen Kenya–Canada people-to-people ties.',
      'The engagement further highlighted human-capital development, particularly the need to build resilient skills-development pipelines and harness the Kenyan diaspora as a catalyst for community development, knowledge transfer, investment and inclusive growth.',
    ],
    link: 'https://x.com/kenyaincanada/status/2093025049414386134',
    linkLabel: 'Read the post on X',
    image: 'WhatsApp_Image_2026-10-19_at_10.52.07mnmb_pd2gbi',
    imageAlt: 'Kenya High Commission dialogue with LDII in Toronto',
  },
  {
    slug: 'igad-ldii-first-post-covid-conference',
    date: '2024-07-13',
    displayDate: 'July 13, 2024',
    source: 'Intergovernmental Authority on Development (IGAD)',
    sourceShort: 'IGAD',
    logo: 'https://igad.int/wp-content/uploads/2021/07/Green-Logo.svg',
    title: 'IGAD and LDII hold the First International Post COVID Conference in Canada',
    excerpt:
      'IGAD, in collaboration with LDII, conducted the first International Post COVID Conference in Toronto from 11 to 13 July 2024, with an IGAD delegation acting as co-convener and co-organizer.',
    body: [
      'The Intergovernmental Authority on Development (IGAD), in collaboration with Livelihood Development International Initiatives (LDII), held the first International Post COVID Conference in Toronto from 11 to 13 July 2024.',
      'The IGAD delegation, led by Fathia A. Alwan, Director of IGAD’s Health and Social Development Division, took part as co-convener and co-organizer. Speaking on behalf of the Executive Secretary, she described how IGAD upgraded national laboratories and cross-border health facilities and worked with international partners to strengthen its response.',
      'The conference drew delegates from around the world, including African Union member states, regional blocs, and Canadian academics and universities. The City of Brampton presented IGAD with a certificate of recognition and appreciation.',
      'The three-day conference closed with recommendations and commitments to improve coordination and communication for the recovery and reconstruction phase.',
    ],
    link: 'https://igad.int/igad-and-ldii-holds-the-first-international-post-covid-conference-in-canada/',
    linkLabel: 'Read the full article on igad.int',
    image: 'WhatsApp_Image_2026-10-19_at_18.38.57_9_qa73aa',
    imageAlt: 'The IGAD delegation’s address at the First International Post COVID Conference, Toronto',
  },
  {
    slug: 'au6rg-first-post-covid-conference',
    date: '2024-06-20',
    displayDate: 'June 2024',
    source: 'African Union Sixth Region Global (AU6RG)',
    sourceShort: 'AU6RG',
    logo: 'https://au6rg.org/wp-content/uploads/2026/01/cropped-AU6RG_Logo.png',
    title: 'The First International Post COVID-19 Conference: a crucial gathering for the African diaspora',
    excerpt:
      'AU6RG invited its members to the First International Post COVID-19 Conference, July 11–13, 2024, at the Metro Toronto Convention Centre, to shape a coordinated response to future global shocks.',
    body: [
      'The African Union Sixth Region Global (AU6RG), which represents the African diaspora worldwide, invited its members to the First International Post COVID-19 Conference, held July 11–13, 2024, at the Metro Toronto Convention Centre.',
      'AU6RG described the conference as a platform for global experts to develop strategies for a coordinated response to future global shocks, and for diaspora voices to shape global policy after a pandemic that hit communities in the Global South hardest.',
      'Its announcement highlighted knowledge exchange between Global North and Global South experts, addressing inequities, inclusive policy for women, youth and the elderly, stronger health infrastructure, pandemic financing and equitable access to technology.',
    ],
    link: 'https://au6rg.org/first-international-covid-19-conference/',
    linkLabel: 'Read the announcement on au6rg.org',
    image: 'WhatsApp_Image_2026-10-19_at_18.38.57_7_dc6ogu',
    imageAlt: 'Panel before the African Union Sixth Region Global banner at the conference, Toronto, July 2024',
  },
  {
    slug: 'covid-remembrance-parade-2023',
    date: '2023-10-01',
    displayDate: 'October 1, 2023',
    source: 'LDII',
    sourceShort: 'LDII',
    title: 'Toronto’s LDII Parade: a global movement of COVID-19 remembrance and unity',
    excerpt:
      'On October 1, 2023, Toronto hosted the world’s first COVID-19 Remembrance Parade and Candlelight Vigil, organized by LDII under the theme “Walking for Humanity, Healing, and Compassion, with Unity, Hope, and Renewal Beyond COVID-19.”',
    body: [
      'On October 1, 2023, Toronto hosted the world’s first COVID-19 Remembrance Parade and Candlelight Vigil, organized by Livelihood Development International Initiatives (LDII) under the theme “Walking for Humanity, Healing, and Compassion, with Unity, Hope, and Renewal Beyond COVID-19.”',
      'The parade began at Christie Pits Park, where participants representing nations from around the world gathered to pay tribute to the impact of the pandemic, led by St. Andrews Pipes & Drums from Mississauga.',
      'Rev. Dr. Wendell Gibbs offered words of solace and led an interfaith prayer, and City Councillor Chris Moise conveyed the local government’s support. During the parade, LDII announced its plan to extend the annual event to other countries, including Uganda, the UK, the USA, Italy and Spain.',
      'Student Jordan Katuntu recited a poem as the parade became a candlelight vigil. Candles arranged on the ground formed a tribute symbolizing unity, hope, healing and compassion. Participants from many backgrounds, including representatives of RBC and the Ethiopian community, honoured the lives lost and the healthcare workers and volunteers who served during the pandemic.',
    ],
    video: true,
  },
];

/** Upcoming flagship engagement, from Thrive Tours' letter (6 Oct 2026). */
export const MINING_MISSION = {
  title: 'Africa–Canada Mining & Technology Transfer Mission',
  when: 'June 2027',
  where: 'Greater Sudbury and Timmins, Northern Ontario',
  partner: 'Co-hosted with Thrive Tours Inc., an Indigenous-led experiential tourism and education company based at Batchewana First Nation',
  summary:
    'Government and industry delegations from Kenya, Uganda, South Africa, Botswana and other African nations travel to Northern Ontario. Delegates are based in Sudbury and the mission concludes at the Canadian Mining Expo in Timmins.',
  programme: [
    'The story of Sudbury’s regreening, from environmental damage to one of the world’s best-known recoveries',
    'Mining innovation, including automation, battery-electric equipment and research at Laurentian, Cambrian and NORCAT',
    'Business-to-business meetings between delegates and local mining suppliers and service companies',
  ],
  image: 'WhatsApp_Image_2026-11-12_at_19.43.20_7_rimlmd',
  imageAlt: 'LDII visiting a mining training facility in Greater Sudbury',
};

/** Photos used across the home page and About. */
export const PHOTOS = {
  cheer: { id: 'untitled-6588_1_pr49ja', alt: 'Participants of the Canada–South Africa seminar celebrating together' },
  hall2nd: { id: 'General_aiu2gv', alt: 'A full hall at the 2nd International Post-COVID-19 Conference, Brampton' },
  president2: { id: 'president_LDII_xjy7xj', alt: 'Ronald Lwabaayi speaking at the 2nd International Post-COVID-19 Conference' },
  igad: { id: 'WhatsApp_Image_2026-10-19_at_18.38.57_9_qa73aa', alt: 'IGAD address at the First International Post COVID Conference' },
  kenya: { id: 'WhatsApp_Image_2026-10-19_at_10.52.07mnmb_pd2gbi', alt: 'LDII at the High Commission of Kenya' },
  angolaGroup: { id: 'Angola_Diplomatic_Engagement_3_y20i5v', alt: 'The delegation with Angolan officials' },
  norcat: { id: 'WhatsApp_Image_2026-11-12_at_19.43.20_7_rimlmd', alt: 'The delegation at a skills-training centre in Greater Sudbury' },
  brampton: { id: 'Brampton_counci_kryhsj', alt: 'Community partners in Brampton with a certificate of recognition' },
  group1st: { id: 'WhatsApp_Image_2026-05-25_at_3.59.39_PM_k4yy3g', alt: 'Group photo, 1st International Post-COVID Conference, Toronto, July 2024' },
  opening: { id: 'WhatsApp_Image_2026-10-19_at_18.42.29oilk_dd4872', alt: 'Ronald Lwabaayi giving the opening address, Toronto, July 2024' },
  delegates2nd: { id: 'General_aiu2gv', alt: 'A full hall at the 2nd International Post-COVID-19 Conference, Brampton' },
  president: { id: 'Lwabaayi_Profile_ovqlxd', alt: 'Ronald Lwabaayi, President of LDII' },
  stage: { id: 'WhatsApp_Image_2026-10-19_at_18.38.57_7_dc6ogu', alt: 'Speakers on the main stage, Toronto, July 2024' },
  angola: { id: 'Angola_Diplomatic_Engagement_3_y20i5v', alt: 'The delegation with Angolan officials before the flags of Angola and the African Union' },
  southAfrica: { id: 'untitled-6617_1_iqswnj', alt: 'Delegates before the South African and Canadian flags' },
  sudbury: { id: 'WhatsApp_Image_2026-11-12_at_19.43.21_oegqfu', alt: 'The LDII delegation underground in hard hats, Greater Sudbury' },
  certificate: { id: 'WhatsApp_Image_2026-10-19_at_18.38.58_tglbms', alt: 'Certificate of recognition from the City of Brampton' },
  offices: { id: 'WhatsApp_Image_2026-10-19_at_10.53.33_6_w42eol', alt: 'Community members at the LDII offices in Toronto' },
};
