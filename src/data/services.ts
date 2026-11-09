import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-sales',
    number: '01',
    category: 'Acquisitions & Disposals',
    title: 'Residential Property Sales',
    description:
      'Discover exceptional homes and residential opportunities with guidance designed to make your buying journey more informed, seamless and rewarding. We represent premier residential assets with absolute discretion and market acumen.',
    image: '/images/prop_meridian_residence.jpg',
    deliverables: [
      'Property discovery & bespoke private viewings',
      'Confidential buyer consultation & portfolio alignment',
      'Curated shortlist tailored to lifestyle requirements',
      'Transaction guidance, due diligence & contract advisory',
      'Seamless closing coordination and escrow management',
    ],
    ctaText: 'Enquire About Purchasing',
  },
  {
    id: 'luxury-rentals',
    number: '02',
    category: 'Leasing & Tenancy',
    title: 'Luxury Property Rentals',
    description:
      'Find a residence that reflects your lifestyle, expectations and preferred location through a more personalised rental experience. From architectural penthouses to diplomatic enclaves, we curate rentals of unmatched distinction.',
    image: '/images/prop_willow_estate.jpg',
    deliverables: [
      'Premium rental discovery across prime Lagos enclaves',
      'Bespoke tenant consultation & relocation assistance',
      'Private viewing arrangements tailored to your schedule',
      'Comprehensive lease structuring & negotiation',
      'Ongoing tenancy onboarding & concierge check-in support',
    ],
    ctaText: 'Explore Rental Options',
  },
  {
    id: 'investment-advisory',
    number: '03',
    category: 'Capital & Yield Strategy',
    title: 'Real Estate Investment Advisory',
    description:
      'Explore property investment opportunities with a thoughtful approach to location, market positioning and long-term potential. We assist private clients, family offices, and institutional investors in identifying capital growth and resilient yields.',
    image: '/images/prop_crest_residence.jpg',
    deliverables: [
      'Investment opportunity sourcing & off-market pipeline',
      'Macro & micro-market intelligence across West Africa',
      'Rigorous financial modeling, yield & IRR projections',
      'Acquisition guidance & capital allocation strategy',
      'Post-acquisition portfolio review & exit horizon planning',
    ],
    ctaText: 'Request Investment Brief',
  },
  {
    id: 'property-acquisition',
    number: '04',
    category: 'Buyer Representation',
    title: 'Property Acquisition and Sourcing',
    description:
      'Let us help you identify properties that align with your requirements, objectives and investment preferences. Acting exclusively on your behalf, our search mandate provides uncompromised advocacy in securing rare prime real estate.',
    image: '/images/hero_luxury_villa.jpg',
    deliverables: [
      'Bespoke off-market property sourcing & owner outreach',
      'Exhaustive client requirement assessment & spatial scoping',
      'Curated confidential property shortlist preparation',
      'Unbiased technical, architectural & title verification',
      'Independent pricing negotiation & transaction closing support',
    ],
    ctaText: 'Initiate Acquisition Search',
  },
  {
    id: 'property-management',
    number: '05',
    category: 'Asset Stewardship',
    title: 'Property Management and Consultancy',
    description:
      'Support your property ownership journey with organised, professional property oversight and advisory services. We preserve architectural integrity, ensure tenant satisfaction, and optimize long-term asset value.',
    image: '/images/prop_azure_penthouse.jpg',
    deliverables: [
      'Comprehensive property management & technical oversight',
      'Proactive preventative maintenance & engineering audits',
      'Strategic rental positioning & premium tenant curation',
      'Detailed financial reporting & yield optimization',
      'Long-term capital expenditure planning & repositioning',
    ],
    ctaText: 'Consult on Asset Management',
  },
];
