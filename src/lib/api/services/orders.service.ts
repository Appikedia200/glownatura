import { apiClient } from '../client';
import type { Order, ShippingAddress } from '@/types/api';

export interface CreateOrderPayload {
  sessionId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  shippingAddress: ShippingAddress;
  billingAddress?: ShippingAddress;
  paymentMethod: 'paystack' | 'bank_transfer' | 'cash_on_delivery';
  shippingMethod: string;
  notes?: string;
}

export const ordersService = {
  async create(payload: CreateOrderPayload): Promise<Order> {
    const response = await apiClient.post<Order>('/api/orders', payload);
    return response.data;
  },

  async getById(id: string): Promise<Order> {
    const response = await apiClient.get<Order>(`/api/orders/${id}`);
    return response.data;
  },

  async getByOrderNumber(orderNumber: string): Promise<Order> {
    const response = await apiClient.get<Order>(`/api/orders/number/${orderNumber}`);
    return response.data;
  },
};


