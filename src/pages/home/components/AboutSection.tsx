
export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Who We Are
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Livelihood Development International Initiatives (LDII) is a Canadian-registered non-profit organization committed to creating a brighter, more stable future through social cohesion, equitable development, and community empowerment.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 10 years of experience in grassroots and high-level international action, we operate with a global mindset, maintaining offices across Africa and North America.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-corporate-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-corporate-blue-600 mb-2">10+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-corporate-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-corporate-blue-600 mb-2">5</div>
                <div className="text-gray-700">Global Offices</div>
              </div>
            </div>
            
            <a
              href="/about"
              className="bg-tech-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-tech-teal-600 transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Learn More About Us
            </a>
          </div>
          
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20diverse%20international%20team%20working%20together%20in%20modern%20office%20environment%2C%20global%20cooperation%20and%20leadership%20development%2C%20multicultural%20collaboration%2C%20African%20and%20Canadian%20professionals%2C%20inspiring%20teamwork%2C%20high-quality%20corporate%20photography&width=600&height=500&seq=about-team&orientation=landscape"
              alt="LDII Team"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-corporate-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Global Impact</div>
              <div className="text-tech-teal-200">Building Resilience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
