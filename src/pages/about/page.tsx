import { Link } from 'react-router-dom';
import Eyebrow from '../../components/base/Eyebrow';
import { ABOUT, CORE_AREAS, FRAMEWORK, MISSION, ORG, PHOTOS, photo } from '../../content/ldii';

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ldii-ink text-white">
        <img src={photo(PHOTOS.group1st.id, 1920, 900)} alt="" className="absolute inset-0 -z-20 w-full h-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ldii-ink via-ldii-ink/85 to-ldii-ink/40" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <Eyebrow light>About us</Eyebrow>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">{ORG.name} (LDII)</h1>
          <p className="mt-4 font-display italic text-xl md:text-2xl text-tech-teal-300">{ORG.promise}</p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-5 text-lg text-gray-700 leading-relaxed">
            {ABOUT.map((p, i) => (
              <p key={p.slice(0, 20)} className={i === 0 ? 'text-xl text-ldii-navy font-medium' : ''}>{p}</p>
            ))}
          </div>
          <aside className="lg:col-span-5 space-y-6">
            <figure>
              <img src={photo(PHOTOS.opening.id, 900, 640)} alt={PHOTOS.opening.alt} loading="lazy" className="w-full rounded-3xl aspect-[45/32] object-cover" />
              <figcaption className="mt-2 text-sm text-gray-600">{PHOTOS.opening.alt}.</figcaption>
            </figure>
            <div className="rounded-3xl bg-ldii-mist p-8">
              <h2 className="font-display text-2xl font-semibold text-ldii-navy">Our mission</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{MISSION}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ldii-navy text-white py-20" aria-labelledby="core">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow light>Core areas</Eyebrow>
          <h2 id="core" className="mt-4 font-display text-3xl md:text-4xl font-semibold">Where we focus</h2>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_AREAS.map((c) => (
              <li key={c.title} className="flex items-center gap-4 rounded-2xl border border-white/15 p-5">
                <span className="w-12 h-12 rounded-full bg-tech-teal-500 text-ldii-navy flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true"><i className={c.icon} /></span>
                <span className="font-display text-lg font-semibold">{c.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/local-programmes" className="inline-flex items-center gap-2 bg-tech-teal-500 text-ldii-navy px-6 py-3 rounded-full font-semibold hover:bg-tech-teal-400">Local programmes <i className="ri-arrow-right-line" aria-hidden="true" /></Link>
            <Link to="/international-focus" className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-full font-semibold hover:bg-white/10">International focus <i className="ri-arrow-right-line" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28" aria-labelledby="framework">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>How we drive resilience</Eyebrow>
          <h2 id="framework" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy max-w-3xl">
            Our operational framework for community resilience and sustainable development
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {FRAMEWORK.map((f, i) => (
              <article key={f.title} className="rounded-3xl border border-gray-200 p-8">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-ldii-mist text-tech-teal-800 flex items-center justify-center text-xl" aria-hidden="true"><i className={f.icon} /></span>
                  <span className="text-sm font-semibold text-gray-500">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ldii-navy">{f.title}</h3>
                <ul className="mt-4 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3 text-gray-700 leading-relaxed">
                      <i className="ri-arrow-right-s-fill text-tech-teal-800 mt-1" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ldii-mist py-20" aria-labelledby="leadership">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-10 items-center">
          <img src={photo(PHOTOS.president.id, 700, 800)} alt={PHOTOS.president.alt} loading="lazy" className="md:col-span-4 w-full rounded-3xl aspect-[7/8] object-cover" />
          <div className="md:col-span-8">
            <Eyebrow>Leadership</Eyebrow>
            <h2 id="leadership" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy">{ORG.president}</h2>
            <p className="mt-2 text-tech-teal-800 font-semibold">Founder &amp; President</p>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
              Economist, technology transfer and international trade facilitator, member of the Toronto and Brampton Boards of Trade.
            </p>
            <Link to="/about/who-we-are/president-profile" className="mt-6 inline-flex items-center gap-2 font-semibold text-tech-teal-800 hover:text-ldii-navy">
              Read the full profile <i className="ri-arrow-right-line" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" aria-labelledby="office">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Headquarters</Eyebrow>
            <h2 id="office" className="mt-4 font-display text-3xl font-semibold text-ldii-navy">Toronto, Ontario</h2>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex gap-3"><i className="ri-map-pin-line text-tech-teal-800 mt-0.5" aria-hidden="true" /><a href={ORG.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ldii-navy">{ORG.address}</a></li>
              <li className="flex gap-3"><i className="ri-phone-line text-tech-teal-800 mt-0.5" aria-hidden="true" /><a href={ORG.phoneHref} className="hover:text-ldii-navy">{ORG.phone}</a></li>
              <li className="flex gap-3"><i className="ri-mail-line text-tech-teal-800 mt-0.5" aria-hidden="true" /><a href={`mailto:${ORG.email}`} className="hover:text-ldii-navy">{ORG.email}</a></li>
            </ul>
          </div>
          <img src={photo('WhatsApp_Image_2026-10-19_at_10.53.33_iqycrq', 900, 600)} alt="Meeting room at the LDII headquarters in Toronto" loading="lazy" className="w-full rounded-3xl aspect-[3/2] object-cover" />
        </div>
      </section>
    </>
  );
}
