import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 35 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        document.querySelector<HTMLButtonElement>('[aria-controls="mobile-menu"]')?.focus();
      }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <a href="#main-content" className="skip-link">Skip to content</a>
      {!reduceMotion && <motion.div className="page-progress" style={{ scaleX: progress }} aria-hidden="true" />}
      <nav
        className={`mx-auto mt-3 w-[min(96%,1280px)] rounded-2xl border transition-all ${
          scrolled ? 'border-brand-border bg-brand-bg/95 shadow-soft backdrop-blur' : 'border-transparent bg-brand-bg'
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-5 py-4 md:px-7">
          <a href="#" className="focus-ring shrink-0 rounded-md" aria-label="SpeedyRebuilds home">
            <img src="/sr-logo-horiz-light.png" alt="SpeedyRebuilds" width={2301} height={480} className="h-auto w-[204px] sm:w-[230px]" />
          </a>

          <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-sm text-brand-muted transition hover:text-brand-accent focus-ring rounded-md px-1 py-1">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary">
              Let’s talk
            </a>
          </div>

          <button
            type="button"
            className="focus-ring grid min-h-[44px] min-w-[44px] place-items-center rounded-md p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -10 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="rounded-b-2xl border-t border-brand-border bg-brand-bg px-5 pb-5 pt-3 lg:hidden"
            >
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="focus-ring block rounded-lg px-2 py-2 text-brand-muted hover:bg-brand-surface hover:text-brand-accent" onClick={() => setOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary mt-4 block text-center" onClick={() => setOpen(false)}>
                Start your project
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
