import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonButton,
  IonIcon,
  IonLabel,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { Video } from '../../data-contracts/video';
import { MediaOptionType } from '../../data-contracts/media-option-type';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  arrowForwardCircleOutline,
  ellipsisHorizontal,
  shareOutline,
  thumbsDownOutline,
  thumbsUpOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-media-options',
  template: `
    <ion-list>
      <ion-item>
        <ion-label
          ><h1 class="ion-padding-top">{{ video.title }}</h1>
        </ion-label>
      </ion-item>

      @for (option of options; track $index) {
      <ion-item
        (click)="optionSelected.emit(option.name)"
        button="true"
        detail="false"
      >
        <ion-icon color="dark" [name]="option.icon" slot="start"></ion-icon>
        <ion-label>{{ option.name }}</ion-label>
      </ion-item>
      }
    </ion-list>
  `,
  styles: `
    h1 {
      text-align: center;
    }
  `,
  imports: [CommonModule, IonButton, IonIcon, IonItem, IonLabel, IonList],
  standalone: true,
})
export class MediaOptionsComponent {
  @Input() video: Video = null!;

  @Output() optionSelected = new EventEmitter<MediaOptionType>();

  public options: Option[] = [
    { name: 'Play', icon: 'arrow-forward-circle-outline' },
    { name: 'Go to Series Details', icon: 'arrow-forward-circle-outline' },
    { name: 'My Stuff', icon: 'add-circle-outline' },
    { name: 'Like', icon: 'thumbs-up-outline' },
    { name: 'Dislike', icon: 'thumbs-down-outline' },
    { name: 'Share', icon: 'share-outline' },
  ];

  constructor() {
    addIcons({
      addCircleOutline,
      arrowForwardCircleOutline,
      ellipsisHorizontal,
      shareOutline,
      thumbsDownOutline,
      thumbsUpOutline,
    });
  }
}

interface Option {
  name: MediaOptionType;
  icon: string;
}
