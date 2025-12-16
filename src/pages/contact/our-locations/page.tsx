export default function OurLocationsPage() {
  const offices = [
    {
      name: 'Toronto Office (Headquarters)',
      address: '3701 Chesswood Drive, Unit 315',
      city: 'Toronto, Ontario M3J 2P6',
      country: 'Canada',
      phone: '+1 (416) 660-4233',
      email: 'info@ldiinitiatives.org',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.4!2d-79.4782!3d43.7532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzExLjUiTiA3OcKwMjgnNDEuNSJX!5e0!3m2!1sen!2sca!4v1234567890',
      image: 'https://readdy.ai/api/search-image?query=modern%20professional%20office%20building%20in%20Toronto%20downtown%20area%2C%20glass%20facade%2C%20contemporary%20architecture%2C%20Canadian%20business%20district&width=800&height=600&seq=toronto-office&orientation=landscape',
      description: 'Our Toronto headquarters serves as the central hub for our Canadian operations and international coordination. The office houses our executive team, program management, research, and communications departments.'
    },
    {
      name: 'Brampton Office',
      address: '101 West Dr C',
      city: 'Brampton, ON L6T 2J6',
      country: 'Canada',
      phone: '+1 (905) 123-4567',
      email: 'info@ldiinitiatives.org',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM EST',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5!2d-79.7234!3d43.6845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQxJzA0LjIiTiA3OcKwNDMnMjQuMiJX!5e0!3m2!1sen!2sca!4v1234567891',
      image: 'https://readdy.ai/api/search-image?query=professional%20office%20building%20in%20Brampton%20Ontario%2C%20modern%20business%20center%2C%20welcoming%20entrance%2C%20suburban%20commercial%20area&width=800&height=600&seq=brampton-office&orientation=landscape',
      description: 'Our Brampton office focuses on local community programs including youth empowerment, newcomer services, and business networking. This location serves as a vital connection point for our Ontario-based initiatives.'
    },
    {
      name: 'Nairobi Office',
      address: 'Westlands Business District',
      city: 'Nairobi',
      country: 'Kenya',
      phone: '+254 20 123-4567',
      email: 'info@ldiinitiatives.org',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM EAT',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.8!3d-1.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMTIuMCJTIDM2wrA0OCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1234567892',
      image: 'https://readdy.ai/api/search-image?query=modern%20office%20building%20in%20Nairobi%20Kenya%20Westlands%20business%20district%2C%20contemporary%20African%20architecture%2C%20professional%20business%20center%2C%20urban%20skyline&width=800&height=600&seq=nairobi-office&orientation=landscape',
      description: 'Our Nairobi office coordinates programs across East Africa, focusing on climate resilience, sustainable agriculture, and health systems strengthening. This strategic location enables us to serve communities throughout the region with culturally relevant solutions.'
    },
    {
      name: 'Kampala Office',
      address: 'Nakasero Business District',
      city: 'Kampala',
      country: 'Uganda',
      phone: '+256 41 123-4567',
      email: 'info@ldiinitiatives.org',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM EAT',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7!2d32.58!3d0.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTknMTIuMCJOIDMywrAzNCc0OC4wIkU!5e0!3m2!1sen!2sug!4v1234567893',
      image: 'https://readdy.ai/api/search-image?query=professional%20office%20building%20in%20Kampala%20Uganda%2C%20modern%20business%20center%2C%20East%20African%20commercial%20district%2C%20contemporary%20architecture&width=800&height=600&seq=kampala-office&orientation=landscape',
      description: 'Our Kampala office supports community development initiatives across Uganda, with emphasis on youth empowerment, food security, and digital inclusion. We work closely with local partners to create sustainable impact in rural and urban communities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1E3D] to-[#0A1E3D] text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            With offices across Canada and Africa, we're positioned to serve communities globally
          </p>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Global Offices</h2>
          
          <div className="space-y-12">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <img
                      src={office.image}
                      alt={office.name}
                      className="w-full h-full object-cover object-top min-h-[400px]"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{office.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{office.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="bg-[#0A1E3D] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                          <i className="ri-map-pin-line text-3xl text-[#00D9FF]"></i>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{office.address}</div>
                          <div className="text-gray-600">{office.city}</div>
                          <div className="text-gray-600">{office.country}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3"></i>
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-[#00D9FF] transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3"></i>
                        <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-[#00D9FF] transition-colors">
                          {office.email}
                        </a>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="ri-time-line w-6 h-6 flex items-center justify-center text-[#00D9FF] mr-3 mt-1"></i>
                        <div className="text-gray-700">{office.hours}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
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
                        Contact This Office
                      </a>
                    </div>
                  </div>
                </div>

                {/* Embedded Map */}
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
            ))}
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
                Beyond our main offices, we work with local partners and field teams in over 50 countries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#00D9FF] mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#00D9FF] mb-2">4</div>
                <div className="text-gray-600">Global Offices</div>
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

      {/* Visit Us CTA */}
      <section className="py-16 bg-[#0A1E3D] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Visit</h2>
          <p className="text-xl text-gray-300 mb-8">
            We welcome visitors to our offices. Please contact us in advance to schedule an appointment.
          </p>
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
