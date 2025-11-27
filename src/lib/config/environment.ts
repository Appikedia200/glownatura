export const environment = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://backendglownaturas.onrender.com',
    timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 60000,
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'Glow Natura',
  },
  features: {
    enableReviews: process.env.NEXT_PUBLIC_ENABLE_REVIEWS === 'true',
    enableWishlist: process.env.NEXT_PUBLIC_ENABLE_WISHLIST === 'true',
  },
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
} as const;


