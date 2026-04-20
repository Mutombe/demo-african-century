// African Century — site content
// A Harare-based financial services firm.
// Content written in an editorial, private-banking register.

export const business = {
  name: 'African Century',
  shortName: 'African Century',
  legalName: 'African Century Limited',
  tagline: 'Capital. Judgment. A century to come.',
  established: 2011,
  logo: '/logo.svg',
  phone: '+263 24 2705503',
  whatsapp: '263242705503',
  email: 'info@africancentury.co.zw',
  address: '153 Josiah Chinamano Avenue, Harare, Zimbabwe',
  addressShort: '153 Josiah Chinamano Ave, Harare',
  mapsUrl: 'https://www.google.com/maps/place/153+Josiah+Chinamano+Ave,+Harare,+Zimbabwe',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.089!2d31.0420!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDInMzEuMiJF!5e0!3m2!1sen!2szw!4v1700000000000',
  hours: {
    weekdays: '08:00 – 16:30',
    saturday: 'By appointment',
    sunday: 'Closed',
  },
  licensing: [
    'Registered by the Reserve Bank of Zimbabwe (RBZ)',
    'Licensed by the Securities and Exchange Commission of Zimbabwe (SECZ)',
    'Member of the Deposit Protection Corporation',
  ],
  rating: 4.1,
  reviewCount: 71,
  instagram: 'https://www.instagram.com/africancentury/',
  linkedin: 'https://www.linkedin.com/company/african-century-limited/',
};

export const hero = {
  kicker: 'Since 2011 · Harare, Zimbabwe',
  headlinePre: 'Capital.',
  headlineMid: 'Judgment.',
  headlineAccent: 'A century to come.',
  sub:
    'African Century is a financial house that partners with Zimbabwean enterprise — from boardroom to family business — with rigour, long horizons, and the quiet discipline of capital deployed well.',
  ctaPrimary: { label: 'Our Services', to: '/services' },
  ctaSecondary: { label: 'Arrange a Meeting', to: '/contact' },
  image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80',
  imageSecondary: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  alt: 'Boardroom at dusk, Harare skyline visible through floor-to-ceiling windows',
};

export const stats = [
  { value: '$420M+', label: 'Capital Deployed', note: 'Cumulative since 2011' },
  { value: '14', label: 'Years Serving', note: 'Zimbabwean business' },
  { value: '1,200+', label: 'Deals Closed', note: 'Corporate & SME mandates' },
  { value: '9', label: 'Industries', note: 'From agriculture to tech' },
];

