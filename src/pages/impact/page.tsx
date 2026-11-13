import { ImpactHero, ImpactCta } from '../../components/feature/ImpactHero';
import TrackRecord from '../../components/feature/TrackRecord';

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ImpactHero title="Our Impact">
        Conferences, delegations and diplomatic engagements that connect Africa and Canada, documented with real photographs.
      </ImpactHero>

      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Track Record</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every engagement below took place. Follow the links to see the photos in our gallery.
            </p>
          </div>
          <TrackRecord mode="past" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Reports</h2>
          <p className="text-lg text-gray-600 mb-8">
            Annual and financial reports will be published on this page. To request a copy in the meantime, write to us.
          </p>
          <a href="/contact" className="inline-flex items-center bg-[#0A1E3D] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#13305c] transition-colors">
            Request a report <i className="ri-arrow-right-line ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </section>

      <ImpactCta />
    </div>
  );
}
