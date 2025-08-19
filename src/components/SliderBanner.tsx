'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface SliderBannerProps {
  title: string
  ctaText: string
  ctaLink: string
  banners: string[] // Array of image paths
  className?: string
}

export default function SliderBanner({ 
  title, 
  ctaText, 
  ctaLink, 
  banners, 
  className = '' 
}: SliderBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 6000) // 6 seconds per slide

    return () => clearInterval(interval)
  }, [banners.length])

  // Background colors for each slide
  const backgroundColors = [
    'from-yellow-200 to-orange-200',    // Yellow like the sample
    'from-green-200 to-teal-200',       // Green variant
    'from-purple-200 to-pink-200',      // Purple variant
    'from-blue-200 to-cyan-200'         // Blue variant
  ]

  return (
    <section className={`relative h-96 lg:h-[500px] overflow-hidden ${className}`}>
      
      {/* Background Slides */}
      <div className="absolute inset-0">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Thick Background Color */}
            <div className={`absolute inset-0 bg-gradient-to-br ${backgroundColors[index % backgroundColors.length]}`}>
              
              {/* Product Showcase with Reflections */}
              <div className="absolute inset-0 flex items-center justify-end pr-20">
                <div className="relative">
                  
                  {/* Product Group */}
                  <div className="relative flex items-center space-x-4">
                    
                    {/* Product 1 - Left, Rotated */}
                    <div className="transform rotate-12 transition-transform duration-500 hover:rotate-6">
                      <div className="relative">
                        {/* Main Product */}
                        <div className="w-24 h-40 lg:w-32 lg:h-48 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                            <div className="text-3xl lg:text-4xl">🧴</div>
                          </div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded text-center">
                              PREMIUM
                            </div>
                          </div>
                        </div>
                        
                        {/* Reflection */}
                        <div className="w-24 h-20 lg:w-32 lg:h-24 bg-white/20 rounded-lg mt-1 transform scale-y-[-1] opacity-30 blur-sm">
                          <div className="w-full h-full bg-gradient-to-t from-transparent to-white/40 rounded-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Product 2 - Center, Straight */}
                    <div className="transform transition-transform duration-500 hover:scale-105">
                      <div className="relative">
                        {/* Main Product */}
                        <div className="w-28 h-44 lg:w-36 lg:h-52 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                            <div className="text-4xl lg:text-5xl">✨</div>
                          </div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="bg-purple-500 text-white text-xs px-1 py-0.5 rounded text-center">
                              BESTSELLER
                            </div>
                          </div>
                        </div>
                        
                        {/* Reflection */}
                        <div className="w-28 h-22 lg:w-36 lg:h-26 bg-white/20 rounded-lg mt-1 transform scale-y-[-1] opacity-30 blur-sm">
                          <div className="w-full h-full bg-gradient-to-t from-transparent to-white/40 rounded-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Product 3 - Right, Rotated */}
                    <div className="transform -rotate-12 transition-transform duration-500 hover:-rotate-6">
                      <div className="relative">
                        {/* Main Product */}
                        <div className="w-20 h-36 lg:w-28 lg:h-44 bg-white rounded-lg shadow-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                            <div className="text-2xl lg:text-3xl">💧</div>
                          </div>
                          <div className="absolute bottom-2 left-1 right-1">
                            <div className="bg-green-500 text-white text-xs px-1 py-0.5 rounded text-center">
                              NEW
                            </div>
                          </div>
                        </div>
                        
                        {/* Reflection */}
                        <div className="w-20 h-18 lg:w-28 lg:h-22 bg-white/20 rounded-lg mt-1 transform scale-y-[-1] opacity-30 blur-sm">
                          <div className="w-full h-full bg-gradient-to-t from-transparent to-white/40 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute -top-8 left-4 w-3 h-3 bg-white/50 rounded-full animate-bounce"></div>
                  <div className="absolute -top-4 right-8 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 -left-6 w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Optional: Use actual banner image if provided */}
              <div className="absolute inset-0 opacity-0">
                <Image
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            
            <a
              href={ctaLink}
              className="inline-block bg-black text-white px-8 py-3 text-lg font-semibold rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gray-900 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
} 