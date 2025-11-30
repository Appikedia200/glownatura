/**
 * Format price in Nigerian Naira
 */
export function formatPrice(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(price: number, comparePrice: number): number {
  if (!comparePrice || comparePrice <= price) return 0;
  return Math.round(((comparePrice - price) / comparePrice) * 100);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

