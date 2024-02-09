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
  IonIcon,
  IonItem,
} from '@ionic/angular/standalone';
import { VideoService } from '../../services/video.service';
import { Video } from '../../data-contracts/video';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal } from 'ionicons/icons';
import { VideoCardComponent } from '../../components/video-card/video-card.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SkeletonTextComponent } from './skeleton-text/skeleton-text.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonIcon,
    CommonModule,
    IonButton,
    IonContent,
    IonLabel,
    IonList,
    IonModal,
    IonHeader,
    IonSkeletonText,
    IonToolbar,
    IonTitle,
    SectionHeaderComponent,
    SkeletonTextComponent,
    VideoCardComponent,
  ],
})
export class HomePage {
  public videos$: Observable<Video[]>;

  constructor(videoService: VideoService) {
    this.videos$ = videoService.getVideos();

    addIcons({ ellipsisHorizontal });
  }
}
