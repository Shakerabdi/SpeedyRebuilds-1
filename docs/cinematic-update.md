# Cinematic release — September 29, 2026

Implemented in the existing React/Vite project and published after approval to https://speedyrebuilds.com/. Final Firebase Hosting release: `1a364c1498820871`. The local development preview remains available at http://127.0.0.1:3000/.

## What changed

- Hero: layered blue lighting, fine grid and orbital details, small light points, a subtle scroll-based camera movement, and short staggered text entrances. Existing video, poster, controls, headline wording, links, and light navigation remain in place.
- Work: dimensional browser frames on illuminated project stages. Desktop pointer movement changes their viewing angle and light position; leaving the frame restores its resting position. The project links remain native keyboard-accessible anchors.
- Process: a sticky desktop introduction beside four scrolling stages. A decorative website illustration develops from wireframe to finished layout, with a stage readout that follows forward and backward scrolling. The original process content remains real HTML.
- Section entrances: slightly more depth and slower easing using the installed animation library.

No additional plugins, packages, paid services, image generation, or media downloads were needed. Framer Motion was already installed; the new scene behaviour uses CSS, IntersectionObserver, and event-driven animation frames.

## Performance and accessibility

The scene effects run only on desktop-sized viewports and suspend when offscreen or the tab is hidden. There is no continuously running JavaScript loop. Mobile shows the existing poster, flat project frames, and a regular stacked process. Short desktop viewports omit the decorative model to keep the sticky content visible.

Reduced motion disables parallax, tilt, entrance movement, model rotation, and sticky presentation. Live preference changes were checked. This follows [W3C guidance for disabling non-essential interaction animation](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Decorative layers are hidden from assistive technology and do not intercept clicks.

| Initial build output | Previous release | Cinematic release |
| --- | ---: | ---: |
| JavaScript | 297.85 KB | 302.60 KB |
| JavaScript, gzip estimate | 96.47 KB | 97.73 KB |
| CSS | 46.62 KB | 57.62 KB |
| CSS, gzip estimate | 8.95 KB | 11.46 KB |

The combined compressed increase is approximately 3.77 KB. These are build estimates, not real-user performance measurements. The existing deferred Firebase chunk and video files are unchanged.

## Checks

- TypeScript and production build passed. Whitespace checks passed. No lint or unit-test script is configured.
- Desktop, tablet, and mobile widths from 320 to 1920 pixels checked for horizontal overflow; screenshots reviewed.
- Hero parallax, project pointer response/reset, native links, keyboard focus, forward/backward process progression, and sticky positioning checked.
- Offscreen and hidden-tab scene suspension, live reduced-motion changes, mobile fallbacks, and short laptop viewports checked.
- Existing video regression checks passed: rendition selection, muted inline autoplay, keyboard pause/play, manual-pause persistence, offscreen/tab pause, looping, reduced-motion/mobile no-download behaviour, autoplay rejection recovery, and failed-video poster fallback.
- Quote-based pricing and all local link targets preserved. No live contact form submission was made.
- No uncaught runtime errors during the motion checks.
- Production verification: homepage and final JavaScript match the built files byte for byte. Live hero video, cinematic layers, scroll-led process, quote-based pricing, mobile poster fallback, and reduced motion passed. A scene-style observer recorded no motion writes during pointer movement and scrolling with reduced motion enabled. Viewport and motion preferences are monitored separately, and resize events resynchronize scene state.

Physical Safari/iOS and Firefox devices have not been tested. The build still reports the pre-existing stale Browserslist data warning. Browser verification used local Chrome because the in-app browser connection could not initialize.

## Files

- `components/HeroSection.tsx`: hero scene and atmospheric layers.
- `components/WorkSection.tsx` and new `components/ProjectPreview.tsx`: interactive project presentation.
- `components/ProcessSection.tsx`: scroll-led process and decorative model.
- `components/Reveal.tsx`: entrance timing and depth.
- New `components/useSceneMotion.ts`: scoped motion lifecycle and preference handling.
- `index.css`: responsive visual effects and accessibility fallbacks.

Unrelated workspace changes, contact delivery, SEO metadata, favicon, pricing copy, and existing video playback logic were preserved.
