'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WholesaleBanner() {
  return (
    <section className="py-0 bg-white">
      <div className="w-full">
          
        {/* Full-Width Wholesale Banner - Mobile Optimized */}
              <Link
        href="/maintenance" 
          className="block group cursor-pointer"
          >
          <div className="relative w-full min-h-[300px] h-auto">
            <Image
              src="/images/banners/Wholesales.png"
              alt="Wholesale Program - Join Our Network"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              sizes="100vw"
              priority
            />
                </div>
        </Link>

      </div>
    </section>
  )
} 