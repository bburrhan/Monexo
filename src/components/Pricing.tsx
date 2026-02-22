import React from 'react';
import { DollarSign, TrendingUp, CheckCircle } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface PricingProps {
  language: string;
}

const Pricing: React.FC<PricingProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  if (loading || !t) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center border-2 animate-pulse">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Define language-specific content
  const getPricingContent = () => {
    switch (language) {
      case 'ur':
        return {
          freeText: 'مفت',
          alwaysForever: 'ہمیشہ اور ہمیشہ کے لیے*',
          realTime: 'حقیقی وقت',
          transparent: '100% شفاف'
        };
      case 'hi':
        return {
          freeText: 'मुफ्त',
          alwaysForever: 'हमेशा और हमेशा के लिए*',
          realTime: 'वास्तविक समय',
          transparent: '100% पारदर्शी'
        };
      case 'tl':
        return {
          freeText: 'LIBRE',
          alwaysForever: 'Lagi at magpakailanman*',
          realTime: 'Real-time',
          transparent: '100% Transparent'
        };
      case 'id':
        return {
          freeText: 'GRATIS',
          alwaysForever: 'Selalu dan selamanya*',
          realTime: 'Waktu nyata',
          transparent: '100% Transparan'
        };
      case 'vi':
        return {
          freeText: 'MIỄN PHÍ',
          alwaysForever: 'Luôn luôn và mãi mãi*',
          realTime: 'Thời gian thực',
          transparent: '100% Minh bạch'
        };
      case 'bn':
        return {
          freeText: 'বিনামূল্যে',
          alwaysForever: 'সবসময় এবং চিরকালের জন্য*',
          realTime: 'রিয়েল-টাইম',
          transparent: '100% স্বচ্ছ'
        };
      default: // English
        return {
          freeText: 'FREE',
          alwaysForever: 'Always and forever*',
          realTime: 'Real-time',
          transparent: '100% Transparent'
        };
    }
  };

  const content = getPricingContent();

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
          <div className={`flex items-center justify-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <DollarSign size={32} className={`text-green-600 ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
              {t.pricing.title}
            </h2>
          </div>
          <p className={`text-xl text-gray-600 ${isRTL ? 'text-right sm:text-center' : ''}`}>
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Transfers */}
          <div className="bg-green-50 rounded-2xl p-8 text-center border-2 border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign size={32} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
              {t.pricing.transfers.title}
            </h3>
            <div className={`text-4xl font-bold text-green-600 mb-2 ${isRTL ? 'font-medium' : ''}`}>
              {content.freeText}
            </div>
            <p className={`text-gray-600 ${isRTL ? 'text-right sm:text-center' : ''}`}>
              {content.alwaysForever}
            </p>
          </div>

          {/* Exchange Rates */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center border-2 border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
              {t.pricing.rates.title}
            </h3>
            <div className={`text-lg font-semibold text-blue-600 mb-2 ${isRTL ? 'font-medium' : ''}`}>
              {content.realTime}
            </div>
            <p className={`text-gray-600 ${isRTL ? 'text-right sm:text-center' : ''}`}>
              {t.pricing.rates.description}
            </p>
          </div>

          {/* Guarantee */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-200">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
              {t.pricing.guarantee.title}
            </h3>
            <div className={`text-lg font-semibold text-gray-600 mb-2 ${isRTL ? 'font-medium' : ''}`}>
              {content.transparent}
            </div>
            <p className={`text-gray-600 ${isRTL ? 'text-right sm:text-center' : ''}`}>
              {t.pricing.guarantee.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;