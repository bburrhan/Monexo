import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';

interface SEOHeadProps {
  language: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);

  if (loading || !t) {
    return (
      <Helmet>
        <html lang={language} />
        <title>Monexo - Loading...</title>
      </Helmet>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Monexo",
    "description": "Zero‑fee remittances on WhatsApp. Fast, transparent and secure - processed through licensed financial partners.",
    "url": "https://monexo.ai/",
    "logo": "https://monexo.ai/Logo_Blue.svg",
    "sameAs": [
      "https://wa.me/12083618992",
      "https://www.instagram.com/monexo",
      "https://www.facebook.com/monexo",
      "https://www.linkedin.com/company/monexo",
      "https://twitter.com/monexo"
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
      <meta name="description" content="Zero‑fee remittances on WhatsApp. Fast, transparent and secure - processed through licensed financial partners." />
      <meta name="keywords" content="remittance, money transfer, WhatsApp, zero fee, send money" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Send Money on WhatsApp - Always Free | Monexo" />
      <meta property="og:description" content="Zero‑fee remittances on WhatsApp. Fast, transparent and secure - processed through licensed financial partners." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://monexo.ai/" />
      <meta property="og:image" content="https://monexo.ai/Logo_Blue.svg" />
      <meta property="og:locale" content={language} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Send Money on WhatsApp - Always Free | Monexo" />
      <meta name="twitter:description" content="Zero‑fee remittances on WhatsApp. Fast, transparent and secure - processed through licensed financial partners." />
      <meta name="twitter:image" content="https://monexo.ai/Logo_Blue.svg" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://monexo.ai/${language}`} />
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href="https://monexo.ai/en" />
      <link rel="alternate" hrefLang="hi" href="https://monexo.ai/hi" />
      <link rel="alternate" hrefLang="ur" href="https://monexo.ai/ur" />
      <link rel="alternate" hrefLang="tl" href="https://monexo.ai/tl" />
      <link rel="alternate" hrefLang="id" href="https://monexo.ai/id" />
      <link rel="alternate" hrefLang="vi" href="https://monexo.ai/vi" />
      <link rel="alternate" hrefLang="bn" href="https://monexo.ai/bn" />
    </Helmet>
  );
};

export default SEOHead;