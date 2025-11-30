export interface Media {
  _id: string;
  cloudinaryUrl: string;
  publicId: string;
  format: string;
  width: number;
  height: number;
  size: number;
  altText?: string;
  createdAt: string;
}

export interface ProductImage {
  mediaId: Media;
  isPrimary: boolean;
  displayOrder: number;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  parent?: string | Category;
  level: number;
  image?: Media;
  displayOrder: number;
  isActive: boolean;
  productCount?: number;
  children?: Category[];
  createdAt: string;
  updatedAt: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  logo?: Media;
  description?: string;
  website?: string;
  isActive: boolean;
  displayOrder: number;
  firstLetter: string;
  productCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  brand: string;
  price: number;
  comparePrice?: number;
  images: ProductImage[];
  category: string | Category;
  tags: string[];
  stock: number;
  lowStockThreshold: number;
  trackInventory: boolean;
  allowBackorders: boolean;
  sku?: string;
  status: 'draft' | 'active' | 'archived';
  // CRITICAL: Featured/BackInStock are OBJECTS in backend!
  featured: {
    isFeatured: boolean;
    featuredOrder?: number;
  };
  backInStock: {
    isBackInStock: boolean;
    backInStockDate?: string;
  };
  
  // Virtual/computed fields
  isNewArrival?: boolean;  // Computed from createdAt
  isBestSeller?: boolean;  // Computed from orderCount
  averageRating: number;
  reviewCount: number;
  concerns?: string[];
  skinType?: string[];
  ingredients?: string[];
  volume?: string;
  weight?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface HomepageSection {
  _id: string;
  sectionType: 'featured' | 'new_arrivals' | 'best_sellers' | 'back_in_stock' | 'trending';
  title: string;
  subtitle?: string;
  products: Product[];
  isActive: boolean;
  displayOrder: number;
  maxProducts: number;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  product: string | Product;
  customer: {
    name: string;
    email: string;
    verifiedPurchase: boolean;
  };
  rating: number;
  title?: string;
  comment: string;
  images?: Media[];
  status: 'pending' | 'approved' | 'rejected';
  adminReply?: {
    text: string;
    repliedAt: string;
    repliedBy: string;
  };
  helpful: {
    count: number;
    voters: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: string | Product;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface Cart {
  _id: string;
  sessionId: string;
  items: CartItem[];
  subtotal: number;
  total: number;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode?: string;
  country: string;
}

export interface Order {
  _id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    shippingAddress: ShippingAddress;
    billingAddress?: ShippingAddress;
  };
  items: Array<{
    product: string | Product;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
    image?: string;
  }>;
  pricing: {
    subtotal: number;
    discount: number;
    discountCode?: string;
    shipping: number;
    tax: number;
    total: number;
  };
  payment: {
    method: 'paystack' | 'bank_transfer' | 'cash_on_delivery';
    status: 'pending' | 'paid' | 'failed' | 'refunded';
    transactionId?: string;
    paidAt?: string;
    paystackReference?: string;
  };
  shipping: {
    method: string;
    trackingNumber?: string;
    courier?: string;
    estimatedDelivery?: string;
    shippedAt?: string;
    deliveredAt?: string;
  };
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  statusHistory: Array<{
    status: string;
    note?: string;
    changedBy?: string;
    changedAt: string;
  }>;
  notes?: {
    customer?: string;
    internal?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface ProductFilters extends PaginationParams {
  category?: string;
  brand?: string | string[];
  concerns?: string | string[];
  skinType?: string | string[];
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sort?: string;
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  backInStock?: boolean;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}


