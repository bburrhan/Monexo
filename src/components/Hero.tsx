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
    <section id="calculator" className="relative min-h-screen overflow-hidden">
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
                <span className="text-sm font-medium">Secure Transfer</span>
              </div>
              <div className={`flex items-center space-x-2 text-brand-muted ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Clock size={20} />
                <span className="text-sm font-medium">Instant Transfer</span>
              </div>
              <div className={`flex items-center space-x-2 text-brand-muted ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm font-medium">WhatsApp Only</span>
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