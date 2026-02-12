
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "How long does a website rebuild take?", a: "Typically, a standard rebuild takes 14 to 21 days from start to launch, depending on content availability." },
  { q: "Do I need to provide the copy and images?", a: "If you have them, great! If not, our Growth and Premium packages include copywriting and stock asset sourcing." },
  { q: "Will I lose my existing SEO rankings?", a: "No. We handle 301 redirects and technical SEO meticulously to ensure you keep (and often improve) your current rankings." },
  { q: "What platform do you build on?", a: "We primarily build on modern CMS platforms like Framer or custom React builds for maximum speed and SEO performance." },
  { q: "Can I edit the site myself later?", a: "Yes. Every site we build includes an easy-to-use editor so you can update text and images without calling us." },
  { q: "Do you offer hosting and maintenance?", a: "Yes, we have ongoing support plans starting at $49/mo that cover hosting, security, and small updates." },
  { q: "What is a 'Website Audit'?", a: "We deep-dive into your site's speed, mobile responsiveness, SEO, and conversion points to show you exactly where you're losing money." },
  { q: "Is the rebuild mobile-friendly?", a: "Absolutely. We follow a 'mobile-first' design philosophy. Over 60% of traffic is mobile, so it's our top priority." }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about our process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                {open === idx ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {open === idx && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
