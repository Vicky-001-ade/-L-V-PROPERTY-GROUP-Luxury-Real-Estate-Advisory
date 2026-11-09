import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F5F2EB] border border-[#D9D3C8] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#171B19] hover:text-[#A58B68] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A58B68] tracking-widest mb-2">
          <Shield className="w-4 h-4" />
          <span>ÉLÉVÉ Advisory Governance</span>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 font-sans text-xs sm:text-sm text-[#171B19]/80 leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171B19]">
              Privacy & Client Confidentiality Policy
            </h2>
            <p>
              At ÉLÉVÉ Property Group, discretion and client confidentiality form the cornerstone of our advisory mandate. We collect only necessary personal identification, contact coordinates, and acquisition preferences required to fulfill your advisory briefing.
            </p>
            <h3 className="font-serif text-lg font-semibold text-[#171B19] pt-2">
              Confidentiality Standards
            </h3>
            <p>
              Client identities and property transaction data are never distributed, sold, or shared with third parties. Off-market viewings and portfolio discussions are conducted under non-disclosure agreements where requested.
            </p>
            <h3 className="font-serif text-lg font-semibold text-[#171B19] pt-2">
              Portfolio Demonstration Notice
            </h3>
            <p className="p-3 bg-[#EAE6DD] border border-[#D9D3C8] text-xs font-mono text-[#171B19]">
              Notice: ÉLÉVÉ Property Group is a fictional portfolio demonstration brand. Property listings and contact details shown across this website are illustrative concepts designed to demonstrate real estate website architecture and design systems.
            </p>
          </div>
        ) : (
          <div className="space-y-4 font-sans text-xs sm:text-sm text-[#171B19]/80 leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171B19]">
              Terms of Advisory Engagement
            </h2>
            <p>
              Welcome to ÉLÉVÉ Property Group. Access to this platform and our advisory materials is governed by these Terms of Engagement.
            </p>
            <h3 className="font-serif text-lg font-semibold text-[#171B19] pt-2">
              Fiduciary Scope & Representations
            </h3>
            <p>
              Information presented in architectural briefs, property overviews, and market intelligence reports is provided for conceptual and evaluative guidance. Formal acquisitions remain subject to definitive contracts, physical structural audits, and independent title searches.
            </p>
            <h3 className="font-serif text-lg font-semibold text-[#171B19] pt-2">
              Illustrative Demonstration Status
            </h3>
            <p className="p-3 bg-[#EAE6DD] border border-[#D9D3C8] text-xs font-mono text-[#171B19]">
              All property names, financial valuations, and transaction terms on this website are illustrative portfolio demonstration materials created for presentation purposes and do not represent verified active commercial offerings.
            </p>
          </div>
        )}

        <div className="pt-6 border-t border-[#D9D3C8] mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#171B19] text-[#F5F2EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#A58B68] transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
