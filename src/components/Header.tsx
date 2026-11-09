import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F2EB]/95 backdrop-blur-md border-b border-[#D9D3C8] shadow-xs'
          : 'bg-[#F5F2EB]/80 backdrop-blur-sm border-b border-[#D9D3C8]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Wordmark Brand Lockup */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex flex-col items-start justify-center text-left shrink-0 transition-opacity hover:opacity-85"
            aria-label="ÉLÉVÉ Property Group Home"
          >
            <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-[#171B19] uppercase leading-none">
              ÉLÉVÉ
            </span>
            <span className="font-sans text-[9px] tracking-[0.38em] text-[#77766F] font-medium uppercase mt-1">
              PROPERTY GROUP
            </span>
          </a>

          {/* Zone 2: 3 Concise Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] tracking-[0.14em] uppercase font-medium text-[#77766F]"
          >
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`relative py-2 transition-colors hover:text-[#171B19] cursor-pointer whitespace-nowrap shrink-0 ${
                currentPage === 'home'
                  ? 'text-[#171B19] font-semibold'
                  : 'text-[#77766F]'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A58B68]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('services')}
              className={`relative py-2 transition-colors hover:text-[#171B19] cursor-pointer whitespace-nowrap shrink-0 ${
                currentPage === 'services'
                  ? 'text-[#171B19] font-semibold'
                  : 'text-[#77766F]'
              }`}
            >
              Services
              {currentPage === 'services' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A58B68]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`relative py-2 transition-colors hover:text-[#171B19] cursor-pointer whitespace-nowrap shrink-0 ${
                currentPage === 'contact'
                  ? 'text-[#171B19] font-semibold'
                  : 'text-[#77766F]'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A58B68]" />
              )}
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase text-[#171B19] bg-transparent border border-[#171B19] hover:bg-[#171B19] hover:text-[#F5F2EB] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58B68]"
            >
              <span>Speak With Our Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#171B19] hover:text-[#A58B68] focus-visible:outline-2 focus-visible:outline-[#A58B68] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F2EB] border-b border-[#D9D3C8] px-6 pt-4 pb-8 shadow-xl transition-all">
          <nav className="flex flex-col space-y-4 pt-2">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between py-3 text-base tracking-[0.14em] uppercase border-b border-[#D9D3C8]/60 text-left ${
                currentPage === 'home'
                  ? 'text-[#171B19] font-bold'
                  : 'text-[#77766F]'
              }`}
            >
              <span>Home</span>
              {currentPage === 'home' && <span className="w-2 h-2 rounded-full bg-[#A58B68]" />}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('services')}
              className={`flex items-center justify-between py-3 text-base tracking-[0.14em] uppercase border-b border-[#D9D3C8]/60 text-left ${
                currentPage === 'services'
                  ? 'text-[#171B19] font-bold'
                  : 'text-[#77766F]'
              }`}
            >
              <span>Services</span>
              {currentPage === 'services' && <span className="w-2 h-2 rounded-full bg-[#A58B68]" />}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`flex items-center justify-between py-3 text-base tracking-[0.14em] uppercase border-b border-[#D9D3C8]/60 text-left ${
                currentPage === 'contact'
                  ? 'text-[#171B19] font-bold'
                  : 'text-[#77766F]'
              }`}
            >
              <span>Contact Us</span>
              {currentPage === 'contact' && <span className="w-2 h-2 rounded-full bg-[#A58B68]" />}
            </button>

            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs tracking-[0.14em] uppercase font-semibold text-[#F5F2EB] bg-[#171B19] hover:bg-[#A58B68] transition-colors"
              >
                <span>Speak With Our Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="pt-4 text-xs text-[#77766F] space-y-2 border-t border-[#D9D3C8]/60">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#A58B68]" />
                  <a href="tel:+2348000000000" className="hover:text-[#171B19]">+234 800 000 0000</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#A58B68]" />
                  <a href="mailto:hello@eleveproperty.example" className="hover:text-[#171B19]">hello@eleveproperty.example</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
