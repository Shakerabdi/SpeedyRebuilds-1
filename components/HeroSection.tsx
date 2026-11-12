import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroBackgroundVideo from './HeroBackgroundVideo';
import useSceneMotion from './useSceneMotion';

const features = [
  { label: 'Your brand', value: 'A distinct look' },
  { label: 'Your visitors', value: 'Simple navigation' },
  { label: 'Your story', value: 'Clear content' },
  { label: 'Your next step', value: 'Easy contact' },
];

const HeroSection: React.FC = () => {
  const sceneRef = useSceneMotion<HTMLElement>({ distance: 80 });
  return (
    <>
      <section ref={sceneRef} className="hero-section cinematic-hero" aria-labelledby="hero-heading">
        <HeroBackgroundVideo />
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-light-beam" />
          <div className="hero-orbit hero-orbit-outer" />
          <div className="hero-orbit hero-orbit-inner" />
          <div className="hero-depth-grid" />
          <div className="hero-motes"><i /><i /><i /><i /><i /><i /></div>
          <div className="hero-edge-light" />
        </div>
        <div className="container-custom relative z-10 py-12 md:py-16 lg:py-20">
          <div className="hero-copy">
            <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-100">
              Web design in Windsor-Essex and beyond
            </p>
            <h1 id="hero-heading" className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
              Websites for every <span className="hero-title-light">business, brand, and big idea.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-100">
              We build websites that make a great first impression and connect you with your audience. From businesses and personal brands to portfolios and community projects, we turn your ideas into a polished online presence.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary hero-primary inline-flex min-h-[48px] items-center justify-center gap-2">
                Start your project <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#work" className="hero-secondary inline-flex min-h-[48px] items-center justify-center">
                Explore our work
              </a>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-100 sm:grid-cols-3">
              <li className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="shrink-0 text-blue-300" aria-hidden="true" /> Thoughtful design</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="shrink-0 text-blue-300" aria-hidden="true" /> Built for mobile</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="shrink-0 text-blue-300" aria-hidden="true" /> Launch support</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/20 bg-slate-950/35 p-4">
              <p className="text-sm font-medium text-white">Already have a website? Start with a free audit.</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
                <li>Find out what works well and what could be better</li>
                <li>Get practical ideas for your design, content, and navigation</li>
                <li>Decide whether to refresh your site or start again</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-brand-bg" aria-labelledby="hero-features-heading">
        <div className="container-custom py-7 lg:flex lg:items-center lg:gap-10">
          <h2 id="hero-features-heading" className="text-xs font-medium uppercase leading-5 tracking-[0.16em] text-brand-muted lg:max-w-[180px]">
            Built with your goals in mind
          </h2>
          <dl className="mt-5 grid flex-1 grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.label} className="border-l border-brand-border pl-4">
                <dt className="text-xs text-brand-muted">{feature.label}</dt>
                <dd className="mt-1 text-base font-medium text-brand-text">{feature.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
