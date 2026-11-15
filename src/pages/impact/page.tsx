import { ImpactHero, ImpactCta } from '../../components/feature/ImpactHero';
import TrackRecord from '../../components/feature/TrackRecord';
import pageText from '../../content/pages/impact.json';
// Text, images and links: src/content/pages/impact.json (editable in the website editors).

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ImpactHero title={pageText.page.main.title}>{pageText.page.main.text}</ImpactHero>

      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{pageText.page.main.heading}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{pageText.page.main.text2}</p>
          </div>
          <TrackRecord mode="past" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{pageText.page.main.heading2}</h2>
          <p className="text-lg text-gray-600 mb-8">{pageText.page.main.text3}</p>
          <a href="/contact" className="inline-flex items-center bg-[#0A1E3D] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#13305c] transition-colors">{pageText.page.main.link}<i className="ri-arrow-right-line ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </section>

      <ImpactCta />
    </div>
  );
}
