'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HeroBanner() {
  const router = useRouter()

  const handleDiscoverClick = () => {
    console.log('Discover More clicked - navigating to maintenance...')
    router.push('/maintenance')
  }

  return (
    <div 
      className="w-full bg-[#dbe0d0] border-b border-black relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto h-full relative">
        <div className="flex items-end h-full pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-12 pb-12 sm:pb-16">
          
          {/* Left Column - Text Content - Optimized for all device sizes */}
          <div className="z-10 relative w-[70%] xs:w-[68%] sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[45%] max-w-[650px]">
            <h1 className="text-[24px] xs:text-[26px] sm:text-[36px] md:text-[60px] lg:text-[75px] leading-[0.8] text-black mb-3 xs:mb-4 sm:mb-6 whitespace-pre-line select-none" 
                style={{ 
                  fontFamily: 'Gupter, Georgia, serif',
                  fontWeight: 700,
                  fontStretch: 'condensed'
                }}>
              {"Start Your\nSkin Journey"}
            </h1>
            <button 
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 border border-black bg-transparent text-black hover:border-gray-600 hover:text-gray-700 transition-all duration-300 font-medium tracking-wider text-[10px] sm:text-xs md:text-sm uppercase cursor-pointer"
              style={{ fontFamily: 'Gupter, Georgia, serif' }}
              onClick={handleDiscoverClick}
            >
              DISCOVER MORE
            </button>
          </div>

          {/* Right Column - Product Image - Responsive for all devices */}
          <div className="absolute right-0 top-0 bottom-0 w-[30%] xs:w-[32%] sm:w-[40%] md:w-[40%] lg:w-[50%] xl:w-[55%] flex items-center justify-end pr-1 xs:pr-2 sm:pr-4 md:pr-6 py-4 sm:py-6 md:py-8 z-10">
            {/* Shadow - Responsive */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-[60%] h-2 sm:h-3 md:h-4 bg-gradient-to-t from-black/6 via-black/2 to-transparent blur-sm rounded-full"></div>
            
            {/* Product Image - Responsive Container */}
            <div className="relative h-full flex items-end justify-end w-full max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[450px]">
              <Image
                src="/images/banners/herobanner.png"
                alt="Start Your Skin Journey - Premium Skincare Products"
                width={2480}
                height={1984}
                className="h-full w-auto object-contain object-bottom max-h-full"
                priority
                style={{
                  maxHeight: '100%',
                  width: 'auto',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
} 