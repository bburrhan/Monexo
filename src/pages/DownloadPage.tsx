import React, { useEffect } from 'react';
import { Smartphone, Download, Star, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useTranslations } from '../hooks/useTranslations';

interface DownloadPageProps {
  language: string;
}

const DownloadPage: React.FC<DownloadPageProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    if (t) {
      document.title = `${t.downloadPage.hero.title} - Monexo`;
    }

    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      if (t) {
        (window as any).gtag('config', 'G-KQQWE47RHF', {
          page_title: `${t.downloadPage.hero.title} - Monexo`,
          page_location: window.location.href,
          page_path: `/${language}/downloadapp`
        });
      }

      (window as any).gtag('event', 'ads_conversion_BEGIN_CHECKOUT_1', {});
    }
  }, [language, isRTL, t]);

  if (loading || !t) {
    return (
      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
        <SEOHead language={language} />
        <Header language={language} />

        <main className="pt-16">
          <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-pulse">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-8"></div>
              <div className="h-12 bg-white/20 rounded mb-6 w-3/4 mx-auto"></div>
              <div className="h-6 bg-white/20 rounded mb-8 w-full mx-auto"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="h-16 w-48 bg-white/20 rounded-xl"></div>
                <div className="h-16 w-48 bg-white/20 rounded-xl"></div>
              </div>
            </div>
          </section>
        </main>

        <Footer language={language} />
      </div>
    );
  }

  const features = [
    {
      icon: Shield,
      title: t.downloadPage.features.security.title,
      description: t.downloadPage.features.security.description
    },
    {
      icon: Clock,
      title: t.downloadPage.features.speed.title,
      description: t.downloadPage.features.speed.description
    },
    {
      icon: Users,
      title: t.downloadPage.features.support.title,
      description: t.downloadPage.features.support.description
    }
  ];

  const benefits = [
    t.downloadPage.benefits.zeroFees,
    t.downloadPage.benefits.instantTransfer,
    t.downloadPage.benefits.bankLevel,
    t.downloadPage.benefits.multiLanguage,
    t.downloadPage.benefits.support247,
    t.downloadPage.benefits.easySetup
  ];

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
      <SEOHead language={language} />
      <Header language={language} />

      <main className="pt-16">
        <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-blue-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? 'rtl' : ''}`}>
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Smartphone size={40} className="text-white" />
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isRTL ? 'font-medium' : ''}`}>
              {t.downloadPage.hero.title}
            </h1>

            <p className={`text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto ${isRTL ? 'text-right sm:text-center' : ''}`}>
              {t.downloadPage.hero.subtitle}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="https://apps.apple.com/app/monexo"
                className={`inline-flex items-center justify-center space-x-3 px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg min-w-[200px] ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className={`text-left ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-xs opacity-75">{t.downloadPage.downloadOn}</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.monexo"
                className={`inline-flex items-center justify-center space-x-3 px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg min-w-[200px] ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className={`text-left ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-xs opacity-75">{t.downloadPage.getItOn}</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>
            </div>

            <div className={`flex items-center justify-center space-x-6 text-blue-100 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="text-sm">4.9 {t.downloadPage.rating}</span>
              </div>
              <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Download size={16} />
                <span className="text-sm">100K+ {t.downloadPage.downloads}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
            <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
              <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
                {t.downloadPage.features.title}
              </h2>
              <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isRTL ? 'text-right sm:text-center' : ''}`}>
                {t.downloadPage.features.subtitle}
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
                    <div className={`w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 ${isRTL ? 'mr-auto' : ''}`}>
                      <Icon size={32} className="text-blue-600" />
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

        <section className="py-20 bg-white">
          <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
            <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
              <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
                {t.downloadPage.benefits.title}
              </h2>
              <p className={`text-xl text-gray-600 ${isRTL ? 'text-right sm:text-center' : ''}`}>
                {t.downloadPage.benefits.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 bg-gray-50 rounded-xl ${isRTL ? 'flex-row-reverse space-x-reverse text-right' : ''}`}
                >
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? 'rtl' : ''}`}>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isRTL ? 'font-medium' : ''}`}>
              {t.downloadPage.cta.title}
            </h2>
            <p className={`text-xl text-blue-100 mb-8 ${isRTL ? 'text-right sm:text-center' : ''}`}>
              {t.downloadPage.cta.subtitle}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="https://apps.apple.com/app/monexo"
                className={`inline-flex items-center justify-center space-x-3 px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg min-w-[200px] ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className={`text-left ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-xs opacity-75">{t.downloadPage.downloadOn}</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.monexo"
                className={`inline-flex items-center justify-center space-x-3 px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg min-w-[200px] ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className={`text-left ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-xs opacity-75">{t.downloadPage.getItOn}</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default DownloadPage;
