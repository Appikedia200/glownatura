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
    <nav className="header-nav">
      {/* ABOUT US */}
      <Link href="/about">ABOUT US</Link>

      {/* BRANDS */}
      <Link href="/brands">BRANDS</Link>
      
      {/* FACE */}
      <Link href="/face">FACE</Link>
      
      {/* BATH & BODY */}
      <Link href="/body">BATH & BODY</Link>
      
      {/* SALES & OFFERS */}
      <Link href="/sales">SALES & OFFERS</Link>
      
      {/* BOOK A CONSULTATION */}
      <Link href="/consultation">BOOK A CONSULTATION</Link>
      
      {/* GIFT CARDS */}
      <Link href="/gift-cards">GIFT CARDS</Link>
      
      {/* WHOLESALE */}
      <Link href="/wholesale">WHOLESALE</Link>

      <style jsx>{`
        .header-nav {
          display: flex;
          justify-content: center;
          gap: 28px;
          padding: 14px 0;
          border-bottom: 1px solid #dfd7ca !important;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0 !important;
        }

        .header-nav :global(a) {
          color: #222;
          text-decoration: none;
          transition: color 0.2s;
        }

        .header-nav :global(a:hover) {
          color: #000;
        }

        @media (max-width: 1024px) {
          .header-nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}
