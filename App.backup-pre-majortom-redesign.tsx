import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Laptop,
  LayoutGrid,
  LineChart,
  Menu,
  MessagesSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import ContactForm from './components/ContactForm';

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Case Studies', id: 'work' },
  { label: 'FAQ', id: 'faq' },
];

const services = [
  {
    icon: <LayoutGrid size={20} />,
    title: 'Full Website Rebuild',
    description: 'We redesign structure, copy, and UX so your site sells instead of just looking pretty.',
  },
  {
    icon: <LineChart size={20} />,
    title: 'Conversion Optimization',
    description: 'Strategic CTA flow, friction fixes, and decision-path design to increase qualified leads.',
  },
  {
    icon: <Laptop size={20} />,
    title: 'Performance Engineering',
    description: 'Fast-loading pages with clean code and responsive execution across desktop and mobile.',
  },
  {
    icon: <MessagesSquare size={20} />,
    title: 'Sales-Focused Messaging',
    description: 'Clear positioning and confident copy that builds trust in under 5 seconds.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Audit + Strategy',
    description: 'We identify conversion leaks, brand gaps, and technical issues on your current website.',
  },
  {
    step: '02',
    title: 'Design + Build',
    description: 'We produce a modern experience with clear hierarchy, premium visual language, and speed.',
  },
  {
    step: '03',
    title: 'Launch + Optimize',
    description: 'We launch, monitor behavior, and tune key sections for better lead quality and volume.',
  },
];

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Most service business rebuilds launch in 10 to 21 days depending on page count and content readiness.',
  },
  {
    q: 'Will my current SEO be affected?',
    a: 'No. We preserve URL structure and key metadata, then improve technical performance and on-page quality.',
  },
  {
    q: 'Can you work with my existing brand?',
    a: 'Yes. We can modernize your current identity or build a stronger visual direction while keeping brand recognition.',
  },
  {
    q: 'Do you only work with local businesses?',
    a: 'No. We work with local and national service companies, especially businesses that rely on lead generation.',
  },
];

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900 selection:bg-cyan-200/70">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="glow-orb h-[32rem] w-[32rem] -top-36 -left-20" />
        <div className="glow-orb h-[24rem] w-[24rem] top-[28rem] -right-20" />
        <div className="ambient-grid h-full w-full" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-slate-200/80 bg-white/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-black tracking-tight text-slate-900">
            Speedy<span className="text-cyan-600">Rebuilds</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-bold uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-cyan-700"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-cyan-600"
            >
              Book A Free Audit
            </button>
          </nav>

          <button
            className="rounded-lg p-2 text-slate-900 md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="border-t border-slate-200 bg-white px-6 py-6 md:hidden"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left text-lg font-bold text-slate-900"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo('contact')}
                  className="mt-2 rounded-2xl bg-slate-900 px-5 py-4 text-sm font-black uppercase tracking-wider text-white"
                >
                  Book A Free Audit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                <Sparkles size={14} /> Trusted by service businesses
              </span>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] text-slate-900 md:text-7xl">
                We build websites that
                <span className="block brand-gradient-text">look elite and close leads.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                If your site feels outdated, slow, or generic, you are losing high-intent customers. We rebuild it into a
                premium digital storefront engineered for trust and conversion.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-5 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-cyan-600"
                >
                  Get Free Website Audit <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollTo('work')}
                  className="rounded-2xl border border-slate-300 bg-white px-8 py-5 text-base font-black text-slate-900 transition hover:border-cyan-400"
                >
                  View Case Studies
                </button>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 text-sm font-bold text-slate-600 md:grid-cols-4">
                <div className="panel p-4">Avg. +42% lead lift</div>
                <div className="panel p-4">Launch in 2-3 weeks</div>
                <div className="panel p-4">Mobile-first UX</div>
                <div className="panel p-4">Technical SEO ready</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="panel relative overflow-hidden rounded-[2rem] p-6 md:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/10" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Performance Snapshot</p>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-700">
                    Post Rebuild
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-950 p-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">PageSpeed</p>
                    <p className="mt-2 text-4xl font-black">99</p>
                    <p className="mt-2 text-sm text-slate-300">From low 40s on most legacy sites</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Lead Form Completion</p>
                    <p className="mt-2 text-4xl font-black text-slate-900">+58%</p>
                    <p className="mt-2 text-sm text-slate-500">After friction reduction and CTA improvements</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Bounce Rate</p>
                    <p className="mt-2 text-4xl font-black text-slate-900">-33%</p>
                    <p className="mt-2 text-sm text-slate-500">Cleaner messaging and better readability</p>
                  </div>
                  <div className="rounded-2xl bg-cyan-50 p-5 ring-1 ring-cyan-100">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-700">Time to Launch</p>
                    <p className="mt-2 text-4xl font-black text-cyan-900">14d</p>
                    <p className="mt-2 text-sm text-cyan-700">Fast process with zero fluff</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">What We Deliver</p>
                <h2 className="section-title">A modern website system, not just a visual facelift.</h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-slate-600">
                Every build combines design quality, strategic messaging, and technical performance so your site becomes a
                dependable growth channel.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="panel rounded-3xl p-7"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-slate-900 p-3 text-white">{service.icon}</div>
                  <h3 className="text-2xl font-black text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{service.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl panel rounded-[2rem] p-8 md:p-12">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">How It Works</p>
              <h2 className="section-title">Clear, fast, and accountable from day one.</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
                    Step {step.step}
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-slate-900">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker">Case Studies</p>
              <h2 className="section-title">Recent outcomes from service-based businesses.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  name: 'Northline Roofing',
                  outcome: '+61% qualified leads in 45 days',
                  detail: 'Rebuilt information architecture and created a conversion-focused estimate funnel.',
                },
                {
                  name: 'Harbor Legal Group',
                  outcome: '2.1x improvement in booked consultations',
                  detail: 'Introduced authority-first homepage messaging and optimized mobile action paths.',
                },
              ].map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
                >
                  <div className="h-3 w-full brand-gradient" />
                  <div className="p-8">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{item.name}</p>
                    <h3 className="mt-4 text-3xl font-black leading-tight text-slate-900">{item.outcome}</h3>
                    <p className="mt-4 leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title">Answers before we start.</h2>
              <p className="mt-4 text-slate-600">
                We keep communication direct, scope clear, and timelines realistic.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="panel overflow-hidden rounded-2xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left font-black text-slate-900">
                    {faq.q}
                    <ChevronDown className="text-cyan-700" size={18} />
                  </summary>
                  <p className="px-6 pb-6 leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-16 md:pt-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="panel rounded-3xl p-8 md:p-10">
              <p className="section-kicker">Start Here</p>
              <h2 className="mt-2 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                Let’s turn your website into your top sales rep.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Send us your details and we will return a clear, actionable audit with the highest-impact fixes.
              </p>

              <div className="mt-8 space-y-4 text-sm font-bold text-slate-700">
                <div className="flex items-center gap-3">
                  <Clock3 className="text-cyan-700" size={18} /> Response within 24 hours
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-cyan-700" size={18} /> No-obligation consultation
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-cyan-700" size={18} /> Conversion-first roadmap
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Direct Contact</p>
                <div className="mt-4 flex items-center gap-3 text-lg font-bold">
                  <Phone size={18} /> (555) 123-4567
                </div>
                <p className="mt-2 text-slate-300">hello@speedyrebuilds.com</p>
              </div>
            </div>

            <div className="panel rounded-3xl p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 px-6 py-10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm font-bold text-slate-500">© 2026 SpeedyRebuilds. Built for serious growth.</p>
          <div className="flex items-center gap-5 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-600" /> Fast hosting
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-600" /> Modern stack
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
