import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

import { Artwork } from '../../models/catalog.models';
import {
  StatusChipComponent,
  StatusTone,
} from '../status-chip/status-chip.component';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss'],
  imports: [IonIcon, RouterLink, StatusChipComponent],
})
export class ArtworkCardComponent {
  readonly artwork = input.required<Artwork>();

  availabilityLabel(): string {
    const value = this.artwork().availability;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  availabilityTone(): StatusTone {
    return this.artwork().availability === 'available'
      ? 'positive'
      : this.artwork().availability === 'reserved'
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
