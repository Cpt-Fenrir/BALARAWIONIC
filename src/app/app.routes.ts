import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'artworks',
    loadComponent: () =>
      import('./pages/artworks/artworks.page').then((m) => m.ArtworksPage),
  },
  {
    path: 'artworks/:id',
    loadComponent: () =>
      import('./pages/artwork-detail/artwork-detail.page').then(
        (m) => m.ArtworkDetailPage,
      ),
  },
  {
    path: 'exhibitions',
    loadComponent: () =>
      import('./pages/exhibitions/exhibitions.page').then(
        (m) => m.ExhibitionsPage,
      ),
  },
  {
    path: 'exhibitions/:id',
    loadComponent: () =>
      import('./pages/exhibition-detail/exhibition-detail.page').then(
        (m) => m.ExhibitionDetailPage,
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
