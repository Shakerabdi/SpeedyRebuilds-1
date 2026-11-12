import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Compass,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import ContactForm from './components/ContactForm';

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'Approach', id: 'approach' },
  { label: 'Contact', id: 'contact' },
];

const services = [
  {
    title: 'Brand-Led Web Design',
    text: 'High-trust digital experiences that feel premium and move visitors toward action.',
  },
  {
    title: 'Performance Rebuilds',
    text: 'Modern front-end architecture focused on speed, clean UX, and mobile conversion.',
  },
  {
    title: 'Growth Strategy',
    text: 'Messaging and funnel systems built to turn search traffic into booked calls.',
  },
  {
    title: 'Content + Creative',
    text: 'Copy, visual hierarchy, and storytelling aligned to your service business goals.',
  },
];

const work = [
  {
    name: 'Northline Roofing',
    result: '+63% qualified leads',
    detail: 'Rebuilt navigation, messaging, and quote path for higher-intent inquiries.',
  },
  {
    name: 'Bluehaven Plumbing',
    result: '2.2x increase in call clicks',
    detail: 'Implemented mobile-first CTA flow and rebuilt service pages for clarity.',
  },
  {
    name: 'Cedar Legal Group',
    result: '+48% consultation bookings',
    detail: 'Improved trust signaling and shortened decision friction across key pages.',
  },
];

const faqs = [
  {
    q: 'How long does a full rebuild take?',
    a: 'Most projects launch in 2-4 weeks depending on content readiness and scope depth.',
  },
  {
    q: 'Can you work with our current branding?',
    a: 'Yes. We can evolve your current identity or create a stronger premium direction.',
  },
  {
    q: 'Do you handle hosting and deployment?',
    a: 'Yes. We deploy and optimize on modern infrastructure and can fully manage updates.',
  },
];

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090d12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="site-grid h-full w-full" />
        <div className="site-glow site-glow-left" />
        <div className="site-glow site-glow-right" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/10 bg-[#090d12]/85 backdrop-blur-2xl' : ''
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-black tracking-tight">
            Speedy<span className="text-cyan-400">Rebuilds</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Free Audit
            </button>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="border-t border-white/10 bg-[#090d12] px-6 py-6 md:hidden"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left text-lg font-bold text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="px-6 pb-24 pt-36 md:pt-44">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                <Sparkles size={13} /> Digital Agency for Growth-Driven Brands
              </p>
              <h1 className="mt-7 text-5xl font-black leading-[0.94] text-white md:text-7xl">
                Create a website
                <span className="block gradient-ink">that feels world-class.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                We combine strategy, design, and modern engineering to turn outdated sites into high-trust
                growth engines for serious service businesses.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.12em] text-slate-900 transition hover:-translate-y-0.5"
                >
                  Start Your Rebuild <ArrowRight size={17} />
                </button>
                <button
                  onClick={() => scrollTo('work')}
                  className="rounded-2xl border border-white/20 bg-white/5 px-8 py-5 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                >
                  See Results
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="dark-panel rounded-[2rem] p-7"
            >
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Campaign Snapshot</p>
                <p className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                  Live
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="dark-stat">
                  <p>Lead Conversion</p>
                  <h3>+58%</h3>
                </div>
                <div className="dark-stat">
                  <p>Avg Speed Score</p>
                  <h3>98</h3>
                </div>
                <div className="dark-stat">
                  <p>Bounce Reduction</p>
                  <h3>-34%</h3>
                </div>
                <div className="dark-stat">
                  <p>Launch Window</p>
                  <h3>14d</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="kicker-dark">Services</p>
              <h2 className="title-dark">Design. Technology. Growth. In one execution team.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="dark-panel rounded-3xl p-7"
                >
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-300">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="kicker-dark">Selected Work</p>
              <h2 className="title-dark">Proof over promises.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {work.map((item, i) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="dark-panel rounded-3xl p-7"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{item.name}</p>
                  <h3 className="mt-4 text-3xl font-black leading-tight text-white">{item.result}</h3>
                  <p className="mt-3 text-slate-300">{item.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="dark-panel rounded-3xl p-8">
              <p className="kicker-dark">Our Approach</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white">Strategic decisions. Sharp execution.</h2>
              <p className="mt-5 text-slate-300">
                We work like a senior agency team: clear direction, no fluff, and high standards from kickoff to launch.
              </p>
              <div className="mt-8 space-y-3 text-sm font-bold text-slate-200">
                <p className="inline-flex items-center gap-2"><Compass size={16} className="text-cyan-300" /> Market-focused positioning</p>
                <p className="inline-flex items-center gap-2"><Rocket size={16} className="text-cyan-300" /> Fast, modern build stack</p>
                <p className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-cyan-300" /> Long-term maintainability</p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="dark-panel overflow-hidden rounded-2xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left font-black text-white">
                    {faq.q}
                    <ChevronDown className="text-cyan-300" size={18} />
                  </summary>
                  <p className="px-6 pb-6 text-slate-300">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-16 md:pt-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="dark-panel rounded-3xl p-8 md:p-10">
              <p className="kicker-dark">Contact</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white md:text-5xl">Ready to make your site look legitimately elite?</h2>
              <p className="mt-5 text-lg text-slate-300">Send your details and we will return a focused action plan for your rebuild.</p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Direct Line</p>
                <p className="mt-3 inline-flex items-center gap-2 text-xl font-bold text-white"><Phone size={18} /> 226-507-5802</p>
                <p className="mt-2 text-slate-400">hello@speedyrebuilds.com</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SpeedyRebuilds. Premium websites for growth-focused businesses.</p>
          <p>Phone: 226-507-5802</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
