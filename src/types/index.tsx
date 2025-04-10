// src/types/index.ts
export interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  thumbnail?: string; // Ảnh thu nhỏ cho video
}

export interface Category {
  id: string;
  name: string;
  media: MediaItem[];
}