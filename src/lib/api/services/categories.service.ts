import { apiClient, ApiResponse } from '../client';
import type { Category } from '@/types/api';

export const categoriesService = {
  async getAllCategories(params?: { includeChildren?: boolean }): Promise<ApiResponse<Category[]>> {
    const queryParams = params?.includeChildren ? '?includeChildren=true' : '';
    const response = await apiClient.get<ApiResponse<Category[]>>(`/api/categories${queryParams}`);
    return response.data;
  },

  async getAll(includeChildren = false): Promise<Category[]> {
    const response = await this.getAllCategories({ includeChildren });
    return response.data;
  },

  async getById(id: string): Promise<Category> {
    const response = await apiClient.get<Category>(`/api/categories/${id}`);
    return response.data;
  },

  async getBySlug(slug: string): Promise<Category> {
    const response = await apiClient.get<Category>(`/api/categories/slug/${slug}`);
    return response.data;
  },

  async getChildren(parentId: string): Promise<Category[]> {
    const response = await apiClient.get<Category[]>(`/api/categories/${parentId}/children`);
    return response.data;
  },
};


