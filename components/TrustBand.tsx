import React from 'react';
import { ShieldCheck, Smartphone, Search, Timer } from 'lucide-react';

const items = [
  { label: 'Windsor-Essex and beyond', icon: Timer },
  { label: 'Designed for every screen', icon: Smartphone },
  { label: 'Search-friendly foundations', icon: Search },
  { label: 'Support after launch', icon: ShieldCheck },
];

const TrustBand: React.FC = () => {
  return (
    <section className="border-y border-brand-border bg-brand-surface/60">
      <div className="container-custom grid gap-3 py-4 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-brand-muted">
              <Icon size={16} className="text-brand-accent" /> {item.label}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBand;
