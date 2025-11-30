'use client'

import { useCart } from '@/lib/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/data'
import { TrashIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/Footer'
import type { Product } from '@/types/api'

export default function CartPage() {
  const { cart, loading, updateItem, removeItem, itemCount } = useCart()

  if (loading && !cart) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    )
  }

  const isEmpty = !cart || cart.items.length === 0

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-gray-600 font-libre">
              <Link href="/" className="hover:text-black">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-black">Shopping Cart</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-black mb-8 font-libre">Shopping Cart</h1>

          {isEmpty ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="mb-6">
                <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-libre">Your cart is empty</h2>
              <p className="text-gray-600 mb-8 font-libre">Add some products to get started!</p>
              <Link
                href="/shop"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-libre uppercase tracking-wide"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.items.map((item) => {
                  const product = item.product as Product
                  const primaryImage = product.images?.find(img => img.isPrimary) || product.images?.[0]

                  return (
                    <div key={product._id} className="bg-white rounded-lg shadow-sm p-6 flex gap-6">
                      {/* Product Image */}
                      <Link href={`/products/${product._id}`} className="flex-shrink-0">
                        <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                          <Image
                            src={primaryImage?.mediaId?.cloudinaryUrl || '/images/placeholder.png'}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1">
                        <Link href={`/products/${product._id}`}>
                          <h3 className="text-lg font-medium text-black hover:text-gray-700 transition-colors font-libre">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 mt-1 font-libre">{product.brand}</p>
                        <p className="text-lg font-semibold text-black mt-2 font-libre">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(product._id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>

                        <div className="flex items-center border-2 border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateItem(product._id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-4 py-1 font-medium font-libre border-x-2 border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateItem(product._id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                            disabled={item.quantity >= product.stock}
                          >
                            +
                          </button>
                        </div>

                        <p className="text-sm text-gray-600 mt-2 font-libre">
                          Subtotal: <span className="font-semibold text-black">{formatPrice(item.subtotal)}</span>
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                  <h2 className="text-xl font-bold text-black mb-6 font-libre">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-700 font-libre">
                      <span>Subtotal ({itemCount} items)</span>
                      <span className="font-semibold">{formatPrice(cart.subtotal)}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-700 font-libre">
                      <span>Shipping</span>
                      <span className="text-sm text-gray-500">Calculated at checkout</span>
                    </div>

                    <div className="border-t pt-4 flex justify-between text-lg font-bold text-black font-libre">
                      <span>Total</span>
                      <span>{formatPrice(cart.total)}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full bg-black text-white text-center py-4 rounded-lg hover:bg-gray-800 transition-colors font-libre uppercase tracking-wide mb-4"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    href="/shop"
                    className="block w-full text-center py-3 text-black hover:text-gray-600 transition-colors font-libre"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </main>
    </>
  )
}

