import { Injectable } from '@angular/core';

import {
  Artwork,
  Exhibition,
  ExhibitionStatus,
} from '../models/catalog.models';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  private readonly artworks: Artwork[] = [
    {
      id: 1,
      title: 'Pygbalik',
      artist: 'Maria Santos',
      medium: 'Oil on Canvas',
      year: 2024,
      dimensions: 'Not listed in the public preview',
      description:
        'A featured work shown on the BALARAW capstone home page and reused here for the mobile gallery prototype.',
      price: 0,
      availability: 'available',
      image: 'assets/balaraw/work-1.jpg',
      exhibitionIds: [1],
    },
    {
      id: 2,
      title: 'Pegbalik',
      artist: 'Maria Santos',
      medium: 'Oil on Canvas',
      year: 2024,
      dimensions: 'Not listed in the public preview',
      description:
        'One of the capstone home page featured works, presented here using its original BALARAW image.',
      price: 0,
      availability: 'reserved',
      image: 'assets/balaraw/work-2.jpg',
      exhibitionIds: [1, 2],
    },
    {
      id: 3,
      title: 'Pagbalik',
      artist: 'Pablo Valle',
      medium: 'Oil on Canvas',
      year: 2024,
      dimensions: 'Not listed in the public preview',
      description:
        'A BALARAW featured work used to connect the Lab 1 catalog directly to the capstone presentation.',
      price: 0,
      availability: 'available',
      image: 'assets/balaraw/work-3.jpg',
      exhibitionIds: [1, 2],
    },
    {
      id: 4,
      title: 'Aryo ng Puso',
      artist: 'Juan Dela Cruz',
      medium: 'Acrylic on Canvas',
      year: 2024,
      dimensions: 'Not listed in the public preview',
      description:
        'A featured artwork from BALARAW’s public home collection, shown with the capstone’s original image.',
      price: 0,
      availability: 'sold',
      image: 'assets/balaraw/work-4.jpg',
      exhibitionIds: [3],
    },
  ];

  private readonly exhibitions: Exhibition[] = [
    {
      id: 1,
      name: 'Alter Ego',
      venue: 'Katha Art Space - Main Gallery',
      startDate: 'August 10, 2026',
      endDate: 'September 15, 2026',
      description:
        'The featured BALARAW exhibition highlighted through the capstone gallery collage.',
      status: 'current',
      image: 'assets/balaraw/feature-collage.jpg',
      artworkIds: [1, 2, 3],
    },
    {
      id: 2,
      name: 'New Roots',
      venue: 'Katha Art Space - Upper Hall',
      startDate: 'October 3, 2026',
      endDate: 'November 8, 2026',
      description:
        'Emerging voices reflect on home, identity, and the new forms created when traditions meet change.',
      status: 'upcoming',
      image: 'assets/balaraw/about-image.jpg',
      artworkIds: [2, 3],
    },
    {
      id: 3,
      name: 'Between Tides',
      venue: 'Katha Art Space - Project Room',
      startDate: 'May 2, 2026',
      endDate: 'June 14, 2026',
      description:
        'A past exhibition tracing movement, distance, and return through works inspired by water and travel.',
      status: 'past',
      image: 'assets/balaraw/hero-bg.jpg',
      artworkIds: [4],
    },
  ];

  getArtworks(): Artwork[] {
    return [...this.artworks];
  }

  getArtworkById(id: number): Artwork | undefined {
    return this.artworks.find((artwork) => artwork.id === id);
  }

  filterArtworks(searchTerm: string, medium: string): Artwork[] {
    const query = searchTerm.trim().toLowerCase();

    return this.artworks.filter((artwork) => {
      const matchesSearch =
        query === '' ||
        artwork.title.toLowerCase().includes(query) ||
        artwork.artist.toLowerCase().includes(query) ||
        artwork.medium.toLowerCase().includes(query);
      const matchesMedium = medium === 'all' || artwork.medium === medium;

      return matchesSearch && matchesMedium;
    });
  }

  getMediums(): string[] {
    return [...new Set(this.artworks.map((artwork) => artwork.medium))];
  }

  getExhibitions(status: ExhibitionStatus | 'all' = 'all'): Exhibition[] {
    return status === 'all'
      ? [...this.exhibitions]
      : this.exhibitions.filter((exhibition) => exhibition.status === status);
  }

  getExhibitionById(id: number): Exhibition | undefined {
    return this.exhibitions.find((exhibition) => exhibition.id === id);
  }

  getArtworksForExhibition(exhibitionId: number): Artwork[] {
    return this.artworks.filter((artwork) =>
      artwork.exhibitionIds.includes(exhibitionId),
    );
  }
}
