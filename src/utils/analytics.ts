const GA4_ID = 'G-KQQWE47RHF';

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
    window.gtag('event', eventName, {
      send_to: GA4_ID,
      ...params,
    });
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

  trackEvent('generate_lead', {
    event_category: 'conversion',
    location: params.location,
    language: params.language,
    currency: params.currency,
    value: params.transfer_amount ?? 0,
  });

  trackEvent('begin_checkout', {
    event_category: 'ecommerce',
    location: params.location,
    currency: params.currency ?? 'AED',
    value: params.transfer_amount ?? 0,
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

  if (params.field === 'to_country' && params.to_country) {
    trackEvent('select_item', {
      event_category: 'ecommerce',
      item_list_id: 'destination_countries',
      item_list_name: 'Destination Countries',
      item_id: params.to_country,
      item_name: params.to_country,
      item_category: 'destination_country',
    });
  }

  if (params.field === 'from_currency' && params.currency) {
    trackEvent('select_item', {
      event_category: 'ecommerce',
      item_list_id: 'source_currencies',
      item_list_name: 'Source Currencies',
      item_id: params.currency,
      item_name: params.currency,
      item_category: 'source_currency',
    });
  }
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

export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    percent_scrolled: depth,
  });
}

export function trackPageView(pagePath: string, pageTitle: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      send_to: GA4_ID,
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}
