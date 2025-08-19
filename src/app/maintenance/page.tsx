import Image from 'next/image'
import Link from 'next/link'
import ScrollingPromoBar from '@/components/ScrollingPromoBar'
import Header from '@/components/Header'
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'

export default function MaintenancePage() {
  return (
    <>
      {/* 1. Scrolling Promo Bar - Always stays at top */}
      <ScrollingPromoBar />
      
      <div className="pt-[40px]">
        {/* Combined Header Section - Sticky as one unit */}
        <div className="sticky top-[40px] z-[9998] bg-[#FFF8F3] border-t border-gray-200 shadow-sm">
          {/* 2. Main Header */}
          <Header />

          {/* 3. Navigation Menu */}
          <NavMenu />
        </div>

                {/* Main Content */}
        <main className="min-h-screen bg-gradient-to-br from-[#F8F6F3] to-[#F0EDE8]">
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              
              {/* Logo/Brand Icon */}
              <div className="mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-[#B8C5B8] to-[#A8B5A8] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7.5 22H9.5L12 17.5L14.5 22H16.5L13 16V11C14.1 11 15 10.1 15 9Z"/>
                  </svg>
                </div>
              </div>

              {/* Headline */}
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight px-2"
                style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
              >
                We're Here to Serve You Better
              </h1>

              {/* Subtext */}
              <p 
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto px-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Our online shop is currently undergoing improvements. For now, kindly place your order via our WhatsApp representative or in person.
              </p>

              {/* WhatsApp CTA Button */}
              <div className="mb-4 sm:mb-6 px-4">
                <Link 
                  href="https://wa.me/2348162523436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
                  <span className="whitespace-nowrap">Place Your Order on WhatsApp</span>
                </Link>
              </div>

              {/* Small note */}
              <p 
                className="text-xs sm:text-sm text-gray-500 italic px-4"
                style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
              >
                Thank you for your patience—your skincare journey matters to us.
              </p>

              {/* Decorative Elements */}
              <div className="mt-8 sm:mt-12 flex justify-center space-x-3 sm:space-x-4 opacity-30">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B8C5B8] rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B8C5B8] rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B8C5B8] rounded-full"></div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
} 