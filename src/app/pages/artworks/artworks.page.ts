import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from '@ionic/angular';

import { ArtworkCardComponent } from '../../components/artwork-card/artwork-card.component';
import { MobileNavComponent } from '../../components/mobile-nav/mobile-nav.component';
import { Artwork } from '../../models/catalog.models';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.page.html',
  styleUrls: ['./artworks.page.scss'],
  imports: [
    ArtworkCardComponent,
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonToolbar,
    MobileNavComponent,
    RouterLink,
  ],
})
export class ArtworksPage {
  private readonly catalogService = inject(CatalogService);

  searchTerm = '';
  selectedMedium = 'all';
  readonly mediums = this.catalogService.getMediums();

  get filteredArtworks(): Artwork[] {
    return this.catalogService.filterArtworks(
      this.searchTerm,
      this.selectedMedium,
    );
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedMedium = 'all';
  }
}
