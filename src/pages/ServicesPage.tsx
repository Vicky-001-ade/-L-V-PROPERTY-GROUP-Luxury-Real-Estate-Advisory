import React from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/services';
import { ArrowUpRight, Check, Compass, Eye, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, prefillInterest?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      
      {/* ==================================================
          SERVICES HERO SECTION
          ================================================== */}
      <section className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center bg-[#171B19] overflow-hidden">
        {/* Architectural Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/prop_meridian_residence.jpg"
            alt="Lekki Phase 1 luxury architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171B19] via-[#171B19]/75 to-[#171B19]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 flex flex-col items-start justify-center">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#171B19]/80 backdrop-blur-md border border-[#A58B68]/40">
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#A58B68] uppercase">
                WHAT WE DO
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#FFFFFF] tracking-tight leading-[1.1] text-balance">
              Property Expertise. Thoughtfully Delivered.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#EAE6DD]/90 leading-relaxed font-light max-w-2xl">
              From finding the perfect residence to identifying promising investment opportunities, we provide a considered approach to every property decision.
            </p>
          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION A: OUR SERVICES (5 Alternating Editorial Sections)
          ================================================== */}
      <section className="py-20 lg:py-32 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-36">
          
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-light text-[#A58B68]">
                      {service.number}
                    </span>
                    <span className="text-[#D9D3C8]">/</span>
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#77766F]">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#171B19] leading-tight">
                    {service.title}
                  </h2>

                  <p className="font-sans text-base text-[#171B19]/80 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits / Deliverables List */}
                  <div className="pt-2 space-y-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#171B19] block">
                      Scope of Advisory
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#77766F] font-sans">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#A58B68] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => onNavigate('contact', service.title)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#F5F2EB] bg-[#171B19] hover:bg-[#A58B68] transition-colors cursor-pointer"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-4/3 w-full bg-[#EAE6DD] border border-[#D9D3C8] overflow-hidden shadow-lg group">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-mono text-[11px] text-[#A58B68] tracking-widest uppercase">
                        ÉLÉVÉ PRACTICE {service.number}
                      </span>
                      <span className="font-serif text-sm">Discrete Advisory</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>


      {/* ==================================================
          SECTION B: OUR PROCESS (Timeline)
          ================================================== */}
      <section className="py-20 lg:py-32 bg-[#EAE6DD]/50 border-y border-[#D9D3C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
              OUR METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19]">
              From First Conversation to the Right Opportunity.
            </h2>
            <p className="text-sm text-[#77766F]">
              A disciplined, unhurried progression designed around clarity, discretion, and confidence.
            </p>
          </div>

          {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-[1px] bg-[#D9D3C8] -z-0" />

            {/* Step 01 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left bg-[#FFFFFF] md:bg-transparent p-6 md:p-0 border md:border-0 border-[#D9D3C8]">
              <div className="w-14 h-14 bg-[#171B19] text-[#F5F2EB] flex items-center justify-center font-serif text-xl font-medium mb-5 shadow-xs">
                01
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#171B19] mb-2">
                Discover
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                Understand your property goals, expectations and requirements through confidential dialogue.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left bg-[#FFFFFF] md:bg-transparent p-6 md:p-0 border md:border-0 border-[#D9D3C8]">
              <div className="w-14 h-14 bg-[#171B19] text-[#F5F2EB] flex items-center justify-center font-serif text-xl font-medium mb-5 shadow-xs">
                02
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#171B19] mb-2">
                Explore
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                Identify suitable opportunities and relevant property options across public and private channels.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left bg-[#FFFFFF] md:bg-transparent p-6 md:p-0 border md:border-0 border-[#D9D3C8]">
              <div className="w-14 h-14 bg-[#171B19] text-[#F5F2EB] flex items-center justify-center font-serif text-xl font-medium mb-5 shadow-xs">
                03
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#171B19] mb-2">
                Evaluate
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                Review your options and receive guidance to make informed decisions with exhaustive due diligence.
              </p>
            </div>

            {/* Step 04 */}
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left bg-[#FFFFFF] md:bg-transparent p-6 md:p-0 border md:border-0 border-[#D9D3C8]">
              <div className="w-14 h-14 bg-[#A58B68] text-[#171B19] flex items-center justify-center font-serif text-xl font-semibold mb-5 shadow-xs">
                04
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#171B19] mb-2">
                Move Forward
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                Proceed with confidence with support throughout your next steps, contract closing, and handover.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION C: WHY WORK WITH US
          ================================================== */}
      <section className="py-20 lg:py-32 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
              THE ÉLÉVÉ STANDARD
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19]">
              Why Clients Choose Our Advisory.
            </h2>
            <p className="text-sm sm:text-base text-[#77766F] leading-relaxed">
              We operate as trusted fiduciaries for our clients, prioritizing lasting relationships and capital protection over high-volume transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] space-y-3">
              <Compass className="w-6 h-6 text-[#A58B68]" />
              <h3 className="font-serif text-xl font-semibold text-[#171B19]">
                Personalised Property Guidance
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                Each client is assigned a dedicated senior advisor who takes the time to understand unique family, spatial, or investment parameters.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] space-y-3">
              <Eye className="w-6 h-6 text-[#A58B68]" />
              <h3 className="font-serif text-xl font-semibold text-[#171B19]">
                Attention to Detail
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                From architectural scrutiny and engineering inspections to discrete deed reviews, we uncover nuances others overlook.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] space-y-3">
              <Award className="w-6 h-6 text-[#A58B68]" />
              <h3 className="font-serif text-xl font-semibold text-[#171B19]">
                Market Understanding
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                Deep-rooted intelligence within Lagos prime districts (Ikoyi, Victoria Island, Banana Island, Lekki) and emerging coastal corridors.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#A58B68]" />
              <h3 className="font-serif text-xl font-semibold text-[#171B19]">
                Professional Communication
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                Timely, transparent, and concise reporting with strict confidentiality protocols protecting our clients’ identity.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#D9D3C8] space-y-3 sm:col-span-2 lg:col-span-2">
              <HeartHandshake className="w-6 h-6 text-[#A58B68]" />
              <h3 className="font-serif text-xl font-semibold text-[#171B19]">
                Client-Focused Service
              </h3>
              <p className="text-xs text-[#77766F] leading-relaxed font-sans">
                Our independence allows us to advise with objective candor. If a prospective opportunity does not meet your standards or represent sound value, we advise against proceeding.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION D: FINAL CTA
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#171B19] text-[#F5F2EB] border-t border-[#2A2E2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
            START YOUR CONSULTATION
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FFFFFF] leading-tight">
            Let's Find the Right Opportunity.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#EAE6DD]/80 max-w-xl mx-auto font-light">
            Tell us what you are looking for. We would love to understand your goals and help you take the next step.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#171B19] bg-[#A58B68] hover:bg-[#FFFFFF] transition-colors cursor-pointer shadow-md"
            >
              <span>Contact Our Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
