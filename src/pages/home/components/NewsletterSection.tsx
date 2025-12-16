import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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
    <section className="py-20 bg-[#0A1E3D]">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20newsletter%20subscription%20concept%20digital%20communication%20email%20marketing%20technology%20network%20connection%20global%20information%20sharing%20professional%20business%20communication%20abstract%20background&width=1200&height=600&seq=newsletter-bg&orientation=landscape)'
        }}
      ></div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          Stay Connected
        </h2>
        <p className="text-base text-white/90 mb-5 leading-relaxed">
          Get the latest updates on our global resilience initiatives, upcoming events, and research findings delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-2" data-readdy-form>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-tech-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-tech-teal-600 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
        
        {submitMessage && (
          <p className={`text-sm mb-2 ${submitMessage.includes('Thank you') ? 'text-white' : 'text-red-200'}`}>
            {submitMessage}
          </p>
        )}
        
        <p className="text-white/70 text-xs mb-0">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
