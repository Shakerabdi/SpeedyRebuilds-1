import React from 'react';
import { ArrowUpRight, Briefcase, ClipboardCheck, Megaphone, RefreshCw, Search, Wrench, LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import ProjectLink from './ProjectLink';

type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  requestValue: string;
};

const services: Service[] = [
  {
    title: 'Custom website design',
    requestValue: 'Custom Website',
    description: 'We create websites around your goals, style, and audience, whether you are launching a business, sharing your work, or bringing a new idea online.',
    bullets: ['Design that reflects your identity', 'Clear content and easy navigation', 'Layouts for mobile and desktop'],
    icon: Briefcase,
  },
  {
    title: 'Free website audit',
    requestValue: 'Free Website Audit',
    description: 'We take a fresh look at your existing website and show you where changes to the design, content, or visitor experience could make a difference.',
    bullets: ['An honest review of your website', 'Mobile usability checks', 'Practical recommendations'],
    icon: ClipboardCheck,
  },
  {
    title: 'Website rebuilds',
    requestValue: 'Website Refresh',
    description: 'We give outdated websites a fresh direction, with a clearer message, updated design, and a better experience for the people using them.',
    bullets: ['A fresh look and stronger content', 'Performance and usability improvements', 'Guidance from planning to launch'],
    icon: RefreshCw,
  },
  {
    title: 'Landing pages',
    requestValue: 'Landing Page (ads / lead gen)',
    description: 'We build focused pages for promotions, events, launches, and campaigns, giving visitors the information they need and a clear next step.',
    bullets: ['A message built around your offer', 'Important details in one place', 'Simple contact and inquiry forms'],
    icon: Megaphone,
  },
  {
    title: 'Search engine optimization',
    requestValue: 'SEO Setup',
    description: 'We set up the essentials of search engine optimization (SEO) so search engines can better understand your pages and what you offer.',
    bullets: ['Page titles and descriptions', 'Clear page structure and relevant content', 'Local search setup when needed'],
    icon: Search,
  },
  {
    title: 'Maintenance and updates',
    requestValue: 'Maintenance & Updates',
    description: 'We help keep your website current with content updates, regular checks, and practical support as your needs change.',
    bullets: ['Content updates', 'Form and website availability checks', 'Regular performance reviews'],
    icon: Wrench,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section section-space">
      <div className="container-custom">
      <Reveal>
        <p className="eyebrow">Services</p>
        <h2 className="section-title">Your ideas. Our design and development.</h2>
        <p className="mt-4 max-w-2xl text-brand-muted">
          We bring design, content, and technology together to create a website that feels like you and works for your audience.
        </p>
      </Reveal>

      <div className="services-grid mt-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.06} className={index === 0 ? 'service-featured' : ''}>
              <article className="card service-card h-full">
                <div className="service-topline"><span className="service-number">0{index + 1}</span>
                <div className="service-icon mb-4 inline-flex rounded-xl border border-brand-accent/30 bg-brand-accent/10 p-2.5 text-brand-accent">
                  <Icon size={18} />
                </div>
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-3 text-brand-muted">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="inline-flex w-full items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <ProjectLink service={service.requestValue} className="service-link text-link">{index === 1 ? 'Request a free audit' : 'Let’s talk about it'} <ArrowUpRight size={18} aria-hidden="true" /></ProjectLink>
              </article>
            </Reveal>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
