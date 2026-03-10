declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export function trackAddToCart(params?: {
  contentName?: string;
  currency?: string;
  value?: number;
}): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'AddToCart', {
      content_name: params?.contentName ?? 'Money Transfer',
      currency: params?.currency ?? 'USD',
      value: params?.value ?? 0,
    });
  }
}