export const pillars = [
  {
    slug: 'corporate-lending',
    title: 'Corporate Lending',
    kicker: 'Pillar 01',
    icon: 'Buildings',
    short:
      'Structured debt for established corporates — working capital, trade finance, project lending and bank guarantees.',
    long:
      'We structure debt the way a craftsman cuts stone: deliberately, and to fit. Our corporate lending desk serves listed and unlisted companies across Zimbabwe with senior facilities from US$500k to US$8M, supported by our own balance sheet and a tested network of participating institutions. Tenors typically run from 90 days through to 36 months, with covenants written for operators — not auditors.',
    features: [
      'Revolving working capital facilities',
      'Trade and import finance',
      'Project and capex lending',
      'Bank guarantees & surety bonds',
      'Cross-border settlement support',
    ],
  },
  {
    slug: 'sme-finance',
    title: 'SME Finance',
    kicker: 'Pillar 02',
    icon: 'Storefront',
    short:
      'Growth capital and working-capital lines for ambitious small-and-medium businesses across Zimbabwe.',
    long:
      'The SME desk is where African Century earns its name. We lend to founders and second-generation operators who have outgrown an overdraft but are not yet ready for the bond market. Facilities from US$25k to US$500k, decided by a credit committee that reads balance sheets — and also reads people. We have walked the factory floors of more than 600 Zimbabwean SMEs.',
    features: [
      'Working capital lines from US$25k',
      'Invoice and purchase-order discounting',
      'Expansion and acquisition finance',
      'Credit improvement advisory',
      'Founder-friendly covenants',
    ],
  },
  {
    slug: 'treasury',
    title: 'Treasury & Institutional',
    kicker: 'Pillar 03',
    icon: 'ChartLineUp',
    short:
      'Currency, liquidity and yield solutions for corporate treasuries, pension funds and institutional allocators.',
    long:
      'Our treasury desk acts as a quiet counterparty to Zimbabwean treasurers who must navigate USD, ZiG and the space between. We place institutional balances, structure yield-bearing instruments, and execute foreign exchange with discretion and tight spreads. Mandates are bespoke and confidentiality is total.',
    features: [
      'USD & ZiG deposit structuring',
      'Short-dated yield instruments',
      'Foreign exchange execution',
      'Liquidity & cash-flow advisory',
      'Corporate treasury outsourcing',
    ],
  },
  {
    slug: 'investment-advisory',
    title: 'Investment Advisory',
    kicker: 'Pillar 04',
    icon: 'Compass',
    short:
      'Wealth structuring, private placements and portfolio construction for high-net-worth individuals and families.',
    long:
      'Investment advisory at African Century is private by design. We serve a small roster of Zimbabwean families, foundations and individual principals with wealth structuring, cross-border allocation, real-asset sourcing and portfolio oversight. Each mandate is led by a partner. Nothing is outsourced. We are paid on advice, not on product.',
    features: [
      'Portfolio construction & oversight',
      'Private placements & co-investments',
      'Real-asset & property allocations',
      'Cross-border structuring',
      'Succession & stewardship planning',
    ],
  },
  {
    slug: 'leasing',
    title: 'Asset Finance & Leasing',
    kicker: 'Pillar 05',
    icon: 'Truck',
    short:
      'Equipment, vehicle and plant finance — structured leases that free up balance-sheet capacity for growth.',
    long:
      'Our leasing desk helps operators finance the machinery that moves Zimbabwe — tractors, trucks, plant, generators, medical equipment and tech infrastructure. Tenors to 60 months, residual structures that suit operators, and an in-house asset team that understands valuations in a dollarised market.',
    features: [
      'Operating & finance leases',
      'Sale-and-leaseback structures',
      'Fleet & plant financing',
      'Medical & technology equipment',
      'Flexible residual structures',
    ],
  },
];

export const approach = [
  {
    number: '01',
    title: 'Rigour',
    body:
      'We underwrite every mandate as if our own capital stood behind it — because, in most cases, it does. Numbers are checked, then checked again. Memoranda are written, not generated.',
  },
  {
    number: '02',
    title: 'Alignment',
    body:
      'We charge fairly, disclose fully, and invest alongside our clients where the structure permits. Incentives are the architecture of trust. Ours are deliberately designed.',
  },
  {
    number: '03',
    title: 'Local Knowledge',
    body:
      'Our team has operated through every cycle Zimbabwe has seen since dollarisation. We understand RBZ policy in its footnotes, not its headlines — and we know the operators behind the balance sheets.',
  },
  {
    number: '04',
    title: 'The Long View',
    body:
      'We are named for a century. We plan for one. Our oldest client relationships are now entering their second generation. That, to us, is the real measure of a financial house.',
  },
];

