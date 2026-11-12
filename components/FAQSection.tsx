import React from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const faqItems = [
  {
    q: 'What should we have ready before getting started?',
    a: 'A short description of your goals, a few websites you like, and any existing logo, photos, or written content are helpful. You do not need everything ready for our first conversation. We will agree on what is needed as part of your project plan.',
  },
  {
    q: 'Who do you build websites for?',
    a: 'We work with businesses, creators, professionals, nonprofits, community groups, and individuals. Whether you need a business website, a personal portfolio, or a home for a new idea, we can help you plan the right approach.',
  },
  {
    q: 'Can you build a website from scratch?',
    a: 'Yes. You do not need an existing website or a fully formed plan to get started. We help you work through your goals, page structure, and design direction, then guide you through the build and launch.',
  },
  {
    q: 'What is included in the free website audit?',
    a: 'We review your homepage, content, mobile experience, search basics, and contact options. You receive practical recommendations to help you decide what to improve first.',
  },
  {
    q: 'How long does a typical website project take?',
    a: 'Most focused projects launch within 1 to 3 weeks. The timeline depends on the size of the project and how quickly content and feedback are available.',
  },
  {
    q: 'How much does a website cost?',
    a: 'We tailor each quote to your website’s goals, scope, and features. Contact us to discuss your project, and we’ll outline the recommended approach, timeline, and pricing before any work begins.',
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Yes. We review what is working, what needs attention, and what you want to achieve. From there, we recommend a focused refresh or a full rebuild based on your goals and the condition of your current site.',
  },
  {
    q: 'Can you help with domains, hosting, and website security?',
    a: 'Yes. We can help connect your domain, configure hosting, and set up a secure HTTPS connection for your website. We explain the setup and any ongoing costs before you commit.',
  },
  {
    q: 'Do you include search engine optimization?',
    a: 'We include SEO basics such as page titles, descriptions, clear page structure, and relevant content. For local businesses, we can also guide you through Google Business Profile setup and help present your service, location, and contact information clearly.',
  },
  {
    q: 'Who owns the website after launch?',
    a: 'You do. We explain ownership, account access, and the handover process in your project agreement before work begins.',
  },
  {
    q: 'Can you maintain the website after launch?',
    a: 'Yes. We offer monthly care plans for small content updates, website checks, performance reviews, and ongoing support. We agree on what is included based on the help you need.',
  },
  {
    q: 'What payment terms do you offer?',
    a: 'Most projects use payments tied to agreed milestones. We share the payment schedule and project details before work begins, so you know what is due and when.',
  },
  {
    q: 'Can more features be added later?',
    a: 'Yes. Once your website is live, we can plan additional features as a separate phase, with the work and pricing agreed in advance.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="container-custom section-space">
      <Reveal>
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Your questions, answered.</h2>
      </Reveal>

      <div className="faq-grid mt-10">
        {faqItems.map((item, index) => (
          <Reveal key={item.q} delay={index * 0.02}>
            <details className="card faq-item group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left font-medium">
                <span>{item.q}</span>
                <ChevronDown size={18} className="shrink-0 text-brand-accent transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-brand-muted">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
