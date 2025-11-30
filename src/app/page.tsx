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
  // PROFESSIONAL: Fetch homepage sections from backend API
  // Admin controls which products appear in each section via Admin Panel
  const { sections, loading, error } = useHomepage()
  
  // Create a map for easy access to sections by type
  const sectionMap = sections.reduce((acc, section) => {
    acc[section.sectionType] = section
    return acc
  }, {} as Record<string, typeof sections[0]>)
  
  const featuredSection = sectionMap['featured']
  const newArrivalsSection = sectionMap['new_arrivals']
  const backInStockSection = sectionMap['back_in_stock']
  const bestSellersSection = sectionMap['best_sellers']

  // Show loading state
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    )
  }

  return (
    <main className="min-h-screen m-0 p-0">
      <HeroBanner />
      <WholesaleCTA />
      <CollectionGrid />

      {/* Featured Items - Admin controlled */}
      {featuredSection?.products && featuredSection.products.length > 0 && (
        <SectionCarousel
          title={featuredSection.title || "Featured Items"}
          products={featuredSection.products}
          priority={true}
        />
      )}

      {/* Back in Stock - Admin controlled */}
      {backInStockSection?.products && backInStockSection.products.length > 0 && (
        <SectionCarousel
          title={backInStockSection.title || "Back in Stock"}
          products={backInStockSection.products}
          className="bg-white"
        />
      )}

      <WholesaleBanner />

      {/* New Arrivals - Admin controlled */}
      {newArrivalsSection?.products && newArrivalsSection.products.length > 0 && (
        <SectionCarousel
          title={newArrivalsSection.title || "New Arrivals"}
          products={newArrivalsSection.products}
        />
      )}

      <VideoCTA />

      {/* Best Sellers - Admin controlled */}
      {bestSellersSection?.products && bestSellersSection.products.length > 0 && (
        <SectionCarousel
          title={bestSellersSection.title || "Best Sellers"}
          products={bestSellersSection.products}
          className="bg-white"
        />
      )}

      <Footer />
    </main>
  )
}
