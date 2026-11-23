import { useState } from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from '../../components/base/Eyebrow';
import HlsVideo from '../../components/feature/HlsVideo';
import PostCard from '../../components/feature/PostCard';
import PartnerCards from '../../components/feature/PartnerCards';
import { ABOUT, INTERNATIONAL, LOCAL, MINING_MISSION, ORG, PARADE_VIDEO, PHOTOS, POSTS, photo } from '../../content/ldii';
import { getPastEvents } from '../../mocks/eventsData';
import { confirmedPartners } from '../../mocks/partnersData';
import copy from '../../content/pages/home.json';
// Text, images and links: src/content/pages/home.json (editable in the website editors).

function Hero() {
  const [watching, setWatching] = useState(false);
  return (
    <section className="relative isolate overflow-hidden bg-ldii-ink text-white">
      <HlsVideo
        background
        src={PARADE_VIDEO.src}
        poster={PARADE_VIDEO.poster(1600)}
        title={PARADE_VIDEO.title}
        className="absolute inset-0 -z-20 w-full h-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ldii-ink via-ldii-ink/80 to-ldii-ink/30" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28 min-h-[78vh] flex flex-col justify-center">
        <Eyebrow light>{ORG.name}</Eyebrow>
        <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.02] max-w-3xl">{copy.hero.title}<br />
          <span className="text-tech-teal-500">{copy.hero.label}</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">{copy.hero.text}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/international-focus" className="inline-flex justify-center items-center gap-2 bg-tech-teal-500 text-ldii-navy px-7 py-4 rounded-[3px] font-semibold hover:bg-tech-teal-400">{copy.hero.text2}<i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setWatching(true)}
            className="inline-flex justify-center items-center gap-2 border border-white/40 px-7 py-4 rounded-[3px] font-semibold hover:bg-white/10"
          >
            <i className="ri-play-circle-line text-xl" aria-hidden="true" />{copy.hero.button}</button>
        </div>
        <p className="mt-14 text-sm text-white/70 max-w-xl">{copy.hero.text3}</p>
      </div>

      {watching && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={PARADE_VIDEO.title}
          onClick={() => setWatching(false)}
        >
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <HlsVideo src={PARADE_VIDEO.src} poster={PARADE_VIDEO.poster(1600)} title={PARADE_VIDEO.title} className="w-full aspect-video bg-black rounded-lg" />
            <p className="mt-3 text-white/80 text-sm">{PARADE_VIDEO.title}</p>
          </div>
          <button
            type="button"
            onClick={() => setWatching(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl flex items-center justify-center"
            aria-label={copy.hero.ariaLabel}
          >
            <i className="ri-close-line" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

/** Three doors into the site, sitting across the bottom edge of the opening film. */
function QuickLinks() {
  const doors = copy.doors;
  return (
    <section className="relative z-10 bg-white" aria-label={copy.quickLinks.ariaLabel}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ul className="grid md:grid-cols-3 md:-mt-14 shadow-[0_18px_50px_-20px_rgba(10,30,61,0.35)] bg-white divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t-[3px] border-tech-teal-600">
          {doors.map((d) => (
            <li key={d.href}>
              <Link to={d.href} className="group flex items-center gap-5 p-5 lg:p-6 h-full hover:bg-ldii-mist transition-colors">
                <span className="photo-zoom block w-24 h-24 flex-shrink-0">
                  <img src={photo(PHOTOS[d.img as keyof typeof PHOTOS].id, 240, 240)} alt="" width={96} height={96} className="w-full h-full object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-tech-teal-800">{d.kicker}</span>
                  <span className="block mt-1 font-display text-xl font-semibold text-ldii-navy leading-snug">{d.title}</span>
                  <span className="block mt-1 text-sm text-gray-600">{d.text}</span>
                </span>
                <i className="ri-arrow-right-line arrow-slide ml-auto text-xl text-tech-teal-800" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** The six Ontario programmes as a photo index, next to a short introduction. */
function LocalStrip() {
  return (
    <section className="bg-ldii-sand py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Eyebrow>{copy.localStrip.text}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ldii-navy leading-tight">{LOCAL.tagline}</h2>
          <p className="mt-6 text-gray-700 leading-relaxed">{LOCAL.intro[0]}</p>
          <Link to="/local-programmes" className="group mt-8 inline-flex items-center gap-2 font-semibold text-tech-teal-800 hover:text-ldii-navy">
            <span className="link-line">{copy.localStrip.label}</span> <i className="ri-arrow-right-line arrow-slide" aria-hidden="true" />
          </Link>
        </div>
        <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8">
          {LOCAL.programmes.map((p, i) => (
            <li key={p.slug} className="border-t border-ldii-navy/15">
              <Link to={`/local-programmes#${p.slug}`} className="group flex items-center gap-5 py-5">
                <span className="photo-zoom block w-28 h-20 flex-shrink-0">
                  <img src={photo(p.image, 280, 200)} alt="" loading="lazy" width={112} height={80} className="w-full h-full object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-widest text-tech-teal-800">{copy.localStrip.label2}{i + 1}</span>
                  <span className="block mt-0.5 font-display text-lg font-semibold text-ldii-navy leading-snug group-hover:text-tech-teal-800 transition-colors">{p.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Row of real partner logos (only organisations with a logo on file). */
function LogoRow() {
  const withLogos = confirmedPartners.filter((p) => p.logo);
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6 border-y border-gray-200 py-8">
      <p className="w-full md:w-auto text-xs font-semibold uppercase tracking-[0.18em] text-gray-600">{copy.logoRow.text}</p>
      {withLogos.map((p) => (
        <a key={p.name} href={p.website} target="_blank" rel="noopener noreferrer" title={p.name} className="opacity-80 hover:opacity-100 transition-opacity">
          <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="h-12 w-auto max-w-[170px] object-contain" />
        </a>
      ))}
    </div>
  );
}

/** Signature: the two programme areas side by side, Local | Global. */
function TwoProgrammes() {
  const panels = [
    {
      label: 'Local',
      title: LOCAL.title,
      text: 'Six community programmes across Canada: newcomer settlement and housing, youth employment, youth safety, education and mental health, community partnerships, and seniors’ wellbeing.',
      href: '/local-programmes',
      cta: 'See our local programmes',
      img: photo('Brampton_counci_kryhsj', 1100, 760),
      alt: PHOTOS.brampton.alt,
    },
    {
      label: 'Global',
      title: 'International Partnerships & Knowledge Exchange',
      text: 'Six areas of Global North–Global South partnership: climate, mining innovation, trade, global health, food security, and sustainable investment.',
      href: '/international-focus',
      cta: 'See our international focus',
      img: photo(PHOTOS.cheer.id, 1100, 760),
      alt: PHOTOS.cheer.alt,
    },
  ];
  return (
    <section className="bg-ldii-mist py-20 md:py-28" aria-labelledby="two-areas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{copy.twoProgrammes.text}</Eyebrow>
          <h2 id="two-areas" className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ldii-navy leading-tight">{copy.twoProgrammes.heading}</h2>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {panels.map((p) => (
            <Link key={p.label} to={p.href} className="group relative rounded-3xl overflow-hidden min-h-[460px] flex items-end text-white">
              <img src={p.img} alt={p.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ldii-ink via-ldii-ink/70 to-transparent" aria-hidden="true" />
              <div className="relative p-8 md:p-10">
                <span className="inline-block rounded-full bg-tech-teal-500 text-ldii-navy text-xs font-bold uppercase tracking-widest px-3 py-1">{p.label}</span>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-3 text-white/85 leading-relaxed max-w-xl">{p.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-tech-teal-300 group-hover:text-white">
                  {p.cta} <i className="ri-arrow-right-line" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const facts = copy.facts;
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Eyebrow>{copy.whoWeAre.text}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ldii-navy leading-tight">{ORG.promise}</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">{ABOUT[0]}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{ABOUT[1]}</p>
          <dl className="mt-10 grid grid-cols-2 gap-6">
            {facts.map((f) => (
              <div key={f.label} className="border-l-2 border-tech-teal-600 pl-4">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-semibold text-ldii-navy">{f.value}</span>
                  <span className="block text-sm text-gray-600 mt-1">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 font-semibold text-tech-teal-800 hover:text-ldii-navy">{copy.whoWeAre.text2}<i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </div>
        <div className="lg:col-span-6 grid grid-cols-5 gap-4">
          <img src={photo(PHOTOS.group1st.id, 900, 1100)} alt={PHOTOS.group1st.alt} loading="lazy" className="col-span-3 rounded-2xl w-full h-full object-cover aspect-[4/5]" />
          <div className="col-span-2 flex flex-col gap-4">
            <img src={photo(PHOTOS.president.id, 500, 600)} alt={PHOTOS.president.alt} loading="lazy" className="rounded-2xl w-full object-cover aspect-[5/6]" />
            <Link to="/about/who-we-are/president-profile" className="rounded-2xl bg-ldii-navy text-white p-5 flex-1 flex flex-col justify-end hover:bg-tech-teal-800 transition-colors">
              <span className="text-xs uppercase tracking-widest text-tech-teal-300">{copy.whoWeAre.label}</span>
              <span className="font-display text-xl font-semibold mt-1">{ORG.president}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusStrip() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>{copy.focusStrip.text}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ldii-navy leading-tight">{INTERNATIONAL.tagline}</h2>
          </div>
          <Link to="/international-focus" className="inline-flex items-center gap-2 font-semibold text-tech-teal-800 hover:text-ldii-navy whitespace-nowrap">
            <span className="link-line">{copy.focusStrip.label}</span> <i className="ri-arrow-right-line arrow-slide" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNATIONAL.areas.map((a, i) => (
            <li key={a.slug}>
              <Link to={`/international-focus#${a.slug}`} className="group block rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow h-full">
                <div className="relative">
                  <img src={photo(a.image, 700, 440)} alt={a.imageAlt} loading="lazy" className="w-full aspect-[16/10] object-cover" />
                  <span className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white/95 flex items-center justify-center text-tech-teal-800 text-xl" aria-hidden="true">
                    <i className={a.icon} />
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-gray-500 tracking-widest">{copy.focusStrip.text2}{i + 1}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ldii-navy group-hover:text-tech-teal-800">{a.title}</h3>
                  <p className="mt-2 text-sm italic text-gray-600">{a.tagline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MissionFeature() {
  return (
    <section className="bg-ldii-navy text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        <img src={photo(MINING_MISSION.image, 1200, 900)} alt={MINING_MISSION.imageAlt} loading="lazy" className="w-full h-full object-cover min-h-[320px]" />
        <div className="px-6 py-16 md:px-14 md:py-20">
          <Eyebrow light>{copy.missionFeature.text}{MINING_MISSION.when}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight">{MINING_MISSION.title}</h2>
          <p className="mt-5 text-white/85 leading-relaxed">{MINING_MISSION.summary}</p>
          <ul className="mt-6 space-y-3">
            {MINING_MISSION.programme.map((p) => (
              <li key={p} className="flex gap-3 text-white/85">
                <i className="ri-checkbox-circle-fill text-tech-teal-500 mt-0.5" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/70">{MINING_MISSION.partner}.</p>
          <Link to="/programs/mining-technology-exchange" className="mt-8 inline-flex items-center gap-2 bg-tech-teal-500 text-ldii-navy px-6 py-3 rounded-[3px] font-semibold hover:bg-tech-teal-400">{copy.missionFeature.text2}<i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function News() {
  const [lead, ...rest] = POSTS;
  return (
    <section className="bg-ldii-sand py-20 md:py-28" aria-labelledby="in-the-news">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>{copy.news.text}</Eyebrow>
            <h2 id="in-the-news" className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ldii-navy leading-tight">{copy.news.heading}</h2>
          </div>
          <Link to="/events/news" className="inline-flex items-center gap-2 font-semibold text-tech-teal-800 hover:text-ldii-navy whitespace-nowrap">
            <span className="link-line">{copy.news.label}</span> <i className="ri-arrow-right-line arrow-slide" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6">
          <PostCard post={lead} wide />
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackRecord() {
  const events = getPastEvents().slice(0, 4);
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>{copy.trackRecord.text}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ldii-navy leading-tight">{copy.trackRecord.heading}</h2>
          </div>
          <Link to="/impact" className="inline-flex items-center gap-2 font-semibold text-tech-teal-800 hover:text-ldii-navy whitespace-nowrap">
            <span className="link-line">{copy.trackRecord.label}</span> <i className="ri-arrow-right-line arrow-slide" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((e) => (
            <li key={e.id}>
              <Link to={e.linkUrl || '/events/past'} className="group block h-full">
                <div className="photo-zoom bg-ldii-mist aspect-[4/3]">
                  {e.image ? (
                    <img src={e.image} alt={e.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-tech-teal-800 text-4xl" aria-hidden="true"><i className="ri-calendar-event-line" /></div>
                  )}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-tech-teal-800">{e.displayDate}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ldii-navy leading-snug group-hover:text-tech-teal-800">{e.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{e.location}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Mosaic() {
  // Tiles come from home.json > mosaic.tiles (photo, description, album link); the old fixed set is the fallback.
  const fromContent = ((copy.mosaic as { tiles?: { image: string; alt: string; link?: string }[] }).tiles || []).filter((t) => t.image);
  const tiles = fromContent.length
    ? fromContent.map((t) => ({ id: t.image, alt: t.alt, link: t.link || '/events/gallery' }))
    : [PHOTOS.cheer, PHOTOS.sudbury, PHOTOS.angola, PHOTOS.igad, PHOTOS.hall2nd, PHOTOS.kenya].map((t) => ({ ...t, link: '/events/gallery' }));
  return (
    <section className="bg-ldii-ink text-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow light>{copy.mosaic.text}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold">{copy.mosaic.heading}</h2>
          </div>
          <Link to="/events/gallery" className="inline-flex items-center gap-2 font-semibold text-tech-teal-300 hover:text-white whitespace-nowrap">{copy.mosaic.text2}<i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3">
          {tiles.map((t, i) => (
            <Link
              key={t.id}
              to={t.link}
              className={`overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2' : i === 3 ? 'md:col-span-2' : ''}`}
            >
              <img src={photo(t.id, i === 0 ? 1100 : 700, i === 0 ? 820 : 420)} alt={t.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>{copy.partnerBand.text}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ldii-navy">{copy.partnerBand.heading}</h2>
        </div>
        <LogoRow />
        <div className="mt-10">
          <PartnerCards />
        </div>
        <div className="mt-16 rounded-3xl bg-ldii-mist p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-semibold text-ldii-navy">{INTERNATIONAL.cta.title}</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">{INTERNATIONAL.cta.text}</p>
            <p className="mt-4 text-gray-800">
              <a href={`mailto:${ORG.email}`} className="font-semibold underline decoration-tech-teal-600 underline-offset-4">{ORG.email}</a>
              <span className="mx-2 text-gray-500" aria-hidden="true">·</span>
              <a href={ORG.phoneHref} className="font-semibold">{ORG.phone}</a>
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-ldii-navy text-white px-7 py-4 rounded-[3px] font-semibold hover:bg-tech-teal-800">{copy.partnerBand.text2}<i className="ri-arrow-right-line" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <WhoWeAre />
      <TwoProgrammes />
      <LocalStrip />
      <FocusStrip />
      <MissionFeature />
      <News />
      <TrackRecord />
      <Mosaic />
      <PartnerBand />
    </>
  );
}
