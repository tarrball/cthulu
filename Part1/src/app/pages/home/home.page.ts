import { Component, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonLabel,
  IonModal,
  IonItem,
} from '@ionic/angular/standalone';
import { VideoService } from '../../services/video.service';
import { Video } from '../../data-contracts/video';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal } from 'ionicons/icons';
import { VideoCardComponent } from '../../components/video-card/video-card.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { SkeletonTextComponent } from './skeleton-text/skeleton-text.component';
import { TallVideoButtonComponent } from '../../components/tall-video-button/tall-video-button.component';
import { MediaOptionsComponent } from '../../components/media-options/media-options.component';
import { MediaOptionType } from '../../data-contracts/media-option-type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonItem,
    IonContent,
    IonLabel,
    IonList,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    MediaOptionsComponent,
    SectionHeaderComponent,
    SkeletonTextComponent,
    TallVideoButtonComponent,
    VideoCardComponent,
  ],
})
export class HomePage {
  @ViewChild('mediaDetails') mediaDetails: IonModal = null!;

  @ViewChild('mediaOptions') mediaOptionsModal: IonModal = null!;

  public videos$: Observable<Video[]>;

  public selectedVideo: Video | null = null;

  constructor(videoService: VideoService) {
    this.videos$ = videoService.getVideos();

    addIcons({ ellipsisHorizontal });
  }

  public async showMediaOptions(video: Video) {
    this.selectedVideo = video;
    await this.mediaOptionsModal.present();
  }

  public async performOption(option: MediaOptionType) {
    console.log('Option selected:', option);

    await this.mediaOptionsModal.dismiss();

    if (option === 'Go to Series Details') {
      await this.mediaDetails.present();
    }
  }
}
