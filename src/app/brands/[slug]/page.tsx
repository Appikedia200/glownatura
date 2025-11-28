'use client'

import { useState, Suspense } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useProducts, useBrands } from '@/lib/hooks'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import { formatPrice } from '@/lib/data'

function BrandPageContent() {
  const params = useParams()
  const brandSlug = params.slug as string
  
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
        <section className="relative h-[280px] md:h-[350px] overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-300">
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <nav className="mb-4 text-sm text-gray-800">
                <Link href="/" className="hover:text-black">Home</Link>
                <span className="mx-2">›</span>
                <Link href="/brands" className="hover:text-black">Brands</Link>
                <span className="mx-2">›</span>
                <span className="font-medium text-black">{brandName}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold text-black font-libre">
                {brandName}
              </h1>
              {brand && (
                <p className="text-lg text-gray-800 mt-2">
                  {brand.productCount || 0} products
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 uppercase">Show</span>
                <div className="flex space-x-3">
                  {[16, 32, 64].map(val => (
                    <button 
                      key={val}
                      onClick={() => { setLimit(val); setPage(1) }}
                      className={`text-sm ${limit === val ? 'text-black font-semibold underline' : 'text-gray-500'}`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 uppercase">Sort by</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-300 px-3 py-1 rounded bg-white"
                >
                  <option value="-createdAt">Latest</option>
                  <option value="price">Price: Low to High</option>
                  <option value="-price">Price: High to Low</option>
                  <option value="-averageRating">Best Rating</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-3"></div>
                    <div className="h-3 bg-gray-200 mb-2"></div>
                    <div className="h-4 bg-gray-200 w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                  {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {pagination && pagination.totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2 py-8">
                    {page > 1 && (
                      <button onClick={() => setPage(page - 1)} className="px-3 py-2 text-gray-600 hover:text-black">←</button>
                    )}
                    {Array.from({ length: Math.min(pagination.totalPages, 5) }).map((_, i) => {
                      const pageNum = i + 1
                      return (
                        <button 
                          key={pageNum}
                          onClick={() => setPage(pageNum)}
                          className={`w-10 h-10 border ${page === pageNum ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                    {page < pagination.totalPages && (
                      <button onClick={() => setPage(page + 1)} className="px-3 py-2 text-gray-600 hover:text-black">→</button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg mb-4">No products found for {brandName}</p>
                <Link href="/shop" className="inline-block bg-black text-white px-6 py-3 hover:bg-gray-800">
                  Browse All Products
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

export default function BrandPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    }>
      <BrandPageContent />
    </Suspense>
  )
}



