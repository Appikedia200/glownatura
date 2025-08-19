'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WholesaleBanner() {
  return (
    <section className="py-0 bg-white">
      <div className="w-full">
          
        {/* Full-Width Wholesale Banner */}
              <Link
        href="/maintenance" 
          className="block group cursor-pointer"
          >
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              src="/images/banners/Wholesales.png"
              alt="Wholesale Program - Join Our Network"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
                </div>
        </Link>

      </div>
    </section>
  )
} 