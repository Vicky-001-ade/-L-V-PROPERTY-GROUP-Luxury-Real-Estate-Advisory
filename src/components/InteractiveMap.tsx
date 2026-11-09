import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';

interface DistrictInfo {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  primeFeatures: string[];
  coordinates: string;
  x: number; // percentage on map
  y: number; // percentage on map
}

const DISTRICTS: DistrictInfo[] = [
  {
    id: 'victoria-island',
    name: 'Victoria Island',
    subtitle: 'Financial Hub & Luxury Coastal Residences',
    description: 'The premier diplomatic, financial, and luxury high-rise waterfront enclave of Lagos.',
    primeFeatures: ['Diplomatic missions', 'Waterfront penthouses', 'Fine dining & private members clubs'],
    coordinates: '6.4281° N, 3.4219° E',
    x: 38,
    y: 62,
  },
  {
    id: 'ikoyi',
    name: 'Old Ikoyi',
    subtitle: 'Diplomatic Haven & Historic Tree-Lined Avenues',
    description: 'Renowned for grand private estates, serene tree-canopied avenues, and high security.',
    primeFeatures: ['Exclusive gated estates', 'Historic royal palms', 'Private golf and yacht clubs'],
    coordinates: '6.4549° N, 3.4246° E',
    x: 48,
    y: 38,
  },
  {
    id: 'banana-island',
    name: 'Banana Island',
    subtitle: 'West Africa’s Most Prestigious Waterfront Enclave',
    description: 'An ultra-exclusive man-made island sanctuary featuring private deep-water yacht berths.',
    primeFeatures: ['Private yacht moorings', 'Helipads', 'Unmatched security perimeter'],
    coordinates: '6.4632° N, 3.4475° E',
    x: 64,
    y: 28,
  },
  {
    id: 'lekki-phase-1',
    name: 'Lekki Phase 1',
    subtitle: 'Contemporary Architectural Innovation',
    description: 'A vibrant coastal district distinguished by cutting-edge modern minimalist residences.',
    primeFeatures: ['Avant-garde architecture', 'Boutique art galleries', 'Private coastal access'],
    coordinates: '6.4474° N, 3.4731° E',
    x: 78,
    y: 54,
  },
];

export const InteractiveMap: React.FC = () => {
  const [activeDistrict, setActiveDistrict] = useState<DistrictInfo>(DISTRICTS[0]);

  const handleOpenGoogleMaps = () => {
    const query = encodeURIComponent(`${activeDistrict.name}, Lagos, Nigeria`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#D9D3C8] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Visual Architectural Map Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-[#171B19] relative min-h-[360px] sm:min-h-[440px] flex items-center justify-center p-6 overflow-hidden select-none">
          {/* Subtle Grid Blueprint Background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(#A58B68 1px, transparent 1px), linear-gradient(90deg, #A58B68 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Stylized Coastal Water & Landform SVG */}
          <svg
            className="w-full h-full absolute inset-0 text-[#222724]"
            viewBox="0 0 1000 650"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Lagoon Water Body */}
            <path
              d="M0 0 L1000 0 L1000 220 C850 240 780 180 650 190 C500 200 420 140 280 170 C160 190 80 150 0 180 Z"
              fill="#121514"
            />
            {/* Atlantic Ocean at bottom */}
            <path
              d="M0 560 C200 540 450 570 700 550 C850 530 950 560 1000 550 L1000 650 L0 650 Z"
              fill="#121514"
            />
            {/* Coastline Contours */}
            <path
              d="M0 180 C80 150 160 190 280 170 C420 140 500 200 650 190 C780 180 850 240 1000 220"
              stroke="#A58B68"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.3"
            />
            <path
              d="M0 560 C200 540 450 570 700 550 C850 530 950 560 1000 550"
              stroke="#A58B68"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </svg>

          {/* Compass Rose */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#A58B68] bg-[#171B19]/90 px-2.5 py-1 border border-[#A58B68]/30">
            <Compass className="w-3.5 h-3.5" />
            <span>N 6°26′ · E 3°25′</span>
          </div>

          {/* Interactive District Map Pins */}
          {DISTRICTS.map((district) => {
            const isSelected = activeDistrict.id === district.id;
            return (
              <button
                key={district.id}
                type="button"
                onClick={() => setActiveDistrict(district)}
                style={{ left: `${district.x}%`, top: `${district.y}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer focus:outline-hidden"
                aria-label={`Select ${district.name}`}
              >
                <div className="relative flex items-center justify-center">
                  {/* Outer ripple ring when selected */}
                  {isSelected && (
                    <span className="absolute w-9 h-9 rounded-full bg-[#A58B68]/30 animate-ping" />
                  )}
                  {/* Pin core */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#A58B68] text-[#171B19] shadow-lg scale-110 ring-4 ring-[#A58B68]/30'
                        : 'bg-[#222724] text-[#D9D3C8] border border-[#A58B68]/50 hover:bg-[#A58B68] hover:text-[#171B19]'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Floating Label */}
                <div
                  className={`mt-1.5 px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#F5F2EB] text-[#171B19] font-semibold shadow-md'
                      : 'bg-[#171B19]/80 text-[#D9D3C8] border border-white/10 group-hover:bg-[#F5F2EB] group-hover:text-[#171B19]'
                  }`}
                >
                  {district.name}
                </div>
              </button>
            );
          })}

          {/* Legend / Overlay info */}
          <div className="absolute bottom-4 left-4 text-[10px] text-[#A09E96] font-mono tracking-wide bg-[#171B19]/80 px-3 py-1.5 border border-white/10 backdrop-blur-xs">
            <span>LAGOS PRIME LUXURY CORRIDOR</span>
          </div>
        </div>

        {/* Selected District Details & Action Panel (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#FFFFFF]">
          <div>
            <div className="flex items-center justify-between text-xs text-[#A58B68] font-mono mb-2">
              <span>PRIME ENCLAVE</span>
              <span>{activeDistrict.coordinates}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171B19] leading-tight mb-2">
              {activeDistrict.name}
            </h3>

            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#77766F] mb-4">
              {activeDistrict.subtitle}
            </p>

            <p className="text-sm text-[#171B19]/80 leading-relaxed font-sans mb-6">
              {activeDistrict.description}
            </p>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171B19] block">
                District Highlights
              </span>
              <ul className="space-y-1.5 text-xs text-[#77766F] font-sans">
                {activeDistrict.primeFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A58B68]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#D9D3C8] space-y-3">
            <div className="text-xs text-[#77766F]">
              <span className="font-medium text-[#171B19]">Executive Advisory Desk:</span> Mon–Fri, 9:00 AM – 5:00 PM WAT
            </div>

            <button
              type="button"
              onClick={handleOpenGoogleMaps}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-[#F5F2EB] bg-[#171B19] hover:bg-[#A58B68] transition-colors cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions to {activeDistrict.name}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
