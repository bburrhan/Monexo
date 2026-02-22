import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Shield, Mail } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface PrivacyPageProps {
  language: string;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  useEffect(() => {
    // Update document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update page title
    if (t) {
      document.title = `${t.privacy.title} - Monexo`;
    }
    
    // Track page view for Google Analytics
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'G-KQQWE47RHF', {
        page_title: t ? `${t.privacy.title} - Monexo` : 'Privacy Policy - Monexo',
        page_location: window.location.href,
        page_path: `/${language}/privacy`
      });
    }
  }, [language, isRTL, t]);

  if (loading || !t) {
    return (
      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
        <SEOHead language={language} />
        <Header language={language} />
        
        <main className="pt-16">
          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-gray-300 rounded mr-3"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8 animate-pulse">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="mb-8">
                    <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer language={language} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
      <SEOHead language={language} />
      <Helmet>
        <meta property="og:title" content="Monexo AI Privacy Policy" />
        <meta property="og:description" content="Learn how we collect, use, and protect your data. Read our commitment to transparency and trust." />
        <meta property="og:url" content="https://monexo.ai/en/privacy" />
        <meta property="og:image" content="https://res.cloudinary.com/drr0qosem/image/upload/v1765550071/Screenshot_2025-12-12_at_17.30.13_r1jdo5.png" />
      </Helmet>
      <Header language={language} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-gray-50">
          <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
            <div className={`flex items-center justify-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Shield size={32} className={`text-blue-600 ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <h1 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
                {t.privacy.title}
              </h1>
            </div>
            <p className={`text-lg text-gray-600 text-center ${isRTL ? 'text-right sm:text-center' : ''}`}>
              {t.privacy.effectiveDate}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-8">
                <h2 className={`text-2xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.intro.title}
                </h2>
                <p className={`text-gray-700 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.intro.description}
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.informationWeCollect.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.informationWeCollect.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* How We Use */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.howWeUse.title}
                </h3>
                <p className={`text-gray-700 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.howWeUse.intro}
                </p>
                <div className={`space-y-2 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.howWeUse.content.map((item, index) => (
                    <p key={index} className={`${isRTL ? 'pr-4' : 'pl-4'}`}>• {item}</p>
                  ))}
                </div>
              </div>

              {/* Sharing Information */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.sharingInformation.title}
                </h3>
                <p className={`text-gray-700 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.sharingInformation.intro}
                </p>
                <div className={`space-y-2 text-gray-700 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.sharingInformation.content.map((item, index) => (
                    <p key={index} className={`${isRTL ? 'pr-4' : 'pl-4'}`}>• {item}</p>
                  ))}
                </div>
                <p className={`text-gray-700 font-semibold ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.sharingInformation.note}
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.dataSecurity.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.dataSecurity.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.dataRetention.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.dataRetention.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.yourRights.title}
                </h3>
                <p className={`text-gray-700 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.yourRights.intro}
                </p>
                <div className={`space-y-2 text-gray-700 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.yourRights.content.map((item, index) => (
                    <p key={index} className={`${isRTL ? 'pr-4' : 'pl-4'}`}>• {item}</p>
                  ))}
                </div>
                <p className={`text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.yourRights.contact}
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.cookies.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.cookies.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Changes */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.changes.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.privacy.sections.changes.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.privacy.sections.contact.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  <p>{t.privacy.sections.contact.content[0]}</p>
                  <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse justify-end' : ''}`}>
                    <Mail size={20} className="text-blue-600" />
                    <a href="mailto:privacy@monexo.ai" className="text-blue-600 hover:text-blue-700 font-medium">
                      privacy@monexo.ai
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default PrivacyPage;