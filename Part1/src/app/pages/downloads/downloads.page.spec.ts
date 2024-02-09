import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsPage } from './downloads.page';

describe('DownloadsPage', () => {
  let component: DownloadsPage;
  let fixture: ComponentFixture<DownloadsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DownloadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
