import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load components
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const WhoWeArePage = lazy(() => import('../pages/about/who-we-are/page'));
const OurWorkPage = lazy(() => import('../pages/about/our-work/page'));
const PastProjectsPage = lazy(() => import('../pages/about/past-projects/page'));
const UpcomingProjectsPage = lazy(() => import('../pages/about/upcoming-projects/page'));
const WhatWeDoPage = lazy(() => import('../pages/what-we-do/page'));
const ClimateActionPage = lazy(() => import('../pages/what-we-do/climate-action/page'));
const PovertyEradicationPage = lazy(() => import('../pages/what-we-do/poverty-eradication/page'));
const SustainableFoodPage = lazy(() => import('../pages/what-we-do/sustainable-food/page'));
const GlobalHealthPage = lazy(() => import('../pages/what-we-do/global-health/page'));
const DigitalInclusionPage = lazy(() => import('../pages/what-we-do/digital-inclusion/page'));
const LocalProgramsPage = lazy(() => import('../pages/local-programs/page'));
const ImpactPage = lazy(() => import('../pages/impact/page'));
const AchievementsPage = lazy(() => import('../pages/impact/achievements/page'));
const SuccessStoriesPage = lazy(() => import('../pages/impact/success-stories/page'));
const AnnualReportsPage = lazy(() => import('../pages/impact/annual-reports/page'));
const MetricsPage = lazy(() => import('../pages/impact/metrics/page'));
const EventsPage = lazy(() => import('../pages/events/page'));
const UpcomingEventsPage = lazy(() => import('../pages/events/upcoming/page'));
const PastEventsPage = lazy(() => import('../pages/events/past/page'));
const NewsPage = lazy(() => import('../pages/events/news/page'));
const PressReleasesPage = lazy(() => import('../pages/events/news/press-releases/page'));
const GalleryPage = lazy(() => import('../pages/events/gallery/page'));
const ResearchPage = lazy(() => import('../pages/research/page'));
const PolicyBriefsPage = lazy(() => import('../pages/research/policy-briefs/page'));
const PublicationsPage = lazy(() => import('../pages/research/publications/page'));
const DataStatisticsPage = lazy(() => import('../pages/research/data-statistics/page'));
const WhitePapersPage = lazy(() => import('../pages/research/white-papers/page'));
const PartnersPage = lazy(() => import('../pages/partners/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const GetInTouchPage = lazy(() => import('../pages/contact/get-in-touch/page'));
const OurLocationsPage = lazy(() => import('../pages/contact/our-locations/page'));
const MediaInquiriesPage = lazy(() => import('../pages/contact/media-inquiries/page'));
const DonatePage = lazy(() => import('../pages/donate/page'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy-policy/page'));
const TermsOfServicePage = lazy(() => import('../pages/terms-of-service/page'));
const AccessibilityPage = lazy(() => import('../pages/accessibility/page'));
const FocusAreasPage = lazy(() => import('../pages/focus-areas/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const FAQPage = lazy(() => import('../pages/faq/page'));
const SitemapPage = lazy(() => import('../pages/sitemap/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/about/who-we-are',
    element: <WhoWeArePage />
  },
  {
    path: '/about/our-work',
    element: <OurWorkPage />
  },
  {
    path: '/about/past-projects',
    element: <PastProjectsPage />
  },
  {
    path: '/about/upcoming-projects',
    element: <UpcomingProjectsPage />
  },
  {
    path: '/what-we-do',
    element: <WhatWeDoPage />
  },
  {
    path: '/what-we-do/climate-action',
    element: <ClimateActionPage />
  },
  {
    path: '/what-we-do/poverty-eradication',
    element: <PovertyEradicationPage />
  },
  {
    path: '/what-we-do/sustainable-food',
    element: <SustainableFoodPage />
  },
  {
    path: '/what-we-do/global-health',
    element: <GlobalHealthPage />
  },
  {
    path: '/what-we-do/digital-inclusion',
    element: <DigitalInclusionPage />
  },
  {
    path: '/local-programs',
    element: <LocalProgramsPage />
  },
  {
    path: '/impact',
    element: <ImpactPage />
  },
  {
    path: '/impact/achievements',
    element: <AchievementsPage />
  },
  {
    path: '/impact/success-stories',
    element: <SuccessStoriesPage />
  },
  {
    path: '/impact/annual-reports',
    element: <AnnualReportsPage />
  },
  {
    path: '/impact/metrics',
    element: <MetricsPage />
  },
  {
    path: '/events',
    element: <EventsPage />
  },
  {
    path: '/events/upcoming',
    element: <UpcomingEventsPage />
  },
  {
    path: '/events/past',
    element: <PastEventsPage />
  },
  {
    path: '/events/news',
    element: <NewsPage />
  },
  {
    path: '/events/press-releases',
    element: <PressReleasesPage />
  },
  {
    path: '/events/gallery',
    element: <GalleryPage />
  },
  {
    path: '/research',
    element: <ResearchPage />
  },
  {
    path: '/research/policy-briefs',
    element: <PolicyBriefsPage />
  },
  {
    path: '/research/publications',
    element: <PublicationsPage />
  },
  {
    path: '/research/data-statistics',
    element: <DataStatisticsPage />
  },
  {
    path: '/research/white-papers',
    element: <WhitePapersPage />
  },
  {
    path: '/partners',
    element: <PartnersPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/contact/get-in-touch',
    element: <GetInTouchPage />
  },
  {
    path: '/contact/our-locations',
    element: <OurLocationsPage />
  },
  {
    path: '/contact/media-inquiries',
    element: <MediaInquiriesPage />
  },
  {
    path: '/donate',
    element: <DonatePage />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />
  },
  {
    path: '/terms-of-service',
    element: <TermsOfServicePage />
  },
  {
    path: '/accessibility',
    element: <AccessibilityPage />
  },
  {
    path: '/focus-areas',
    element: <FocusAreasPage />
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/sitemap',
    element: <SitemapPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
