'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useProducts, useCategories, useBrands } from '@/lib/hooks'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import { formatPrice } from '@/lib/data'

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500000)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(16)
  const [sortBy, setSortBy] = useState('-createdAt')

  const { categories } = useCategories(false)
  const { brands } = useBrands({ limit: 100 })

  // Handle category from URL parameter
  useEffect(() => {
    if (categoryFromUrl && categories.length > 0) {
      const matchedCategory = categories.find(cat => 
        cat.slug === categoryFromUrl || cat.slug.includes(categoryFromUrl)
      )
      if (matchedCategory && !selectedCategories.includes(matchedCategory._id)) {
        setSelectedCategories([matchedCategory._id])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFromUrl, categories])
  
  const { products, pagination, loading } = useProducts({
    page,
    limit,
    minPrice,
    maxPrice,
    category: selectedCategories.length > 0 ? selectedCategories.join(',') : categoryFromUrl || undefined,
    brand: selectedBrands.length > 0 ? selectedBrands.join(',') : undefined,
    sort: sortBy,
  })

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
    setPage(1)
  }

  const toggleBrand = (brandName: string) => {
    setSelectedBrands(prev =>
      prev.includes(brandName)
        ? prev.filter(b => b !== brandName)
        : [...prev, brandName]
    )
    setPage(1)
  }

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Banner - Teeka4 Professional Height */}
        <section className="relative h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/banners/shop.png"
              alt="Shop All Products"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              {/* Breadcrumb - Left Aligned like Teeka4 */}
              <nav className="mb-4 text-sm text-white">
                <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
                <span className="mx-2">›</span>
                <span className="font-medium">Shop</span>
              </nav>
              
              {/* Title - Left Aligned */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-libre">
                Shop
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content - Teeka4 Layout */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex gap-8">
              
              {/* Filter Sidebar - STICKY like Teeka4 */}
              <aside className="w-72 flex-shrink-0 hidden lg:block">
                <div className="sticky top-4">
                  
                  {/* Price Filter */}
                  <div className="mb-8 border-b border-gray-200 pb-6">
                    <h3 className="text-base font-semibold text-black mb-4 flex items-center justify-between cursor-pointer">
                      Filter by price
                      <span className="text-lg">−</span>
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
                      <button 
                        onClick={() => setPage(1)}
                        className="w-full bg-gray-100 text-black px-4 py-2 text-sm border hover:bg-gray-200 transition-colors uppercase tracking-wide"
                      >
                        FILTER
                      </button>
                      <p className="text-sm text-gray-600">
                        Price: {formatPrice(minPrice)} — {formatPrice(maxPrice)}
                      </p>
                    </div>
                  </div>

                  {/* Product Categories */}
                  <div className="mb-8 border-b border-gray-200 pb-6">
                    <h3 className="text-base font-semibold text-black mb-4">
                      Product Categories
                    </h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {categories.map(cat => (
                        <label key={cat._id} className="flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(cat._id)}
                              onChange={() => toggleCategory(cat._id)}
                              className="mr-2 w-4 h-4"
                            />
                            <span>{cat.name}</span>
                          </div>
                          <span className="text-gray-400 text-xs">({cat.productCount || 0})</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Brands Filter */}
                  {brands.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-base font-semibold text-black mb-4">
                        Filter By Brand
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {brands.map(brand => (
                          <label key={brand._id} className="flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand.name)}
                                onChange={() => toggleBrand(brand.name)}
                                className="mr-2 w-4 h-4"
                              />
                              <span>{brand.name}</span>
                            </div>
                            <span className="text-gray-400 text-xs">({brand.productCount || 0})</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>

              {/* Products Grid - Teeka4 Style */}
              <div className="flex-1">
                
                {/* Top Bar - Show & Sort */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600 uppercase tracking-wide">Show</span>
                    <div className="flex space-x-3">
                      {[16, 32, 64].map(val => (
                        <button 
                          key={val}
                          onClick={() => { setLimit(val); setPage(1) }}
                          className={`text-sm ${limit === val ? 'text-black font-semibold underline' : 'text-gray-500 hover:text-black'}`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 uppercase tracking-wide">Sort by</span>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="text-sm border border-gray-300 px-3 py-1 rounded cursor-pointer bg-white hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      <option value="-createdAt">Latest</option>
                      <option value="price">Price: Low to High</option>
                      <option value="-price">Price: High to Low</option>
                      <option value="-averageRating">Best Rating</option>
                      <option value="-featured.featuredOrder">Featured</option>
                    </select>
                  </div>
                </div>

                {/* Products Grid - Professional 4 Columns */}
                {loading ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {Array.from({ length: limit }).map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-3"></div>
                        <div className="h-3 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
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

                    {/* Pagination - Teeka4 Style */}
                    {pagination && pagination.totalPages > 1 && (
                      <div className="flex justify-center items-center space-x-2 py-8 border-t border-gray-200">
                        {/* Previous Button */}
                        {page > 1 && (
                          <button 
                            onClick={() => setPage(page - 1)}
                            className="px-3 py-2 text-gray-600 hover:text-black transition-colors"
                          >
                            ←
                          </button>
                        )}

                        {/* Page Numbers */}
                        {Array.from({ length: Math.min(pagination.totalPages, 5) }).map((_, i) => {
                          let pageNum = i + 1
                          
                          // Smart pagination: show pages around current page
                          if (pagination.totalPages > 5) {
                            if (page > 3) {
                              pageNum = page - 2 + i
                            }
                            if (pageNum > pagination.totalPages) {
                              return null
                            }
                          }

                          return (
                            <button 
                              key={pageNum}
                              onClick={() => setPage(pageNum)}
                              className={`w-10 h-10 flex items-center justify-center border transition-colors ${
                                page === pageNum 
                                  ? 'bg-black text-white border-black' 
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black'
                              }`}
                            >
                              {pageNum}
                            </button>
                          )
                        })}

                        {/* Ellipsis if more pages */}
                        {pagination.totalPages > 5 && page < pagination.totalPages - 2 && (
                          <span className="px-2 text-gray-400">...</span>
                        )}

                        {/* Last Page */}
                        {pagination.totalPages > 5 && page < pagination.totalPages - 2 && (
                          <button 
                            onClick={() => setPage(pagination.totalPages)}
                            className="w-10 h-10 flex items-center justify-center border bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black transition-colors"
                          >
                            {pagination.totalPages}
                          </button>
                        )}

                        {/* Next Button */}
                        {page < pagination.totalPages && (
                          <button 
                            onClick={() => setPage(page + 1)}
                            className="px-3 py-2 text-gray-600 hover:text-black transition-colors"
                          >
                            →
                          </button>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-gray-600 text-lg mb-4">No products found</p>
                    <p className="text-gray-500 text-sm mb-6">Try adjusting your filters</p>
                    <Link href="/shop" className="inline-block bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                      Clear Filters
                    </Link>
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

export default function Shop() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    }>
      <ShopContent />
    </Suspense>
  )
}
