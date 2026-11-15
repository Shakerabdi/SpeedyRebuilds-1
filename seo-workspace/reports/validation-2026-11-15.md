# Validation record

Completed November 15, 2026 against the local production build on branch `codex/seo-foundations-2026-11-15`.

| Check | Result |
| --- | --- |
| `npm run build` | TypeScript, Vite production build and homepage prerendering passed. |
| `node scripts/verify-lead-delivery.mjs` | Six checks passed: accepted email; failed backup; stalled backup; provider rejection inside HTTP 200; HTTP failure; network failure. No real messages or Firebase writes. |
| Initial HTML | One H1 and 42 links present before JavaScript; canonical and JSON-LD parsed correctly. |
| Desktop and mobile hydration | No hydration or uncaught runtime errors in isolated Chromium checks. |
| Motion settings | Reduced-motion and normal-motion sessions checked; normal reveal animation still completed. |
| JavaScript disabled | Main heading, services and direct email link present; content remains visible. |
| Free-audit path | Hero CTA selects the correct service; website URL becomes required; message becomes optional. |
| Mocked inquiry success | Success message shown and fields reset. |
| Mocked inquiry failure | Error message shown, entered details retained and retry enabled. |
| Mobile | 390-pixel viewport has no horizontal overflow; menu opens and Escape closes it. |
| Internal fragments | Every nonempty local anchor target exists. |
| Font fallback | System sans-serif works with external font requests blocked. |
| `git diff --check` | Passed. |

The browser check used an isolated headless Chromium instance and the production preview at `http://127.0.0.1:4174/`. External requests were blocked and the delivery chunk was replaced with a test stub for form UI checks. The actual delivery module was exercised separately with mocked provider and Firebase dependencies. A successful mock is not evidence of real inbox delivery.

Screenshots: [desktop](../../outputs/seo-20261115/desktop-homepage.png), [mobile](../../outputs/seo-20261115/mobile-homepage.png). Machine-readable browser results: [browser-validation.json](../../outputs/seo-20261115/browser-validation.json).

The workspace includes pre-existing portfolio/CSS edits. Those were preserved, not included in the SEO implementation's source-file changes. Physical Safari/iOS testing, a new live form-delivery test, a post-deployment crawl, rich-result validation, and real-user performance measurements remain outside these local checks.

The production build still reports the pre-existing stale Browserslist database warning. No ranking or performance increase is claimed from these checks.
