import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStuffPage } from './MyStuff.page';

describe('MyStuffPage', () => {
  let component: MyStuffPage;
  let fixture: ComponentFixture<MyStuffPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(MyStuffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
