'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid, StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { Product } from '@/types'
import { formatPrice } from '@/lib/data'

interface ProductCardProps {
  product: Product
  className?: string
  priority?: boolean // Add priority prop for featured items
}

export default function ProductCard({ product, className = '', priority = false }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(quantity + delta, product.stockQuantity))
    setQuantity(newQuantity)
  }

  const handleAddToCart = () => {
    // TODO: Add to cart functionality
    console.log(`Added ${quantity} of ${product.name} to cart`)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <StarIcon className="h-4 w-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <StarIconSolid className="h-4 w-4 text-yellow-400" />
          </div>
        </div>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      )
    }

    return stars
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden group">
        {!imageError ? (
          <Image
            src={product.images[0].url}
            alt={product.images[0].alt}
            fill
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true)
              setImageLoaded(false)
            }}
            loading={priority ? "eager" : "lazy"} // Use eager loading for priority images
            priority={priority} // Add priority for featured images
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7+Ka9pn0LubJw4kqsnL3Xu7zxKrJ5bSgqTJkPrqd/OQR6dqjPXmZaVFz5PlVXnlGE6cYwQRyXdOKU+NqZGV3fYDz9J5+5fqxh6n/xAAUEQEAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8AUn//xAAUEQEAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8AUn//2Q=="
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 font-medium">{product.name}</p>
            </div>
          </div>
        )}
        
        {/* Loading placeholder */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="animate-pulse flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
              <div className="text-gray-400 text-xs text-center px-4 max-w-full truncate">
                Loading...
              </div>
            </div>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
        >
          {isWishlisted ? (
            <HeartIconSolid className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>

        {/* Discount Tags */}
        {product.discount && (
          <div className="absolute top-3 left-3 space-y-1">
            <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded">
              {product.discount.includes('Buy 6') ? 'Buy 6, Get 3% OFF' : product.discount}
            </span>
            {product.discount.includes('Buy 3') && (
              <span className="block bg-blue-600 text-white text-xs px-2 py-1 rounded">
                Buy 3, Get 1% OFF
              </span>
            )}
          </div>
        )}

        {/* New/Featured Badge */}
        {(product.isNewArrival || product.isFeatured || product.isBackInStock) && (
          <div className="absolute bottom-3 left-3">
            {product.isNewArrival && (
              <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}
            {product.isBackInStock && (
              <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
                Back in Stock
              </span>
            )}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
        
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating || 0)}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviewCount || 0} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-2 py-1 text-gray-600 hover:text-gray-900 transition-colors"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-3 py-1 text-sm font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-2 py-1 text-gray-600 hover:text-gray-900 transition-colors"
              disabled={quantity >= product.stockQuantity}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stockQuantity === 0}
          className={`w-full py-2 px-4 text-sm font-medium rounded transition-colors duration-200 ${
            product.stockQuantity > 0
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.stockQuantity > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}
        </button>
      </div>
    </div>
  )
} 