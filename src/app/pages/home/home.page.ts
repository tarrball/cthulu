import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonContent,
  IonSkeletonText,
  IonList,
  IonCardTitle,
  IonCardSubtitle,
  IonLabel,
  IonButton,
  IonModal,
  IonIcon, IonItem } from '@ionic/angular/standalone';
import { VideoService } from '../../services/video.service';
import { Video } from '../../data-contracts/video';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, 
    IonIcon,
    CommonModule,
    IonButton,
    IonLabel,
    IonCardSubtitle,
    IonCardTitle,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonList,
    IonModal,
    IonHeader,
    IonSkeletonText,
    IonToolbar,
    IonTitle,
  ],
})
export class HomePage {
  public videos$: Observable<Video[]>;

  constructor(videoService: VideoService) {
    this.videos$ = videoService.getVideos();

    addIcons({ ellipsisHorizontal });
  }
}
