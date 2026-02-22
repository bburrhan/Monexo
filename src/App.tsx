import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LanguagePage from './pages/LanguagePage';
import DownloadPage from './pages/DownloadPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import { languages } from './data/languages';

function App() {
  return (
    <HelmetProvider>
      <Router>
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
          
          {/* Catch all other routes and redirect to English */}
          <Route path="*" element={<Navigate to="/en\" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;