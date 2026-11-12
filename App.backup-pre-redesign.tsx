import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, ArrowRight, CheckCircle2, Menu, X, 
  Layout, Search, Gauge, Edit3, Rocket, Target,
  ChevronDown, Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink
} from 'lucide-react';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-slate-900 selection:bg-blue-100">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tight text-slate-900">
            Speedy<span className="text-blue-600">Rebuilds</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Process', 'Work', 'Pricing', 'FAQ'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">{item}</button>
            ))}
            <button onClick={() => scrollTo('contact')} className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 transform hover:scale-105">FREE WEBSITE AUDIT</button>
          </div>

          <button className="md:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {['Services', 'Process', 'Work', 'Pricing', 'FAQ'].map(item => (
                  <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-xl font-bold text-left text-slate-900">{item}</button>
                ))}
                <button onClick={() => scrollTo('contact')} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black">GET A FREE AUDIT</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100">
                <Zap size={14} className="fill-blue-600" /> Dominate Your Local Market
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
                Rebuild your outdated website into a <span className="gradient-text">fast, modern machine.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                Stop losing customers to slow, ugly sites. We rebuild your online presence in 14 days with lightning speed, mobile-first design, and conversion-focused copy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={() => scrollTo('contact')} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 transform hover:-translate-y-1 flex items-center justify-center gap-2">Get a Free Audit <ArrowRight size={20}/></button>
                <button onClick={() => scrollTo('work')} className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">See Our Work</button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={18} /> 98+ PageSpeed</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={18} /> Mobile Optimized</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={18} /> SEO Prepared</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="bg-slate-900 p-2 rounded-[2.5rem] shadow-3xl shadow-slate-200">
                <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-800">
                  <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-md flex-1 py-1 text-[10px] text-slate-400 text-center font-medium">speedyrebuilds.com/modern-ui</div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="h-4 w-32 bg-slate-100 rounded"></div>
                        <div className="h-8 w-48 bg-slate-900 rounded"></div>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-blue-600 font-black">99</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-slate-50 rounded-2xl border border-slate-100 p-4">
                        <div className="h-3 w-12 bg-slate-200 rounded mb-4"></div>
                        <div className="h-6 w-full bg-slate-300 rounded opacity-50"></div>
                      </div>
                      <div className="h-32 bg-blue-600 rounded-2xl p-4">
                        <div className="h-3 w-12 bg-blue-400 rounded mb-4"></div>
                        <div className="h-6 w-full bg-blue-500 rounded opacity-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-bounce-slow">
                <p className="text-xs font-black text-slate-400 uppercase mb-2">Conversions</p>
                <p className="text-3xl font-black text-blue-600">+145%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10">Trusted by modern service providers</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
             <div className="text-2xl font-black tracking-tighter">CONSTRUCTX</div>
             <div className="text-2xl font-black tracking-tighter">ELITE LEGAL</div>
             <div className="text-2xl font-black tracking-tighter">PURE FLOW</div>
             <div className="text-2xl font-black tracking-tighter">VANTAGE</div>
             <div className="text-2xl font-black tracking-tighter">SUMMIT GROUP</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Full Stack Modernization</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Everything you need for a dominant presence.</p>
            <p className="text-lg text-slate-600 font-medium">We don't just "design" sites—we build business tools that generate revenue 24/7.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Layout className="text-blue-600" />, 
                title: "Website Rebuild", 
                desc: "Complete visual and structural modernization from scratch using modern technology.",
                results: ["14-day delivery", "Mobile-first approach", "Green Core Web Vitals"]
              },
              { 
                icon: <Target className="text-blue-600" />, 
                title: "Landing Pages", 
                desc: "Hyper-focused pages designed for high-intent traffic and paid ad campaigns.",
                results: ["A/B tested layouts", "Clear CTAs", "Fast-loading forms"]
              },
              { 
                icon: <Search className="text-blue-600" />, 
                title: "Local SEO Foundation", 
                desc: "Technical SEO built into the foundation to ensure you dominate local rankings.",
                results: ["Keyword mapping", "Google Maps sync", "Clean metadata"]
              },
              { 
                icon: <Gauge className="text-blue-600" />, 
                title: "Performance Tuning", 
                desc: "Optimize your existing site for speed, reducing bounce rates and improving UX.",
                results: ["Image optimization", "Code minification", "Server caching"]
              },
              { 
                icon: <Edit3 className="text-blue-600" />, 
                title: "Copy Refresh", 
                desc: "Ditch the corporate jargon for clear, punchy copy that resonates with your ideal buyer.",
                results: ["Modern brand voice", "Conversion-led hooks", "Persona mapping"]
              },
              { 
                icon: <Rocket className="text-blue-600" />, 
                title: "Scale Support", 
                desc: "Ongoing support to keep your site fresh as your business evolves and scales.",
                results: ["Priority updates", "Security patching", "Monthly insights"]
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 font-medium leading-relaxed">{service.desc}</p>
                <ul className="space-y-4">
                  {service.results.map((res, rIdx) => (
                    <li key={rIdx} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> {res}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">How it works</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6">A frictionless path to growth.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-slate-100 -z-0"></div>
            {[
              { step: "01", title: "Free Audit", desc: "We analyze your current site and map out a growth strategy." },
              { step: "02", title: "Modernize", desc: "We rebuild with clean code, modern UI, and punchy copy." },
              { step: "03", title: "Launch", desc: "We go live within 14 days with zero downtime for your business." },
              { step: "04", title: "Scale", desc: "We monitor data and optimize for continuous lead growth." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-black text-blue-600 shadow-xl shadow-slate-50 group-hover:border-blue-600 transition-colors">{item.step}</div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section id="work" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-4">Portfolio</h2>
              <p className="text-4xl md:text-5xl font-black leading-tight">Transformations that <br/> speak for themselves.</p>
            </div>
            <p className="text-slate-400 font-medium text-lg">We focus on measurable outcomes, not just aesthetics.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                industry: "Local HVAC", 
                title: "From 10s load time to 1.2s instant-open", 
                before: "Aging WordPress site", 
                after: "High-performance modern app",
                results: "3x Phone Leads"
              },
              { 
                industry: "Legal Services", 
                title: "Landing page modernization for ad traffic", 
                before: "High bounce rate landing page", 
                after: "Conversion-optimized layout",
                results: "15% CR Improvement"
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-slate-800 rounded-[2rem] overflow-hidden mb-8 relative border border-slate-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="text-xs font-black text-blue-400 uppercase tracking-widest bg-blue-400/10 px-3 py-1 rounded-full">{project.industry}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-6 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Before</p>
                    <p className="text-sm text-slate-400 font-medium">{project.before}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Results</p>
                    <p className="text-sm font-bold">{project.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Pricing</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Investment for dominance.</p>
            <p className="text-slate-600 font-medium italic">* Final pricing determined after your free audit.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {[
              { name: "Starter Rebuild", price: "$1,900+", target: "Small Service Providers", features: ["14-Day Delivery", "Up to 5 Pages", "Basic SEO", "Mobile Optimized"] },
              { name: "Growth Package", price: "$3,500+", target: "Scaling Agencies", features: ["Advanced Lead Funnels", "Copywriting Included", "Full SEO Audit", "CMS Integration", "Priority Support"], popular: true },
              { name: "Enterprise Custom", price: "Custom", target: "High-Volume Firms", features: ["Unlimited Pages", "Custom Integrations", "E-commerce Support", "Dedicated Manager"] }
            ].map((tier, idx) => (
              <div 
                key={idx}
                className={`bg-white p-10 rounded-[2.5rem] border ${tier.popular ? 'border-blue-600 ring-4 ring-blue-50 shadow-2xl relative z-10 scale-105' : 'border-slate-100 shadow-xl'}`}
              >
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Most Popular</div>}
                <h4 className="text-xl font-black text-slate-900 mb-2">{tier.name}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{tier.target}</p>
                <p className="text-4xl font-black text-slate-900 mb-8">{tier.price}</p>
                <ul className="space-y-4 mb-10">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                      <CheckCircle2 size={18} className="text-blue-600" /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo('contact')} className={`w-full py-4 rounded-2xl font-black transition-all ${tier.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">FAQs</h2>
            <p className="text-slate-500 font-medium">Clear answers for your modernization journey.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does a rebuild take?", a: "Standard rebuilds are launched in exactly 14 business days once we have your basic assets and project approval." },
              { q: "Will I lose my existing SEO?", a: "No. We meticulously map your existing URLs to ensured zero downtime for your SEO and current rankings." },
              { q: "Can I edit the site myself later?", a: "Absolutely. We build with modern CMS tools that make editing text, images, and blog posts as easy as typing an email." },
              { q: "What if I don't have professional photos?", a: "Our Growth and Enterprise packages include stock asset sourcing and visual selection to match your brand." }
            ].map((faq, idx) => (
              <details key={idx} className="group border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-8 font-black text-slate-900 cursor-pointer hover:bg-slate-50 list-none">
                  {faq.q}
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform text-blue-600" />
                </summary>
                <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">Ready for a <br/> modern machine?</h2>
              <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
                Fill out the form to schedule your free website audit. We'll show you exactly where your site is failing and how we can fix it.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl shadow-slate-200/50"><Mail /></div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg font-bold text-slate-900">hello@speedyrebuilds.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl shadow-slate-200/50"><Phone /></div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-lg font-bold text-slate-900">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl shadow-slate-200/50"><MapPin /></div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg font-bold text-slate-900">NYC / Remote Everywhere</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <a href="#" className="text-2xl font-black mb-8 block">Speedy<span className="text-blue-500">Rebuilds</span></a>
              <p className="text-slate-400 max-w-sm font-medium leading-relaxed">Modernizing the web, one service business at a time. High performance, zero bloat.</p>
            </div>
            <div>
              <h5 className="font-black text-sm uppercase tracking-widest mb-8">Resources</h5>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li><button onClick={() => scrollTo('services')} className="hover:text-blue-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollTo('process')} className="hover:text-blue-400 transition-colors">Process</button></li>
                <li><button onClick={() => scrollTo('work')} className="hover:text-blue-400 transition-colors">Our Work</button></li>
                <li><button onClick={() => scrollTo('pricing')} className="hover:text-blue-400 transition-colors">Pricing</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-sm uppercase tracking-widest mb-8">Social</h5>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all"><Linkedin size={20} /></a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all"><Twitter size={20} /></a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all"><ExternalLink size={20} /></a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-black uppercase tracking-widest">
            <p>&copy; 2024 SpeedyRebuilds. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;