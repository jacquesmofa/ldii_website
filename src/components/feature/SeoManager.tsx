import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_NAME,
  SITE_URL,
  SHARE_IMAGE,
  buildBreadcrumbs,
  getPageSeo,
  isKnownPath,
} from '@/lib/pageSeo';

const setMeta = (key: string, value: string, attr: 'name' | 'property' = 'name') => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const setCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const setPageSchema = (data: unknown) => {
  const id = 'ldii-page-schema';
  document.getElementById(id)?.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

const INDEXABLE = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getPageSeo(pathname);
    const known = isKnownPath(pathname);
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    // Unknown URLs must never be indexed. Without this, Google crawls a missing
    // path, renders the 404 view and turns it into a sitelink.
    if (!known) {
      document.title = 'Page Not Found | LDII';
      setMeta('robots', 'noindex, nofollow');
      setMeta('description', 'The page you requested could not be found on the LDII website.');
      setMeta('og:title', 'Page Not Found | LDII', 'property');
      setMeta(
        'og:description',
        'The page you requested could not be found on the LDII website.',
        'property',
      );
      setMeta('og:url', url, 'property');
      setMeta('twitter:title', 'Page Not Found | LDII');
      setMeta(
        'twitter:description',
        'The page you requested could not be found on the LDII website.',
      );
      document.getElementById('ldii-page-schema')?.remove();
      return;
    }

    document.title = seo.title;
    setMeta('robots', INDEXABLE);
    setMeta('description', seo.description);
    setMeta('og:title', seo.title, 'property');
    setMeta('og:description', seo.description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', SHARE_IMAGE, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
    setMeta('twitter:image', SHARE_IMAGE);
    setCanonical(url);

    const breadcrumbs = buildBreadcrumbs(pathname);
    setPageSchema({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          name: seo.title,
          description: seo.description,
          url,
          inLanguage: 'en-CA',
          isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: `${SITE_URL}/`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        },
      ],
    });
  }, [pathname]);

  return null;
};

export default SeoManager;