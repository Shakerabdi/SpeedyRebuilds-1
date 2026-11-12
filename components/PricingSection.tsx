import React from 'react';
import Reveal from './Reveal';
import ProjectLink from './ProjectLink';

const tiers = [
  {
    name: 'Website Audit',
    description: 'Complimentary website review',
    who: 'For anyone looking to improve an existing website',
    includes: ['Homepage and contact review', 'Mobile usability and credibility checks', 'Clear recommendations and next steps'],
    service: 'Free Website Audit',
    cta: 'Request a free audit',
  },
  {
    name: 'Starter Launch',
    description: 'A tailored project quote',
    who: 'For a first website, personal portfolio, or new idea',
    includes: ['Essential pages for your online presence', 'Mobile-friendly design', 'Basic SEO setup', 'A contact form and launch support'],
    service: 'Custom Website',
    cta: 'Request a quote',
  },
  {
    name: 'Custom Website',
    description: 'A quote shaped around your goals',
    who: 'For businesses, brands, and organizations with more to share',
    includes: ['Pages planned around your goals', 'Space for your services, work, and story', 'Contact and inquiry forms', 'SEO setup and final website checks'],
    service: 'Custom Website',
    cta: 'Request a quote',
    featured: true,
  },
  {
    name: 'Monthly Care',
    description: 'A personalized support plan',
    who: 'For anyone who wants ongoing website support',
    includes: ['Small content updates', 'Form and website availability checks', 'Performance reviews', 'Priority support'],
    service: 'Maintenance & Updates',
    cta: 'Discuss monthly care',
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="container-custom section-space">
      <Reveal>
        <p className="eyebrow">Pricing</p>
        <h2 className="section-title">Website options tailored to your goals.</h2>
        <p className="mt-4 max-w-2xl text-brand-muted">
          Every project is different. Contact us to discuss your website, explore the right approach, and receive a personalized quote.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 0.04}>
            <article className={`card pricing-card h-full ${tier.featured ? 'pricing-featured' : ''}`}>
              <h3 className="text-2xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm font-medium text-brand-accent">{tier.description}</p>
              <p className="mt-2 text-brand-muted">{tier.who}</p>

              <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                {tier.includes.map((item) => (
                  <li key={item} className="inline-flex w-full items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ProjectLink service={tier.service} className="btn-primary mt-5 block text-center">
                {tier.cta}
              </ProjectLink>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-4 text-sm text-brand-muted">
        We confirm the scope, timeline, and quote before any work begins, so you know exactly what to expect.
      </p>
    </section>
  );
};

export default PricingSection;
