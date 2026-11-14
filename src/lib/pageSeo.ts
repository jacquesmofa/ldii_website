import seo from '@/content/seo.json';

/**
 * Page titles, descriptions and share pictures come from src/content/seo.json,
 * the same file scripts/social-pages.mjs uses to write one HTML file per page.
 * Change a title there and both the browser and the share previews follow.
 */
export type SeoEntry = {
  title: string;
  description: string;
  label: string;
  image: string;
  imageAlt?: string;
};

type SeoPage = { path: string; title: string; description: string; label?: string; image?: string; imageAlt?: string; noindex?: boolean };

export const SITE_URL = seo.site.url.replace(/\/+$/, '');
export const SITE_NAME = seo.site.name;
export const SHARE_IMAGE = seo.site.image;

const humanise = (segment: string): string =>
  segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const PAGES: Record<string, SeoEntry> = Object.fromEntries(
  (seo.pages as SeoPage[]).map((p) => [
    p.path,
    {
      title: p.title,
      description: p.description,
      label: p.label || humanise(p.path.split('/').filter(Boolean).pop() || 'Home'),
      image: p.image || seo.site.image,
      imageAlt: p.imageAlt,
    },
  ]),
);

export const DEFAULT_SEO: SeoEntry = PAGES['/'];

export const getPageSeo = (pathname: string): SeoEntry => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const exact = PAGES[clean];
  if (exact) return exact;
  const segments = clean.split('/').filter(Boolean);
  const label = humanise(segments[segments.length - 1] || '');
  return { ...DEFAULT_SEO, title: `${label} | LDII`, label };
};

/** Routes whose final segment is a dynamic slug, e.g. /events/gallery/my-event. */
const DYNAMIC_ROUTE_PATTERNS: RegExp[] = [/^\/events\/gallery\/[^/]+$/];

/** True when the path is a real page; anything else is marked noindex. */
export const isKnownPath = (pathname: string): boolean => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (PAGES[clean]) return true;
  return DYNAMIC_ROUTE_PATTERNS.some((pattern) => pattern.test(clean));
};

export type Crumb = { name: string; url: string };

export const buildBreadcrumbs = (pathname: string): Crumb[] => {
  const segments = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ name: 'Home', url: `${SITE_URL}/` }];
  segments.forEach((_, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    crumbs.push({ name: PAGES[path]?.label || humanise(segments[index]), url: `${SITE_URL}${path}` });
  });
  return crumbs;
};
