import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import AboutPage from '../pages/about/page';

const HomePage = lazy(() => import('../pages/home/page'));
const PresidentProfilePage = lazy(() => import('../pages/about/who-we-are/president-profile/page'));
const InternationalFocusPage = lazy(() => import('../pages/international-focus/page'));
const LocalProgrammesPage = lazy(() => import('../pages/local-programmes/page'));
const MiningTechnologyExchangePage = lazy(() => import('../pages/programs/mining-technology-exchange/page'));
const ImpactPage = lazy(() => import('../pages/impact/page'));
const EventsPage = lazy(() => import('../pages/events/page'));
const UpcomingEventsPage = lazy(() => import('../pages/events/upcoming/page'));
const PastEventsPage = lazy(() => import('../pages/events/past/page'));
const NewsPage = lazy(() => import('../pages/events/news/page'));
const PressReleasesPage = lazy(() => import('../pages/events/news/press-releases/page'));
const GalleryPage = lazy(() => import('../pages/events/gallery/page'));
const GalleryEventPage = lazy(() => import('../pages/events/gallery/event/page'));
const PartnersPage = lazy(() => import('../pages/partners/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const MediaInquiriesPage = lazy(() => import('../pages/contact/media-inquiries/page'));
const DonatePage = lazy(() => import('../pages/donate/page'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy-policy/page'));
const TermsOfServicePage = lazy(() => import('../pages/terms-of-service/page'));
const AccessibilityPage = lazy(() => import('../pages/accessibility/page'));
const FAQPage = lazy(() => import('../pages/faq/page'));
const SitemapPage = lazy(() => import('../pages/sitemap/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

/** Pages that exist. Keep this list and public/sitemap.xml in step. */
const pages: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/about/who-we-are/president-profile', element: <PresidentProfilePage /> },
  { path: '/international-focus', element: <InternationalFocusPage /> },
  { path: '/local-programmes', element: <LocalProgrammesPage /> },
  { path: '/programs/mining-technology-exchange', element: <MiningTechnologyExchangePage /> },
  { path: '/impact', element: <ImpactPage /> },
  { path: '/events', element: <EventsPage /> },
  { path: '/events/upcoming', element: <UpcomingEventsPage /> },
  { path: '/events/past', element: <PastEventsPage /> },
  { path: '/events/news', element: <NewsPage /> },
  { path: '/events/press-releases', element: <PressReleasesPage /> },
  { path: '/events/gallery', element: <GalleryPage /> },
  { path: '/events/gallery/:slug', element: <GalleryEventPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/donate', element: <DonatePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/contact/media-inquiries', element: <MediaInquiriesPage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/terms-of-service', element: <TermsOfServicePage /> },
  { path: '/accessibility', element: <AccessibilityPage /> },
  { path: '/faq', element: <FAQPage /> },
  { path: '/sitemap', element: <SitemapPage /> },
];

/** Old addresses (Nov 2026 restructure) and where they now live. public/.htaccess sends the same 301s. */
export const REDIRECTS: Record<string, string> = {
  '/about/who-we-are': '/about',
  '/about/our-work': '/international-focus',
  '/about/past-projects': '/impact',
  '/about/upcoming-projects': '/events/upcoming',
  '/what-we-do': '/international-focus',
  '/what-we-do/technology-ai-research': '/international-focus#mining',
  '/what-we-do/climate-action': '/international-focus#climate',
  '/what-we-do/poverty-eradication': '/international-focus#investment',
  '/what-we-do/sustainable-food': '/international-focus#food',
  '/what-we-do/global-health': '/international-focus#health',
  '/what-we-do/digital-inclusion': '/local-programmes#youth-employment',
  '/focus-areas': '/international-focus',
  '/programs': '/local-programmes',
  '/local-programs': '/local-programmes',
  '/programs/youth-programs-ontario': '/local-programmes#youth-employment',
  '/programs/local-capacity-training': '/local-programmes#partnerships',
  '/social-enterprise/consulting': '/international-focus#investment',
  '/impact/achievements': '/impact',
  '/impact/success-stories': '/impact',
  '/impact/annual-reports': '/impact',
  '/impact/metrics': '/impact',
  '/contact/get-in-touch': '/contact',
  '/contact/our-locations': '/contact',
  '/events/news/press-releases': '/events/press-releases',
};

const routes: RouteObject[] = [
  ...pages,
  ...Object.entries(REDIRECTS).map(([path, to]) => ({ path, element: <Navigate to={to} replace /> })),
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
