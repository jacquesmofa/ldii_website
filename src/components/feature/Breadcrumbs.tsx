import { Link, useLocation } from 'react-router-dom';
import { buildBreadcrumbs, isKnownPath, SITE_URL } from '@/lib/pageSeo';
import { REDIRECTS } from '@/router/config';

/** "Home / Our Work / International Focus" trail under the header on every inner page. */
export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/' || !isKnownPath(clean)) return null;
  const crumbs = buildBreadcrumbs(clean).map((c) => ({ name: c.name, path: c.url.replace(SITE_URL, '') || '/' }));
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200">
      <ol className="max-w-7xl mx-auto px-6 lg:px-8 h-11 flex items-center gap-2 text-[13px] text-gray-600 overflow-x-auto whitespace-nowrap [scrollbar-width:none]">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          const linkable = !last && (c.path === '/' || isKnownPath(c.path) || c.path in REDIRECTS);
          return (
            <li key={c.path} className="flex items-center gap-2">
              {i > 0 && <i className="ri-arrow-right-s-line text-gray-400" aria-hidden="true" />}
              {linkable ? (
                <Link to={c.path} className="hover:text-tech-teal-800 link-line">{c.name}</Link>
              ) : (
                <span className={last ? 'font-semibold text-ldii-navy' : ''} aria-current={last ? 'page' : undefined}>{c.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
