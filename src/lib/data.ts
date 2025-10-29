import { Product, Collection, HeroBanner, NavItem, PromoMessage, SkinType } from '@/types'

// Sample Products Data
export const products: Product[] = [
  // Featured Items
  {
    id: 'skeenlogic-aha-bha',
    name: 'Skeenlogic AHA/BHA Gentle Deep Pore Cleanser 200ml/6.7fl oz',
    brand: 'Skeenlogic',
    description: 'Gentle deep pore cleanser with AHA/BHA for smooth, clear skin',
    price: 11500,
    originalPrice: 13000,
    images: [
      {
        url: '/images/FeaturedItems/facefacts-hydrating-cleanser.png',
        alt: 'Skeenlogic AHA/BHA Gentle Deep Pore Cleanser',
        isPrimary: true
      }
    ],
    category: {
      id: 'cleansers',
      name: 'Cleansers',
      slug: 'cleansers'
    },
    tags: ['cleanser', 'aha', 'bha', 'pore-care'],
    rating: 4.5,
    reviewCount: 7,
    stockQuantity: 45,
    isFeatured: true,
    skinTypes: [SkinType.OILY, SkinType.COMBINATION, SkinType.ACNE_PRONE],
    ingredients: ['AHA', 'BHA', 'Salicylic Acid'],
    promotions: [
      { type: 'buy_get', description: 'Buy 6, Get 3% Off' },
      { type: 'buy_get', description: 'Buy 3, Get 1% Off' }
    ]
  },
  {
    id: 'kabazel-azelaic-acid',
    name: 'Kabazel – Azelaic Acid Gel 20% (Alternative to EZANIC 20%)',
    brand: 'Kabazel',
    description: 'Powerful azelaic acid gel for acne and hyperpigmentation',
    price: 5999,
    images: [
      {
        url: '/images/FeaturedItems/7-2.png',
        alt: 'Kabazel Azelaic Acid Gel 20%',
        isPrimary: true
      }
    ],
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    tags: ['azelaic-acid', 'acne', 'hyperpigmentation'],
    rating: 4.3,
    reviewCount: 12,
    stockQuantity: 32,
    isFeatured: true,
    skinTypes: [SkinType.OILY, SkinType.ACNE_PRONE],
    ingredients: ['Azelaic Acid'],
    promotions: [
      { type: 'buy_get', description: 'Buy 6, Get 3% Off' },
      { type: 'buy_get', description: 'Buy 3, Get 1% Off' }
    ]
  },
  {
    id: 'kabinone-hydroquinone',
    name: 'Kabinone – Hydroquinone Cream USP 4% 20g',
    brand: 'Kabinone',
    description: 'Professional strength hydroquinone cream for skin lightening',
    price: 4999,
    images: [
      {
        url: '/images/FeaturedItems/niveasupergel2.png',
        alt: 'Kabinone Hydroquinone Cream USP 4%',
        isPrimary: true
      }
    ],
    category: {
      id: 'treatments',
      name: 'Treatments',
      slug: 'treatments'
    },
    tags: ['hydroquinone', 'lightening', 'prescription'],
    rating: 4.6,
    reviewCount: 8,
    stockQuantity: 18,
    isFeatured: true,
    skinTypes: [SkinType.ALL],
    ingredients: ['Hydroquinone USP 4%'],
    prescriptionOnly: true,
    promotions: [
      { type: 'buy_get', description: 'Buy 6, Get 3% Off' },
      { type: 'buy_get', description: 'Buy 3, Get 1% Off' }
    ]
  },
  {
    id: 'timeless-vitamin-c',
    name: 'Timeless Skin Care 20% Vitamin C Plus E Ferulic Acid Serum 1fl oz (30ml)',
    brand: 'Timeless',
    description: 'Potent vitamin C serum with vitamin E and ferulic acid',
    price: 19500,
    images: [
      {
        url: '/images/FeaturedItems/WhatsApp-Image-2025-07-01-at-09.49.28_8f16e25e-1024x1024.png',
        alt: 'Timeless Vitamin C Plus E Ferulic Acid Serum',
        isPrimary: true
      }
    ],
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    tags: ['vitamin-c', 'antioxidant', 'anti-aging'],
    rating: 4.7,
    reviewCount: 15,
    stockQuantity: 25,
    isFeatured: true,
    skinTypes: [SkinType.ALL],
    ingredients: ['Vitamin C 20%', 'Vitamin E', 'Ferulic Acid'],
    promotions: [
      { type: 'buy_get', description: 'Buy 6, Get 3% Off' },
      { type: 'buy_get', description: 'Buy 3, Get 1% Off' }
    ]
  },



  // New Arrivals
  {
    id: 'cerave-lotion-new',
    name: 'CeraVe Daily Moisturizing Lotion 16oz',
    brand: 'CeraVe',
    description: 'Lightweight moisturizing lotion for normal to dry skin',
    price: 20000,
    images: [
      {
        url: '/images/NewArrival/cerave-lotion-16oz.png',
        alt: 'CeraVe Daily Moisturizing Lotion 16oz',
        isPrimary: true
      }
    ],
    category: {
      id: 'moisturizers',
      name: 'Moisturizers',
      slug: 'moisturizers'
    },
    tags: ['moisturizer', 'ceramides', 'daily-care'],
    rating: 4.3,
    reviewCount: 15,
    stockQuantity: 22,
    isNewArrival: true,
    skinTypes: [SkinType.DRY, SkinType.ALL],
    ingredients: ['Ceramides', 'Hyaluronic Acid', 'Niacinamide']
  },
  {
    id: 'whatsapp-beauty-product',
    name: 'Beauty Essential Treatment',
    brand: 'Beauty Plus',
    description: 'Advanced beauty treatment for radiant skin',
    price: 18000,
    images: [
      {
        url: '/images/NewArrival/WhatsApp-Image-at-bb-e-1024x1024.png',
        alt: 'Beauty Essential Treatment',
        isPrimary: true
      }
    ],
    category: {
      id: 'treatments',
      name: 'Treatments',
      slug: 'treatments'
    },
    tags: ['treatment', 'beauty', 'radiant'],
    rating: 4.4,
    reviewCount: 11,
    stockQuantity: 18,
    isNewArrival: true,
    skinTypes: [SkinType.ALL],
    ingredients: ['Active Botanicals', 'Vitamin E', 'Peptides']
  },
  {
    id: 'ordinary-body-care',
    name: 'The Ordinary Body Care Collection',
    brand: 'The Ordinary',
    description: 'Complete body care routine with proven ingredients',
    price: 8000,
    images: [
      {
        url: '/images/NewArrival/The Ordinary Body care.png',
        alt: 'The Ordinary Body Care Collection',
        isPrimary: true
      }
    ],
    category: {
      id: 'body-care',
      name: 'Body Care',
      slug: 'body-care'
    },
    tags: ['body-care', 'routine', 'proven-ingredients'],
    rating: 4.6,
    reviewCount: 24,
    stockQuantity: 31,
    isNewArrival: true,
    skinTypes: [SkinType.ALL],
    ingredients: ['Hyaluronic Acid', 'Ceramides', 'Peptides']
  },
  {
    id: 'dr-teals-body-wash-new',
    name: 'Dr Teal\'s Body Wash with Prebiotic Lemon Balm 24 fl oz',
    brand: 'Dr Teal\'s',
    description: 'Prebiotic body wash with lemon balm and essential oils',
    price: 7000,
    images: [
      {
        url: '/images/NewArrival/Dr-Teal-s-Body-Wash-with-Prebiotic-Lemon-Balm-and-Essential-Oil-Blend-24-fl-oz_96914a93-2ecf-47ef-a153-35e9205121df.3e254527ee5a73b9105e2efd17f9319c-1.png',
        alt: 'Dr Teal\'s Body Wash with Prebiotic Lemon Balm',
        isPrimary: true
      }
    ],
    category: {
      id: 'cleansers',
      name: 'Cleansers',
      slug: 'cleansers'
    },
    tags: ['body-wash', 'prebiotic', 'lemon-balm'],
    rating: 4.5,
    reviewCount: 19,
    stockQuantity: 26,
    isNewArrival: true,
    skinTypes: [SkinType.ALL],
    ingredients: ['Prebiotic Complex', 'Lemon Balm', 'Essential Oils']
  }
]

