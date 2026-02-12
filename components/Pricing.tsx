
import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter Rebuild',
    price: '$1,900 - $3,500',
    target: 'Perfect for small local businesses',
    includes: ['5 Core Pages', 'Mobile-First Design', 'Basic SEO Setup', '14-Day Delivery', 'Contact Form Integration'],
    popular: false
  },
  {
    name: 'Growth Package',
    price: '$4,000 - $7,500',
    target: 'Built for scaling service agencies',
    includes: ['Up to 15 Pages', 'Advanced Lead Funnels', 'Copywriting Included', 'Full SEO Audit', 'Speed Optimization', 'Priority Support'],
    popular: true
  },
  {
    name: 'Premium / Custom',
    price: '$8,000+',
    target: 'Full enterprise-level transformation',
    includes: ['Unlimited Pages', 'E-commerce / CMS', 'Ongoing Maintenance', 'Content Strategy', 'Brand Identity Refresh', 'Dedicated Manager'],
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Pricing</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Investment in your growth.</p>
          <p className="text-slate-600 max-w-xl mx-auto italic">* Final pricing determined after your free website audit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`relative bg-white p-10 rounded-3xl border ${tier.popular ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-xl shadow-slate-200/50'}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{tier.target}</p>
              <div className="mb-8">
                <p className="text-3xl font-black text-slate-900 tracking-tight">{tier.price}</p>
                <p className="text-xs text-slate-400 font-bold uppercase mt-1">One-time Investment</p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {tier.includes.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <Check size={18} className="text-blue-600 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
