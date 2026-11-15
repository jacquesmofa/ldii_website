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
- All client-facing content is in `src/content/` and editable in both editors (see "Editors" below). No new hard-coded text, images or links in components.

## Known issues (found 10 Nov 2026)
- 292 Readdy AI placeholder image URLs (`readdy.ai/api/search-image`) are still in the code. Replace them with real photos and track the rest in `PLACEHOLDERS.md`.
- Largest site in the studio: 40+ routes, 292 Readdy placeholder image URLs.
- Design overlap with other clients: Playfair Display + Inter pairing is shared by several Readdy sites (AL Cleaning, ISDIA, JRFAN, Trinity, Kwetu, CROP, Jacques' portfolio).

## Clean-up (13 Nov 2026)
- `node_modules/`, `out/` and `out.zip` are no longer in git; the deploy runs `npm ci`.
- Unconfirmed people, partners, numbers and projects removed; full list and open questions in `PLACEHOLDERS.md`.
- Real record lives in `src/mocks/eventsData.ts` (events; `unconfirmed: true` hides past-dated events nobody confirmed), `src/mocks/newsData.ts` (news), `src/mocks/partnersData.ts` (partners, real logos only). Impact, Achievements, Past/Upcoming Projects, Partners and the home page read from these.
- Gallery albums: `src/mocks/galleryEvents/*.ts` (newest: Greater Sudbury, Canada–South Africa, Angola, Nov 2026). Videos play from Cloudinary (`src` on a video).
- `public/sitemap.xml` lists every page on https://ldiinitiatives.org (regenerate when routes or albums change).

## Rebuild (14 Nov 2026)
- Structure from LDII's documents: menu About / Our Work / Events / Get Involved / Contact + Donate (`NAV` in `src/components/feature/Header.tsx`). New pages `/international-focus` (brief's 5 blocks) and `/local-programmes` (6 programmes + newcomer areas). Old addresses redirect: `REDIRECTS` in `src/router/config.tsx` and the same list as 301s in `public/.htaccess` (keep both in step).
- Single source of facts: `src/content/ldii.ts` (organisation, contact, About text, focus areas, programmes, posts, mining mission, photo choices). Events `src/mocks/eventsData.ts`, news `src/mocks/newsData.ts`, partners `src/mocks/partnersData.ts`.
- Home video: Mux Playback ID in `PARADE_VIDEO` (`src/components/feature/HlsVideo.tsx`, hls.js loaded on demand).
- SEO: `src/content/seo.json` (title, description, share picture per page) is read by `src/lib/pageSeo.ts` in the browser and by `scripts/social-pages.mjs` at build time (one HTML file per page + `sitemap.xml`). `scripts/prerender.mjs` then writes each page's content into its HTML with headless Chrome (skips gracefully without Chrome). Event pages carry Event schema.
- Build: `vite build && node scripts/social-pages.mjs && node scripts/prerender.mjs`. Add a page: route + `seo.json` entry.
- Design tokens and fonts: see brand-dna.md. Open questions: PLACEHOLDERS.md.

## 15 Nov 2026
- `src/index.css` was rewritten: the old Readdy rule `img[loading="lazy"] { opacity: 0 }` had been hiding every lazy photo since the 14 Nov rebuild (its helper script was removed with the old index.html). Never reintroduce a rule that hides images until a script runs.
- Effects live in `src/index.css` (`data-reveal`, `.link-line`, `.photo-zoom`, `.arrow-slide`); `RevealOnScroll` in `src/App.tsx` tags every section automatically. `Breadcrumbs` and `BackToTop` are in `src/components/feature/`.
- The local workspace cannot load Cloudinary photos: always check pictures on the live site in the browser after a deploy.
- Mining mission name: "Global South–Canada Mining & Technology Transfer Mission" (President's wording). Do not write "Africa–Canada".

## Editors (15 Nov 2026)
- Content files: `src/content/*.json` (site, about, international, local-programmes, mining-mission, news-posts, news, events, partners, gallery, seo), `src/content/layout/*.json` (menu, footer, small blocks), `src/content/pages/<page>.json` (page wording; components import it as `copy`, or `pageText` on Impact and Privacy). `src/content/ldii.ts` and `src/mocks/*Data.ts` only load the JSON (through `normalize.ts`, which gives list items the empty lists their neighbours have).
- Pictures in JSON are full addresses. `photo()` sizes LDII Cloudinary photos and passes any other address (editor uploads in `public/media/uploads/` → `/media/uploads/...`) through unchanged.
- Pages CMS (`.pages.yml`, app.pagescms.org) and Sveltia (`public/admin/`, https://ldiinitiatives.org/admin/). BOTH CONFIGS ARE GENERATED: `npm run cms:config` builds them from the JSON files + `scripts/cms-registry.mjs` (files, groups, labels, help). `npm run cms:check` fails if they are stale. Never edit the two configs by hand. An empty list needs a `sample` in `FIELD_HINTS` (see `videos`).
- Adding content: JSON file (top level an object) → entry in `cms-registry.mjs` → `npm run cms:config` → commit all.
- Sveltia "Sign In with GitHub" runs on HostPapa: `public/api/auth.php` + `callback.php` (`oauth-common.php`: canonical origin https://ldiinitiatives.org). The OAuth App secret is never in the repo: the deploy workflow writes `out/api/oauth-config.php` from Actions secrets `CMS_GITHUB_CLIENT_ID` / `CMS_GITHUB_CLIENT_SECRET`. Without them, "Sign In Using Access Token" still works.
- Safety: `scripts/prerender.mjs` opens every page at build time; if a page does not render (an edit left out something it needs), the build fails and nothing is uploaded. New gallery albums get a share page and sitemap line automatically (`scripts/social-pages.mjs`).
- Refactors that must not change what visitors see: `scripts/studio-tools/` (snapshot before/after, compare). Editor guide for the team: `docs/editor-guide.md`.
