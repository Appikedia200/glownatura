'use client'

import Link from 'next/link'
import Banner from '@/components/ui/Banner'

const BODY_CATEGORIES = [
  { name: 'Body Lotions', href: '/body/lotions', description: 'Hydrating lotions for soft, smooth skin' },
  { name: 'Body Wash', href: '/body/wash', description: 'Gentle cleansers for daily use' },
  { name: 'Body Serums', href: '/body/serums', description: 'Targeted treatments for body skin' },
  { name: 'Body Treatments', href: '/body/treatments', description: 'Specialized care for specific concerns' },
  { name: 'Body Moisturizers & Oils', href: '/body/moisturizers-oils', description: 'Rich hydration and nourishment' },
  { name: 'Kits', href: '/body/kits', description: 'Complete body care collections' },
]

export default function BodyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <Banner
        title="Bath & Body"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Bath & Body' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair text-gray-900 mb-4">
            Explore Our Body Care Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From luxurious lotions to revitalizing treatments, discover products that nourish and pamper your skin from head to toe.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BODY_CATEGORIES.map((category) => (
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

