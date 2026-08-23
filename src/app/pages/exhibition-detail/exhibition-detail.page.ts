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

import { ArtworkCardComponent } from '../../components/artwork-card/artwork-card.component';
import { MobileNavComponent } from '../../components/mobile-nav/mobile-nav.component';
import {
  StatusChipComponent,
  StatusTone,
} from '../../components/status-chip/status-chip.component';
import { Artwork, Exhibition } from '../../models/catalog.models';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.page.html',
  styleUrls: ['./exhibition-detail.page.scss'],
  imports: [
    ArtworkCardComponent,
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
export class ExhibitionDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly catalogService = inject(CatalogService);

  readonly exhibition: Exhibition | undefined =
    this.catalogService.getExhibitionById(
      Number(this.route.snapshot.paramMap.get('id')),
    );
  readonly includedArtworks: Artwork[] = this.exhibition
    ? this.catalogService.getArtworksForExhibition(this.exhibition.id)
    : [];

  statusLabel(exhibition: Exhibition): string {
    return exhibition.status === 'current'
      ? 'Current exhibition'
      : exhibition.status === 'upcoming'
        ? 'Upcoming exhibition'
        : 'Past exhibition';
  }

  statusTone(exhibition: Exhibition): StatusTone {
    return exhibition.status === 'current'
      ? 'positive'
      : exhibition.status === 'upcoming'
        ? 'warning'
        : 'muted';
  }
}
