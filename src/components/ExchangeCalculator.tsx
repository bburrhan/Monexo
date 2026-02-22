import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { getWhatsAppURL } from '../utils/whatsapp';

interface ExchangeCalculatorProps {
  language: string;
}

const ExchangeCalculator: React.FC<ExchangeCalculatorProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';
  const [amount, setAmount] = useState('500');
  const [currency, setCurrency] = useState('AED');
  const [fromCountry, setFromCountry] = useState('AE');
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>({});
  const [isLoadingRates, setIsLoadingRates] = useState(false);
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calculatorRef.current && !calculatorRef.current.contains(event.target as Node)) {
        setShowFromDropdown(false);
        setShowToDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Function to get default "to" country based on language
  const getDefaultToCountry = (lang: string): string => {
    const languageToCountryMap: { [key: string]: string } = {
      'ur': 'PK', // Urdu -> Pakistan
      'hi': 'IN', // Hindi -> India
      'bn': 'BD', // Bengali -> Bangladesh
      'id': 'ID', // Indonesian -> Indonesia
      'vi': 'VN', // Vietnamese -> Vietnam
      'tl': 'PH', // Tagalog -> Philippines
      'en': 'PH'  // English -> Philippines (default)
    };
    return languageToCountryMap[lang] || 'PH';
  };

  const [toCountry, setToCountry] = useState(getDefaultToCountry(language));

  // Update toCountry when language changes
  useEffect(() => {
    setToCountry(getDefaultToCountry(language));
  }, [language]);

  // Sender countries
  const fromCountries = [
    { code: 'AE', name: 'UAE', flag: '🇦🇪', currency: 'AED' },
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR' },
    { code: 'EU', name: 'All EU Countries', flag: '🇪🇺', currency: 'EUR' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', currency: 'GBP' }
  ];

  const toCountries = [
    { code: 'PH', name: 'Philippines', flag: '🇵🇭', currency: 'PHP', available: true },
    { code: 'PK', name: 'Pakistan', flag: '🇵🇰', currency: 'PKR', available: true },
    { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR', available: true },
    { code: 'BD', name: 'Bangladesh', flag: '🇧🇩', currency: 'BDT', available: true },
    { code: 'ID', name: 'Indonesia', flag: '🇮🇩', currency: 'IDR', available: true },
    { code: 'VN', name: 'Vietnam', flag: '🇻🇳', currency: 'VND', available: true }
  ];

  const currencies = [
    { code: 'AED', symbol: 'AED', flag: '🇦🇪' },
    { code: 'SAR', symbol: 'SAR', flag: '🇸🇦' },
    { code: 'EUR', symbol: 'EUR', flag: '🇪🇺' },
    { code: 'GBP', symbol: 'GBP', flag: '🇬🇧' }
  ];

  const fetchExchangeRates = async () => {
    setIsLoadingRates(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const apiUrl = `${supabaseUrl}/functions/v1/due-markets`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }

      const data = await response.json();

      const rates: { [key: string]: number } = {};

      if (data && data.rates && Array.isArray(data.rates)) {
        data.rates.forEach((item: any) => {
          if (item.pair && item.rate) {
            const key = item.pair.replace('/', '-');
            rates[key] = parseFloat(item.rate);
          }
        });

        console.log(`Loaded ${Object.keys(rates).length} exchange rates from database`);
        if (data.metadata) {
          console.log(`Last updated: ${data.metadata.lastUpdated}, Source: ${data.metadata.source}`);
        }
      }

      if (Object.keys(rates).length === 0) {
        throw new Error('No rates received from API');
      }

      setExchangeRates(rates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      setExchangeRates({});
    } finally {
      setIsLoadingRates(false);
    }
  };

  // Fetch rates on component mount and when currency/country changes
  useEffect(() => {
    fetchExchangeRates();
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchExchangeRates, 300000);
    return () => clearInterval(interval);
  }, []);

  const selectedToCountry = toCountries.find(c => c.code === toCountry);
  const selectedFromCountry = fromCountries.find(c => c.code === fromCountry);
  const selectedCurrency = currencies.find(c => c.code === currency);

  const exchangeKey = `${currency}-${selectedToCountry?.currency}`;
  const exchangeRate = exchangeRates[exchangeKey] || 0;
  const recipientAmount = parseFloat(amount) > 0 && exchangeRate > 0 ? Math.floor(parseFloat(amount) * exchangeRate).toString() : '0';

  const isAvailable = selectedToCountry?.available;

  if (loading || !t) {
    return (
      <div className="w-full max-w-sm mx-auto px-4">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 animate-pulse">
          <div className="text-center mb-4">
            <div className="h-6 bg-gray-300 rounded mx-auto mb-3 w-16"></div>
          </div>
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-14 bg-gray-300 rounded-xl"></div>
            ))}
            <div className="h-40 bg-gray-300 rounded-xl"></div>
            <div className="h-14 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto px-4" ref={calculatorRef}>
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100">
        <div className={`text-center mb-4 ${isRTL ? 'text-right' : ''}`}>
          <img 
            src="/Logo_Blue.svg" 
            alt="Monexo" 
            className="h-6 mx-auto mb-4"
          />
        </div>
        
        {/* Calculator Form */}
        <div className="space-y-4">
          {/* From Country Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFromDropdown(!showFromDropdown)}
              className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <label className={`text-sm font-medium text-gray-500 ${isRTL ? 'text-right' : ''}`}>
                {t.calculator.from}
              </label>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={`text-lg ${isRTL ? 'ml-3' : 'mr-3'}`}>{selectedFromCountry?.flag}</span>
                <span className="font-semibold text-gray-900">{selectedFromCountry?.name}</span>
                <ChevronDown size={20} className={`transform transition-transform ${showFromDropdown ? 'rotate-180' : ''} text-gray-400 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </div>
            </button>
            
            {showFromDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-20 max-h-60 overflow-y-auto">
                {fromCountries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setFromCountry(country.code);
                      setCurrency(country.currency);
                      setShowFromDropdown(false);
                    }}
                    className={`w-full flex items-center p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-gray-100 last:border-b-0 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
                  >
                    <div className="flex items-center w-full">
                      <span className={`text-lg ${isRTL ? 'ml-3' : 'mr-3'}`}>{country.flag}</span>
                      <span className="font-semibold text-gray-900">{country.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Amount Input with Currency Selector */}
          <div className="relative flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
            <label className={`text-sm font-medium text-gray-500 ${isRTL ? 'text-right' : ''}`}>
              {t.calculator.amount}
            </label>
            <div className="flex items-center">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`w-20 px-0 py-1 bg-transparent border-0 focus:ring-0 focus:outline-none text-lg font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-right'}`}
                placeholder="0"
                inputMode="numeric"
                min="1"
                max="999999"
              />
              <div className={`flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-base leading-none">{selectedCurrency?.flag}</span>
                <span className="font-semibold text-sm text-gray-800">{selectedCurrency?.symbol}</span>
              </div>
            </div>
          </div>

          {/* To Country Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowToDropdown(!showToDropdown)}
              className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <label className={`text-sm font-medium text-gray-500 ${isRTL ? 'text-right' : ''}`}>
                {t.calculator.to}
              </label>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={`text-lg ${isRTL ? 'ml-3' : 'mr-3'}`}>{selectedToCountry?.flag}</span>
                <span className="font-semibold text-gray-900">{selectedToCountry?.name}</span>
                <ChevronDown size={20} className={`transform transition-transform ${showToDropdown ? 'rotate-180' : ''} text-gray-400 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </div>
            </button>
            
            {showToDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-20 max-h-60 overflow-y-auto">
                {toCountries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setToCountry(country.code);
                      setShowToDropdown(false);
                    }}
                    className={`w-full flex items-center p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-gray-100 last:border-b-0 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
                  >
                    <div className="flex items-center w-full">
                      <span className={`text-lg ${isRTL ? 'ml-3' : 'mr-3'}`}>{country.flag}</span>
                      <span className="font-semibold text-gray-900">{country.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Results Section */}
          <div className="space-y-4 p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200">
            <div className={`flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-gray-600 font-medium">{t.calculator.exchangeRate}</span>
              <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {isLoadingRates && (
                  <div className="w-3 h-3 border border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                )}
                <span className="font-bold text-gray-900 text-sm">
                  {exchangeRate > 0 ? (
                    <>1 {currency} = {(Math.floor(exchangeRate * 100) / 100).toFixed(2)} {selectedToCountry?.currency}</>
                  ) : (
                    <>Loading...</>
                  )}
                </span>
              </div>
            </div>
            <div className={`flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-gray-600 font-medium">{t.calculator.transferFee}</span>
              <span className="font-bold text-green-600">{t.phoneApp.free}</span>
            </div>
            <hr className="border-gray-300 my-3" />
            <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-gray-700 font-medium text-base">{t.calculator.recipientGets}</span>
              <span className="font-bold text-2xl text-green-600">{selectedToCountry?.currency} {recipientAmount}</span>
            </div>
            <div className={`flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-gray-600 font-medium">{t.calculator.estimatedDelivery}</span>
              <span className="font-bold text-blue-600">2–5 min</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={getWhatsAppURL(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 bg-green-500 text-white hover:bg-green-600 active:bg-green-700 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <MessageCircle size={22} />
            <span className="text-lg">{t.hero.downloadButton}</span>
          </a>

          {/* Disclaimers */}
          <div className={`text-xs text-gray-500 space-y-2 pt-2 ${isRTL ? 'text-right' : ''}`}>
            <p className="leading-relaxed">{t.calculator.ratesDisclaimer}</p>
            <p>{t.calculator.termsDisclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCalculator;