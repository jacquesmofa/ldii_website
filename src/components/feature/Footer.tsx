import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      
      const response = await fetch('https://readdy.ai/api/public/form/submit/ldii-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      
      if (response.ok) {
        setSubmitMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden mt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20corporate%20technology%20business%20trade%20innovation%20digital%20transformation%20professional%20office%20environment%20with%20advanced%20technology%20screens%20data%20visualization%20global%20business%20network%20connectivity%20futuristic%20workspace%20high-tech%20conference%20room%20with%20multiple%20displays%20showing%20business%20analytics%20and%20technological%20advancement&width=1920&height=1200&seq=footer-bg-corporate-tech&orientation=landscape)'
        }}
      />
      <div className="absolute inset-0 bg-[#0A1E3D]/95" />
      
      {/* Luminous Tech Effects - Glowing, Blinking, Shining Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Circuit Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent animate-pulse-glow-delay"></div>
        
        {/* Floating Luminous Particles */}
        <div className="absolute top-10 left-[10%] w-2 h-2 bg-[#00D9FF] rounded-full animate-float-glow shadow-glow-cyan"></div>
        <div className="absolute top-20 right-[15%] w-3 h-3 bg-[#00D9FF] rounded-full animate-float-glow-delay shadow-glow-cyan"></div>
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-[#00D9FF] rounded-full animate-float-glow-delay-2 shadow-glow-cyan"></div>
        <div className="absolute bottom-20 right-[25%] w-3 h-3 bg-[#00D9FF] rounded-full animate-float-glow shadow-glow-cyan"></div>
        <div className="absolute top-1/3 left-[30%] w-2 h-2 bg-[#00D9FF] rounded-full animate-float-glow-delay shadow-glow-cyan"></div>
        <div className="absolute top-1/2 right-[35%] w-2 h-2 bg-[#00D9FF] rounded-full animate-float-glow-delay-2 shadow-glow-cyan"></div>
        
        {/* Blinking Tech Nodes */}
        <div className="absolute top-16 left-[40%] w-4 h-4 bg-[#00D9FF] rounded-full animate-blink-fast shadow-glow-cyan-strong"></div>
        <div className="absolute bottom-40 right-[45%] w-4 h-4 bg-[#00D9FF] rounded-full animate-blink-slow shadow-glow-cyan-strong"></div>
        <div className="absolute top-1/4 right-[10%] w-3 h-3 bg-[#00D9FF] rounded-full animate-blink-medium shadow-glow-cyan-strong"></div>
        <div className="absolute bottom-1/4 left-[50%] w-3 h-3 bg-[#00D9FF] rounded-full animate-blink-fast shadow-glow-cyan-strong"></div>
        
        {/* Scanning Light Beams */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#00D9FF]/30 to-transparent animate-scan-vertical"></div>
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-[#00D9FF]/30 to-transparent animate-scan-vertical-delay"></div>
        
        {/* Horizontal Scanning Beams */}
        <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent animate-scan-horizontal"></div>
        <div className="absolute bottom-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent animate-scan-horizontal-delay"></div>
        
        {/* Glowing Rings */}
        <div className="absolute top-12 right-[20%] w-16 h-16 border-2 border-[#00D9FF]/40 rounded-full animate-pulse-ring"></div>
        <div className="absolute bottom-24 left-[15%] w-20 h-20 border-2 border-[#00D9FF]/40 rounded-full animate-pulse-ring-delay"></div>
        <div className="absolute top-1/2 left-[60%] w-12 h-12 border-2 border-[#00D9FF]/40 rounded-full animate-pulse-ring"></div>
        
        {/* Data Stream Lines */}
        <div className="absolute top-1/4 left-[5%] w-32 h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent animate-data-stream"></div>
        <div className="absolute bottom-1/3 right-[10%] w-40 h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent animate-data-stream-delay"></div>
        <div className="absolute top-2/3 left-[70%] w-24 h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent animate-data-stream"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Logo & Newsletter */}
          <div className="md:col-span-1">
            <a href="/#hero" className="inline-block mb-4 cursor-pointer group">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://i.imgur.com/7LGjh8Y.png"
                  alt="LDII Logo"
                  className="h-16 w-auto mb-3"
                />
                <p className="text-white text-sm font-semibold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  Livelihood Development International Initiatives
                </p>
              </div>
            </a>
            <p className="text-white text-sm mb-6 mt-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Committed to creating a brighter future through the promotion of social cohesion and empowerment.
            </p>
            
            {/* Newsletter Sign-Up */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Join Our Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2" data-readdy-form>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="px-4 py-2 rounded-lg bg-[#1a2f4d] text-white border border-[#00D9FF]/30 focus:outline-none focus:border-[#00D9FF] text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#00D9FF] text-[#0A1E3D] px-4 py-2 rounded-lg font-semibold hover:bg-[#00C4E6] transition-all duration-300 cursor-pointer whitespace-nowrap text-sm disabled:opacity-50 transform hover:scale-105"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {submitMessage && (
                <p className={`text-sm mt-2 ${submitMessage.includes('Thank you') ? 'text-[#00D9FF]' : 'text-red-400'}`} style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  {submitMessage}
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Quick Links</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="/#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/local-programs#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Local Programs (Canada & Ontario)
                </a>
              </li>
              <li>
                <a href="/about#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/donate#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Donate Now
                </a>
              </li>
              <li>
                <a href="/events#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Our Events
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Impact */}
          <div>
            <h4 className="font-semibold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Our Impact</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="/what-we-do/climate-action#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Climate Action & Mitigation
                </a>
              </li>
              <li>
                <a href="/what-we-do/poverty-eradication#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Poverty Eradication & Inclusive Growth
                </a>
              </li>
              <li>
                <a href="/what-we-do/sustainable-food#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Sustainable Food Systems
                </a>
              </li>
              <li>
                <a href="/what-we-do/global-health#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Global Health & Resilience
                </a>
              </li>
              <li>
                <a href="/what-we-do/digital-inclusion#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Digital Inclusion
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Legal & Resources</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="/privacy-policy#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/accessibility#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="/faq#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="/sitemap#hero" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Information */}
          <div>
            <h4 className="font-semibold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Contact Information</h4>
            <div className="space-y-3 text-white text-sm">
              <div>
                <p className="font-semibold text-white mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Phone:</p>
                <a href="tel:+14166604233" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  +1 (416) 660-4233
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Email:</p>
                <a href="mailto:info@ldiinitiatives.org" className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 block py-1 whitespace-nowrap" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  info@ldiinitiatives.org
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Toronto Office:</p>
                <p className="text-xs text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>3701 Chesswood Drive, Unit 315, Toronto, ON M3J 2P6</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Brampton Office:</p>
                <p className="text-xs text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>101 West Dr C, Brampton, ON L6T 2J6</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com/ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a2f4d] flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A1E3D] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="https://youtube.com/@ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a2f4d] flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A1E3D] transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <i className="ri-youtube-fill text-xl"></i>
              </a>
              <a
                href="https://x.com/ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a2f4d] flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A1E3D] transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <i className="ri-twitter-x-fill text-xl"></i>
              </a>
              <a
                href="https://instagram.com/ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a2f4d] flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A1E3D] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/company/ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a2f4d] flex items-center justify-center text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A1E3D] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-white text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            © 2025 Livelihood Development International Initiatives (LDII). All Rights Reserved.
          </p>
        </div>
      </div>
      
      {/* Luminous Effects CSS */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; box-shadow: 0 0 10px #00D9FF; }
          50% { opacity: 1; box-shadow: 0 0 20px #00D9FF, 0 0 30px #00D9FF; }
        }
        
        @keyframes pulse-glow-delay {
          0%, 100% { opacity: 0.3; box-shadow: 0 0 10px #00D9FF; }
          50% { opacity: 1; box-shadow: 0 0 20px #00D9FF, 0 0 30px #00D9FF; }
        }
        
        @keyframes float-glow {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
        }
        
        @keyframes float-glow-delay {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-15px) scale(1.1); opacity: 1; }
        }
        
        @keyframes float-glow-delay-2 {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-25px) scale(1.3); opacity: 1; }
        }
        
        @keyframes blink-fast {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes blink-medium {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes blink-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes scan-vertical-delay {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes scan-horizontal-delay {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        
        @keyframes pulse-ring-delay {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        
        @keyframes data-stream {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        
        @keyframes data-stream-delay {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow-delay {
          animation: pulse-glow-delay 3s ease-in-out infinite 1.5s;
        }
        
        .animate-float-glow {
          animation: float-glow 4s ease-in-out infinite;
        }
        
        .animate-float-glow-delay {
          animation: float-glow-delay 5s ease-in-out infinite 1s;
        }
        
        .animate-float-glow-delay-2 {
          animation: float-glow-delay-2 6s ease-in-out infinite 2s;
        }
        
        .animate-blink-fast {
          animation: blink-fast 1s ease-in-out infinite;
        }
        
        .animate-blink-medium {
          animation: blink-medium 2s ease-in-out infinite;
        }
        
        .animate-blink-slow {
          animation: blink-slow 3s ease-in-out infinite;
        }
        
        .animate-scan-vertical {
          animation: scan-vertical 8s linear infinite;
        }
        
        .animate-scan-vertical-delay {
          animation: scan-vertical-delay 8s linear infinite 4s;
        }
        
        .animate-scan-horizontal {
          animation: scan-horizontal 10s linear infinite;
        }
        
        .animate-scan-horizontal-delay {
          animation: scan-horizontal-delay 10s linear infinite 5s;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 4s ease-in-out infinite;
        }
        
        .animate-pulse-ring-delay {
          animation: pulse-ring-delay 4s ease-in-out infinite 2s;
        }
        
        .animate-data-stream {
          animation: data-stream 6s linear infinite;
        }
        
        .animate-data-stream-delay {
          animation: data-stream-delay 6s linear infinite 3s;
        }
        
        .shadow-glow-cyan {
          box-shadow: 0 0 10px #00D9FF, 0 0 20px #00D9FF;
        }
        
        .shadow-glow-cyan-strong {
          box-shadow: 0 0 15px #00D9FF, 0 0 30px #00D9FF, 0 0 45px #00D9FF;
        }
      `}</style>
    </footer>
  );
}
