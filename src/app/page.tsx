import ScrollingPromoBar from '@/components/ScrollingPromoBar'
import Header from '@/components/Header'
import NavMenu from '@/components/NavMenu'
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
    <>
      {/* 1. Scrolling Promo Bar - Always stays at top */}
      <ScrollingPromoBar />
      
      {/* Combined Header Section - Fixed positioning for better sticky behavior */}
      <div className="fixed top-[40px] left-0 right-0 z-[9999] bg-[#FFF8F3] border-t border-gray-200 shadow-sm">
        {/* 2. Main Header */}
        <Header />

        {/* 3. Navigation Menu */}
        <NavMenu />
      </div>

      {/* Main content with proper top margin to account for fixed header */}
      <div className="pt-[200px]">
        <main className="min-h-screen">

        {/* 4. Hero Section - Now uses actual image */}
        <HeroBanner />

        {/* 5. Wholesale Join CTA */}
        <WholesaleCTA />

        {/* 6. Collections Section - Right after WholesaleCTA */}
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

        {/* 7. Featured Items Section */}
        <SectionCarousel
          title="Featured Items"
          products={featuredProducts}
          priority={true}
        />

        {/* 8. Back in Stock Section */}
        <SectionCarousel
          title="Back in Stock"
          products={backInStockProducts}
          showViewAll={true}
          viewAllLink="/back-in-stock"
          className="bg-white"
        />

        {/* 9. Wholesale Banner - Replaces Flyer Section */}
        <WholesaleBanner />

        {/* 10. New Arrivals Section */}
        <SectionCarousel
          title="New Arrivals"
          products={newArrivals}
        />

        {/* 11. Consultation CTA (Video Background) */}
        <VideoCTA />

        {/* 12. Best Sellers Section - Immediately after Video */}
        <SectionCarousel
          title="Best Sellers"
          products={bestSellers}
          className="bg-white"
        />

        {/* 13. Footer - Immediately after Best Sellers */}
        <Footer />
      </main>
    </div>
    </>
  )
} 