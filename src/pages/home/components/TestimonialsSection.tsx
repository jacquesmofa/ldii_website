import { useState, useEffect } from 'react';

// ============================================================
// DUAL-BOX TESTIMONIAL PRESENTATION
// Left and right boxes rotate independently with 5-second offset
// Each box shows a testimonial for 10 seconds, then fades to next
// 
// To add more testimonials:
// 1. Add a new object to the `testimonials` array below
// 2. Template:
//    {
//      name: 'Full Name',
//      role: 'Title, Organization',
//      // IMAGE: Replace with Cloudinary link
//      image: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/PHOTO_ID',
//      quote: 'Testimonial text...'
//    }
// ============================================================

export default function TestimonialsSection() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(5);
  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(true);

  const testimonials = [
    {
      name: 'Dr. Amina Hassan',
      role: 'Health Minister, Kenya',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20woman%20leader%2C%20confident%20business%20executive%2C%20international%20development%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20leadership%20portrait%20with%20warm%20lighting%20and%20neutral%20background&width=80&height=80&seq=testimonial-amina&orientation=squarish',
      quote: 'LDII\'s health systems strengthening program has been instrumental in improving our pandemic preparedness. Their research-driven approach has helped us build more resilient healthcare infrastructure.'
    },
    {
      name: 'James Mitchell',
      role: 'Policy Advisor, Canada',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=Professional%20Canadian%20government%20official%2C%20senior%20policy%20advisor%2C%20international%20cooperation%20expert%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20government%20leadership%20portrait%20with%20clean%20background&width=80&height=80&seq=testimonial-james&orientation=squarish',
      quote: 'The collaborative approach LDII brings to global challenges is remarkable. Their ability to bridge research and practical implementation has made them an invaluable partner in our climate initiatives.'
    },
    {
      name: 'Maria Santos',
      role: 'Community Leader, Brazil',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=Community%20leader%20from%20developing%20country%2C%20local%20development%20coordinator%2C%20grassroots%20organizer%2C%20professional%20portrait%2C%20community%20development%20professional%2C%20warm%20lighting%20and%20natural%20background&width=80&height=80&seq=testimonial-maria&orientation=squarish',
      quote: 'Through LDII\'s food security program, our community has learned sustainable farming techniques that have increased our crop yields by 40%. This has transformed our local economy.'
    },
    {
      name: 'Dr. Chen Wei',
      role: 'Research Director, Singapore',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=Asian%20male%20research%20director%2C%20senior%20scientist%2C%20academic%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20research%20leadership%20portrait%20with%20clean%20background&width=80&height=80&seq=testimonial-chen&orientation=squarish',
      quote: 'LDII\'s data-driven approach to sustainable development has set new standards in our region. Their research publications have become essential reading for policymakers across Asia-Pacific.'
    },
    {
      name: 'Sarah Johnson',
      role: 'NGO Director, Toronto',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=Professional%20Canadian%20woman%20NGO%20director%2C%20nonprofit%20leader%2C%20social%20impact%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20leadership%20portrait%20with%20warm%20lighting&width=80&height=80&seq=testimonial-sarah&orientation=squarish',
      quote: 'Working with LDII on our youth empowerment programs has been transformative. Their expertise in community engagement and their commitment to measurable outcomes make them an exceptional partner.'
    },
    {
      name: 'Ambassador David Okonkwo',
      role: 'UN Representative, Nigeria',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=African%20male%20diplomat%2C%20UN%20ambassador%2C%20international%20relations%20professional%2C%20formal%20diplomatic%20attire%2C%20professional%20headshot%20photography%2C%20diplomatic%20leadership%20portrait%20with%20clean%20background&width=80&height=80&seq=testimonial-david&orientation=squarish',
      quote: 'LDII\'s work in climate resilience has been crucial for vulnerable communities across Africa. Their holistic approach addresses both immediate needs and long-term sustainability.'
    },
    {
      name: 'Prof. Isabelle Dubois',
      role: 'Climate Scientist, France',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=Professional%20French%20woman%20climate%20scientist%2C%20academic%20researcher%2C%20European%20environmental%20expert%2C%20formal%20professional%20attire%2C%20professional%20headshot%20photography%20with%20clean%20background%2C%20confident%20intellectual%20portrait&width=80&height=80&seq=testimonial-isabelle&orientation=squarish',
      quote: 'LDII\'s climate resilience frameworks have become a reference point for our research consortium. Their commitment to science-based policy recommendations is unmatched in the international development sector.'
    },
    {
      name: 'Rafael Mendez',
      role: 'Social Entrepreneur, Colombia',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=Professional%20Latin%20American%20male%20social%20entrepreneur%2C%20Colombian%20business%20leader%2C%20community%20development%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%20with%20warm%20lighting%20and%20neutral%20background%2C%20confident%20portrait&width=80&height=80&seq=testimonial-rafael&orientation=squarish',
      quote: 'The partnership with LDII opened doors we never thought possible. Their investment readiness program helped us scale our social enterprise from 5 communities to 50 across Latin America in just two years.'
    },
    {
      name: 'Dr. Fatima Al-Rashid',
      role: 'Public Health Director, UAE',
      // IMAGE: Replace with Cloudinary link
      image: 'https://readdy.ai/api/search-image?query=Professional%20Middle%20Eastern%20woman%20public%20health%20director%2C%20UAE%20government%20official%2C%20healthcare%20leader%20in%20hijab%2C%20formal%20professional%20attire%2C%20professional%20headshot%20photography%20with%20clean%20background%2C%20dignified%20leadership%20portrait&width=80&height=80&seq=testimonial-fatima&orientation=squarish',
      quote: 'LDII\'s pandemic preparedness training transformed our national health response capabilities. Their methodology is now integrated into our standard emergency protocols and shared across Gulf nations.'
    }
  ];

  // Left box: rotates every 10 seconds, starts immediately
  useEffect(() => {
    const timer = setInterval(() => {
      setLeftVisible(false);
      setTimeout(() => {
        setLeftIndex(prev => (prev + 1) % testimonials.length);
        setLeftVisible(true);
      }, 700);
    }, 10000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Right box: rotates every 10 seconds, starts after 5-second delay
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setRightVisible(false);
        setTimeout(() => {
          setRightIndex(prev => (prev + 1) % testimonials.length);
          setRightVisible(true);
        }, 700);
      }, 10000);
      return () => clearInterval(timer);
    }, 5000);
    return () => clearTimeout(delayTimer);
  }, [testimonials.length]);

  const leftTestimonial = testimonials[leftIndex];
  const rightTestimonial = testimonials[rightIndex];

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

        {/* Dual Box Presentation — Desktop: side by side, Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Box */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 overflow-hidden">
            <div className={`transition-opacity duration-700 ease-in-out ${leftVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-5">
                <img
                  src={leftTestimonial.image}
                  alt={leftTestimonial.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mr-5 flex-shrink-0"
                  loading="eager"
                  decoding="async"
                  width="80"
                  height="80"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg">{leftTestimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{leftTestimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <i className="ri-double-quotes-l text-[#00D9FF]/20 text-4xl absolute -top-2 -left-1" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic pl-6">
                  {leftTestimonial.quote}
                </p>
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 overflow-hidden">
            <div className={`transition-opacity duration-700 ease-in-out ${rightVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-5">
                <img
                  src={rightTestimonial.image}
                  alt={rightTestimonial.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mr-5 flex-shrink-0"
                  loading="eager"
                  decoding="async"
                  width="80"
                  height="80"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg">{rightTestimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{rightTestimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <i className="ri-double-quotes-l text-[#00D9FF]/20 text-4xl absolute -top-2 -left-1" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic pl-6">
                  {rightTestimonial.quote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators — dots showing which testimonials are active */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Left</span>
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={`left-${index}`}
                  onClick={() => {
                    setLeftVisible(false);
                    setTimeout(() => {
                      setLeftIndex(index);
                      setLeftVisible(true);
                    }, 700);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    index === leftIndex ? 'bg-[#00D9FF]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Show testimonial ${index + 1} on left`}
                />
              ))}
            </div>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={`right-${index}`}
                  onClick={() => {
                    setRightVisible(false);
                    setTimeout(() => {
                      setRightIndex(index);
                      setRightVisible(true);
                    }, 700);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    index === rightIndex ? 'bg-[#00D9FF]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Show testimonial ${index + 1} on right`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">Right</span>
          </div>
        </div>
      </div>
    </section>
  );
}