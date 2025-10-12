# Headphones — ALX HTML/CSS Project (final)

## Overview
This repository contains a from-scratch implementation of a landing page (header/hero, What we do, Our results, Contact, Footer) using **only HTML + CSS** and a small JavaScript file for the hamburger menu on small screens.

Features:
- No external CSS frameworks used.
- Pentagon graphics drawn with CSS only (no images).
- Mobile layout switches at **480px or below**.
- Hover/active link color: `#FF6565`.
- Button hover: `opacity: 0.9`.
- Max content width `1000px`, centered.
- Basic accessibility considerations: semantic HTML, labelled form controls, ARIA attributes for hamburger and menu.
- Animations applied to "What we do" cards and pentagons.

## Files
- `8-index.html` — main HTML page.
- `8-styles.css` — all CSS (variables, layout, responsive).
- `8-script.js` — JS for hamburger toggle (small, accessible).
- `README.md` — this file.

## How to run
1. Clone or download the folder `headphones` into your local environment.
2. Open `8-index.html` in a browser. No build step required.

## QA checklist (manual)
Please perform the following manual QA checks (these follow the project's instructions):
- [ ] Load `8-index.html` in desktop width (≥ 1000px) and confirm layout matches design intent:
  - Header shows brand, nav links, CTA.
  - Hero copy and decorative mockup visible.
  - "What we do" shows three cards in a row.
  - "Our results" shows stats + pentagon cluster and CTA.
  - Contact form visible with two-column layout (form + office info).
- [ ] Resize viewport to **480px** or narrower:
  - Confirm navigation is replaced visually by the hamburger icon.
  - Click the hamburger to open/close the mobile menu.
  - Confirm content stacks vertically and remains readable.
- [ ] Hover states:
  - Links change to `#FF6565` on hover/focus.
  - Buttons reduce opacity to `0.9` on hover.
- [ ] Accessibility:
  - All form inputs have labels.
  - Hamburger button has `aria-expanded` updated and `aria-label` changed on toggle.
  - Focus outlines are visible and adequate.
- [ ] Pentagons:
  - The pentagon shapes are rendered purely in CSS (no images).
  - Confirm interaction animation on hover of pentagon.
- [ ] Animations:
  - "What we do" cards have subtle perpetual floaty animation.
  - Pentagons slightly scale on hover.

## Notes & design choices
- Fonts: the Figma design references specialized fonts (`Source Sans Pro`, `Spin-Cycle-OT`). In this code we use `Source Sans Pro` family fallbacks — if you have the exact fonts locally or want to import them, add an `@font-face` or include the font files.
- The headphone visual in the hero is a small CSS-only decorative mockup — not intended to be a pixel-perfect image replacement, but to match the spirit of the design.
- Minimal reset applied; the goal was clarity and small readable CSS.

## Next steps / improvements (optional)
- Replace decorative mockup with the actual asset from the design ZIP for pixel-perfect result.
- Add more advanced accessible features like skip-to-content link.
- Add CSS critical-path optimizations (minification).
- Add unit visual tests (Percy, Storybook snapshots) for visual regression.

---

## Request: Manual QA review
I have completed the implementation and included the QA checklist above. Please request **Manual QA Review** when you are ready and I will:
- Provide a short summary of any minor visual mismatches observed,
- Offer a short patch if you'd like changes (colors, spacing, or font-family adjustments).
