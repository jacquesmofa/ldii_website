import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
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
    } catch {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section className="py-16 bg-[#0A1E3D] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00D9FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D9FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Side by side layout: Left = Partner, Right = Subscribe */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-stretch">
          {/* Partner with Us - Left */}
          <div className="flex-1 text-center lg:text-left lg:pr-12">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-5 mx-auto lg:mx-0">
              <i className="ri-team-line text-[#00D9FF] text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Partner with Us
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
              Join our global network of partners committed to building resilient communities and sustainable futures.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="/partners"
                className="bg-white text-[#0A1E3D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap shadow-lg"
              >
                Explore Partnerships
              </a>
              <a
                href="/contact"
                className="bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Vertical Divider - Only on desktop */}
          <div className="hidden lg:flex items-center justify-center px-8">
            <div className="w-px h-48 bg-white/20"></div>
          </div>

          {/* Stay Connected - Right */}
          <div className="flex-1 text-center lg:text-left lg:pl-12">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-5 mx-auto lg:mx-0">
              <i className="ri-mail-send-line text-[#00D9FF] text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Stay Connected
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
              Get the latest updates on our global resilience initiatives, upcoming events, and research findings.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00D9FF] text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#00D9FF] text-[#0A1E3D] px-6 py-3 rounded-lg font-semibold hover:bg-[#00c4e6] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {submitMessage && (
                <p className={`text-sm mt-2 ${submitMessage.includes('Thank you') ? 'text-[#00D9FF]' : 'text-red-300'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
            <p className="text-white/50 text-xs mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}