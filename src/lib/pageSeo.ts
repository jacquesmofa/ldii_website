export type SeoEntry = {
  title: string;
  description: string;
  label: string;
};

export const SITE_URL = 'https://ldiinitiatives.org';
export const SITE_NAME = 'LDII - Livelihood Development International Initiatives';
export const SHARE_IMAGE =
  'https://res.cloudinary.com/dzppzxpad/image/upload/c_pad,w_1200,h_630,b_white,f_jpg,q_auto/v1781702619/Circular_LDII_bewv0j.png';

export const DEFAULT_SEO: SeoEntry = {
  title: 'LDII | Livelihood Development International Initiatives',
  description:
    'LDII connects African missions, ministries and chambers of mines with Northern Ontario mining expertise, and runs youth and community programmes in Toronto.',
  label: 'Home',
};

/**
 * Every route gets its own title, description and breadcrumb label so each page
 * can rank on its own terms and share cleanly on social platforms.
 */
export const PAGE_SEO: Record<string, SeoEntry> = {
  '/': DEFAULT_SEO,

  '/about': {
    title: 'About Us | LDII Canadian Non-Profit',
    description:
      'LDII is a Canadian non-profit building resilient communities through technology transfer, international partnership and community programmes in Ontario and Africa.',
    label: 'About Us',
  },
  '/about/who-we-are': {
    title: 'Who We Are | LDII Mission, Vision and Values',
    description:
      'Meet the people and principles behind LDII: social cohesion, empowerment and practical partnership between the Global North and the Global South.',
    label: 'Who We Are',
  },
  '/about/who-we-are/president-profile': {
    title: 'President Profile | Ronald Lwabaayi, LDII',
    description:
      'The leadership and background of LDII president Ronald Lwabaayi, and the partnership approach that shapes the organisation’s programmes.',
    label: 'President Profile',
  },
  '/about/our-work': {
    title: 'Our Work | LDII Programs and Partnerships',
    description:
      'How LDII works: convening African delegations, transferring practical capability, and running local programmes that move people into work and community life.',
    label: 'Our Work',
  },
  '/about/past-projects': {
    title: 'Past Projects | LDII Delivery Record',
    description:
      'Completed LDII projects and delegations, with the partners involved and the outcomes delivered on the ground in Canada and Africa.',
    label: 'Past Projects',
  },
  '/about/upcoming-projects': {
    title: 'Upcoming Projects | LDII Forward Plan',
    description:
      'The missions, exchanges and community programmes LDII is preparing next, including the Africa–Canada Mining and Technology Exchange.',
    label: 'Upcoming Projects',
  },

  '/what-we-do': {
    title: 'What We Do | LDII Focus Areas',
    description:
      'Six LDII focus areas: technology and AI research, climate action, poverty eradication, sustainable food, global health and digital inclusion.',
    label: 'What We Do',
  },
  '/what-we-do/technology-ai-research': {
    title: 'Technology and AI Research | LDII',
    description:
      'LDII work on practical technology transfer, applied AI research and digital systems that fit the institutions and industries we partner with.',
    label: 'Technology & AI Research',
  },
  '/what-we-do/climate-action': {
    title: 'Climate Action | LDII Climate Justice Work',
    description:
      'LDII climate action in East Africa: protecting flora, fauna and communities, and supporting Uganda and Kenya climate frameworks with practical projects.',
    label: 'Climate Action',
  },
  '/what-we-do/poverty-eradication': {
    title: 'Poverty Eradication | LDII Livelihoods Work',
    description:
      'LDII poverty eradication through skills, finance access and enterprise support that helps households build steady, dignified incomes.',
    label: 'Poverty Eradication',
  },
  '/what-we-do/sustainable-food': {
    title: 'Sustainable Food Systems | LDII',
    description:
      'LDII sustainable food work with smallholder farmers, cooperatives and training partners to improve yields, storage and market access.',
    label: 'Sustainable Food',
  },
  '/what-we-do/global-health': {
    title: 'Global Health | LDII Community Health Work',
    description:
      'LDII global health initiatives focused on community health workers, maternal care access and practical health systems support.',
    label: 'Global Health',
  },
  '/what-we-do/digital-inclusion': {
    title: 'Digital Inclusion | LDII Connectivity Work',
    description:
      'LDII digital inclusion programmes that widen access to connectivity, devices and digital skills for underserved communities.',
    label: 'Digital Inclusion',
  },
  '/focus-areas': {
    title: 'Focus Areas | LDII Development Priorities',
    description:
      'An overview of the LDII focus areas and how each one connects to the organisation’s programmes in Canada and across Africa.',
    label: 'Focus Areas',
  },

  '/programs': {
    title: 'Programs | LDII Youth, Capacity and Mining Exchange',
    description:
      'LDII programs: local programs in Ontario, youth programs for newcomer youth in Toronto, local capacity training, and the Africa–Canada Mining & Technology Exchange.',
    label: 'Programs',
  },
  '/programs/youth-programs-ontario': {
    title: 'Youth Programs in Ontario | LDII Toronto',
    description:
      'Settlement, skills training, job placement and crime prevention for newcomer youth in Toronto, with one case worker supporting each young person.',
    label: 'Youth Programs in Ontario',
  },
  '/programs/local-capacity-training': {
    title: 'Local Capacity Training | LDII Leadership Program',
    description:
      'Leadership, financial literacy and mentoring workshops three times a year, helping 75 to 90 community members turn learning into action.',
    label: 'Local Capacity Training',
  },
  '/programs/mining-technology-exchange': {
    title: 'Africa–Canada Mining and Technology Exchange | LDII',
    description:
      'Executive delegations from African missions, ministries and chambers of mines to Northern Ontario, built on capability transfer with Thrive Tours.',
    label: 'Africa–Canada Mining & Technology Exchange',
  },

  '/impact': {
    title: 'Impact | LDII Results and Reach',
    description:
      'The measurable results of LDII work: people trained, jobs secured, delegations hosted and community projects launched with our partners.',
    label: 'Impact',
  },
  '/impact/achievements': {
    title: 'Achievements | LDII Milestones',
    description:
      'Key LDII milestones and achievements delivered with African missions, Canadian institutions and community partners.',
    label: 'Achievements',
  },
  '/impact/success-stories': {
    title: 'Success Stories | LDII Participant Outcomes',
    description:
      'Stories from the young people, trainees and partners whose work with LDII changed the direction of their careers and communities.',
    label: 'Success Stories',
  },
  '/impact/annual-reports': {
    title: 'Annual Reports | LDII Accountability',
    description:
      'Download LDII annual reports covering programme delivery, partnerships, governance and how funds were used.',
    label: 'Annual Reports',
  },
  '/impact/metrics': {
    title: 'Metrics | LDII Programme Data',
    description:
      'The indicators LDII tracks across its youth, capacity training and international exchange programmes, and what the numbers show.',
    label: 'Metrics',
  },

  '/events': {
    title: 'Events | LDII Missions, Summits and Conferences',
    description:
      'Upcoming and past LDII events, including the Africa–Canada Mining and Technology Exchange and community gatherings in Toronto.',
    label: 'Events',
  },
  '/events/upcoming': {
    title: 'Upcoming Events | LDII Delegations and Forums',
    description:
      'What is coming next for LDII: upcoming delegations, forums and community events, with dates, locations and how to take part.',
    label: 'Upcoming Events',
  },
  '/events/past': {
    title: 'Past Events | LDII Event Archive',
    description:
      'An archive of LDII conferences, missions and community events, with reports, photographs and outcomes from each gathering.',
    label: 'Past Events',
  },
  '/events/news': {
    title: 'News | LDII Announcements and Updates',
    description:
      'The latest LDII news: partnership announcements, programme updates and developments across Canada and Africa.',
    label: 'News',
  },
  '/events/press-releases': {
    title: 'Press Releases | LDII Media Room',
    description:
      'Official LDII press releases and media statements, with contacts for journalists and editors.',
    label: 'Press Releases',
  },
  '/events/gallery': {
    title: 'Gallery | LDII Events in Pictures',
    description:
      'Photographs from LDII delegations, conferences and community programmes in Canada and across Africa.',
    label: 'Gallery',
  },

  '/partners': {
    title: 'Partners | LDII Institutional and Industry Network',
    description:
      'The institutions, suppliers, colleges and community organisations LDII works with in Northern Ontario, across Canada and in Africa.',
    label: 'Partners',
  },

  '/contact': {
    title: 'Contact LDII | Partnerships, Media and Programmes',
    description:
      'Reach LDII in Toronto: general inquiries, media requests, partnership discussions and programme referrals. Two offices, two official email addresses.',
    label: 'Contact',
  },
  '/contact/get-in-touch': {
    title: 'Get in Touch | LDII Enquiry Form',
    description:
      'Send LDII a message about partnership, programmes, speaking invitations or general questions and our team will respond directly.',
    label: 'Get in Touch',
  },
  '/contact/our-locations': {
    title: 'Our Locations | LDII Toronto and Brampton Offices',
    description:
      'Visit or reach the LDII offices in North York, Toronto and in Brampton, Ontario, with addresses, phone numbers and directions.',
    label: 'Our Locations',
  },
  '/contact/media-inquiries': {
    title: 'Media Inquiries | LDII Press Contact',
    description:
      'Contact LDII for interviews, statements, background briefings and media accreditation for our events and delegations.',
    label: 'Media Inquiries',
  },

  '/donate': {
    title: 'Donate | Support LDII Programmes',
    description:
      'Support LDII youth, capacity training and international exchange programmes through a direct donation or e-Transfer.',
    label: 'Donate',
  },

  '/privacy-policy': {
    title: 'Privacy Policy | LDII',
    description:
      'How LDII collects, uses and protects personal information submitted through our website forms and programme enquiries.',
    label: 'Privacy Policy',
  },
  '/terms-of-service': {
    title: 'Terms of Service | LDII',
    description:
      'The terms that apply when you use the LDII website, submit a form or register for an LDII event.',
    label: 'Terms of Service',
  },
  '/accessibility': {
    title: 'Accessibility | LDII',
    description:
      'LDII commitment to an accessible website and accessible programmes, including how to request support or report a barrier.',
    label: 'Accessibility',
  },
  '/faq': {
    title: 'FAQ | LDII Frequently Asked Questions',
    description:
      'Answers about LDII programmes, partnership, the Africa–Canada Mining and Technology Exchange, donations and how to get involved.',
    label: 'FAQ',
  },
  '/sitemap': {
    title: 'Sitemap | All LDII Pages',
    description:
      'A full index of LDII pages: about, programmes, focus areas, impact, events, partners and contact information.',
    label: 'Sitemap',
  },
};

