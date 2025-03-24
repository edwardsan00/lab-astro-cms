import { getCategories } from "../mocks/categories";
import type { Category as MockCategory } from "../mocks/categories";

export type Category = MockCategory;

/**
 * Get all categories
 */
export function getAllCategories(): Category[] {
  return getCategories().categories;
}

/**
 * Get featured categories
 */
export function getFeaturedCategories(): Category[] {
  return getAllCategories().filter((category) => category.featured);
}

/**
 * Get a category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return getAllCategories().find((category) => category.slug === slug);
}

/**
 * Check if a category slug exists
 */
export function categorySlugExists(slug: string): boolean {
  return !!getCategoryBySlug(slug);
}
