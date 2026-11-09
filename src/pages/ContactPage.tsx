import React, { useState, useEffect, useRef } from 'react';
import { PageId, ContactFormState } from '../types';
import { FAQS } from '../data/faqs';
import { InteractiveMap } from '../components/InteractiveMap';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Shield,
  Send,
  Copy,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  initialInterest?: string;
  initialPropertyTitle?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialInterest,
  initialPropertyTitle,
  onNavigate,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    interest: initialInterest || (initialPropertyTitle ? 'Buying a Property' : 'Buying a Property'),
    preferredLocation: initialPropertyTitle ? 'Lekki Phase 1' : 'Ikoyi',
    budgetRange: '₦500M - ₦1B',
    message: initialPropertyTitle
      ? `I am interested in receiving full architectural and transaction details regarding ${initialPropertyTitle}. Please get in touch.`
      : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialInterest) {
      setForm((prev) => ({ ...prev, interest: initialInterest }));
    }
  }, [initialInterest]);

  useEffect(() => {
    if (initialPropertyTitle) {
      setForm((prev) => ({
        ...prev,
        message: `I am interested in receiving full architectural and transaction details regarding ${initialPropertyTitle}. Please get in touch.`,
      }));
    }
  }, [initialPropertyTitle]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormState, string>> = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number with country code.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please provide a message or details regarding your requirements.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate processing with prevention of accidental repeated submits
    setTimeout(() => {
      const code = `ELV-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(code);
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: formRef.current ? formRef.current.offsetTop - 120 : 0, behavior: 'smooth' });
    }, 600);
  };

  const handleCopySummary = () => {
    const summary = `ÉLÉVÉ Property Enquiry [Ref: ${referenceCode}]\nName: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\nLocation: ${form.preferredLocation}\nBudget: ${form.budgetRange}\nMessage: ${form.message}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`ÉLÉVÉ Property Advisory Enquiry - Ref ${referenceCode || 'New'}`);
    const body = encodeURIComponent(
      `Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested In: ${form.interest}\nPreferred Location: ${form.preferredLocation}\nBudget: ${form.budgetRange}\n\nRequirements:\n${form.message}`
    );
    window.location.href = `mailto:hello@eleveproperty.example?subject=${subject}&body=${body}`;
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full">
      
      {/* ==================================================
          CONTACT HERO SECTION
          ================================================== */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-center justify-center bg-[#171B19] overflow-hidden">
        {/* Background Architectural Image with Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_luxury_villa_1794250558934.jpg"
            alt="Contemporary architectural facade"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171B19] via-[#171B19]/75 to-[#171B19]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 flex flex-col items-start justify-center">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#171B19]/80 backdrop-blur-md border border-[#A58B68]/40">
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#A58B68] uppercase">
                LET'S START A CONVERSATION
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#FFFFFF] tracking-tight leading-[1.1] text-balance">
              Your Property Journey Starts With a Conversation.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#EAE6DD]/90 leading-relaxed font-light max-w-2xl">
              Whether you are buying, selling, renting or exploring an investment, we are here to help you take the next step.
            </p>
          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION A: CONTACT INFORMATION STRIP
          ================================================== */}
      <section className="py-12 bg-[#EAE6DD]/60 border-b border-[#D9D3C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-6 bg-[#FFFFFF] border border-[#D9D3C8] space-y-2">
              <div className="flex items-center gap-2 text-[#A58B68]">
                <Mail className="w-5 h-5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171B19]">Direct Email</span>
              </div>
              <a
                href="mailto:hello@eleveproperty.example"
                className="font-serif text-lg text-[#171B19] hover:text-[#A58B68] transition-colors block"
              >
                hello@eleveproperty.example
              </a>
              <span className="text-[11px] text-[#77766F] block">Confidential response within 24h</span>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[#D9D3C8] space-y-2">
              <div className="flex items-center gap-2 text-[#A58B68]">
                <Phone className="w-5 h-5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171B19]">Telephone Desk</span>
              </div>
              <a
                href="tel:+2348000000000"
                className="font-serif text-lg text-[#171B19] hover:text-[#A58B68] transition-colors block"
              >
                +234 800 000 0000
              </a>
              <span className="text-[11px] text-[#77766F] block">Dedicated private client line</span>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[#D9D3C8] space-y-2">
              <div className="flex items-center gap-2 text-[#A58B68]">
                <MapPin className="w-5 h-5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171B19]">Advisory Hub</span>
              </div>
              <p className="font-serif text-lg text-[#171B19]">
                Lagos, Nigeria
              </p>
              <span className="text-[11px] text-[#77766F] block">Victoria Island / Ikoyi Corridor</span>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[#D9D3C8] space-y-2">
              <div className="flex items-center gap-2 text-[#A58B68]">
                <Clock className="w-5 h-5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171B19]">Office Hours</span>
              </div>
              <p className="font-serif text-lg text-[#171B19]">
                Mon – Fri: 9:00 AM – 5:00 PM
              </p>
              <span className="text-[11px] text-[#77766F] block">West Africa Time (WAT)</span>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION B: CONTACT FORM
          ================================================== */}
      <section ref={formRef} id="enquiry-form" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#D9D3C8] scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
              PRIVATE ENQUIRY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19]">
              Tell Us What You're Looking For.
            </h2>
            <p className="text-sm sm:text-base text-[#77766F] max-w-xl mx-auto">
              Share a few details about your property needs and our team can follow up.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#D9D3C8] p-6 sm:p-10 lg:p-12 shadow-sm">
            {submitted ? (
              /* Polished Success State */
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-4 p-4 bg-[#F5F2EB] border border-[#A58B68]/50">
                  <CheckCircle2 className="w-6 h-6 text-[#A58B68] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#171B19]">
                      Enquiry Received
                    </h3>
                    <p className="text-xs text-[#77766F] mt-1 font-sans">
                      Thank you, <strong className="text-[#171B19]">{form.fullName}</strong>. Your enquiry has been registered under reference code{' '}
                      <span className="font-mono text-[#A58B68] font-bold">{referenceCode}</span>. A senior property director will contact you within one business day.
                    </p>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="p-5 bg-[#F5F2EB]/60 border border-[#D9D3C8] text-xs font-sans space-y-2 text-[#171B19]">
                  <div className="font-semibold text-xs uppercase tracking-wider text-[#A58B68] mb-3">
                    Enquiry Details Summary
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-[#77766F] block text-[11px]">Subject of Interest:</span>
                      <span className="font-medium">{form.interest}</span>
                    </div>
                    <div>
                      <span className="text-[#77766F] block text-[11px]">Preferred Enclave:</span>
                      <span className="font-medium">{form.preferredLocation}</span>
                    </div>
                    <div>
                      <span className="text-[#77766F] block text-[11px]">Budget Bracket:</span>
                      <span className="font-medium">{form.budgetRange}</span>
                    </div>
                    <div>
                      <span className="text-[#77766F] block text-[11px]">Contact Email & Phone:</span>
                      <span className="font-medium">{form.email} · {form.phone}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#D9D3C8]/60 mt-2">
                    <span className="text-[#77766F] block text-[11px]">Requirements Note:</span>
                    <p className="italic text-[#171B19]/80 mt-1">{form.message}</p>
                  </div>
                </div>

                {/* Integration fallback actions */}
                <div className="p-4 bg-[#171B19] text-[#F5F2EB] text-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#A58B68] font-mono text-[11px]">
                    <Shield className="w-3.5 h-3.5" />
                    <span>DIRECT DISPATCH FALLBACK</span>
                  </div>
                  <p className="text-[#D9D3C8]/80 leading-relaxed">
                    This demonstration application is wired for immediate client-side handling. You can open your default email client pre-populated with this enquiry, or copy the brief to your clipboard.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleOpenMailClient}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#A58B68] text-[#171B19] font-medium text-xs hover:bg-[#FFFFFF] transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#222724] border border-[#3A403D] text-[#F5F2EB] font-medium text-xs hover:bg-[#2A302D] transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Brief'}</span>
                    </button>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        interest: 'Buying a Property',
                        preferredLocation: 'Ikoyi',
                        budgetRange: '₦500M - ₦1B',
                        message: '',
                      });
                    }}
                    className="text-xs uppercase tracking-wider font-semibold text-[#171B19] hover:text-[#A58B68] transition-colors cursor-pointer"
                  >
                    ← Submit Another Property Enquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* 2-column: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#171B19] mb-2">
                      Full Name <span className="text-[#A58B68]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g. Alistair Sterling"
                      className={`w-full px-4 py-3 bg-[#F5F2EB]/50 border text-sm text-[#171B19] focus:outline-hidden transition-colors ${
                        errors.fullName ? 'border-[#E07A5F] focus:border-[#E07A5F]' : 'border-[#D9D3C8] focus:border-[#171B19]'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#E07A5F] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#171B19] mb-2">
                      Email Address <span className="text-[#A58B68]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. sterling@capital.example"
                      className={`w-full px-4 py-3 bg-[#F5F2EB]/50 border text-sm text-[#171B19] focus:outline-hidden transition-colors ${
                        errors.email ? 'border-[#E07A5F] focus:border-[#E07A5F]' : 'border-[#D9D3C8] focus:border-[#171B19]'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#E07A5F] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 2-column: Phone & Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#171B19] mb-2">
                      Phone Number <span className="text-[#A58B68]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +234 803 123 4567"
                      className={`w-full px-4 py-3 bg-[#F5F2EB]/50 border text-sm text-[#171B19] focus:outline-hidden transition-colors ${
                        errors.phone ? 'border-[#E07A5F] focus:border-[#E07A5F]' : 'border-[#D9D3C8] focus:border-[#171B19]'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#E07A5F] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-wider text-[#171B19] mb-2">
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F2EB]/50 border border-[#D9D3C8] text-sm text-[#171B19] focus:outline-hidden focus:border-[#171B19] transition-colors"
                    >
                      <option value="Buying a Property">Buying a Property</option>
                      <option value="Selling a Property">Selling a Property</option>
                      <option value="Renting a Property">Renting a Property</option>
                      <option value="Property Investment">Property Investment Advisory</option>
                      <option value="Property Management">Property Management & Oversight</option>
                      <option value="General Enquiry">General Confidential Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* 2-column: Preferred Location & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredLocation" className="block text-xs font-semibold uppercase tracking-wider text-[#171B19] mb-2">
                      Preferred Location
                    </label>
                    <select
                      id="preferredLocation"
                      value={form.preferredLocation}
                      onChange={(e) => setForm({ ...form, preferredLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F2EB]/50 border border-[#D9D3C8] text-sm text-[#171B19] focus:outline-hidden focus:border-[#171B19] transition-colors"
                    >
                      <option value="Ikoyi">Old Ikoyi Enclave</option>
                      <option value="Banana Island">Banana Island Waterfront</option>
                      <option value="Victoria Island">Victoria Island Prime</option>
                      <option value="Lekki Phase 1">Lekki Phase 1</option>
                      <option value="Eko Atlantic">Eko Atlantic City</option>
                      <option value="Regional & International">Regional / International Mandate</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budgetRange" className="block text-xs font-semibold uppercase tracking-wider text-[#171B19] mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      value={form.budgetRange}
                      onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F2EB]/50 border border-[#D9D3C8] text-sm text-[#171B19] focus:outline-hidden focus:border-[#171B19] transition-colors"
                    >
                      <option value="Under ₦200M">Under ₦200,000,000</option>
                      <option value="₦200M - ₦500M">₦200,000,000 – ₦500,000,000</option>
                      <option value="₦500M - ₦1B">₦500,000,000 – ₦1,000,000,000</option>
                      <option value="₦1B+">₦1,000,000,000+ (Ultra-Prime)</option>
                      <option value="Rental Under ₦10M/yr">Rental: Under ₦10,000,000/yr</option>
                      <option value="Rental ₦10M+/yr">Rental: ₦10,000,000+/yr</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#171B19] mb-2">
                    Message / Specifications <span className="text-[#A58B68]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your ideal property, spatial requirements, desired timeline, or investment objectives..."
                    className={`w-full px-4 py-3 bg-[#F5F2EB]/50 border text-sm text-[#171B19] focus:outline-hidden transition-colors ${
                      errors.message ? 'border-[#E07A5F] focus:border-[#E07A5F]' : 'border-[#D9D3C8] focus:border-[#171B19]'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#E07A5F] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button & Assurance */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#77766F]">
                    <Shield className="w-3.5 h-3.5 text-[#A58B68]" />
                    <span>Strict confidentiality protocol guaranteed.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#F5F2EB] bg-[#171B19] hover:bg-[#A58B68] disabled:opacity-60 transition-all cursor-pointer shadow-md whitespace-nowrap"
                  >
                    {submitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION C: LOCATION & INTERACTIVE MAP
          ================================================== */}
      <section id="headquarters" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9D3C8] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
              OUR PRESENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19]">
              Lagos Prime Coastal Corridors.
            </h2>
            <p className="text-sm text-[#77766F] leading-relaxed">
              Our advisory operates across the most sought-after enclaves in Lagos, Nigeria. Explore our primary districts of operation below.
            </p>
          </div>

          {/* Interactive Architectural Map Component */}
          <InteractiveMap />

        </div>
      </section>


      {/* ==================================================
          SECTION D: FREQUENTLY ASKED QUESTIONS (Accordion)
          ================================================== */}
      <section id="faqs" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#D9D3C8] scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
              COMMON INQUIRIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171B19]">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm text-[#77766F]">
              Direct answers regarding our advisory practice, viewings, and client protocols.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#FFFFFF] border border-[#D9D3C8] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl font-semibold text-[#171B19] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A58B68] shrink-0 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#171B19]/80 leading-relaxed font-sans border-t border-[#D9D3C8]/40 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION E: FINAL CTA
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#171B19] text-[#F5F2EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B68] uppercase block">
            CONFIDENTIAL DIALOGUE
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FFFFFF] leading-tight">
            Good Property Decisions Begin With the Right Conversation.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#EAE6DD]/80 max-w-xl mx-auto font-light">
            Connect directly with an ÉLÉVÉ partner to discuss your portfolio, property search, or asset disposal.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#171B19] bg-[#A58B68] hover:bg-[#FFFFFF] transition-colors cursor-pointer shadow-md"
            >
              <span>Send Us an Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