const humanise = (segment: string): string =>
  segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const getPageSeo = (pathname: string): SeoEntry => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const exact = PAGE_SEO[clean];
  if (exact) return exact;

  // Dynamic routes (e.g. /events/gallery/some-event) fall back to a readable label.
  const segments = clean.split('/').filter(Boolean);
  const last = segments[segments.length - 1] || '';
  const label = humanise(last);
  return {
    title: `${label} | LDII`,
    description: DEFAULT_SEO.description,
    label,
  };
};

/** Routes whose final segment is a dynamic slug, e.g. /events/gallery/my-event. */
const DYNAMIC_ROUTE_PATTERNS: RegExp[] = [/^\/events\/gallery\/[^/]+$/];

/**
 * True when the path resolves to a real page. Anything else is a soft 404 and
 * must be marked noindex so search engines do not adopt it as a sitelink.
 */
export const isKnownPath = (pathname: string): boolean => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (PAGE_SEO[clean]) return true;
  return DYNAMIC_ROUTE_PATTERNS.some((pattern) => pattern.test(clean));
};

export type Crumb = { name: string; url: string };

export const buildBreadcrumbs = (pathname: string): Crumb[] => {
  const clean = pathname.replace(/\/+$/, '');
  const segments = clean.split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ name: 'Home', url: `${SITE_URL}/` }];

  segments.forEach((_, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    const entry = PAGE_SEO[path];
    crumbs.push({
      name: entry ? entry.label : humanise(segments[index]),
      url: `${SITE_URL}${path}`,
    });
  });

  return crumbs;
};