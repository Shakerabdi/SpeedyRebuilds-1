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
    hp: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [throttle, setThrottle] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.hp || throttle) return;

    setStatus('loading');
    try {
      const { hp, ...cleanData } = formData;
      await submitLead(cleanData);
      setStatus('success');
      setThrottle(true);
      setTimeout(() => setThrottle(false), 10000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-slate-900">Message Sent</h3>
        <p className="mb-6 text-slate-600">We will be in touch within 24 hours with next steps.</p>
        <button onClick={() => setStatus('idle')} className="font-bold text-cyan-700 hover:underline">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="hp"
        className="hidden"
        value={formData.hp}
        onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">Full Name *</label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">Email Address *</label>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">Company</label>
          <input
            type="text"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">Service Needed</label>
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
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
        <label className="mb-2 block text-sm font-bold text-slate-700">Message *</label>
        <textarea
          required
          rows={4}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <label className="group flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={formData.wantAudit}
          onChange={(e) => setFormData({ ...formData, wantAudit: e.target.checked })}
          className="h-5 w-5 rounded border-slate-300 text-cyan-600"
        />
        <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">
          I want a free website audit.
        </span>
      </label>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-600">
          <AlertCircle size={18} /> Something went wrong. Please try again later.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-lg font-black text-white transition ${
          status === 'loading' ? 'bg-slate-400' : 'bg-slate-900 hover:-translate-y-0.5 hover:bg-cyan-600'
        }`}
      >
        {status === 'loading' ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Submit Inquiry</>}
      </button>
    </form>
  );
};

export default ContactForm;
