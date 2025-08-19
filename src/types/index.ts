// Enum Types
export enum SkinType {
  DRY = 'dry',
  OILY = 'oily',
  COMBINATION = 'combination',
  SENSITIVE = 'sensitive',
  ACNE_PRONE = 'acne-prone',
  MATURE = 'mature',
  ALL = 'all'
}

export enum AgeRange {
  AGE_18_24 = '18-24',
  AGE_25_34 = '25-34', 
  AGE_35_44 = '35-44',
  AGE_45_54 = '45-54',
  AGE_55_PLUS = '55+'
}

// Product Category Structure
export interface ProductCategory {
  id: string
  name: string
  slug: string
}

// Product Image Structure
export interface ProductImage {
  url: string
  alt: string
  isPrimary?: boolean
}

// Core Product Types
export interface Product {
  id: string
  name: string
  brand: string
  description: string
  price: number
  originalPrice?: number
  discount?: string // e.g., "Buy 6, Get 3% OFF"
  images: ProductImage[] // Array of image objects
  category: ProductCategory // Category object instead of string
  tags: string[]
  rating?: number
  reviewCount?: number
  stockQuantity: number // Changed from stockCount to stockQuantity
  isNewArrival?: boolean
  isBestSeller?: boolean // Changed from isBestSeller
  isBackInStock?: boolean
  isFeatured?: boolean
  skinTypes?: SkinType[] // Array of applicable skin types
  ingredients?: string[] // Array of key ingredients
  promotions?: ProductPromotion[]
  prescriptionOnly?: boolean
}

// Cart Types
export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  subtotal: number
  total: number
}

// Collection Types
export interface Collection {
  id: string
  name: string
  description: string
  image: string // Path from /public/images/collections/
  href: string
}

// Category Types
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image?: string // Optional, subcategories might not have images
  icon?: string
  order: number
  isActive: boolean
  productCount: number
  subcategories?: Category[] // Optional, for parent categories
  parentId?: string // Optional, for subcategories
}

// Hero Banner Types
export interface HeroBanner {
  id: string
  title: string
  subtitle?: string
  backgroundImage: string // Path from /public/images/banners/
  ctaText: string
  ctaLink: string
}

// Navigation Types
export interface NavItem {
  name: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: Array<{
    name: string
    href: string
  }>
}

// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  wishlist: string[] // Product IDs
}

// Review Types
export interface ReviewUser {
  firstName: string
  lastName: string
  avatar?: string
  isVerifiedPurchaser: boolean
}

export interface Review {
  id: string
  productId: string
  userId: string
  user: ReviewUser
  rating: number
  title?: string
  comment: string
  images?: string[]
  helpfulCount?: number
  isRecommended?: boolean
  skinType?: SkinType
  ageRange?: AgeRange
  createdAt: Date
  updatedAt?: Date
  date?: string
  verified?: boolean
}

// Promo Bar Types
export interface PromoMessage {
  text: string
  link?: string
} 

export interface ProductPromotion {
  type: string
  description: string
  discount?: number
} 