import { useEffect, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: 'What is Livelihood Development International Initiatives (LDII)?',
      answer: 'LDII is a Canadian nonprofit based in Toronto. We strengthen communities in Ontario through local programmes and build practical partnerships between the Global North and the Global South. Our tagline sums it up: Local Impact, Global Partnerships.'
    },
    {
      category: 'General',
      question: 'Where does LDII work?',
      answer: 'Our office is at 3701 Chesswood Drive, Unit 315, Toronto. Local programmes run in Ontario. Internationally we work with partners in Africa and the wider Global South, including the Intergovernmental Authority on Development (IGAD), diplomatic missions and chambers of commerce.'
    },
    {
      category: 'General',
      question: 'What has LDII done so far?',
      answer: 'LDII organized the first COVID-19 Remembrance Parade and Candlelight Vigil in Toronto (October 1, 2023), convened the 1st International Post-COVID Conference with IGAD in Toronto (July 11–13, 2024) and the 2nd in Brampton (September 8–10, 2025), and hosts African delegations in Ontario. Our Impact page has the full record.'
    },
    {
      category: 'Programmes',
      question: 'What are LDII’s international focus areas?',
      answer: 'Six areas: climate resilience and environmental sustainability; mining, technology and innovation; trade, entrepreneurship and economic development; health and social resilience; food security and agriculture; and investment and economic partnerships. The International Focus page explains each one.'
    },
    {
      category: 'Programmes',
      question: 'What local programmes does LDII run?',
      answer: 'Six local programmes in Ontario: newcomer integration and settlement support; youth employment and skills; youth safety and crime prevention; youth wellbeing; community partnerships; and support for seniors. The Local Programmes page explains who can benefit and how.'
    },
    {
      category: 'Programmes',
      question: 'How can I take part in a programme?',
      answer: 'Email admin@ldiinitiatives.org or call +1 647 656 3026 and tell us a little about yourself or the person you are referring. We will point you to the right programme or partner.'
    },
    {
      category: 'Partnerships',
      question: 'How can my organization partner with LDII?',
      answer: 'We work with governments, diplomatic missions, businesses, universities, colleges and community organizations. Write to admin@ldiinitiatives.org with a short note on what you have in mind, or see the Partners page.'
    },
    {
      category: 'Partnerships',
      question: 'What is the Africa–Canada Mining & Technology Transfer Mission?',
      answer: 'A mission planned for June 2027, co-hosted with Thrive Tours Inc., that brings government and industry delegations from Kenya, Uganda, South Africa, Botswana and other African nations to Greater Sudbury and the Canadian Mining Expo in Timmins.'
    },
    {
      category: 'Support',
      question: 'How can I support LDII?',
      answer: 'You can make a pledge on our Donate page, volunteer, or partner with us. If you would like to give, email admin@ldiinitiatives.org and we will confirm the payment options with you. LDII is a Canadian nonprofit, not a registered charity, so gifts are not eligible for a charitable tax receipt.'
    },
    {
      category: 'Events',
      question: 'How do I hear about upcoming events?',
      answer: 'Upcoming conferences and delegations are listed on the Upcoming Events page. You can also subscribe to the newsletter at the bottom of every page, or follow LDII on social media.'
    },
    {
      category: 'Contact',
      question: 'How can I contact LDII?',
      answer: 'Call +1 647 656 3026 or email admin@ldiinitiatives.org. Our office is at 3701 Chesswood Drive, Unit 315, Toronto, ON M3J 2P6.'
    },
    {
      category: 'Contact',
      question: 'How can media contact LDII?',
      answer: 'Email admin@ldiinitiatives.org or call +1 647 656 3026, or use the Media Inquiries form.'
    }
  ];


  useEffect(() => {
    const id = 'ldii-faq-schema';
    document.getElementById(id)?.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [faqs]);

  const categories = ['all', 'General', 'Programmes', 'Partnerships', 'Support', 'Events', 'Contact'];

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about LDII, our programs, partnerships, and how you can get involved.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Questions' : category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300 border-b-2 border-transparent hover:border-[#3CCB7F]"
                >
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`ml-4 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <i className="ri-arrow-down-s-line text-2xl transition-colors duration-300 ${
                      openIndex === index ? 'text-[#3CCB7F]' : 'text-gray-400'
                    }"></i>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact#hero"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </a>
              <a
                href="mailto:admin@ldiinitiatives.org"
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
