'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useBrands } from '@/lib/hooks'

const FACE_SKINCARE = [
  { name: 'Sunscreens', href: '/face/sunscreens' },
  { name: 'Face Cleansers', href: '/face/cleansers' },
  { name: 'Face Toners', href: '/face/toners' },
  { name: 'Face Moisturizers', href: '/face/moisturizers' },
  { name: 'Face Serums', href: '/face/serums' },
  { name: 'Face Exfoliators', href: '/face/exfoliators' },
  { name: 'Face Masks', href: '/face/masks' },
  { name: 'Cleansing Oils', href: '/face/cleansing-oils' },
  { name: 'Eye Care', href: '/face/eye-care' },
  { name: 'Lip Care', href: '/face/lip-care' },
  { name: 'Kits & Duos', href: '/face/kits-duos' },
  { name: 'Treatments', href: '/face/treatments' },
]

const FACE_INGREDIENTS = [
  { name: 'Alpha Arbutin', href: '/shop?ingredient=alpha-arbutin' },
  { name: 'Benzoyl Peroxide', href: '/shop?ingredient=benzoyl-peroxide' },
  { name: 'Glycolic Acid', href: '/shop?ingredient=glycolic-acid' },
  { name: 'Hydroquinone', href: '/shop?ingredient=hydroquinone' },
  { name: 'Lactic Acid', href: '/shop?ingredient=lactic-acid' },
  { name: 'Kojic Acid', href: '/shop?ingredient=kojic-acid' },
  { name: 'Niacinamide', href: '/shop?ingredient=niacinamide' },
  { name: 'Hyaluronic Acid', href: '/shop?ingredient=hyaluronic-acid' },
  { name: 'Salicylic Acid', href: '/shop?ingredient=salicylic-acid' },
  { name: 'Vitamin C', href: '/shop?ingredient=vitamin-c' },
  { name: 'Tranexamic Acid', href: '/shop?ingredient=tranexamic-acid' },
  { name: 'Azelaic Acid', href: '/shop?ingredient=azelaic-acid' },
  { name: 'Ceramides', href: '/shop?ingredient=ceramides' },
]

const BODY_ITEMS = [
  { name: 'Body Lotions', href: '/body/lotions' },
  { name: 'Body Wash', href: '/body/wash' },
  { name: 'Body Serums', href: '/body/serums' },
  { name: 'Body Treatments', href: '/body/treatments' },
  { name: 'Body Moisturizers & Oils', href: '/body/moisturizers-oils' },
  { name: 'Kits', href: '/body/kits' },
]

const JEWELRY_ITEMS = [
  { name: 'Glasses', href: '/jewelry/glasses' },
  { name: 'Watches', href: '/jewelry/watches' },
  { name: 'Necklaces', href: '/jewelry/necklaces' },
  { name: 'Earrings', href: '/jewelry/earrings' },
  { name: 'Finger Rings', href: '/jewelry/rings' },
]

export default function NavMenu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-transparent border-t-0 mt-0 pt-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <div className="flex items-center space-x-1">
            {/* ABOUT US */}
            <Link
              href="/about"
              className="py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
            >
              <span className="relative">
                About Us
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
              </span>
            </Link>

            {/* BRANDS + */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('brands')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/brands"
                className="block py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
              >
                <span className="relative">
                  Brands
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
                </span>
              </Link>

              {/* BRANDS DROPDOWN - 2 Column */}
              {activeDropdown === 'brands' && (
                <div className="absolute top-full left-0 bg-white z-50 min-w-[400px] border border-gray-200 shadow-xl">
                  <div className="grid grid-cols-2 gap-8 p-8">
                    {/* Left: Brand List */}
                    <div>
                      <div className="space-y-3">
                        <Link href="/brands/cerave" className="block text-sm text-gray-700 hover:text-black transition-colors">• CeraVe</Link>
                        <Link href="/brands/cosrx" className="block text-sm text-gray-700 hover:text-black transition-colors">• Cosrx</Link>
                        <Link href="/brands/simple" className="block text-sm text-gray-700 hover:text-black transition-colors">• Simple</Link>
                        <Link href="/brands/face-facts" className="block text-sm text-gray-700 hover:text-black transition-colors">• Face Facts</Link>
                        <Link href="/brands/the-ordinary" className="block text-sm text-gray-700 hover:text-black transition-colors">• The Ordinary</Link>
                        <Link href="/brands/good-molecules" className="block text-sm text-gray-700 hover:text-black transition-colors">• Good Molecules</Link>
                      </div>
                    </div>
                    
                    {/* Right: View All Button */}
                    <div className="flex items-center justify-center">
                      <Link
                        href="/brands"
                        className="inline-block px-6 py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                      >
                        View All Brands
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FACE */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('face')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/face"
                className="block py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
              >
                <span className="relative">
                  Face
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
                </span>
              </Link>

              {/* FACE DROPDOWN - 2 Sections */}
              {activeDropdown === 'face' && (
                <div className="absolute top-full left-0 bg-white z-50 min-w-[600px] border border-gray-200 shadow-xl">
                  <div className="grid grid-cols-2 gap-8 p-8">
                    {/* Left: Skincare */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-4">Skincare</h3>
                      <div className="space-y-2">
                        {FACE_SKINCARE.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm text-gray-700 hover:text-black transition-colors"
                          >
                            • {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right: Ingredients */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-4">Ingredients</h3>
                      <div className="space-y-2">
                        {FACE_INGREDIENTS.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm text-gray-700 hover:text-black transition-colors"
                          >
                            • {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BATH & BODY */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('body')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/body"
                className="block py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
              >
                <span className="relative">
                  Bath & Body
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
                </span>
              </Link>

              {/* BODY DROPDOWN */}
              {activeDropdown === 'body' && (
                <div className="absolute top-full left-0 bg-white z-50 min-w-[280px] border border-gray-200 shadow-xl">
                  <div className="p-6">
                    <div className="space-y-2">
                      {BODY_ITEMS.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-gray-700 hover:text-black transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* JEWELRY */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('jewelry')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/jewelry"
                className="block py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
              >
                <span className="relative">
                  Jewelry
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
                </span>
              </Link>

              {/* JEWELRY DROPDOWN */}
              {activeDropdown === 'jewelry' && (
                <div className="absolute top-full left-0 bg-white z-50 min-w-[220px] border border-gray-200 shadow-xl">
                  <div className="p-6">
                    <div className="space-y-2">
                      {JEWELRY_ITEMS.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-gray-700 hover:text-black transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SALES & OFFERS */}
            <Link
              href="/sales"
              className="py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
            >
              <span className="relative">
                Sales & Offers
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
              </span>
            </Link>

            {/* BOOK A CONSULTATION */}
            <Link
              href="/consultation"
              className="py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
            >
              <span className="relative">
                Book A Consultation
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
              </span>
            </Link>

            {/* GIFT CARDS */}
            <Link
              href="/gift-cards"
              className="py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
            >
              <span className="relative">
                Gift Cards
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
              </span>
            </Link>

            {/* WHOLESALE */}
            <Link
              href="/wholesale"
              className="py-4 px-5 text-[13px] font-medium uppercase tracking-wide text-gray-800 hover:text-black transition-colors relative group"
            >
              <span className="relative">
                Wholesale
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
