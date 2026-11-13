import { ImpactHero, ImpactCta } from '../../../components/feature/ImpactHero';
import TrackRecord from '../../../components/feature/TrackRecord';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ImpactHero
        title="Achievements"
        photo="https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_1920,h_800,q_auto,f_auto/WhatsApp_Image_2026-05-25_at_3.59.39_PM_k4yy3g.jpg"
      >
        From our first international conference in Toronto to delegations in Greater Sudbury.
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
