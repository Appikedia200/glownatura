import { apiClient, ApiResponse } from '../client';
import type { HomepageSection } from '@/types/api';

export const homepageService = {
  async getHomepageSections(): Promise<ApiResponse<HomepageSection[]>> {
    // FIX: apiClient.get already returns ApiResponse, no need for .data
    return await apiClient.get<HomepageSection[]>('/api/homepage-sections?isActive=true');
  },

  async getSectionById(id: string): Promise<ApiResponse<HomepageSection>> {
    // FIX: apiClient.get already returns ApiResponse, no need for .data
    return await apiClient.get<HomepageSection>(`/api/homepage-sections/${id}`);
  },
};
