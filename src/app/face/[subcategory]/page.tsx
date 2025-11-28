'use client'

import { useState, useEffect, Suspense } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useProducts, useCategories, useBrands } from '@/lib/hooks'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import { formatPrice } from '@/lib/data'

function FaceSubcategoryContent() {
  const params = useParams()
  const searchParams = useSearchParams()
  const subcategory = params.subcategory as string

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500000)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(16)
  const [sortBy, setSortBy] = useState('-createdAt')

  const { brands } = useBrands({ limit: 100 })
  const { products, pagination, loading } = useProducts({
    category: `face-${subcategory}`,
    page,
    limit,
    minPrice,
    maxPrice,
    brand: selectedBrands.length > 0 ? selectedBrands.join(',') : undefined,
    sort: sortBy,
  })

  const subcategoryTitle = subcategory.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Banner - Teeka4 Professional Style */}
<section className="relative h-[200px] md:h-[240px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/banners/shop.png"
              alt={`Face ${subcategoryTitle}`}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              {/* Breadcrumb - Left Aligned */}
              <nav className="mb-4 text-sm text-white font-libre">
                <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
                <span className="mx-2">›</span>
                <Link href="/shop" className="hover:text-gray-200 transition-colors">Shop</Link>
                <span className="mx-2">›</span>
                <Link href="/face" className="hover:text-gray-200 transition-colors">Face</Link>
              </nav>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-libre">
                {subcategoryTitle}
              </h1>
            </div>
          </div>
        </section>

        {/* Shop Content */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex gap-8">
              
              {/* Filter Sidebar - Sticky */}
              <aside className="w-64 flex-shrink-0 hidden lg:block">
                <div className="sticky top-4 space-y-6">
                  {/* Price Filter */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-4 font-libre">
                      Filter by price
                    </h3>
                    <div className="space-y-4">
                      <div className="relative py-4">
                        <input 
                          type="range" 
                          min="0" 
                          max="500000" 
                          step="1000"
                          value={minPrice}
                          onChange={(e) => {
                            const val = parseInt(e.target.value)
                            if (val <= maxPrice) setMinPrice(val)
                          }}
                          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-20 slider-thumb" 
                        />
                        <input 
                          type="range" 
                          min="0" 
                          max="500000" 
                          step="1000"
                          value={maxPrice}
                          onChange={(e) => {
                            const val = parseInt(e.target.value)
                            if (val >= minPrice) setMaxPrice(val)
                          }}
                          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-20 slider-thumb" 
                        />
                        <div className="relative h-2 bg-gray-200 rounded-lg">
                          <div 
                            className="absolute h-2 bg-black rounded-lg"
                            style={{
                              left: `${(minPrice / 500000) * 100}%`,
                              right: `${100 - (maxPrice / 500000) * 100}%`
                            }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 font-libre">
                        Price: {formatPrice(minPrice)} — {formatPrice(maxPrice)}
                      </p>
                    </div>
                  </div>

                  {/* Brands Filter */}
                  {brands.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-4 font-libre">Brands</h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {brands.map(brand => (
                          <label key={brand._id} className="flex items-center text-sm text-gray-700 cursor-pointer hover:text-black font-libre">
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(brand.name)}
                              onChange={() => {
                                setSelectedBrands(prev =>
                                  prev.includes(brand.name)
                                    ? prev.filter(b => b !== brand.name)
                                    : [...prev, brand.name]
                                )
                                setPage(1)
                              }}
                              className="mr-2"
                            />
                            {brand.name}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600 font-libre">SHOW</span>
                    <div className="flex space-x-2">
                      {[16, 32, 64].map(val => (
                        <button 
                          key={val}
                          onClick={() => { setLimit(val); setPage(1) }}
                          className={`text-sm font-libre ${limit === val ? 'text-black font-semibold' : 'text-gray-400'}`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 font-libre">SORT BY LATEST</span>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="text-sm border-0 bg-transparent cursor-pointer font-libre"
                    >
                      <option value="-createdAt">Latest</option>
                      <option value="price">Price: Low to High</option>
                      <option value="-price">Price: High to Low</option>
                      <option value="-averageRating">Best Rating</option>
                    </select>
                  </div>
                </div>

                {loading ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="aspect-square bg-gray-300 mb-4"></div>
                        <div className="h-4 bg-gray-300 mb-2"></div>
                        <div className="h-4 bg-gray-300 w-3/4"></div>
                      </div>
                    ))}
                  </div>
                ) : products.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-gray-600 font-libre">No products found in this category</p>
                    <Link href="/shop" className="text-black hover:underline mt-4 inline-block font-libre">
                      Browse all products
                    </Link>
                  </div>
                )}

                {pagination && pagination.totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2 mt-8">
                    {Array.from({ length: Math.min(pagination.totalPages, 10) }).map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`w-8 h-8 flex items-center justify-center border rounded font-libre ${
                          page === i + 1 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default function FaceSubcategoryPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    }>
      <FaceSubcategoryContent />
    </Suspense>
  )
}



