'use client'

import { useProducts } from '@/lib/hooks'
import HeroBanner from '@/components/HeroBanner'
import WholesaleCTA from '@/components/WholesaleCTA'
import CollectionGrid from '@/components/CollectionGrid'
import SectionCarousel from '@/components/SectionCarousel'
import WholesaleBanner from '@/components/FlyerPair'
import VideoCTA from '@/components/VideoCTA'
import Footer from '@/components/Footer'

export default function Home() {
  // Get ALL products from backend (48 products available)
  const { products: allProducts, loading } = useProducts({ limit: 48, sort: '-createdAt' })
  
  // Divide products into sections (8 per section)
  const featuredProducts = allProducts.slice(0, 8)
  const newArrivals = allProducts.slice(8, 16)
  const backInStock = allProducts.slice(16, 24)
  const bestSellers = allProducts.slice(24, 32)

  return (
    <main className="min-h-screen m-0 p-0">
      <HeroBanner />
      <WholesaleCTA />
      <CollectionGrid />

      {featuredProducts.length > 0 && (
        <SectionCarousel
          title="Featured Items"
          products={featuredProducts}
          priority={true}
        />
      )}

      {backInStock.length > 0 && (
        <SectionCarousel
          title="Back in Stock"
          products={backInStock}
          className="bg-white"
        />
      )}

      <WholesaleBanner />

      {newArrivals.length > 0 && (
        <SectionCarousel
          title="New Arrivals"
          products={newArrivals}
        />
      )}

      <VideoCTA />

      {bestSellers.length > 0 && (
        <SectionCarousel
          title="Best Sellers"
          products={bestSellers}
          className="bg-white"
        />
      )}

      <Footer />
    </main>
  )
}
