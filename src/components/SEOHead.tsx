import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import { languages } from '../data/languages';

interface SEOHeadProps {
  language: string;
  subPath?: string;
}

const localeMap: Record<string, string[]> = {
  en: ['en', 'en-US'],
  hi: ['hi', 'hi-IN'],
  ur: ['ur', 'ur-PK'],
  tl: ['tl', 'tl-PH', 'fil-PH'],
  id: ['id', 'id-ID'],
  vi: ['vi', 'vi-VN'],
  bn: ['bn', 'bn-BD'],
};

const SEOHead: React.FC<SEOHeadProps> = ({ language, subPath = '' }) => {
  const { t, loading } = useTranslations(language);

  const basePath = subPath ? `/${subPath}` : '';
  const canonicalUrl = `https://monexo.ai/${language}${basePath}`;

  if (loading || !t) {
    return (
      <Helmet>
        <html lang={language} />
        <title>Monexo - Loading...</title>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Monexo",
    "description": "Zero\u2011fee remittances on WhatsApp. Fast, transparent and secure - processed through licensed financial partners.",
    "url": "https://monexo.ai/",
    "logo": "https://monexo.ai/Logo_Blue_new.png",
    "sameAs": [
      "https://wa.me/12083618992",
      "https://www.instagram.com/monexoai/",
      "https://www.facebook.com/profile.php?id=61579607641266",
      "https://www.linkedin.com/company/monexo-ai/",
      "https://x.com/Monexo_ai"
    ],
    "serviceType": "Remittance facilitation via licensed partners",
    "areaServed": ["Asia", "Africa", "Middle East", "Europe", "North America"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Money Transfer Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Money Transfer",
            "description": "Zero-fee international money transfers"
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>Send Money on WhatsApp - Always Free | Monexo</title>
      <meta name="description" content="Zero\u2011fee remittances on WhatsApp. Fast, transparent and secure - processed through licensed financial partners." />
      <meta name="keywords" content="remittance, money transfer, WhatsApp, zero fee, send money" />

      <meta property="og:title" content="Send Money on WhatsApp - Always Free | Monexo" />
      <meta property="og:description" content="Zero\u2011fee remittances on WhatsApp. Fast, transparent and secure - processed through licensed financial partners." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://monexo.ai/Logo_Blue_new.png" />
      <meta property="og:locale" content={localeMap[language]?.[0] ?? language} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Send Money on WhatsApp - Always Free | Monexo" />
      <meta name="twitter:description" content="Zero\u2011fee remittances on WhatsApp. Fast, transparent and secure - processed through licensed financial partners." />
      <meta name="twitter:image" content="https://monexo.ai/Logo_Blue_new.png" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      <link rel="canonical" href={canonicalUrl} />

      <link rel="alternate" hrefLang="x-default" href={`https://monexo.ai/en${basePath}`} />
      {languages.flatMap((lang) =>
        (localeMap[lang.code] ?? [lang.code]).map((locale) => (
          <link
            key={`${lang.code}-${locale}`}
            rel="alternate"
            hrefLang={locale}
            href={`https://monexo.ai/${lang.code}${basePath}`}
          />
        ))
      )}
    </Helmet>
  );
};

export default SEOHead;
