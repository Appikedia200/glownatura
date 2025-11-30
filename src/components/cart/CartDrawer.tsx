'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/hooks'
import { formatPrice } from '@/lib/data'
import { getProductImageUrl } from '@/lib/helpers'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, updateItem, removeItem, itemCount } = useCart()
  
  const items = cart?.items || []
  const subtotal = cart?.subtotal || 0

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-6">
                      <Dialog.Title className="text-lg font-semibold text-gray-900">
                        Shopping Cart ({itemCount})
                      </Dialog.Title>
                      <button
                        type="button"
                        className="rounded-md text-gray-400 hover:text-gray-500"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-4 py-6">
                      {items.length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-gray-500 mb-4">Your cart is empty</p>
                          <button
                            onClick={onClose}
                            className="text-black underline hover:no-underline"
                          >
                            Continue Shopping
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {items.map((item, index) => {
                            const product = typeof item.product === 'object' ? item.product : null
                            const productId = typeof item.product === 'string' ? item.product : product?._id || ''
                            const imageUrl = product?.images?.[0]?.mediaId?.cloudinaryUrl || '/images/placeholder.png'
                            
                            return (
                              <div key={index} className="flex gap-4">
                                {/* Product Image */}
                                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src={imageUrl}
                                    alt={product?.name || 'Product'}
                                    fill
                                    className="object-cover"
                                  />
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-1 flex-col">
                                  <div className="flex justify-between">
                                    <div>
                                      <h3 className="text-sm font-medium text-gray-900">
                                        {product?.name || 'Product'}
                                      </h3>
                                      {product?.brand && (
                                        <p className="mt-1 text-xs text-gray-500">{product.brand}</p>
                                      )}
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                      {formatPrice(item.price)}
                                    </p>
                                  </div>

                                  {/* Quantity Controls */}
                                  <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center border border-gray-300 rounded">
                                      <button
                                        onClick={() => updateItem(productId, Math.max(1, item.quantity - 1))}
                                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                      >
                                        −
                                      </button>
                                      <span className="px-4 py-1 text-sm">{item.quantity}</span>
                                      <button
                                        onClick={() => updateItem(productId, item.quantity + 1)}
                                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                      >
                                        +
                                      </button>
                                    </div>
                                    <button
                                      onClick={() => removeItem(productId)}
                                      className="text-sm text-red-600 hover:text-red-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                      <div className="border-t border-gray-200 px-4 py-6">
                        {/* Subtotal */}
                        <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                          <p>Subtotal:</p>
                          <p>{formatPrice(subtotal)}</p>
                        </div>

                        {/* Continue Shopping */}
                        <button
                          onClick={onClose}
                          className="w-full mb-3 text-center text-sm text-gray-600 hover:text-gray-900 underline"
                        >
                          Continue Shopping
                        </button>

                        {/* Coupon */}
                        <p className="text-center text-sm text-gray-500 mb-4">Have a Coupon?</p>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/cart"
                            onClick={onClose}
                            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                          >
                            VIEW CART
                          </Link>
                          <Link
                            href="/checkout"
                            onClick={onClose}
                            className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
                          >
                            CHECKOUT →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

