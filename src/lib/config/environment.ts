// PROFESSIONAL: Cloudflare Workers-compatible environment config
// Uses process.env (build-time) with robust fallbacks for runtime
export const environment = {
  api: {
    // CRITICAL: Hardcoded fallback ensures API always works, even if env vars fail at runtime
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://backendglownaturas.onrender.com',
    timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 60000,
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://glownatura.championsupermarket2025.workers.dev',
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'Glow Natura',
  },
  features: {
    enableReviews: process.env.NEXT_PUBLIC_ENABLE_REVIEWS === 'true',
    enableWishlist: process.env.NEXT_PUBLIC_ENABLE_WISHLIST === 'true',
  },
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
} as const;


