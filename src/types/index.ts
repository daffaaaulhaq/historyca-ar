export interface Site {
  id: string;
  nameKey: string; // Dulu: name
  descKey: string; // Dulu: description
  location: string;
  location_id?: string;
  coordinates: { lat: number; lng: number };
  modelUrl: string;
  posterUrl: string;
  thumbnailUrl: string;
}
