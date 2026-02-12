import React, { useState } from 'react';
import { submitLead } from '../lib/firebase';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    serviceType: 'Website Rebuild',
    message: '',
    wantAudit: true,
    hp: '' // Honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [throttle, setThrottle] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.hp) return; // Silent discard for bots
    if (throttle) return;

    setStatus('loading');
    try {
      const { hp, ...cleanData } = formData;
      await submitLead(cleanData);
      setStatus('success');
      setThrottle(true);
      setTimeout(() => setThrottle(false), 10000); // 10s client rate limit
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-8 rounded-3xl border border-green-100 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600 mb-6">We'll be in touch within 24 hours to schedule your audit.</p>
        <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold hover:underline">Send another inquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="hp" className="hidden" value={formData.hp} onChange={(e) => setFormData({...formData, hp: e.target.value})} />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
          <input 
            type="text" required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
          <input 
            type="email" required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
          <input 
            type="text"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
          <select 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            value={formData.serviceType}
            onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
          >
            <option>Website Rebuild</option>
            <option>Landing Page</option>
            <option>SEO Foundation</option>
            <option>Speed Optimization</option>
            <option>Not Sure Yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
        <textarea 
          required rows={4}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <label className="flex items-center gap-3 cursor-pointer group">
        <input 
          type="checkbox" 
          checked={formData.wantAudit} 
          onChange={(e) => setFormData({...formData, wantAudit: e.target.checked})}
          className="w-5 h-5 rounded border-slate-300 text-blue-600"
        />
        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">I want a free website audit.</span>
      </label>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm font-bold">
          <AlertCircle size={18} /> Something went wrong. Please try again later.
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className={`w-full py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl ${status === 'loading' ? 'bg-slate-300' : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200 transform hover:-translate-y-1'}`}
      >
        {status === 'loading' ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Submit Inquiry</>}
      </button>
    </form>
  );
};

export default ContactForm;