type GtagCommand = 'config' | 'event' | 'js' | 'set';

interface GA4EventParams {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag: (command: GtagCommand, target: string | Date, params?: GA4EventParams) => void;
    dataLayer: unknown[];
  }
}

export function trackEvent(eventName: string, params?: GA4EventParams): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackWhatsAppClick(params: {
  location: string;
  language?: string;
  currency?: string;
  transfer_amount?: number;
}): void {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: params.location,
    location: params.location,
    language: params.language,
    currency: params.currency,
    transfer_amount: params.transfer_amount,
  });
}

export function trackCalculatorInteraction(params: {
  field: 'amount' | 'from_currency' | 'to_country';
  currency?: string;
  to_country?: string;
  amount?: number;
}): void {
  trackEvent('calculator_interaction', {
    event_category: 'engagement',
    field: params.field,
    currency: params.currency,
    to_country: params.to_country,
    amount: params.amount,
  });
}

export function trackLanguageChange(fromLanguage: string, toLanguage: string): void {
  trackEvent('language_change', {
    event_category: 'engagement',
    from_language: fromLanguage,
    to_language: toLanguage,
  });
}

export function trackFAQExpand(params: {
  question_index: number;
  section: 'main' | 'referral';
}): void {
  trackEvent('faq_expand', {
    event_category: 'engagement',
    question_index: params.question_index,
    section: params.section,
  });
}

export function trackPageView(pagePath: string, pageTitle: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}