// Collections Data
export const collections: Collection[] = [
  {
    id: 'bath-body',
    name: 'Bath & Body',
    image: '/images/collections/bath-body.jpg',
    href: '/maintenance',
    description: 'Premium bath and body products for complete care'
  },
  {
    id: 'asian-brands',
    name: 'Asian Brands',
    image: '/images/collections/asian-brands.jpg',
    href: '/maintenance',
    description: 'Authentic Asian beauty brands and skincare'
  },
  {
    id: 'sunscreens',
    name: 'Sunscreens',
    image: '/images/collections/sunscreens.jpg',
    href: '/maintenance',
    description: 'High-quality sun protection for all skin types'
  },
  {
    id: 'korean-skincare',
    name: 'Korean Skincare',
    image: '/images/collections/korean-skincare.jpg',
    href: '/maintenance',
    description: 'Innovative Korean skincare products and routines'
  }
]

// Hero Banner Data - Now uses actual image
export const heroBanner: HeroBanner = {
  id: 'main-hero',
  title: 'Start Your Skin Journey',
  ctaText: 'Discover More',
  ctaLink: '/products',
  backgroundImage: '/images/collections/Start-your-journey.png' // Now uses actual image!
}

// Navigation Data
export const navigationItems: NavItem[] = [
  { 
    name: 'About Us', 
    href: '/about',
    hasDropdown: false
  },
  { 
    name: 'Brands', 
    href: '/maintenance',
    hasDropdown: false
  },
  { 
    name: 'Face', 
    href: '/maintenance',
    hasDropdown: false
  },
  { 
    name: 'Bath & Body', 
    href: '/maintenance',
    hasDropdown: false
  },
  { 
    name: 'Sales & Offers', 
    href: '/maintenance',
    hasDropdown: false
  },
  { name: 'Book a Consultation', href: '/maintenance' },
  { name: 'Rewards', href: '/maintenance' },
  { name: 'Gift Cards', href: '/maintenance' },
  { 
    name: 'Wholesale', 
    href: '/maintenance',
    hasDropdown: false
  }
]

