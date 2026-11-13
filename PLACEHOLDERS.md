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

## Questions for Jacques / the CEO
1. These events have dates that have passed but we don't know if they happened. They are hidden from the site (`unconfirmed: true` in `src/mocks/eventsData.ts`) until confirmed:
   - Global Shocks Global South Conference 2026 ("TBA 2026")
   - NEABEC 2026, Helsinki (April 2026)
   - Global Shocks Global Resilience Conference 2026 (September 2026)
2. 1st Post-COVID conference: the site said both 11–13 and 15–17 July 2024 (the video file name says October 2023). The site now says "July 2024". Exact days?
3. Offices in Helsinki and Kampala: still open? (Helsinki was labelled "Regional Office - East Africa"; now "Nordic liaison".)
4. Two emails are used: info@ and admin@ldiinitiatives.org. Which one should the public see?
5. The three November 2026 albums are dated "November 2026": exact days and cities for Canada–South Africa and Angola?

## Stand-in pictures
- Many pages still use Readdy AI pictures (`readdy.ai/api/search-image`), e.g. What We Do, upcoming conference cards, About. Replace with real photos when available.
