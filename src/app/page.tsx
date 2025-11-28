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
  // PROFESSIONAL: Use backend flags for each section
  // Admin controls which products appear in each section
  const { products: featuredProducts } = useProducts({ 
    featured: true, 
    limit: 8,
    sort: '-featured.featuredOrder' 
  })
  
  const { products: newArrivals } = useProducts({ 
    newArrival: true, 
    limit: 8,
    sort: '-createdAt' 
  })
  
  const { products: backInStock } = useProducts({ 
    backInStock: true, 
    limit: 8,
    sort: '-updatedAt' 
  })
  
  const { products: bestSellers } = useProducts({ 
    bestSeller: true, 
    limit: 8,
    sort: '-totalSales' 
  })

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
