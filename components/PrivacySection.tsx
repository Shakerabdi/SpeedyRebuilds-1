import React from 'react';
import Reveal from './Reveal';

const PrivacySection: React.FC = () => {
  return (
    <section id="privacy" className="container-custom pb-16">
      <Reveal>
        <div className="rounded-2xl border border-brand-border bg-brand-surface/50 p-5 text-sm text-brand-muted md:p-6">
          <p className="eyebrow">Privacy</p>
          <h2 className="mt-3 text-xl font-medium text-brand-text">How your information is used.</h2>
          <p className="mt-3">
            The details you share through the contact form are used only to respond to your request.
            Submissions may be stored in Firebase and sent by email so we can follow up. Your information is not sold or added to a marketing list.
          </p>
          <p className="mt-3">
            To request a correction or deletion of information you have submitted, email contact@speedyrebuilds.com.
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default PrivacySection;
