
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Cpu, Rocket, LifeBuoy } from 'lucide-react';

const steps = [
  {
    title: 'Free Audit + Strategy',
    icon: <ClipboardList size={32} />,
    desc: 'We start by analyzing your current site and competitors to create a roadmap for growth.'
  },
  {
    title: 'Rebuild + Refine',
    icon: <Cpu size={32} />,
    desc: 'Our team develops your site with clean code, modern UI, and persuasive copy.'
  },
  {
    title: 'Launch + Optimize',
    icon: <Rocket size={32} />,
    desc: 'We push live and monitor performance, ensuring every page is firing at 100%.'
  },
  {
    title: 'Growth Support',
    icon: <LifeBuoy size={32} />,
    desc: 'Continuous updates and support to keep your site modern as your business scales.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
        
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-4">The Process</h2>
          <p className="text-4xl md:text-5xl font-extrabold mb-6">How we modernize your site.</p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">From messy and slow to modern and polished in 4 simple steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[1px] bg-slate-800 -translate-x-12 z-0"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-600/10 border border-blue-600/30 rounded-full flex items-center justify-center text-blue-500 mb-8 relative z-10 hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-lg shadow-blue-900/20">
                  {step.icon}
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 h-full">
                   <div className="text-blue-500 font-bold mb-2">Step 0{idx + 1}</div>
                   <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                   <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
