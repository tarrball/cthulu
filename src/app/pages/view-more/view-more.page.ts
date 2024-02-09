import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-view-more',
  templateUrl: 'view-more.page.html',
  styleUrls: ['view-more.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class ViewMorePage {
  constructor() {}
}
