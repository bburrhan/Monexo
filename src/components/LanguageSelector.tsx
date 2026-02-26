import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Globe } from 'lucide-react';
import { languages } from '../data/languages';

interface LanguageSelectorProps {
  currentLanguage: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const subPage = pathSegments.length > 1 ? pathSegments[1] : '';

    if (subPage) {
      navigate(`/${langCode}/${subPage}`);
    } else {
      navigate(`/${langCode}`);
    }

    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors border border-gray-200 focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
        aria-label="Select language"
      >
        <Globe size={16} />
        <span className="text-sm font-medium hidden sm:inline">{currentLang?.flag} {currentLang?.name}</span>
        <span className="text-sm font-medium sm:hidden">{currentLang?.flag}</span>
        <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center space-x-3 ${
                currentLanguage === language.code ? 'bg-brand-lighter text-brand-secondary' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;