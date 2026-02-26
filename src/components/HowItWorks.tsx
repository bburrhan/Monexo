import React from 'react';
import { MessageCircle, Edit, Send } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { getWhatsAppURL } from '../utils/whatsapp';

interface HowItWorksProps {
  language: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  if (loading || !t) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-8"></div>
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const steps = [
    {
      icon: MessageCircle,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      number: '1'
    },
    {
      icon: Edit,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      number: '2'
    },
    {
      icon: Send,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      number: '3'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
            {t.howItWorks.title}
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isRTL ? 'text-right sm:text-center' : ''}`}>
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className={`text-center ${isRTL ? 'text-right sm:text-center' : ''}`}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>
                  {/* Number positioned to the left for LTR, right for RTL */}
                  <div className={`absolute -top-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center ${isRTL ? '-right-2' : '-left-2'}`}>
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
                  {step.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right sm:text-center' : ''}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Simple CTA */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppURL(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all transform hover:scale-105 shadow-lg bg-green-500 hover:bg-green-600 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <MessageCircle size={24} />
            {t.hero.downloadButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;