import { useState, useEffect } from 'react';
import { productsService } from '../api';
import type { Product, PaginationMeta, ProductFilters } from '@/types/api';

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  pagination: PaginationMeta | null;
}

export const useProducts = (filters?: ProductFilters): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await productsService.getAllProducts(filters);
        if (response.success) {
          setProducts(response.data);
          setPagination(response.pagination || null);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)]);

  return { products, loading, error, pagination };
};
