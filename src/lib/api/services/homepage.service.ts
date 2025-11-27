import { apiClient, ApiResponse } from '../client';
import type { HomepageSection } from '@/types/api';

export const homepageService = {
  async getHomepageSections(): Promise<ApiResponse<HomepageSection[]>> {
    const response = await apiClient.get<ApiResponse<HomepageSection[]>>('/api/homepage-sections');
    return response.data;
  },

  async getSectionById(id: string): Promise<ApiResponse<HomepageSection>> {
    const response = await apiClient.get<ApiResponse<HomepageSection>>(`/api/homepage-sections/${id}`);
    return response.data;
  },
};
