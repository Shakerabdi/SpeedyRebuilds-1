
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Target, Search, Gauge, Edit3, RefreshCw, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Website Rebuild',
    icon: <Layout className="text-blue-600" />,
    desc: 'Our core service. We take your aging site and rebuild it from scratch using modern technology.',
    outcomes: ['3x faster load times', 'Modern mobile experience', 'Easy-to-edit CMS']
  },
  {
    title: 'Landing Pages',
    icon: <Target className="text-indigo-600" />,
    desc: 'High-converting pages designed specifically for your ad campaigns and social traffic.',
    outcomes: ['Conversion-led layout', 'A/B testing ready', 'Clear CTA focus']
  },
  {
    title: 'SEO Foundation',
    icon: <Search className="text-cyan-600" />,
    desc: 'We build SEO into the bones of your site so you start ranking for local keywords immediately.',
    outcomes: ['Local search optimization', 'Technical SEO setup', 'Content hierarchy']
  },
  {
    title: 'Performance Tuning',
    icon: <Gauge className="text-orange-600" />,
    desc: 'Already have a site? We fix the bloat, optimize images, and slash loading seconds.',
    outcomes: ['Core Web Vitals green', 'Optimized assets', 'Reduced bounce rate']
  },
  {
    title: 'Copy Refresh',
    icon: <Edit3 className="text-rose-600" />,
    desc: 'Update your messaging to resonate with modern buyers. Clear, punchy, and persuasive.',
    outcomes: ['Modern brand voice', 'Persuasive hooks', 'Benefit-focused copy']
  },
  {
    title: 'Ongoing Updates',
    icon: <RefreshCw className="text-emerald-600" />,
    desc: 'Maintenance and growth support to keep your site performing month after month.',
    outcomes: ['Priority support', 'Security updates', 'Fresh content additions']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Our Services</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Everything you need for a dominant online presence.</p>
          <p className="text-lg text-slate-600">We don't just "design" sites—we build business tools that work for you 24/7.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3 mb-8">
                {service.outcomes.map((outcome, oIdx) => (
                  <li key={oIdx} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {outcome}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
