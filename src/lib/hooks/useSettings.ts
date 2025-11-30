import { useState, useEffect } from 'react';
import { settingsService, PublicSettings } from '../api/services/settings.service';

const CACHE_KEY = 'public_settings';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface UseSettingsResult {
  settings: PublicSettings | null;
  loading: boolean;
  error: string | null;
}

export const useSettings = (): UseSettingsResult => {
  const [settings, setSettings] = useState<PublicSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      // Check cache first
      if (typeof window !== 'undefined') {
        const cached = localStorage.getItem(CACHE_KEY);
        const cacheTime = localStorage.getItem(`${CACHE_KEY}_time`);
        
        if (cached && cacheTime) {
          const age = Date.now() - parseInt(cacheTime);
          if (age < CACHE_DURATION) {
            setSettings(JSON.parse(cached));
            setLoading(false);
            return;
          }
        }
      }

      try {
        const response = await settingsService.getPublicSettings();
        if (response.success && response.data) {
          setSettings(response.data);
          if (typeof window !== 'undefined') {
            localStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
            localStorage.setItem(`${CACHE_KEY}_time`, Date.now().toString());
          }
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch settings');
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, error };
};

