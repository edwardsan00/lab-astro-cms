/**
 * Convert a string to a slug format
 * @param text The text to convert to slug
 * @returns A slugified string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

/**
 * Format a price as currency
 * @param price The price to format
 * @param currency The currency code (default: EUR)
 * @returns A formatted price string
 */
export function formatPrice(price: number, currency = "EUR"): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
  }).format(price);
}

/**
 * Calculate the discount percentage between original and current price
 * @param originalPrice The original price
 * @param currentPrice The current (discounted) price
 * @returns The discount percentage as an integer
 */
export function calculateDiscountPercentage(
  originalPrice: number,
  currentPrice: number
): number {
  if (
    originalPrice <= 0 ||
    currentPrice <= 0 ||
    originalPrice <= currentPrice
  ) {
    return 0;
  }
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

/**
 * Truncate a string to a specified length
 * @param str The string to truncate
 * @param length The max length (default: 100)
 * @returns The truncated string with ellipsis if needed
 */
export function truncateString(str: string, length = 100): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}
