import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal } from 'ionicons/icons';
import { Video } from '../../data-contracts/video';

@Component({
  selector: 'app-tall-video-button',
  template: `
    <div class="media-image position-relative">
      <ion-button
        class="position-absolute t-0 r-0"
        fill="clear"
        size="small"
        (click)="viewOptions.emit()"
      >
        <ion-icon
          color="light"
          name="ellipsis-horizontal"
          slot="icon-only"
        ></ion-icon>
      </ion-button>
      <img
        alt="Some alt text"
        [src]="video.thumbnailTall"
        (click)="viewDetails.emit()"
      />
    </div>
  `,
  styleUrls: ['./tall-video-button.component.scss'],
  imports: [IonButton, IonIcon],
  standalone: true,
})
export class TallVideoButtonComponent {
  @Input() video: Video = null!;

  @Output() viewDetails = new EventEmitter<void>();

  @Output() viewOptions = new EventEmitter<void>();

  constructor() {
    addIcons({ ellipsisHorizontal });
  }
}
