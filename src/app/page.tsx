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
  // Fetch products from backend - use exact backend filters
  const { products: featuredProducts } = useProducts({ limit: 8, sort: '-featuredOrder' })
  const { products: newArrivals } = useProducts({ limit: 8, sort: '-createdAt' })
  
  // Get products marked as best sellers by backend
  const { products: allProducts } = useProducts({ limit: 50 })
  const bestSellers = allProducts.filter(p => p.isBestSeller).slice(0, 8)
  
  // Back in stock - products marked by backend
  const backInStock = allProducts.filter(p => p.isBackInStock).slice(0, 8)

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
