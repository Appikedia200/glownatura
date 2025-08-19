import { Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    slug: 'skincare',
    description: 'Premium skincare products for every skin type and concern',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop',
    icon: '🧴',
    order: 1,
    isActive: true,
    productCount: 150,
    subcategories: [
      {
        id: 'cleansers',
        name: 'Cleansers',
        slug: 'cleansers',
        description: 'Gentle cleansers for all skin types - remove impurities while maintaining your skin barrier',
        parentId: 'skincare',
        order: 1,
        isActive: true,
        productCount: 25
      },
      {
        id: 'moisturizers',
        name: 'Moisturizers',
        slug: 'moisturizers',
        description: 'Hydrating moisturizers and creams for plump, healthy-looking skin',
        parentId: 'skincare',
        order: 2,
        isActive: true,
        productCount: 30
      },
      {
        id: 'serums',
        name: 'Serums & Treatments',
        slug: 'serums',
        description: 'Targeted treatments and serums for specific skin concerns and goals',
        parentId: 'skincare',
        order: 3,
        isActive: true,
        productCount: 40
      },
      {
        id: 'sunscreen',
        name: 'Sun Protection',
        slug: 'sunscreen',
        description: 'SPF and sun protection products for daily defense against UV damage',
        parentId: 'skincare',
        order: 4,
        isActive: true,
        productCount: 20
      },
      {
        id: 'exfoliants',
        name: 'Exfoliants',
        slug: 'exfoliants',
        description: 'Chemical and physical exfoliants for smoother, brighter skin texture',
        parentId: 'skincare',
        order: 5,
        isActive: true,
        productCount: 18
      },
      {
        id: 'masks',
        name: 'Face Masks',
        slug: 'masks',
        description: 'Hydrating, purifying, and treatment masks for intensive skincare',
        parentId: 'skincare',
        order: 6,
        isActive: true,
        productCount: 17
      },
      {
        id: 'toners',
        name: 'Toners & Essences',
        slug: 'toners',
        description: 'Balancing toners and hydrating essences for healthy skin pH',
        parentId: 'skincare',
        order: 7,
        isActive: true,
        productCount: 15
      },
      {
        id: 'eye-care',
        name: 'Eye Care',
        slug: 'eye-care',
        description: 'Specialized treatments for the delicate eye area',
        parentId: 'skincare',
        order: 8,
        isActive: true,
        productCount: 12
      }
    ]
  }
]

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug)
}

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id)
}

export const getSubcategories = (parentId: string): Category[] => {
  const parent = getCategoryById(parentId)
  return parent?.subcategories || []
}

export const getAllSubcategories = (): Category[] => {
  const subcategories: Category[] = []
  categories.forEach((category: Category) => {
    if (category.subcategories) {
      subcategories.push(...category.subcategories)
    }
  })
  return subcategories
} 