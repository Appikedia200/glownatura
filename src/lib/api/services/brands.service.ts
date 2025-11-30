import { apiClient, ApiResponse } from '../client';
import type { Brand } from '@/types/api';

export const brandsService = {
  async getAllBrands(params?: { search?: string; limit?: number; page?: number }): Promise<ApiResponse<{ brands: Brand[]; total: number }>> {
    const queryParams = new URLSearchParams();
    if (params?.search) queryParams.append('search', params.search);
    if (params?.limit) queryParams.append('limit', String(params.limit));
    if (params?.page) queryParams.append('page', String(params.page));

    const response = await apiClient.get<ApiResponse<{ brands: Brand[]; total: number }>>(
      `/api/brands?${queryParams.toString()}`
    );
    return response.data;
  },

  async getBrandBySlug(slug: string): Promise<ApiResponse<Brand>> {
    const response = await apiClient.get<ApiResponse<Brand>>(`/api/brands/${slug}`);
    return response.data;
  },

  async getBrandsByLetter(letter: string): Promise<ApiResponse<Brand[]>> {
    const response = await apiClient.get<ApiResponse<Brand[]>>(`/api/brands/letter/${letter}`);
    return response.data;
  },
};
