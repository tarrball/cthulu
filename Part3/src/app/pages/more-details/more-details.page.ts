import { Component, Input } from '@angular/core';
import {
  IonHeader,
  IonModal,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonButton,
  IonIcon,
  IonNote,
  IonText,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { Video } from '../../data-contracts/video';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  closeCircleOutline,
  play,
  shareOutline,
  thumbsDownOutline,
  thumbsUpOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-more-details',
  templateUrl: 'more-details.page.html',
  styleUrls: ['more-details.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonText,
    IonNote,
    IonIcon,
    IonButton,
    IonLabel,
    IonHeader,
    IonModal,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class MoreDetailsPage {
  @Input() modal: IonModal = null!;

  @Input() video: Video = null!;

  public interactions: Interaction[] = [
    { name: 'My Stuff', icon: 'add-circle-outline' },
    { name: 'Share', icon: 'share-outline' },
    { name: 'Like', icon: 'thumbs-up-outline' },
    { name: 'Dislike', icon: 'thumbs-down-outline' },
  ];

  constructor() {
    addIcons({
      addCircleOutline,
      closeCircleOutline,
      play,
      shareOutline,
      thumbsDownOutline,
      thumbsUpOutline,
    });
  }

  public async closeModal() {
    await this.modal.dismiss();
  }
}

interface Interaction {
  name: string;
  icon: string;
}
