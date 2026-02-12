
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    industry: 'Local HVAC Service',
    title: 'Modernizing a 10-year-old service site',
    before: 'Slow, non-responsive, 1% conversion',
    after: '98 Lighthouse score, 5% conversion',
    tags: ['Rebuild', 'Local SEO'],
    img: 'https://picsum.photos/seed/hvac/800/600'
  },
  {
    industry: 'Legal Firm',
    title: 'Premium landing page for high-intent leads',
    before: 'Generic template, high bounce rate',
    after: 'Custom-designed, 3x longer session time',
    tags: ['Landing Page', 'Copy'],
    img: 'https://picsum.photos/seed/legal/800/600'
  },
  {
    industry: 'E-commerce Accessory Brand',
    title: 'Speed optimization for Shopify store',
    before: '8s page load, low mobile checkout',
    after: '1.2s page load, 25% increase in checkout',
    tags: ['Speed', 'UX Audit'],
    img: 'https://picsum.photos/seed/shop/800/600'
  },
  {
    industry: 'Home Remodeling',
    title: 'Visual-first portfolio site rebuild',
    before: 'Low-res images, poor gallery UI',
    after: 'Stunning HD visuals, simple lead funnel',
    tags: ['Rebuild', 'SEO'],
    img: 'https://picsum.photos/seed/home/800/600'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Our Work</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-slate-900">Proof is in the performance.</p>
          </div>
          <p className="text-slate-600 text-lg">We focus on outcomes, not just aesthetics.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/3] bg-slate-100">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  {project.industry} <ExternalLink size={14} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                   <div>
                     <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Before</p>
                     <p className="text-sm font-medium text-slate-500 italic">"{project.before}"</p>
                   </div>
                   <div>
                     <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-1">Outcome</p>
                     <p className="text-sm font-bold text-slate-900">"{project.after}"</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
