import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Eyebrow from '../../components/base/Eyebrow';
import { LOCAL, NEWCOMER, ORG, PHOTOS, YOUTH_DIMENSIONS, photo } from '../../content/ldii';
import copy from '../../content/pages/local-programmes.json';
// Text, images and links: src/content/pages/local-programmes.json (editable in the website editors).

/** Local Community Development & Empowerment: six programmes across Ontario, plus the Newcomer Settlement programme in detail. */
export default function LocalProgrammesPage() {
  const { hash } = useLocation();
  const [openProg, setOpenProg] = useState<string | null>(null);
  const [openArea, setOpenArea] = useState<number | null>(0);

  useEffect(() => {
    const slug = hash.replace('#', '');
    if (!slug) return;
    if (LOCAL.programmes.some((p) => p.slug === slug)) setOpenProg(slug);
    requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }, [hash]);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ldii-ink text-white">
        <img src={photo(PHOTOS.brampton.id, 1920, 900)} alt="" className="absolute inset-0 -z-20 w-full h-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ldii-ink via-ldii-ink/85 to-ldii-ink/40" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <Eyebrow light>{copy.main.text}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">{LOCAL.title}</h1>
          <p className="mt-4 font-display italic text-xl md:text-2xl text-tech-teal-300">{LOCAL.tagline}</p>
          {LOCAL.intro.map((p) => (
            <p key={p.slice(0, 20)} className="mt-5 text-lg text-white/85 max-w-3xl leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* Six programmes: alternating picture rows, details open on demand */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="programmes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>{copy.main.text2}</Eyebrow>
          <h2 id="programmes" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy max-w-3xl">{copy.main.heading}</h2>
          <div className="mt-14 space-y-16 md:space-y-24">
            {LOCAL.programmes.map((p, i) => {
              const isOpen = openProg === p.slug;
              return (
                <article key={p.slug} id={p.slug} className="scroll-mt-28 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  <div className={i % 2 ? 'lg:order-2' : ''}>
                    <img src={photo(p.image, 1000, 720)} alt={p.imageAlt} loading="lazy" className="w-full rounded-3xl aspect-[25/18] object-cover" />
                  </div>
                  <div>
                    <p className="flex items-center gap-3 text-sm font-semibold text-tech-teal-800">
                      <span className="w-10 h-10 rounded-full bg-ldii-mist flex items-center justify-center text-lg" aria-hidden="true"><i className={p.icon} /></span>{copy.main.text3}{i + 1}
                    </p>
                    <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-ldii-navy leading-snug">{p.title}</h3>
                    <p className="mt-2 italic text-tech-teal-800">{p.tagline}</p>
                    <p className="mt-4 text-gray-700 leading-relaxed">{p.summary}</p>
                    <ul id={`${p.slug}-list`} hidden={!isOpen} className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-gray-700">
                          <i className="ri-check-line text-tech-teal-800 mt-0.5" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 font-semibold text-tech-teal-800 hover:text-ldii-navy"
                        aria-expanded={isOpen}
                        aria-controls={`${p.slug}-list`}
                        onClick={() => setOpenProg(isOpen ? null : p.slug)}
                      >
                        {isOpen ? 'Show less' : 'Key areas of focus'}
                        <i className={`ri-arrow-down-s-line transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      {p.detail && (
                        <a href="#newcomers-programme" className="inline-flex items-center gap-1 font-semibold text-ldii-navy hover:text-tech-teal-800">{copy.main.link}<i className="ri-arrow-down-line" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Youth empowerment dimensions (from the CEO's brief) */}
      <section className="bg-ldii-navy text-white py-20" aria-labelledby="youth">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow light>{copy.youthEmpowermentDimensionsFromThe.text}</Eyebrow>
          <h2 id="youth" className="mt-4 font-display text-3xl md:text-4xl font-semibold max-w-3xl">{copy.youthEmpowermentDimensionsFromThe.heading}</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {YOUTH_DIMENSIONS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-white/15 p-6">
                <h3 className="font-display text-xl font-semibold text-tech-teal-300">{d.title}</h3>
                <p className="mt-2 text-white/85">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newcomer Settlement & Integration Programme: picture-led areas, each opens on tap */}
      <section id="newcomers-programme" className="scroll-mt-24 bg-ldii-sand py-20 md:py-28" aria-labelledby="newcomer-title">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Eyebrow>{copy.youthEmpowermentDimensionsFromThe.text2}</Eyebrow>
              <h2 id="newcomer-title" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy">{NEWCOMER.title}</h2>
              {NEWCOMER.approach.map((p) => (
                <p key={p.slice(0, 20)} className="mt-4 text-gray-700 leading-relaxed">{p}</p>
              ))}
              <img src={photo(PHOTOS.offices.id, 900, 640)} alt={PHOTOS.offices.alt} loading="lazy" className="mt-8 w-full rounded-3xl aspect-[45/32] object-cover" />
            </div>
            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl font-semibold text-ldii-navy">{copy.youthEmpowermentDimensionsFromThe.subheading}</h3>
              <ul className="mt-6 divide-y divide-gray-300 border-y border-gray-300">
                {NEWCOMER.areas.map((a, i) => {
                  const isOpen = openArea === i;
                  return (
                    <li key={a.title}>
                      <button
                        type="button"
                        className="w-full flex items-center gap-4 py-5 text-left"
                        aria-expanded={isOpen}
                        aria-controls={`area-${i}`}
                        onClick={() => setOpenArea(isOpen ? null : i)}
                      >
                        <span className={`w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${isOpen ? 'bg-ldii-navy text-tech-teal-500' : 'bg-white text-tech-teal-800'}`} aria-hidden="true">
                          <i className={a.icon} />
                        </span>
                        <span className="flex-1 font-display text-lg md:text-xl font-semibold text-ldii-navy">
                          <span className="text-gray-600 font-sans text-sm mr-2">{i + 1}.</span>
                          {a.title}
                        </span>
                        <i className={`ri-add-line text-2xl text-tech-teal-800 transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true" />
                      </button>
                      <div id={`area-${i}`} hidden={!isOpen} className="pb-6 pl-[60px] pr-4 text-gray-700 leading-relaxed">
                        {a.text}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 rounded-2xl bg-white p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-ldii-navy">{copy.youthEmpowermentDimensionsFromThe.subheading2}</h3>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {NEWCOMER.beneficiaries.map((b) => (
                    <li key={b} className="flex gap-2 text-gray-700">
                      <i className="ri-user-heart-line text-tech-teal-800 mt-0.5" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-600">{NEWCOMER.eligibility}</p>
              </div>
              <p className="mt-8 text-gray-700 leading-relaxed">{NEWCOMER.commitment}</p>
              <p className="mt-4 font-display italic text-xl text-tech-teal-800">{NEWCOMER.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-20" aria-labelledby="approach">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>{copy.approach.text}</Eyebrow>
          <h2 id="approach" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy max-w-3xl">{copy.approach.heading}</h2>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL.approach.map((a, i) => (
              <li key={a.title} className="rounded-2xl bg-ldii-mist p-6">
                <span className="font-display text-3xl font-semibold text-tech-teal-800">{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ldii-navy">{a.title}</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{a.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 rounded-3xl bg-ldii-navy text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold">{copy.approach.subheading}</h3>
              <p className="mt-2 text-white/80">{copy.approach.text2}<a href={`mailto:${ORG.email}`} className="underline">{ORG.email}</a>{copy.approach.text3}<a href={ORG.phoneHref} className="underline">{ORG.phone}</a>.
              </p>
            </div>
            <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-tech-teal-500 text-ldii-navy px-7 py-4 rounded-[3px] font-semibold hover:bg-tech-teal-400 whitespace-nowrap">{copy.approach.text4}<i className="ri-arrow-right-line" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
