# SpeedyRebuilds website audit and release

Reviewed and published September 27, 2026 after approval. Firebase Hosting release: `a221061e42d2718d`.

Local preview: http://127.0.0.1:3000/

Public canonical address: https://speedyrebuilds.com/

## Comparison with Pivot

Pivot's strongest advantage is the amount of evidence supporting its service pitch. More animation alone will not close that gap.

| Area | What Pivot presents | Direction for SpeedyRebuilds |
| --- | --- | --- |
| Portfolio | Many named projects across different industries. | Put Café Velora and Williams Plumbing near the top, then develop richer project stories. |
| Credibility | Named testimonials and case studies with stated outcomes. | Add genuine, approved client feedback and verified results as they become available. |
| People | An identifiable founder and personal background. | Add a real team/founder introduction and photograph while retaining “we” throughout the service copy. |
| Services | Separate pages with detailed service explanations. | Keep the homepage concise; add useful pages for the services you actually provide. |
| Inquiries | Prominent contact routes and a project inquiry form. | Preserve your straightforward form, clickable email/phone, and clear package options with contact links for personalized quotes. |

Sources reviewed: [web design](https://pivotcreativemedia.com/services/web-design/), [portfolio](https://pivotcreativemedia.com/services/web-design/portfolio/), [case studies](https://pivotcreativemedia.com/case-studies/), [about](https://pivotcreativemedia.com/about-us/), and [contact](https://pivotcreativemedia.com/contact/). Pivot's published results are its own claims, not independently verified outcomes.

Your existing advantages are clear package options, a free audit, direct contact routes, and an invitation to businesses, creators, organizations, and personal projects. Keep those. Avoid copying competitor copy, long repetitive service descriptions, unsupported guarantees, or services you have not confirmed you offer.

## Implemented in this preview

- Moved real projects ahead of the services section. Added a concise project focus to each, numbered labels, browser-style frames, and restrained hover depth.
- Removed the generic project-type card grid and the displayed “Built on trust” section. Its testimonial language did not contain actual testimonials; it repeated points made elsewhere. The audience list remains in About.
- Replaced the repeated process overview and step cards with one four-step timeline. Added a dark blue section for visual variety without making the whole site dark.
- Redesigned the service grid, highlighted custom website design, aligned pricing buttons, and arranged FAQs in two columns on desktop.
- Added directional section entrances, a scroll progress indicator, animated navigation underlines, card and icon hover effects, button sheen, and a process connector animation. New effects respect reduced-motion preferences. No extra animation dependency was installed.
- Service and pricing links now select the appropriate contact-form option without discarding what a visitor has typed.
- Restored native required-field, email, and URL validation. Added autocomplete hints, accessible status messages, a skip link, mobile-menu Escape handling, and larger menu/FAQ targets.
- Deferred the Firebase submission module until someone submits a valid form. Existing delivery code remains intact.
- Added the confirmed custom-domain canonical URL, social-sharing identity, factual Organization/WebSite structured data, robots.txt, and a one-page sitemap. Existing title and description remain intact.
- Preserved the supplied hero video, poster, wording, buttons, logo, navigation destinations, and unrelated existing changes.
- Updated pricing after review: retained all four package options, removed displayed amounts and numeric package limits, and invited visitors to contact us for a personalized quote. The cost FAQ uses the same approach; the audit remains complimentary.

The animation approach follows [web.dev's guidance on efficient animation](https://web.dev/articles/animations-guide), with most movement using transforms and opacity. Visitors requesting less motion receive static content in accordance with [W3C guidance on interaction animation](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html).

## What to add next, in order

1. **Verify real inquiry delivery.** The UI passed tests with a mocked submission module; no email or database record was sent. Confirm inbox activation, receipt, and database permissions in an authorized live test. The current backend sends email before saving to Firestore: if storage fails afterward, the visitor can see a failure after an email has already been sent. Track these outcomes separately to avoid misleading retries.
2. **Turn the two projects into fuller case studies.** Explain the client's need, the work delivered, the design decisions, and what visitors can do on the finished site. Include authentic desktop/mobile screenshots. Add before/after comparisons only where the original material exists, and measurable outcomes only where records support them.
3. **Add two or three approved client testimonials.** Include the client's name, business, and specific feedback, with permission. Keep the empty testimonial section off the homepage until this material exists.
4. **Introduce the people behind SpeedyRebuilds.** A real name, portrait, and short explanation of your experience would make the otherwise broad About copy more concrete. Do not imply team size or credentials without confirmation.
5. **Create focused service pages.** Start with custom websites and website rebuilds. Explain deliverables, process, client responsibilities, typical scope, and relevant work. Add practical answers about ownership, hosting, recurring costs, and revisions once your actual terms are confirmed. Google recommends original, useful content rather than content written mainly to attract search traffic: [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
6. **Check search visibility and measurement.** Verify the custom domain in Search Console, submit the sitemap after publication, review canonical selection/indexing, and measure successful inquiries and phone/email clicks. This needs access to the relevant accounts. Structured data can clarify organization identity, but it does not guarantee rankings: [Organization documentation](https://developers.google.com/search/docs/appearance/structured-data/organization). A sitemap supports URL discovery: [sitemap overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).

Keep the package options and the broad audience focus. Continue replacing generic assurances with specific evidence. Avoid adding a blog just to fill space, invented results, auto-scrolling carousels, or effects that compete with the hero text.

## Measurements

Measured during the initial audit preview, before the subsequent pricing-copy update.

| Check | Before | Preview |
| --- | ---: | ---: |
| Initial production JavaScript, Vite output | 566.07 KB | 297.84 KB |
| Initial JavaScript, Vite gzip estimate | 162.29 KB | 96.51 KB |
| Homepage height at the desktop comparison viewport | 10,250 px | 8,772 px |
| Portfolio section starts at | 2,139 px | 1,077 px |
| Elements using the generic `.card` class | 46 | 31 |

Initial JavaScript is approximately 47% smaller before compression. The additional 273.19 KB Firebase chunk is requested only on form submission; this is a reduction in initial loading, not a claim that the combined application is smaller. Layout measurements used a 1440-pixel desktop viewport. These are local measurements, not Lighthouse scores or real-user Core Web Vitals.

## Verification

- TypeScript and production build: passed (`npm run build`).
- Whitespace/error check: passed (`git diff --check`). No lint or unit-test script is configured.
- Responsive checks at widths 320, 390, 768, 1024, 1440, and 1920: no horizontal overflow. Desktop and mobile screenshots reviewed.
- All six service links and four pricing links select the intended service and retain entered content. All local fragment links resolve to existing elements.
- Required/email/URL validation passed. Mocked success resets the form; mocked failure preserves it and allows retry. Live outbound submission endpoints were blocked during testing.
- Keyboard checks passed for FAQs, skip link, mobile menu open/close, Escape, focus restoration, and hero pause/play.
- Normal hover movement and reduced-motion suppression verified. Reduced motion leaves content visible and makes no video request.
- Hero regression checks passed: selected 1080p/720p rendition, no duplicate rendition on resize, no mobile video requests, silent inline autoplay, looping, offscreen/tab pause, manual pause persistence, blocked-autoplay recovery, and failed-download poster fallback.
- Canonical URL and structured-data JSON checked in the browser; robots.txt, sitemap.xml, and sharing image are included in the build.
- After publication, the custom-domain homepage, favicon.ico, and small SR PNG matched the built files byte for byte. All five favicon/touch-icon references decoded successfully in the live browser. Live quote-based pricing, desktop video playback, mobile layout, and poster fallback passed checks.
- No uncaught browser runtime exceptions in the interaction tests.

Unverified: physical Safari/iOS devices, live email/database delivery, Google indexing/rich-result validation, and real-user performance. The build reports an existing stale Browserslist data warning. Browser testing used local Chrome through CDP because the in-app browser integration could not initialize in this session.

## Files changed for this update

- `App.tsx`: homepage section order and main-content target.
- `components/WorkSection.tsx`, `ServicesSection.tsx`, `ProcessSection.tsx`, `PricingSection.tsx`, `FAQSection.tsx`: content presentation and interactions.
- `components/Navbar.tsx`, `Reveal.tsx`, `ContactSection.tsx`, and new `ProjectLink.tsx`: motion, navigation, accessibility, form validation, and deferred submission code.
- `index.css`: responsive styling and reduced-motion rules.
- `index.html`, new `public/robots.txt`, and new `public/sitemap.xml`: domain and search metadata.
- `public/icons/` and `public/favicon.ico`: the existing approved SR mark at browser and touch-icon sizes, with fresh icon URLs to replace cached branding.
- `docs/website-audit.md`: this report.

Earlier logo, portfolio, copy, and hero-video changes already present in the workspace were retained. The approved update and refreshed favicon references are live at https://speedyrebuilds.com/.
