
import { useState, useEffect } from 'react';

export default function ImpactSection() {
  const [animatedStats, setAnimatedStats] = useState({
    trees: 0,
    partners: 0,
    years: 0,
    offices: 0
  });

  const impactStats = [
    {
      number: '1M+',
      label: 'Trees Planted Globally',
      description: 'Contributing to reforestation and climate resilience',
      key: 'trees',
      target: 1000
    },
    {
      number: '50+',
      label: 'International Partners',
      description: 'Collaborating across governments, NGOs, and private sector',
      key: 'partners',
      target: 50
    },
    {
      number: '10+',
      label: 'Years of Impact',
      description: 'Decade of grassroots and high-level international action',
      key: 'years',
      target: 10
    },
    {
      number: '5',
      label: 'Global Offices',
      description: 'Presence across Africa and North America',
      key: 'offices',
      target: 5
    }
  ];

  // Animated counter effect with swing animation
  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof animatedStats, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 16);
    };

    // Start animations with slight delays for staggered effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => animateCounter(1000, 'trees', 2500), 200);
          setTimeout(() => animateCounter(50, 'partners', 2000), 400);
          setTimeout(() => animateCounter(10, 'years', 1800), 600);
          setTimeout(() => animateCounter(5, 'offices', 1500), 800);
          observer.disconnect();
        }
      });
    });

    const section = document.getElementById('impact-stats');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      title: '1st International Post-COVID Conference',
      description: 'Successfully organized in Toronto, ON, Canada in July 2024, focusing on global recovery and resilience strategies.',
      icon: 'ri-trophy-line'
    },
    {
      title: 'Global Tree Planting Initiative',
      description: 'Coordinated the planting of over one million trees worldwide, contributing to climate resilience.',
      icon: 'ri-plant-line'
    },
    {
      title: 'Multi-Country Operations',
      description: 'Established operational presence in 5 countries across Africa and North America.',
      icon: 'ri-global-line'
    }
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(https://readdy.ai/api/search-image?query=Beautiful%20global%20environmental%20landscape%20with%20lush%20green%20forests%2C%20mountains%2C%20rivers%2C%20and%20sustainable%20communities%2C%20aerial%20view%20of%20reforestation%20projects%2C%20vibrant%20green%20nature%2C%20environmental%20conservation%2C%20climate%20resilience%2C%20beautiful%20earth%20from%20above%2C%20professional%20environmental%20photography%20with%20natural%20lighting%20and%20rich%20green%20colors&width=1920&height=1200&seq=global-impact-bg&orientation=landscape)`
      }}
    >
      {/* Background overlay with light green color and special effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/85 via-emerald-600/80 to-green-700/85"></div>
      
      {/* Floating animated elements for special effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-white/8 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-40 right-16 w-12 h-12 bg-white/12 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        
        {/* Floating leaf icons */}
        <div className="absolute top-20 right-32 text-white/20 animate-pulse" style={{ animationDelay: '1s' }}>
          <i className="ri-leaf-line w-8 h-8 flex items-center justify-center text-2xl"></i>
        </div>
        <div className="absolute bottom-32 left-20 text-white/25 animate-pulse" style={{ animationDelay: '2s' }}>
          <i className="ri-plant-line w-6 h-6 flex items-center justify-center text-xl"></i>
        </div>
        <div className="absolute top-1/2 right-10 text-white/15 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <i className="ri-earth-line w-10 h-10 flex items-center justify-center text-3xl"></i>
        </div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-600/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-700/30 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Our Global Impact
          </h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Measuring our progress in building resilient communities worldwide
          </p>
        </div>
        
        {/* Impact Statistics with enhanced styling */}
        <div id="impact-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center transform transition-all duration-500 hover:scale-110 animate-swing-in group" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-number-swing drop-shadow-lg group-hover:text-green-100 transition-colors" style={{ animationDelay: `${index * 200}ms` }}>
                  {stat.key === 'trees' ? `${animatedStats.trees}K+` :
                   stat.key === 'partners' ? `${animatedStats.partners}+` :
                   stat.key === 'years' ? `${animatedStats.years}+` :
                   animatedStats.offices}
                </div>
                <div className="text-xl font-semibold text-white mb-2 drop-shadow-md">
                  {stat.label}
                </div>
                <div className="text-white/90 text-sm leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Key Achievements with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/35 transition-all duration-300 shadow-lg">
                <i className={`${achievement.icon} w-8 h-8 flex items-center justify-center text-white text-2xl drop-shadow-md`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">{achievement.title}</h3>
              <p className="text-white/95 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/impact"
            className="bg-white/90 text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl backdrop-blur-sm border border-white/30"
          >
            View Full Impact Report
          </a>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-white/35 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
}
