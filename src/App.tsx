import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LanguagePage from './pages/LanguagePage';
import DownloadPage from './pages/DownloadPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ReferralPage from './pages/ReferralPage';
import { languages } from './data/languages';
import { trackPageView, trackScrollDepth } from './utils/analytics';

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);

  useEffect(() => {
    const milestones = [25, 50, 75, 90, 100];
    const fired = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);
      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackScrollDepth(m);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RouteTracker />
        <Routes>
          {/* Redirect root to English */}
          <Route path="/" element={<Navigate to="/en\" replace />} />
          
          {/* Language-specific routes */}
          {languages.map((language) => (
            <Route 
              key={language.code} 
              path={`/${language.code}`} 
              element={<LanguagePage language={language.code} />} 
            />
          ))}
          
          {/* Download app pages for each language */}
          {languages.map((language) => (
            <Route 
              key={`${language.code}-download`} 
              path={`/${language.code}/downloadapp`} 
              element={<DownloadPage language={language.code} />} 
            />
          ))}
          
          {/* Terms & Conditions pages for each language */}
          {languages.map((language) => (
            <Route 
              key={`${language.code}-terms`} 
              path={`/${language.code}/terms`} 
              element={<TermsPage language={language.code} />} 
            />
          ))}
          
          {/* Privacy Policy pages for each language */}
          {languages.map((language) => (
            <Route 
              key={`${language.code}-privacy`} 
              path={`/${language.code}/privacy`} 
              element={<PrivacyPage language={language.code} />} 
            />
          ))}
          
          {/* Referral program landing page */}
          <Route path="/referral" element={<ReferralPage />} />

          {/* Catch all other routes and redirect to English */}
          <Route path="*" element={<Navigate to="/en\" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;