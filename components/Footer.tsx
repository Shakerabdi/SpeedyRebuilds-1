import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-border py-10">
      <div className="container-custom flex flex-col items-start justify-between gap-8 text-sm text-brand-muted lg:flex-row lg:items-center">
        <div>
          <a href="#" className="focus-ring mb-4 inline-block rounded-md" aria-label="SpeedyRebuilds home">
            <img src="/sr-logo-horiz-light.png" alt="SpeedyRebuilds" width={2301} height={480} className="h-auto w-[230px]" loading="lazy" />
          </a>
          <p>We build websites for businesses, creators, organizations, and you.</p>
          <p className="mt-1">Serving Windsor-Essex and clients across Canada</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          <a href="#services" className="focus-ring rounded hover:text-brand-accent">Services</a>
          <a href="#work" className="focus-ring rounded hover:text-brand-accent">Work</a>
          <a href="#about" className="focus-ring rounded hover:text-brand-accent">About</a>
          <a href="#pricing" className="focus-ring rounded hover:text-brand-accent">Pricing</a>
          <a href="#contact" className="focus-ring rounded hover:text-brand-accent">Contact</a>
          <a href="#privacy" className="focus-ring rounded hover:text-brand-accent">Privacy</a>
        </nav>

        <p>© {new Date().getFullYear()} SpeedyRebuilds · Canada</p>
      </div>
    </footer>
  );
};

export default Footer;
