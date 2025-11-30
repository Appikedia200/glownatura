'use client'

import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    id: 'bath-body',
    name: 'BATH & BODY',
    image: '/images/collections/bath-and-body.png',
    href: '/shop?category=bath-body'
  },
  {
    id: 'asian-brands',
    name: 'ASIAN BRANDS',
    image: '/images/collections/asian.png',
    href: '/shop?category=asian'
  },
  {
    id: 'sunscreens',
    name: 'SUNSCREENS',
    image: '/images/collections/sunscreen.png',
    href: '/shop?category=sunscreen'
  },
  {
    id: 'skincare',
    name: 'SKINCARE',
    image: '/images/collections/skincare.png',
    href: '/shop?category=skincare'
  }
]

export default function CollectionGrid() {
  return (
    <section className="py-8 xs:py-12 sm:py-16 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12">
        
        {/* Section Header - Responsive */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-12">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-2 xs:mb-3 sm:mb-4 font-libre">
            Our Collections
          </h2>
          <div className="w-40 xs:w-60 sm:w-80 h-[2px] bg-black mx-auto"></div>
        </div>

        {/* Collections Grid - Fully responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group block"
            >
              {/* Collection Image - Responsive aspect and spacing */}
              <div className="relative aspect-[4/5] mb-2 xs:mb-3 sm:mb-4 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 475px) 50vw, (max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>

              {/* Collection Label - Responsive padding and text */}
              <div className="border border-black">
                <div className="py-1.5 xs:py-2 sm:py-3 px-2 xs:px-3 sm:px-4 bg-white text-center">
                  <h3 className="text-[10px] xs:text-xs sm:text-sm font-medium text-black uppercase tracking-wide font-montserrat">
                    {collection.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
