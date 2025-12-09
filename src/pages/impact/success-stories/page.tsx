import { useState, useEffect } from 'react';

export default function SuccessStoriesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Success%20stories%20and%20community%20transformation%2C%20happy%20people%20celebrating%20achievements%2C%20community%20development%20success%2C%20hope%20and%20progress%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=success-hero-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=People%20overcoming%20challenges%20and%20achieving%20success%2C%20inspiring%20transformation%20stories%2C%20community%20empowerment%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=success-hero-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Lives%20transformed%20through%20development%20programs%2C%20success%20and%20achievement%20celebration%2C%20sustainable%20development%20impact%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=800&seq=success-hero-3&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stories = [
    {
      title: 'From Drought to Abundance: Climate-Resilient Farming in Kenya',
      location: 'Machakos County, Kenya',
      category: 'Sustainable Agriculture',
      image: 'https://readdy.ai/api/search-image?query=Kenyan%20farmer%20standing%20proudly%20in%20thriving%20drought-resistant%20crop%20field%2C%20successful%20harvest%2C%20modern%20irrigation%20system%2C%20agricultural%20transformation%2C%20professional%20documentary%20photography%20with%20warm%20golden%20hour%20lighting&width=800&height=500&seq=story-kenya-farm&orientation=landscape',
      story: 'When severe drought threatened to destroy her family\'s livelihood, Mary Wanjiku joined LDII\'s Climate-Smart Agriculture Initiative. Through training in drought-resistant crops and efficient irrigation techniques, Mary transformed her 2-acre farm. Within one year, her crop yields increased by 60% despite reduced rainfall. Today, Mary trains other farmers in her community and has become a local champion for climate adaptation.',
      impact: [
        '60% increase in crop yields',
        'Water usage reduced by 40%',
        'Income tripled within 18 months',
        'Now training 50+ neighboring farmers'
      ],
      quote: 'LDII didn\'t just teach me new farming methods - they gave me hope for the future. Now I can send all my children to school and we have food security year-round.',
      person: 'Mary Wanjiku, Smallholder Farmer'
    },
    {
      title: 'Digital Dreams Realized: Tech Startup Success in Ghana',
      location: 'Accra, Ghana',
      category: 'Digital Innovation',
      image: 'https://readdy.ai/api/search-image?query=Young%20African%20tech%20entrepreneur%20working%20in%20modern%20innovation%20hub%20with%20team%20members%2C%20successful%20startup%20environment%2C%20computers%20and%20technology%2C%20professional%20business%20photography%20with%20bright%20modern%20lighting&width=800&height=500&seq=story-ghana-tech&orientation=landscape',
      story: 'Kwame Mensah had a vision to create a mobile app connecting rural farmers with urban markets, but lacked the technical skills and resources. Through LDII\'s Digital Innovation Hub in Accra, Kwame received comprehensive training in app development, business planning, and startup financing. His app, FarmConnect, now serves over 10,000 farmers and has secured $500,000 in seed funding.',
      impact: [
        '10,000+ farmers using the platform',
        '$500K seed funding secured',
        '15 jobs created',
        'Farmers\' income increased by 35%'
      ],
      quote: 'The innovation hub provided everything I needed - training, mentorship, and connections to investors. Today, FarmConnect is transforming agricultural markets across West Africa.',
      person: 'Kwame Mensah, FarmConnect Founder'
    },
    {
      title: 'Empowering Women Entrepreneurs in Uganda',
      location: 'Kampala, Uganda',
      category: 'Women\'s Empowerment',
      image: 'https://readdy.ai/api/search-image?query=African%20woman%20entrepreneur%20in%20her%20successful%20business%2C%20women-led%20enterprise%2C%20microfinance%20success%20story%2C%20economic%20empowerment%2C%20professional%20photography%20showing%20confident%20businesswoman%20in%20her%20thriving%20shop&width=800&height=500&seq=story-uganda-women&orientation=landscape',
      story: 'Grace Nakato started with a small vegetable stand and a dream to expand her business. Through LDII\'s Women\'s Economic Empowerment Initiative, she received business training, a microloan of $2,000, and ongoing mentorship. Grace now owns a thriving grocery store employing 8 women, has fully repaid her loan, and is mentoring other women entrepreneurs in her community.',
      impact: [
        'Business revenue increased 400%',
        '8 women employed',
        'Loan fully repaid with 100% on-time payments',
        'Mentoring 12 aspiring women entrepreneurs'
      ],
      quote: 'The training taught me how to manage finances and grow sustainably. The mentorship gave me confidence. Now I\'m helping other women achieve their dreams too.',
      person: 'Grace Nakato, Business Owner'
    },
    {
      title: 'Healthcare Transformation in Rural Nigeria',
      location: 'Kano State, Nigeria',
      category: 'Global Health',
      image: 'https://readdy.ai/api/search-image?query=African%20healthcare%20worker%20providing%20medical%20care%20in%20modern%20rural%20health%20clinic%2C%20patients%20receiving%20treatment%2C%20medical%20equipment%2C%20community%20health%20success%2C%20professional%20healthcare%20photography%20with%20warm%20lighting&width=800&height=500&seq=story-nigeria-health&orientation=landscape',
      story: 'Dr. Amina Ibrahim returned to her rural hometown to find limited healthcare infrastructure and high maternal mortality rates. Through LDII\'s African Health Systems Resilience Program, a new health clinic was established and Dr. Amina received training in emergency obstetric care. The clinic now serves 15,000 people, and maternal mortality in the region has decreased by 45%.',
      impact: [
        '15,000 people served annually',
        '45% reduction in maternal mortality',
        '20 healthcare workers trained',
        'Emergency response time cut by 60%'
      ],
      quote: 'Having a well-equipped clinic and trained staff has saved countless lives. Mothers no longer have to travel 50 kilometers for basic prenatal care.',
      person: 'Dr. Amina Ibrahim, Rural Health Clinic Director'
    },
    {
      title: 'Youth Leadership Transforming Communities in Canada',
      location: 'Brampton, Ontario',
      category: 'Youth Empowerment',
      image: 'https://readdy.ai/api/search-image?query=Young%20diverse%20Canadian%20leaders%20working%20on%20community%20project%2C%20youth%20empowerment%20program%2C%20multicultural%20youth%20collaboration%2C%20community%20development%2C%20professional%20photography%20with%20inspiring%20atmosphere&width=800&height=500&seq=story-canada-youth&orientation=landscape',
      story: 'Ahmed Hassan, a newcomer to Canada, struggled to find his place and purpose. Through LDII\'s Youth Empowerment Initiative, he participated in leadership training, mental health support, and community engagement programs. Ahmed founded a youth-led organization addressing gun violence prevention and has reached over 500 at-risk youth in Brampton.',
      impact: [
        '500+ at-risk youth reached',
        'Youth-led organization established',
        '15 peer mentors trained',
        'Community violence incidents reduced by 25%'
      ],
      quote: 'LDII believed in me when I didn\'t believe in myself. Now I\'m creating opportunities for other young people to find their voice and make a difference.',
      person: 'Ahmed Hassan, Youth Leader & Founder'
    },
    {
      title: 'Reforestation Reviving Communities in Tanzania',
      location: 'Dodoma Region, Tanzania',
      category: 'Climate Action',
      image: 'https://readdy.ai/api/search-image?query=African%20community%20members%20planting%20trees%20in%20reforestation%20project%2C%20thriving%20young%20forest%2C%20environmental%20restoration%2C%20community-managed%20forest%20reserve%2C%20professional%20environmental%20photography%20with%20lush%20green%20landscape&width=800&height=500&seq=story-tanzania-forest&orientation=landscape',
      story: 'The village of Mpwapwa faced severe deforestation, soil erosion, and water scarcity. Through LDII\'s Global Tree Planting Initiative, the community planted 50,000 trees and established a community-managed forest reserve. Three years later, water sources have been restored, soil quality improved, and the community earns income from sustainable forest products.',
      impact: [
        '50,000 trees planted',
        'Water sources restored',
        '30 green jobs created',
        'Community income increased by 40%'
      ],
      quote: 'Our children now have a future. The forest provides water, prevents erosion, and gives us sustainable income. We are guardians of this forest for generations to come.',
      person: 'Joseph Mwamba, Community Forest Manager'
    },
    {
      title: 'Breaking Barriers: Women in STEM Education',
      location: 'Nairobi, Kenya',
      category: 'Education & Digital Inclusion',
      image: 'https://readdy.ai/api/search-image?query=Young%20African%20women%20in%20STEM%20education%20program%20working%20with%20computers%20and%20technology%2C%20science%20laboratory%2C%20female%20students%20in%20technology%20training%2C%20professional%20educational%20photography%20with%20bright%20modern%20lighting&width=800&height=500&seq=story-kenya-stem&orientation=landscape',
      story: 'Fatima Ochieng dreamed of becoming a software engineer but faced cultural barriers and lack of resources. LDII\'s Digital Inclusion program provided scholarships, mentorship, and technology access. Fatima excelled in her studies, graduated top of her class, and now works as a software developer while mentoring 30 young women in STEM fields.',
      impact: [
        'Full scholarship to university',
        'Graduated with honors in Computer Science',
        'Employed as software developer',
        'Mentoring 30 young women in STEM'
      ],
      quote: 'LDII opened doors I didn\'t know existed. Now I\'m opening those same doors for other girls who dare to dream big.',
      person: 'Fatima Ochieng, Software Developer & Mentor'
    },
    {
      title: 'Sustainable Fishing Revitalizing Coastal Communities',
      location: 'Lake Victoria, Uganda',
      category: 'Sustainable Food Systems',
      image: 'https://readdy.ai/api/search-image?query=African%20fishing%20community%20with%20sustainable%20fishing%20practices%2C%20fishermen%20with%20catch%2C%20modern%20fishing%20equipment%2C%20coastal%20community%20development%2C%20professional%20documentary%20photography%20with%20beautiful%20lake%20scenery&width=800&height=500&seq=story-uganda-fishing&orientation=landscape',
      story: 'Overfishing threatened the livelihoods of fishing communities around Lake Victoria. LDII partnered with local fishermen to implement sustainable fishing practices, establish fish farming cooperatives, and create value-added processing facilities. Fish stocks are recovering, and community income has increased by 55% through diversified activities.',
      impact: [
        'Fish stocks recovering by 30%',
        '5 fishing cooperatives established',
        'Community income up 55%',
        '200 families benefiting'
      ],
      quote: 'We were destroying our own future by overfishing. Now we fish sustainably and have fish farming as additional income. The lake is healing and so are our communities.',
      person: 'Peter Okello, Fishing Cooperative Leader'
    }
  ];

  const categories = ['All Stories', 'Sustainable Agriculture', 'Digital Innovation', 'Women\'s Empowerment', 'Global Health', 'Youth Empowerment', 'Climate Action', 'Education & Digital Inclusion', 'Sustainable Food Systems'];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow */}
      <section id="hero" className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Real stories of transformation, resilience, and hope from communities we serve around the world.
          </p>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stories of Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our programs are transforming lives and building resilient communities across the globe.
            </p>
          </div>

          <div className="space-y-20">
            {stories.map((story, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {story.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{story.title}</h3>
                    <div className="flex items-center mb-6">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                      <span className="text-gray-600 font-medium">{story.location}</span>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">{story.story}</p>
                    
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-bold text-blue-800 mb-4">Impact Achieved</h4>
                      <ul className="space-y-3">
                        {story.impact.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <i className="ri-check-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3 mt-0.5 flex-shrink-0"></i>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-100 border-l-4 border-blue-600 rounded-lg p-6">
                      <p className="text-blue-900 italic mb-3 text-lg leading-relaxed">"{story.quote}"</p>
                      <p className="text-blue-800 font-semibold">— {story.person}</p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                      onError={(e) => {
                        console.error('Image failed to load:', story.image);
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Community%20empowerment%20and%20positive%20change%2C%20people%20working%20together%2C%20sustainable%20development%2C%20hope%20and%20progress%2C%20ultra%20high%20resolution%208k%20photography&width=1920&height=600&seq=success-cta&orientation=landscape)`
          }}
        ></div>
        <div className="absolute inset-0 bg-green-600/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Create Your Own Success Story
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our programs and become part of a global community creating positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a
              href="/local-programs"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Programs
            </a>
            <a
              href="/contact"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
