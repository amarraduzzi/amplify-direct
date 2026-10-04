# Amplify Direct

Self-serve website builder for restaurants (Morocco). Restaurants create their own site, take orders directly (WhatsApp + kitchen screen), avoid delivery-platform commissions and collect more Google reviews. Part of the Amplify family: Amplify POS, Amplify Profit, Amplify Direct.

## Stack
Astro + Tailwind 4, static, Cloudflare Pages. Same stack and design tokens as `amarraduzzi/amplifygrowthstudio2` (the marketing site). Fonts: Archivo Variable + Readex Pro Variable (Arabic).

## Design rules (match the marketing site exactly)
- Tokens live in `src/styles/global.css` (`@theme`): chalk #EEF1EC, navy #001E3E, blue #002E5F, green #05B962, green-deep #00804A, mint, muted, line. Do not add colors.
- Headlines (h1, h2): condensed, uppercase, 800. Body: Archivo 400, 18px.
- Rounded-full pill buttons (green = main action), rounded-3xl cards with ring-1 ring-line, navy sections with rounded-[2rem].
- Phone mockups for previews. One motion moment per page; respect prefers-reduced-motion.
- Customer-facing sites built by restaurants use fixed themes and a limited accent palette so output is always good-looking. Never offer free-form layout.

## Product rules
- Copy says "site", not "landing page". French first, then Arabic (RTL) and English, same as the marketing site.
- Google reviews: never filter or gate by rating. Everyone gets the Google link; private feedback is an extra option only.
- Direct ordering: pickup, dine-in (QR per table), delivery by zone. Orders go to WhatsApp and the in-restaurant screen. No commission.
- Pricing: placeholder until confirmed (`.ph` style marks open items).

## Status
Done: landing page (`/`), savings calculator, builder prototype (`/builder/`, in-memory, no backend).
Next: shared menu data model, photo-of-menu import, accounts + database, publish to subdomain, QR codes, review flow, delivery zones, kitchen screen link to Amplify POS.

## Rules for working here
- Never commit secrets. Keys go in `.env` (gitignored) and Cloudflare environment variables.
- Work on a branch, check the Cloudflare preview, then merge to main.
- Keep `SITE.live = false` (noindex) until launch day.
