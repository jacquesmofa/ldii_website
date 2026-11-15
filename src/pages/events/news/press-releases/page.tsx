import copy from '../../../../content/pages/press-releases.json';
// Text, images and links: src/content/pages/press-releases.json (editable in the website editors).
export default function PressReleasesPage() {
  // Real releases only (13 Nov 2026). Invented releases (trees, UNDP partnership, women's
  // entrepreneurs), quotes from a non-existent executive director and unconfirmed figures were removed.
  const pressReleases = copy.pressReleases;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_auto,w_1920,h_800,q_auto,f_auto/WhatsApp_Image_2026-10-19_at_18.38.57_6_y08aaz.jpg)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{copy.heroSection.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">{copy.heroSection.text}</p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.pressReleasesSection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.pressReleasesSection.text}</p>
          </div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center flex-wrap gap-3 mb-4">
                  <span className="bg-[#3CCB7F] text-[#0A1E3D] px-3 py-1 rounded-full text-sm font-semibold">
                    {release.type}
                  </span>
                  <span className="text-gray-500">{release.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{release.title}</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{release.summary}</p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                    {release.content}
                  </pre>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{copy.pressReleasesSection.label}{release.contact}</span>
                  <a href="/events/gallery/2nd-international-post-covid-conference-brampton-2025" className="inline-flex items-center gap-1 font-semibold text-tech-teal-800 hover:text-ldii-navy whitespace-nowrap">{copy.pressReleasesSection.link}<i className="ri-arrow-right-line" aria-hidden="true" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{copy.mediaContact.heading}</h2>
          <p className="text-xl text-gray-600 mb-8">{copy.mediaContact.text}</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{copy.mediaContact.subheading}</h3>
                <a href={copy.mediaContact.emailLink} className="text-gray-600 hover:text-gray-800 cursor-pointer block break-all">{copy.mediaContact.link}</a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{copy.mediaContact.subheading2}</h3>
                <a href={copy.mediaContact.phoneLink} className="text-gray-600 hover:text-gray-800 cursor-pointer">{copy.mediaContact.link2}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{copy.ctaSection.heading}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{copy.ctaSection.text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#media"
              className="bg-[#3CCB7F] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2EB06C] transition-colors cursor-pointer whitespace-nowrap"
            >{copy.ctaSection.link}</a>
            <a
              href="/events/news"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >{copy.ctaSection.link2}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
