import { useState, useEffect, useCallback } from 'react';
import { cartService } from '../api';
import type { Cart } from '@/types/api';

// Generate or retrieve session ID from localStorage
const getSessionId = (): string => {
  if (typeof window === 'undefined') return '';
  
  let sessionId = localStorage.getItem('cart_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('cart_session_id', sessionId);
  }
  return sessionId;
};

interface UseCartResult {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
  addItem: (productId: string, quantity: number) => Promise<void>;
  updateItem: (productId: string, quantity: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
  itemCount: number;
}

export const useCart = (): UseCartResult => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId] = useState(getSessionId());

  const refreshCart = useCallback(async () => {
    if (!sessionId) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await cartService.get(sessionId);
      setCart(data);
    } catch (err: any) {
      // If cart doesn't exist yet (404), that's ok
      if (err.response?.status === 404) {
        setCart(null);
      } else {
        setError(err.message || 'Failed to load cart');
      }
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  const addItem = useCallback(async (productId: string, quantity: number) => {
    if (!sessionId) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await cartService.addItem(sessionId, productId, quantity);
      setCart(data);
    } catch (err: any) {
      setError(err.message || 'Failed to add item to cart');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  const updateItem = useCallback(async (productId: string, quantity: number) => {
    if (!sessionId) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await cartService.updateItem(sessionId, productId, quantity);
      setCart(data);
    } catch (err: any) {
      setError(err.message || 'Failed to update cart item');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  const removeItem = useCallback(async (productId: string) => {
    if (!sessionId) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await cartService.removeItem(sessionId, productId);
      setCart(data);
    } catch (err: any) {
      setError(err.message || 'Failed to remove item from cart');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  const clearCart = useCallback(async () => {
    if (!sessionId) return;
    
    setLoading(true);
    setError(null);
    try {
      await cartService.clear(sessionId);
      setCart(null);
    } catch (err: any) {
      setError(err.message || 'Failed to clear cart');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  // Load cart on mount
  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const itemCount = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return {
    cart,
    loading,
    error,
    addItem,
    updateItem,
    removeItem,
    clearCart,
    refreshCart,
    itemCount,
  };
};

