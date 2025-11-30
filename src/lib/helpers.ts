import { Product } from '@/types/api';

/**
 * Extract primary image URL from product
 * Backend returns objects with mediaId, not direct URLs
 */
export function getProductImageUrl(product: Product): string {
  if (!product.images || product.images.length === 0) {
    return '/images/placeholder.png';
  }
  
  // Find primary image or use first
  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];
  
  // Handle populated mediaId
  if (typeof primaryImage.mediaId === 'object' && primaryImage.mediaId?.cloudinaryUrl) {
    return primaryImage.mediaId.cloudinaryUrl;
  }
  
  // Handle unpopulated (just ID string)
  return '/images/placeholder.png';
}

/**
 * Get all product image URLs sorted by order
 */
export function getProductImageUrls(product: Product): string[] {
  if (!product.images || product.images.length === 0) {
    return ['/images/placeholder.png'];
  }
  
  return product.images
    .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
    .map(img => {
      if (typeof img.mediaId === 'object' && img.mediaId?.cloudinaryUrl) {
        return img.mediaId.cloudinaryUrl;
      }
      return '/images/placeholder.png';
    });
}

/**
 * Check if product is active
 */
export function isProductActive(product: Product): boolean {
  return product.status === 'active';
}

/**
 * Check if product is featured
 */
export function isProductFeatured(product: Product): boolean {
  return typeof product.featured === 'object' 
    ? product.featured?.isFeatured || false
    : Boolean(product.featured);
}

/**
 * Check if product is back in stock
 */
export function isProductBackInStock(product: Product): boolean {
  return typeof product.backInStock === 'object'
    ? product.backInStock?.isBackInStock || false
    : Boolean(product.backInStock);
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(price: number, comparePrice: number): number {
  if (!comparePrice || comparePrice <= price) return 0;
  return Math.round(((comparePrice - price) / comparePrice) * 100);
}

