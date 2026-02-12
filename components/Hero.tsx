
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, Globe, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-100">
              <Zap size={16} /> Fast-Turnaround Website Rebuilds
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
              Rebuild your outdated website into a <span className="gradient-text">fast, modern machine.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Stop losing customers to a slow, clunky site. We modernize your online presence with mobile-first design, lightning speed, and SEO that actually works.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
              >
                Get a Free Audit <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollTo('work')}
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                See Our Work
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> 14-Day Delivery</span>
              <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> SEO Optimized</span>
              <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> High-Converting Design</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-2 border border-slate-100 overflow-hidden">
               <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">SR</div>
                    <div>
                      <h3 className="font-bold text-slate-900">Performance Score</h3>
                      <p className="text-xs text-slate-400">speedyrebuilds.com/report</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Page Speed</p>
                        <p className="text-3xl font-black text-slate-900">98/100</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center font-bold text-green-500">A+</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-2xl border border-slate-50">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Mobile</p>
                        <p className="text-xl font-bold text-slate-900 tracking-tight">Optimized</p>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-slate-50">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Security</p>
                        <p className="text-xl font-bold text-slate-900 tracking-tight">Active</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl p-4 rounded-2xl border border-slate-100 flex items-center gap-4 max-w-xs animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-lg"><Globe className="text-green-600" /></div>
              <p className="text-sm font-semibold text-slate-700 leading-tight">Increased conversion by 45% on average.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
