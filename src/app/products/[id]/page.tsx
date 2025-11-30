'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { productsService } from '@/lib/api'
import { useCart } from '@/lib/hooks'
import { formatPrice } from '@/lib/data'
import { getProductImageUrls, isProductActive, calculateDiscount } from '@/lib/helpers'
import { toast } from 'sonner'
import type { Product } from '@/types/api'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const { addItem } = useCart()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState<'info' | 'reviews'>('info')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await productsService.getById(productId)
        setProduct(product)
      } catch (error) {
        console.error('Failed to fetch product:', error)
        toast.error('Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  const handleAddToCart = async () => {
    if (!product) return
    try {
      await addItem(product._id, quantity)
      toast.success('Added to cart!')
    } catch (error) {
      toast.error('Failed to add to cart')
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Link copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!product || !isProductActive(product)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/shop" className="text-black underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  const images = getProductImageUrls(product)
  const discount = product.comparePrice ? calculateDiscount(product.price, product.comparePrice) : 0
  const inStock = product.stock > 0

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-6">
          <Link href="/" className="text-gray-500 hover:text-black">Home</Link>
          <span className="text-gray-400">›</span>
          <Link href="/shop" className="text-gray-500 hover:text-black">Shop</Link>
          <span className="text-gray-400">›</span>
          <span className="text-black font-medium">{product.name}</span>
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square mb-4 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{discount}%
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Brand */}
            {product.brand && (
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">{product.brand}</p>
            )}

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.averageRating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.comparePrice && (
                <span className="text-xl text-gray-500 line-through">{formatPrice(product.comparePrice)}</span>
              )}
            </div>

            {/* Description Preview */}
            {product.description && (
              <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{product.description}</p>
            )}

            {/* Stock Status */}
            <div className="mb-6">
              {inStock ? (
                <p className="text-green-600 font-medium">✓ In Stock ({product.stock} available)</p>
              ) : (
                <p className="text-red-600 font-medium">✗ Out of Stock</p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 font-bold"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={!inStock}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 font-bold disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={!inStock}
                className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex items-center justify-center border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {isWishlisted ? (
                    <HeartIconSolid className="h-5 w-5 text-red-500 mr-2" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-gray-600 mr-2" />
                  )}
                  <span className="text-sm font-medium">Wishlist</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center justify-center border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ShareIcon className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>

            {/* Product Meta */}
            <div className="border-t pt-6 space-y-2 text-sm">
              {product.sku && (
                <p className="text-gray-600">
                  <span className="font-medium">SKU:</span> {product.sku}
                </p>
              )}
              {product.category && typeof product.category === 'object' && (
                <p className="text-gray-600">
                  <span className="font-medium">Category:</span>{' '}
                  <Link href={`/shop?category=${product.category.slug}`} className="text-black underline">
                    {product.category.name}
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-200">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'info'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'info' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>

                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Key Ingredients:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {product.ingredients.map((ingredient, i) => (
                        <li key={i} className="text-gray-700">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.skinType && product.skinType.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Suitable for:</h4>
                    <p className="text-gray-700">{product.skinType.join(', ')} skin</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-center py-12">
                <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
