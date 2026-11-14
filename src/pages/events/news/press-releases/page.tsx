export default function PressReleasesPage() {
  // Real releases only (13 Nov 2026). Invented releases (trees, UNDP partnership, women's
  // entrepreneurs), quotes from a non-existent executive director and unconfirmed figures were removed.
  const pressReleases = [
    {
      title: '2nd International Post-COVID-19 Conference Held in Brampton',
      date: 'September 12, 2025',
      type: 'Press Release',
      summary: 'The 2nd International Post-COVID-19 Conference was held at the Pearson Convention Centre in Brampton, Ontario, from September 8 to 10, 2025.',
      content: `FOR IMMEDIATE RELEASE

Brampton, ON – September 12, 2025 – The 2nd International Post-COVID-19 Conference, held at the Pearson Convention Centre from September 8 to 10, 2025, brought together partners, policymakers, researchers and community leaders under the theme Economic Damages from Global Shocks: Building Resilience for the Future.

Over three days, discussions focused on how pandemics, natural disasters and financial crises cut across trade, finance and industry, and on how communities, businesses and institutions can better prepare for and respond to future shocks, protecting livelihoods and strengthening partnerships across borders.

Local Impact. Global Partnerships.

Photos from the conference are available at www.ldiinitiatives.org/events/gallery.

###

Media contact:
LDII Media Relations
admin@ldiinitiatives.org
+1 647 656 3026`,
      contact: 'LDII Media Relations'
    },
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Press Releases
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Official announcements and media releases from Livelihood Development International Initiatives.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Official Releases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our official press releases and media announcements.
            </p>
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
                  <span className="text-gray-500 text-sm">Contact: {release.contact}</span>
                  <a href="/events/gallery/2nd-international-post-covid-conference-brampton-2025" className="inline-flex items-center gap-1 font-semibold text-tech-teal-800 hover:text-ldii-navy whitespace-nowrap">See the conference photos <i className="ri-arrow-right-line" aria-hidden="true" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
          <p className="text-xl text-gray-600 mb-8">
            For press inquiries, interview requests, or additional information, please contact our communications team.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:admin@ldiinitiatives.org" className="text-gray-600 hover:text-gray-800 cursor-pointer block break-all">
                  admin@ldiinitiatives.org
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line w-8 h-8 flex items-center justify-center text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+16476563026" className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  +1 647 656 3026
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1E3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Media Resources
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Need logos, photos or an interview? Ask the team and we will send what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#media"
              className="bg-[#3CCB7F] text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2EB06C] transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Media Team
            </a>
            <a
              href="/events/news"
              className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Latest News
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
