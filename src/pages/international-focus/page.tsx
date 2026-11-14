import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Eyebrow from '../../components/base/Eyebrow';
import { INTERNATIONAL, ORG, PHOTOS, photo } from '../../content/ldii';

/** International Focus page: built to the CEO's design brief (hero, how we work, who we bring together, six focus areas, partner band). */
export default function InternationalFocusPage() {
  const { hash } = useLocation();
  const [open, setOpen] = useState<string | null>(null);

  // A link such as /international-focus#mining opens that area and scrolls to it.
  useEffect(() => {
    const slug = hash.replace('#', '');
    if (INTERNATIONAL.areas.some((a) => a.slug === slug)) {
      setOpen(slug);
      requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [hash]);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden bg-ldii-ink text-white">
        <img src={photo(PHOTOS.cheer.id, 1920, 900)} alt="" className="absolute inset-0 -z-20 w-full h-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ldii-ink via-ldii-ink/85 to-ldii-ink/40" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <Eyebrow light>International Partnerships &amp; Knowledge Exchange</Eyebrow>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-tight">{INTERNATIONAL.title}</h1>
          <p className="mt-4 font-display italic text-xl md:text-2xl text-tech-teal-300 max-w-3xl">{INTERNATIONAL.tagline}</p>
          <p className="mt-6 text-lg text-white/85 max-w-3xl leading-relaxed">{INTERNATIONAL.intro}</p>
        </div>
        <p className="sr-only">Photo: {PHOTOS.cheer.alt}</p>
      </section>

      {/* 2. How we work */}
      <section className="bg-white py-20" aria-labelledby="how-we-work">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>How we work</Eyebrow>
          <h2 id="how-we-work" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy">Five principles</h2>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {INTERNATIONAL.principles.map((p, i) => (
              <li key={p.title} className="bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-ldii-mist text-tech-teal-800 flex items-center justify-center text-xl" aria-hidden="true">
                    <i className={p.icon} />
                  </span>
                  <span className="text-xs font-semibold text-gray-500 tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ldii-navy leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-gray-700">{INTERNATIONAL.delivery}</p>
        </div>
      </section>

      {/* 3. Who we bring together */}
      <section className="bg-ldii-navy text-white py-14" aria-labelledby="together">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="together" className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-tech-teal-300">Who we bring together</h2>
          <p className="mt-4 font-display text-xl md:text-2xl leading-relaxed">
            {INTERNATIONAL.stakeholders.map((s, i) => (
              <span key={s}>
                {s}
                {i < INTERNATIONAL.stakeholders.length - 1 && <span className="text-tech-teal-500 mx-3" aria-hidden="true">·</span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* 4. Six focus areas */}
      <section className="bg-ldii-mist py-20 md:py-28" aria-labelledby="areas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Focus areas</Eyebrow>
          <h2 id="areas" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy">Six areas of Global North–Global South partnership</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {INTERNATIONAL.areas.map((a, i) => {
              const isOpen = open === a.slug;
              return (
                <article key={a.slug} id={a.slug} className="scroll-mt-28 bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col">
                  <img src={photo(a.image, 800, 500)} alt={a.imageAlt} loading="lazy" className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-ldii-mist text-tech-teal-800 flex items-center justify-center text-lg" aria-hidden="true">
                        <i className={a.icon} />
                      </span>
                      <span className="text-xs font-semibold text-gray-500 tracking-widest">0{i + 1}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ldii-navy leading-snug">{a.title}</h3>
                    <p className="mt-1 italic text-tech-teal-800">{a.tagline}</p>
                    <p className="mt-3 text-gray-700 leading-relaxed">{a.summary}</p>
                    <ul id={`${a.slug}-more`} hidden={!isOpen} className="mt-4 space-y-2">
                      {a.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-gray-700">
                          <i className="ri-check-line text-tech-teal-800 mt-0.5" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                      {a.link && (
                        <li className="pt-2">
                          <Link to={a.link.href} className="inline-flex items-center gap-1 font-semibold text-tech-teal-800 hover:text-ldii-navy">
                            {a.link.label} <i className="ri-arrow-right-line" aria-hidden="true" />
                          </Link>
                        </li>
                      )}
                    </ul>
                    <button
                      type="button"
                      className="mt-auto pt-5 self-start inline-flex items-center gap-1 font-semibold text-tech-teal-800 hover:text-ldii-navy"
                      aria-expanded={isOpen}
                      aria-controls={`${a.slug}-more`}
                      onClick={() => setOpen(isOpen ? null : a.slug)}
                    >
                      {isOpen ? 'Show less' : 'Learn more'}
                      <span className="sr-only"> about {a.title}</span>
                      <i className={`ri-arrow-down-s-line transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Partner with us */}
      <section className="bg-ldii-ink text-white py-20" aria-labelledby="partner">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 id="partner" className="font-display text-4xl font-semibold">{INTERNATIONAL.cta.title}</h2>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">{INTERNATIONAL.cta.text}</p>
          <p className="mt-6 text-lg">
            <a href={`mailto:${ORG.email}`} className="font-semibold text-tech-teal-300 hover:text-white">{ORG.email}</a>
            <span className="mx-3 text-white/40" aria-hidden="true">·</span>
            <a href={ORG.phoneHref} className="font-semibold text-tech-teal-300 hover:text-white">{ORG.phone}</a>
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-tech-teal-500 text-ldii-navy px-8 py-4 rounded-full font-semibold hover:bg-tech-teal-400">
            Contact us <i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
