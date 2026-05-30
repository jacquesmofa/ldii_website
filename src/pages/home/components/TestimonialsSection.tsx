import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Amina Hassan',
      role: 'Health Minister, Kenya',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20woman%20leader%2C%20confident%20business%20executive%2C%20international%20development%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20leadership%20portrait%20with%20warm%20lighting%20and%20neutral%20background&width=80&height=80&seq=testimonial-amina&orientation=squarish',
      quote: 'LDII\'s health systems strengthening program has been instrumental in improving our pandemic preparedness. Their research-driven approach has helped us build more resilient healthcare infrastructure.'
    },
    {
      name: 'James Mitchell',
      role: 'Policy Advisor, Canada',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Canadian%20government%20official%2C%20senior%20policy%20advisor%2C%20international%20cooperation%20expert%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20government%20leadership%20portrait%20with%20clean%20background&width=80&height=80&seq=testimonial-james&orientation=squarish',
      quote: 'The collaborative approach LDII brings to global challenges is remarkable. Their ability to bridge research and practical implementation has made them an invaluable partner in our climate initiatives.'
    },
    {
      name: 'Maria Santos',
      role: 'Community Leader, Brazil',
      image: 'https://readdy.ai/api/search-image?query=Community%20leader%20from%20developing%20country%2C%20local%20development%20coordinator%2C%20grassroots%20organizer%2C%20professional%20portrait%2C%20community%20development%20professional%2C%20warm%20lighting%20and%20natural%20background&width=80&height=80&seq=testimonial-maria&orientation=squarish',
      quote: 'Through LDII\'s food security program, our community has learned sustainable farming techniques that have increased our crop yields by 40%. This has transformed our local economy.'
    },
    {
      name: 'Dr. Chen Wei',
      role: 'Research Director, Singapore',
      image: 'https://readdy.ai/api/search-image?query=Asian%20male%20research%20director%2C%20senior%20scientist%2C%20academic%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20research%20leadership%20portrait%20with%20clean%20background&width=80&height=80&seq=testimonial-chen&orientation=squarish',
      quote: 'LDII\'s data-driven approach to sustainable development has set new standards in our region. Their research publications have become essential reading for policymakers across Asia-Pacific.'
    },
    {
      name: 'Sarah Johnson',
      role: 'NGO Director, Toronto',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Canadian%20woman%20NGO%20director%2C%20nonprofit%20leader%2C%20social%20impact%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20leadership%20portrait%20with%20warm%20lighting&width=80&height=80&seq=testimonial-sarah&orientation=squarish',
      quote: 'Working with LDII on our youth empowerment programs has been transformative. Their expertise in community engagement and their commitment to measurable outcomes make them an exceptional partner.'
    },
    {
      name: 'Ambassador David Okonkwo',
      role: 'UN Representative, Nigeria',
      image: 'https://readdy.ai/api/search-image?query=African%20male%20diplomat%2C%20UN%20ambassador%2C%20international%20relations%20professional%2C%20formal%20diplomatic%20attire%2C%20professional%20headshot%20photography%2C%20diplomatic%20leadership%20portrait%20with%20clean%20background&width=80&height=80&seq=testimonial-david&orientation=squarish',
      quote: 'LDII\'s work in climate resilience has been crucial for vulnerable communities across Africa. Their holistic approach addresses both immediate needs and long-term sustainability.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voices from Our Community
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from leaders, partners, and community members about the impact of our work.
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00D9FF]/30 transition-colors">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                  loading="lazy"
                  decoding="async"
                  width="80"
                  height="80"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
          {testimonials.slice(3, 6).map((testimonial, index) => (
            <div key={index + 3} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00D9FF]/30 transition-colors">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                  loading="lazy"
                  decoding="async"
                  width="80"
                  height="80"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover mr-4"
                loading="lazy"
                decoding="async"
                width="80"
                height="80"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-500 text-xs">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
              "{testimonials[activeIndex].quote}"
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                  index === activeIndex ? 'bg-[#00D9FF]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}