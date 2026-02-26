import React from 'react';
import { Shield, FileCheck, Award } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface SecurityProps {
  language: string;
}

const Security: React.FC<SecurityProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  if (loading || !t) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
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

  const features = [
    {
      icon: Shield,
      title: t.security.encryption.title,
      description: t.security.encryption.description,
      color: 'bg-brand-secondary',
      bgColor: 'bg-brand-lighter',
      textColor: 'text-brand-secondary'
    },
    {
      icon: FileCheck,
      title: t.security.compliance.title,
      description: t.security.compliance.description,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: Award,
      title: t.security.partners.title,
      description: t.security.partners.description,
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
          <div className={`flex items-center justify-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Shield size={32} className={`text-brand-secondary ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
              {t.security.title}
            </h2>
          </div>
          <p className={`text-xl text-gray-600 ${isRTL ? 'text-right sm:text-center' : ''}`}>
            {t.security.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 ${isRTL ? 'mr-auto' : ''}`}>
                  <Icon size={32} className={feature.textColor} />
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;