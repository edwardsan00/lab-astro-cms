import { getProducts } from "../mocks/products";
import type { Product as MockProduct } from "../mocks/products";

export type Product = MockProduct;

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return getProducts();
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((product) => product.isFeatured);
}

/**
 * Get sale products
 */
export function getSaleProducts(): Product[] {
  return getAllProducts().filter(
    (product) => product.isSale || product.originalPrice
  );
}

/**
 * Get new products
 */
export function getNewProducts(): Product[] {
  return getAllProducts().filter((product) => product.isNew);
}

/**
 * Get a product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((product) => product.slug === slug);
}

/**
 * Get products by category slug
 */
export function getProductsByCategorySlug(categorySlug: string): Product[] {
  return getAllProducts().filter(
    (product) => product.categorySlug === categorySlug
  );
}

/**
 * Get products by category slugs (multiple categories)
 */
export function getProductsByCategorySlugs(categorySlugs: string[]): Product[] {
  return getAllProducts().filter((product) =>
    categorySlugs.includes(product.categorySlug)
  );
}

/**
 * Get related products for a specific product (same category, excluding the product itself)
 */
export function getRelatedProducts(productSlug: string, limit = 4): Product[] {
  const product = getProductBySlug(productSlug);
  if (!product) return [];

  return getAllProducts()
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
    )
    .slice(0, limit);
}

/**
 * Check if a product slug exists
 */
export function productSlugExists(slug: string): boolean {
  return !!getProductBySlug(slug);
}
