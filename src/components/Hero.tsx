import React from 'react';
import { MessageCircle, Shield, Clock } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import ExchangeCalculator from './ExchangeCalculator';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  if (loading || !t) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-primary to-brand-dark">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-8 animate-pulse">
              <div className="space-y-6">
                <div className="h-12 bg-white/20 rounded w-3/4"></div>
                <div className="h-6 bg-white/20 rounded w-full"></div>
                <div className="h-6 bg-white/20 rounded w-2/3"></div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm h-96 bg-white/20 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 47, 147, 0.85), rgba(72, 128, 255, 0.85)), url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2)'
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-brand-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 ${isRTL ? 'rtl' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`text-white space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="space-y-6">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isRTL ? 'font-medium' : ''}`}>
                {t.hero.tagline}
              </h1>
              <p className={`text-xl sm:text-2xl text-brand-muted leading-relaxed ${isRTL ? 'font-normal' : ''}`}>
                {t.hero.subtitle}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap gap-6 pt-4 ${isRTL ? 'justify-end' : ''}`}>
              <div className={`flex items-center space-x-2 text-brand-muted ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Shield size={20} />
                <span className="text-sm font-medium">
                  {language === 'ur' ? 'محفوظ منتقلی' : 
                   language === 'hi' ? 'सुरक्षित स्थानांतरण' :
                   language === 'tl' ? 'Secure na Transfer' :
                   language === 'id' ? 'Transfer Aman' :
                   language === 'vi' ? 'Chuyển Tiền An Toàn' :
                   language === 'bn' ? 'নিরাপদ স্থানান্তর' :
                   'Secure Transfers'}
                </span>
              </div>
              <div className={`flex items-center space-x-2 text-brand-muted ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Clock size={20} />
                <span className="text-sm font-medium">{t.hero.instantTransfers}</span>
              </div>
              <div className={`flex items-center space-x-2 text-brand-muted ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <MessageCircle size={20} />
                <span className="text-sm font-medium">{t.hero.mobileFirst}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Exchange Calculator */}
          <div className={`flex justify-center lg:justify-end mt-8 lg:mt-0 ${isRTL ? 'lg:justify-start' : ''}`}>
            <ExchangeCalculator language={language} />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 ${isRTL ? 'rtl' : ''}`}>
        <div className={`text-center ${isRTL ? 'text-right sm:text-center' : ''}`}>
          <p className="text-sm text-brand-muted opacity-80">
            {t.hero.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;