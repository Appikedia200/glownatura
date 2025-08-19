import { Review, SkinType, AgeRange } from '@/types'

export const reviews: Review[] = [
  {
    id: 'review-1',
    productId: 'hydrating-cleanser',
    userId: 'user-1',
    user: {
      firstName: 'Sarah',
      lastName: 'M.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      isVerifiedPurchaser: true
    },
    rating: 5,
    title: 'Perfect for sensitive skin!',
    comment: 'This cleanser is amazing! It removes all my makeup without leaving my skin feeling stripped or tight. I have sensitive skin and this has become my holy grail cleanser.',
    images: [],
    helpfulCount: 24,
    isRecommended: true,
    skinType: SkinType.SENSITIVE,
    ageRange: AgeRange.AGE_25_34,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: 'review-2',
    productId: 'vitamin-c-serum',
    userId: 'user-2',
    user: {
      firstName: 'Emily',
      lastName: 'R.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      isVerifiedPurchaser: true
    },
    rating: 4,
    title: 'Brightening results after 2 weeks',
    comment: 'I\'ve been using this vitamin C serum for about 2 weeks now and I can already see my dark spots fading. The texture is lightweight and absorbs quickly. Will definitely repurchase!',
    images: [],
    helpfulCount: 18,
    isRecommended: true,
    skinType: SkinType.COMBINATION,
    ageRange: AgeRange.AGE_35_44,
    createdAt: new Date('2024-02-08'),
    updatedAt: new Date('2024-02-08')
  },
  {
    id: 'review-3',
    productId: 'liquid-foundation',
    userId: 'user-3',
    user: {
      firstName: 'Jessica',
      lastName: 'L.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face',
      isVerifiedPurchaser: true
    },
    rating: 5,
    title: 'Full coverage that lasts all day',
    comment: 'This foundation is incredible! The coverage is buildable and it stays put all day. I work 12-hour shifts and my makeup still looks fresh at the end of the day. The shade match is perfect too.',
    images: [],
    helpfulCount: 31,
    isRecommended: true,
    skinType: SkinType.OILY,
    ageRange: AgeRange.AGE_25_34,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: 'review-4',
    productId: 'retinol-night-cream',
    userId: 'user-4',
    user: {
      firstName: 'Michelle',
      lastName: 'K.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face',
      isVerifiedPurchaser: true
    },
    rating: 5,
    title: 'Amazing anti-aging results',
    comment: 'I\'ve been using this retinol cream for 3 months and the results are amazing! My fine lines have significantly reduced and my skin texture is so much smoother. No irritation at all.',
    images: [],
    helpfulCount: 42,
    isRecommended: true,
    skinType: SkinType.MATURE,
    ageRange: AgeRange.AGE_45_54,
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: 'review-5',
    productId: 'body-butter',
    userId: 'user-5',
    user: {
      firstName: 'Amanda',
      lastName: 'T.',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop&crop=face',
      isVerifiedPurchaser: true
    },
    rating: 4,
    title: 'Luxurious and moisturizing',
    comment: 'This body butter feels so luxurious and moisturizing. A little goes a long way and it keeps my skin soft all day. The scent is subtle and pleasant. Perfect for dry winter skin!',
    images: [],
    helpfulCount: 16,
    isRecommended: true,
    ageRange: AgeRange.AGE_18_24,
    createdAt: new Date('2024-01-30'),
    updatedAt: new Date('2024-01-30')
  }
]

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId)
}

export const getAverageRating = (productId: string): number => {
  const productReviews = getReviewsByProductId(productId)
  if (productReviews.length === 0) return 0
  
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0)
  return Math.round((sum / productReviews.length) * 10) / 10
}

export const getReviewCount = (productId: string): number => {
  return getReviewsByProductId(productId).length
}

export const getFeaturedReviews = (limit: number = 3): Review[] => {
  return reviews
    .filter(review => review.rating >= 4 && review.isRecommended)
    .sort((a, b) => (b.helpfulCount || 0) - (a.helpfulCount || 0))
    .slice(0, limit)
} 