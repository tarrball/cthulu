import { TestBed } from '@angular/core/testing';

import { DownloadServiceTsService } from './download.service';

describe('DownloadServiceTsService', () => {
  let service: DownloadServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
