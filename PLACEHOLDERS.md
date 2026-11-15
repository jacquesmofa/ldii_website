# PLACEHOLDERS: LDII website

Everything here is unconfirmed or still a stand-in. Nothing in this list is shown on the site as fact.

## Removed in Nov 2026 because they were not confirmed (add back only with the CEO's OK)

**People**
- "Dr. Amara Okafor" (press release quote): confirmed not real, removed.
- "David Thompson" (media contact): replaced by LDII Media Relations, info@ldiinitiatives.org, +1 647 656 3026.
- Nine home-page testimonials (Dr. Amina Hassan, James Mitchell, Maria Santos, Dr. Chen Wei, Sarah Johnson, Ambassador David Okonkwo, Prof. Isabelle Dubois, Rafael Mendez, Dr. Fatima Al-Rashid): the whole section was removed. Send real quotes with the person's written permission to bring it back.
- Conference speaker lists (incl. Dr Tedros, Prof. Michael Chen, Prof. David Kim) and invented directors.

**Partners** (were shown with computer-generated logos). Now only Thrive Tours, KWETU Connect, Pearson Convention Centre and Metro Toronto Convention Centre are listed (`src/mocks/partnersData.ts`). Removed until confirmed, each with a real logo file:
UNDP, WHO, African Union, CPLP, World Bank, IMF, European Union, OECD, Climate Investment Funds, Green Climate Fund, IDRC, USAID, City of Brampton, Brampton Board of Trade, Toronto Region Board of Trade, Canadian Hispanic Chamber of Commerce, Government of Canada, Province of Ontario, RBC, Ethiopian Airlines, IGAD, Mamy Kaya, Hilton Garden Inn Brampton, University of Toronto, York University, Ryerson University.
Also removed: partner counts "15+ government, 25+ NGOs, 30+ private sector, 10+ academic".

