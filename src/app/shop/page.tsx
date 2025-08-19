'use client'

import ScrollingPromoBar from '@/components/ScrollingPromoBar'
import Header from '@/components/Header'
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProducts } from '@/lib/data'
import { useState, useMemo } from 'react'

export default function Shop() {
  const allProducts = getAllProducts()
  
  // State for filters
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(65500)
  const [showCount, setShowCount] = useState(16)
  const [sortBy, setSortBy] = useState('latest')
  const [expandedCategories, setExpandedCategories] = useState(false)

  // Filter products based on price range
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    )

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default: // latest
        break
    }

    return filtered.slice(0, showCount)
  }, [allProducts, minPrice, maxPrice, showCount, sortBy])

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (value <= maxPrice) {
      setMinPrice(value)
    }
  }

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (value >= minPrice) {
      setMaxPrice(value)
    }
  }

  return (
    <>
      {/* 1. Scrolling Promo Bar - Always stays at top */}
      <ScrollingPromoBar />
      
      <div className="pt-[40px]">
        {/* Combined Header Section - Sticky as one unit */}
        <div className="sticky top-[40px] z-[9998] bg-[#FFF8F3] border-t border-gray-200 shadow-sm">
          {/* 2. Main Header */}
          <Header />

          {/* 3. Navigation Menu */}
          <NavMenu />
        </div>

        <main className="min-h-screen">
          {/* 4. Shop Banner Section */}
          <section className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
            <Image
              src="/images/banners/shop.png"
              alt="Shop Banner"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            
            {/* Banner Content - Shop title and breadcrumb */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12">
              {/* Shop Title - Large, using Libre font */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-libre font-light text-black mb-4">
                Shop
              </h1>
              
              {/* Breadcrumb Navigation - Using Gulzar font style */}
              <nav className="flex items-center space-x-2 text-black">
                <Link 
                  href="/" 
                  className="text-base md:text-lg hover:underline"
                  style={{ fontFamily: 'serif' }}
                >
                  Home
                </Link>
                <span className="text-base md:text-lg" style={{ fontFamily: 'serif' }}>›</span>
                <span 
                  className="text-base md:text-lg"
                  style={{ fontFamily: 'serif' }}
                >
                  Shop
                </span>
              </nav>
            </div>
          </section>

          {/* 5. Shop Content Area */}
          <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex gap-8">
                
                {/* Left Sidebar - Filters */}
                <aside className="w-64 flex-shrink-0 hidden lg:block">
                  
                  {/* Filter by Price */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-black mb-4 flex items-center justify-between font-libre">
                      Filter by price
                      <span className="text-xl">−</span>
                    </h3>
                    <div className="space-y-4">
                      {/* Dual Range Slider */}
                      <div className="relative py-4">
                        <input 
                          type="range" 
                          min="0" 
                          max="65500" 
                          step="100"
                          value={minPrice}
                          onChange={handleMinPriceChange}
                          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-20 slider-thumb" 
                          style={{
                            background: 'transparent',
                            pointerEvents: 'all'
                          }}
                        />
                        <input 
                          type="range" 
                          min="0" 
                          max="65500" 
                          step="100"
                          value={maxPrice}
                          onChange={handleMaxPriceChange}
                          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-20 slider-thumb" 
                          style={{
                            background: 'transparent',
                            pointerEvents: 'all'
                          }}
                        />
                        <div className="relative h-2 bg-gray-200 rounded-lg">
                          <div 
                            className="absolute h-2 bg-black rounded-lg"
                            style={{
                              left: `${(minPrice / 65500) * 100}%`,
                              right: `${100 - (maxPrice / 65500) * 100}%`
                            }}
                          ></div>
                        </div>
                        {/* Slider thumbs */}
                        <div 
                          className="absolute w-4 h-4 bg-black rounded-full border-2 border-white shadow-md cursor-pointer"
                          style={{
                            left: `${(minPrice / 65500) * 100}%`,
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 30
                          }}
                        ></div>
                        <div 
                          className="absolute w-4 h-4 bg-black rounded-full border-2 border-white shadow-md cursor-pointer"
                          style={{
                            left: `${(maxPrice / 65500) * 100}%`,
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 30
                          }}
                        ></div>
                      </div>
                      <button 
                        onClick={() => {/* Filter is applied automatically */}}
                        className="bg-gray-100 text-black px-4 py-2 text-sm border hover:bg-gray-200 transition-colors font-gupter uppercase tracking-wide"
                      >
                        FILTER
                      </button>
                      <p className="text-sm text-gray-600 font-libre">
                        Price: ₦{minPrice.toLocaleString()} — ₦{maxPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Product Categories */}
                  <div className="mb-8">
                    <h3 
                      className="text-lg font-semibold text-black mb-4 flex items-center justify-between cursor-pointer hover:text-gray-700 font-libre"
                      onClick={() => setExpandedCategories(!expandedCategories)}
                    >
                      Product Categories
                      <span className="text-xl">{expandedCategories ? '−' : '+'}</span>
                    </h3>
                    {expandedCategories && (
                      <div className="space-y-2 font-libre">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>All</span>
                          <span>466</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Back in Stock</span>
                          <span>3</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>BULK</span>
                          <span>2</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Baby Skincare</span>
                          <span>7</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Body Serum</span>
                          <span>12</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Face wash</span>
                          <span>1</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Gift Card</span>
                          <span>52</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Asian Brands</span>
                          <span>1</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Specific Concerns */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-black mb-4 flex items-center justify-between cursor-pointer hover:text-gray-700 font-libre">
                      Specific Concerns
                      <span className="text-xl">+</span>
                    </h3>
                  </div>

                  {/* Shop By Ingredients */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-black mb-4 flex items-center justify-between cursor-pointer hover:text-gray-700 font-libre">
                      Shop By Ingredients
                      <span className="text-xl">+</span>
                    </h3>
                  </div>

                  {/* Filter By Brand */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-black mb-4 flex items-center justify-between cursor-pointer hover:text-gray-700 font-libre">
                      Filter By Brand
                      <span className="text-xl">+</span>
                    </h3>
                  </div>

                </aside>

                {/* Main Content Area */}
                <div className="flex-1">
                  
                  {/* Top Controls */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600 font-libre">SHOW</span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setShowCount(16)}
                          className={`text-sm font-libre ${showCount === 16 ? 'text-black font-semibold' : 'text-gray-400'}`}
                        >
                          16
                        </button>
                        <button 
                          onClick={() => setShowCount(32)}
                          className={`text-sm font-libre ${showCount === 32 ? 'text-black font-semibold' : 'text-gray-400'}`}
                        >
                          32
                        </button>
                        <button 
                          onClick={() => setShowCount(64)}
                          className={`text-sm font-libre ${showCount === 64 ? 'text-black font-semibold' : 'text-gray-400'}`}
                        >
                          64
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 font-libre">Sort By Latest</span>
                      <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="text-sm border-0 bg-transparent cursor-pointer font-libre"
                      >
                        <option value="latest">Latest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name: A to Z</option>
                      </select>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {filteredProducts.map((product: any) => (
                      <div key={product.id} className="group relative bg-white shadow-sm hover:shadow-md transition-shadow">
                        
                        {/* Product Image */}
                        <div className="relative aspect-square bg-gray-50">
                          <Image
                            src={product.images[0]?.url || '/images/featured/simple.png'}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          
                          {/* Wishlist Heart */}
                          <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>

                          {/* Promotion Badges - At bottom of image like Teeka4 */}
                          {product.promotions && product.promotions.length > 0 && (
                            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                              {product.promotions.map((promo: any, index: number) => (
                                <span key={index} className="inline-block bg-gray-600 text-white text-xs px-2 py-1 rounded font-libre">
                                  {promo.description}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="p-4">
                          <h3 className="text-sm font-medium text-black mb-2 font-libre">
                            {product.name}
                          </h3>
                          
                          {/* Price */}
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-lg font-semibold text-black font-libre">
                              ₦{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through font-libre">
                                ₦{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>

                          {/* Add to Cart Section */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center border rounded overflow-hidden">
                              <button className="px-3 py-2 text-sm font-libre hover:bg-gray-50">-</button>
                              <span className="px-4 py-2 text-sm bg-gray-50 font-libre">1</span>
                              <button className="px-3 py-2 text-sm font-libre hover:bg-gray-50">+</button>
                            </div>
                            <button className="flex-1 border border-gray-300 text-black text-sm py-2 px-4 hover:bg-gray-50 transition-colors font-libre uppercase tracking-wide">
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Show filtered count */}
                  <div className="text-center text-gray-600 mb-4 font-libre">
                    Showing {filteredProducts.length} of {allProducts.length} products
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center items-center space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center border rounded text-black bg-black text-white font-libre">1</button>
                    <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100 font-libre">2</button>
                    <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100 font-libre">3</button>
                    <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100 font-libre">4</button>
                    <span className="text-gray-400 font-libre">...</span>
                    <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100 font-libre">27</button>
                    <button className="px-3 py-1 text-gray-600 hover:text-black font-libre">→</button>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* 6. Footer */}
          <Footer />
        </main>
      </div>
    </>
  )
} 