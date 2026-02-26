import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface FAQProps {
  language: string;
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (loading || !t) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-8"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const faqs = [
    {
      question: t.faq.q1.question,
      answer: t.faq.q1.answer
    },
    {
      question: t.faq.q2.question,
      answer: t.faq.q2.answer
    },
    {
      question: t.faq.q3.question,
      answer: t.faq.q3.answer
    },
    {
      question: t.faq.q4.question,
      answer: t.faq.q4.answer
    },
    {
      question: t.faq.q5.question,
      answer: t.faq.q5.answer
    },
    {
      question: t.faq.q6.question,
      answer: t.faq.q6.answer
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
          <div className={`flex items-center justify-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <HelpCircle size={32} className={`text-brand-secondary ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
              {t.faq.title}
            </h2>
          </div>
          <p className={`text-xl text-gray-600 ${isRTL ? 'text-right sm:text-center' : ''}`}>
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors ${isRTL ? 'text-right flex-row-reverse' : ''}`}
              >
                <h3 className={`text-lg font-semibold text-gray-900 ${isRTL ? 'font-medium pl-4 pr-0' : 'pr-4'}`}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-brand-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-brand-lighter rounded-2xl p-8 border border-brand-light">
          <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
            {t.faq.support.title}
          </h3>
          <p className={`text-gray-600 mb-6 ${isRTL ? 'text-right' : ''}`}>
            {t.faq.support.subtitle}
          </p>
          <a
            href="mailto:support@monexo.ai"
            className="inline-flex items-center bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors font-medium shadow-lg"
          >
            {t.faq.support.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;