// Promo Messages
export const promoMessages: PromoMessage[] = [
  { text: 'JOIN GLOW NATURA PLUS FOR EXCLUSIVE DEALS', link: '/maintenance' },
  { text: 'BUY MORE SAVE MORE - CLICK HERE', link: '/maintenance' },
  { text: 'GET REWARDED FOR SHOPPING - CLICK HERE', link: '/maintenance' },
  { text: 'FREE SHIPPING ON ORDERS OVER ₦25,000', link: '/maintenance' }
]

// Updated with 4 banners for authorized resellers
export const authorizedResellerBanners = [
  '/images/banners/reseller-1.jpg',
  '/images/banners/reseller-2.jpg',
  '/images/banners/reseller-3.jpg',
  '/images/banners/reseller-4.jpg'  // Added 4th banner!
]

// Best Sellers - using images from BestSeller folder
const bestSellerProducts: Product[] = [
  {
    id: 'fff-face-cream',
    name: 'FFF Face Cream Premium Treatment',
    brand: 'FFF Beauty',
    description: 'Premium face cream for intensive skin nourishment',
    price: 25000,
    images: [
      {
        url: '/images/BestSeller/fff-face-cream.png',
        alt: 'FFF Face Cream Premium Treatment',
        isPrimary: true
      }
    ],
    category: {
      id: 'moisturizers',
      name: 'Moisturizers',
      slug: 'moisturizers'
    },
    tags: ['face-cream', 'premium', 'nourishing'],
    rating: 4.8,
    reviewCount: 35,
    stockQuantity: 45,
    isBestSeller: true,
    isFeatured: true,
    skinTypes: [SkinType.ALL],
    ingredients: ['Hyaluronic Acid', 'Peptides', 'Vitamin E'],
    promotions: [
      { type: 'bulk', description: 'Buy 6, Get 3% Off', discount: 3 }
    ]
  },
  {
    id: 'download-product',
    name: 'Advanced Skincare Solution',
    brand: 'Skincare Pro',
    description: 'Advanced formula for comprehensive skin care',
    price: 22000,
    images: [
      {
        url: '/images/BestSeller/download-5-1.png',
        alt: 'Advanced Skincare Solution',
        isPrimary: true
      }
    ],
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    tags: ['advanced', 'solution', 'comprehensive'],
    rating: 4.7,
    reviewCount: 28,
    stockQuantity: 32,
    isBestSeller: true,
    isFeatured: true,
    skinTypes: [SkinType.ALL],
    ingredients: ['Retinol', 'Niacinamide', 'Vitamin C'],
    promotions: [
      { type: 'bulk', description: 'Buy 6, Get 3% Off', discount: 3 }
    ]
  },
  {
    id: 'cosrx-centella-toner',
    name: 'COSRX Centella Water Calming Toner',
    brand: 'COSRX',
    description: 'Gentle calming toner with centella asiatica extract',
    price: 18500,
    images: [
      {
        url: '/images/BestSeller/Cosrx-centellar-water-toner.png',
        alt: 'COSRX Centella Water Calming Toner',
        isPrimary: true
      }
    ],
    category: {
      id: 'toners',
      name: 'Toners & Essences',
      slug: 'toners'
    },
    tags: ['centella', 'calming', 'toner'],
    rating: 4.6,
    reviewCount: 42,
    stockQuantity: 38,
    isBestSeller: true,
    isFeatured: true,
    skinTypes: [SkinType.SENSITIVE, SkinType.ALL],
    ingredients: ['Centella Asiatica', 'Hyaluronic Acid', 'Panthenol'],
    promotions: [
      { type: 'bulk', description: 'Buy 6, Get 3% Off', discount: 3 }
    ]
  },
  {
    id: 'foaming-cream-wash',
    name: 'Foaming Cream Wash Gentle Cleanser',
    brand: 'Gentle Care',
    description: 'Luxurious foaming cream wash for gentle cleansing',
    price: 15000,
    images: [
      {
        url: '/images/BestSeller/Foaming-Cream-Wash-.png',
        alt: 'Foaming Cream Wash Gentle Cleanser',
        isPrimary: true
      }
    ],
    category: {
      id: 'cleansers',
      name: 'Cleansers',
      slug: 'cleansers'
    },
    tags: ['foaming', 'cream', 'gentle'],
    rating: 4.5,
    reviewCount: 31,
    stockQuantity: 40,
    isBestSeller: true,
    isFeatured: true,
    skinTypes: [SkinType.ALL],
    ingredients: ['Glycerin', 'Ceramides', 'Amino Acids'],
    promotions: [
      { type: 'bulk', description: 'Buy 6, Get 3% Off', discount: 3 }
    ]
  }
]

