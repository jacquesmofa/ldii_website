import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [counters, setCounters] = useState({
    years: 0,
    offices: 0,
    trees: 0
  });

  const [missionCounters, setMissionCounters] = useState({
    communities: 0,
    projects: 0,
    partners: 0,
    countries: 0
  });

  const [showVideo, setShowVideo] = useState(false);

  // Enhanced animated counter effect with swing animation
  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 16);
    };

    const animateMissionCounter = (target: number, key: keyof typeof missionCounters, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setMissionCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 16);
    };

    setTimeout(() => animateCounter(10, 'years', 2000), 500);
    setTimeout(() => animateCounter(4, 'offices', 1500), 700);
    setTimeout(() => animateCounter(1000, 'trees', 2500), 900);

    setTimeout(() => animateMissionCounter(250, 'communities', 2200), 1500);
    setTimeout(() => animateMissionCounter(45, 'projects', 1800), 1700);
    setTimeout(() => animateMissionCounter(120, 'partners', 2100), 1900);
    setTimeout(() => animateMissionCounter(25, 'countries', 1600), 2100);

    const startContinuousLoop = () => {
      setShowVideo(false);
      
      const loopCycle = () => {
        setShowVideo(false);
        
        setTimeout(() => {
          setShowVideo(true);
          
          setTimeout(() => {
            loopCycle();
          }, 3000);
        }, 10000);
      };
      
      loopCycle();
    };

    const initialTimer = setTimeout(startContinuousLoop, 1000);

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      clearTimeout(initialTimer);
      observer.disconnect();
    };
  }, []);

  const testimonials = [
    {
      name: "Dr. Amina Hassan",
      role: "Health Minister, Kenya",
      image: "https://readdy.ai/api/search-image?query=Professional%20African%20woman%20leader%2C%20confident%20business%20executive%2C%20international%20development%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20leadership%20portrait&width=80&height=80&seq=testimonial-1&orientation=squarish",
      quote: "LDII's health systems strengthening program has been instrumental in improving our pandemic preparedness. Their research-driven approach has helped us build more resilient healthcare infrastructure."
    },
    {
      name: "James Mitchell",
      role: "Policy Advisor, Canada",
      image: "https://readdy.ai/api/search-image?query=Professional%20Canadian%20government%20official%2C%20senior%20policy%20advisor%2C%20international%20cooperation%20expert%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20government%20leadership%20portrait&width=80&height=80&seq=testimonial-2&orientation=squarish",
      quote: "The collaborative approach LDII brings to global challenges is remarkable. Their ability to bridge research and practical implementation has made them an invaluable partner in our climate initiatives."
    },
    {
      name: "Maria Santos",
      role: "Community Leader, Brazil",
      image: "https://readdy.ai/api/search-image?query=Community%20leader%20from%20developing%20country%2C%20local%20development%20coordinator%2C%20grassroots%20organizer%2C%20professional%20portrait%2C%20community%20development%20professional%2C%20international%20aid%20worker&width=80&height=80&seq=testimonial-3&orientation=squarish",
      quote: "Through LDII's food security program, our community has learned sustainable farming techniques that have increased our crop yields by 40%. This has transformed our local economy."
    },
    {
      name: "Dr. Chen Wei",
      role: "Research Director, Singapore",
      image: "https://readdy.ai/api/search-image?query=Asian%20male%20research%20director%2C%20senior%20scientist%2C%20academic%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20research%20leadership%20portrait&width=80&height=80&seq=testimonial-4&orientation=squarish",
      quote: "LDII's data-driven approach to sustainable development has set new standards in our region. Their research publications have become essential reading for policymakers across Asia-Pacific."
    },
    {
      name: "Sarah Johnson",
      role: "NGO Director, Toronto",
      image: "https://readdy.ai/api/search-image?query=Professional%20Canadian%20woman%20NGO%20director%2C%20nonprofit%20leader%2C%20social%20impact%20professional%2C%20formal%20business%20attire%2C%20professional%20headshot%20photography%2C%20leadership%20portrait&width=80&height=80&seq=testimonial-5&orientation=squarish",
      quote: "Working with LDII on our youth empowerment programs has been transformative. Their expertise in community engagement and their commitment to measurable outcomes make them an exceptional partner."
    },
    {
      name: "Ambassador David Okonkwo",
      role: "UN Representative, Nigeria",
      image: "https://readdy.ai/api/search-image?query=African%20male%20diplomat%2C%20UN%20ambassador%2C%20international%20relations%20professional%2C%20formal%20diplomatic%20attire%2C%20professional%20headshot%20photography%2C%20diplomatic%20leadership%20portrait&width=80&height=80&seq=testimonial-6&orientation=squarish",
      quote: "LDII's work in climate resilience has been crucial for vulnerable communities across Africa. Their holistic approach addresses both immediate needs and long-term sustainability."
    }
  ];

  return (
    <div>
      {/* Enhanced Hero Section with Continuous World Map to Video Loop */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-corporate-blue-700 via-corporate-blue-600 to-corporate-blue-800 overflow-hidden">
        
        {/* World Map Background - Shows for 10 seconds in continuous loop */}
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://readdy.ai/api/search-image?query=High%20quality%20detailed%20world%20map%20with%20bright%20glowing%20network%20connections%20between%20continents%2C%20illuminated%20connection%20lines%20showing%20global%20partnerships%2C%20modern%20digital%20cartography%20with%20vibrant%20blue%20and%20green%20network%20nodes%2C%20professional%20geographic%20visualization%20with%20data%20flow%20lines%2C%20international%20connectivity%20map%20with%20bright%20connection%20points%20across%20all%20continents%2C%20clean%20high-resolution%20world%20map%20design&width=1920&height=1080&seq=networked-world-map-hq&orientation=landscape)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue-800/60 via-corporate-blue-700/50 to-digital-purple-900/60"></div>
            
            <div className="absolute inset-0 opacity-40">
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-[#00D9FF]/300/80 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-[#00D9FF]/300/80 rounded-full animate-ping animation-delay-1000"></div>
                <div className="absolute bottom-1/5 left-1/3 w-3 h-3 bg-[#00D9FF]/300/80 rounded-full animate-ping animation-delay-2000"></div>
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#00D9FF]/300/80 rounded-full animate-ping animation-delay-1500"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#00D9FF]/400/80 rounded-full animate-ping animation-delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Rotating Globe Video Background - Shows for 3 seconds in continuous loop */}
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-full h-full">
            {/* Primary Rotating Globe Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
              poster="https://readdy.ai/api/search-image?query=Beautiful%20rotating%20Earth%20globe%20with%20bright%20network%20connections%2C%20global%20connectivity%20visualization%2C%20spinning%20planet%20with%20glowing%20network%20lines%2C%20digital%20world%20map%20with%20bright%20connection%20points%2C%20professional%20space%20view%20of%20Earth%20with%20moving%20data%20streams&width=1920&height=1080&seq=globe-poster&orientation=landscape"
              loading="lazy"
            >
              <source
                src="https://videos.pexels.com/video-files/3141207/3141207-uhd_3840_2160_25fps.mp4"
                type="video/mp4"
              />
              <source
                src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_25fps.mp4"
                type="video/mp4"
              />
              <source
                src="https://videos.pexels.com/video-files/2086113/2086113-uhd_3840_2160_25fps.mp4"
                type="video/mp4"
              />
              <source
                src="https://videos.pexels.com/video-files/855564/855564-uhd_3840_2160_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            
            {/* Clean Network Effects Overlay - ONLY DOTS AND RINGS */}
            <div className="absolute inset-0 opacity-70">
              <div className="relative w-full h-full overflow-hidden">
                
                {/* Bright Floating Network Nodes - Distributed Around Entire Globe */}
                <div className="absolute top-1/6 left-1/6 w-5 h-5 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute top-1/4 right-1/6 w-4 h-4 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute bottom-1/6 left-1/4 w-6 h-6 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute top-3/4 left-3/4 w-4 h-4 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute top-1/8 right-1/8 w-5 h-5 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute bottom-1/8 left-1/8 w-4 h-4 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute top-2/3 right-2/3 w-5 h-5 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute bottom-2/3 left-2/3 w-4 h-4 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute top-1/3 right-1/5 w-5 h-5 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-[#00D9FF] rounded-full animate-ping shadow-2xl shadow-[#00D9FF]/90"></div>
                
                {/* Enhanced Rotating Globe Effect - Multiple Concentric Layers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[600px] h-[600px] border-3 border-[#00D9FF]/50 rounded-full animate-spin-slow shadow-2xl shadow-[#00D9FF]/40"></div>
                  <div className="absolute w-[520px] h-[520px] border-3 border-[#00D9FF]/45 rounded-full animate-spin-reverse shadow-2xl shadow-[#00D9FF]/35"></div>
                  <div className="absolute w-[440px] h-[440px] border-2 border-[#00D9FF]/40 rounded-full animate-pulse shadow-2xl shadow-[#00D9FF]/30"></div>
                  <div className="absolute w-[360px] h-[360px] border-2 border-[#00D9FF]/35 rounded-full animate-spin-slow-reverse shadow-2xl shadow-[#00D9FF]/25"></div>
                  <div className="absolute w-[280px] h-[280px] border-2 border-[#00D9FF]/30 rounded-full animate-spin-slow shadow-2xl shadow-[#00D9FF]/20"></div>
                  <div className="absolute w-[200px] h-[200px] border border-[#00D9FF]/25 rounded-full animate-spin-reverse shadow-2xl shadow-[#00D9FF]/15"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-corporate-blue-900/25"></div>
        
        {/* Content overlay - Responsive */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl animate-fade-in">
            <span className="text-white animate-glow-blink">Livelihood Development International Initiatives</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg animate-slide-up font-semibold px-4 reveal">
            We have 10+ Years of Experience. Livelihood Development International Initiatives (LDII) is a non-profit organization committed to creating a brighter future through the promotion of social cohesion and empowerment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up-delay px-4 reveal">
            <a
              href="/about#hero"
              className="w-full sm:w-auto bg-tech-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-tech-teal-600 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-2xl animate-bounce-subtle btn-micro elevate"
            >
              Learn About Our Mission
            </a>
            <a
              href="/focus-areas#hero"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-2xl animate-bounce-subtle-delay btn-micro elevate"
            >
              Explore Our Work
            </a>
          </div>
          
          {/* Enhanced Animated Counter Cards - Responsive Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 justify-center items-center text-white px-4 reveal">
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20 transform transition-all duration-500 hover:scale-105 animate-swing-in elevate glow-hover">
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-tech-teal-300 animate-number-swing">
                {counters.years}+
              </div>
              <div className="text-white/90 text-sm sm:text-base">Years of Impact</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20 transform transition-all duration-500 hover:scale-105 animate-swing-in-delay elevate glow-hover">
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-tech-teal-300 animate-number-swing-delay">
                {counters.offices}
              </div>
              <div className="text-white/90 text-sm sm:text-base">Global Offices</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20 transform transition-all duration-500 hover:scale-105 animate-swing-in-delay-2 elevate glow-hover">
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-tech-teal-300 animate-number-swing-delay-2">
                {counters.trees}K+
              </div>
              <div className="text-white/90 text-sm sm:text-base">Trees Planted</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced animated scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center animate-glow-pulse">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Highlights Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-corporate-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-tech-teal-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-digital-purple-300 rounded-full animate-bounce"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in">
              Transforming Communities Worldwide
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Through innovative research, strategic partnerships, and community-driven solutions, we're building resilience against global challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 reveal">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-swing-in elevate">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-corporate-blue-600 animate-number-swing">
                {missionCounters.communities}+
              </div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">Communities Served</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-swing-in-delay elevate">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-corporate-blue-600 animate-number-swing-delay">
                {missionCounters.projects}+
              </div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">Active Projects</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-swing-in-delay-2 elevate">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-corporate-blue-600 animate-number-swing-delay-2">
                {missionCounters.partners}+
              </div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">Global Partners</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-swing-in-delay-3 elevate">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-corporate-blue-600 animate-number-swing-delay-3">
                {missionCounters.countries}+
              </div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">Countries Reached</div>
            </div>
          </div>
          
          <div className="text-center px-4 reveal">
            <a
              href="/impact#hero"
              className="inline-block bg-tech-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-tech-teal-600 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg btn-micro elevate"
            >
              Explore Our Impact
            </a>
          </div>
        </div>
      </section>

      {/* Global Unity Section */}
      <section 
        className="py-16 bg-gradient-to-br from-corporate-blue-50 to-corporate-blue-100 relative"
        style={{
          backgroundImage: `url(https://readdy.ai/api/search-image?query=Professional%20corporate%20background%20with%20subtle%20geometric%20patterns%2C%20light%20green%20and%20white%20gradient%2C%20modern%20business%20aesthetic%2C%20clean%20minimalist%20design%2C%20soft%20lighting%2C%20professional%20office%20environment%20feel%2C%20high-quality%20corporate%20photography&width=1920&height=800&seq=corporate-bg&orientation=landscape)`
        }}
      >
        <div className="absolute inset-0 bg-corporate-blue-50/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Unity & Collaboration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together across nations to build a resilient future for all humanity.
            </p>
          </div>
          
          {/* World Map Image */}
          <div className="mb-16">
            <img
              src="https://readdy.ai/api/search-image?query=High%20quality%20detailed%20world%20map%20with%20bright%20glowing%20network%20connections%20between%20continents%2C%20illuminated%20connection%20lines%20showing%20global%20partnerships%2C%20modern%20digital%20cartography%20with%20vibrant%20blue%20and%20green%20network%20nodes%2C%20professional%20geographic%20visualization%20with%20data%20flow%20lines%2C%20international%20connectivity%20map%20with%20bright%20connection%20points%20across%20all%20continents%2C%20clean%20high-resolution%20world%20map%20design&width=1200&height=600&seq=networked-world-map-hq&orientation=landscape"
              alt="World Map - LDII Global Network Connections"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* One Canada Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">One Canada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building resilience across Canada for sustainability
            </p>
          </div>

          {/* Canada Flag with Provincial Flags */}
          <div className="mb-16">
            <img
              src="https://readdy.ai/api/search-image?query=Canadian%20flag%20in%20center%20surrounded%20by%20all%20provincial%20and%20territorial%20flags%20of%20Canada%20arranged%20in%20circle%2C%20official%20flags%20of%20all%20Canadian%20provinces%20and%20territories%2C%20Alberta%20British%20Columbia%20Manitoba%20New%20Brunswick%20Newfoundland%20Northwest%20Territories%20Nova%20Scotia%20Nunavut%20Ontario%20Prince%20Edward%20Island%20Quebec%20Saskatchewan%20Yukon%20flags%2C%20professional%20government%20photography%2C%20national%20unity%20symbol&width=1200&height=600&seq=canada-provincial-flags&orientation=landscape"
              alt="Canada Flag with Provincial and Territorial Flags"
              className="w-full h-96 object-contain rounded-2xl shadow-2xl bg-white p-8"
            />
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest from LDII</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our latest updates, conferences, and insights on building global resilience.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div 
              className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
              style={{
                backgroundImage: `url(https://readdy.ai/api/search-image?query=Professional%20YouTube%20video%20thumbnail%20for%20international%20development%20organization%2C%20LDII%20conference%20presentation%20with%20speakers%20on%20stage%2C%20modern%20conference%20setup%20with%20professional%20lighting%2C%20play%20button%20overlay%2C%20high-quality%20video%20production%20aesthetic&width=1200&height=600&seq=youtube-bg&orientation=landscape)`
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto cursor-pointer hover:bg-red-700 transition-colors">
                  <i className="ri-play-fill w-8 h-8 flex items-center justify-center text-white ml-1"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Building Global Resilience: LDII's Latest Conference
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Watch highlights from our recent international conference on climate resilience and sustainable development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap">
                    Watch Video
                  </button>
                  <a
                    href="https://youtube.com/@ldiinitiatives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Visit Our Channel
                  </a>
                </div>
              </div>
            </div>
            
            {/* Video Player Area */}
            <div id="video-player" className="hidden p-6">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="LDII Latest Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            
            {/* Related Videos */}
            <div className="p-6 border-t border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">More from LDII Channel</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src="https://readdy.ai/api/search-image?query=LDII%20climate%20conference%20thumbnail%20with%20diverse%20speakers%2C%20professional%20conference%20setting%2C%20climate%20action%20theme%2C%20YouTube%20video%20thumbnail%20style&width=400&height=225&seq=video-1&orientation=landscape"
                    alt="Climate Resilience Conference"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h5 className="font-semibold text-gray-900 text-sm">Climate Resilience Conference 2024</h5>
                  <p className="text-gray-600 text-xs">2.1K views • 2 weeks ago</p>
                </div>
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src="https://readdy.ai/api/search-image?query=LDII%20health%20systems%20workshop%20thumbnail%2C%20medical%20professionals%20in%20discussion%2C%20health%20resilience%20theme%2C%20professional%20video%20thumbnail&width=400&height=225&seq=video-2&orientation=landscape"
                    alt="Health Systems International Conference"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h5 className="font-semibold text-gray-900 text-sm">Health Systems Strengthening</h5>
                  <p className="text-gray-600 text-xs">1.8K views • 1 month ago</p>
                </div>
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src="https://readdy.ai/api/search-image?query=LDII%20sustainable%20agriculture%20project%20thumbnail%2C%20farmers%20with%20crops%2C%20food%20security%20theme%2C%20educational%20video%20thumbnail&width=400&height=225&seq=video-3&orientation=landscape"
                    alt="Sustainable Agriculture"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h5 className="font-semibold text-gray-900 text-sm">Sustainable Agriculture Initiative</h5>
                  <p className="text-gray-600 text-xs">3.2K views • 1 month ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Showcase */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing the world's most pressing challenges through targeted interventions and innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <img
                src="https://readdy.ai/api/search-image?query=Climate%20resilience%20and%20environmental%20sustainability%2C%20renewable%20energy%20solutions%2C%20green%20technology%2C%20solar%20panels%20and%20wind%20turbines%2C%20sustainable%20development%2C%20environmental%20protection%2C%20clean%20energy%20future%2C%20professional%20photography&width=400&height=300&seq=climate-focus&orientation=landscape"
                alt="Climate Resilience"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Climate Resilience</h3>
                <p className="text-sm opacity-90 mb-4">Building adaptive capacity against climate change impacts</p>
                <a
                  href="/what-we-do/climate-action#hero"
                  className="inline-block bg-tech-teal-500/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold hover:bg-tech-teal-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <img
                src="https://readdy.ai/api/search-image?query=Health%20systems%20strengthening%2C%20medical%20professionals%2C%20healthcare%20workers%2C%20hospital%20equipment%2C%20public%20health%20initiatives%2C%20community%20health%20programs%2C%20medical%20research%2C%20healthcare%20resilience%2C%20professional%20medical%20photography&width=400&height=300&seq=health-focus&orientation=landscape"
                alt="Health Systems"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Health Systems</h3>
                <p className="text-sm opacity-90 mb-4">Strengthening healthcare infrastructure and pandemic preparedness</p>
                <a
                  href="/what-we-do/global-health#hero"
                  className="inline-block bg-tech-teal-500/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold hover:bg-tech-teal-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <img
                src="https://readdy.ai/api/search-image?query=Food%20security%20and%20sustainable%20agriculture%2C%20farmers%20working%20in%20fields%2C%20agricultural%20technology%2C%20crop%20production%2C%20food%20systems%2C%20sustainable%20farming%20practices%2C%20agricultural%20innovation%2C%20food%20security%20solutions%2C%20professional%20agricultural%20photography&width=400&height=300&seq=food-focus&orientation=landscape"
                alt="Food Security"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Food Security</h3>
                <p className="text-sm opacity-90 mb-4">Ensuring sustainable food systems and agricultural resilience</p>
                <a
                  href="/what-we-do/sustainable-food#hero"
                  className="inline-block bg-tech-teal-500/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold hover:bg-tech-teal-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/focus-areas#hero"
              className="bg-tech-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tech-teal-600 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
            >
              View All Focus Areas
            </a>
          </div>
        </div>
      </section>

      {/* 3D Rotating Cube Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Voices from Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from leaders, partners, and community members about the impact of our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Cube */}
            <div className="perspective-1000">
              <div className="cube-container">
                <div className="cube">
                  {/* Front Face */}
                  <div className="cube-face cube-front bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[0].image}
                        alt={testimonials[0].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[0].name}</h4>
                        <p className="text-gray-600 text-sm">{testimonials[0].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonials[0].quote}"
                    </p>
                  </div>
                  
                  {/* Back Face */}
                  <div className="cube-face cube-back bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[1].image}
                        alt={testimonials[1].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[1].name}</h4>
                        <p className="text-gray-600 text-sm">{testimonials[1].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonials[1].quote}"
                    </p>
                  </div>
                  
                  {/* Right Face */}
                  <div className="cube-face cube-right bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[2].image}
                        alt={testimonials[2].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[2].name}</h4>
                        <p className="text-gray-600 text-sm">{testimonials[2].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonials[2].quote}"
                    </p>
                  </div>
                  
                  {/* Left Face */}
                  <div className="cube-face cube-left bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[3].image}
                        alt={testimonials[3].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[3].name}</h4>
                        <p className="text-gray-600 text-sm">{testimonials[3].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonials[3].quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Cube */}
            <div className="perspective-1000">
              <div className="cube-container">
                <div className="cube cube-reverse">
                  {/* Front Face */}
                  <div className="cube-face cube-front bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[4].image}
                        alt={testimonials[4].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[4].name}</h4>
                        <p className="text-gray-600 text-sm">{testimonials[4].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonials[4].quote}"
                    </p>
                  </div>
                  
                  {/* Back Face */}
                  <div className="cube-face cube-back bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[5].image}
                        alt={testimonials[5].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[5].name}</h4>
                        <p className="text-gray-600 text-sm">{testimonials[5].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonials[5].quote}"
                    </p>
                  </div>
                  
                  {/* Right Face */}
                  <div className="cube-face cube-right bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[0].image}
                        alt={testimonials[0].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[0].name}</h4>
                        <p className="text-gray-600 text-sm">{testimonials[0].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonials[0].quote}"
                    </p>
                  </div>
                  
                  {/* Left Face */}
                  <div className="cube-face cube-left bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[1].image}
                        alt={testimonials[1].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonials[1].name}</h4>
                        <p className="text-gray-600 text-sm">{testimonials[1].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonials[1].quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-corporate-blue-600 to-corporate-blue-700 relative overflow-hidden mb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-tech-teal-300 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-digital-purple-300 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Join the Global Resilience Movement
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Together, we can build a more resilient world. Whether you're a government, organization, or individual, there are many ways to get involved in our mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-hand-heart-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support Our Work</h3>
              <p className="text-white/90 mb-6">Make a donation to support our global resilience initiatives and community programs.</p>
              <a
                href="/donate#hero"
                className="bg-white text-tech-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Donate Now
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Partner With Us</h3>
              <p className="text-white/90 mb-6">Collaborate with LDII to amplify your organization's impact on global challenges.</p>
              <a
                href="/partners#hero"
                className="bg-white text-tech-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Become a Partner
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line w-8 h-8 flex items-center justify-center text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Stay Connected</h3>
              <p className="text-white/90 mb-6">Get updates on our latest research, events, and global resilience initiatives.</p>
              <a
                href="/contact#hero"
                className="bg-white text-tech-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}