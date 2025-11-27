'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import type { Product } from '@/types/api'
import { formatPrice } from '@/lib/data'

interface ProductCardProps {
  product: Product
  className?: string
  priority?: boolean
}

export default function ProductCard({ product, className = '', priority = false }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
  const imageUrl = primaryImage?.mediaId?.cloudinaryUrl || '/images/placeholder.png'
  const imageAlt = primaryImage?.mediaId?.altText || product.name

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(quantity + delta, product.stock))
    setQuantity(newQuantity)
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`)
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      )
    }
    return stars
  }

  const discount = product.comparePrice 
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : null

  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <Link href={`/products/${product._id}`} className="block">
        <div className="relative aspect-square overflow-hidden group">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          {isWishlisted ? (
            <HeartIconSolid className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>

        {discount && (
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </span>
          </div>
        )}

        {product.isNewArrival && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          </div>
        )}
        {product.isBackInStock && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
              Back in Stock
            </span>
          </div>
        )}
        </div>
      </Link>

      <div className="p-4">
        <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center space-x-1">
            {renderStars(product.averageRating || 0)}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviewCount || 0})
          </span>
        </div>

        <div className="mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>
        </div>

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
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-2 px-4 text-sm font-medium rounded transition-colors duration-200 ${
            product.stock > 0
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.stock > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}
        </button>
      </div>
    </div>
  )
}
