import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  public isSplashing = true;
  public animateIn = false;
  public isLaunching = false;
  public isLaunched = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isSplashing = false;

      setTimeout(() => {
        this.isLaunching = true;

        setTimeout(() => {
          this.isLaunched = true;
        }, 500);
      }, 1250);
    }, 1);
  }
}
