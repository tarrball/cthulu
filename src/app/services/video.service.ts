import { Injectable } from '@angular/core';
import { Video } from '../data-contracts/video';
import { generateMockVideos } from '../fakers/video.faker';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private videos$: Observable<Video[]>;

  constructor() {
    this.videos$ = of(generateMockVideos(50)).pipe(delay(1500));
  }

  public getVideos(): Observable<Video[]> {
    return this.videos$;
  }
}
