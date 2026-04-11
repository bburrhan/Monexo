import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Users, ArrowRight, ChevronDown, ChevronUp, CheckCircle, Star } from 'lucide-react';
import { getWhatsAppURL } from '../utils/whatsapp';
import { trackAddToCart } from '../utils/pixel';
import { trackWhatsAppClick, trackFAQExpand } from '../utils/analytics';

const WHATSAPP_MESSAGE_TOP = 'Hi! I want to start sending money with Monexo and get my referral code.';
const WHATSAPP_MESSAGE_BOTTOM = 'Hi! I came from the referral program page and I want to join Monexo.';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const faqs = [
  {
    question: 'How do I get my referral code?',
    answer: 'After your first transfer of 100 AED or more via Monexo on WhatsApp, our bot will automatically send you a personal referral code. No need to request it — it arrives instantly.',
  },
  {
    question: 'When does the 10 AED bonus get applied?',
    answer: 'Once your referred friend completes their first transfer of 100 AED or more, both of you receive 10 AED automatically added to your next transfer. No manual steps needed.',
  },
  {
    question: 'How many people can I invite?',
    answer: 'There is no limit. You can share your referral code with as many friends and family members as you like. Every successful referral earns you 10 AED.',
  },
  {
    question: 'What happens if my friend sends less than 100 AED?',
    answer: 'The 100 AED minimum transfer threshold must be met for both parties to receive the bonus. If the first transfer is below that amount, the referral reward will not be triggered.',
  },
  {
    question: 'Can I use the bonus on any destination country?',
    answer: 'Yes — the 10 AED bonus is added directly to your next transfer regardless of the destination country. It works for all countries Monexo supports.',
  },
];

const ReferralPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleTopCTA = () => {
    trackAddToCart({ contentName: 'Referral Program - Hero CTA' });
    trackWhatsAppClick({ location: 'referral_hero' });
    gtag_report_conversion();
    window.open(getWhatsAppURL(WHATSAPP_MESSAGE_TOP), '_blank', 'noopener,noreferrer');
  };

  const handleBottomCTA = () => {
    trackAddToCart({ contentName: 'Referral Program - Bottom CTA' });
    trackWhatsAppClick({ location: 'referral_bottom' });
    gtag_report_conversion();
    window.open(getWhatsAppURL(WHATSAPP_MESSAGE_BOTTOM), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/en">
              <img src="/Logo_Blue_new.png" alt="Monexo" className="h-8 w-auto hover:opacity-80 transition-opacity" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/en#how-it-works" className="text-gray-700 hover:text-brand-secondary transition-colors font-medium">How it Works</Link>
              <Link to="/en#countries" className="text-gray-700 hover:text-brand-secondary transition-colors font-medium">Countries</Link>
              <Link to="/en#pricing" className="text-gray-700 hover:text-brand-secondary transition-colors font-medium">Pricing</Link>
              <Link to="/en#faq" className="text-gray-700 hover:text-brand-secondary transition-colors font-medium">Help</Link>
            </nav>
            <button
              onClick={handleTopCTA}
              className="inline-flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-white bg-green-500 hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <WhatsAppIcon />
              <span>Start on WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 30, 100, 0.72), rgba(0, 70, 160, 0.62)), url(/pexels-mart-production-7481999.jpg)',
          }}
        />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-56 h-56 bg-brand-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2 mb-8">
            <Gift size={16} className="text-yellow-300" />
            <span className="text-sm font-semibold tracking-wide uppercase text-white/90">Refer & Earn Program</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Invite a Friend,<br />
            <span className="text-yellow-300">Both of You Earn 10 AED</span>
          </h1>

          <p className="text-xl sm:text-2xl text-brand-muted leading-relaxed mb-10 max-w-2xl mx-auto">
            Share your unique referral code with friends and family. When they complete their first transfer, you both get 10 AED added to your next transfer, automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleTopCTA}
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <WhatsAppIcon />
              <span>Get Started on WhatsApp</span>
            </button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Minimum transfer of 100 AED required to qualify. No cap on referrals.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-500">Three simple steps, we handle everything automatically.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector lines (desktop) */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-brand-light z-0" />

            {[
              {
                step: '01',
                icon: <CheckCircle size={28} className="text-brand-secondary" />,
                title: 'Transfer 100+ AED',
                description: 'Complete your first money transfer of 100 AED or more via Monexo on WhatsApp. Our bot will immediately send you your personal referral code.',
              },
              {
                step: '02',
                icon: <Users size={28} className="text-brand-secondary" />,
                title: 'Share Your Code',
                description: 'Send your unique referral code to friends and family. They enter it when they start their first transfer through Monexo.',
              },
              {
                step: '03',
                icon: <Gift size={28} className="text-brand-secondary" />,
                title: 'Both Earn 10 AED',
                description: 'When your friend completes a transfer of 100 AED or more, both of you receive 10 AED automatically added to your next transfer.',
              },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow p-8">
                <div className="w-14 h-14 bg-brand-lighter rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase mb-2">Step {item.step}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
                {i < 2 && (
                  <div className="md:hidden mt-6">
                    <ArrowRight size={24} className="text-brand-light mx-auto rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Rewards</h2>
            <p className="text-xl text-gray-500">Every successful referral puts money back in both wallets.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white text-center shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-yellow-300" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-2">You Earn</p>
              <p className="text-6xl font-bold text-yellow-300 mb-2">10 AED</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Added automatically to your next transfer when your friend completes 100+ AED.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-8 text-white text-center shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-100 mb-2">Your Friend Earns</p>
              <p className="text-6xl font-bold text-white mb-2">10 AED</p>
              <p className="text-white/80 text-sm leading-relaxed">
                They also get 10 AED on their next transfer as a welcome bonus for joining.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <p className="text-gray-600 leading-relaxed">
              The 10 AED bonus is applied directly to your next transfer — meaning your recipient receives more money at no extra cost to you. There is no limit to how many friends you can refer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-500">Everything you need to know about the referral program.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <button
                  onClick={() => {
                    const nextIndex = openIndex === index ? null : index;
                    setOpenIndex(nextIndex);
                    if (nextIndex !== null) {
                      trackFAQExpand({ question_index: index, section: 'referral' });
                    }
                  }}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-brand-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/15 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Gift size={40} className="text-yellow-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Referring Today
          </h2>
          <p className="text-xl text-brand-muted mb-10 max-w-xl mx-auto leading-relaxed">
            Transfer money with Monexo and unlock your referral code. Every friend you invite earns you both 10 AED.
          </p>
          <button
            onClick={handleBottomCTA}
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl"
          >
            <WhatsAppIcon />
            <span>Invite Friends on WhatsApp</span>
          </button>
          <p className="mt-6 text-sm text-white/50">
            No signup required. Just open WhatsApp and start.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <img src="/Logo_Blue_new.png" alt="Monexo" className="h-7 w-auto filter brightness-0 invert mx-auto mb-4 opacity-60" />
          <p className="text-sm">© {new Date().getFullYear()} Monexo. All rights reserved.</p>
          <p className="text-sm">Monexo OÜ — Harju maakond, Kesklinna linnaosa, Ahtri tn 12, 15551, Tallinn, Estonia</p>
          <div className="flex items-center justify-center space-x-4 text-sm pt-2">
            <Link to="/en/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link to="/en/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-gray-700">|</span>
            <Link to="/en" className="hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReferralPage;
