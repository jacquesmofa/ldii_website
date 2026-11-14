import { Link } from 'react-router-dom';
import Eyebrow from '../../components/base/Eyebrow';
import { NAV } from '../../components/feature/Header';
import { galleryEvents } from '../../mocks/galleryData';

const MORE = {
  title: 'Information',
  links: [
    { name: 'Press Releases', url: '/events/press-releases' },
    { name: 'Media Inquiries', url: '/contact/media-inquiries' },
    { name: 'Frequently Asked Questions', url: '/faq' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms of Use', url: '/terms-of-service' },
    { name: 'Accessibility', url: '/accessibility' },
  ],
};

export default function SitemapPage() {
  const sections = [
    { title: 'Home', links: [{ name: 'Home', url: '/' }] },
    ...NAV.map((g) => ({
      title: g.title,
      links: g.items ? g.items.map((i) => ({ name: i.title, url: i.href })) : [{ name: g.title, url: g.href }],
    })),
    {
      title: 'Photo albums',
      links: galleryEvents.filter((e) => e.slug).map((e) => ({ name: e.shortTitle || e.title, url: `/events/gallery/${e.slug}` })),
    },
    MORE,
  ];

  return (
    <>
      <section className="bg-ldii-mist py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Site map</Eyebrow>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ldii-navy">Every page on this site</h1>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {sections.map((s) => (
            <nav key={s.title} aria-label={s.title}>
              <h2 className="font-display text-xl font-semibold text-ldii-navy border-b border-gray-200 pb-2">{s.title}</h2>
              <ul className="mt-4 space-y-2">
                {s.links.map((l) => (
                  <li key={l.url}>
                    <Link to={l.url} className="text-gray-700 hover:text-tech-teal-800 hover:underline">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>
    </>
  );
}
