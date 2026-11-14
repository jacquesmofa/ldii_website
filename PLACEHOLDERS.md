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
3. Green "LDII" wordmark logo (named in the International Focus brief): please send the file (SVG or PNG). The site still uses the round logo.
4. President profile: "Founder & President", "Researcher for the World Bank", "chairman of Climate Change Action of East Africa", University of British Columbia, Toronto and Brampton Boards of Trade. Please confirm each line with Ronald.
5. Charity status: is LDII a registered charity that issues tax receipts? The site says nothing about receipts until confirmed.
6. Donations: should we add a real payment option (e.g. a donation platform), or keep the email pledge plus e-Transfer?
7. Programme photos: the local programmes use the best real photos available (conference, Brampton council, offices). Real photos of newcomer, youth and seniors activities would be better.
8. Photos in the Cloudinary "assets" folder could not be browsed (console login needed). If there are newer pictures, send the folder or a CSV export.

## Forms
All forms post to Web3Forms (key in `src/lib/web3forms.ts`). Send a test message from each form after deploy and confirm it reaches admin@ldiinitiatives.org.
