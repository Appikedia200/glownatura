'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ordersService } from '@/lib/api/services/orders.service'
import { formatPrice } from '@/lib/data'
import Footer from '@/components/Footer'
import type { Order } from '@/types/api'

function SuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const orderNumber = searchParams.get('orderNumber')

  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return

      try {
        const data = await ordersService.getById(orderId)
        setOrder(data)
      } catch (err) {
        console.error('Failed to load order:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchOrder()
  }, [orderId])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    )
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            {/* Success Icon */}
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-black mb-4 font-libre">
              Order Placed Successfully!
            </h1>
            
            <p className="text-gray-600 mb-8 font-libre">
              Thank you for your purchase. We have received your order and will process it shortly.
            </p>

            {/* Order Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 font-libre">Order Number</p>
                  <p className="font-bold text-black font-libre">{orderNumber || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-libre">Order Date</p>
                  <p className="font-bold text-black font-libre">
                    {order ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 font-libre">Total Amount</p>
                  <p className="font-bold text-black font-libre">
                    {order ? formatPrice(order.pricing.total) : 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 font-libre">Payment Method</p>
                  <p className="font-bold text-black font-libre capitalize">
                    {order ? order.payment.method.replace('_', ' ') : 'N/A'}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start text-left p-4 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm">
                  <p className="font-semibold text-black mb-1 font-libre">Order Confirmation</p>
                  <p className="text-gray-700 font-libre">
                    A confirmation email has been sent to <strong>{order?.customer.email || `your email`}</strong>
                  </p>
                </div>
              </div>

              {order?.payment.method === 'bank_transfer' && (
                <div className="flex items-start text-left p-4 bg-yellow-50 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <p className="font-semibold text-black mb-1 font-libre">Bank Transfer Instructions</p>
                    <p className="text-gray-700 font-libre">
                      Please check your email for bank transfer details. Your order will be processed once payment is confirmed.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-libre uppercase tracking-wide"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="inline-block bg-white text-black border-2 border-black px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-libre uppercase tracking-wide"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}

