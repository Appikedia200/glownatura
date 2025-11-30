'use client'

import Link from 'next/link'

const JEWELRY_CATEGORIES = [
  { name: 'Glasses', href: '/jewelry/glasses', description: 'Stylish eyewear' },
  { name: 'Watches', href: '/jewelry/watches', description: 'Elegant timepieces' },
  { name: 'Necklaces', href: '/jewelry/necklaces', description: 'Beautiful necklaces' },
  { name: 'Earrings', href: '/jewelry/earrings', description: 'Stunning earrings' },
  { name: 'Finger Rings', href: '/jewelry/rings', description: 'Elegant rings' },
]

export default function JewelryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* NO BANNER - Clean white layout as per guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-black">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-black font-medium">Jewelry</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair text-gray-900 mb-4">
            Jewelry Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of elegant accessories
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JEWELRY_CATEGORIES.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group border border-gray-200 rounded-lg p-8 hover:border-black hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>
              <span className="text-sm font-medium text-black group-hover:underline">
                Shop Now →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

