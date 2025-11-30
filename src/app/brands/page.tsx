'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { brandsService } from '@/lib/api'
import Banner from '@/components/ui/Banner'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import type { Brand } from '@/types/api'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function BrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const [activeLetter, setActiveLetter] = useState<string | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await brandsService.getAllBrands({ limit: 1000 })
        if (response.success && response.data) {
          setBrands(response.data.brands)
        }
      } catch (error) {
        console.error('Failed to fetch brands:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBrands()
  }, [])

  // Group brands by first letter
  const brandsByLetter = brands.reduce((acc, brand) => {
    const firstLetter = brand.firstLetter?.toUpperCase() || '#'
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(brand)
    return acc
  }, {} as Record<string, Brand[]>)

  const scrollToLetter = (letter: string) => {
    const section = sectionRefs.current[letter]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveLetter(letter)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading brands...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <Banner
        title="All Brands"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Brands' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Alphabet Navigation - Sticky */}
        <div className="sticky top-0 bg-white z-10 py-4 mb-8 border-b border-gray-200 shadow-sm">
          <div className="flex flex-wrap justify-center gap-2">
            {ALPHABET.map((letter) => {
              const hasBrands = brandsByLetter[letter]?.length > 0
              return (
                <button
                  key={letter}
                  onClick={() => hasBrands && scrollToLetter(letter)}
                  disabled={!hasBrands}
                  className={`w-10 h-10 rounded-full font-semibold transition-all ${
                    hasBrands
                      ? activeLetter === letter
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              )
            })}
            {brandsByLetter['#'] && (
              <button
                onClick={() => scrollToLetter('#')}
                className={`w-10 h-10 rounded-full font-semibold transition-all ${
                  activeLetter === '#'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                #
              </button>
            )}
          </div>
        </div>

        {/* Brands Listing */}
        {brands.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No brands available at the moment.</p>
            <Link href="/shop" className="text-black underline mt-4 inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {ALPHABET.map((letter) => {
              const letterBrands = brandsByLetter[letter]
              if (!letterBrands || letterBrands.length === 0) return null

              return (
                <div
                  key={letter}
                  ref={(el) => { sectionRefs.current[letter] = el }}
                  className="scroll-mt-24"
                >
                  {/* Letter Header */}
                  <div className="flex items-center mb-6">
                    <h2 className="text-4xl font-bold font-playfair text-gray-900">{letter}</h2>
                    <div className="flex-1 h-px bg-gray-200 ml-6"></div>
                  </div>

                  {/* Brands Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {letterBrands.map((brand) => (
                      <Link
                        key={brand._id}
                        href={`/brands/${brand.slug}`}
                        className="group border border-gray-200 rounded-lg p-6 hover:border-black hover:shadow-lg transition-all"
                      >
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black mb-2">
                            {brand.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {brand.productCount} {brand.productCount === 1 ? 'product' : 'products'}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Numbers/Special Characters Section */}
            {brandsByLetter['#'] && (
              <div
                ref={(el) => { sectionRefs.current['#'] = el }}
                className="scroll-mt-24"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-4xl font-bold font-playfair text-gray-900">#</h2>
                  <div className="flex-1 h-px bg-gray-200 ml-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {brandsByLetter['#'].map((brand) => (
                    <Link
                      key={brand._id}
                      href={`/brands/${brand.slug}`}
                      className="group border border-gray-200 rounded-lg p-6 hover:border-black hover:shadow-lg transition-all"
                    >
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black mb-2">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {brand.productCount} {brand.productCount === 1 ? 'product' : 'products'}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
