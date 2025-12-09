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
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20corporate%20technology%20business%20trade%20innovation%20digital%20transformation%20professional%20office%20environment%20with%20advanced%20technology%20screens%20data%20visualization%20global%20business%20network%20connectivity%20futuristic%20workspace%20high-tech%20conference%20room%20with%20multiple%20displays%20showing%20business%20analytics%20and%20technological%20advancement&width=1920&height=1200&seq=footer-bg-corporate-tech&orientation=landscape)'
        }}
      />
      <div className="absolute inset-0 bg-gray-900/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Logo & Newsletter */}
          <div className="md:col-span-1">
            <a href="/#hero" className="flex items-center mb-4 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20nonprofit%20organization%20logo%2C%20LDII%20logo%20design%2C%20international%20development%20organization%20emblem%2C%20modern%20NGO%20logo%2C%20green%20and%20blue%20color%20scheme%2C%20circular%20logo%20design%2C%20global%20unity%20symbol&width=60&height=60&seq=ldii-logo-footer&orientation=squarish"
                alt="LDII Logo"
                className="w-12 h-12 mr-3"
              />
              <span className="text-xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>LDII</span>
            </a>
            <p className="text-white text-sm mb-6" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500 text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap text-sm disabled:opacity-50"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {submitMessage && (
                <p className={`text-sm mt-2 ${submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`} style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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
                <a href="/#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/local-programs#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Local Programs (Canada & Ontario)
                </a>
              </li>
              <li>
                <a href="/about#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/donate#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Donate Now
                </a>
              </li>
              <li>
                <a href="/events#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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
                <a href="/what-we-do/climate-action#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Climate Action & Mitigation
                </a>
              </li>
              <li>
                <a href="/what-we-do/poverty-eradication#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Poverty Eradication & Inclusive Growth
                </a>
              </li>
              <li>
                <a href="/what-we-do/sustainable-food#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Sustainable Food Systems
                </a>
              </li>
              <li>
                <a href="/what-we-do/global-health#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Global Health & Resilience
                </a>
              </li>
              <li>
                <a href="/what-we-do/digital-inclusion#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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
                <a href="/privacy-policy#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/accessibility#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="/faq#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="/sitemap#hero" className="hover:text-green-400 transition-colors cursor-pointer" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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
                <a href="tel:+14166604233" className="hover:text-green-400 transition-colors" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                  +1 (416) 660-4233
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Email:</p>
                <a href="mailto:info@ldiinitiatives.org" className="hover:text-green-400 transition-colors" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="https://youtube.com/@ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <i className="ri-youtube-fill text-xl"></i>
              </a>
              <a
                href="https://x.com/ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                aria-label="X (Twitter)"
              >
                <i className="ri-twitter-x-fill text-xl"></i>
              </a>
              <a
                href="https://instagram.com/ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/company/ldiinitiatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
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
    </footer>
  );
}
