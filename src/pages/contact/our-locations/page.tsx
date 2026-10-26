const office = {
  name: 'Toronto Office (Headquarters)',
  address: '3701 Chesswood Drive, Unit 315',
  city: 'Toronto, ON M3J 2P6',
  country: 'Canada',
  phone: '+1 647 656 3026',
  phoneHref: 'tel:+16476563026',
  email: 'info@ldiinitiatives.org',
  emailAlt: 'admin@ldiinitiatives.org',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.4!2d-79.4782!3d43.7532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzExLjUiTiA3OcKwMjgnNDEuNSJX!5e0!3m2!1sen!2sca!4v1234567890',
  image:
    'https://readdy.ai/api/search-image?query=modern%20professional%20office%20building%20in%20Toronto%20downtown%20area%2C%20glass%20facade%2C%20contemporary%20architecture%2C%20Canadian%20business%20district&width=800&height=600&seq=toronto-office&orientation=landscape',
  description:
    'Our Toronto headquarters is the central hub for LDII operations, international coordination and our Ontario community programmes. The office houses our executive team, programme management, research and communications departments.'
};

export default function OurLocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#0A1E3D] text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            One Toronto office, serving communities across Ontario and working with partners around the world.
          </p>
        </div>
      </section>

      {/* Office */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Toronto Office</h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div>
                <img
                  src={office.image}
                  alt={office.name}
                  className="w-full h-full object-cover object-top min-h-[320px] lg:min-h-[400px]"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{office.name}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{office.description}</p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0A1E3D] flex items-center justify-center shrink-0">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{office.address}</div>
                      <div className="text-gray-600">
                        {office.city}, {office.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0A1E3D] flex items-center justify-center shrink-0">
                      <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <a
                      href={office.phoneHref}
                      className="text-gray-700 hover:text-[#00D9FF] transition-colors cursor-pointer"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0A1E3D] flex items-center justify-center shrink-0">
                      <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-700 hover:text-[#00D9FF] transition-colors break-all"
                      >
                        {office.email}
                      </a>
                      <a
                        href={`mailto:${office.emailAlt}`}
                        className="text-gray-700 hover:text-[#00D9FF] transition-colors break-all"
                      >
                        {office.emailAlt}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0A1E3D] flex items-center justify-center shrink-0">
                      <i className="ri-time-line w-5 h-5 flex items-center justify-center text-[#00D9FF]"></i>
                    </div>
                    <div className="text-gray-700">{office.hours}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#00D9FF] hover:bg-[#00C4E6] text-[#0A1E3D] font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-map-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    View on Map
                  </a>
                  <a
                    href="/contact#get-in-touch"
                    className="inline-flex items-center px-6 py-3 border-2 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF]/10 font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full h-96">
              <iframe
                src={office.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${office.name} location map`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beyond our Toronto office, we work through local partners and field teams across Canada and Africa.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#00D9FF] mb-2">25+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#00D9FF] mb-2">1</div>
                <div className="text-gray-600">Canadian Office</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#00D9FF] mb-2">200+</div>
                <div className="text-gray-600">Field Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#00D9FF] mb-2">1000+</div>
                <div className="text-gray-600">Local Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact band */}
      <section className="py-16 bg-[#0A1E3D] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Visit</h2>
          <p className="text-xl text-gray-300 mb-8">
            We welcome visitors to our Toronto office. Please contact us in advance to schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={office.phoneHref}
              className="inline-flex items-center gap-2 text-white hover:text-[#00D9FF] transition-colors cursor-pointer"
            >
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center"></i>
              {office.phone}
            </a>
            <a
              href={`mailto:${office.email}`}
              className="inline-flex items-center gap-2 text-white hover:text-[#00D9FF] transition-colors cursor-pointer break-all"
            >
              <i className="ri-mail-line w-5 h-5 flex items-center justify-center"></i>
              {office.email}
            </a>
          </div>
          <a
            href="/contact#get-in-touch"
            className="inline-block bg-[#00D9FF] text-[#0A1E3D] hover:bg-[#00C4E6] px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}