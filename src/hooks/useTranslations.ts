import { useState, useEffect } from 'react';
import { Translations } from '../types/language';

export const useTranslations = (language: string) => {
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Dynamic import based on language code
        const translationModule = await import(`../data/translations/${language}.ts`);
        setTranslations(translationModule[language]);
      } catch (err) {
        console.error(`Failed to load translations for language: ${language}`, err);
        
        // Fallback to English if the requested language fails to load
        try {
          const fallbackModule = await import('../data/translations/en.ts');
          setTranslations(fallbackModule.en);
          setError(`Language ${language} not found, using English as fallback`);
        } catch (fallbackErr) {
          console.error('Failed to load fallback English translations', fallbackErr);
          setError('Failed to load translations');
        }
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  return { t: translations, loading, error };
};