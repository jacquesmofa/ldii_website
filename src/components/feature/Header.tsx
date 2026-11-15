import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ORG } from '../../content/ldii';

// Logo: LDII's own file on Cloudinary. Replace with the green "LDII" wordmark once it is supplied (see PLACEHOLDERS.md).
const LOGO = 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_center,w_160,h_160,q_auto,f_auto/v1781702619/Circular_LDII_bewv0j.png';

type Item = { title: string; href: string; note?: string };
type Group = { title: string; href: string; items?: Item[] };

/** One menu, one name per thing (as recommended in the Oct 2026 site review). */
export const NAV: Group[] = [
  {
    title: 'About',
    href: '/about',
    items: [
      { title: 'About LDII', href: '/about', note: 'Who we are and how we work' },
      { title: 'Our President', href: '/about/who-we-are/president-profile', note: 'Ronald Lwabaayi' },
      { title: 'Our Impact', href: '/impact', note: 'The engagements we have delivered' },
    ],
  },
  {
    title: 'Our Work',
    href: '/international-focus',
    items: [
      { title: 'International Focus', href: '/international-focus', note: 'Six areas of Global North–South partnership' },
      { title: 'Local Programmes', href: '/local-programmes', note: 'Community development across Ontario' },
      { title: 'Newcomer Settlement', href: '/local-programmes#newcomers-programme', note: 'Supporting new beginnings' },
      { title: 'Mining & Technology Mission', href: '/programs/mining-technology-exchange', note: 'Global South–Canada, every June' },
    ],
  },
  {
    title: 'Events',
    href: '/events',
    items: [
      { title: 'Upcoming Events', href: '/events/upcoming' },
      { title: 'Past Events', href: '/events/past' },
      { title: 'News & Media', href: '/events/news' },
      { title: 'Gallery', href: '/events/gallery' },
    ],
  },
  {
    title: 'Get Involved',
    href: '/partners',
    items: [
      { title: 'Partner With Us', href: '/partners' },
      { title: 'Donate', href: '/donate' },
    ],
  },
  { title: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on page change and on Escape.
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setOpenGroup(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (g: Group) =>
    location.pathname === g.href || (g.items || []).some((i) => location.pathname === i.href.split('#')[0]);

  return (
    <>
      <div className="hidden lg:block bg-ldii-navy text-white/85 text-[13px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between gap-6">
          <p className="tracking-wide">{ORG.tagline}</p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${ORG.email}`} className="hover:text-white inline-flex items-center gap-1.5"><i className="ri-mail-line text-tech-teal-300" aria-hidden="true" />{ORG.email}</a>
            <a href={ORG.phoneHref} className="hover:text-white inline-flex items-center gap-1.5"><i className="ri-phone-line text-tech-teal-300" aria-hidden="true" />{ORG.phone}</a>
            <span className="flex items-center gap-3 pl-4 border-l border-white/20">
              {ORG.socials.map((x) => (
                <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer" aria-label={`LDII on ${x.label}`} className="hover:text-tech-teal-300"><i className={x.icon} aria-hidden="true" /></a>
              ))}
            </span>
          </div>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 bg-white/95 border-b transition-shadow ${scrolled || open ? 'shadow-sm border-gray-200' : 'border-transparent'}`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-white px-3 py-2 rounded text-ldii-navy">
          Skip to content
        </a>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <Link to="/" className="flex items-center gap-3 min-w-0" aria-label={`${ORG.short} home`}>
              <img src={LOGO} alt="" width={48} height={48} className="w-12 h-12 rounded-full flex-shrink-0" />
              <span className="min-w-0">
                <span className="block font-display text-2xl font-bold leading-none text-ldii-navy tracking-tight">
                  LDII
                </span>
                <span className="hidden sm:block text-[11px] leading-tight text-gray-600 mt-1 max-w-[230px]">{ORG.name}</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
              {NAV.map((g) =>
                g.items ? (
                  <div
                    key={g.title}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(g.title)}
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    <button
                      type="button"
                      className={`relative flex items-center gap-1 px-3 h-[72px] text-[15px] font-medium transition-colors after:absolute after:left-3 after:right-3 after:bottom-0 after:h-[3px] after:bg-tech-teal-600 after:origin-left after:transition-transform after:duration-300 ${
                        isActive(g) ? 'text-tech-teal-800 after:scale-x-100' : 'text-gray-800 hover:text-tech-teal-800 after:scale-x-0 hover:after:scale-x-100'
                      }`}
                      aria-expanded={openGroup === g.title}
                      onClick={() => setOpenGroup(openGroup === g.title ? null : g.title)}
                    >
                      {g.title}
                      <i className="ri-arrow-down-s-line" aria-hidden="true" />
                    </button>
                    <div
                      className={`absolute left-0 top-full w-80 transition ${
                        openGroup === g.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                      }`}
                    >
                      <div className="bg-white shadow-xl border border-gray-100 border-t-[3px] border-t-tech-teal-600 p-2">
                        {g.items.map((i) => (
                          <Link
                            key={i.href}
                            to={i.href}
                            className="block rounded-lg px-4 py-3 hover:bg-ldii-mist"
                          >
                            <span className="block text-[15px] font-semibold text-ldii-navy">{i.title}</span>
                            {i.note && <span className="block text-sm text-gray-600 mt-0.5">{i.note}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={g.title}
                    to={g.href}
                    className={({ isActive: a }) =>
                      `px-3 py-2 rounded-md text-[15px] font-medium transition-colors ${a ? 'text-tech-teal-800' : 'text-gray-800 hover:text-tech-teal-800'}`
                    }
                  >
                    {g.title}
                  </NavLink>
                ),
              )}
              <Link
                to="/donate"
                className="ml-3 inline-flex items-center gap-2 bg-ldii-navy text-white px-5 py-2.5 rounded-[3px] text-[15px] font-semibold hover:bg-tech-teal-800 transition-colors"
              >
                <i className="ri-heart-3-line" aria-hidden="true" /> Donate
              </Link>
            </nav>

            <button
              type="button"
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-lg text-ldii-navy hover:bg-gray-100"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
            >
              <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Phone menu: a sibling of the header (never inside it), solid background, below the bar. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-white overflow-y-auto border-t border-gray-200"
      >
        <nav className="px-4 py-4" aria-label="Main">
          {NAV.map((g) => (
            <div key={g.title} className="border-b border-gray-100 py-1">
              {g.items ? (
                <>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-3 text-lg font-semibold text-ldii-navy"
                    aria-expanded={openGroup === g.title}
                    onClick={() => setOpenGroup(openGroup === g.title ? null : g.title)}
                  >
                    {g.title}
                    <i className={`ri-arrow-down-s-line text-xl transition-transform ${openGroup === g.title ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {openGroup === g.title && (
                    <div className="pb-2">
                      {g.items.map((i) => (
                        <Link key={i.href} to={i.href} className="block py-3 pl-4 text-base text-gray-700 rounded-lg hover:bg-ldii-mist">
                          {i.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={g.href} className="block py-3 text-lg font-semibold text-ldii-navy">
                  {g.title}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/donate"
            className="mt-6 flex items-center justify-center gap-2 bg-ldii-navy text-white px-5 py-4 rounded-[3px] text-lg font-semibold"
          >
            <i className="ri-heart-3-line" aria-hidden="true" /> Donate
          </Link>
          <div className="mt-6 text-sm text-gray-600 space-y-2">
            <a href={`mailto:${ORG.email}`} className="block">{ORG.email}</a>
            <a href={ORG.phoneHref} className="block">{ORG.phone}</a>
          </div>
        </nav>
      </div>
    </>
  );
}
