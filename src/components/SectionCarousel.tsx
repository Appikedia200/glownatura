'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/types'

interface SectionCarouselProps {
  title: string
  products: Product[]
  showViewAll?: boolean
  viewAllLink?: string
  className?: string
  priority?: boolean // Add priority prop for featured sections
}

export default function SectionCarousel({ 
  title, 
  products, 
  showViewAll = false,
  viewAllLink = '#',
  className = '',
  priority = false // Default to false for non-featured sections
}: SectionCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [productsPerPage, setProductsPerPage] = useState(4)

  // Update products per page based on screen size
  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth < 475) {
        setProductsPerPage(2) // xs screens
      } else if (window.innerWidth < 640) {
        setProductsPerPage(2) // small phones
      } else if (window.innerWidth < 768) {
        setProductsPerPage(3) // large phones
      } else {
        setProductsPerPage(4) // tablets and up
      }
    }

    updateProductsPerPage()
    window.addEventListener('resize', updateProductsPerPage)
    return () => window.removeEventListener('resize', updateProductsPerPage)
  }, [])

  // Auto-rotate every 10 seconds
  useEffect(() => {
    if (products.length > productsPerPage) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = Math.ceil(products.length / productsPerPage) - 1
          return prev >= maxIndex ? 0 : prev + 1
        })
      }, 10000) // 10 seconds

      return () => clearInterval(interval)
    }
  }, [products.length])

  const maxPages = Math.ceil(products.length / productsPerPage)
  const currentProducts = products.slice(
    currentIndex * productsPerPage,
    (currentIndex + 1) * productsPerPage
  )

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? maxPages - 1 : prev - 1)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev >= maxPages - 1 ? 0 : prev + 1)
  }

  if (products.length === 0) {
    return null
  }

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header - Teeka4 Style */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4 font-libre">
            {title}
          </h2>
          <div className="w-80 h-[2px] bg-black mx-auto"></div>
        </div>

        {/* Products Grid - Fully responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          {currentProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              priority={priority && index < 4} // Only prioritize first 4 items in featured sections
            />
          ))}
        </div>

        {/* Navigation Arrows - Teeka4 Style */}
        {maxPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrevious}
              className="p-2 border border-gray-400 hover:border-black transition-colors duration-200"
            >
              <svg 
                className="w-5 h-5 text-gray-600 hover:text-black" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
            
            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: maxPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-black' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 border border-gray-400 hover:border-black transition-colors duration-200"
            >
              <svg 
                className="w-5 h-5 text-gray-600 hover:text-black" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        )}

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center mt-12">
            <a
              href={viewAllLink}
              className="inline-block bg-transparent border border-black text-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide font-montserrat"
            >
              VIEW ALL
            </a>
          </div>
        )}
      </div>
    </section>
  )
} 