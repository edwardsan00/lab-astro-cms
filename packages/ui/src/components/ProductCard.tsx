import React from "react";
import { Rating } from "./Rating";

export interface ProductCardProps {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  isSale?: boolean;
  url: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviewCount,
  isNew = false,
  isSale = false,
  url,
  className = "",
}) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <a href={url} className={`group block ${className}`}>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {isNew && (
            <span className="rounded bg-blue-600 px-2 py-1 text-xs font-medium text-white">
              New
            </span>
          )}
          {isSale && (
            <span className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white">
              Sale
            </span>
          )}
          {discount > 0 && (
            <span className="rounded bg-green-600 px-2 py-1 text-xs font-medium text-white">
              {discount}% Off
            </span>
          )}
        </div>
      </div>

      <div className="mt-3">
        {category && <p className="text-sm text-gray-500">{category}</p>}
        <h3 className="mt-1 text-base font-medium text-gray-900 group-hover:text-blue-600">
          {name}
        </h3>
        <div className="mt-1 flex items-end">
          <p className="text-lg font-medium text-gray-900">
            ${price.toFixed(2)}
          </p>
          {originalPrice && (
            <p className="ml-2 text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </p>
          )}
        </div>

        {rating !== undefined && (
          <div className="mt-1 flex items-center">
            <Rating value={rating} />
            {reviewCount !== undefined && (
              <p className="ml-2 text-sm text-gray-500">({reviewCount})</p>
            )}
          </div>
        )}
      </div>
    </a>
  );
};
