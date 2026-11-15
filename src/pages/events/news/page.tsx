import { useLocation } from 'react-router-dom';
import Eyebrow from '../../../components/base/Eyebrow';
import PostCard from '../../../components/feature/PostCard';
import { POSTS, PHOTOS, photo } from '../../../content/ldii';
import { newsArticles } from '../../../mocks/newsData';
import copy from '../../../content/pages/news.json';
// Text, images and links: src/content/pages/news.json (editable in the website editors).

export default function NewsPage() {
  const { hash } = useLocation();
  const target = hash.replace('#', '');
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ldii-ink text-white">
        <img src={photo(PHOTOS.igad.id, 1920, 800)} alt="" className="absolute inset-0 -z-20 w-full h-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ldii-ink via-ldii-ink/85 to-ldii-ink/40" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-28">
          <Eyebrow light>{copy.main.text}</Eyebrow>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold">{copy.main.title}</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl">{copy.main.text2}</p>
        </div>
      </section>

      <section className="bg-ldii-sand py-20" aria-labelledby="in-the-news">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>{copy.main.text3}</Eyebrow>
          <h2 id="in-the-news" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy">{copy.main.heading}</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
            {POSTS.map((p) => (
              <PostCard key={p.slug} post={p} defaultOpen={target === p.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20" aria-labelledby="updates">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>{copy.main.text4}</Eyebrow>
          <h2 id="updates" className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ldii-navy">{copy.main.heading2}</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((a) => (
              <article key={a.title} className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
                <img src={a.image} alt="" loading="lazy" className="w-full aspect-[16/10] object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-tech-teal-800">{a.date} · {a.category}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ldii-navy leading-snug">{a.title}</h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{a.excerpt}</p>
                  <a href={a.link} className="mt-auto pt-5 inline-flex items-center gap-1 font-semibold text-tech-teal-800 hover:text-ldii-navy">
                    {a.linkLabel} <i className="ri-arrow-right-line" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
