'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('order')

  if (!orderId) {
    return (
      <div className="text-center">
        <p className="text-gray-600 mb-4">No order information found.</p>
        <Link href="/shop" className="text-black underline hover:no-underline">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="text-center max-w-2xl mx-auto">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <CheckCircleIcon className="h-24 w-24 text-green-500" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold font-playfair text-gray-900 mb-4">
        Thank You for Your Order!
      </h1>

      {/* Order Number */}
      <p className="text-lg text-gray-700 mb-6">
        Your order <span className="font-bold text-black">{orderId}</span> has been received and is currently on hold.
      </p>

      {/* Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Payment Instructions Sent
        </h2>
        <p className="text-gray-700 mb-4">
          A payment instruction has been sent to your email. Please check your inbox for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>PDF Invoice with order details</li>
          <li>Bank account details for payment</li>
          <li>Order number for reference</li>
        </ul>
        <p className="text-gray-700 font-medium">
          Follow the instructions in the email to complete your order.
        </p>
      </div>

      {/* Action Button */}
      <Link
        href="/shop"
        className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
      >
        Continue Shopping
      </Link>

      {/* Help Text */}
      <p className="text-sm text-gray-500 mt-8">
        Need help? Contact us at{' '}
        <a href="mailto:support@glownatura.com" className="text-black underline">
          support@glownatura.com
        </a>
      </p>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <ThankYouContent />
        </Suspense>
      </div>
    </div>
  )
}

