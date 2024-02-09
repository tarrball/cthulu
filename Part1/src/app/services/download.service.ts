import { Injectable } from '@angular/core';
import { Video } from '../data-contracts/video';

@Injectable({
  providedIn: 'root',
})
export class DownloadServiceTsService {
  private downloadedVideos: Video[] = [];

  constructor() {}
}
