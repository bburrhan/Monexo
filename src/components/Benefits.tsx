import React from 'react';
import { DollarSign, Zap, Heart } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface BenefitsProps {
  language: string;
}

const Benefits: React.FC<BenefitsProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  if (loading || !t) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-pulse">
                <div className="w-16 h-16 bg-gray-300 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const benefits = [
    {
      icon: DollarSign,
      title: t.benefits.zeroFees.title,
      description: t.benefits.zeroFees.description,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: Zap,
      title: t.benefits.fastTransfers.title,
      description: t.benefits.fastTransfers.description,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      icon: Heart,
      title: t.benefits.easyToUse.title,
      description: t.benefits.easyToUse.description,
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
            {t.benefits.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 ${isRTL ? 'mr-auto' : ''}`}>
                  <Icon size={32} className={benefit.textColor} />
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {benefit.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;