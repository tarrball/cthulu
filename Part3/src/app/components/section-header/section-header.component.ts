import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonLabel, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-section-header',
  template: `
    <div
      class="d-flex align-items-center justify-content-between ion-margin-horizontal ion-margin-top ion-padding-top"
    >
      <ion-label>{{ label }}</ion-label>
      <ion-button
        routerLink="/tabs/home/view-more"
        routerDirection="forward"
        (click)="viewMore.emit()"
        fill="clear"
        size="small"
        >View More</ion-button
      >
    </div>
  `,
  imports: [IonButton, IonLabel, IonRouterLink, RouterLink],
  standalone: true,
})
export class SectionHeaderComponent {
  @Input() label: string = null!;

  @Output() viewMore = new EventEmitter<void>();
}
