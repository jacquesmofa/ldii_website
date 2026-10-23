export interface ProgrammePhoto {
  url: string;
  caption: string;
}

export interface FocusArea {
  title: string;
  detail: string;
}

export interface LocalProgramme {
  id: string;
  number: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  focus: FocusArea[];
  photos: ProgrammePhoto[];
}

export const localProgrammes: LocalProgramme[] = [
  {
    id: 'newcomer-settlement',
    number: '01',
    icon: 'ri-home-heart-line',
    title: 'Newcomer Settlement, Integration & Housing Support',
    tagline: 'Welcoming Newcomers. Supporting Integration. Building Stable Communities.',
    description:
      'Settling in a new country means learning unfamiliar systems, finding stable housing and work, and building new connections. This programme helps newcomers, youth and immigrant families gain confidence, find essential information and take part fully in Canadian life.',
    focus: [
      {
        title: 'Orientation & Settlement Support',
        detail: 'Guidance on Canadian systems, community resources and available services.'
      },
      {
        title: 'Housing Stability & Navigation',
        detail: 'Housing information, referrals and resources for stable living.'
      },
      {
        title: 'Newcomer Youth Integration',
        detail: 'Support with schools, cultural adjustment and community life.'
      },
      {
        title: 'Access to Services',
        detail: 'Connecting families with settlement, education, healthcare and social support.'
      },
      {
        title: 'Community & Cultural Inclusion',
        detail: 'Local activities, social networks and welcoming, diverse communities.'
      }
    ],
    photos: [
      {
        url: 'https://readdy.ai/api/search-image?query=newcomer%20families%20at%20a%20community%20welcome%20orientation%20in%20Ontario%2C%20diverse%20adults%20and%20children%20seated%20in%20a%20sunlit%20hall%20with%20a%20welcome%20banner%2C%20volunteers%20greeting%20them%20warmly%2C%20warm%20natural%20light%2C%20soft%20neutral%20tones%2C%20documentary%20editorial%20photography&width=900&height=675&seq=lp-newcomer-01&orientation=landscape',
        caption: 'Newcomer welcome orientation · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=settlement%20worker%20helping%20a%20newcomer%20family%20with%20housing%20paperwork%20at%20a%20community%20desk%2C%20laptop%20and%20folders%2C%20warm%20daylight%20through%20large%20windows%2C%20calm%20neutral%20tones%2C%20documentary%20editorial%20photography&width=900&height=675&seq=lp-newcomer-02&orientation=landscape',
        caption: 'Settlement and housing support desk · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=newcomer%20teenage%20students%20talking%20together%20outside%20a%20Toronto%20school%20with%20backpacks%2C%20friendly%20candid%20moment%2C%20warm%20afternoon%20light%2C%20soft%20neutral%20palette%2C%20documentary%20editorial%20photography&width=900&height=675&seq=lp-newcomer-03&orientation=landscape',
        caption: 'Newcomer youth at a school activity · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=multicultural%20community%20cultural%20evening%20with%20families%20in%20colourful%20traditional%20dress%2C%20shared%20food%20tables%20and%20conversation%20in%20a%20bright%20hall%2C%20warm%20ambient%20light%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-newcomer-04&orientation=landscape',
        caption: 'Community cultural evening · Brampton, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=group%20photo%20of%20settlement%20partners%20and%20community%20staff%20standing%20together%20in%20a%20bright%20meeting%20room%2C%20professional%20but%20relaxed%2C%20warm%20daylight%2C%20soft%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-newcomer-05&orientation=landscape',
        caption: 'Settlement partners roundtable · Ontario'
      }
    ]
  },
  {
    id: 'youth-employment',
    number: '02',
    icon: 'ri-briefcase-4-line',
    title: 'Youth Employment, Career Development & Economic Empowerment',
    tagline: 'Developing Skills. Expanding Opportunities. Building Economic Independence.',
    description:
      'Practical skills, financial knowledge and leadership are the foundation of long-term economic stability. LDII equips young people with the skills and confidence to succeed in education, work, business and community leadership.',
    focus: [
      {
        title: 'Employment Readiness & Career Planning',
        detail: 'Job search, resumes, interview skills and workplace readiness.'
      },
      {
        title: 'Computer & Digital Skills',
        detail: 'Practical computer training and digital confidence.'
      },
      {
        title: 'Vocational Skills Training',
        detail: 'Hands-on training that improves employability.'
      },
      {
        title: 'Financial Literacy',
        detail: 'Budgeting, saving and responsible financial decisions.'
      },
      {
        title: 'Entrepreneurship & Small Business',
        detail: 'Business knowledge, innovation and self-employment.'
      },
      {
        title: 'Leadership & Mentorship',
        detail: 'Communication, decision-making and support for youth-led initiatives.'
      }
    ],
    photos: [
      {
        url: 'https://readdy.ai/api/search-image?query=young%20adults%20in%20a%20resume%20and%20interview%20skills%20workshop%20around%20a%20bright%20table%2C%20laptops%20and%20notebooks%2C%20coach%20explaining%20to%20the%20group%2C%20warm%20daylight%2C%20soft%20neutral%20tones%2C%20documentary%20editorial%20photography&width=900&height=675&seq=lp-youth-employment-01&orientation=landscape',
        caption: 'Resume and interview workshop · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=diverse%20young%20people%20learning%20in%20a%20computer%20training%20classroom%2C%20rows%20of%20desks%20with%20monitors%2C%20instructor%20helping%20a%20student%2C%20bright%20modern%20room%2C%20warm%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-youth-employment-02&orientation=landscape',
        caption: 'Computer and digital skills class · Brampton, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=hands-on%20vocational%20training%20session%20with%20young%20apprentices%20using%20tools%20and%20workbenches%2C%20supervisor%20guiding%20them%2C%20workshop%20with%20natural%20light%2C%20warm%20neutral%20palette%2C%20documentary%20photography&width=900&height=675&seq=lp-youth-employment-03&orientation=landscape',
        caption: 'Vocational skills training · Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=financial%20literacy%20workshop%20for%20young%20adults%20with%20a%20facilitator%20at%20a%20flip%20chart%2C%20budgeting%20worksheets%20on%20tables%2C%20engaged%20participants%2C%20soft%20daylight%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-youth-employment-04&orientation=landscape',
        caption: 'Financial literacy workshop · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=mentor%20sitting%20with%20a%20young%20person%20reviewing%20a%20career%20plan%20in%20a%20bright%20community%20office%2C%20notebooks%20and%20coffee%20cups%2C%20encouraging%20conversation%2C%20warm%20light%2C%20neutral%20tones%2C%20documentary%20photography&width=900&height=675&seq=lp-youth-employment-05&orientation=landscape',
        caption: 'Mentor and youth career planning · Ontario'
      }
    ]
  },
  {
    id: 'youth-safety',
    number: '03',
    icon: 'ri-shield-user-line',
    title: 'Youth Development, Community Safety & Crime Prevention',
    tagline: 'Empowering Youth. Preventing Crime. Building Safer Communities.',
    description:
      'Unemployment, exclusion, negative peer influence and unsafe environments can put young people at risk. LDII believes crime prevention starts with mentorship, positive engagement and real opportunities. We work with youth, families, schools and police services to build trust and safer neighbourhoods.',
    focus: [
      {
        title: 'Crime Prevention Awareness',
        detail: 'Helping youth understand consequences and make positive choices.'
      },
      {
        title: 'Mentorship & Role Models',
        detail: 'Connecting youth with community leaders and supportive networks.'
      },
      {
        title: 'Positive Youth Activities',
        detail: 'Recreation, volunteering and leadership opportunities.'
      },
      {
        title: 'Violence Prevention & Conflict Resolution',
        detail: 'Peaceful problem-solving and communication skills.'
      },
      {
        title: 'Community-Police Partnerships',
        detail: 'Dialogue and trust between youth, residents and police.'
      },
      {
        title: 'Community Safety Education',
        detail: 'Personal safety and neighbourhood engagement.'
      }
    ],
    photos: [
      {
        url: 'https://readdy.ai/api/search-image?query=youth%20mentorship%20circle%20in%20a%20community%20centre%2C%20young%20people%20and%20an%20older%20mentor%20seated%20in%20a%20circle%20talking%2C%20warm%20afternoon%20light%2C%20soft%20neutral%20tones%2C%20documentary%20editorial%20photography&width=900&height=675&seq=lp-youth-safety-01&orientation=landscape',
        caption: 'Youth mentorship circle · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=diverse%20teenagers%20playing%20basketball%20in%20a%20community%20gym%2C%20energetic%20and%20positive%20moment%2C%20coach%20watching%20from%20the%20sideline%2C%20warm%20indoor%20lighting%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-youth-safety-02&orientation=landscape',
        caption: 'Community sports evening · Brampton, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=youth%20and%20police%20officers%20in%20a%20friendly%20roundtable%20dialogue%20in%20a%20bright%20community%20hall%2C%20plainclothes%20officer%20listening%20to%20a%20teenager%2C%20calm%20respectful%20atmosphere%2C%20neutral%20tones%2C%20documentary%20photography&width=900&height=675&seq=lp-youth-safety-03&orientation=landscape',
        caption: 'Youth and police dialogue · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=conflict%20resolution%20workshop%20with%20young%20participants%20practising%20communication%20exercises%20in%20pairs%2C%20facilitator%20guiding%20the%20room%2C%20bright%20community%20space%2C%20warm%20daylight%2C%20neutral%20palette%2C%20editorial%20photography&width=900&height=675&seq=lp-youth-safety-04&orientation=landscape',
        caption: 'Conflict resolution workshop · Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=young%20volunteers%20in%20matching%20t-shirts%20sorting%20donations%20at%20a%20neighbourhood%20community%20drive%2C%20smiling%20and%20working%20together%2C%20warm%20daylight%2C%20soft%20neutral%20tones%2C%20documentary%20photography&width=900&height=675&seq=lp-youth-safety-05&orientation=landscape',
        caption: 'Youth volunteer day · Ontario'
      }
    ]
  },
  {
    id: 'youth-wellbeing',
    number: '04',
    icon: 'ri-mental-health-line',
    title: 'Youth Education, Mental Health & Social Inclusion',
    tagline: 'Promoting Wellbeing. Expanding Knowledge. Building Inclusive Communities.',
    description:
      'Young people may face social isolation, discrimination, emotional strain and limited support. LDII uses education and community engagement to reduce mental health stigma, strengthen relationships and open doors to participation.',
    focus: [
      {
        title: 'Mental Health Awareness & Stigma Reduction',
        detail: 'Understanding mental health and where to find support.'
      },
      {
        title: 'Emotional Wellbeing',
        detail: 'Resilience, healthy relationships and positive connections.'
      },
      {
        title: 'Workshops & Awareness Campaigns',
        detail: 'Learning activities on social challenges and wellbeing.'
      },
      {
        title: 'Social Inclusion',
        detail: 'Participation for young people from diverse backgrounds.'
      },
      {
        title: 'Family, School & Partner Engagement',
        detail: 'Collaboration among youth, families, schools and mental health organizations.'
      }
    ],
    photos: [
      {
        url: 'https://readdy.ai/api/search-image?query=wellbeing%20and%20mental%20health%20awareness%20workshop%20for%20young%20people%2C%20facilitator%20speaking%20beside%20a%20calm%20display%20board%2C%20attentive%20diverse%20audience%20seated%2C%20soft%20natural%20light%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-youth-wellbeing-01&orientation=landscape',
        caption: 'Wellbeing awareness workshop · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=peer%20support%20circle%20of%20young%20adults%20seated%20on%20chairs%20in%20a%20quiet%20bright%20room%2C%20listening%20supportively%20to%20one%20another%2C%20plants%20and%20soft%20lighting%2C%20calm%20neutral%20palette%2C%20documentary%20photography&width=900&height=675&seq=lp-youth-wellbeing-02&orientation=landscape',
        caption: 'Peer support circle · Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=community%20awareness%20campaign%20booth%20in%20a%20public%20square%20with%20young%20volunteers%20handing%20out%20information%20to%20passers-by%2C%20bright%20daylight%2C%20healthy%20greenery%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-youth-wellbeing-03&orientation=landscape',
        caption: 'Community awareness campaign · Brampton, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=group%20of%20diverse%20teenagers%20laughing%20together%20during%20a%20creative%20group%20activity%20in%20a%20community%20centre%2C%20inclusive%20and%20welcoming%20atmosphere%2C%20warm%20natural%20light%2C%20neutral%20tones%2C%20documentary%20photography&width=900&height=675&seq=lp-youth-wellbeing-04&orientation=landscape',
        caption: 'Diverse youth group activity · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=parents%2C%20teachers%20and%20community%20partners%20in%20a%20friendly%20discussion%20around%20a%20large%20table%20in%20a%20school%20meeting%20room%2C%20notes%20and%20water%20glasses%2C%20warm%20daylight%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-youth-wellbeing-05&orientation=landscape',
        caption: 'Families and school partners session · Ontario'
      }
    ]
  },
  {
    id: 'community-partnerships',
    number: '05',
    icon: 'ri-community-line',
    title: 'Community Partnerships & Collaborative Development',
    tagline: 'Connecting Organizations. Strengthening Partnerships. Advancing Community Development.',
    description:
      'LDII brings together community organizations, educational institutions, government, businesses and development partners to agree on shared priorities and act on them together.',
    focus: [
      {
        title: 'Partnership Development',
        detail: 'Building relationships with local organizations and institutions.'
      },
      {
        title: 'Institutional & Government Collaboration',
        detail: 'Working with universities, colleges, research bodies and municipal and provincial institutions.'
      },
      {
        title: 'Business & Community Partnerships',
        detail: 'Linking businesses and community groups for social and economic development.'
      },
      {
        title: 'Community Capacity Building',
        detail: 'Leadership development and organizational learning.'
      },
      {
        title: 'Joint Initiatives & Knowledge Sharing',
        detail: 'Shared programmes, resources and expertise.'
      },
      {
        title: 'Consultations & Forums',
        detail: 'Meetings, workshops and conferences that set community priorities.'
      }
    ],
    photos: [
      {
        url: 'https://readdy.ai/api/search-image?query=partnership%20agreement%20signing%20ceremony%20with%20two%20representatives%20signing%20documents%20at%20a%20table%2C%20others%20applauding%20behind%20them%2C%20bright%20boardroom%2C%20warm%20daylight%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-partnerships-01&orientation=landscape',
        caption: 'Partnership signing ceremony · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=stakeholder%20planning%20meeting%20with%20diverse%20community%20leaders%20around%20a%20long%20table%2C%20printed%20agendas%20and%20laptops%2C%20focused%20discussion%2C%20warm%20natural%20light%2C%20neutral%20tones%2C%20documentary%20photography&width=900&height=675&seq=lp-partnerships-02&orientation=landscape',
        caption: 'Stakeholder planning meeting · Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=community%20forum%20panel%20with%20four%20speakers%20seated%20on%20stage%20in%20front%20of%20an%20engaged%20audience%2C%20microphones%20and%20simple%20stage%20design%2C%20warm%20auditorium%20lighting%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-partnerships-03&orientation=landscape',
        caption: 'Community forum panel · Brampton, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=community%20group%20visiting%20a%20local%20institution%20partner%2C%20small%20delegation%20walking%20through%20a%20bright%20modern%20building%20with%20a%20host%20explaining%2C%20warm%20daylight%2C%20neutral%20palette%2C%20documentary%20photography&width=900&height=675&seq=lp-partnerships-04&orientation=landscape',
        caption: 'Partner institution visit · Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=joint%20workshop%20with%20partner%20organizations%2C%20participants%20standing%20around%20flip%20charts%20with%20sticky%20notes%2C%20collaborative%20energetic%20session%20in%20a%20bright%20room%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-partnerships-05&orientation=landscape',
        caption: 'Joint workshop with partners · Toronto, Ontario'
      }
    ]
  },
  {
    id: 'seniors-support',
    number: '06',
    icon: 'ri-user-heart-line',
    title: 'Seniors Support, Wellbeing & Social Inclusion',
    tagline: 'Supporting Seniors. Promoting Dignity. Strengthening Community Connections.',
    description:
      'Seniors bring knowledge and experience to families and communities, yet many face isolation, digital exclusion and limited access to information. LDII promotes their dignity, independence and active participation in community life.',
    focus: [
      {
        title: 'Social Connection',
        detail: 'Gatherings and activities that reduce loneliness.'
      },
      {
        title: 'Digital Literacy',
        detail: 'Practical computer and technology skills.'
      },
      {
        title: 'Healthy Aging & Wellbeing',
        detail: 'Education on wellbeing and available support.'
      },
      {
        title: 'Safety & Fraud Awareness',
        detail: 'Helping seniors protect themselves from scams and risks.'
      },
      {
        title: 'Intergenerational Learning',
        detail: 'Shared activities between seniors and youth.'
      },
      {
        title: 'Access to Services',
        detail: 'Connecting seniors with programmes, community centres and service providers.'
      }
    ],
    photos: [
      {
        url: 'https://readdy.ai/api/search-image?query=seniors%20social%20gathering%20with%20older%20adults%20seated%20around%20small%20tables%20with%20tea%20and%20pastries%2C%20warm%20conversation%20and%20laughter%2C%20sunlit%20community%20hall%2C%20neutral%20tones%2C%20documentary%20photography&width=900&height=675&seq=lp-seniors-01&orientation=landscape',
        caption: 'Seniors social gathering · Brampton, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=older%20adults%20in%20a%20computer%20class%20learning%20on%20tablets%20with%20a%20patient%20young%20instructor%20helping%2C%20bright%20library%20room%2C%20warm%20daylight%2C%20neutral%20tones%2C%20documentary%20photography&width=900&height=675&seq=lp-seniors-02&orientation=landscape',
        caption: 'Seniors digital literacy class · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=seniors%20and%20young%20people%20working%20together%20on%20a%20shared%20art%20and%20craft%20activity%20at%20a%20community%20table%2C%20intergenerational%20learning%20and%20warmth%2C%20soft%20natural%20light%2C%20neutral%20tones%2C%20editorial%20photography&width=900&height=675&seq=lp-seniors-03&orientation=landscape',
        caption: 'Seniors and youth shared activity · Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=fraud%20and%20safety%20awareness%20talk%20for%20seniors%20in%20a%20community%20room%2C%20presenter%20explaining%20at%20a%20screen%2C%20attentive%20older%20audience%20with%20information%20leaflets%2C%20warm%20lighting%2C%20neutral%20tones%2C%20documentary%20photography&width=900&height=675&seq=lp-seniors-04&orientation=landscape',
        caption: 'Fraud awareness session · Toronto, Ontario'
      },
      {
        url: 'https://readdy.ai/api/search-image?query=gentle%20chair%20exercise%20and%20wellbeing%20session%20for%20seniors%20in%20a%20bright%20community%20hall%2C%20instructor%20guiding%20the%20group%2C%20encouraging%20atmosphere%2C%20natural%20light%2C%20neutral%20palette%2C%20editorial%20photography&width=900&height=675&seq=lp-seniors-05&orientation=landscape',
        caption: 'Wellbeing and light exercise session · Brampton, Ontario'
      }
    ]
  }
];

