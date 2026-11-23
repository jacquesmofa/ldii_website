# Business cards: Ronald Lwabaayi (23 Nov 2026)

- `cards.html`: the design (3 card sides; 3.5 x 2 in + 1/8 in bleed). Fonts come from this repo's `node_modules/@fontsource` (Source Serif 4, IBM Plex Sans) and `@fontsource/oswald` (LDII wordmark, re-set as vector in the logo's green #547A38: replace with the official vector logo when it arrives).
- `qr.svg`: "scan to save contact" code made from `vcard.txt`. Change a detail → regenerate both.
- `render.mjs`: headless Chrome → preview PNGs + `bleed.pdf`; print-shop PDFs, 10-up office sheets (Avery 8371/5371 layout) and PowerPoint files are made from `bleed.pdf`.
- Open: which email goes on the card (admin@ldiinitiatives.org now; ronaldlwabaayi@gmail.com also exists) and whether +1 647 656 3026 is his direct line.

## Team cards (23 Nov 2026): the team adopted the two-sided design (concept A)
- People, titles and contact details: `TEAM` in `team.py` → `python3 team.py` writes `team.html` + one `qr-<name>.svg` each → `node render-team.mjs` → `team-bleed.pdf` (2 pages per person).
- Ronald Lwabaayi (President & Founder), Elvis Tanwie, PMP (Project Manager), Jacques N. Mofa (Communications Coordinator & IT Lead).
- Open: all three cards carry the office phone and admin@ldiinitiatives.org until each person's own email/phone is confirmed.
