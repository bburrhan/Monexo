import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import SocialProof from '../components/SocialProof';
import Countries from '../components/Countries';
import Pricing from '../components/Pricing';
import Security from '../components/Security';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useTranslations } from '../hooks/useTranslations';

interface LanguagePageProps {
  language: string;
}

const LanguagePage: React.FC<LanguagePageProps> = ({ language }) => {
  // Ensure the language exists in translations, fallback to English
  const { t, loading } = useTranslations(language);
  const currentLanguage = language;
  const isRTL = currentLanguage === 'ur' || currentLanguage === 'ar';
  
  useEffect(() => {
    // Update document language and direction
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update page title
    if (t) {
      document.title = `Monexo - ${t.hero.tagline}`;
    }
    
    // Store current language in localStorage for consistency
    localStorage.setItem('monexo-language', currentLanguage);

    // Track page view for Google Analytics
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      if (t) {
        (window as any).gtag('config', 'G-KQQWE47RHF', {
          page_title: `Monexo - ${t.hero.tagline}`,
          page_location: window.location.href,
          page_path: `/${currentLanguage}`
        });
      }
    }
  }, [currentLanguage, isRTL, t]);

  if (loading) {
    return (
      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
        <SEOHead language={currentLanguage} />
        <Header language={currentLanguage} />
        <main>
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </main>
        <Footer language={currentLanguage} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
      <SEOHead language={currentLanguage} />
      <Header language={currentLanguage} />
      <main>
        <Hero language={currentLanguage} />
        <Benefits language={currentLanguage} />
        <HowItWorks language={currentLanguage} />
        <SocialProof language={currentLanguage} />
        <Countries language={currentLanguage} />
        <Pricing language={currentLanguage} />
        <Security language={currentLanguage} />
        <FAQ language={currentLanguage} />
      </main>
      <Footer language={currentLanguage} />
    </div>
  );
};

export default LanguagePage;