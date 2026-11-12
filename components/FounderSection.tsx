import React from 'react';
import { CheckCircle2, ShieldCheck, Timer, Users } from 'lucide-react';
import Reveal from './Reveal';

const trustPoints = [
  {
    title: 'A collaborative approach',
    detail: 'We listen to your ideas, learn what matters to you, and keep you involved as your website takes shape.',
    icon: CheckCircle2,
  },
  {
    title: 'Clear project details',
    detail: 'We agree on the pages, features, timeline, and pricing before work begins, so you know what to expect.',
    icon: ShieldCheck,
  },
  {
    title: 'Simple communication',
    detail: 'We explain the next steps in plain language and share updates throughout your project.',
    icon: Timer,
  },
];

const bestFit = [
  'Businesses, startups, and entrepreneurs',
  'Freelancers, creators, and personal brands',
  'Restaurants, retailers, and hospitality businesses',
  'Nonprofits, clubs, and community organizations',
  'Professionals, service providers, and trades',
  'Personal portfolios and independent projects',
];

const FounderSection: React.FC = () => {
  return (
    <section id="about" className="container-custom section-space">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <div>
            <p className="eyebrow">Why SpeedyRebuilds</p>
            <h2 className="section-title">A website partner who sees the bigger picture.</h2>
            <p className="mt-4 max-w-2xl text-brand-muted">
              We start by understanding what you want to share, who you want to reach, and what success looks like to you. Then we shape the design, content, and structure around those goals.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="card h-full">
                  <div className="mb-4 inline-flex rounded-xl border border-brand-accent/30 bg-brand-accent/10 p-2.5 text-brand-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-medium">{point.title}</h3>
                  <p className="mt-3 text-sm text-brand-muted">{point.detail}</p>
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <aside className="card h-full">
            <div className="inline-flex rounded-xl border border-brand-accent/30 bg-brand-accent/10 p-2.5 text-brand-accent">
              <Users size={18} />
            </div>
            <h3 className="mt-4 text-2xl font-semibold">Who we build for</h3>
            <p className="mt-3 text-brand-muted">
              You do not need to fit a particular industry to work with us. Whether you represent a business, an organization, or yourself, we can help you find the right direction for your website.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-brand-muted">
              {bestFit.map((item) => (
                <li key={item} className="inline-flex w-full items-start gap-3">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};

export default FounderSection;
