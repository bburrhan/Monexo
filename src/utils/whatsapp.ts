export const WHATSAPP_NUMBER = '+12083618992';

export function getWhatsAppURL(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
