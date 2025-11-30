'use client'

import { useState, useEffect } from 'react'
import Banner from '@/components/ui/Banner'
import ProductCard from '@/components/ProductCard'
import { productsService } from '@/lib/api'
import type { Product } from '@/types/api'

export default function SalesPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        // Fetch products with comparePrice (on sale)
        const response = await productsService.getAllProducts({
          page: 1,
          limit: 50,
          sort: '-comparePrice', // Products with highest discounts first
        })
        
        if (response.success && response.data && Array.isArray(response.data)) {
          // Filter products that have comparePrice > price (actual sale items)
          const saleProducts = response.data.filter(
            (p: Product) => p.comparePrice && p.comparePrice > p.price
          )
          setProducts(saleProducts)
        }
      } catch (error) {
        console.error('Failed to fetch sale products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSaleProducts()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <Banner
        title="Sales & Offers"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Sales & Offers' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-gray-600">Loading sale items...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Sales at the Moment</h2>
            <p className="text-gray-600 mb-8">Check back soon for amazing deals!</p>
            <a
              href="/shop"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {products.length} Items on Sale
              </h2>
              <p className="text-gray-600">Limited time offers - don&apos;t miss out!</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

