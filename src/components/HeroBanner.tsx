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
    <div className="w-full bg-[#dbe0d0] border-b border-black relative h-[450px] lg:h-[500px] overflow-hidden">
      <div className="max-w-7xl mx-auto h-full relative">
        <div className="flex items-end h-full pl-6 md:pl-8 pr-6 md:pr-12 pb-16">
          
          {/* Left Column - Text Content - Extreme Left Edge */}
          <div className="z-10 relative w-full max-w-[650px]">
            <h1 className="text-[50px] md:text-[60px] lg:text-[75px] leading-[0.8] text-black mb-6 whitespace-pre-line select-none" 
                style={{ 
                  fontFamily: 'Gupter, Georgia, serif',
                  fontWeight: 700,
                  fontStretch: 'condensed'
                }}>
              {"Start Your\nSkin Journey"}
            </h1>
            <button 
              className="px-8 py-3 border border-black bg-transparent text-black hover:border-gray-600 hover:text-gray-700 transition-all duration-300 font-medium tracking-wider text-sm uppercase cursor-pointer"
              style={{ fontFamily: 'Gupter, Georgia, serif' }}
              onClick={handleDiscoverClick}
            >
              DISCOVER MORE
            </button>
          </div>

          {/* Right Column - Product Image - Properly Contained */}
          <div className="absolute right-0 top-0 bottom-0 w-[52%] lg:w-[58%] flex items-center justify-end pr-6 py-8 z-10">
            {/* Subtle base shadow for floor contact effect */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[60%] h-4 bg-gradient-to-t from-black/6 via-black/2 to-transparent blur-sm rounded-full"></div>
            
            {/* Product Image - Fully Contained */}
            <div className="relative h-full flex items-end justify-end w-full max-h-[400px] lg:max-h-[450px]">
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