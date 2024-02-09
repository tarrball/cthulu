import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMorePage } from './view-more.page';

describe('ViewMorePage', () => {
  let component: ViewMorePage;
  let fixture: ComponentFixture<ViewMorePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ViewMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
