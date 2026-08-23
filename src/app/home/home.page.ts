import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonIcon, IonToolbar } from '@ionic/angular';

import { MobileNavComponent } from '../components/mobile-nav/mobile-nav.component';
import { ArtworkCardComponent } from '../components/artwork-card/artwork-card.component';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonToolbar,
    ArtworkCardComponent,
    MobileNavComponent,
    RouterLink,
  ],
})
export class HomePage {
  private readonly catalogService = inject(CatalogService);

  readonly artworkCount = this.catalogService.getArtworks().length;
  readonly exhibitionCount = this.catalogService.getExhibitions().length;
  readonly featuredArtworks = this.catalogService.getArtworks().slice(0, 4);
}
