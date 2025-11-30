'use client'

import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

const faceCategories = [
  { name: 'Cleansers', slug: 'cleansers', image: '/images/collections/skincare.png' },
  { name: 'Toners', slug: 'toners', image: '/images/collections/skincare.png' },
  { name: 'Serums', slug: 'serums', image: '/images/collections/skincare.png' },
  { name: 'Moisturizers', slug: 'moisturizers', image: '/images/collections/skincare.png' },
  { name: 'Sunscreen', slug: 'sunscreen', image: '/images/collections/sunscreen.png' },
  { name: 'Face Masks', slug: 'face-masks', image: '/images/collections/skincare.png' },
  { name: 'Eye Care', slug: 'eye-care', image: '/images/collections/skincare.png' },
  { name: 'Lip Care', slug: 'lip-care', image: '/images/collections/skincare.png' },
]

export default function FacePage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Banner - Teeka4 Exact Style */}
        <section className="relative h-[200px] md:h-[240px] overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/banners/shop.png"
              alt="Face Care Products"
              fill
              className="object-cover object-center mix-blend-multiply"
              priority
            />
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              {/* Breadcrumb - Left Aligned like Teeka4 */}
              <nav className="mb-4 text-sm text-gray-800">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span className="mx-2">›</span>
                <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
                <span className="mx-2">›</span>
                <span className="text-black font-medium">Face</span>
              </nav>
              
              {/* Title - Left Aligned */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                Face
              </h1>
            </div>
          </div>
        </section>

        {/* Face Categories Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {faceCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/face/${category.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-center font-medium text-black font-libre group-hover:text-gray-600 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

