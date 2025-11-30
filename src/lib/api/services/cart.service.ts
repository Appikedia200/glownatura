import { apiClient } from '../client';
import type { Cart, CartItem } from '@/types/api';

export const cartService = {
  async get(sessionId: string): Promise<Cart> {
    const response = await apiClient.get<Cart>(`/api/cart/${sessionId}`);
    return response.data;
  },

  async addItem(sessionId: string, productId: string, quantity: number): Promise<Cart> {
    const response = await apiClient.post<Cart>(`/api/cart/${sessionId}/items`, {
      productId,
      quantity,
    });
    return response.data;
  },

  async updateItem(sessionId: string, productId: string, quantity: number): Promise<Cart> {
    const response = await apiClient.put<Cart>(`/api/cart/${sessionId}/items/${productId}`, {
      quantity,
    });
    return response.data;
  },

  async removeItem(sessionId: string, productId: string): Promise<Cart> {
    const response = await apiClient.delete<Cart>(`/api/cart/${sessionId}/items/${productId}`);
    return response.data;
  },

  async clear(sessionId: string): Promise<void> {
    await apiClient.delete(`/api/cart/${sessionId}`);
  },
};


