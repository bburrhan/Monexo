const localeToCode: Record<string, string> = {
  en: 'en', 'en-us': 'en', 'en-gb': 'en', 'en-au': 'en', 'en-ca': 'en',
  hi: 'hi', 'hi-in': 'hi',
  ur: 'ur', 'ur-pk': 'ur', 'ur-in': 'ur',
  tl: 'tl', 'tl-ph': 'tl', fil: 'tl', 'fil-ph': 'tl',
  id: 'id', 'id-id': 'id',
  vi: 'vi', 'vi-vn': 'vi',
  bn: 'bn', 'bn-bd': 'bn', 'bn-in': 'bn',
};

const supportedCodes = new Set(['en', 'hi', 'ur', 'tl', 'id', 'vi', 'bn']);

export function detectDeviceLanguage(): string {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of langs) {
    const code = localeToCode[lang.toLowerCase()];
    if (code) return code;
    const base = localeToCode[lang.split('-')[0].toLowerCase()];
    if (base) return base;
  }
  return 'en';
}

export function isValidLanguageCode(code: string): boolean {
  return supportedCodes.has(code);
}
