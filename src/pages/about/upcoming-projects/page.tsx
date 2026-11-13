import { ImpactHero, ImpactCta } from '../../../components/feature/ImpactHero';
import TrackRecord from '../../../components/feature/TrackRecord';

export default function UpcomingProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ImpactHero title="Upcoming Projects">
        What LDII is preparing next. Dates are confirmed here as soon as they are set.
      </ImpactHero>
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <TrackRecord mode="upcoming" />
        </div>
      </section>
      <ImpactCta />
    </div>
  );
}
