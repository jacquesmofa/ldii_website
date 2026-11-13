import { ImpactHero, ImpactCta } from '../../../components/feature/ImpactHero';
import TrackRecord from '../../../components/feature/TrackRecord';

export default function PastProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ImpactHero title="Past Projects">
        The conferences, delegations and engagements LDII has delivered.
      </ImpactHero>
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <TrackRecord mode="past" />
        </div>
      </section>
      <ImpactCta />
    </div>
  );
}
