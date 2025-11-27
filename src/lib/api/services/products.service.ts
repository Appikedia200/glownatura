import { apiClient, ApiResponse } from '../client';
import type { Product, ProductFilters, PaginationMeta } from '@/types/api';

export interface ProductsResponse {
  products: Product[];
  pagination: PaginationMeta;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: string;
}

export const productsService = {
  async getAllProducts(filters?: ProductFilters): Promise<ApiResponse<Product[]> & { pagination?: PaginationMeta }> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            params.append(key, value.join(','));
          } else {
            params.append(key, String(value));
          }
        }
      });
    }

    const response = await apiClient.get<ApiResponse<Product[]> & { pagination?: PaginationMeta }>(
      `/api/products?${params.toString()}`
    );

    return response.data;
  },

  async getAll(filters?: ProductFilters): Promise<ProductsResponse> {
    const result = await this.getAllProducts(filters);
    return {
      products: result.data,
      pagination: result.pagination || { page: 1, limit: 16, total: 0, totalPages: 0, hasNextPage: false, hasPrevPage: false },
    };
  },

  async getById(id: string): Promise<Product> {
    const response = await apiClient.get<Product>(`/api/products/${id}`);
    return response.data;
  },

  async getBySlug(slug: string): Promise<Product> {
    const response = await apiClient.get<Product>(`/api/products/slug/${slug}`);
    return response.data;
  },

  async getPriceRange(filters?: Omit<ProductFilters, 'minPrice' | 'maxPrice'>): Promise<PriceRange> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            params.append(key, value.join(','));
          } else {
            params.append(key, String(value));
          }
        }
      });
    }

    const response = await apiClient.get<PriceRange>(
      `/api/products/price-range?${params.toString()}`
    );
    return response.data;
  },

  async search(query: string, filters?: ProductFilters): Promise<ProductsResponse> {
    return this.getAll({ ...filters, search: query });
  },
};