export const approachSteps = [
  {
    number: '01',
    icon: 'ri-message-2-line',
    title: 'Listen first',
    detail: 'Identify needs, priorities and opportunities together with the community.'
  },
  {
    number: '02',
    icon: 'ri-graduation-cap-line',
    title: 'Build skills',
    detail: 'Workshops, training and learning opportunities, especially for youth.'
  },
  {
    number: '03',
    icon: 'ri-links-line',
    title: 'Connect people',
    detail: 'Link individuals and families to knowledge, resources and opportunities.'
  },
  {
    number: '04',
    icon: 'ri-team-line',
    title: 'Work in partnership',
    detail: 'Share expertise with partners so local initiatives last.'
  }
];

export const commitments = [
  {
    icon: 'ri-heart-3-line',
    title: 'Inclusion',
    detail: 'Serving newcomers, youth, families and seniors of every background with dignity and respect.'
  },
  {
    icon: 'ri-seedling-line',
    title: 'Opportunity',
    detail: 'Helping people gain the skills, confidence and connections to build independent livelihoods.'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Safety and wellbeing',
    detail: 'Supporting safer neighbourhoods and greater awareness of mental health.'
  },
  {
    icon: 'ri-hand-heart-line',
    title: 'Partnership',
    detail: 'Working openly with community organizations, institutions, police services, businesses and government.'
  },
  {
    icon: 'ri-bar-chart-box-line',
    title: 'Accountability',
    detail: 'Listening to communities, measuring our results and using what we learn to improve.'
  }
];

export const programmePartners = [
  'Community organizations',
  'Schools, colleges and universities',
  'Government agencies',
  'Police services',
  'Local businesses',
  'Settlement and health partners'
];