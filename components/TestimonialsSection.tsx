import React from 'react';
import { CheckCircle2, ShieldCheck, Smartphone } from 'lucide-react';
import Reveal from './Reveal';

const proofPoints = [
  {
    title: 'Real client websites',
    detail:
      'Explore Café Velora and Williams Plumbing Services to see how we adapt the design and content to each client’s identity and goals.',
    icon: CheckCircle2,
  },
  {
    title: 'Designed for your audience',
    detail:
      'We make it easy for people to explore your work, learn about your organization, or get in touch, on mobile and desktop.',
    icon: Smartphone,
  },
  {
    title: 'Feedback you can trust',
    detail:
      'Any client quotes or testimonials shared here come from real clients and are published with their permission.',
    icon: ShieldCheck,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="container-custom section-space">
      <Reveal>
        <p className="eyebrow">Built on trust</p>
        <h2 className="section-title">Work you can explore. An approach you can trust.</h2>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {proofPoints.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="card h-full">
                <div className="mb-4 inline-flex rounded-xl border border-brand-accent/30 bg-brand-accent/10 p-2.5 text-brand-accent">
                  <Icon size={18} />
                </div>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-brand-muted">{item.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
