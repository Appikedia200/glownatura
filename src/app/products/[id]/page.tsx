'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { productsService } from '@/lib/api'
import { useCart } from '@/lib/hooks'
import type { Product } from '@/types/api'
import { formatPrice } from '@/lib/data'
import { StarIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid, StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Footer from '@/components/Footer'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addingToCart, setAddingToCart] = useState(false)
  
  const { addItem } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await productsService.getById(productId)
        setProduct(data)
      } catch (err: any) {
        setError(err.message || 'Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Product not found'}</p>
          <Link href="/shop" className="px-6 py-2 bg-black text-white hover:bg-gray-800">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
  const discount = product.comparePrice 
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : null

  const handleAddToCart = async () => {
    if (!product) return
    
    setAddingToCart(true)
    try {
      await addItem(product._id, quantity)
      // Show success message (you can add a toast notification here)
      alert(`Added ${quantity} ${product.name} to cart!`)
      // Optionally redirect to cart
      // router.push('/cart')
    } catch (err) {
      alert('Failed to add to cart. Please try again.')
    } finally {
      setAddingToCart(false)
    }
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIconSolid
          key={i}
          className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      )
    }
    return stars
  }

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-600 font-libre">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">›</span>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>

        {/* Product Detail Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]?.mediaId?.cloudinaryUrl || '/images/placeholder.png'}
                  alt={product.images[selectedImage]?.mediaId?.altText || product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {discount && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-sm px-3 py-1 rounded">
                      -{discount}% OFF
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-black' : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={img.mediaId?.cloudinaryUrl || '/images/placeholder.png'}
                        alt={img.mediaId?.altText || product.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="space-y-6">
              {/* Brand */}
              <div className="text-sm text-gray-600 uppercase tracking-wide font-montserrat">
                {product.brand}
              </div>

              {/* Product Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-black font-libre">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {renderStars(product.averageRating || 0)}
                </div>
                <span className="text-sm text-gray-600 font-libre">
                  ({product.reviewCount || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold text-black font-libre">
                    {formatPrice(product.price)}
                  </span>
                  {product.comparePrice && (
                    <span className="text-xl text-gray-400 line-through font-libre">
                      {formatPrice(product.comparePrice)}
                    </span>
                  )}
                </div>
                {discount && (
                  <p className="text-sm text-green-600 font-medium">
                    You save {formatPrice(product.comparePrice! - product.price)} ({discount}%)
                  </p>
                )}
              </div>

              {/* Stock Status */}
              <div>
                {product.stock > 0 ? (
                  <span className="inline-block text-sm text-green-600 font-medium">
                    ✓ In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="inline-block text-sm text-red-600 font-medium">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Short Description */}
              {product.description && (
                <p className="text-gray-700 font-libre leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Skin Types */}
              {product.skinType && product.skinType.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-black mb-2 font-libre">Skin Type:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.skinType.map((type, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full font-libre">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Skin Concerns */}
              {product.concerns && product.concerns.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-black mb-2 font-libre">Concerns:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.concerns.map((concern, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-sm text-blue-700 rounded-full font-libre">
                        {concern}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector + Add to Cart */}
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700 font-libre">Quantity:</span>
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-6 py-2 font-medium font-libre border-x-2 border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0 || addingToCart}
                    className={`flex-1 py-4 px-8 text-white font-medium rounded-lg transition-colors ${
                      product.stock > 0 && !addingToCart
                        ? 'bg-black hover:bg-gray-800'
                        : 'bg-gray-300 cursor-not-allowed'
                    } font-libre uppercase tracking-wide`}
                  >
                    {addingToCart ? 'Adding...' : product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-4 border-2 border-gray-300 rounded-lg hover:border-black transition-colors"
                  >
                    {isWishlisted ? (
                      <HeartIconSolid className="h-6 w-6 text-red-500" />
                    ) : (
                      <HeartIcon className="h-6 w-6 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <ShareIcon className="h-5 w-5" />
                <span className="font-libre">Share this product</span>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16 border-t pt-12">
            <div className="space-y-8">
              {/* Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4 font-libre">Ingredients</h2>
                  <p className="text-gray-700 font-libre leading-relaxed">
                    {product.ingredients.join(', ')}
                  </p>
                </div>
              )}

              {/* Specifications */}
              {(product.volume || product.weight) && (
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4 font-libre">Specifications</h2>
                  <dl className="grid grid-cols-2 gap-4 text-sm">
                    {product.volume && (
                      <>
                        <dt className="font-medium text-gray-700 font-libre">Volume:</dt>
                        <dd className="text-gray-600 font-libre">{product.volume}</dd>
                      </>
                    )}
                    {product.weight && (
                      <>
                        <dt className="font-medium text-gray-700 font-libre">Weight:</dt>
                        <dd className="text-gray-600 font-libre">{product.weight}</dd>
                      </>
                    )}
                  </dl>
                </div>
              )}

              {/* Reviews Section */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 font-libre">Customer Reviews</h2>
                <p className="text-gray-600 font-libre">Reviews coming soon...</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

