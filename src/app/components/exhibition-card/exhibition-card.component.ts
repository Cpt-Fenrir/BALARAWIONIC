import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

import { Exhibition } from '../../models/catalog.models';
import {
  StatusChipComponent,
  StatusTone,
} from '../status-chip/status-chip.component';

@Component({
  selector: 'app-exhibition-card',
  templateUrl: './exhibition-card.component.html',
  styleUrls: ['./exhibition-card.component.scss'],
  imports: [IonIcon, RouterLink, StatusChipComponent],
})
export class ExhibitionCardComponent {
  readonly exhibition = input.required<Exhibition>();

  statusLabel(): string {
    const value = this.exhibition().status;
    return value === 'current'
      ? 'Current exhibition'
      : value === 'upcoming'
        ? 'Upcoming'
        : 'Past exhibition';
  }

  statusTone(): StatusTone {
    return this.exhibition().status === 'current'
      ? 'positive'
      : this.exhibition().status === 'upcoming'
        ? 'warning'
        : 'muted';
  }
}
