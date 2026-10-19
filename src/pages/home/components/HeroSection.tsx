import { useState, useEffect } from 'react';
import { useMedia } from '../../../context/MediaContext';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const { assets, loading } = useMedia();

  useEffect(() => {
    const startContinuousLoop = () => {
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

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-corporate-blue-700 via-corporate-blue-600 to-corporate-blue-800 overflow-hidden">
        {/* World Map Background */}
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: loading
                ? 'none'
                : `url(${assets.videos.hero_world_map_bg || 'https://readdy.ai/api/search-image?query=High%20quality%20detailed%20world%20map%20with%20bright%20glowing%20network%20connections%20between%20continents%2C%20illuminated%20connection%20lines%20showing%20global%20partnerships%2C%20modern%20digital%20cartography%20with%20vibrant%20blue%20and%20green%20network%20nodes%2C%20professional%20geographic%20visualization%20with%20data%20flow%20lines%2C%20international%20connectivity%20map%20with%20bright%20connection%20points%20across%20all%20continents%2C%20clean%20high-resolution%20world%20map%20design&width=1920&height=1080&seq=networked-world-map-hq&orientation=landscape'})`
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

        {/* Rotating Globe Video Background */}
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-full h-full">
            {!loading && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80"
                poster={assets.videos.hero_globe_poster || "https://readdy.ai/api/search-image?query=Beautiful%20rotating%20Earth%20globe%20with%20bright%20network%20connections%2C%20global%20connectivity%20visualization%2C%20spinning%20planet%20with%20glowing%20network%20lines%2C%20digital%20world%20map%20with%20bright%20connection%20points%2C%20professional%20space%20view%20of%20Earth%20with%20moving%20data%20streams&width=1920&height=1080&seq=globe-poster&orientation=landscape"}
              >
                <source
                  src={assets.videos.hero_globe_video || "https://videos.pexels.com/video-files/3141207/3141207-uhd_3840_2160_25fps.mp4"}
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
            )}
            <div className="absolute inset-0 opacity-70">
              <div className="relative w-full h-full overflow-hidden">
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

        <div className="absolute inset-0 bg-corporate-blue-900/25"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl animate-fade-in">
            <span className="text-white">Livelihood Development International Initiatives</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg animate-slide-up font-semibold px-4 reveal">
            Livelihood Development International Initiatives (LDII) is a non-profit organization committed to creating a brighter future through the promotion of social cohesion and empowerment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up-delay px-4 reveal">
            <a
              href="/about"
              className="w-full sm:w-auto bg-tech-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-tech-teal-600 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-2xl animate-bounce-subtle btn-micro elevate"
            >
              Learn About Our Mission
            </a>
            <a
              href="/focus-areas"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-2xl animate-bounce-subtle-delay btn-micro elevate"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center animate-glow-pulse">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
}