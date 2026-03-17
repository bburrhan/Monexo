import React from 'react';
import { Star, Users, TrendingUp, Award } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface SocialProofProps {
  language: string;
}

const SocialProof: React.FC<SocialProofProps> = ({ language }) => {
  const { t, loading } = useTranslations(language);
  const isRTL = language === 'ur' || language === 'ar';

  if (loading || !t) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 animate-pulse">
                <div className="flex items-center mb-4 space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-4 h-4 bg-gray-300 rounded"></div>
                  ))}
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
                <div className="border-t pt-4">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const testimonials = [
    {
      text: t.testimonials.testimonial1.text,
      author: t.testimonials.testimonial1.author,
      location: t.testimonials.testimonial1.location
    },
    {
      text: t.testimonials.testimonial2.text,
      author: t.testimonials.testimonial2.author,
      location: t.testimonials.testimonial2.location
    },
    {
      text: t.testimonials.testimonial3.text,
      author: t.testimonials.testimonial3.author,
      location: t.testimonials.testimonial3.location
    }
  ];

  const metrics = [
    {
      icon: Users,
      value: "10,000+",
      label: t.testimonials.metrics.users
    },
    {
      icon: TrendingUp,
      value: "PHP 20M+",
      label: t.testimonials.metrics.moneySent
    },
    {
      icon: Award,
      value: "4.8",
      label: t.testimonials.metrics.rating
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div className={`text-center mb-16 ${isRTL ? 'text-right sm:text-center' : ''}`}>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-medium' : ''}`}>
            {t.testimonials.title}
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isRTL ? 'text-right sm:text-center' : ''}`}>
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className={`text-center ${isRTL ? 'text-right sm:text-center' : ''}`}>
                <div className="w-16 h-16 bg-brand-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-brand-secondary" />
                </div>
                <div className={`text-3xl font-bold text-gray-900 mb-2 ${isRTL ? 'font-medium' : ''}`}>
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className={`text-gray-700 mb-4 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                "{testimonial.text}"
              </p>
              <div className={`border-t pt-4 ${isRTL ? 'text-right' : ''}`}>
                <div className={`font-semibold text-gray-900 ${isRTL ? 'font-medium' : ''}`}>
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;