import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-stuff',
  templateUrl: 'my-stuff.page.html',
  styleUrls: ['my-stuff.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class MyStuffPage {
  constructor() {}
}
