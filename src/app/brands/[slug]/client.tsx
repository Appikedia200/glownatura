'use client'

import { useState } from 'react'
import { useProducts, useBrands } from '@/lib/hooks'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import { formatPrice } from '@/lib/data'

export default function BrandPageClient({ brandSlug }: { brandSlug: string }) {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(16)
  const [sortBy, setSortBy] = useState('-createdAt')
  
  // Get brand info
  const { brands } = useBrands({ limit: 100 })
  const brand = brands.find(b => b.slug === brandSlug)
  
  // Get products by brand name
  const { products, pagination, loading } = useProducts({
    brand: brand?.name,
    page,
    limit,
    sort: sortBy,
  })

  const brandName = brand?.name || brandSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Banner */}
        <section className="relative h-[200px] md:h-[240px] overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-300">
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <nav className="mb-2 text-sm text-gray-800">
                <Link href="/" className="hover:text-black">Home</Link>
                <span className="mx-2">›</span>
                <Link href="/brands" className="hover:text-black">Brands</Link>
                <span className="mx-2">›</span>
                <span className="font-medium text-black">{brandName}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold text-black font-libre">
                {brandName}
              </h1>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <p className="text-gray-600">
                {loading ? 'Loading...' : `${pagination?.total || 0} products`}
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Show:</span>
                {[16, 32, 64].map(val => (
                  <button 
                    key={val}
                    onClick={() => { setLimit(val); setPage(1) }}
                    className={`text-sm ${limit === val ? 'text-black font-semibold underline' : 'text-gray-500 hover:text-black'}`}
                  >
                    {val}
                  </button>
                ))}
                <span className="text-sm text-gray-600 ml-6">Sort:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-300 px-3 py-1 rounded"
                >
                  <option value="-createdAt">Latest</option>
                  <option value="price">Price: Low to High</option>
                  <option value="-price">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: limit }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-square bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {pagination && pagination.totalPages > 1 && (
                  <div className="flex justify-center space-x-2">
                    {page > 1 && (
                      <button onClick={() => setPage(page - 1)} className="px-3 py-2 border">
                        Previous
                      </button>
                    )}
                    <span className="px-4 py-2">
                      Page {page} of {pagination.totalPages}
                    </span>
                    {page < pagination.totalPages && (
                      <button onClick={() => setPage(page + 1)} className="px-3 py-2 border">
                        Next
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No products found for this brand</p>
                <Link href="/brands" className="text-black hover:underline mt-4 inline-block">
                  View All Brands
                </Link>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

