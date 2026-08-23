import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

import { MobileNavComponent } from '../../components/mobile-nav/mobile-nav.component';
import {
  StatusChipComponent,
  StatusTone,
} from '../../components/status-chip/status-chip.component';
import { Artwork } from '../../models/catalog.models';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.page.html',
  styleUrls: ['./artwork-detail.page.scss'],
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    MobileNavComponent,
    RouterLink,
    StatusChipComponent,
  ],
})
export class ArtworkDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly catalogService = inject(CatalogService);

  readonly artwork: Artwork | undefined = this.catalogService.getArtworkById(
    Number(this.route.snapshot.paramMap.get('id')),
  );

  availabilityLabel(artwork: Artwork): string {
    return artwork.availability.charAt(0).toUpperCase() + artwork.availability.slice(1);
  }

  availabilityTone(artwork: Artwork): StatusTone {
    return artwork.availability === 'available'
      ? 'positive'
      : artwork.availability === 'reserved'
        ? 'warning'
        : 'muted';
  }

  formatPrice(price: number): string {
    if (price <= 0) {
      return 'Price on request';
    }

    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(price);
  }
}
