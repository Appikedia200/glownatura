import { apiClient } from '../client';
import type { Review } from '@/types/api';

export interface SubmitReviewPayload {
  product: string;
  customer: {
    name: string;
    email: string;
  };
  rating: number;
  title?: string;
  comment: string;
}

export const reviewsService = {
  async getByProduct(productId: string, page = 1, limit = 10): Promise<{ reviews: Review[]; total: number }> {
    const response = await apiClient.get<{ reviews: Review[]; total: number }>(
      `/api/reviews?product=${productId}&page=${page}&limit=${limit}&status=approved`
    );
    return response.data;
  },

  async submit(payload: SubmitReviewPayload): Promise<Review> {
    const response = await apiClient.post<Review>('/api/reviews', payload);
    return response.data;
  },
};


