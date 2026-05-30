import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImpactSection from './components/ImpactSection';
import FocusAreasSection from './components/FocusAreasSection';
import LatestFromLDIISection from './components/LatestFromLDIISection';
import EventsSection from './components/EventsSection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import GlobalPresenceSection from './components/GlobalPresenceSection';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <FocusAreasSection />
      <LatestFromLDIISection />
      <EventsSection />
      <PartnersSection />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <CTASection />
    </div>
  );
}