'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { productsService } from '@/lib/api'
import type { Product } from '@/types/api'
import { formatPrice } from '@/lib/data'
import Footer from '@/components/Footer'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

export default function ProductDetailClient({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await productsService.getBySlug(productId)
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    if (productId) {
      fetchProduct()
    }
  }, [productId])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-black hover:underline">
            Return to Shop
          </Link>
        </div>
      </main>
    )
  }

  const primaryImage = product.images.find(img => img.isPrimary)?.mediaId.cloudinaryUrl || product.images[0]?.mediaId.cloudinaryUrl || '/images/placeholder.png'

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-black">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <span className="mx-2">›</span>
          <span className="text-black">{product.name}</span>
        </nav>

        {/* Product Details */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-100 mb-4 relative">
                <Image
                  src={primaryImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-black mb-4 font-playfair">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.brand}</p>
              
              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-3xl font-bold text-black">{formatPrice(product.price)}</span>
                {product.comparePrice && product.comparePrice > product.price && (
                  <span className="text-xl text-gray-400 line-through">{formatPrice(product.comparePrice)}</span>
                )}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <button
                  disabled={product.stock === 0}
                  className="flex-1 bg-black text-white py-4 px-8 text-lg font-semibold hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  {product.stock > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-4 border border-gray-300 hover:border-black transition-colors"
                >
                  {isWishlisted ? (
                    <HeartIconSolid className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartIconOutline className="w-6 h-6" />
                  )}
                </button>
              </div>

              {/* Product Meta */}
              <div className="border-t border-gray-200 pt-6 space-y-2 text-sm">
                <p><span className="font-semibold">SKU:</span> {product.sku || 'N/A'}</p>
                <p><span className="font-semibold">Category:</span> {typeof product.category === 'string' ? product.category : product.category.name}</p>
                <p><span className="font-semibold">Tags:</span> {product.tags.join(', ') || 'None'}</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

