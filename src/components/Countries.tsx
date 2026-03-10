import React from 'react';
import { Globe, Clock, MessageCircle } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { getWhatsAppURL } from '../utils/whatsapp';
import { trackAddToCart } from '../utils/pixel';

interface CountriesProps {
  language: string;
}

const Countries: React.FC<CountriesProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  if (loading || !t) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="space-y-4">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-300 rounded mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Define country names and currencies for each language
  const getCountryData = () => {
    switch (language) {
      case 'ur':
        return {
          sendingTitle: 'بھیجنے والے ممالک',
          receivingTitle: 'وصول کنندہ ممالک',
          sendingCountries: [
            { flag: '🇦🇪', name: 'متحدہ عرب امارات', currency: 'AED • درہم' },
            { flag: '🇸🇦', name: 'سعودی عرب', currency: 'SAR • ریال' },
            { flag: '🇪🇺', name: 'تمام یورپی یونین ممالک', currency: 'EUR • یورو' },
            { flag: '🇬🇧', name: 'برطانیہ', currency: 'GBP • پاؤنڈ' }
          ],
          receivingCountries: [
            { flag: '🇵🇭', name: 'فلپائن', currency: 'PHP • پیسو' },
            { flag: '🇵🇰', name: 'پاکستان', currency: 'PKR • روپیہ' },
            { flag: '🇮🇳', name: 'بھارت', currency: 'INR • روپیہ' },
            { flag: '🇧🇩', name: 'بنگلہ دیش', currency: 'BDT • ٹکا' },
            { flag: '🇮🇩', name: 'انڈونیشیا', currency: 'IDR • روپیہ' },
            { flag: '🇻🇳', name: 'ویتنام', currency: 'VND • ڈانگ' }
          ],
          sendingDesc: 'تمام خلیجی ممالک مقامی کرنسیوں کے ساتھ معاون',
          receivingDesc: 'تمام بڑے ایشیائی مقامات پر فوری منتقلی',
          ctaTitle: 'پیسے بھیجنے کے لیے تیار ہیں؟',
          ctaDesc: 'آج ہی اپنے پیاروں کو صفر فیس کے ساتھ پیسے بھیجنا شروع کریں',
          ctaButton: 'پیسے بھیجنا شروع کریں'
        };
      case 'hi':
        return {
          sendingTitle: 'भेजने वाले देश',
          receivingTitle: 'प्राप्त करने वाले देश',
          sendingCountries: [
            { flag: '🇦🇪', name: 'संयुक्त अरब अमीरात', currency: 'AED • दिरहम' },
            { flag: '🇸🇦', name: 'सऊदी अरब', currency: 'SAR • रियाल' },
            { flag: '🇪🇺', name: 'सभी यूरोपीय संघ देश', currency: 'EUR • यूरो' },
            { flag: '🇬🇧', name: 'यूनाइटेड किंगडम', currency: 'GBP • पाउंड' }
          ],
          receivingCountries: [
            { flag: '🇵🇭', name: 'फिलीपींस', currency: 'PHP • पेसो' },
            { flag: '🇵🇰', name: 'पाकिस्तान', currency: 'PKR • रुपया' },
            { flag: '🇮🇳', name: 'भारत', currency: 'INR • रुपया' },
            { flag: '🇧🇩', name: 'बांग्लादेश', currency: 'BDT • टका' },
            { flag: '🇮🇩', name: 'इंडोनेशिया', currency: 'IDR • रुपिया' },
            { flag: '🇻🇳', name: 'वियतनाम', currency: 'VND • डोंग' }
          ],
          sendingDesc: 'सभी जीसीसी देश स्थानीय मुद्राओं के साथ समर्थित',
          receivingDesc: 'सभी प्रमुख एशियाई गंतव्यों में तत्काल स्थानांतरण',
          ctaTitle: 'पैसे भेजने के लिए तैयार हैं?',
          ctaDesc: 'आज ही अपने प्रियजनों को शून्य शुल्क के साथ पैसे भेजना शुरू करें',
          ctaButton: 'पैसे भेजना शुरू करें'
        };
      case 'tl':
        return {
          sendingTitle: 'Mga Bansang Nagpapadala',
          receivingTitle: 'Mga Bansang Tumatanggap',
          sendingCountries: [
            { flag: '🇦🇪', name: 'United Arab Emirates', currency: 'AED • Dirham' },
            { flag: '🇸🇦', name: 'Saudi Arabia', currency: 'SAR • Riyal' },
            { flag: '🇪🇺', name: 'Lahat ng Bansang EU', currency: 'EUR • Euro' },
            { flag: '🇬🇧', name: 'United Kingdom', currency: 'GBP • Pound' }
          ],
          receivingCountries: [
            { flag: '🇵🇭', name: 'Pilipinas', currency: 'PHP • Peso' },
            { flag: '🇵🇰', name: 'Pakistan', currency: 'PKR • Rupee' },
            { flag: '🇮🇳', name: 'India', currency: 'INR • Rupee' },
            { flag: '🇧🇩', name: 'Bangladesh', currency: 'BDT • Taka' },
            { flag: '🇮🇩', name: 'Indonesia', currency: 'IDR • Rupiah' },
            { flag: '🇻🇳', name: 'Vietnam', currency: 'VND • Dong' }
          ],
          sendingDesc: 'Lahat ng GCC countries ay suportado kasama ang local currencies',
          receivingDesc: 'Instant transfers sa lahat ng major Asian destinations',
          ctaTitle: 'Ready na ba Kayong Magpadala ng Pera?',
          ctaDesc: 'Simulan ang pagpapadala ng pera sa inyong mga mahal sa buhay nang walang fees ngayon',
          ctaButton: 'Simulang Magpadala ng Pera'
        };
      case 'id':
        return {
          sendingTitle: 'Negara Pengirim',
          receivingTitle: 'Negara Penerima',
          sendingCountries: [
            { flag: '🇦🇪', name: 'Uni Emirat Arab', currency: 'AED • Dirham' },
            { flag: '🇸🇦', name: 'Arab Saudi', currency: 'SAR • Riyal' },
            { flag: '🇪🇺', name: 'Semua Negara UE', currency: 'EUR • Euro' },
            { flag: '🇬🇧', name: 'Britania Raya', currency: 'GBP • Pound' }
          ],
          receivingCountries: [
            { flag: '🇵🇭', name: 'Filipina', currency: 'PHP • Peso' },
            { flag: '🇵🇰', name: 'Pakistan', currency: 'PKR • Rupee' },
            { flag: '🇮🇳', name: 'India', currency: 'INR • Rupee' },
            { flag: '🇧🇩', name: 'Bangladesh', currency: 'BDT • Taka' },
            { flag: '🇮🇩', name: 'Indonesia', currency: 'IDR • Rupiah' },
            { flag: '🇻🇳', name: 'Vietnam', currency: 'VND • Dong' }
          ],
          sendingDesc: 'Semua negara GCC didukung dengan mata uang lokal',
          receivingDesc: 'Transfer instan ke semua tujuan utama Asia',
          ctaTitle: 'Siap Mengirim Uang?',
          ctaDesc: 'Mulai mengirim uang ke orang terkasih dengan biaya nol hari ini',
          ctaButton: 'Mulai Mengirim Uang'
        };
      case 'vi':
        return {
          sendingTitle: 'Các Quốc Gia Gửi',
          receivingTitle: 'Các Quốc Gia Nhận',
          sendingCountries: [
            { flag: '🇦🇪', name: 'Các Tiểu Vương Quốc Ả Rập Thống Nhất', currency: 'AED • Dirham' },
            { flag: '🇸🇦', name: 'Ả Rập Saudi', currency: 'SAR • Riyal' },
            { flag: '🇪🇺', name: 'Tất Cả Các Nước EU', currency: 'EUR • Euro' },
            { flag: '🇬🇧', name: 'Vương Quốc Anh', currency: 'GBP • Bảng Anh' }
          ],
          receivingCountries: [
            { flag: '🇵🇭', name: 'Philippines', currency: 'PHP • Peso' },
            { flag: '🇵🇰', name: 'Pakistan', currency: 'PKR • Rupee' },
            { flag: '🇮🇳', name: 'Ấn Độ', currency: 'INR • Rupee' },
            { flag: '🇧🇩', name: 'Bangladesh', currency: 'BDT • Taka' },
            { flag: '🇮🇩', name: 'Indonesia', currency: 'IDR • Rupiah' },
            { flag: '🇻🇳', name: 'Việt Nam', currency: 'VND • Dong' }
          ],
          sendingDesc: 'Tất cả các quốc gia GCC được hỗ trợ với tiền tệ địa phương',
          receivingDesc: 'Chuyển tiền tức thì đến tất cả các điểm đến chính ở châu Á',
          ctaTitle: 'Sẵn Sàng Gửi Tiền?',
          ctaDesc: 'Bắt đầu gửi tiền cho người thân với phí bằng không ngay hôm nay',
          ctaButton: 'Bắt Đầu Gửi Tiền'
        };
      case 'bn':
        return {
          sendingTitle: 'প্রেরণকারী দেশসমূহ',
          receivingTitle: 'গ্রহণকারী দেশসমূহ',
          sendingCountries: [
            { flag: '🇦🇪', name: 'সংযুক্ত আরব আমিরাত', currency: 'AED • দিরহাম' },
            { flag: '🇸🇦', name: 'সৌদি আরব', currency: 'SAR • রিয়াল' },
            { flag: '🇪🇺', name: 'সমস্ত ইইউ দেশসমূহ', currency: 'EUR • ইউরো' },
            { flag: '🇬🇧', name: 'যুক্তরাজ্য', currency: 'GBP • পাউন্ড' }
          ],
          receivingCountries: [
            { flag: '🇵🇭', name: 'ফিলিপাইন্স', currency: 'PHP • পেসো' },
            { flag: '🇵🇰', name: 'পাকিস্তান', currency: 'PKR • রুপি' },
            { flag: '🇮🇳', name: 'ভারত', currency: 'INR • রুপি' },
            { flag: '🇧🇩', name: 'বাংলাদেশ', currency: 'BDT • টাকা' },
            { flag: '🇮🇩', name: 'ইন্দোনেশিয়া', currency: 'IDR • রুপিয়া' },
            { flag: '🇻🇳', name: 'ভিয়েতনাম', currency: 'VND • ডং' }
          ],
          sendingDesc: 'সমস্ত জিসিসি দেশ স্থানীয় মুদ্রা সহ সমর্থিত',
          receivingDesc: 'সমস্ত প্রধান এশীয় গন্তব্যে তাৎক্ষণিক স্থানান্তর',
          ctaTitle: 'টাকা পাঠানোর জন্য প্রস্তুত?',
          ctaDesc: 'আজই আপনার প্রিয়জনদের কাছে শূন্য ফি দিয়ে টাকা পাঠানো শুরু করুন',
          ctaButton: 'টাকা পাঠানো শুরু করুন'
        };
      default: // English and others
        return {
          sendingTitle: 'Sending Countries',
          receivingTitle: 'Receiving Countries',
          sendingCountries: [
            { flag: '🇦🇪', name: 'United Arab Emirates', currency: 'AED • Dirham' },
            { flag: '🇸🇦', name: 'Saudi Arabia', currency: 'SAR • Riyal' },
            { flag: '🇪🇺', name: 'All EU Countries', currency: 'EUR • Euro' },
            { flag: '🇬🇧', name: 'United Kingdom', currency: 'GBP • Pound' }
          ],
          receivingCountries: [
            { flag: '🇵🇭', name: 'Philippines', currency: 'PHP • Peso' },
            { flag: '🇵🇰', name: 'Pakistan', currency: 'PKR • Rupee' },
            { flag: '🇮🇳', name: 'India', currency: 'INR • Rupee' },
            { flag: '🇧🇩', name: 'Bangladesh', currency: 'BDT • Taka' },
            { flag: '🇮🇩', name: 'Indonesia', currency: 'IDR • Rupiah' },
            { flag: '🇻🇳', name: 'Vietnam', currency: 'VND • Dong' }
          ],
          sendingDesc: 'All GCC countries supported with local currencies',
          receivingDesc: 'Instant transfers to all major Asian destinations',
          ctaTitle: 'Ready to Send Money?',
          ctaDesc: 'Start sending money to your loved ones with zero fees today',
          ctaButton: 'Start Sending Money'
        };
    }
  };

  const countryData = getCountryData();

  return (
    <section id="countries" className="py-20 bg-gray-50">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
          <div className={`flex items-center justify-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Globe size={32} className={`text-brand-secondary ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
              {t.countries.title}
            </h2>
          </div>
          <p className={`text-xl text-gray-600 ${isRTL ? 'text-right sm:text-center' : ''}`}>
            {t.countries.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Sending Countries */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-secondary">
            <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-3 h-3 bg-brand-secondary rounded-full animate-pulse mr-3"></div>
              <h3 className={`text-xl font-bold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
                {countryData.sendingTitle}
              </h3>
            </div>
            <div className="space-y-4 mb-4">
              {countryData.sendingCountries.map((country, index) => (
                <div key={index} className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <span className="text-xl">{country.flag}</span>
                  <div>
                    <span className="font-semibold text-gray-900">{country.name}</span>
                    <div className="text-sm text-gray-600">{country.currency}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className={`text-gray-600 ${isRTL ? 'text-right' : ''}`}>
              {countryData.sendingDesc}
            </p>
          </div>

          {/* Receiving Countries */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
            <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
              <h3 className={`text-xl font-bold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
                {countryData.receivingTitle}
              </h3>
            </div>
            <div className="space-y-4 mb-4">
              {countryData.receivingCountries.map((country, index) => (
                <div key={index} className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <span className="text-xl">{country.flag}</span>
                  <div>
                    <span className="font-semibold text-gray-900">{country.name}</span>
                    <div className="text-sm text-gray-600">{country.currency}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className={`text-gray-600 ${isRTL ? 'text-right' : ''}`}>
              {countryData.receivingDesc}
            </p>
          </div>
        </div>

        {/* Get Started CTA */}
        <div className="text-center bg-brand-lighter rounded-2xl p-8 border border-brand-light">
          <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
            {countryData.ctaTitle}
          </h3>
          <p className={`text-gray-600 mb-6 ${isRTL ? 'text-right sm:text-center' : ''}`}>
            {countryData.ctaDesc}
          </p>
          <a
            href={getWhatsAppURL(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAddToCart({ contentName: 'Money Transfer' })}
            className={`inline-flex items-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium shadow-lg ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <MessageCircle size={20} />
            <span>{countryData.ctaButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Countries;