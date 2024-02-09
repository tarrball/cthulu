import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { Video } from '../../data-contracts/video';

@Component({
  selector: 'app-video-card',
  template: `
    <ion-card>
      <img
        alt="Video thumbnail"
        class="w-100"
        [src]="video.thumbnailFeatured"
      />

      <ion-card-header>
        <ion-card-title>{{ video.title }}</ion-card-title>
        <ion-card-subtitle>Promoted Content</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        {{ video.description }}
      </ion-card-content>
    </ion-card>
  `,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
  ],
  standalone: true,
})
export class VideoCardComponent {
  @Input() video: Video = null!;
}
