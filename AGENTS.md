# SpeedyRebuilds email preferences

For SpeedyRebuilds emails drafted or sent in this workspace, include the user's existing professional signature:

- Plain text: `docs/email-signature.txt`
- HTML: `docs/email-signature.html`

The signature belongs to Shaker Abdi, Web Developer at SpeedyRebuilds. It was copied from the mailbox's saved default Hostinger signature on November 8, 2026.

Append the signature explicitly when sending through the mail connector. Do not assume the webmail signature will be inserted by the connector. When sending HTML, include the matching plain-text body as well. Avoid duplicating a signature already present in a message.

The user does not want their home address included. Do not add a home address or invent a mailing address. Keep any campaign-specific unsubscribe wording separate from the standard signature.

# SpeedyRebuilds SEO workspace

- Keep SEO research, baselines, briefs, and outreach drafts in `seo-workspace/`. Start with its README before repeating research.
- Primary site: `https://speedyrebuilds.com/`. Conqueror project: `3003b00f-1ea7-4f2e-bf56-507503c0dfd1`.
- Research market: Canada (`locationCode: 2124`), English (`languageCode: en`). Always pass these explicitly: the Conqueror project default was United States when checked on November 15, 2026.
- Primary service area is Windsor-Essex, including Windsor, Essex, Tecumseh, and Amherstburg. Remote clients across Canada are also welcome. Do not invent a storefront, street address, client results, reviews, guarantees, or prices.
- Pull Search Console before buying more keyword lookups. Keep first-party performance separate from provider estimates; missing metrics are unknown, not zero. Do not add close-variant search volumes together.
- The homepage is assembled by `App.tsx`; page metadata and structured data are in the root `index.html`. `components/` contains sections, not independently routed pages. Conqueror's `/HeroSection` and similar derived paths are not real public URLs.
- `npm run build` prerenders the homepage into `dist/index.html`. Keep prerendering and browser hydration compatible, and honor reduced-motion preferences.
- Existing Conqueror proposals are review drafts, not deployed changes. Check for overlapping edits before combining them with a repository change.
