export interface BrandingAssets {
  logo_main: string;
  logo_white: string;
  favicon: string;
  apple_touch_icon: string;
}

export interface DocumentAssets {
  annual_report?: string;
  program_guide?: string;
  whitepaper?: string;
  [key: string]: string | undefined;
}

export interface VideoAssets {
  hero_bg?: string;
  about_intro?: string;
  [key: string]: string | undefined;
}

export interface GalleryCategory {
  title: string;
  description?: string;
  images: GalleryImage[];
  subcategories?: Record<string, GalleryCategory>;
}

export interface GalleryImage {
  url: string;
  title: string;
  description?: string;
  date?: string;
  thumbnail?: string;
}

export interface MediaAssets {
  branding: BrandingAssets;
  documents: DocumentAssets;
  videos: VideoAssets;
  gallery: Record<string, GalleryCategory>;
}

export interface MediaContextType {
  assets: MediaAssets | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}
