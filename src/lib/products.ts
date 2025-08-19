import { Product, SkinType } from '@/types'

export const products: Product[] = [
  // COSRX Products
  {
    id: 'cosrx-snail-96-essence',
    name: 'Advanced Snail 96 Mucin Power Essence',
    brand: 'COSRX',
    price: 18500,
    originalPrice: 22000,
    description: 'Lightweight, anti-aging snail secretion filtrate essence that repair damaged skin and gives vitality to your skin.',
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    images: [
      {
        url: '/images/products/cosrx-snail-essence.jpg',
        alt: 'COSRX Advanced Snail 96 Mucin Power Essence',
        isPrimary: true
      }
    ],
    stockQuantity: 45,
    rating: 4.8,
    reviewCount: 1247,
    isNew: false,
    isBestseller: true,
    tags: ['hydrating', 'healing', 'anti-aging'],
    skinTypes: [SkinType.ALL],
    ingredients: ['Snail Secretion Filtrate 96%', 'Betaine', 'Butylene Glycol']
  },
  {
    id: 'cosrx-snail-92-cream',
    name: 'Advanced Snail 92 All‑In‑One Cream',
    brand: 'COSRX',
    price: 19500,
    originalPrice: 24000,
    description: 'Moisturizing cream enriched with 92% snail secretion filtrate to hydrate and repair damaged skin.',
    category: {
      id: 'moisturizers',
      name: 'Moisturizers',
      slug: 'moisturizers'
    },
    images: [
      {
        url: '/images/products/cosrx-snail-cream.jpg',
        alt: 'COSRX Advanced Snail 92 All‑In‑One Cream',
        isPrimary: true
      }
    ],
    stockQuantity: 32,
    rating: 4.7,
    reviewCount: 891,
    isNew: false,
    isBestseller: true,
    tags: ['moisturizing', 'healing', 'sensitive-skin'],
    skinTypes: [SkinType.ALL],
    ingredients: ['Snail Secretion Filtrate 92%', 'Hyaluronic Acid', 'Ceramide']
  },
  {
    id: 'cosrx-salicylic-acid-cleanser',
    name: 'Salicylic Acid Daily Gentle Cleanser',
    brand: 'COSRX',
    price: 12800,
    description: 'Gentle cleanser with salicylic acid to remove blackheads and excess sebum without over-drying.',
    category: {
      id: 'cleansers',
      name: 'Cleansers',
      slug: 'cleansers'
    },
    images: [
      {
        url: '/images/products/cosrx-salicylic-cleanser.jpg',
        alt: 'COSRX Salicylic Acid Daily Gentle Cleanser',
        isPrimary: true
      }
    ],
    stockQuantity: 67,
    rating: 4.6,
    reviewCount: 634,
    isNew: false,
    isBestseller: false,
    tags: ['acne', 'exfoliating', 'pore-care'],
    skinTypes: [SkinType.OILY, SkinType.COMBINATION, SkinType.ACNE_PRONE],
    ingredients: ['Salicylic Acid', 'Tea Tree Leaf Oil', 'White Willow Bark Water']
  },
  {
    id: 'cosrx-snail-mucin-essence',
    name: 'Advanced Snail 96 Mucin Power Essence',
    brand: 'COSRX',
    price: 16500,
    description: 'Lightweight essence with 96% snail secretion filtrate for hydration and skin repair.',
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1570554886111-e80fcb2ad486?w=600&h=600&fit=crop&q=80',
        alt: 'COSRX Advanced Snail Mucin Essence',
        isPrimary: true
      }
    ],
    stockQuantity: 28,
    rating: 4.9,
    reviewCount: 756,
    isNew: true,
    isBestseller: true,
    tags: ['hydrating', 'healing', 'glowing'],
    skinTypes: [SkinType.ALL],
    ingredients: ['Snail Secretion Filtrate 96%', 'Betaine', 'Panthenol']
  },

  // The Ordinary Products
  {
    id: 'ordinary-alpha-arbutin',
    name: 'Alpha Arbutin 2% + HA',
    brand: 'The Ordinary',
    price: 8500,
    description: 'Concentrated serum with 2% alpha arbutin to reduce dark spots and hyperpigmentation.',
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    images: [
      {
        url: '/images/products/ordinary-alpha-arbutin.jpg',
        alt: 'The Ordinary Alpha Arbutin 2% + HA',
        isPrimary: true
      }
    ],
    stockQuantity: 89,
    rating: 4.5,
    reviewCount: 1089,
    isNew: false,
    isBestseller: true,
    tags: ['brightening', 'pigmentation', 'dark-spots'],
    skinTypes: [SkinType.ALL],
    ingredients: ['Alpha Arbutin 2%', 'Hyaluronic Acid', 'Aqua']
  },
  {
    id: 'ordinary-hyaluronic-acid',
    name: 'Hyaluronic Acid 2% + B5',
    brand: 'The Ordinary',
    price: 7500,
    description: 'Multi-molecular hyaluronic acid serum for deep hydration and plumping effect.',
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    images: [
      {
        url: '/images/products/ordinary-hyaluronic-acid.jpg',
        alt: 'The Ordinary Hyaluronic Acid 2% + B5',
        isPrimary: true
      }
    ],
    stockQuantity: 156,
    rating: 4.4,
    reviewCount: 2134,
    isNew: false,
    isBestseller: true,
    tags: ['hydrating', 'plumping', 'dry-skin'],
    skinTypes: [SkinType.DRY, SkinType.DEHYDRATED, SkinType.ALL],
    ingredients: ['Hyaluronic Acid', 'Vitamin B5', 'Sodium Hyaluronate']
  },
  {
    id: 'ordinary-retinol-squalane',
    name: 'Retinol 0.2% in Squalane',
    brand: 'The Ordinary',
    price: 11200,
    description: 'Gentle retinol serum in squalane for anti-aging and skin texture improvement.',
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    images: [
      {
        url: '/images/products/ordinary-retinol.jpg',
        alt: 'The Ordinary Retinol 0.2% in Squalane',
        isPrimary: true
      }
    ],
    stockQuantity: 43,
    rating: 4.3,
    reviewCount: 567,
    isNew: false,
    isBestseller: false,
    tags: ['anti-aging', 'texture', 'fine-lines'],
    skinTypes: [SkinType.NORMAL, SkinType.COMBINATION, SkinType.OILY],
    ingredients: ['Retinol 0.2%', 'Squalane', 'Caprylic/Capric Triglyceride']
  },

  // Anua Products
  {
    id: 'anua-heartleaf-toner',
    name: 'Heartleaf 77% Soothing Toner',
    brand: 'Anua',
    price: 15800,
    description: 'Gentle toner with 77% heartleaf extract to soothe and hydrate sensitive skin.',
    category: {
      id: 'toners',
      name: 'Toners & Essences',
      slug: 'toners'
    },
    images: [
      {
        url: '/images/products/anua-heartleaf-toner.jpg',
        alt: 'Anua Heartleaf 77% Soothing Toner',
        isPrimary: true
      }
    ],
    stockQuantity: 72,
    rating: 4.7,
    reviewCount: 445,
    isNew: true,
    isBestseller: false,
    tags: ['soothing', 'sensitive-skin', 'hydrating'],
    skinTypes: [SkinType.SENSITIVE, SkinType.ALL],
    ingredients: ['Heartleaf Extract 77%', 'Panthenol', 'Betaine']
  },
  {
    id: 'anua-bha-exfoliant',
    name: 'BHA 2% Gentle Exfoliating Toner',
    brand: 'Anua',
    price: 18200,
    description: 'Gentle BHA toner that exfoliates pores and removes blackheads without irritation.',
    category: {
      id: 'toners',
      name: 'Toners & Essences',
      slug: 'toners'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556228578-dd6042a4d82d?w=600&h=600&fit=crop&q=80',
        alt: 'Anua BHA 2% Gentle Exfoliating Toner',
        isPrimary: true
      }
    ],
    stockQuantity: 34,
    rating: 4.6,
    reviewCount: 289,
    isNew: false,
    isBestseller: false,
    tags: ['exfoliating', 'pore-care', 'acne'],
    skinTypes: [SkinType.OILY, SkinType.COMBINATION, SkinType.ACNE_PRONE],
    ingredients: ['Salicylic Acid 2%', 'Heartleaf Extract', 'White Willow Bark']
  },

  // Skin1004 Products
  {
    id: 'skin1004-centella-sunscreen',
    name: 'Centella Aqua Tone‑Up Sunscreen SPF 50+',
    brand: 'SKIN1004',
    price: 16800,
    description: 'Lightweight sunscreen with centella asiatica that provides broad-spectrum protection and subtle tone-up effect.',
    category: {
      id: 'sunscreen',
      name: 'Sunscreen',
      slug: 'sunscreen'
    },
    images: [
      {
        url: '/images/products/skin1004-centella-sunscreen.jpg',
        alt: 'SKIN1004 Centella Aqua Tone‑Up Sunscreen',
        isPrimary: true
      }
    ],
    stockQuantity: 98,
    rating: 4.8,
    reviewCount: 723,
    isNew: false,
    isBestseller: true,
    tags: ['sun-protection', 'tone-up', 'centella'],
    skinTypes: [SkinType.ALL],
    ingredients: ['Zinc Oxide', 'Centella Asiatica Extract', 'Niacinamide']
  },
  {
    id: 'skin1004-centella-oil-cleanser',
    name: 'Madagascar Centella Light Cleansing Oil',
    brand: 'SKIN1004',
    price: 19500,
    description: 'Lightweight cleansing oil with centella from Madagascar that removes makeup without clogging pores.',
    category: {
      id: 'cleansers',
      name: 'Cleansers',
      slug: 'cleansers'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&q=80',
        alt: 'SKIN1004 Madagascar Centella Light Cleansing Oil',
        isPrimary: true
      }
    ],
    stockQuantity: 54,
    rating: 4.6,
    reviewCount: 412,
    isNew: true,
    isBestseller: false,
    tags: ['cleansing-oil', 'makeup-removal', 'centella'],
    skinTypes: [SkinType.ALL],
    ingredients: ['Centella Asiatica Extract', 'Ethylhexyl Palmitate', 'Sorbeth-30']
  },

  // Dr. Jart+ Products
  {
    id: 'drjart-ceramidin-cream',
    name: 'Ceramidin Cream - Skin Barrier Moisturizing Cream',
    brand: 'Dr. Jart+',
    price: 42000,
    originalPrice: 48000,
    description: 'Rich moisturizing cream with 5-ceramide complex to strengthen skin barrier and provide long-lasting hydration.',
    category: {
      id: 'moisturizers',
      name: 'Moisturizers',
      slug: 'moisturizers'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1570554886111-e80fcb2ad486?w=600&h=600&fit=crop&q=80',
        alt: 'Dr. Jart+ Ceramidin Cream',
        isPrimary: true
      }
    ],
    stockQuantity: 23,
    rating: 4.7,
    reviewCount: 356,
    isNew: false,
    isBestseller: false,
    tags: ['ceramide', 'barrier-repair', 'hydrating'],
    skinTypes: [SkinType.DRY, SkinType.SENSITIVE, SkinType.DEHYDRATED],
    ingredients: ['Ceramide Complex', 'Panthenol', 'Shea Butter']
  },

  // Isntree Products
  {
    id: 'isntree-hyaluronic-acid-sunscreen',
    name: 'Hyaluronic Acid Watery Sun Gel SPF 50+',
    brand: 'Isntree',
    price: 14500,
    description: 'Lightweight, watery sunscreen gel with hyaluronic acid for hydration and sun protection.',
    category: {
      id: 'sunscreen',
      name: 'Sunscreen',
      slug: 'sunscreen'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&q=80',
        alt: 'Isntree Hyaluronic Acid Watery Sun Gel',
        isPrimary: true
      }
    ],
    stockQuantity: 78,
    rating: 4.5,
    reviewCount: 267,
    isNew: true,
    isBestseller: false,
    tags: ['sun-protection', 'hydrating', 'lightweight'],
    skinTypes: [SkinType.ALL],
    ingredients: ['Hyaluronic Acid', 'Zinc Oxide', 'Titanium Dioxide']
  },

  // Soon Jung Products
  {
    id: 'soonjung-ph5.5-cleanser',
    name: 'pH 5.5 Relief Toner',
    brand: 'Soon Jung',
    price: 13800,
    description: 'Gentle, pH-balanced toner that soothes and hydrates sensitive skin without irritation.',
    category: {
      id: 'toners',
      name: 'Toners & Essences',
      slug: 'toners'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&q=80',
        alt: 'Soon Jung pH 5.5 Relief Toner',
        isPrimary: true
      }
    ],
    stockQuantity: 67,
    rating: 4.4,
    reviewCount: 198,
    isNew: false,
    isBestseller: false,
    tags: ['ph-balanced', 'sensitive-skin', 'soothing'],
    skinTypes: [SkinType.SENSITIVE, SkinType.ALL],
    ingredients: ['Panthenol', 'Madecassoside', 'Green Tea Extract']
  },

  // Purito Products
  {
    id: 'purito-centella-buffet-serum',
    name: 'Centella Green Level Buffet Serum',
    brand: 'Purito',
    price: 17200,
    description: 'Concentrated serum with centella asiatica and peptides for calming and anti-aging benefits.',
    category: {
      id: 'serums',
      name: 'Serums & Treatments',
      slug: 'serums'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556228852-3d8a3e7d7e5a?w=600&h=600&fit=crop&q=80',
        alt: 'Purito Centella Green Level Buffet Serum',
        isPrimary: true
      }
    ],
    stockQuantity: 41,
    rating: 4.6,
    reviewCount: 334,
    isNew: false,
    isBestseller: false,
    tags: ['centella', 'peptides', 'anti-aging'],
    skinTypes: [SkinType.SENSITIVE, SkinType.ALL],
    ingredients: ['Centella Asiatica Extract', 'Peptides', 'Niacinamide']
  },

  // Acne Patches & Other Products
  {
    id: 'cosrx-acne-patches',
    name: 'Acne Pimple Master Patch',
    brand: 'COSRX',
    price: 4500,
    description: 'Hydrocolloid patches that protect wounded or troubled area from getting worse and maintain humidity of skin.',
    category: {
      id: 'treatments',
      name: 'Treatments',
      slug: 'treatments'
    },
    images: [
      {
        url: '/images/products/cosrx-acne-patches.jpg',
        alt: 'COSRX Acne Pimple Master Patch',
        isPrimary: true
      }
    ],
    stockQuantity: 234,
    rating: 4.8,
    reviewCount: 1567,
    isNew: false,
    isBestseller: true,
    tags: ['acne-patch', 'spot-treatment', 'hydrocolloid'],
    skinTypes: [SkinType.ACNE_PRONE, SkinType.ALL],
    ingredients: ['Hydrocolloid', 'Cellulose Gum']
  },
  {
    id: 'cosrx-propolis-toner',
    name: 'Propolis Synergy Toner',
    brand: 'COSRX',
    price: 21000,
    description: 'Nourishing toner with propolis extract and honey to hydrate and calm irritated skin.',
    category: {
      id: 'toners',
      name: 'Toners & Essences',
      slug: 'toners'
    },
    images: [
      {
        url: '/images/products/cosrx-propolis-toner.jpg',
        alt: 'COSRX Propolis Synergy Toner',
        isPrimary: true
      }
    ],
    stockQuantity: 52,
    rating: 4.7,
    reviewCount: 423,
    isNew: true,
    isBestseller: false,
    tags: ['propolis', 'honey', 'calming'],
    skinTypes: [SkinType.DRY, SkinType.SENSITIVE, SkinType.ALL],
    ingredients: ['Propolis Extract', 'Honey Extract', 'Panthenol']
  },
  {
    id: 'ordinary-moisturizer-ha',
    name: 'Natural Moisturizing Factors + HA',
    brand: 'The Ordinary',
    price: 9800,
    description: 'Surface hydration formula that mimics the skin\'s natural moisturizing factors for healthy skin barrier.',
    category: {
      id: 'moisturizers',
      name: 'Moisturizers',
      slug: 'moisturizers'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556228852-3d8a3e7d7e5a?w=600&h=600&fit=crop&q=80',
        alt: 'The Ordinary Natural Moisturizing Factors + HA',
        isPrimary: true
      }
    ],
    stockQuantity: 123,
    rating: 4.3,
    reviewCount: 789,
    isNew: false,
    isBestseller: true,
    tags: ['moisturizing', 'barrier-repair', 'budget-friendly'],
    skinTypes: [SkinType.ALL],
    ingredients: ['Amino Acids', 'Hyaluronic Acid', 'Fatty Acids']
  }
]

// Utility functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category.id === categoryId)
}

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return products.filter(product => product.category.id === subcategory)
}

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.isBestseller)
}

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew)
}

export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.originalPrice && product.originalPrice > product.price)
}

export const getFeaturedProducts = (limit: number = 8): Product[] => {
  return products
    .filter(product => product.isBestseller || product.isNew)
    .slice(0, limit)
}

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
} 