**Numbers and projects**
- Impact page programmes (African Health Systems Resilience, Climate-Smart Agriculture, Digital Innovation, Women's Economic Empowerment, Youth Leadership, Sustainable Energy, research network) and their outcomes.
- "Brampton Declaration", "Toronto Framework", "International Post-COVID Recovery Network".
- Success Stories, Metrics and Annual Reports pages (all figures invented): these addresses now open Our Impact. Real annual reports can be published there.
- Past Projects (2 million people, 500+ health workers, 35% maternal mortality…) and Upcoming Projects targets: both pages now list the real events.
- What We Do pages: "Projects in action", success stories and impact numbers (50,000+ lifted from poverty, 15,000 school meals, etc.). The general world facts stay.
- Technology & AI page: "150+ / 25+ / 200+ / 5,000+" figures, "50+ countries" and two case studies.
- Who We Are: "Founded in 2014", "offices across multiple continents", "45+ team members, 25+ nationalities".
- FAQ: "10 years, 250+ communities, 45+ projects, 120+ organisations".
- Donate: "thousands of donors in over 25 countries".
- Media page "Recent news" (World Bank partnership, 75,000 youth): replaced by the real November 2026 engagements.
- About page: "Established 2018 / 2020 / 2021" under the offices (contradicted "Founded 2014").

**Kept** because they come from the president's own profile: "100,000+ fruit trees planted" and "250 global delegates".

## Answered (14 Nov 2026, from LDII's documents)
- 1st Post-COVID conference: July 11–13, 2024 (IGAD and AU6RG articles). The video once filed under it is the October 1, 2023 parade; it now plays on the home page (Mux).
- Public email: admin@ldiinitiatives.org everywhere.
- Helsinki and Kampala offices: no longer shown; only the Toronto office is listed.
- Mining mission: June 2027, Greater Sudbury and Timmins, co-hosted with Thrive Tours (their letter).

## Removed on 14 Nov 2026 (rebuild)
- Donate page figures "10+ years / 250+ communities / 45+ projects / 120+ partners / 25+ countries", "registered charity / tax receipt" wording, card and PayPal options (no payment system is connected: the form is a pledge sent by email).
- FAQ: "25 countries", "120 organisations incl. World Bank", "200 research papers", "Research page", tax-deductible claims. Rewritten from the documents.
- Press release "LDII Announces 2026 Global Conference Series" (its events are unconfirmed) and the fake "Download PDF" buttons.
- Media page: "Available 24/7", "within 24 hours / same-day" promises; contact office hours.
- Readdy chat widget, Font Awesome and Google Fonts links, Imgur logo, old schema with dead addresses.
- Remaining Readdy AI pictures: all replaced with LDII's own photos (0 left).

## Questions for Jacques / the CEO
1. Hidden until confirmed (`unconfirmed: true` in `src/mocks/eventsData.ts`):
   - Global Shocks Global South Conference 2026, NEABEC 2026 (Helsinki), Global Shocks Global Resilience Conference 2026
   - CROP 2027, Ontario (only known from the old template text)
2. The three November 2026 albums: exact days and cities for Canada–South Africa and Angola?
3. Logo: the round logo stays in the header on purpose (the wide wordmark takes too much space). Confirmed 14 Nov.
4. President profile: Founder, World Bank researcher, chairman of Climate Change Action of East Africa, University of British Columbia: confirmed by Jacques 14 Nov. Still to confirm before funders read it: "East Africa Climate Summit in Nairobi (2023) with MOUs", "trade delegations and technology pilot agreements valued at over $10M CAD", "100,000+ fruit trees planted", "250 global delegates", "1st International Interfaith Multicultural Memorial (2024)".
5. Charity status: LDII is NOT a registered charity (confirmed 14 Nov). Donate page, FAQ and Terms now say gifts are not eligible for a charitable tax receipt.
6. Donations: should we add a real payment option (e.g. a donation platform), or keep the email pledge plus e-Transfer?
7. Programme photos: the local programmes use the best real photos available (conference, Brampton council, offices). Real photos of newcomer, youth and seniors activities would be better.
8. Photos in the Cloudinary "assets" folder could not be browsed (console login needed). If there are newer pictures, send the folder or a CSV export.

## Forms
All forms post to Web3Forms (key in `src/lib/web3forms.ts`). Send a test message from each form after deploy and confirm it reaches admin@ldiinitiatives.org.

## Audit for funder and partner risk (14 Nov 2026)
Changed:
- Photo captions no longer claim partnerships, signings, alliances or awards nobody confirmed (Brampton City Council "Official Partnership / Signing Ceremony / Award Presentation", "Iftika - Strategic Partnership Signing", "DEI Bio-Pharma - Strategic Alliance", "Press Partnership", "Angola Partnership"…). First-name-only or uncertain names ("Dr. Angium", "Iftika", "Mudaba", "Don", "Mami Kaya", "Barcey/Bracey") replaced by neutral captions. Kenya's head of mission is a High Commissioner, not an Ambassador. 1st-conference captions that invented sessions, dinners and awards are neutral now.
- Album "Diplomatic Engagements & Strategic Partnerships" renamed "Diplomatic Engagements".
- President page: "actively lobbies … to influence public policy" removed (lobbying has legal registration rules in Canada); "Proposed Citation" block removed (award-nomination text); "ecomuseums / non-oil GDP" bullet removed (from another context); "Toronto Region Board of Trade" spelled correctly; "Canada's largest business networks" softened.
- Mining page: no longer quotes the Uganda High Commission by name; "federally incorporated" replaced by "Canadian nonprofit organization" until the incorporation type is confirmed.
- AU6RG described as "an organization of the African diaspora" (it is not an African Union body).
- Upcoming events wording no longer promises "summits" and "exclusive opportunities".
Open:
- "Over 10 years of experience": a funder will compare this with LDII's incorporation date. Please confirm the year LDII was incorporated (an old version of the site said 2020).
- Local programmes are written in the present tense ("We help…"). Funders will ask for participant numbers or reports: keep a simple record of activities and results.
- Parade story: "plan to extend the annual event to Uganda, the UK, the USA, Italy and Spain" and "representatives of RBC" are public statements. Keep only if still true.
- Names in captions can be added back once spelled and titled correctly (e.g. Fathia A. Alwan, IGAD).
- Forms are sent by Web3Forms to the inbox registered with the key in `src/lib/web3forms.ts` (Jacques: info@ldiinitiatives.org). The site shows admin@ldiinitiatives.org as the public address.

## Confirmed by Jacques, 15 Nov 2026
- Brampton City Council: official partnership, signing and award are true; the City endorsed the conference (and plans to sponsor the next Brampton conference: not published until it is signed). Captions restored; City of Brampton added as a partner.
- DEI Bio-Pharma partnership is true (captions restored). "Press partnership", "Angola partnership" and "Iftika signing" stay neutral. LDII approached missions of Angola, DR Congo, Gabon, Uganda, Kenya, South Africa and the CPLP (said so on the Diplomatic Engagements album).
- Angola engagement was in 2025 (album, event and news corrected; old address redirects).
- Names are correct as first written (Dr. Angium, Iftika, Mami Kaya…); "Mudaba" is Edward. Still open: is it "Bracey" or "Barcey"? The site uses "Chris Bracey".
- LDII has been active since about 2014 and was registered in 2020: "over 10 years of experience" stays.
- President's page: Nairobi summit and MOUs (2023), $10M CAD agreements, 100,000+ fruit trees, 250 delegates, 2024 Interfaith Memorial: all confirmed, with documents and videos on file.
- Parade: the plan to extend to other countries stays; the RBC mention was removed.
- Mining mission (from the President): "Global South–Canada Mining & Technology Transfer Mission" / "Annual Global South Mining Mission to Greater Sudbury", every June, co-hosted with Thrive Tours. "Africa–Canada" is no longer used.
- Footer shows admin@ and info@ldiinitiatives.org.

## Still open
- One line describing the DEI Bio-Pharma partnership (and its website) to add it to the Partners list.
- City of Brampton logo, if LDII has permission to show it.
- A real photo from CROP 2026 in Sydney (the CROP logo is used for now).
