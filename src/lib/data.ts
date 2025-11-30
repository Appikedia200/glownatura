import type { NavItem, PromoMessage } from '@/types'

// Navigation Items - used in Header/NavMenu
export const navigationItems: NavItem[] = [
  { name: 'ABOUT US', href: '/about' },
  {
    name: 'BRANDS',
    href: '/brands',
    hasDropdown: true,
    dropdownItems: []
  },
  {
    name: 'FACE',
    href: '/face',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Cleansers', href: '/face/cleansers' },
      { name: 'Toners', href: '/face/toners' },
      { name: 'Serums', href: '/face/serums' },
      { name: 'Moisturizers', href: '/face/moisturizers' },
      { name: 'Sunscreen', href: '/face/sunscreen' },
      { name: 'Face Masks', href: '/face/face-masks' },
      { name: 'Eye Care', href: '/face/eye-care' },
      { name: 'Lip Care', href: '/face/lip-care' },
    ]
  },
  { name: 'BATH & BODY', href: '/shop?category=bath-body' },
  { name: 'SALES & OFFERS', href: '/shop?featured=true' },
  { name: 'BOOK A CONSULTATION', href: '/consultation' },
  {
    name: 'JEWELRY',
    href: '/shop?category=jewelry',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Glasses', href: '/shop?category=glasses' },
      { name: 'Watches', href: '/shop?category=watches' },
      { name: 'Necklaces', href: '/shop?category=necklaces' },
      { name: 'Earrings', href: '/shop?category=earrings' },
      { name: 'Finger Rings', href: '/shop?category=finger-rings' },
    ]
  },
  { name: 'GIFT CARDS', href: '/gift-cards' },
  { name: 'WHOLESALE', href: '/wholesale' },
]

// Promo Messages - used in ScrollingPromoBar
export const promoMessages: PromoMessage[] = [
  { text: 'BUY MORE SAVE MORE - CLICK HERE', link: '/shop?featured=true' },
  { text: 'GET REWARDED FOR SHOPPING - CLICK HERE', link: '/rewards' },
]

// Utility function for formatting prices
export function formatPrice(price: number): string {
  return `₦${price.toLocaleString()}`
}
