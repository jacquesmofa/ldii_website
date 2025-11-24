
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FocusAreasSection from './components/FocusAreasSection';
import ImpactSection from './components/ImpactSection';
import EventsSection from './components/EventsSection';
import PartnersSection from './components/PartnersSection';
import NewsletterSection from './components/NewsletterSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <ImpactSection />
      <EventsSection />
      <PartnersSection />
      <NewsletterSection />
    </div>
  );
}
