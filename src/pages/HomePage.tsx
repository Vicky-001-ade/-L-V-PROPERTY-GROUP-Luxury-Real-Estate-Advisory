import React, { useState } from 'react';
import { PageId, Property } from '../types';
import { PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { ArrowUpRight, Shield, Award, Compass, TrendingUp, Sparkles, Building2, Key, BarChart3 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProperty: (property: Property) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProperty }) => {
  const [filter, setFilter] = useState<'All' | 'For Sale' | 'For Rent'>('All');

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filter === 'All') return true;
    return p.status === filter;
  });

  return (
    <div className="w-full">
      
      {/* ==================================================
          SECTION A: PREMIUM HERO
          ================================================== */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#171B19]">
        {/* Full-width Cinematic Architectural Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_luxury_villa_1794250558934.jpg"
            alt="Contemporary luxury residence with cantilevered architecture and infinity pool"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-100"
          />
          {/* Refined subtle dark overlay for superior contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171B19] via-[#171B19]/55 to-[#171B19]/40" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44 flex flex-col items-start justify-center">
          <div className="max-w-3xl space-y-6">
            
            {/* Refined Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#171B19]/75 backdrop-blur-md border border-[#A58B68]/40">
              <span className="font-sans text-[11px] font-semibold tracking-[0.28em] text-[#A58B68] uppercase">
                REAL ESTATE. REIMAGINED.
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#FFFFFF] tracking-tight leading-[1.08] text-balance">
              Find a Place That Moves You.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-xl text-[#EAE6DD]/90 font-light leading-relaxed max-w-2xl">
              Exceptional properties. Thoughtful guidance. A better way to discover where life and opportunity meet.
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#171B19] bg-[#F5F2EB] hover:bg-[#A58B68] hover:text-[#FFFFFF] transition-all duration-300 cursor-pointer shadow-lg whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#FFFFFF] bg-transparent border border-white/40 hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Speak With Our Team</span>
              </button>
            </div>

          </div>
        </div>

        {/* Ambient bottom KPI strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#171B19]/80 backdrop-blur-md border-t border-white/10 hidden lg:block">
          <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-4 gap-8 text-white/90">
            <div className="border-r border-white/10 pr-6">
              <span className="block text-[10px] uppercase tracking-widest text-[#A58B68]">Bespoke Practice</span>
              <span className="font-serif text-lg text-white">Private Client Advisory</span>
            </div>
            <div className="border-r border-white/10 pr-6">
              <span className="block text-[10px] uppercase tracking-widest text-[#A58B68]">Prime Enclaves</span>
              <span className="font-serif text-lg text-white">Ikoyi · Banana Island · VI</span>
            </div>
            <div className="border-r border-white/10 pr-6">
              <span className="block text-[10px] uppercase tracking-widest text-[#A58B68]">Market Orientation</span>
              <span className="font-serif text-lg text-white">Luxury Sales & Leasing</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-[#A58B68]">Demonstration</span>
              <span className="font-serif text-lg text-white">Architectural Portfolio</span>
            </div>
          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION B: INTRODUCTION
          ================================================== */}
      <section className="py-20 lg:py-32 bg-[#F5F2EB] border-b border-[#D9D3C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
                THE ÉLÉVÉ PERSPECTIVE
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19] leading-tight">
                Real Estate, With a More Refined Perspective.
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#171B19]/80 leading-relaxed">
                At ÉLÉVÉ Property Group, we believe finding the right property is about more than location. It is about understanding your ambitions, recognising opportunity and making decisions with confidence.
              </p>

              <p className="font-sans text-sm text-[#77766F] leading-relaxed">
                Whether orchestrating the confidential disposal of a premier residential estate, advising institutional capital on prime yield acquisitions, or guiding a family toward their sanctuary in West Africa, we combine rigorous market intelligence with bespoke discretion.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#171B19] bg-transparent border border-[#171B19] hover:bg-[#171B19] hover:text-[#F5F2EB] transition-all cursor-pointer"
                >
                  <span>Discover Our Approach</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Architectural Image Split (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 w-full bg-[#EAE6DD] border border-[#D9D3C8] overflow-hidden shadow-xl">
                <img
                  src="/src/assets/images/prop_azure_penthouse_1794250561445.jpg"
                  alt="Double-height luxury penthouse interior with marble fireplace and waterfront views"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-sans">
                  <span className="text-[#A58B68] uppercase tracking-widest text-[10px] block">Atmosphere</span>
                  <span className="font-serif text-lg">Curated spaces engineered for human distinction</span>
                </div>
              </div>
              {/* Refined offset geometric backing */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 border border-[#A58B68]/30 -z-10" />
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION C: PROPERTY COLLECTION
          ================================================== */}
      <section id="properties" className="py-20 lg:py-32 bg-[#EAE6DD]/50 border-b border-[#D9D3C8] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block mb-2">
                CURATED RESIDENCES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19] leading-tight">
                Spaces Worth Discovering.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#77766F] mt-2 max-w-xl">
                Explore a curated selection of exceptional properties and opportunities.
              </p>
            </div>

            {/* Interactive Filter Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-[#FFFFFF] border border-[#D9D3C8]">
              {(['All', 'For Sale', 'For Rent'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                    filter === tab
                      ? 'bg-[#171B19] text-[#F5F2EB]'
                      : 'text-[#77766F] hover:text-[#171B19]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Important Demonstration Notice Callout */}
          <div className="mb-8 p-3.5 bg-[#FFFFFF] border border-[#D9D3C8] text-xs text-[#77766F] flex items-center gap-3">
            <Shield className="w-4 h-4 text-[#A58B68] shrink-0" />
            <p>
              <strong className="text-[#171B19] font-medium">Demonstration Notice:</strong> The properties below are illustrative portfolio concepts showcasing our luxury architectural standards, presentation standards, and advisory parameters. They do not constitute active or verified public listings.
            </p>
          </div>

          {/* Property Cards Grid (1 col mobile, 2 col tablet/desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
              />
            ))}
          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION D: WHY CHOOSE US
          ================================================== */}
      <section className="py-20 lg:py-32 bg-[#F5F2EB] border-b border-[#D9D3C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
              OUR STANDARDS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19]">
              A Better Standard of Property Experience.
            </h2>
            <p className="text-sm text-[#77766F]">
              Every client interaction is grounded in discretion, meticulous analytical rigor, and bespoke service.
            </p>
          </div>

          {/* Four Elegant Feature Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* 01 */}
            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] flex flex-col justify-between hover:border-[#A58B68] transition-colors">
              <div>
                <span className="font-serif text-2xl font-light text-[#A58B68] block mb-4">
                  01
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#171B19] mb-3">
                  Market Insight
                </h3>
                <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                  Thoughtful guidance backed by an understanding of property markets, neighbourhoods and investment opportunities.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] flex flex-col justify-between hover:border-[#A58B68] transition-colors">
              <div>
                <span className="font-serif text-2xl font-light text-[#A58B68] block mb-4">
                  02
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#171B19] mb-3">
                  Curated Opportunities
                </h3>
                <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                  Discover carefully considered property options aligned with your needs, lifestyle and ambitions.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] flex flex-col justify-between hover:border-[#A58B68] transition-colors">
              <div>
                <span className="font-serif text-2xl font-light text-[#A58B68] block mb-4">
                  03
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#171B19] mb-3">
                  Personalised Guidance
                </h3>
                <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                  Enjoy a more attentive experience with support throughout your property journey.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] flex flex-col justify-between hover:border-[#A58B68] transition-colors">
              <div>
                <span className="font-serif text-2xl font-light text-[#A58B68] block mb-4">
                  04
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#171B19] mb-3">
                  Professional Approach
                </h3>
                <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                  From initial discovery to final decisions, every detail deserves a thoughtful approach.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION E: SERVICES PREVIEW
          ================================================== */}
      <section className="py-20 lg:py-32 bg-[#EAE6DD]/40 border-b border-[#D9D3C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block mb-2">
                PRACTICE AREAS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19]">
                Expertise Across Every Property Journey.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#171B19] hover:text-[#A58B68] transition-colors cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Premium Service Previews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: Residential Sales */}
            <div className="bg-[#FFFFFF] border border-[#D9D3C8] overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-16/10 overflow-hidden bg-[#EAE6DD]">
                <img
                  src="/src/assets/images/prop_meridian_residence_1794250560154.jpg"
                  alt="Residential Property Sales"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#A58B68] uppercase block mb-2">
                    01 · DISPOSAL & PURCHASE
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#171B19] mb-3">
                    Residential Sales
                  </h3>
                  <p className="text-xs text-[#77766F] leading-relaxed font-sans mb-6">
                    Bespoke marketing and discrete acquisition of exceptional residential estates and architectural residences.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold tracking-wider uppercase text-[#171B19] group-hover:text-[#A58B68] flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 2: Luxury Rentals */}
            <div className="bg-[#FFFFFF] border border-[#D9D3C8] overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-16/10 overflow-hidden bg-[#EAE6DD]">
                <img
                  src="/src/assets/images/prop_willow_estate_1794250561673.jpg"
                  alt="Luxury Property Rentals"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#A58B68] uppercase block mb-2">
                    02 · LEASING & TENANCY
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#171B19] mb-3">
                    Luxury Rentals
                  </h3>
                  <p className="text-xs text-[#77766F] leading-relaxed font-sans mb-6">
                    Curated executive residences, diplomatic compounds, and high-floor serviced penthouses.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold tracking-wider uppercase text-[#171B19] group-hover:text-[#A58B68] flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 3: Property Investment Advisory */}
            <div className="bg-[#FFFFFF] border border-[#D9D3C8] overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-16/10 overflow-hidden bg-[#EAE6DD]">
                <img
                  src="/src/assets/images/prop_crest_residence_1794250561608.jpg"
                  alt="Property Investment Advisory"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#A58B68] uppercase block mb-2">
                    03 · CAPITAL STRATEGY
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#171B19] mb-3">
                    Investment Advisory
                  </h3>
                  <p className="text-xs text-[#77766F] leading-relaxed font-sans mb-6">
                    Strategic capital allocation, yield evaluation, and off-market portfolio sourcing across West African hubs.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold tracking-wider uppercase text-[#171B19] group-hover:text-[#A58B68] flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION F: FEATURED EDITORIAL SECTION
          ================================================== */}
      <section className="relative py-28 lg:py-40 bg-[#171B19] overflow-hidden">
        {/* Full-width Photographic Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/prop_crest_residence_1794250561608.jpg"
            alt="Banana Island luxury waterfront architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171B19] via-[#171B19]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A58B68] uppercase block">
              EDITORIAL PERSPECTIVE
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] leading-tight text-balance">
              More Than Property. A Sense of Possibility.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#EAE6DD]/90 leading-relaxed font-light">
              Whether you are searching for your next home or exploring a new investment, the right guidance can make all the difference.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#171B19] bg-[#A58B68] hover:bg-[#FFFFFF] transition-colors cursor-pointer"
              >
                <span>Start Your Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION G: FINAL CTA
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#F5F2EB] border-t border-[#D9D3C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
            NEXT STEPS
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19] leading-tight">
            Your Next Chapter Starts Here.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#171B19]/75 max-w-xl mx-auto">
            Let's find the property, opportunity or direction that moves you forward.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#F5F2EB] bg-[#171B19] hover:bg-[#A58B68] transition-colors cursor-pointer shadow-md"
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
