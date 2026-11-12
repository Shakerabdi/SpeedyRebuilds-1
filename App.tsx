import React from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBand from './components/TrustBand';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import FounderSection from './components/FounderSection';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import PrivacySection from './components/PrivacySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Safety net: if old links still point to /booking, send users to working contact flow.
    if (window.location.pathname === '/booking') {
      window.history.replaceState({}, '', '/#contact');
      requestAnimationFrame(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text antialiased">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <TrustBand />
        <WorkSection />
        <ServicesSection />
        <FounderSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
