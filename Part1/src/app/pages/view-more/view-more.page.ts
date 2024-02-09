import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { Video } from '../../data-contracts/video';
import { VideoService } from '../../services/video.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-more',
  templateUrl: 'view-more.page.html',
  styleUrls: ['view-more.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonLabel,
    IonItem,
    IonBackButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSkeletonText,
  ],
})
export class ViewMorePage {
  public videos$: Observable<Video[]>;

  constructor(videoService: VideoService) {
    this.videos$ = videoService.getVideos();
  }
}
