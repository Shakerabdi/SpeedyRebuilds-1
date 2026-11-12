import React, { useEffect, useRef, useState } from 'react';
import { ClipboardCheck, Palette, Code2, Rocket, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';

const steps = [
  { title: 'Share your ideas', detail: 'We get to know your goals, your audience, and what you need from your website.', deliverable: 'A clear starting point', timeline: 'Day 1', icon: ClipboardCheck },
  { title: 'Plan your project', detail: 'We map out the pages, features, design direction, and timeline, with clear pricing before work begins.', deliverable: 'Your project plan and quote', timeline: 'Days 2–4', icon: Palette },
  { title: 'Build and refine', detail: 'We design and build your website, share progress, and refine the details with your feedback.', deliverable: 'A working website to review', timeline: 'Days 5–12', icon: Code2 },
  { title: 'Launch and support', detail: 'We check the pages, forms, and mobile layout, help with domain and hosting setup, and explain ongoing support.', deliverable: 'Your website, ready to share', timeline: 'Days 13–14', icon: Rocket },
];

const ProcessSection: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = Array.from(section.querySelectorAll<HTMLElement>('.process-step'));
    // Advance at a reading position in the viewport, without changing native scrolling.
    const update = () => {
      const index = items.reduce((current, item, i) => item.getBoundingClientRect().top <= innerHeight * 0.5 ? i : current, 0);
      setActiveStep(index);
    };
    const observer = new IntersectionObserver(update, { rootMargin: '-20% 0px -50% 0px', threshold: 0 });
    items.forEach((item) => observer.observe(item));
    window.addEventListener('resize', update, { passive: true });
    update();
    return () => { observer.disconnect(); window.removeEventListener('resize', update); };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="process-section process-cinematic section-space">
      <div className="process-ambient" aria-hidden="true" />
      <div className="container-custom process-layout">
        <div className="process-intro">
          <Reveal>
            <div className="process-heading">
              <p className="eyebrow">From idea to online</p>
              <h2 className="section-title">A clear plan.<br /><span>At every step.</span></h2>
              <p>We keep you involved from the first conversation to the final check. This is a typical project timeline; timing depends on the scope, content, and feedback.</p>
            </div>
          </Reveal>
          <div className="process-model" data-stage={activeStep} aria-hidden="true">
            <div className="model-layer model-layer-back" />
            <div className="model-layer model-layer-middle" />
            <div className="model-browser">
              <div className="model-chrome"><i /><i /><i /><span /></div>
              <div className="model-body">
                <div className="model-nav"><i /><i /><i /></div>
                <div className="model-title"><i /><i /></div>
                <div className="model-cta" />
                <div className="model-image"><span /></div>
                <div className="model-tiles"><i /><i /><i /></div>
              </div>
            </div>
          </div>
          <div className="process-readout" aria-hidden="true">
            <span>0{activeStep + 1}<span className="process-readout-total"> / 04</span></span>
            <span>{steps[activeStep].title}</span>
            <div className="process-readout-track"><span style={{ transform: `scaleX(${(activeStep + 1) / steps.length})` }} /></div>
          </div>
        </div>
        <div className="process-track">
          <motion.div
            className="process-connector"
            aria-hidden="true"
            initial={{ scaleY: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 1.3, ease: 'easeInOut' }}
          />
          <ol className="process-steps">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} data-active={activeStep === index}>
                  <Reveal>
                    <article className="process-step" id={`process-step-${index + 1}`}>
                      <div className="process-step-top"><span className="process-number">0{index + 1}</span><Icon size={22} aria-hidden="true" /></div>
                      <p className="process-timing">{step.timeline}</p>
                      <h3>{step.title}</h3>
                      <p className="process-description">{step.detail}</p>
                      <p className="process-deliverable"><ArrowUpRight size={16} aria-hidden="true" />{step.deliverable}</p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
