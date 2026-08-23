export type ArtworkAvailability = 'available' | 'reserved' | 'sold';

export interface Artwork {
  id: number;
  title: string;
  artist: string;
  medium: string;
  year: number;
  dimensions: string;
  description: string;
  price: number;
  availability: ArtworkAvailability;
  image: string;
  exhibitionIds: number[];
}

export type ExhibitionStatus = 'current' | 'upcoming' | 'past';

export interface Exhibition {
  id: number;
  name: string;
  venue: string;
  startDate: string;
  endDate: string;
  description: string;
  status: ExhibitionStatus;
  image: string;
  artworkIds: number[];
}
