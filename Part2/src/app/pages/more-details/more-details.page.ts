import { Component, Input } from '@angular/core';
import {
  IonHeader,
  IonModal,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { Video } from '../../data-contracts/video';

@Component({
  selector: 'app-more-details',
  templateUrl: 'more-details.page.html',
  styleUrls: ['more-details.page.scss'],
  standalone: true,
  imports: [IonHeader, IonModal, IonToolbar, IonTitle, IonContent],
})
export class MoreDetailsPage {
  @Input() modal: IonModal = null!;

  @Input() video: Video = null!;

  public async closeModal() {
    await this.modal.dismiss();
  }
}
