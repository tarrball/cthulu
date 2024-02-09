import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonSkeletonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-skeleton-text',
  template: `
    <div
      class="w-100 d-flex align-items-center justify-content-center ion-margin-top ion-padding"
      style="height: 250px"
    >
      <ion-skeleton-text animated class="w-100 h-100"></ion-skeleton-text>
    </div>

    @for (_ of [1,2]; track $index) {
    <div class="d-flex align-items-center ion-margin">
      <div class="d-flex align-items-center justify-content-between w-100">
        <ion-skeleton-text style="width: 100px"></ion-skeleton-text>
        <ion-skeleton-text style="width: 100px"></ion-skeleton-text>
      </div>
    </div>
    <div class="d-flex align-items-center ion-margin" style="width: 500px">
      @for (_ of [1,2,3,4]; track $index) {
      <ion-skeleton-text
        animated
        style="height: 125px; width: 100px; margin-right: 16px"
      ></ion-skeleton-text>
      }
    </div>
    }
  `,
  imports: [CommonModule, IonSkeletonText],
  standalone: true,
})
export class SkeletonTextComponent {}
