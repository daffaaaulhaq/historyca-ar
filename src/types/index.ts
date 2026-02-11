export interface Site {
  id: string;
  nameKey: string; // Dulu: name
  descKey: string; // Dulu: description
  location: string;
  coordinates: { lat: number; lng: number };
  modelUrl: string;
  posterUrl: string;
  thumbnailUrl: string;
}
