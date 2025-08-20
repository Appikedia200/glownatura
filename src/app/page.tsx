import HeroBanner from '@/components/HeroBanner'
import WholesaleCTA from '@/components/WholesaleCTA'
import SliderBanner from '@/components/SliderBanner'
import CollectionGrid from '@/components/CollectionGrid'
import SectionCarousel from '@/components/SectionCarousel'
import WholesaleBanner from '@/components/FlyerPair'
import VideoCTA from '@/components/VideoCTA'
import Footer from '@/components/Footer'

import { 
  getFeaturedProducts, 
  getBackInStockProducts, 
  getNewArrivals, 
  getBestSellers,
  authorizedResellerBanners
} from '@/lib/data'

export default function Home() {
  // Get products for each section
  const featuredProducts = getFeaturedProducts()
  const backInStockProducts = getBackInStockProducts()
  const newArrivals = getNewArrivals()
  const bestSellers = getBestSellers()

  return (
    <main className="min-h-screen">

      {/* 1. Hero Section - Now uses actual image */}
      <HeroBanner />

      {/* 2. Wholesale Join CTA */}
      <WholesaleCTA />

      {/* 3. Collections Section - Right after WholesaleCTA */}
      <CollectionGrid />

      {/* COMMENTED OUT - Authorized Resellers Section */}
      {/* 
      <SliderBanner
        title="Authorized Resellers"
        ctaText="View More"
        ctaLink="/resellers"
        banners={authorizedResellerBanners}
      />
      */}

      {/* 4. Featured Items Section */}
      <SectionCarousel
        title="Featured Items"
        products={featuredProducts}
        priority={true}
      />

      {/* 5. Back in Stock Section */}
      <SectionCarousel
        title="Back in Stock"
        products={backInStockProducts}
        showViewAll={true}
        viewAllLink="/back-in-stock"
        className="bg-white"
      />

      {/* 6. Wholesale Banner - Replaces Flyer Section */}
      <WholesaleBanner />

      {/* 7. New Arrivals Section */}
      <SectionCarousel
        title="New Arrivals"
        products={newArrivals}
      />

      {/* 8. Consultation CTA (Video Background) */}
      <VideoCTA />

      {/* 9. Best Sellers Section - Immediately after Video */}
      <SectionCarousel
        title="Best Sellers"
        products={bestSellers}
        className="bg-white"
      />

      {/* 10. Footer - Immediately after Best Sellers */}
      <Footer />
    </main>
  )
} 