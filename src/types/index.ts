export interface Site {
  id: string;
  name: string;
  name_id?: string;
  description: string;
  description_id?: string;
  location: string;
  location_id?: string;
  coordinates: { lat: number; lng: number };
  modelUrl: string;
  posterUrl: string;
  thumbnailUrl: string;
}
