import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { Video } from '../../data-contracts/video';

@Component({
  selector: 'app-media-options',
  template: `
    <ion-list>
      <ion-item>
        <ion-label
          ><h1 class="ion-margin-top">{{ video.title }}</h1>
        </ion-label>
      </ion-item>

      @for (option of options; track $index) {
      <ion-item>{{ option.name }}</ion-item>
      }
    </ion-list>
  `,
  styles: `
    h1 {
      text-align: center;
    }
  `,
  imports: [CommonModule, IonItem, IonLabel, IonList],
  standalone: true,
})
export class MediaOptionsComponent {
  @Input() video: Video = null!;

  public options: Option[] = [
    { name: 'Play' },
    { name: 'Go to Series Details' },
    { name: 'My Stuff' },
    { name: 'Like' },
    { name: 'Dislike' },
    { name: 'Share' },
  ];
}

interface Option {
  name: string;
}
