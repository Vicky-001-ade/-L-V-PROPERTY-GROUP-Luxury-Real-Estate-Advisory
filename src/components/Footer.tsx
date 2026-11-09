import React, { useState } from 'react';
import { PageId } from '../types';
import { ArrowUpRight, Mail, Phone, MapPin, Check, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, targetSectionId?: string) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError('Please provide your email address.');
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#171B19] text-[#F5F2EB] border-t border-[#2A2E2C]">
      {/* Upper Footer: Brand & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="flex flex-col items-start text-left cursor-pointer group focus:outline-hidden"
              aria-label="Go to ÉLÉVÉ Property Group Home"
            >
              <span className="font-serif text-3xl tracking-[0.25em] font-semibold text-[#F5F2EB] group-hover:text-[#A58B68] transition-colors uppercase leading-none">
                ÉLÉVÉ
              </span>
              <span className="font-sans text-[10px] tracking-[0.4em] text-[#A58B68] font-medium uppercase mt-1.5">
                PROPERTY GROUP
              </span>
            </button>

            <p className="font-serif italic text-lg text-[#EAE6DD]/90 max-w-md">
              &ldquo;Exceptional Properties. Extraordinary Possibilities.&rdquo;
            </p>

            <p className="text-sm text-[#A09E96] leading-relaxed max-w-md font-sans">
              Discover exceptional spaces, make confident property decisions, and experience a more considered approach to luxury residential real estate, property acquisitions, and private investment advisory.
            </p>

            {/* Demonstration notice */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTerms}
                className="inline-flex items-center gap-2 py-1 text-xs text-[#A58B68]/90 hover:text-[#F5F2EB] font-mono transition-colors cursor-pointer text-left"
              >
                <Shield className="w-3.5 h-3.5 text-[#A58B68]" />
                <span>Demonstration Portfolio & Concept Presentation</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A58B68]">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-[#D9D3C8]/80 font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'enquiry-form')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Contact & Enquiries
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home', 'properties')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all cursor-pointer text-left"
                >
                  Curated Properties
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A58B68]">
              Expertise
            </h3>
            <ul className="space-y-3 text-sm text-[#D9D3C8]/80 font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'residential-sales')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Residential Sales
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'luxury-rentals')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Luxury Rentals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'investment-advisory')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Investment Advisory
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'property-acquisition')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Property Acquisition
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'property-management')}
                  className="hover:text-[#F5F2EB] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Asset Management
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A58B68]">
              Private Journal
            </h3>
            <p className="text-xs text-[#A09E96] leading-relaxed">
              Receive confidential off-market briefings, architectural spotlights, and prime market quarterly intelligence.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-[#222724] border border-[#A58B68]/40 text-[#F5F2EB] text-xs flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#A58B68] shrink-0" />
                <span>Thank you. You have been added to our private advisory journal list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email address"
                    className="w-full bg-[#202523] border border-[#3A403D] focus:border-[#A58B68] text-xs text-[#F5F2EB] px-3.5 py-3 pr-10 focus:outline-hidden transition-colors placeholder:text-[#77766F]"
                    aria-label="Newsletter email address"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#A58B68] text-[#171B19] hover:bg-[#bfa581] transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe to Private Journal"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-[#E07A5F]">{error}</p>}
                <p className="text-[11px] text-[#77766F]">
                  Discreet communication only. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Contact Strip */}
        <div className="mt-12 pt-8 border-t border-[#2A2E2C] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#A09E96]">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#A58B68] shrink-0" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#77766F]">Direct Inquiries</span>
              <a href="mailto:hello@eleveproperty.example" className="hover:text-[#F5F2EB] transition-colors">
                hello@eleveproperty.example
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#A58B68] shrink-0" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#77766F]">Telephone Desk</span>
              <a href="tel:+2348000000000" className="hover:text-[#F5F2EB] transition-colors">
                +234 800 000 0000
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#A58B68] shrink-0" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#77766F]">Headquarters</span>
              <button
                type="button"
                onClick={() => onNavigate('contact', 'headquarters')}
                className="text-[#F5F2EB] hover:text-[#A58B68] transition-colors cursor-pointer text-left"
              >
                Lagos, Nigeria · View Map & Enclaves →
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 pt-8 border-t border-[#222724] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#77766F]">
          <p>
            &copy; {new Date().getFullYear()} ÉLÉVÉ Property Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#D9D3C8] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#D9D3C8] transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="text-[#A58B68]/90 hover:text-[#F5F2EB] transition-colors cursor-pointer"
            >
              Portfolio Demonstration Edition
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
