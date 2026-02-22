import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { FileText, Mail } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { useEffect } from 'react';

interface TermsPageProps {
  language: string;
}

const TermsPage: React.FC<TermsPageProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  useEffect(() => {
    // Update document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update page title
    if (t) {
      document.title = `${t.terms.title} - Monexo`;
    }
    
    // Track page view for Google Analytics
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'G-KQQWE47RHF', {
        page_title: t ? `${t.terms.title} - Monexo` : 'Terms & Conditions - Monexo',
        page_location: window.location.href,
        page_path: `/${language}/terms`
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
      <Header language={language} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-gray-50">
          <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
            <div className={`flex items-center justify-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <FileText size={32} className={`text-blue-600 ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <h1 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
                {t.terms.title}
              </h1>
            </div>
            <p className={`text-lg text-gray-600 text-center ${isRTL ? 'text-right sm:text-center' : ''}`}>
              {t.terms.effectiveDate}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
            <div className="prose prose-lg max-w-none">
              
              {/* Welcome */}
              <div className="mb-8">
                <h2 className={`text-2xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.welcome.title}
                </h2>
                <p className={`text-gray-700 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.welcome.description}
                </p>
              </div>

              {/* All sections */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.introduction.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.introduction.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.eligibility.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.eligibility.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.useOfServices.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.useOfServices.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.fees.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.fees.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.responsibilities.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.responsibilities.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.privacy.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.privacy.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.liability.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.liability.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.termination.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.termination.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.governingLaw.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  {t.terms.sections.governingLaw.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-medium' : ''}`}>
                  {t.terms.sections.contact.title}
                </h3>
                <div className={`space-y-4 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
                  <p>{t.terms.sections.contact.content[0]}</p>
                  <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse justify-end' : ''}`}>
                    <Mail size={20} className="text-blue-600" />
                    <a href="mailto:support@monexo.ai" className="text-blue-600 hover:text-blue-700 font-medium">
                      support@monexo.ai
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

export default TermsPage;