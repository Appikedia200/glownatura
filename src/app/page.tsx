'use client'

import { useHomepage } from '@/lib/hooks'
import HeroBanner from '@/components/HeroBanner'
import WholesaleCTA from '@/components/WholesaleCTA'
import CollectionGrid from '@/components/CollectionGrid'
import SectionCarousel from '@/components/SectionCarousel'
import WholesaleBanner from '@/components/FlyerPair'
import VideoCTA from '@/components/VideoCTA'
import Footer from '@/components/Footer'

export default function Home() {
  const { sections, loading, error } = useHomepage()

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load homepage content</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-black text-white hover:bg-gray-800"
          >
            Retry
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen m-0 p-0">
      <HeroBanner />
      <WholesaleCTA />
      <CollectionGrid />

      {loading ? (
        <div className="py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>
      ) : (
        <>
          {sections.map((section) => (
            <SectionCarousel
              key={section._id}
              title={section.title}
              products={section.products}
              priority={section.sectionType === 'featured'}
              className={section.sectionType === 'back_in_stock' ? 'bg-white' : ''}
            />
          ))}
        </>
      )}

      <WholesaleBanner />
      <VideoCTA />
      <Footer />
    </main>
  )
}
