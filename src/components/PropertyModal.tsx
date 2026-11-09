import React, { useEffect } from 'react';
import { Property, PageId } from '../types';
import { X, ArrowUpRight, Bed, Bath, Maximize2, Car, Calendar, MapPin, Check, Shield } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onEnquire: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onEnquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-property-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F5F2EB] border border-[#D9D3C8] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#171B19]/80 text-[#F5F2EB] hover:bg-[#171B19] transition-colors cursor-pointer"
          aria-label="Close Property Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Section */}
        <div className="relative aspect-16/9 w-full bg-[#EAE6DD] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold bg-[#A58B68] text-[#171B19]">
                  {property.status}
                </span>
                <span className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-sans bg-black/60 backdrop-blur-xs text-white border border-white/20">
                  {property.type}
                </span>
              </div>
              <h2 id="modal-property-title" className="font-serif text-2xl sm:text-4xl font-semibold text-white">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#D9D3C8] mt-1 font-sans">
                <MapPin className="w-4 h-4 text-[#A58B68]" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-[#D9D3C8] uppercase tracking-wider block">Price</span>
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                {property.price}
              </span>
              {property.pricePeriod && (
                <span className="text-xs text-[#EAE6DD] ml-1">/ {property.pricePeriod}</span>
              )}
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 bg-[#EAE6DD]/70 border border-[#D9D3C8] text-xs font-sans">
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <Bed className="w-4 h-4 text-[#A58B68] mb-1" />
              <span className="text-[#77766F] text-[11px]">Bedrooms</span>
              <span className="font-semibold text-sm text-[#171B19]">{property.bedrooms} Beds</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center">
              <Bath className="w-4 h-4 text-[#A58B68] mb-1" />
              <span className="text-[#77766F] text-[11px]">Bathrooms</span>
              <span className="font-semibold text-sm text-[#171B19]">{property.bathrooms} Baths</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center">
              <Maximize2 className="w-4 h-4 text-[#A58B68] mb-1" />
              <span className="text-[#77766F] text-[11px]">Internal Area</span>
              <span className="font-semibold text-sm text-[#171B19] tabular-nums">{property.squareMeters} m²</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center">
              <Car className="w-4 h-4 text-[#A58B68] mb-1" />
              <span className="text-[#77766F] text-[11px]">Private Parking</span>
              <span className="font-semibold text-sm text-[#171B19]">{property.parkingSpaces} Vehicles</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center col-span-2 sm:col-span-1">
              <Calendar className="w-4 h-4 text-[#A58B68] mb-1" />
              <span className="text-[#77766F] text-[11px]">Completion</span>
              <span className="font-semibold text-sm text-[#171B19]">{property.yearBuilt}</span>
            </div>
          </div>

          {/* Architectural Narrative */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#171B19]">
              Architectural Overview
            </h3>
            <p className="text-sm text-[#171B19]/80 leading-relaxed font-sans">
              {property.description}
            </p>
          </div>

          {/* Highlights & Features 2-column split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A58B68]">
                Architectural Highlights
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#171B19]/90 font-sans">
                {property.architecturalHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A58B68] mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A58B68]">
                Curated Amenities & Systems
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#171B19]/90 font-sans">
                {property.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#A58B68] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Demonstration Notice & Action Bar */}
          <div className="pt-6 border-t border-[#D9D3C8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#77766F] font-mono">
              <Shield className="w-4 h-4 text-[#A58B68] shrink-0" />
              <span>Illustrative Portfolio Property (Not an active real estate listing)</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 text-xs uppercase tracking-wider font-medium text-[#171B19] border border-[#D9D3C8] hover:bg-[#EAE6DD] transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onEnquire(property)}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#F5F2EB] bg-[#171B19] hover:bg-[#A58B68] transition-colors cursor-pointer"
              >
                <span>Enquire About This Property</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
