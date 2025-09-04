'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WholesaleBanner() {
  return (
    <section className="py-0 bg-white">
      <div className="w-full overflow-x-auto">
          
        {/* Full-Width Wholesale Banner - Complete Image Always Visible */}
              <Link
        href="/maintenance" 
          className="block group cursor-pointer"
          >
          <div className="relative w-full min-w-[800px] md:min-w-full">
            <Image
              src="/images/banners/Wholesales.png"
              alt="Wholesale Program - Join Our Network"
              width={1200}
              height={400}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 800px, 100vw"
              priority
              style={{
                minHeight: '200px',
                height: 'auto'
              }}
            />
                </div>
        </Link>

      </div>
    </section>
  )
} 