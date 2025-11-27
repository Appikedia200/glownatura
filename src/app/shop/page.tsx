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
  const [expandedSections, setExpandedSections] = useState({
    categories: false,
    brands: false,
    concerns: false,
  })

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

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <>
      <main className="min-h-screen">
        <section className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/banners/shop.png"
              alt="Shop Banner"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center">
                <nav className="mb-4 text-sm text-gray-300 font-libre">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="mx-2">›</span>
                  <span className="text-white">Shop</span>
                </nav>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-libre">
                  Shop
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex gap-8">
              
              <aside className="w-64 flex-shrink-0 hidden lg:block">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-black mb-4 flex items-center justify-between font-libre">
                    Filter by price
                    <span className="text-xl">−</span>
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
                      className="bg-gray-100 text-black px-4 py-2 text-sm border hover:bg-gray-200 transition-colors font-gupter uppercase tracking-wide"
                    >
                      FILTER
                    </button>
                    <p className="text-sm text-gray-600 font-libre">
                      Price: {formatPrice(minPrice)} — {formatPrice(maxPrice)}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 
                    className="text-lg font-semibold text-black mb-4 flex items-center justify-between cursor-pointer hover:text-gray-700 font-libre"
                    onClick={() => toggleSection('categories')}
                  >
                    Product Categories
                    <span className="text-xl">{expandedSections.categories ? '−' : '+'}</span>
                  </h3>
                  {expandedSections.categories && (
                    <div className="space-y-2 font-libre">
                      {categories.map(cat => (
                        <label key={cat._id} className="flex items-center justify-between text-sm text-gray-600 cursor-pointer hover:text-black">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(cat._id)}
                              onChange={() => toggleCategory(cat._id)}
                              className="mr-2"
                            />
                            <span>{cat.name}</span>
                          </div>
                          <span>{cat.productCount || 0}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h3 
                    className="text-lg font-semibold text-black mb-4 flex items-center justify-between cursor-pointer hover:text-gray-700 font-libre"
                    onClick={() => toggleSection('brands')}
                  >
                    Filter By Brand
                    <span className="text-xl">{expandedSections.brands ? '−' : '+'}</span>
                  </h3>
                  {expandedSections.brands && (
                    <div className="space-y-2 font-libre max-h-64 overflow-y-auto">
                      {brands.map(brand => (
                        <label key={brand._id} className="flex items-center justify-between text-sm text-gray-600 cursor-pointer hover:text-black">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(brand.name)}
                              onChange={() => toggleBrand(brand.name)}
                              className="mr-2"
                            />
                            <span>{brand.name}</span>
                          </div>
                          <span>{brand.productCount || 0}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </aside>

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
                    <span className="text-sm text-gray-600 font-libre">Sort By</span>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="text-sm border-0 bg-transparent cursor-pointer font-libre"
                    >
                      <option value="-createdAt">Latest</option>
                      <option value="price">Price: Low to High</option>
                      <option value="-price">Price: High to Low</option>
                      <option value="-averageRating">Best Rating</option>
                      <option value="-featured.featuredOrder">Featured</option>
                    </select>
                  </div>
                </div>

                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {Array.from({ length: limit }).map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="aspect-square bg-gray-300 mb-4"></div>
                        <div className="h-4 bg-gray-300 mb-2"></div>
                        <div className="h-4 bg-gray-300 w-3/4"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                      {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                    </div>

                    {products.length === 0 && (
                      <div className="text-center py-16">
                        <p className="text-gray-600 font-libre">No products found</p>
                      </div>
                    )}

                    {pagination && pagination.total > 0 && (
                      <>
                        <div className="text-center text-gray-600 mb-4 font-libre">
                          Showing {products.length} of {pagination.total} products
                        </div>

                        {pagination.totalPages > 1 && (
                          <div className="flex justify-center items-center space-x-2">
                            {Array.from({ length: Math.min(pagination.totalPages, 10) }).map((_, i) => (
                              <button 
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`w-8 h-8 flex items-center justify-center border rounded font-libre ${
                                  page === i + 1 
                                    ? 'bg-black text-white' 
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                              >
                                {i + 1}
                              </button>
                            ))}
                            {pagination.hasNextPage && (
                              <button 
                                onClick={() => setPage(page + 1)}
                                className="px-3 py-1 text-gray-600 hover:text-black font-libre"
                              >
                                →
                              </button>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </>
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
      <main className="min-h-screen">
        <div className="flex items-center justify-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>
      </main>
    }>
      <ShopContent />
    </Suspense>
  )
}
