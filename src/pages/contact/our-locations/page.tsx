export default function OurLocationsPage() {
  const offices = [
    {
      name: 'Toronto Office (Headquarters)',
      address: '3701 Chesswood Drive, Unit 315',
      city: 'Toronto, Ontario M3J 2P6',
      country: 'Canada',
      phone: '+1 (416) 555-0123',
      email: 'toronto@ldiinitiatives.org',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM EST',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.4!2d-79.4782!3d43.7532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzExLjUiTiA3OcKwMjgnNDEuNSJX!5e0!3m2!1sen!2sca!4v1234567890',
      image: 'https://readdy.ai/api/search-image?query=modern%20professional%20office%20building%20in%20Toronto%20downtown%20area%2C%20glass%20facade%2C%20contemporary%20architecture%2C%20Canadian%20business%20district&width=800&height=600&seq=toronto-office&orientation=landscape',
      description: 'Our Toronto headquarters serves as the central hub for our Canadian operations and international coordination. The office houses our executive team, program management, research, and communications departments.'
    },
    {
      name: 'Brampton Office',
      address: '101 West Dr C',
      city: 'Brampton, ON L6T 2J6',
      country: 'Canada',
      phone: '+1 (905) 555-0456',
      email: 'brampton@ldiinitiatives.org',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM EST',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5!2d-79.7234!3d43.6845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQxJzA0LjIiTiA3OcKwNDMnMjQuMiJX!5e0!3m2!1sen!2sca!4v1234567891',
      image: 'https://readdy.ai/api/search-image?query=professional%20office%20building%20in%20Brampton%20Ontario%2C%20modern%20business%20center%2C%20welcoming%20entrance%2C%20suburban%20commercial%20area&width=800&height=600&seq=brampton-office&orientation=landscape',
      description: 'Our Brampton office focuses on local community programs including youth empowerment, newcomer services, and business networking. This location serves as a vital connection point for our Ontario-based initiatives.'
    }
  ];

  const regionalOffices = [
    {
      region: 'Africa Regional Office',
      location: 'Nairobi, Kenya',
      description: 'Coordinating programs across East, West, and Southern Africa',
      image: 'https://readdy.ai/api/search-image?query=modern%20office%20building%20in%20Nairobi%20Kenya%2C%20African%20business%20district%2C%20contemporary%20architecture%2C%20vibrant%20city%20atmosphere&width=600&height=400&seq=nairobi-office&orientation=landscape'
    },
    {
      region: 'Asia-Pacific Regional Office',
      location: 'Bangkok, Thailand',
      description: 'Managing initiatives throughout Southeast Asia and the Pacific',
      image: 'https://readdy.ai/api/search-image?query=professional%20office%20building%20in%20Bangkok%20Thailand%2C%20modern%20Asian%20business%20center%2C%20urban%20skyline%2C%20tropical%20setting&width=600&height=400&seq=bangkok-office&orientation=landscape'
    },
    {
      region: 'Latin America Regional Office',
      location: 'São Paulo, Brazil',
      description: 'Overseeing programs across Central and South America',
      image: 'https://readdy.ai/api/search-image?query=contemporary%20office%20building%20in%20Sao%20Paulo%20Brazil%2C%20Latin%20American%20business%20district%2C%20modern%20architecture%2C%20urban%20landscape&width=600&height=400&seq=saopaulo-office&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            With offices across Canada and regional hubs worldwide, we're positioned to serve communities globally
          </p>
        </div>
      </section>

      {/* Canadian Offices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Canadian Offices</h2>
          
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
                        <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-900">{office.address}</div>
                          <div className="text-gray-600">{office.city}</div>
                          <div className="text-gray-600">{office.country}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-green-600 mr-3"></i>
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-green-600 transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-green-600 mr-3"></i>
                        <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-green-600 transition-colors">
                          {office.email}
                        </a>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="ri-time-line w-6 h-6 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                        <div className="text-gray-700">{office.hours}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-map-line w-5 h-5 flex items-center justify-center mr-2"></i>
                        View on Map
                      </a>
                      <a
                        href="/contact#get-in-touch"
                        className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
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

      {/* Regional Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Regional Offices</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Our regional offices coordinate programs and partnerships across multiple countries, ensuring local relevance and cultural sensitivity
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regionalOffices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={office.image}
                  alt={office.region}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.region}</h3>
                  <div className="flex items-center text-green-600 mb-3">
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    <span className="font-semibold">{office.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{office.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beyond our main offices, we work with local partners and field teams in over 50 countries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">5</div>
                <div className="text-gray-600">Regional Offices</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-600">Field Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Local Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Visit</h2>
          <p className="text-xl text-green-100 mb-8">
            We welcome visitors to our offices. Please contact us in advance to schedule an appointment.
          </p>
          <a
            href="/contact#get-in-touch"
            className="inline-block bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}
