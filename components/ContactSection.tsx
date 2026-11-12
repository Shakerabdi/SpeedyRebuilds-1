import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import Reveal from './Reveal';
import { SERVICE_REQUEST_EVENT } from './ProjectLink';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    websiteUrl: '',
    serviceType: 'Custom Website',
    message: '',
    wantsCall: true,
    hp: '',
  });

  useEffect(() => {
    const selectService = (event: Event) => {
      const service = (event as CustomEvent<string>).detail;
      const options = document.querySelectorAll<HTMLOptionElement>('#serviceType option');
      if (Array.from(options).some((option) => option.value === service)) {
        setFormData((previous) => ({ ...previous, serviceType: service }));
      }
    };
    window.addEventListener(SERVICE_REQUEST_EVENT, selectService);
    return () => window.removeEventListener(SERVICE_REQUEST_EVENT, selectService);
  }, []);

  const onChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.hp || status === 'loading') return;

    setStatus('loading');

    try {
      const { hp, ...payload } = formData;
      const { submitLeadAndSendEmail } = await import('../lib/firebase');
      await submitLeadAndSendEmail(payload);
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        businessName: '',
        websiteUrl: '',
        serviceType: 'Custom Website',
        message: '',
        wantsCall: true,
        hp: '',
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="container-custom section-space">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="card h-full">
            <p className="eyebrow">Let’s get started</p>
            <h2 className="section-title mt-3">Tell us what you want to bring online.</h2>
            <p className="mt-4 text-brand-muted">
              Starting something new or ready for a refresh? Share your ideas, goals, or existing website. We usually respond within one business day with a helpful next step.
            </p>
            <p className="mt-2 text-sm text-brand-muted">Serving Windsor-Essex, Ontario, and working remotely with clients across Canada.</p>

            <div className="mt-6 rounded-2xl border border-brand-border bg-brand-surface/50 p-5">
              <h3 className="text-lg font-medium">What happens next</h3>
              <ol className="mt-3 space-y-2 text-sm text-brand-muted">
                <li>1. We review your ideas and learn what you want your website to do.</li>
                <li>2. We suggest an approach that fits your audience, priorities, and budget.</li>
                <li>3. We outline the next steps, timeline, and pricing before any work begins.</li>
              </ol>
            </div>

            <div className="mt-6 space-y-1 text-sm text-brand-muted">
              <a className="contact-direct focus-ring" href="mailto:contact@speedyrebuilds.com">contact@speedyrebuilds.com</a>
              <a className="contact-direct focus-ring" href="tel:+12265075802">226-507-5802</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={onSubmit} className="card contact-form space-y-4" aria-busy={status === 'loading'}>
            <input
              type="text"
              className="hidden"
              value={formData.hp}
              onChange={(e) => onChange('hp', e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="form-label" htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                name="name"
                autoComplete="name"
                className="form-input"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => onChange('fullName', e.target.value)}
              />
            </div>

            <div>
              <label className="form-label" htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                autoComplete="email"
                className="form-input"
                type="email"
                required
                value={formData.email}
                onChange={(e) => onChange('email', e.target.value)}
              />
            </div>

            <div>
              <label className="form-label" htmlFor="businessName">Business, brand, or project name (optional)</label>
              <input
                id="businessName"
                name="organization"
                autoComplete="organization"
                className="form-input"
                type="text"
                value={formData.businessName}
                onChange={(e) => onChange('businessName', e.target.value)}
              />
            </div>

            <div>
              <label className="form-label" htmlFor="websiteUrl">Website address (optional)</label>
              <input
                id="websiteUrl"
                name="website"
                autoComplete="url"
                className="form-input"
                type="url"
                placeholder="https://"
                value={formData.websiteUrl}
                onChange={(e) => onChange('websiteUrl', e.target.value)}
              />
            </div>

            <div>
              <label className="form-label" htmlFor="serviceType">How can we help?</label>
              <select
                id="serviceType"
                className="form-input"
                value={formData.serviceType}
                onChange={(e) => onChange('serviceType', e.target.value)}
              >
                <option value="Custom Website">New custom website</option>
                <option value="Portfolio / Personal Brand Website">Portfolio or personal brand website</option>
                <option value="Organization / Community Website">Organization or community website</option>
                <option value="Landing Page (ads / lead gen)">Campaign landing page</option>
                <option value="Website Refresh">Website refresh</option>
                <option value="Free Website Audit">Free website audit</option>
                <option value="SEO Setup">Search engine optimization (SEO)</option>
                <option value="Maintenance & Updates">Maintenance and updates</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="message">Tell us about your website goals</label>
              <textarea
                id="message"
                className="form-input min-h-[120px]"
                required
                value={formData.message}
                onChange={(e) => onChange('message', e.target.value)}
              />
            </div>

            <label className="inline-flex items-center gap-2 text-sm text-brand-muted">
              <input
                className="h-4 w-4 accent-brand-accent"
                type="checkbox"
                checked={formData.wantsCall}
                onChange={(e) => onChange('wantsCall', e.target.checked)}
              />
              Include a free consultation call about this project.
            </label>

            <p className="text-xs leading-5 text-brand-muted">
              Your details are used only to respond to your request. The privacy note below explains how your information is handled.
            </p>

            {status === 'error' && (
              <div role="alert" className="inline-flex w-full items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-800">
                <AlertCircle size={16} /> Your request could not be sent. Please try again or email contact@speedyrebuilds.com.
              </div>
            )}

            {status === 'success' && (
              <div role="status" className="inline-flex w-full items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-800">
                <CheckCircle2 size={16} /> Thank you! Your request has been sent. We’ll be in touch soon.
              </div>
            )}

            <button type="submit" className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <span className="inline-flex items-center gap-2"><Loader2 size={16} className="animate-spin" /> Sending your request…</span>
              ) : (
                'Send request'
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
