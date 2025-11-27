import { useState, useEffect } from 'react';
import { categoriesService } from '../api';
import type { Category } from '@/types/api';

interface UseCategoriesResult {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export const useCategories = (includeChildren: boolean = false): UseCategoriesResult => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await categoriesService.getAllCategories({ includeChildren });
        if (response.success) {
          setCategories(response.data);
        } else {
          setError('Failed to fetch categories');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [includeChildren]);

  return { categories, loading, error };
};
