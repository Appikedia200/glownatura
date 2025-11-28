'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useBrands } from '@/lib/hooks'
import Footer from '@/components/Footer'

export default function BrandsPage() {
  const { brands, loading } = useBrands({ limit: 100 })

  // Group brands by first letter
  const brandsByLetter = brands.reduce((acc, brand) => {
    const firstLetter = brand.name[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(brand)
    return acc
  }, {} as Record<string, typeof brands>)

  const letters = Object.keys(brandsByLetter).sort()

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Banner - Teeka4 Style */}
        <section className="relative h-[200px] md:h-[240px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <nav className="mb-4 text-sm text-gray-800">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span className="mx-2">›</span>
                <span className="font-medium text-black">Brands</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-libre">
                Brands
              </h1>
            </div>
          </div>
        </section>

        {/* A-Z Navigation */}
        <section className="bg-gray-100 border-y border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {letters.map(letter => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="w-8 h-8 flex items-center justify-center text-sm font-semibold text-gray-700 hover:bg-black hover:text-white transition-colors rounded"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
              </div>
            ) : letters.length > 0 ? (
              <div className="space-y-12">
                {letters.map(letter => (
                  <div key={letter} id={letter}>
                    <h2 className="text-3xl font-bold text-black mb-6 pb-2 border-b-2 border-black inline-block">
                      {letter}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
                      {brandsByLetter[letter].map(brand => (
                        <Link
                          key={brand._id}
                          href={`/brands/${brand.slug}`}
                          className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-black group-hover:text-gray-600 transition-colors">
                              {brand.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                              {brand.productCount || 0} products
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No brands available yet</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

