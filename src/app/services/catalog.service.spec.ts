import { TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';

describe('CatalogService', () => {
  let service: CatalogService;

  beforeEach(() => {
    service = TestBed.inject(CatalogService);
  });

  it('provides the two approved public catalog modules', () => {
    expect(service.getArtworks().length).toBeGreaterThanOrEqual(2);
    expect(service.getExhibitions().length).toBeGreaterThanOrEqual(2);
  });

  it('filters artwork by a meaningful search term', () => {
    const results = service.filterArtworks('Pablo', 'all');

    expect(results).toHaveLength(1);
    expect(results[0].title).toBe('Pagbalik');
  });

  it('returns only artworks linked to an exhibition', () => {
    const results = service.getArtworksForExhibition(3);

    expect(results).toHaveLength(1);
    expect(results[0].title).toBe('Aryo ng Puso');
  });
});