export const team = [
  {
    slug: 'tendai-masuku',
    name: 'Tendai Masuku',
    title: 'Managing Partner',
    credentials: 'MBA (Wits), CFA',
    bio:
      'Founded African Century in 2011 after a decade on the Johannesburg credit desk. Leads the corporate lending mandate and chairs the credit committee.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'rumbidzai-chikwanha',
    name: 'Rumbidzai Chikwanha',
    title: 'Partner, Treasury',
    credentials: 'ACCA, MSc Finance (LSE)',
    bio:
      'Twenty-three years across treasury and FX, including senior posts at Standard Bank and CBZ. Designs African Century\'s institutional yield products.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'farai-nyathi',
    name: 'Farai Nyathi',
    title: 'Partner, Investment Advisory',
    credentials: 'CFA, MBA (INSEAD)',
    bio:
      'Runs the private-client book. Previously built the Harare office of a pan-African advisory firm, serving founders across five countries.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'chipo-moyo',
    name: 'Chipo Moyo',
    title: 'Head of SME Finance',
    credentials: 'MBA (UZ)',
    bio:
      'Built the SME desk from the ground up in 2014. Has personally underwritten more than 400 SME facilities — and visited every borrower at their place of work.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'simbarashe-dube',
    name: 'Simbarashe Dube',
    title: 'Head of Asset Finance',
    credentials: 'CA(Z), CIMA',
    bio:
      'Leads the leasing book and asset valuation team. A former industrial accountant who now finances the machinery he used to operate.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'nyasha-kapuya',
    name: 'Nyasha Kapuya',
    title: 'General Counsel & Risk',
    credentials: 'LLB (UZ), LLM (Oxford)',
    bio:
      'Oversees legal, regulatory and compliance frameworks. Formerly with the Reserve Bank of Zimbabwe\'s banking supervision division.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'anesu-gumbo',
    name: 'Anesu Gumbo',
    title: 'Head of Credit',
    credentials: 'CFA, FRM',
    bio:
      'Convenes the credit committee. Has underwritten capital across agriculture, mining, retail, manufacturing, healthcare and fintech.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'tafadzwa-makoni',
    name: 'Tafadzwa Makoni',
    title: 'Head of Client Relationships',
    credentials: 'MBA (GIBS)',
    bio:
      'Single point of contact for corporate and institutional clients. Spent eight years at Ecobank before joining in 2018.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
];

export const insights = [
  {
    slug: 'zimbabwe-macro-outlook-2026',
    kicker: 'Macro',
    title: 'Zimbabwe Macro Outlook 2026 — The Second Half of the Story',
    excerpt:
      'ZiG has weathered its first year. What the current rate structure, formal-sector liquidity and a strengthening tobacco season mean for capital deployment over the next four quarters.',
    date: '2026-03-12',
    readTime: '9 min read',
    author: 'Tendai Masuku',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'sme-credit-trends',
    kicker: 'Credit',
    title: 'What 600 SME Facilities Taught Us About Zimbabwean Credit',
    excerpt:
      'A decade of lending to small-and-medium enterprises reveals patterns that formal credit scores miss. Three things we now underwrite that the bureau never will.',
    date: '2026-02-18',
    readTime: '7 min read',
    author: 'Chipo Moyo',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'zig-stabilisation-and-the-corporate-treasury',
    kicker: 'Treasury',
    title: 'ZiG Stabilisation and the Corporate Treasury',
    excerpt:
      'With gold-backed anchoring now in its second year, corporate treasurers face real optionality for the first time since dollarisation. A practical framework for thinking about currency mix.',
    date: '2026-01-29',
    readTime: '6 min read',
    author: 'Rumbidzai Chikwanha',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'private-capital-in-harare',
    kicker: 'Wealth',
    title: 'Private Capital in Harare — The Quiet Rise of Family Offices',
    excerpt:
      'The next decade will see Zimbabwean family wealth institutionalise. A field note from inside the conversations that are reshaping how private capital moves in Southern Africa.',
    date: '2026-01-08',
    readTime: '8 min read',
    author: 'Farai Nyathi',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'leasing-cycle-2026',
    kicker: 'Asset Finance',
    title: 'The Coming Leasing Cycle — Equipment, Energy and Capex',
    excerpt:
      'Zimbabwe\'s capex cycle is turning. Why operating leases are likely to outperform hire-purchase structures through the next eighteen months, and how we think about residuals.',
    date: '2025-12-14',
    readTime: '5 min read',
    author: 'Simbarashe Dube',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
  },
];

export const testimonials = [
  {
    quote:
      'African Century does not behave like any bank we have worked with. They understood our seasonality before we finished the first meeting — and they structured the facility around it, not around their credit template.',
    name: 'Vimbai Chidzonga',
    title: 'CFO, Agro Processors Zimbabwe',
    logo: 'AP',
  },
  {
    quote:
      'We have used larger institutions. Few have matched the speed of decision-making, and none have matched the quality of thinking. The credit memo they wrote on us read like a research report.',
    name: 'Kudakwashe Mbiri',
    title: 'Managing Director, Mbiri Holdings',
    logo: 'MH',
  },
  {
    quote:
      'They run the treasury mandate for our pension fund with unusual discretion. Monthly commentary is short, precise and — most importantly — honest about what they do not know.',
    name: 'Grace Matemera',
    title: 'Principal Officer, Heritage Pension',
    logo: 'HP',
  },
  {
    quote:
      'We were a two-person founding team with a working-capital problem. Chipo visited our warehouse, walked the floor, and approved the line in seven days. Three years on, we are one of their larger SME clients.',
    name: 'Panashe Zhou',
    title: 'Founder, Zhou & Partners Logistics',
    logo: 'ZP',
  },
];

export const story = {
  foundingYear: 2011,
  opener:
    'African Century was founded in Harare in 2011 with a modest proposition: that Zimbabwean business deserves a financial partner of genuine quality, operated with the patience and discipline of long capital.',
  paragraphs: [
    'We began as a lending house of seven people, working out of two rooms on Josiah Chinamano Avenue. Our first facility — to a family-run textile converter — is still on the book today, now in its fourth renewal. The converter has doubled in size four times. We have doubled alongside.',
    'Fifteen years on, African Century has grown into a multi-service financial house: corporate lending, SME finance, treasury, investment advisory and asset finance — each run by a partner, each with its own discipline, all operating under one credit committee and one philosophy.',
    'We remain deliberately boutique. Our headcount is under sixty. Our partners are accessible by name. Our decisions are made in Harare, for Harare, by people who live the same markets as their clients.',
  ],
  values: [
    { label: 'Integrity', text: 'Honesty in word, in document, in decision.' },
    { label: 'Excellence', text: 'A standard set by the work, not by the competition.' },
    { label: 'Responsiveness', text: 'Decisions in days, not months.' },
    { label: 'Discernment', text: 'We see beyond the balance sheet.' },
  ],
};

export const industries = [
  'Agriculture & Agro-processing',
  'Manufacturing & Industrial',
  'Mining & Resources',
  'Retail & Consumer Goods',
  'Healthcare & Pharmaceuticals',
  'Technology & Telecoms',
  'Logistics & Transport',
  'Hospitality & Tourism',
  'Professional Services',
];

export const googleReviews = [
  {
    name: 'Tawanda M.',
    rating: 5,
    date: '2 months ago',
    text: 'Excellent service from the SME team. Clear terms, fast turnaround, and actual follow-up after disbursement. Rare in Zimbabwe.',
  },
  {
    name: 'Rutendo K.',
    rating: 4,
    date: '5 months ago',
    text: 'Professional and discreet. Treasury desk delivered consistently on our institutional mandate. A serious house.',
  },
  {
    name: 'Blessing N.',
    rating: 5,
    date: '8 months ago',
    text: 'Our relationship manager knows our business better than some of our own board members. That is the highest compliment I can pay.',
  },
  {
    name: 'Lovemore C.',
    rating: 4,
    date: '11 months ago',
    text: 'Good lenders, conservative but fair. Took longer than expected on the initial review but the structure was right in the end.',
  },
];

export const faqs = [
  {
    q: 'What is the minimum facility size?',
    a: 'SME facilities begin at US$25,000. Corporate facilities are typically US$500,000 and above. Treasury and advisory mandates are bespoke.',
  },
  {
    q: 'How long does credit approval take?',
    a: 'Initial indication within five working days of a complete pack. Formal approval typically within three weeks. Complex structures may take longer.',
  },
  {
    q: 'Are you regulated?',
    a: 'African Century is registered with the Reserve Bank of Zimbabwe and licensed by SECZ. We are also a member of the Deposit Protection Corporation.',
  },
  {
    q: 'Do you lend in ZiG or USD?',
    a: 'Both. Our desk structures facilities in either currency, or in a blend, depending on the borrower\'s cash-flow profile.',
  },
  {
    q: 'Can I meet a partner directly?',
    a: 'Yes. We are deliberately boutique. Every client is introduced to the partner who will oversee their mandate.',
  },
];
