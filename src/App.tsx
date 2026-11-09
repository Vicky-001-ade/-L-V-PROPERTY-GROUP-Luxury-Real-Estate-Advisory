import React, { useState, useEffect } from 'react';
import { PageId, Property } from './types';
import { PROPERTIES } from './data/properties';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { LegalModal } from './components/LegalModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [prefillInterest, setPrefillInterest] = useState<string | undefined>(undefined);
  const [prefillPropertyTitle, setPrefillPropertyTitle] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToElementWithRetry = (elementId: string, attempts = 0) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (attempts < 10) {
      setTimeout(() => scrollToElementWithRetry(elementId, attempts + 1), 60);
    }
  };

  // Sync with browser hash on initial load & hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();

      if (hash === 'services') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'properties') {
        setCurrentPage('home');
        scrollToElementWithRetry('properties');
      } else if (
        [
          'residential-sales',
          'luxury-rentals',
          'investment-advisory',
          'property-acquisition',
          'property-management',
          'process',
        ].includes(hash)
      ) {
        setCurrentPage('services');
        scrollToElementWithRetry(hash);
      } else if (
        ['enquiry-form', 'headquarters', 'faqs', 'contact-info'].includes(hash)
      ) {
        setCurrentPage('contact');
        scrollToElementWithRetry(hash);
      } else if (hash.startsWith('property-')) {
        const propId = hash.replace('property-', '');
        const found = PROPERTIES.find((p) => p.id === propId);
        if (found) {
          setSelectedProperty(found);
        }
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, targetSectionId?: string, interest?: string) => {
    setCurrentPage(page);
    if (interest) {
      setPrefillInterest(interest);
    }

    if (targetSectionId) {
      window.location.hash = targetSectionId;
      scrollToElementWithRetry(targetSectionId);
    } else {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
    window.location.hash = `property-${property.id}`;
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
    window.location.hash = currentPage;
  };

  const handleEnquireFromProperty = (property: Property) => {
    setSelectedProperty(null);
    setPrefillPropertyTitle(property.title);
    setPrefillInterest(property.status === 'For Rent' ? 'Renting a Property' : 'Buying a Property');
    setCurrentPage('contact');
    window.location.hash = 'enquiry-form';
    scrollToElementWithRetry('enquiry-form');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#171B19] font-sans antialiased selection:bg-[#A58B68]/30 selection:text-[#171B19]">
      {/* Universal Header */}
      <Header
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-20" role="main">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => handleNavigate(page)}
            onSelectProperty={handleSelectProperty}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={(page, prefInterest) =>
              handleNavigate(page, 'enquiry-form', prefInterest)
            }
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialInterest={prefillInterest}
            initialPropertyTitle={prefillPropertyTitle}
            onNavigate={(page) => handleNavigate(page)}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={handleCloseModal}
        onEnquire={handleEnquireFromProperty}
      />

      {/* Legal & Governance Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
