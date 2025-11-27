import { useState, useEffect } from 'react';
import { brandsService } from '../api';
import type { Brand } from '@/types/api';

interface UseBrandsParams {
  search?: string;
  limit?: number;
  page?: number;
}

interface UseBrandsResult {
  brands: Brand[];
  loading: boolean;
  error: string | null;
  total: number;
}

export const useBrands = (params?: UseBrandsParams): UseBrandsResult => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await brandsService.getAllBrands(params);
        if (response.success) {
          setBrands(response.data.brands);
          setTotal(response.data.total);
        } else {
          setError('Failed to fetch brands');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)]);

  return { brands, loading, error, total };
};