// Utility functions
export const getFeaturedProducts = () => products.filter(p => p.isFeatured || p.isBestSeller);
// Back In Stock products - 8 products for carousel (2 sets of 4)
const backInStockProducts: Product[] = [
  // Set 1 (First 4 products)
  {
    id: 'back-fff-face-cream',
    name: 'FFF Face Cream Premium Treatment',
    brand: 'FFF Beauty',
    description: 'Premium face cream for intensive skin nourishment',
    price: 25000,
    images: [{ url: '/images/BackinStock/fff-face-cream.png', alt: 'FFF Face Cream Premium Treatment', isPrimary: true }],
    category: { id: 'moisturizers', name: 'Moisturizers', slug: 'moisturizers' },
    tags: ['face-cream', 'premium', 'nourishing'],
    rating: 4.8, reviewCount: 35, stockQuantity: 12, isBackInStock: true,
    skinTypes: [SkinType.ALL], ingredients: ['Hyaluronic Acid', 'Peptides', 'Vitamin E']
  },
  {
    id: 'back-download-product',
    name: 'Advanced Skincare Solution',
    brand: 'Skincare Pro',
    description: 'Advanced formula for comprehensive skin care',
    price: 22000,
    images: [{ url: '/images/BackinStock/download-5-1.png', alt: 'Advanced Skincare Solution', isPrimary: true }],
    category: { id: 'serums', name: 'Serums & Treatments', slug: 'serums' },
    tags: ['advanced', 'solution', 'comprehensive'],
    rating: 4.7, reviewCount: 28, stockQuantity: 18, isBackInStock: true,
    skinTypes: [SkinType.ALL], ingredients: ['Retinol', 'Niacinamide', 'Vitamin C']
  },
  {
    id: 'back-cosrx-centella',
    name: 'COSRX Centella Water Calming Toner',
    brand: 'COSRX',
    description: 'Gentle calming toner with centella asiatica extract',
    price: 18500,
    images: [{ url: '/images/BackinStock/Cosrx-centellar-water-toner.png', alt: 'COSRX Centella Water Calming Toner', isPrimary: true }],
    category: { id: 'toners', name: 'Toners & Essences', slug: 'toners' },
    tags: ['centella', 'calming', 'toner'],
    rating: 4.6, reviewCount: 42, stockQuantity: 35, isBackInStock: true,
    skinTypes: [SkinType.SENSITIVE, SkinType.ALL], ingredients: ['Centella Asiatica', 'Hyaluronic Acid', 'Panthenol']
  },
  {
    id: 'back-foaming-wash',
    name: 'Foaming Cream Wash Gentle Cleanser',
    brand: 'Gentle Care',
    description: 'Luxurious foaming cream wash for gentle cleansing',
    price: 15000,
    images: [{ url: '/images/BackinStock/Foaming-Cream-Wash-.png', alt: 'Foaming Cream Wash Gentle Cleanser', isPrimary: true }],
    category: { id: 'cleansers', name: 'Cleansers', slug: 'cleansers' },
    tags: ['foaming', 'cream', 'gentle'],
    rating: 4.5, reviewCount: 31, stockQuantity: 40, isBackInStock: true,
    skinTypes: [SkinType.ALL], ingredients: ['Glycerin', 'Ceramides', 'Amino Acids']
  },
  // Set 2 (Second 4 products)
  {
    id: 'back-cerave-lotion',
    name: 'CeraVe Daily Moisturizing Lotion 16oz',
    brand: 'CeraVe',
    description: 'Lightweight moisturizing lotion for normal to dry skin',
    price: 28300,
    images: [{ url: '/images/BackinStock/cerave-lotion-16oz.png', alt: 'CeraVe Daily Moisturizing Lotion 16oz', isPrimary: true }],
    category: { id: 'moisturizers', name: 'Moisturizers', slug: 'moisturizers' },
    tags: ['moisturizer', 'ceramides', 'daily-care'],
    rating: 4.6, reviewCount: 22, stockQuantity: 12, isBackInStock: true,
    skinTypes: [SkinType.ALL], ingredients: ['Ceramides', 'Hyaluronic Acid', 'Niacinamide']
  },
  {
    id: 'back-blob-product',
    name: 'Premium Skincare Treatment',
    brand: 'Beauty Essentials',
    description: 'Advanced skincare treatment for all skin types',
    price: 16698,
    images: [{ url: '/images/BackinStock/blob.png', alt: 'Premium Skincare Treatment', isPrimary: true }],
    category: { id: 'treatments', name: 'Treatments', slug: 'treatments' },
    tags: ['treatment', 'premium', 'skincare'],
    rating: 4.5, reviewCount: 28, stockQuantity: 35, isBackInStock: true,
    skinTypes: [SkinType.ALL], ingredients: ['Active Botanicals', 'Peptides', 'Antioxidants']
  },
  {
    id: 'back-garnier-serum',
    name: 'Garnier Bright Complete Moisturizing Serum in Lotion 400ml',
    brand: 'Garnier',
    description: 'Brightening serum lotion for even skin tone',
    price: 27300,
    images: [{ url: '/images/BackinStock/GarnierBrightCompleteMoisturizingSeruminLotion400ml.png', alt: 'Garnier Bright Complete Moisturizing Serum in Lotion', isPrimary: true }],
    category: { id: 'serums', name: 'Serums & Treatments', slug: 'serums' },
    tags: ['brightening', 'vitamin-c', 'moisturizing'],
    rating: 4.4, reviewCount: 31, stockQuantity: 18, isBackInStock: true,
    skinTypes: [SkinType.ALL], ingredients: ['Vitamin C', 'Niacinamide', 'Hyaluronic Acid']
  },
  {
    id: 'back-dr-teals',
    name: 'Dr Teal\'s Body Wash with Prebiotic Lemon Balm 24 fl oz',
    brand: 'Dr Teal\'s',
    description: 'Prebiotic body wash with lemon balm and essential oils',
    price: 12000,
    images: [{ url: '/images/BackinStock/Dr-Teal-s-Body-Wash-with-Prebiotic-Lemon-Balm-and-Essential-Oil-Blend-24-fl-oz_96914a93-2ecf-47ef-a153-35e9205121df.3e254527ee5a73b9105e2efd17f9319c-1.png', alt: 'Dr Teal\'s Body Wash with Prebiotic Lemon Balm', isPrimary: true }],
    category: { id: 'cleansers', name: 'Cleansers', slug: 'cleansers' },
    tags: ['body-wash', 'prebiotic', 'lemon-balm'],
    rating: 4.2, reviewCount: 19, stockQuantity: 42, isBackInStock: true,
    skinTypes: [SkinType.ALL], ingredients: ['Prebiotic Complex', 'Lemon Balm', 'Essential Oils']
  }
];

export const getBackInStockProducts = () => backInStockProducts;
export const getNewArrivals = () => products.filter(p => p.isNewArrival);
export const getBestSellers = () => bestSellerProducts;
export const getProductsByCategory = (category: string) => products.filter(p => p.category.slug === category);
export const getAllProducts = () => products;

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(price)
} 