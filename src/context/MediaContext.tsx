
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { MediaAssets, MediaContextType } from '../types/media';

const MediaContext = createContext<MediaContextType | undefined>(undefined);

// Default fallback assets (current hard‑coded values)
const defaultAssets: MediaAssets = {
  branding: {
    logo_main: 'https://i.imgur.com/7LGjh8Y.png',
    logo_white: 'https://i.imgur.com/7LGjh8Y.png',
    favicon: 'https://i.imgur.com/7LGjh8Y.png',
    apple_touch_icon: 'https://i.imgur.com/7LGjh8Y.png'
  },
  documents: {},
  // Fixed syntax error – provide a valid empty object as the default value
  videos: {},
  gallery: {}
};

interface MediaProviderProps {
  children: ReactNode;
  manifestUrl?: string;
}

export function MediaProvider({
  children,
  manifestUrl = '/media/site-assets.json'
}: MediaProviderProps) {
  const [assets, setAssets] = useState<MediaAssets>(defaultAssets);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAssets = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(manifestUrl);

      if (!response.ok) {
        // If manifest doesn't exist, use default assets
        console.warn('Media manifest not found, using default assets');
        setAssets(defaultAssets);
        setLoading(false);
        return;
      }

      const data = await response.json();

      // Merge fetched data with defaults to ensure all required fields exist
      setAssets({
        branding: { ...defaultAssets.branding, ...data.branding },
        documents: data.documents || {},
        videos: data.videos || {},
        gallery: data.gallery || {}
      });

      setLoading(false);
    } catch (err) {
      console.error('Failed to load media assets:', err);
      setError(err instanceof Error ? err.message : 'Failed to load media assets');
      // Use default assets on error
      setAssets(defaultAssets);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, [manifestUrl]);

  const refetch = async () => {
    await fetchAssets();
  };

  return (
    <MediaContext.Provider value={{ assets, loading, error, refetch }}>
      {children}
    </MediaContext.Provider>
  );
}

export function useMedia(): MediaContextType {
  const context = useContext(MediaContext);

  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider');
  }

  return context;
}
