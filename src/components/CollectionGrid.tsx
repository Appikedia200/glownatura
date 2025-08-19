'use client'

import Image from 'next/image'

const collections = [
  {
    id: 'bath-body',
    name: 'BATH & BODY',
    image: '/images/collections/bath-and-body.png',
    href: '/collections/bath-body'
  },
  {
    id: 'asian-brands',
    name: 'ASIAN BRANDS',
    image: '/images/collections/asian.png',
    href: '/collections/asian-brands'
  },
  {
    id: 'sunscreens',
    name: 'SUNSCREENS',
    image: '/images/collections/sunscreen.png',
    href: '/collections/sunscreens'
  },
  {
    id: 'skincare',
    name: 'SKINCARE',
    image: '/images/collections/skincare.png',
    href: '/collections/skincare'
  }
]

export default function CollectionGrid() {
  return (
    <section className="py-16 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4 font-libre">
            Our Collections
          </h2>
          <div className="w-80 h-[2px] bg-black mx-auto"></div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href={collection.href}
              className="group block"
            >
              {/* Collection Image */}
              <div className="relative aspect-[4/5] mb-4 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Collection Label */}
              <div className="border border-black">
                <div className="py-3 px-4 bg-white text-center">
                  <h3 className="text-sm font-medium text-black uppercase tracking-wide font-montserrat">
                    {collection.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 