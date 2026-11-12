# SpeedyRebuilds Website

Single-page marketing website for SpeedyRebuilds (React + Vite + TailwindCSS + Framer Motion).

## Tech

- React 18
- Vite
- TailwindCSS
- Framer Motion
- lucide-react icons

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Customize

- Colors and shared styles: `index.css`, `tailwind.config.cjs`
- Main page structure: `App.tsx`
- Section content: files in `components/`
- Portfolio cards: `components/WorkSection.tsx`
- Pricing tiers: `components/PricingSection.tsx`
- FAQ items: `components/FAQSection.tsx`
- Contact form behavior: `components/ContactSection.tsx`
- Firebase submit logic: `lib/firebase.ts`

## Notes

- Contact form submits to Firestore via `submitLead`.
- Ensure `.env.local` has valid Firebase values for production form submissions.
