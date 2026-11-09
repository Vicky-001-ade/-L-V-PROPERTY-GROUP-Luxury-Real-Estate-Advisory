export type PageId = 'home' | 'services' | 'contact';

export interface Property {
  id: string;
  title: string;
  location: string;
  district: string;
  price: string;
  numericPrice?: number;
  pricePeriod?: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  status: 'For Sale' | 'For Rent';
  image: string;
  tagline: string;
  description: string;
  architecturalHighlights: string[];
  features: string[];
  yearBuilt: number;
  parkingSpaces: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  deliverables: string[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  preferredLocation: string;
  budgetRange: string;
  message: string;
}
