import React from 'react';
import { Shield, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { getWhatsAppURL } from '../utils/whatsapp';
import { trackAddToCart } from '../utils/pixel';
import { trackWhatsAppClick } from '../utils/analytics';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  if (loading || !t) {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-gray-700 rounded"></div>
                  ))}
                </div>
                <span className="text-sm">{language === 'en' ? 'Secure Platform' : 'محفوظ پلیٹ فارم'}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${isRTL ? 'rtl' : ''}`}>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
            <img
              src="/Logo_Blue_new.png"
              alt="Monexo"
              className={`h-8 w-auto filter brightness-0 invert ${isRTL ? 'mr-auto' : ''}`}
            />
            <p className={`text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t.footer.tagline}
            </p>
            <div className={`flex space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse justify-end' : ''}`}>
              <a href="https://www.instagram.com/monexoai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579607641266" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/monexo-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/Monexo_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className={isRTL ? 'text-right' : ''}>
            <h3 className={`text-lg font-semibold mb-4 ${isRTL ? 'font-medium' : ''}`}>{t.footer.sections.product.title}</h3>
            <ul className="space-y-3">
              <li><Link to={`/${language}#how-it-works`} className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.product.howItWorks}</Link></li>
              <li><Link to={`/${language}#pricing`} className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.product.pricing}</Link></li>
              <li><Link to={`/${language}#countries`} className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.product.countries}</Link></li>
              <li><Link to={`/${language}#calculator`} className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.product.exchangeRates}</Link></li>
              <li><Link to="/referral" className="text-gray-300 hover:text-white transition-colors">Refer &amp; Earn</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className={isRTL ? 'text-right' : ''}>
            <h3 className={`text-lg font-semibold mb-4 ${isRTL ? 'font-medium' : ''}`}>{t.footer.sections.support.title}</h3>
            <ul className="space-y-3">
              <li><a href="mailto:support@monexo.ai" className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.support.helpCenter}</a></li>
              <li><a href="mailto:support@monexo.ai" className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.support.contactUs}</a></li>
              <li><a href={getWhatsAppURL('Hi, I would like to track my transfer.')} target="_blank" rel="noopener noreferrer" onClick={() => { trackAddToCart({ contentName: 'Money Transfer' }); trackWhatsAppClick({ location: 'footer', language }); gtag_report_conversion(); }} className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.support.trackTransfer}</a></li>
              <li><a href="mailto:support@monexo.ai" className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.support.reportIssue}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={isRTL ? 'text-right' : ''}>
            <h3 className={`text-lg font-semibold mb-4 ${isRTL ? 'font-medium' : ''}`}>{t.footer.sections.legal.title}</h3>
            <ul className="space-y-3">
              <li><a href={`/${language}/privacy`} className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.legal.privacyPolicy}</a></li>
              <li><a href={`/${language}/terms`} className="text-gray-300 hover:text-white transition-colors">{t.footer.sections.legal.termsOfService}</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className={`flex items-center space-x-2 text-gray-300 bg-gray-800 px-4 py-2 rounded-lg ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <Shield size={20} />
              <span className="text-sm">
                {language === 'ur' ? 'محفوظ پلیٹ فارم' : 
                 language === 'hi' ? 'सुरक्षित प्लेटफॉर्म' :
                 language === 'tl' ? 'Secure na Platform' :
                 language === 'id' ? 'Platform Aman' :
                 language === 'vi' ? 'Nền Tảng An Toàn' :
                 language === 'bn' ? 'নিরাপদ প্ল্যাটফর্ম' :
                 'Secure Platform'}
              </span>
            </div>
            <div className={`flex items-center space-x-2 text-gray-300 bg-gray-800 px-4 py-2 rounded-lg ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <Award size={20} />
              <span className="text-sm">{t.footer.trustIndicators.licensed}</span>
            </div>
            <div className={`flex items-center space-x-2 text-gray-300 bg-gray-800 px-4 py-2 rounded-lg ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <Globe size={20} />
              <span className="text-sm">{t.footer.trustIndicators.countries}</span>
            </div>
          </div>

          <div className={`text-center text-gray-400 text-sm space-y-2 ${isRTL ? 'text-right' : ''}`}>
            <p>© {new Date().getFullYear()} Monexo. All rights reserved.</p>
            <p>
              Monexo OÜ<br />
              Harju maakond, Kesklinna linnaosa, Ahtri tn 12, 15551, Tallinn, Estonia
            </p>
            <p>
              {t.footer.compliance}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;