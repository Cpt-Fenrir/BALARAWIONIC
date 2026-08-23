import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
} from '@ionic/angular';

import { ExhibitionCardComponent } from '../../components/exhibition-card/exhibition-card.component';
import { MobileNavComponent } from '../../components/mobile-nav/mobile-nav.component';
import { Exhibition, ExhibitionStatus } from '../../models/catalog.models';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.page.html',
  styleUrls: ['./exhibitions.page.scss'],
  imports: [
    ExhibitionCardComponent,
    IonContent,
    IonHeader,
    IonToolbar,
    MobileNavComponent,
    RouterLink,
  ],
})
export class ExhibitionsPage {
  private readonly catalogService = inject(CatalogService);

  selectedStatus: ExhibitionStatus | 'all' = 'all';
  readonly statusOptions: Array<{
    label: string;
    value: ExhibitionStatus | 'all';
  }> = [
    { label: 'All', value: 'all' },
    { label: 'Current', value: 'current' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Past', value: 'past' },
  ];

  get filteredExhibitions(): Exhibition[] {
    return this.catalogService.getExhibitions(this.selectedStatus);
  }

  selectStatus(status: ExhibitionStatus | 'all'): void {
    this.selectedStatus = status;
  }
}
