import React from 'react';
import { Property } from '../types';
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(property)}
      className="group relative bg-[#FFFFFF] border border-[#D9D3C8] transition-all duration-300 hover:border-[#A58B68]/70 hover:shadow-lg flex flex-col h-full cursor-pointer overflow-hidden"
    >
      {/* Visual Carrier */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EAE6DD]">
        <img
          src={property.image}
          alt={property.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark subtle gradient scrim at base for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges / Metadata */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 text-[11px] font-medium tracking-[0.15em] uppercase text-[#171B19] bg-[#F5F2EB]/95 backdrop-blur-xs border border-[#D9D3C8]">
            {property.status}
          </span>
          <span className="px-2.5 py-1 text-[11px] font-sans font-medium tracking-wide text-[#F5F2EB] bg-[#171B19]/80 backdrop-blur-xs border border-white/20">
            {property.type}
          </span>
        </div>

        {/* Price overlay on image bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between pointer-events-none">
          <div className="text-[#F5F2EB]">
            <span className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-white drop-shadow-sm">
              {property.price}
            </span>
            {property.pricePeriod && (
              <span className="ml-1 text-xs text-[#EAE6DD] font-sans font-light">
                / {property.pricePeriod}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-[#FFFFFF]">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-[#77766F] mb-2 font-sans">
            <MapPin className="w-3.5 h-3.5 text-[#A58B68] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl font-semibold text-[#171B19] group-hover:text-[#A58B68] transition-colors leading-tight mb-2">
            {property.title}
          </h3>

          <p className="text-xs text-[#77766F] line-clamp-2 leading-relaxed mb-4 font-sans">
            {property.tagline}
          </p>

          {/* Zero-Pill Architectural Specs Strip */}
          <div className="flex items-center gap-4 py-3 border-y border-[#D9D3C8]/60 text-xs text-[#171B19] font-sans">
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#A58B68]" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <span className="text-[#D9D3C8]">|</span>
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-[#A58B68]" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <span className="text-[#D9D3C8]">|</span>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#A58B68]" />
              <span className="tabular-nums">{property.squareMeters} m²</span>
            </div>
          </div>
        </div>

        {/* Action Button & Demo Label */}
        <div className="mt-5 pt-2 flex items-center justify-between">
          <span className="text-[10px] text-[#A58B68] font-mono tracking-wider uppercase">
            Demonstration Listing
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#171B19] group-hover:text-[#A58B68] transition-colors">
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};
