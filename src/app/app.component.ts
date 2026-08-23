import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  arrowForwardOutline,
  calendarOutline,
  chevronForwardOutline,
  closeCircleOutline,
  homeOutline,
  imagesOutline,
  locationOutline,
  pricetagOutline,
  searchOutline,
  sparklesOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      arrowBackOutline,
      arrowForwardOutline,
      calendarOutline,
      chevronForwardOutline,
      closeCircleOutline,
      homeOutline,
      imagesOutline,
      locationOutline,
      pricetagOutline,
      searchOutline,
      sparklesOutline,
    });
  }
}
