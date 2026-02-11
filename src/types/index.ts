export interface Site {
  id: string;
  name: string;
  description: string;
  location: string;
  coordinates: { lat: number; lng: number };
  modelUrl: string;
  posterUrl: string;
  thumbnailUrl: string;
}
