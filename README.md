# Kyk Oogkundiges — Website Redesign

A static, multi-page redesign of the Kyk Oogkundiges optometry website
(Hoedspruit, South Africa). Plain HTML/CSS/JS — no build step, no framework,
deploys as-is on Vercel or any static host.

## Pages

| File            | Purpose                                              |
|------------------|-------------------------------------------------------|
| `index.html`     | Home — hero, about teaser, services teaser, team teaser, trust, CTA |
| `about.html`     | Full "About us" story, values, stats                  |
| `services.html`  | Detailed service breakdown + "how booking works"      |
| `team.html`      | Full team grid with bios                              |
| `contact.html`   | Contact form, address, phone/WhatsApp, map placeholder|

## Structure

```
.
├── index.html
├── about.html
├── services.html
├── team.html
├── contact.html
├── assets/
│   ├── css/styles.css     ← all design tokens + shared components
│   ├── js/main.js         ← mobile nav toggle
│   └── img/*.svg          ← PLACEHOLDER images — replace with real photos
└── vercel.json
```

## Before you deploy — things to swap out

These are placeholders on purpose, so the site works out of the box but
still needs your real info:

- **Images**: `assets/img/*.svg` are solid-color placeholders. Replace with
  real photos of the practice, storefront, and each team member (same
  filenames, or update the `src` in the HTML). JPG/WEBP recommended,
  ~1200px wide max, compressed for web.
- **Phone number**: currently `015 000 0000` / `tel:+27000000000` — find/replace
  across all five HTML files.
- **WhatsApp link**: `https://wa.me/27000000000` — replace `27000000000`
  with the real number in international format, no `+` or spaces.
- **Contact form**: `contact.html` has a plain `<form action="#">`. Wire it
  up to a form handler — easiest options on Vercel:
  - [Formspree](https://formspree.io) (just change the `action` URL)
  - A Vercel serverless function under `/api/contact` that emails you
- **Google Map**: `contact.html` has a `.map-frame` placeholder div.
  Replace it with a real Google Maps embed `<iframe>` for the practice
  address.
- **Opening hours**: placeholder text in `contact.html` under "Hours".
- **Social links**: `href="#"` on the Facebook/Instagram icons in the footer.
- **Team bios**: one-line placeholders in `team.html` — replace with real
  bios per person.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve it
locally:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploying on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Other** (static site) — no build command needed.
4. Output directory: leave as root (`.`).
5. Deploy.

`vercel.json` is included with clean URLs enabled, so `/about` works
without the `.html` extension if you want shorter links (internal links
still use `.html` for simplicity — update them if you switch over).

## Design system

Colors, type, spacing and component styles all live in
`assets/css/styles.css` as CSS custom properties at the top of the file —
change the palette or fonts there and it cascades everywhere. Dark mode
is supported automatically via `prefers-color-scheme`.
