import { useState, useEffect } from 'react';
import { homepageService } from '../api';
import type { HomepageSection } from '@/types/api';

interface UseHomepageResult {
  sections: HomepageSection[];
  loading: boolean;
  error: string | null;
}

export const useHomepage = (): UseHomepageResult => {
  const [sections, setSections] = useState<HomepageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await homepageService.getHomepageSections();
        if (response.success) {
          setSections(response.data);
        } else {
          setError('Failed to fetch homepage content');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  return { sections, loading, error };
};
