# CLAUDE.md: LDII (LD International Initiatives)

Connects African missions, ministries and chambers of mines with Northern Ontario mining expertise, and runs youth and community programmes in Toronto.

- Live domain: ldiinitiatives.org (found in code; confirm)
- Host: HostPapa (`/home/ldiinitiatives/public_html`)
- Design and audience: see `brand-dna.md`. Placeholders: `PLACEHOLDERS.md` (create it when you find one).

## Studio rules (Jacques' web studio: apply to every task)
- This site must look custom-made for this client, never like a template. Never reuse another client's palette, font pairing, layout rhythm or signature element. No generic AI layout (centered hero + 3 icon cards + testimonial slider + CTA band) unless Jacques asks for it.
- Read `brand-dna.md` in this repo before any design or content change. Items marked ❓ are not confirmed: ask, don't invent.
- Real copy and real photos only. Never invent reviews, testimonials, statistics, people or partner logos. Every placeholder goes in `PLACEHOLDERS.md`.
- Done means: `npm ci && npm run build` passes, you checked desktop and mobile yourself, alt text, AA contrast, page titles/descriptions, compressed images.
- Push to the deploy branch only after the build passes and the change is verified (pushing deploys the live site). Never commit secrets.
- Report to Jacques in plain language, no jargon, with the live link. Anything he must do himself (secrets, DNS, accounts): click-by-click steps.
- Studio stack (zero recurring cost): client's own host via GitHub Actions FTP deploy; Cloudflare free in front; images in Cloudinary or the repo; video on YouTube or Mux (store the public Playback ID, never the Asset ID); forms via Web3Forms; editing via Pages CMS + Sveltia at `/admin`. No Vercel Hobby or Netlify for client sites.

## Stack and build
- Originally a Readdy export: Vite + React + TypeScript + Tailwind + React Router, i18next installed.
- Install and build: `npm ci && npm run build` → output in `out/`.
- Dev preview: `npm run dev`.
- Routes: `/`, `/about`, `/about/our-work`, `/about/past-projects`, `/about/upcoming-projects`, `/about/who-we-are`, `/about/who-we-are/president-profile`, `/accessibility`, `/contact`, `/contact/get-in-touch`, `/contact/media-inquiries`, `/contact/our-locations`, `/donate`, `/events`, `/events/gallery`, `/events/gallery/:slug`, `/events/news`, `/events/past`, `/events/press-releases`, `/events/upcoming`, `/faq`, `/focus-areas`, `/impact`, `/impact/achievements`, `/impact/annual-reports`, `/impact/metrics`, `/impact/success-stories`, `/partners`, `/privacy-policy`, `/programs`, `/programs/local-capacity-training`, `/programs/mining-technology-exchange`, `/programs/youth-programs-ontario`, `/sitemap`, `/social-enterprise/consulting`, `/terms-of-service`, `/what-we-do`, `/what-we-do/climate-action`, `/what-we-do/digital-inclusion`, `/what-we-do/global-health`.

## Deploy
- `.github/workflows/deploy.yml`: push to `main` → build → FTP to HostPapa `public_html/` (secrets `HOSTPAPA_HOST`, `HOSTPAPA_USERNAME`, `HOSTPAPA_PASSWORD`). See README.md.

## Where things live
- Pages: `src/pages/<page>/` (one folder per page, sections in `components/`). Routes: `src/router/`.
- Text, images and links are mostly hard-coded inside the page components (`src/pages/<page>/components/*.tsx`) and in `src/mocks/`.
- Next studio step for this site: move client-facing content into `src/content/*.json` and wire up both editors (Pages CMS + Sveltia at `/admin`), exactly like `jacquesmofa/CAWAP` (see its CLAUDE.md and `scripts/studio-tools/` for `extract.mjs`, `snapshot.mjs`, `compare.mjs`). Verify with before/after snapshots that visitors see no change.

## Known issues (found 10 Nov 2026)
- 292 Readdy AI placeholder image URLs (`readdy.ai/api/search-image`) are still in the code. Replace them with real photos and track the rest in `PLACEHOLDERS.md`.
- `node_modules/` (≈22,000 files) and `out.zip` are committed to git: remove them from git (keep them in .gitignore) to make the repo fast again.
- Largest site in the studio: 40+ routes, 292 Readdy placeholder image URLs.
- Design overlap with other clients: Playfair Display + Inter pairing is shared by several Readdy sites (AL Cleaning, ISDIA, JRFAN, Trinity, Kwetu, CROP, Jacques' portfolio).
